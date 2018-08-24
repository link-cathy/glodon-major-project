/**
 * @param {number or string} value 数值
 * @param {Number} digits 保留小数位数
 * @param {bool} returnStr 返回值是否保留0（如果保留位数那么返回是一个string）
 */
function formatValue(value, digits, returnStr = false) {
    let returnValue = value;
    if (digits < 0) {
        console.log('小数点后位数不能为负数');
        returnValue = 0;
    }
    if (!value) {
        returnValue = 0;
    }
    if (returnStr) {
        return parseFloat(returnValue).toFixed(digits);
    }
    return parseFloat(parseFloat(returnValue).toFixed(digits));
}
/**
 * @param {string} value 将value值转换成为千分位的表示形式
 */
function toThousands(value) {
    let string = value.toString();
    return string.replace(/^\d+/g, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
}
/**
 * @param {string} value 校验value是否合法数值
 */
function checkNumber(value) {
    let reg = /^(-?\d+)(\.\d+)?$/;
    if (reg.test(value)) {
        return true;
    }
    return false;
}
export default { formatValue, toThousands, checkNumber };
