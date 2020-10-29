module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case '--double-next':
                if (i + 1 !== arr.length) {
                    newArray.push(arr[i + 1]);
                }
                break;
            case '--double-prev':
                if (i - 1 >= 0) {
                    newArray.push(arr[i - 1]); 
                };
                break;
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                newArray.pop() 
                break;
            default: 
                newArray.push(arr[i]);                 
        }
    }
    return newArray
};
