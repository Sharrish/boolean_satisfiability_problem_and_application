"""
Задача 2. Формула AtMostTwoB.
Модуль в каждой строке печатает дизъюнкт СКНФ формулы y_2 <-> AtMostTwoB.
"""


LOGIC_VALUES = 2


def AtMostTwoB(x1, x2, x3, x4, x5, z1, z2):
    return x1 + x2 + x3 + z1 + z2 <= 2 and (1 - z1) + (1 - z2) + x4 + x5 <= 2


def f(y2, x1, x2, x3, x4, x5, z1, z2):
    """ y_2 <-> AtMostTwoB. """
    return y2 == AtMostTwoB(x1, x2, x3, x4, x5, z1, z2)



if __name__ == '__main__':
    """ Построение СКНФ по формуле. """
    cnt_disjunct= 0
    variable = ['y2', 'x1', 'x2', 'x3', 'x4', 'x5', 'z1', 'z2']
    for y2 in range(LOGIC_VALUES):
        for x1 in range(LOGIC_VALUES):
            for x2 in range(LOGIC_VALUES):
                for x3 in range(LOGIC_VALUES):
                    for x4 in range(LOGIC_VALUES):
                        for x5 in range(LOGIC_VALUES):
                            for z1 in range(LOGIC_VALUES):
                                for z2 in range(LOGIC_VALUES):
                                    if not f(y2, x1, x2, x3, x4, x5, z1, z2):
                                        cnt_disjunct += 1
                                        for i, v in enumerate(variable):
                                            if (not globals()[v]):
                                                print(v, end=" ")
                                            else:
                                                print("-{}".format(v), end=" ")
                                            if (i != len(variable) - 1):
                                                print("v ", end="")
                                        print()
    print("Всего дизъюнктов в КНФ: {}".format(cnt_disjunct))