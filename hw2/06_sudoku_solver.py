"""
Рассмотрим три приведенных поля судоку на рисунке 2. Какие из них
выполнимы? Перечислите все удовлетворяющие оценки полей в виде списка истинных
литералов.
"""


import pycosat
from typing import List, Tuple


cnf = []
cases = [
    [[1, 1, 2], [2, 3, 3], [3, 4, 1], [4, 3, 2]],
    [[1, 1, 2], [2, 3, 3], [3, 4, 1], [4, 2, 1]],
    [[1, 1, 2], [2, 3, 3], [3, 4, 1], [4, 2, 3]],
]


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


def read_values_in_start_sudoku(n):
    m = int(input("Введите количество чисел в изначальном судоку:\n"))
    for _ in range(m):
        i, j, k = eval(input("Введите i, j, k - координаты клетки и число в ней:\n"))
        cnf.append([code_variable(i, j, k, n)])


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
    # n = int(input("Введите число n характеризующее n-судоку:\n"))
    # read_values_in_start_sudoku(n)
    # print()
    global cnf
    n = 2
    for i, case in enumerate(cases):
        print("__________________________________________")
        print("Судоку №{}:".format(i + 1))
        cnf = []
        for i, j, k in case:
            cnf.append([code_variable(i, j, k, n)])
        at_least_one_in_cell(n)
        at_most_one_in_cell(n)
        all_numbers_in_row(n)
        all_numbers_in_column(n)
        all_numbers_in_square(n)
        ans_solver = pycosat.solve(cnf)
        have_solution = False
        while ans_solver != "UNSAT":
            have_solution = True
            table = [[""] * (n**2 + 1) for _ in range(n**2 + 1)]
            print("SAT ✅")
            for v in ans_solver:
                if v > 0:
                    i, j, k = decode_variable(v, n)
                    table[i][j] = k
            for i in range(1, n**2 + 1):
                for j in range(1, n**2 + 1):
                    print(table[i][j], end='')
                print()
            print()
            cnf.append([-v for v in ans_solver]) # для того, чтобы вывести другие решения
            ans_solver = pycosat.solve(cnf)
        if not have_solution:
            print(ans_solver, "❌")


if __name__ == '__main__':
    main()
