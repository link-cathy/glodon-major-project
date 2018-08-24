function getRealLength(str) {
    let length = 0;
    let returnStr;
    returnStr = str || '';
    for (let i = 0; i < returnStr.length; i++) {
        let c = str.charCodeAt(i);
        if (c > 127) {
            length += 2;
        } else {
            length++;
        }
    }
    return length;
}

function getSubStrPosition(str, maxLength) {
    let currentLength = 0;
    let resultLength = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c > 127) {
            currentLength += 2;
        } else {
            currentLength++;
        }
        if (currentLength > maxLength) {
            break;
        } else {
            resultLength++;
        }
    }
    return resultLength;
}

function formatString(args) {
    if (arguments.length === 0) return null;
    let str = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

function formatUndefinedValue(value, defaultValue) {
    let returnDefault = defaultValue
    if (defaultValue === undefined) {
        returnDefault = '';
    }
    if (value === undefined) {
        return returnDefault;
    }
    return value;
}

export default { getRealLength, getSubStrPosition, formatString, formatUndefinedValue };
