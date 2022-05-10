"""
Задача 1. Формула AtMostTwoA.
Модуль в каждой строке печатает дизъюнкт СКНФ формулы y_1 <-> AtMostTwoA.
"""


if __name__ == '__main__':
    """ Построение СКНФ по формуле. """
    d = {
        'x1': 1,
        'x2': 2,
        'x3': 3,
        'x4': 4,
        'x5': 5,
        'y1': 6,
    }
    x_vars = ['x1', 'x2', 'x3', 'x4', 'x5']
    cnt_disjunct = 0
    for i in range(len(x_vars)):
        for j in range(i + 1, len(x_vars)):
            for k in range(j + 1, len(x_vars)):
                cnt_disjunct += 1
                print("{} v {} v {} v {}".format(x_vars[i], x_vars[j], x_vars[k], "y1"))
                cnt_disjunct += 1
                print("-{} v -{} v -{} v -{}".format(x_vars[i], x_vars[j], x_vars[k], "y1"))
    print("Всего дизъюнктов в КНФ: {}".format(cnt_disjunct))