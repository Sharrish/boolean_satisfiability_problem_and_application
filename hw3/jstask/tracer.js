(function() {
    var _size = 0;
    function Variable(value) {
        ++_size;
        this._value = value;
        this._id = _size;
    }

    const _fs = require("fs");
    const { Console } = require('console');
    const _output = _fs.createWriteStream('./trace');
    const _logger = new Console(_output);
    var _fileContent;
    var _isInputExist = true;
    try {
        _fileContent = _fs.readFileSync("input", "utf8");
        _fileContent = _fileContent.split("\n").slice(1);
    } catch(e) {
        _isInputExist = false;
    }
    var _number_of_variables = 0;
    function _getNextValue() {
        if (_number_of_variables < _fileContent.length && 0 < _fileContent[_number_of_variables].length) {
            return parseInt((_fileContent[_number_of_variables].split(' ')[2].slice(0, -1)), 10);
        } else {
            return 0;
        }
    }
    function _getVariable(variable) {
        var _variable = variable;
        if (!(_variable instanceof Variable)) {
            _variable = new Variable(_variable);
            if (typeof _variable._value === "number") {
                _logger.log("(" + _variable._id + ",_) = (0," + _variable._value + ")");
            }
        }
        return _variable;
    }
    function _prompt() {
        var value = 0;
        if (_isInputExist) {
            value = _getNextValue();
        }
        ++_number_of_variables;
        var variable = _getVariable(value);
        _logger.log("(" + variable._id + ",_) = (int)(x" + _number_of_variables + ",_)");
        return variable;
    }
    function _concreteValue(value) {
        if (typeof value === 'object') {
            if (value instanceof Variable) {
                return _concreteValue(value._value);
            }
            var answer;
            if (value instanceof Array) {
                answer = [];
            } else {
                answer = {};
            }
            for (var value_property in value) {
                answer[value_property] = _concreteValue(value[value_property]);
            }
            return answer;
        } else {
            return value;
        }
    }

    J$.analysis = {
        unary: function(iid, op, left, result) {
            left = _getVariable(left);
            var result = new Variable();
            if (op === "+") {
                result._value = +(left._value);
                _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ")");
            } else if (op === "-") {
                result._value = -(left._value);
                _logger.log("(" + result._id + ",_) = " + op + " (" + left._id + "," + left._value + ")");
            } else if (op === "~") {
                result._value = ~(left._value);
                _logger.log("(" + result._id + ",_) = " + op + " (" + left._id + "," + left._value + ")");
            } else if (op === "!") {
                result._value = !(left._value);
                _logger.log("(" + result._id + ",_) = " + op + " (" + left._id + "," + left._value + ")");
            } else if (op === "typeof") {
                result._value = typeof (left._value);
                _logger.log("(" + result._id + ",_) = " + op + " (" + left._id + "," + left._value + ")");
            } else if (op === "void") {
                result._value = void (left._value);
                _logger.log("(" + result._id + ",_) = " + op + " (" + left._id + "," + left._value + ")");
            }
            return {
                result: result,
            };
        },

        binary: function(iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) {
            left = _getVariable(left);
            right = _getVariable(right);
            var result = new Variable();
            if (op === "+") {
                result._value = left._value + right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "-") {
                result._value = left._value - right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "*") {
                result._value = left._value * right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "/") {
                result._value = left._value / right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "%") {
                result._value = left._value % right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "&") {
                result._value = left._value & right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "|") {
                result._value = left._value | right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "^") {
                result._value = left._value ^ right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "<<") {
                result._value = left._value << right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === ">>") {
                result._value = left._value >> right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === ">>>") {
                result._value = left._value >>> right._value;
                if (typeof left._value === "number" && typeof right._value === "number") {
                    _logger.log("(" + result._id + ",_) = (" + left._id + "," + left._value + ") "
                                + op + " (" + right._id + "," + right._value + ")");
                }
            } else if (op === "<") {
                result._value = left._value < right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === ">") {
                result._value = left._value > right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === "<=") {
                result._value = left._value <= right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === ">=") {
                result._value = left._value >= right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === "==") {
                result._value = left._value == right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === "!=") {
                result._value = left._value != right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === "===") {
                result._value = left._value === right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") == (" + right._id + "," + right._value + ")");
            } else if (op === "!==") {
                result._value = left._value !== right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") != (" + right._id + "," + right._value + ")");
            } else if (op === "instanceof") {
                result._value = left._value instanceof right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            } else if (op === "delete") {
            } else if (op === "in") {
                result._value = left._value in right._value;
                var branch = "else";
                if (result._value) {
                    branch = "then";
                }
                _logger.log(branch + ":" + result._id
                            + " (" + left._id + "," + left._value + ") " + op + " (" + right._id + "," + right._value + ")");
            }
            return {
                result: result,
            };
        },

        conditional: function(iid, result) {
            return {
                result: result._value,
            };
        },

        read: function(iid, name, val, isGlobal, isScriptLocal) {
            return {
                result: val,
            };
        },

        write: function(iid, name, val, lhs, isGlobal, isScriptLocal) {
            var _val, _lhs;
            _val = _getVariable(val);
            _lhs = _getVariable(lhs);
            _lhs._value = _val._value;
            if (typeof _lhs._value === "number") {
                _logger.log("(" + _lhs._id + ",_) = (" + _val._id + "," + _val._value + ")");
            }
            return {
                result: _lhs,
            };
        },

        forinObject: function (iid, val) {
            if (val instanceof Variable) {
                return {result: val._value};
            }
            return {result: val};
        },

        invokeFunPre: function(iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            if (f === console.log || f === JSON.stringify || isConstructor) {
                for (var arg_id in args) {
                    args[arg_id] = _concreteValue(args[arg_id]);
                }
                return {
                    f: f,
                    base: base,
                    args: args,
                    skip: false,
                };
            }
            if (f.name === 'fetch') {
                _args = [];
                for (var arg_id in args) {
                    _args[arg_id] = _concreteValue(args[arg_id]);
                }
                _logger.log("fetch " + JSON.stringify(_args));
                return {
                    f: f,
                    base: base,
                    args: _args,
                    skip: false,
                };
            }
            if (f.name === "prompt") {
                return {
                    f: _prompt,
                    base: base,
                    args: args,
                    skip: false,
                };
            }
        },

        getField: function(iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
            var _base = base, _offset = offset;
            if (base instanceof Variable) {
                _base = base._value;
            }
            if (offset instanceof Variable) {
                _offset = offset._value;
            }
            return {
                result: _base[_offset],
            };
        },

        putFieldPre: function(iid, base, offset, val, isComputed, isOpAssign) {
            var variable = _getVariable(val);
            if (base instanceof Variable) {
                if (offset instanceof Variable) {
                    if (base._value[offset._value] instanceof Variable) {
                        base._value[offset._value]._value = variable._value;
                    } else {
                        base._value[offset._value] = new Variable(variable._value);
                    }
                    if (typeof variable._value === "number") {
                        _logger.log("(" + base._value[offset._value]._id + ",_) = (" + variable._id + "," + variable._value + ")");
                    }
                    return {
                        skip: true,
                    };
                } else {
                    if (base._value[offset] instanceof Variable) {
                        base._value[offset]._value = variable._value;
                    } else {
                        base._value[offset] = new Variable(variable._value);
                    }
                    if (typeof variable._value === "number") {
                        _logger.log("(" + base._value[offset]._id + ",_) = (" + variable._id + "," + variable._value + ")");
                    }
                    return {
                        skip: true,
                    };
                }
            } else {
                if (offset instanceof Variable) {
                    if (base[offset._value] instanceof Variable) {
                        base[offset._value]._value = variable._value;
                    } else {
                        base[offset._valie] = new Variable(variable._value);
                    }
                    if (typeof variable._value === "number") {
                        _logger.log("(" + base[offset._value]._id + ",_) = (" + variable._id + "," + variable._value + ")");
                    }
                    return {
                        skip: true,
                    };
                } else {
                    if (base[offset] instanceof Variable) {
                        base[offset]._value = variable._value;
                    } else {
                        base[offset] = new Variable(variable._value);
                    }
                    if (typeof variable._value === "number") {
                        _logger.log("(" + base[offset]._id + ",_) = (" + variable._id + "," + variable._value + ")");
                    }
                    return {
                        skip: true,
                    };
                }
            }
        },
    }
}());
