#! /Users/sait/.pyenv/versions/3.10.0/bin/python3.10


import os
import z3
import sys
import json
from typing import List, Tuple


INPUT_PATH = "input"
TRACE_PATH = "trace"
TMP_JSON_PATH = "tmp.json"
MY_EXIT_CODE = 777


def get_curr_trace_lines() -> List[str]:
    """Возвращает список строк текущей трассы."""
    print("---------- Чтение текущей трассы ----------", file=sys.stderr)
    curr_trace = []
    with open(TRACE_PATH) as fin:
        curr_trace = fin.readlines()
    return curr_trace


def load_prev_iteration_data() -> Tuple[List[str], List[str]]:
    """Возвращает промежуточную информацию из временного json файла."""
    past_traces = []
    future_inputs = []
    if TMP_JSON_PATH in os.listdir():
        print("---------- Загрузка временных файлов ----------", file=sys.stderr)
        with open(TMP_JSON_PATH) as fin:
            tmp_dict = json.load(fin)
            past_traces = tmp_dict['past_traces']
            future_inputs = tmp_dict['future_inputs']
    return past_traces, future_inputs


def save_curr_iteration_data(past_traces, future_inputs) -> None:
    """Сохраняет past_traces, future_inputs в временный json файл."""
    with open(TMP_JSON_PATH, 'w') as fout:
        print("---------- Сохранение временных файлов ----------", file=sys.stderr)
        tmp_dict = {'past_traces': past_traces, 'future_inputs': future_inputs}
        json.dump(tmp_dict, fout)


def delete_all_tmp_files():
    """Удаляет все временные файлы."""
    print("---------- Удаление временных файлов ----------", file=sys.stderr)
    if INPUT_PATH in os.listdir():
        os.remove(INPUT_PATH)
    if TMP_JSON_PATH in os.listdir():
        os.remove(TMP_JSON_PATH)


def finish_this_test():
    """
    Если движок не может сгенерироват новый input, то он должен
    закончить свою работу с кодом возврата, не равным нулю
    """
    delete_all_tmp_files()
    print("---------- Завершение текущего теста ----------", file=sys.stderr)
    exit(MY_EXIT_CODE)


def get_arguments_from_brackets(brackets_line: str, i: int) -> str:
    """Возвращает i-ый аргумент из скобок (_,_)."""
    if i == 0:
        return brackets_line.split('(')[1].split(',')[0]
    elif i == 1:
        return brackets_line.split('(')[1].split(',')[1].split(')')[0]


def get_all_vars_name_from_curr_trace(curr_trace_lines: List[str]) -> set:
    """Возвращает мно-во всех переменных, встречающихся в данной трассе."""
    curr_trace_all_vars_names = set()  # мно-во всех переменных, встречающихся в данной трассе
    for line in curr_trace_lines:
        if "(int)" in line:  # значит это переменная
            new_vars_name = get_arguments_from_brackets(brackets_line=line.split('(int)')[1], i=0)
            curr_trace_all_vars_names.add(new_vars_name)
    return curr_trace_all_vars_names


def this_line_is_condition(line: str) -> bool:
    """Возвращает True, если эта строка условия с if или else."""
    return 'then' in line or 'else' in line


def this_line_is_binary_operation(line: str) -> bool:
    """Возвращает True, если эта строка с бинарной операцией."""
    return line.count('(') == 3


def get_binary_operation_addresses(line: str) -> Tuple[str, str, str]:
    left_address = line.split('(')[1].split(',')[0]
    right_address1 = line.split('(')[2].split(',')[0]
    right_address2 = line.split('(')[3].split(',')[0]

    return left_address, right_address1, right_address2


def get_unary_operation_addresses(line: str) -> Tuple[str, str, str]:
    left_address = line.split('(')[1].split(',')[0]
    right_address = line.split('(')[2].split(',')[0]
    right_value = line.split(',')[2].split(')')[0]

    return left_address, right_address, right_value


def get_addresses_from_condition(line: str) -> Tuple[str, str]: # then:6 (4,100) == (5,100)
    left_address = line.split('(')[1].split(',')[0]
    right_address = line.split('(')[2].split(',')[0]

    return left_address, right_address


def get_condition_from_line(line: str, curr_trace_addresses: dict, left_address: str, right_address: str):
    if '==' in line:
        condition = curr_trace_addresses[left_address] == curr_trace_addresses[right_address]
    elif '!=' in line:
        condition = curr_trace_addresses[left_address] != curr_trace_addresses[right_address]
    elif '<=' in line:
        condition = curr_trace_addresses[left_address] <= curr_trace_addresses[right_address]
    elif '>=' in line:
        condition = curr_trace_addresses[left_address] >= curr_trace_addresses[right_address]
    elif '<' in line:
        condition = curr_trace_addresses[left_address] < curr_trace_addresses[right_address]
    elif '>' in line:
        condition = curr_trace_addresses[left_address] > curr_trace_addresses[right_address]
    return condition


def is_line_with_condition_without_var(curr_trace_addresses: dict, left_address: str, right_address: str) -> bool:
    return isinstance(curr_trace_addresses[left_address], int) and isinstance(curr_trace_addresses[right_address], int)


def this_line_has_unary_minus(line: str) -> bool:
    return '- (' in line


def inverse_binary_condition(line: str) -> str:
    if line == "1":
        return "0"
    elif line == "0":
        return "1"


def get_new_input_from_solver(my_solver, curr_trace_all_vars_names):
    new_input = "sat\n"
    vars = {}
    m = my_solver.model()
    for d in m.decls():
        vars[d.name()] = f'(= {d.name()} {m[d]})'
    for var_name in curr_trace_all_vars_names:
        if var_name not in vars:
            vars[var_name] = f'(= {var_name} 0)'
    new_input += "\n".join(map(lambda x: x[1], sorted(list(vars.items()), key=lambda x: x[0])))
    return new_input


def process_curr_trace(past_traces, future_inputs):
    """Обработка текущей трасы."""
    curr_trace_lines = get_curr_trace_lines()  # список строк текущей трассы

    # Мно-во всех переменных, встречающихся в данной трассе.
    curr_trace_all_vars_names = get_all_vars_name_from_curr_trace(curr_trace_lines)
    binary_curr_trace_conditions = "" # if -- 1, else -- 0
    curr_trace_addresses = {}  # что хранится под адрессами в трасе в текущей момент
    curr_trace_conditions = [] # список всех условий с переменными в данной трассе

    for line in curr_trace_lines:
        if '(int)' in line: # например (8,_) = (int)(x2,_), когда есть переменная
            var_address = line.split('(')[1].split(',')[0]
            var_name = line.split('(int)')[1].split('(')[1].split(',')[0]
            curr_trace_addresses[var_address] = z3.Int(var_name) # специальная переменная в z3 с таким названием

        elif this_line_is_condition(line): # например, когда then:6 (4,100) == (5,100)
            left_address, right_address = get_addresses_from_condition(line)

            # Над данным condition мы не властны
            if is_line_with_condition_without_var(curr_trace_addresses, left_address, right_address):
                continue

            condition = get_condition_from_line(line, curr_trace_addresses, left_address, right_address)

            if 'then' in line:
                curr_trace_conditions.append(condition)
                binary_curr_trace_conditions += "1"
            else: # для else надо добавить условие с отрицанием
                curr_trace_conditions.append(z3.Not(condition))
                binary_curr_trace_conditions += "0"

            it_is_new_trace = True
            for past_trace in past_traces:
                if past_trace.startswith(binary_curr_trace_conditions):
                    it_is_new_trace = False

            if it_is_new_trace: # ранее не встречали трасс с такими условиями

                my_solver = z3.Solver()
                for cond in curr_trace_conditions[:-1]: # добавляем все текущие условия
                    my_solver.add(cond)
                my_solver.add(z3.Not(curr_trace_conditions[-1]))

                # Чтобы в следующий раз эту трассу не рассматривать.
                past_traces.append(binary_curr_trace_conditions[:-1] + inverse_binary_condition(binary_curr_trace_conditions[-1]))



                if my_solver.check() == z3.sat: # SAT, генерируем соответсвующий input

                    new_input = get_new_input_from_solver(my_solver, curr_trace_all_vars_names)
                    future_inputs.append(new_input)

        elif this_line_is_binary_operation(line): # например (11,_) = (10,2) * (2,-10)
            left_address, right_address1, right_address2 = get_binary_operation_addresses(line)
            if '*' in line:
                curr_trace_addresses[left_address] = curr_trace_addresses[right_address1] * curr_trace_addresses[right_address2]
            elif '+' in line:
                curr_trace_addresses[left_address] = curr_trace_addresses[right_address1] + curr_trace_addresses[right_address2]
            elif ") - (" in line: # это минус '-', но его надо аккуратнее обработать
                print()
                curr_trace_addresses[left_address] = curr_trace_addresses[right_address1] - curr_trace_addresses[right_address2]

        else: # унарная операция, без переменных, например, (4,_) = (8,1)
            left_address, right_address, right_value = get_unary_operation_addresses(line)
            if right_address != '0': # не константа
                right_value = curr_trace_addresses[right_address]
                if this_line_has_unary_minus(line):
                    right_value = -curr_trace_addresses[right_address]
            else:
                right_value = int(right_value)
                if this_line_has_unary_minus(line):
                    right_value = -int(right_value)
            curr_trace_addresses[left_address] = right_value


def create_new_input(future_inputs):
    """
    По трассе ваш движок должен сгенерировать новый input, такой
    что будет покрыт новый путь выполнения программы.
    """
    print("---------- Запись нового input ----------", file=sys.stderr)
    with open(INPUT_PATH, "w") as fout:
        first_future_input = future_inputs.pop(0)
        print(first_future_input, file=fout)


def main():
    """Главная функция, выполняющаяся при запуске скрипта."""
    past_traces, future_inputs = load_prev_iteration_data() # загрузка информации с предыдущих итераций
    process_curr_trace(past_traces, future_inputs)          # обработка текущей трассы
    if len(future_inputs) > 0: # значит нужны еще итерации, для которых следует создать input
        print("Длина списка future_inputs = {}".format(len(future_inputs)), file=sys.stderr)
        # По трассе ваш движок должен сгенерировать новый input, такой что будет покрыт новый путь выполнения программы.
        create_new_input(future_inputs)
        save_curr_iteration_data(past_traces, future_inputs) # сохраняем промежуточную информацию
    else: # все ветки пройдены, удаляем временные файлы и завершаем этот тест
        finish_this_test()


if __name__ == "__main__":
    main()
