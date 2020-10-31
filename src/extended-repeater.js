module.exports = function repeater(str, options) {
    let result = '';
    const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || '+';
    let addition = typeof options.addition === 'boolean' || options.addition === null ? String(options.addition) : options.addition || '';   
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';
    let add = addition;
    if (additionRepeatTimes > 1) {
        add = additionSeparator + addition;
    }
    const pattern = str + addition + add.repeat(additionRepeatTimes - 1);
    for (let i = 1; i <= repeatTimes; i++) {
        result += pattern;
        if (i < repeatTimes) {
            result += separator;
        }
    }
    return result;
};
  