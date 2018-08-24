export default function deepCopy(obj) {
    let newObj;
    // 如果不是数组对象，并且对象存在，直接返回就可以
    if (obj && typeof obj !== 'object') {
        newObj = obj;
        return newObj;
    }
    let targetObj = obj.constructor === Array ? [] : {};
    for (let keys in obj) {
        if (obj.hasOwnProperty(keys)) {
            if (obj[keys] && typeof obj[keys] === 'object') {
                targetObj[keys] = obj[keys].constructor === Array ? [] : {};
                targetObj[keys] = deepCopy(obj[keys]);
            } else {
                targetObj[keys] = obj[keys];
            }
        }
    }
    return targetObj;
    // return JSON.parse(JSON.stringify(obj));
}
