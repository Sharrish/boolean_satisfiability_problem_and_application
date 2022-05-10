J$.iids = {"8":[23,9,23,18],"9":[1,1,1,20],"10":[20,5,20,14],"16":[20,5,20,14],"17":[1,1,1,20],"18":[21,16,21,20],"25":[2,1,2,21],"26":[23,9,23,18],"33":[2,1,2,21],"34":[25,20,25,24],"41":[5,5,5,9],"49":[5,14,5,15],"57":[5,5,5,15],"65":[5,5,5,16],"73":[6,5,6,9],"81":[6,14,6,17],"89":[6,5,6,17],"97":[6,5,6,18],"105":[4,1,7,2],"113":[4,1,7,2],"121":[10,19,10,20],"129":[11,9,11,10],"137":[11,11,11,12],"145":[11,16,11,17],"153":[11,9,11,17],"161":[11,9,11,18],"169":[10,19,10,20],"177":[10,5,12,6],"185":[10,5,12,6],"193":[13,12,13,13],"201":[13,12,13,13],"209":[13,5,13,14],"217":[9,1,14,2],"225":[9,1,14,2],"233":[9,1,14,2],"241":[9,1,14,2],"249":[16,13,16,16],"257":[16,9,16,18],"265":[16,9,16,18],"273":[16,9,16,18],"281":[17,1,17,2],"289":[17,7,17,13],"297":[17,7,17,15],"305":[17,1,17,15],"313":[17,1,17,16],"321":[18,1,18,2],"329":[18,7,18,13],"337":[18,7,18,15],"345":[18,1,18,15],"353":[18,1,18,16],"361":[19,15,19,18],"369":[19,15,19,18],"377":[19,15,19,18],"385":[20,5,20,6],"393":[20,5,20,8],"401":[20,13,20,14],"409":[21,16,21,20],"417":[21,5,21,12],"425":[21,5,21,20],"433":[21,5,21,21],"441":[22,9,22,16],"449":[22,17,22,18],"457":[22,9,22,19],"465":[22,9,22,19],"473":[22,5,22,20],"481":[23,9,23,10],"489":[23,9,23,12],"497":[23,17,23,18],"505":[24,9,24,16],"513":[24,21,24,28],"521":[24,9,24,29],"523":[24,9,24,20],"529":[24,9,24,30],"537":[25,20,25,24],"545":[25,9,25,16],"553":[25,9,25,24],"561":[25,9,25,25],"569":[1,1,28,1],"577":[1,1,1,20],"585":[1,1,28,1],"593":[2,1,2,21],"601":[1,1,28,1],"609":[4,1,7,2],"617":[1,1,28,1],"625":[9,1,14,2],"633":[1,1,28,1],"641":[1,1,28,1],"649":[1,1,28,1],"657":[1,1,1,20],"665":[1,1,1,20],"673":[2,1,2,21],"681":[2,1,2,21],"689":[4,1,7,2],"697":[4,1,7,2],"705":[9,1,14,2],"713":[9,1,14,2],"721":[23,5,26,6],"729":[20,1,27,2],"737":[1,1,28,1],"745":[1,1,28,1],"nBranches":4,"originalCodeFileName":"/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/mem.js","instrumentedCodeFileName":"/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/mem_jalangi_.js","code":"function fetch() {}\nfunction prompt() {}\n\nfunction foo() {\n    this.i = 1;\n    this.c = 'c';\n};\n\nfunction memsett(a) {\n    for (var i in a) {\n        a[i] = 0;\n    }\n    return a;\n}\n\nvar a = new foo();\na.i = prompt();\na.c = prompt();\nvar message = \"1\";\nif (a.c === 1) {\n    message += \" 2\";\n    a = memsett(a);\n    if (a.c !== 1) {\n        console.log(\"Error\");\n        message += \" 3\";\n    }\n}\n"};
jalangiLabel4:
    while (true) {
        try {
            J$.Se(569, '/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/mem_jalangi_.js', '/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/mem.js');
            function fetch() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(9, arguments.callee, this, arguments);
                            arguments = J$.N(17, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(657, J$e);
                        } finally {
                            if (J$.Fr(665))
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
                            J$.Ex(673, J$e);
                        } finally {
                            if (J$.Fr(681))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function foo() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(105, arguments.callee, this, arguments);
                            arguments = J$.N(113, 'arguments', arguments, 4);
                            J$.X1(65, J$.P(57, J$.R(41, 'this', this, 0), 'i', J$.T(49, 1, 22, false), 0));
                            J$.X1(97, J$.P(89, J$.R(73, 'this', this, 0), 'c', J$.T(81, 'c', 21, false), 0));
                        } catch (J$e) {
                            J$.Ex(689, J$e);
                        } finally {
                            if (J$.Fr(697))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            function memsett(a) {
                jalangiLabel3:
                    while (true) {
                        try {
                            J$.Fe(217, arguments.callee, this, arguments);
                            arguments = J$.N(225, 'arguments', arguments, 4);
                            a = J$.N(233, 'a', a, 4);
                            J$.N(241, 'i', i, 0);
                            for (J$._tm_p in J$.H(169, J$.R(121, 'a', a, 0))) {
                                var i = J$.X1(185, J$.W(177, 'i', J$._tm_p, i, 1));
                                {
                                    {
                                        J$.X1(161, J$.P(153, J$.R(129, 'a', a, 0), J$.R(137, 'i', i, 0), J$.T(145, 0, 22, false), 2));
                                    }
                                }
                            }
                            return J$.X1(209, J$.Rt(201, J$.R(193, 'a', a, 0)));
                        } catch (J$e) {
                            J$.Ex(705, J$e);
                        } finally {
                            if (J$.Fr(713))
                                continue jalangiLabel3;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fetch = J$.N(585, 'fetch', J$.T(577, fetch, 12, false, 9), 0);
            prompt = J$.N(601, 'prompt', J$.T(593, prompt, 12, false, 25), 0);
            foo = J$.N(617, 'foo', J$.T(609, foo, 12, false, 105), 0);
            memsett = J$.N(633, 'memsett', J$.T(625, memsett, 12, false, 217), 0);
            J$.N(641, 'a', a, 0);
            J$.N(649, 'message', message, 0);
            ;
            var a = J$.X1(273, J$.W(265, 'a', J$.F(257, J$.R(249, 'foo', foo, 1), 1)(), a, 3));
            J$.X1(313, J$.P(305, J$.R(281, 'a', a, 1), 'i', J$.F(297, J$.R(289, 'prompt', prompt, 1), 0)(), 0));
            J$.X1(353, J$.P(345, J$.R(321, 'a', a, 1), 'c', J$.F(337, J$.R(329, 'prompt', prompt, 1), 0)(), 0));
            var message = J$.X1(377, J$.W(369, 'message', J$.T(361, "1", 21, false), message, 3));
            if (J$.X1(729, J$.C(16, J$.B(10, '===', J$.G(393, J$.R(385, 'a', a, 1), 'c', 0), J$.T(401, 1, 22, false), 0)))) {
                J$.X1(433, message = J$.W(425, 'message', J$.B(18, '+', J$.R(417, 'message', message, 1), J$.T(409, " 2", 21, false), 0), message, 2));
                J$.X1(473, a = J$.W(465, 'a', J$.F(457, J$.R(441, 'memsett', memsett, 1), 0)(J$.R(449, 'a', a, 1)), a, 2));
                if (J$.X1(721, J$.C(8, J$.B(26, '!==', J$.G(489, J$.R(481, 'a', a, 1), 'c', 0), J$.T(497, 1, 22, false), 0)))) {
                    J$.X1(529, J$.M(521, J$.R(505, 'console', console, 2), 'log', 0)(J$.T(513, "Error", 21, false)));
                    J$.X1(561, message = J$.W(553, 'message', J$.B(34, '+', J$.R(545, 'message', message, 1), J$.T(537, " 3", 21, false), 0), message, 2));
                }
            }
        } catch (J$e) {
            J$.Ex(737, J$e);
        } finally {
            if (J$.Sr(745)) {
                J$.L();
                continue jalangiLabel4;
            } else {
                J$.L();
                break jalangiLabel4;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
