J$.iids = {"8":[13,13,13,22],"9":[1,1,1,20],"10":[7,5,7,14],"16":[20,13,20,22],"17":[1,1,1,20],"18":[8,16,8,25],"24":[10,9,10,18],"25":[2,1,2,21],"26":[8,16,8,25],"32":[7,5,7,14],"33":[2,1,2,21],"34":[10,9,10,18],"41":[4,15,4,18],"42":[11,20,11,29],"49":[4,15,4,18],"50":[11,20,11,29],"57":[4,15,4,18],"58":[13,13,13,22],"65":[6,5,6,11],"66":[14,24,14,33],"73":[6,5,6,13],"74":[14,24,14,33],"81":[6,5,6,13],"82":[18,20,18,24],"89":[6,1,6,14],"90":[20,13,20,22],"97":[7,5,7,6],"98":[21,24,21,33],"105":[7,11,7,14],"106":[21,24,21,33],"113":[8,16,8,21],"121":[8,24,8,25],"129":[8,5,8,12],"137":[8,5,8,25],"145":[8,5,8,26],"153":[9,9,9,15],"161":[9,9,9,17],"169":[9,9,9,17],"177":[9,5,9,18],"185":[10,9,10,10],"193":[10,15,10,18],"201":[11,20,11,25],"209":[11,28,11,29],"217":[11,9,11,16],"225":[11,9,11,29],"233":[11,9,11,30],"241":[12,13,12,19],"249":[12,13,12,21],"257":[12,13,12,21],"265":[12,9,12,22],"273":[13,13,13,14],"281":[13,19,13,22],"289":[14,24,14,29],"297":[14,32,14,33],"305":[14,13,14,20],"313":[14,13,14,33],"321":[14,13,14,34],"329":[15,13,15,20],"337":[15,25,15,32],"345":[15,13,15,33],"347":[15,13,15,24],"353":[15,13,15,34],"361":[18,20,18,24],"369":[18,9,18,16],"377":[18,9,18,24],"385":[18,9,18,25],"393":[19,13,19,19],"401":[19,13,19,21],"409":[19,13,19,21],"417":[19,9,19,22],"425":[20,13,20,14],"433":[20,19,20,22],"441":[21,24,21,29],"449":[21,32,21,33],"457":[21,13,21,20],"465":[21,13,21,33],"473":[21,13,21,34],"481":[22,13,22,20],"489":[22,25,22,32],"497":[22,13,22,33],"499":[22,13,22,24],"505":[22,13,22,34],"513":[1,1,26,1],"521":[1,1,1,20],"529":[1,1,26,1],"537":[2,1,2,21],"545":[1,1,26,1],"553":[1,1,26,1],"561":[1,1,26,1],"569":[1,1,26,1],"577":[1,1,26,1],"585":[1,1,1,20],"593":[1,1,1,20],"601":[2,1,2,21],"609":[2,1,2,21],"617":[13,9,16,10],"625":[20,9,23,10],"633":[10,5,24,6],"641":[7,1,25,2],"649":[1,1,26,1],"657":[1,1,26,1],"nBranches":8,"originalCodeFileName":"/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/var_num_inputs.js","instrumentedCodeFileName":"/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/var_num_inputs_jalangi_.js","code":"function fetch() {}\nfunction prompt() {}\n\nvar message = \"1\";\nvar x, y, z;\nx = prompt();\nif (x === 100) {\n    message += \" 2 \" + x;\n    y = prompt();\n    if (y === 200) {\n        message += \" 3 \" + y;\n        z = prompt();\n        if (z === 300) {\n            message += \" 4 \" + z;\n            console.log(\"Hello\");\n        }\n    } else {\n        message += \" 5\";\n        z = prompt();\n        if (z === 400) {\n            message += \" 6 \" + z;\n            console.log(\"Hullo\");\n        }\n    }\n}\n"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(513, '/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/var_num_inputs_jalangi_.js', '/Users/sait/Documents/cmc/solvers/hw3/jstask/tests/var_num_inputs.js');
            function fetch() {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(9, arguments.callee, this, arguments);
                            arguments = J$.N(17, 'arguments', arguments, 4);
                        } catch (J$e) {
                            J$.Ex(585, J$e);
                        } finally {
                            if (J$.Fr(593))
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
                            J$.Ex(601, J$e);
                        } finally {
                            if (J$.Fr(609))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            fetch = J$.N(529, 'fetch', J$.T(521, fetch, 12, false, 9), 0);
            prompt = J$.N(545, 'prompt', J$.T(537, prompt, 12, false, 25), 0);
            J$.N(553, 'message', message, 0);
            J$.N(561, 'x', x, 0);
            J$.N(569, 'y', y, 0);
            J$.N(577, 'z', z, 0);
            var message = J$.X1(57, J$.W(49, 'message', J$.T(41, "1", 21, false), message, 3));
            var x, y, z;
            J$.X1(89, x = J$.W(81, 'x', J$.F(73, J$.R(65, 'prompt', prompt, 1), 0)(), x, 2));
            if (J$.X1(641, J$.C(32, J$.B(10, '===', J$.R(97, 'x', x, 1), J$.T(105, 100, 22, false), 0)))) {
                J$.X1(145, message = J$.W(137, 'message', J$.B(26, '+', J$.R(129, 'message', message, 1), J$.B(18, '+', J$.T(113, " 2 ", 21, false), J$.R(121, 'x', x, 1), 0), 0), message, 2));
                J$.X1(177, y = J$.W(169, 'y', J$.F(161, J$.R(153, 'prompt', prompt, 1), 0)(), y, 2));
                if (J$.X1(633, J$.C(24, J$.B(34, '===', J$.R(185, 'y', y, 1), J$.T(193, 200, 22, false), 0)))) {
                    J$.X1(233, message = J$.W(225, 'message', J$.B(50, '+', J$.R(217, 'message', message, 1), J$.B(42, '+', J$.T(201, " 3 ", 21, false), J$.R(209, 'y', y, 1), 0), 0), message, 2));
                    J$.X1(265, z = J$.W(257, 'z', J$.F(249, J$.R(241, 'prompt', prompt, 1), 0)(), z, 2));
                    if (J$.X1(617, J$.C(8, J$.B(58, '===', J$.R(273, 'z', z, 1), J$.T(281, 300, 22, false), 0)))) {
                        J$.X1(321, message = J$.W(313, 'message', J$.B(74, '+', J$.R(305, 'message', message, 1), J$.B(66, '+', J$.T(289, " 4 ", 21, false), J$.R(297, 'z', z, 1), 0), 0), message, 2));
                        J$.X1(353, J$.M(345, J$.R(329, 'console', console, 2), 'log', 0)(J$.T(337, "Hello", 21, false)));
                    }
                } else {
                    J$.X1(385, message = J$.W(377, 'message', J$.B(82, '+', J$.R(369, 'message', message, 1), J$.T(361, " 5", 21, false), 0), message, 2));
                    J$.X1(417, z = J$.W(409, 'z', J$.F(401, J$.R(393, 'prompt', prompt, 1), 0)(), z, 2));
                    if (J$.X1(625, J$.C(16, J$.B(90, '===', J$.R(425, 'z', z, 1), J$.T(433, 400, 22, false), 0)))) {
                        J$.X1(473, message = J$.W(465, 'message', J$.B(106, '+', J$.R(457, 'message', message, 1), J$.B(98, '+', J$.T(441, " 6 ", 21, false), J$.R(449, 'z', z, 1), 0), 0), message, 2));
                        J$.X1(505, J$.M(497, J$.R(481, 'console', console, 2), 'log', 0)(J$.T(489, "Hullo", 21, false)));
                    }
                }
            }
        } catch (J$e) {
            J$.Ex(649, J$e);
        } finally {
            if (J$.Sr(657)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
