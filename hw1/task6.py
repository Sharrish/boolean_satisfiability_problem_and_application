"""
Рассмотрим квадратную таблицу 10x10 и все возможные прямоугольники внутри сетки, длина и ширина которых не менее 2.
Cуществует ли раскраска сетки с использованием трех цветов, чтобы ни один такой прямоугольник не имел одинакового
цвета в своих четырех углах.
"""


import pycosat


MIN_RECTANGLE_SIDE_LENGTH = 2
TABLE_SIZE = 10
CNT_COLORS = 3


cnf = []


def code_variable(i, j, k):
    """ По индексам i, j и цвету переменной k возвращает её номер при кодировании в КНФ. """
    return (TABLE_SIZE * TABLE_SIZE * (k - 1)) + (i - 1) * TABLE_SIZE + j


def decode_variable(v):
    """ По номеру переменной возвращает индексы i, j и цвету переменной k. """
    all_size = TABLE_SIZE * TABLE_SIZE
    k = v // all_size + (v % all_size != 0)
    v -= all_size * (k - 1)
    i = v // TABLE_SIZE + (v % TABLE_SIZE != 0)
    v -= TABLE_SIZE * (i - 1)
    j = v
    return (i, j, k)


def table_coloring():
    """ Добавляет дизъюнкты, обеспечивающие корректную раскраску таблицы. """
    for i in range(1, TABLE_SIZE + 1):
        for j in range(1, TABLE_SIZE + 1):
            for k in range(1, CNT_COLORS + 1):
                for l in range(k + 1, CNT_COLORS + 1):
                    cnf.append([-code_variable(i, j, k), -code_variable(i, j, l)])
            tmp_cnf = []
            for c in range(1, CNT_COLORS + 1):
                tmp_cnf.append(code_variable(i, j, c))
            cnf.append(tmp_cnf)


def rectangles_condition():
    """ Добавляет дизъюнкты, обеспечивающие, что нет прямоугольника с углами одного цвета. """
    for a1 in range(1, TABLE_SIZE + 1):
        for a2 in range(a1 + 1, TABLE_SIZE + 1):
            for b1 in range(1, TABLE_SIZE + 1):
                for b2 in range(b1 + 1, TABLE_SIZE + 1):
                    for k in range(1, CNT_COLORS + 1):
                        cnf.append([-code_variable(a1, b1, k), -code_variable(a1, b2, k),
                                    -code_variable(a2, b1, k), -code_variable(a2, b2, k)])


if __name__ == '__main__':
    table_coloring()
    rectangles_condition()

    ans_solver = pycosat.solve(cnf)

    table = [[""] * (TABLE_SIZE + 1) for i in range(TABLE_SIZE + 1)]
    if ans_solver != "UNSAT":
        for v in ans_solver:
            if (v > 0):
                i, j, k = decode_variable(v)
                if k == 1:
                    table[i][j] = '🟦'
                elif k == 2:
                    table[i][j] = '🟩'
                elif k == 3:
                    table[i][j] = '🟥'
        for i in range(1, TABLE_SIZE + 1):
            for j in range(1, TABLE_SIZE + 1):
                print(table[i][j], end='')
            print()
    else:
        print(ans_solver)

