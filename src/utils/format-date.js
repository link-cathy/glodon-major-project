// let dateStr = formatDate(date, 'yyyy-MM-dd hh:mm:ss.SSS');

export default function formatDate(d, fmt) {
    let y = d.getFullYear();
    let o = {
        'M+': d.getMonth() + 1, // 月
        'd+': d.getDate(), // 日
        'h+': d.getHours(), // 时
        'm+': d.getMinutes(), // 分
        's+': d.getSeconds(), // 秒
        'S+': d.getMilliseconds() // 毫秒
    };
    let returnFmt = fmt;
    if (/(y+)/.test(fmt)) {
        returnFmt = fmt.replace(RegExp.$1, (String(y)).substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            let v;
            if (RegExp.$1.length === 2) {
                v = ('00' + o[k]).substr((String(o[k])).length);
            } else if (RegExp.$1.length === 3) {
                v = ('000' + o[k]).substr((String(o[k])).length);
            } else { v = o[k]; }
            returnFmt = fmt.replace(RegExp.$1, v);
        }
    }
    return returnFmt;
}
