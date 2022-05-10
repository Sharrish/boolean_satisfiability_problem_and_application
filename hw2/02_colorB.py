"""
ДЗ№2. Задача№2.
Напишите генератор формулы colorB(n) в DIMACS формат для задачи о том, что
существует 2-раскраска положительных чисел от 1 до n такая, что для любого
целочисленного решения a^2 + b^2 = c^2 (1 <= a < b < c <= n) выполняется,
что a, b и c не имеют одинаковый цвет.
"""


from typing import List, Tuple


def get_list_of_abc_triple(n: int) -> List[Tuple]:
    """
    По числу n возвращает все тройки чисел a, b и c,
    т.ч. 1 <= a < b < c <= n и a^2 + b^2 = c^2.
    """
    list_of_abc_triple = []
    for a in range(1, n + 1):                 # 1 <= a <= n
        for b in range(a + 1, n + 1):         # a < b
            c = int((a**2 + b**2)**0.5)                   # a^2 + b^2 = c^2
            if c <= n and a**2 + b**2 == c**2:                        # 1 <= a < b < c <= n
                list_of_abc_triple.append((a, b, c)) # добавили переменнные x_a, x_b, x_c
    return list_of_abc_triple


def get_cnf_for_colorB(n: int) -> List[Tuple]:
    """
    По числу n возвращает список дизъюнктов для задачи ColorB.
    :param n: Количество чисел (n) для задачи ColorB.
    :return: Возвращает список дизъюнктов, входящих в КНФ.
    """
    list_of_abc_triple = get_list_of_abc_triple(n)
    cnf = []
    for x_a, x_b, x_c in list_of_abc_triple:
        # (-x_a ∨ -x_b ∨ -x_c) ∧ (x_a ∨ x_b ∨ x_c).
        cnf.append((-x_a, -x_b, -x_c))
        cnf.append((x_a, x_b, x_c))
    return cnf


def colorB(n: int) -> None:
    """
    Печатает на стандартный поток вывода КНФ для формулы colorB(n) в формате DIMACS.
    :param n: Количество чисел (n) для задачи ColorB.
    """
    cnf = get_cnf_for_colorB(n)
    print("c colorB({n})".format(n=n)) # комментарий
    print("p cnf {n} {m}".format(n=n, m=len(cnf))) # заголовок
    # Печать дизъюнктов.
    for disjunct in cnf:
        for x in disjunct:
            print(x, end=" ")
        print(0) # каждый дизъюнкт должен оканчиваться 0.


def main():
    """Основная программа для colorB(n)."""
    n = int(input("Введите количество чисел (n) для задачи ColorB:\n"))
    print()
    colorB(n)


if __name__ == '__main__':
    main()
