"""
ДЗ№2. Задача№1.
Напишите генератор формулы colorA(n) в формате DIMACS для задачи о том, что
существует 2-раскраска положительных чисел от 1 до n такая, что для любого
целочисленного решения a + b = c т.ч. 1 <= a < b < c <= n выполняется,
что a, b и c не имеют одинаковый цвет.
"""


from typing import List, Tuple


def get_list_of_abc_triple(n: int) -> List[Tuple]:
    """
    По числу n возвращает все тройки чисел a, b и c,
    т.ч. 1 <= a < b < c <= n и a + b = c.
    """
    list_of_abc_triple = []
    for a in range(1, n + 1):           # 1 <= a <= n
        for b in range(a + 1, n + 1):   # a < b
            c = a + b                   # a + b = c
            if c <= n:                  # 1 <= a < b < c <= n
                list_of_abc_triple.append((a, b, c)) # добавили переменнные x_a, x_b, x_c
    return list_of_abc_triple


def get_cnf_for_colorA(n: int) -> List[Tuple]:
    """
    По числу n возвращает список дизъюнктов для задачи ColorA.
    :param n: Количество чисел (n) для задачи ColorA.
    :return: Возвращает список дизъюнктов, входящих в КНФ.
    """
    list_of_abc_triple = get_list_of_abc_triple(n)
    cnf = []
    for x_a, x_b, x_c in list_of_abc_triple:
        # (-x_a ∨ -x_b ∨ -x_c) ∧ (x_a ∨ x_b ∨ x_c).
        cnf.append((-x_a, -x_b, -x_c))
        cnf.append((x_a, x_b, x_c))
    return cnf


def colorA(n: int) -> None:
    """
    Печатает на стандартный поток вывода КНФ для формулы colorA(n) в формате DIMACS.
    :param n: Количество чисел (n) для задачи ColorA.
    """
    cnf = get_cnf_for_colorA(n)
    print("c colorA({n})".format(n=n)) # комментарий
    print("p cnf {n} {m}".format(n=n, m=len(cnf))) # заголовок
    # Печать дизъюнктов.
    for disjunct in cnf:
        for x in disjunct:
            print(x, end=" ")
        print(0) # каждый дизъюнкт должен оканчиваться 0.


def main():
    """Основная программа для colorA(n)."""
    n = int(input("Введите количество чисел (n) для задачи ColorA:\n"))
    print()
    colorA(n)


if __name__ == '__main__':
    main()
