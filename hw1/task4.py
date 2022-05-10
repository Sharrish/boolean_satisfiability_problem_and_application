import pycosat


cnf = []
LOGIC_VALUES = 2


def AtMostTwoA(x1, x2, x3, x4, x5):
    return x1 + x2 + x3 + x4 + x5 <= 2


def AtMostTwoB(x1, x2, x3, x4, x5, z1, z2):
    return x1 + x2 + x3 + z1 + z2 <= 2 and (1 - z1) + (1 - z2) + x4 + x5 <= 2


def f1(y1, x1, x2, x3, x4, x5):
    """ y_1 <-> AtMostTwoA. """
    return y1 == AtMostTwoA(x1, x2, x3, x4, x5)


def f2(y2, x1, x2, x3, x4, x5, z1, z2):
    """ y_2 <-> AtMostTwoB. """
    return y2 == AtMostTwoB(x1, x2, x3, x4, x5, z1, z2)


def get_cnf_f1():
    " CNF for y_1 <-> AtMostTwoA. "
    variables = {'y1': 8, 'x1': 1, 'x2': 2, 'x3': 3, 'x4': 4, 'x5': 5}
    x_vars = ['x1', 'x2', 'x3', 'x4', 'x5']
    for i in range(len(x_vars)):
        for j in range(i + 1, len(x_vars)):
            for k in range(j + 1, len(x_vars)):
                disjunct = []
                disjunct.append(variables[x_vars[i]])
                disjunct.append(variables[x_vars[j]])
                disjunct.append(variables[x_vars[k]])
                disjunct.append(variables['y1'])
                cnf.append(disjunct)
                disjunct = []
                disjunct.append(-variables[x_vars[i]])
                disjunct.append(-variables[x_vars[j]])
                disjunct.append(-variables[x_vars[k]])
                disjunct.append(-variables['y1'])
                cnf.append(disjunct)


def get_cnf_f2():
    " CNF for y_2 <-> AtMostTwoB. "
    variables = {'y2': 9, 'x1': 1, 'x2': 2, 'x3': 3, 'x4': 4, 'x5': 5, 'z1': 6, 'z2': 7}
    for y2 in range(LOGIC_VALUES):
        for x1 in range(LOGIC_VALUES):
            for x2 in range(LOGIC_VALUES):
                for x3 in range(LOGIC_VALUES):
                    for x4 in range(LOGIC_VALUES):
                        for x5 in range(LOGIC_VALUES):
                            for z1 in range(LOGIC_VALUES):
                                for z2 in range(LOGIC_VALUES):
                                    if not f2(y2, x1, x2, x3, x4, x5, z1, z2):
                                        disjunct = []
                                        for k, v in variables.items():
                                            if (not locals()[k]):
                                                disjunct.append(v)
                                            else:
                                                disjunct.append(-v)
                                        cnf.append(disjunct)


if __name__ == '__main__':
    get_cnf_f1()
    get_cnf_f2()

    # (-y1 and y2)
    cnf.append([-8])
    cnf.append([9])

    print(pycosat.solve(cnf))
