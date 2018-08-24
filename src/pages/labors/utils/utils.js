/*
* @Author: linf
* @Date:   2018/8/7
* @Explain : 人员模块通用方法
*/
class TableCellProcess {
    constructor(row, col) {
        this.col = col;
        this.row = row;
    }
    onChange(fun, cloumnInfo) {
        return (e) => {
            fun(this.row, this.col, e, cloumnInfo);
        }
    }
    deleteRow(fun) {
        return (e) => {
            fun(this.row);
        }
    }
    operationRow(fun) {
        return (e) => {
            fun(this.row)
        }
    }
}

const convertTOArray = (jsonArray, keys) => {
    let resut = [];
    if (checkClass(jsonArray, 'Array') && checkClass(keys, 'Array')) {
        for (let i = 0, length = jsonArray.length; i < length; i++) {
            let itemArry = [];
            const item = jsonArray[i];
            for (let j = 0, jLength = keys.length; j < jLength; j++) {
                itemArry.push(item[keys[j]]);
            }
            resut.push(itemArry)
        }
    }
    return resut
}

const convertTOJson = (array, keys) => {
    let result = [];
    if (checkClass(array, 'Array') && checkClass(keys, 'Array') && array.length > 0 && array[0].length === keys.length) {
        for (let i = 0, length = array.length; i < length; i++) {
            let item = {}
            for (let j = 0, jLength = keys.length; j < jLength; j++) {
                item[keys[j]] = array[i][j];
            }
            result.push(item);
        }
    }
    return result
}
const checkClass = (o, className) => {
    if (Object.prototype.toString.call(o).slice(8, -1) === className) {
        return true;
    }
    else {
        return false;
    }
}
const getInputValue = (e, info) => {
    let result;
    switch (info.ComponentType) {
        case 'D':
            result = baseDataTypeConvert(info.dataType, e)
            break
        case 'I':
            result = baseDataTypeConvert(info.dataType, e.target.value)
            break
        case 'DP':
            result = baseDataTypeConvert(info.dataType, e)
            break
        default:
            result = baseDataTypeConvert(info.dataType, e)
    }
    return result;
}
const baseDataTypeConvert = (type, value) => {
    let result;
    if (type === 'int') {
        result = parseInt(value, 10)
    } else if (type === 'bool') {
        result = value.toLowerCase() === 'true' ? true : false
    } else if (type === 'date') {
        result = value
    } else {
        result = value
    }
    return result;
}
export default{
    checkClass,
    TableCellProcess,
    convertTOJson,
    convertTOArray,
    getInputValue
}