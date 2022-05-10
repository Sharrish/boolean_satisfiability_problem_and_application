J$.iids = {"8":[12,9,12,21],"9":[1,1,1,20],"10":[5,12,5,17],"16":[11,5,11,12],"17":[1,1,1,20],"18":[9,13,9,21],"25":[2,1,2,21],"26":[9,13,9,29],"33":[2,1,2,21],"34":[9,13,9,33],"41":[5,12,5,13],"42":[11,5,11,12],"49":[5,16,5,17],"50":[12,15,12,21],"57":[5,12,5,17],"58":[12,9,12,21],"65":[5,5,5,18],"73":[4,1,6,2],"81":[4,1,6,2],"89":[4,1,6,2],"97":[8,9,8,15],"105":[8,9,8,17],"113":[8,23,8,29],"121":[8,23,8,31],"129":[8,9,8,17],"137":[8,9,8,17],"145":[8,23,8,31],"153":[8,23,8,31],"161":[9,1,9,8],"169":[9,13,9,17],"177":[9,20,9,21],"185":[9,24,9,29],"193":[9,32,9,33],"201":[9,1,9,34],"203":[9,1,9,12],"209":[9,1,9,35],"217":[10,9,10,12],"225":[10,13,10,14],"233":[10,9,10,15],"241":[10,9,10,15],"249":[10,9,10,15],"257":[11,5,11,6],"265":[11,11,11,12],"273":[12,9,12,10],"281":[12,15,12,16],"289":[12,19,12,21],"297":[13,9,13,16],"305":[13,21,13,37],"313":[13,9,13,38],"315":[13,9,13,20],"321":[13,9,13,39],"329":[15,9,15,16],"337":[15,21,15,46],"345":[15,9,15,47],"347":[15,9,15,20],"353":[15,9,15,48],"361":[1,1,18,1],"369":[1,1,1,20],"377":[1,1,18,1],"385":[2,1,2,21],"393":[1,1,18,1],"401":[4,1,6,2],"409":[1,1,18,1],"417":[1,1,18,1],"425":[1,1,18,1],"433":[1,1,18,1],"441":[1,1,1,20],"449":[1,1,1,20],"457":[2,1,2,21],"465":[2,1,2,21],"473":[4,1,6,2],"481":[4,1,6,2],"489":[12,5,16,6],"497":[11,1,17,2],"505":[1,1,18,1],"513":[1,1,18,1],"nBranches":4,"originalCodeFileName":"/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/testme.js","instrumentedCodeFileName":"/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/testme_jalangi_.js","code":"function fetch() {}\nfunction prompt() {}\n\nfunction dbl(x) {\n    return 2 * x;\n}\n\nvar x = prompt(), y = prompt();\nconsole.log(\"x=\" + x + \" y=\" + y);\nvar z = dbl(x);\nif (z === y) {\n    if (x !== y + 10) {\n        console.log(\"I am fine here\");\n    } else {\n        console.log(\"I should not reach here\");\n    }\n}\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(361, '/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/testme_jalangi_.js', '/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/testme.js');
            function fetch() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(9, arguments.callee, this, arguments);
                            arguments = J$.N(17, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(441, J$e);
                        } finally {
                            if (J$.Fr(449))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function prompt() {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(25, arguments.callee, this, arguments);
                            arguments = J$.N(33, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(457, J$e);
                        } finally {
                            if (J$.Fr(465))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function dbl(x) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(73, arguments.callee, this, arguments);
                            arguments = J$.N(81, 'arguments', arguments, 4);
                            x = J$.N(89, 'x', x, 4);
                            return J$.X1(65, J$.Rt(57, J$.B(10, '*', J$.T(41, 2, 22, false), J$.R(49, 'x', x, 0), 0)));
                        } catch (J$e) {
                            J$.Ex(473, J$e);
                        } finally {
                            if (J$.Fr(481))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fetch = J$.N(377, 'fetch', J$.T(369, fetch, 12, false, 9), 0);
            prompt = J$.N(393, 'prompt', J$.T(385, prompt, 12, false, 25), 0);
            dbl = J$.N(409, 'dbl', J$.T(401, dbl, 12, false, 73), 0);
            J$.N(417, 'x', x, 0);
            J$.N(425, 'y', y, 0);
            J$.N(433, 'z', z, 0);
            var x = J$.X1(137, J$.W(129, 'x', J$.F(105, J$.R(97, 'prompt', prompt, 1), 0)(), x, 3)), y = J$.X1(153, J$.W(145, 'y', J$.F(121, J$.R(113, 'prompt', prompt, 1), 0)(), y, 3));
            J$.X1(209, J$.M(201, J$.R(161, 'console', console, 2), 'log', 0)(J$.B(34, '+', J$.B(26, '+', J$.B(18, '+', J$.T(169, "x=", 21, false), J$.R(177, 'x', x, 1), 0), J$.T(185, " y=", 21, false), 0), J$.R(193, 'y', y, 1), 0)));
            var z = J$.X1(249, J$.W(241, 'z', J$.F(233, J$.R(217, 'dbl', dbl, 1), 0)(J$.R(225, 'x', x, 1)), z, 3));
            if (J$.X1(497, J$.C(16, J$.B(42, '===', J$.R(257, 'z', z, 1), J$.R(265, 'y', y, 1), 0)))) {
                if (J$.X1(489, J$.C(8, J$.B(58, '!==', J$.R(273, 'x', x, 1), J$.B(50, '+', J$.R(281, 'y', y, 1), J$.T(289, 10, 22, false), 0), 0)))) {
                    J$.X1(321, J$.M(313, J$.R(297, 'console', console, 2), 'log', 0)(J$.T(305, "I am fine here", 21, false)));
                } else {
                    J$.X1(353, J$.M(345, J$.R(329, 'console', console, 2), 'log', 0)(J$.T(337, "I should not reach here", 21, false)));
                }
            }
        } catch (J$e) {
            J$.Ex(505, J$e);
        } finally {
            if (J$.Sr(513)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
