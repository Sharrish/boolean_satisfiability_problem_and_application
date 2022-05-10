"""
Напишите общий генератор DIMACS для головоломок n-судоку, т.е. для пустого поля.
"""



from typing import List, Tuple


cnf = []


def code_variable(i, j, k, n):
    """По индексу числу k, записанном в клетке i, j возвращает её номер переменной при кодировании в КНФ."""
    sudoku_size = n**2
    return (i - 1) * sudoku_size * sudoku_size + (j - 1) * sudoku_size + k


def decode_variable(v, n):
    """По номеру переменной в КНФ возвращает индексы i, j и k."""
    sudoku_size = n**2
    all_size = sudoku_size * sudoku_size
    i = v // all_size + (v % all_size != 0)
    v -= all_size * (i - 1)
    j = v // sudoku_size + (v % sudoku_size != 0)
    v -= sudoku_size * (j - 1)
    k = v
    return (i, j, k)


def at_least_one_in_cell(n):
    """Добавляет дизъюнкты, для условия, что
    в каждой клетке n-судоку должно быть хотя бы одно значение от 1 до n^2."""
    sudoku_size = n ** 2
    for i in range(1, sudoku_size + 1):
        for j in range(1, sudoku_size + 1):
            tmp_cnf = []
            for k in range(1, sudoku_size + 1):
                tmp_cnf.append(code_variable(i, j, k, n))
            cnf.append(tmp_cnf)


def at_most_one_in_cell(n):
    """Добавляет дизъюнкты, для условия, что
    в каждой клетке n-судоку должно быть не более одного значения от 1 до n^2."""
    sudoku_size = n ** 2
    for i in range(1, sudoku_size + 1):
        for j in range(1, sudoku_size + 1):
            for k in range(1, sudoku_size + 1):
                for l in range(k + 1, sudoku_size + 1):
                    cnf.append([-code_variable(i, j, k, n), -code_variable(i, j, l, n)])


def all_numbers_in_row(n):
    """Добавляет дизъюнкты, для условия, что в каждой строчке есть все числа от 1 до n^2."""
    sudoku_size = n ** 2
    for i in range(1, sudoku_size + 1):
        for k in range(1, sudoku_size + 1):
            tmp_cnf = []
            for j in range(1, sudoku_size + 1):
                tmp_cnf.append(code_variable(i, j, k, n))
            cnf.append(tmp_cnf)


def all_numbers_in_column(n):
    """Добавляет дизъюнкты, для условия, что в каждом столбце есть все числа от 1 до n^2."""
    sudoku_size = n ** 2
    for j in range(1, sudoku_size + 1):
        for k in range(1, sudoku_size + 1):
            tmp_cnf = []
            for i in range(1, sudoku_size + 1):
                tmp_cnf.append(code_variable(i, j, k, n))
            cnf.append(tmp_cnf)


def all_numbers_in_square(n):
    """Добавляет дизъюнкты, для условия, что в каждом квадрате есть все числа от 1 до n^2."""
    sudoku_size = n ** 2
    for i0 in range(0, n):
        for j0 in range(0, n):
            for k in range(1, sudoku_size + 1):
                tmp_cnf = []
                for i in range(1, n + 1):
                    for j in range(1, n + 1):
                        tmp_cnf.append(code_variable(i0 * n + i, j0 * n + j, k, n))
                cnf.append(tmp_cnf)


def print_dimacs_format(n):
    """Выводит DIMACS формат для головоломок n-судоку."""
    # Счиаем общее число переменных.
    st = set()
    for disjunct in cnf:
        for x in disjunct:
            st.add(abs(x))

    print("c sudoku({n})".format(n=n))  # комментарий
    print("p cnf {} {}".format(len(st), len(cnf)))  # заголовок
    # Печать дизъюнктов.
    for disjunct in cnf:
        for x in disjunct:
            print(x, end=" ")
        print(0)  # каждый дизъюнкт должен оканчиваться 0.


def main():
    """Основная программа для генерации n-судоку."""
    n = int(input("Введите число n характеризующее n-судоку:\n"))
    print()
    at_least_one_in_cell(n)
    at_most_one_in_cell(n)
    all_numbers_in_row(n)
    all_numbers_in_column(n)
    all_numbers_in_square(n)
    print_dimacs_format(n)
    ans_solver = pycosat.solve(cnf)


if __name__ == '__main__':
    main()
