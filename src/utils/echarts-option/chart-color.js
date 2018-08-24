const palette = [
    '#00dbc6', // 蓝
    '#f6c644', // 黄
    '#fe3d3d', // 红
    '#00b7ee', // 深蓝
    '#92e285', // 绿
    '#d6a0ff'  // 粉紫
];

const warningPalette = [
    'rgb(191, 174, 72)', // 黄
    'rgb(237, 104, 9)', // 橘黄
    'rgb(229, 57, 53)', // 大红
    'rgb(28, 117, 204)', // 蓝
    'rgb(53, 165, 89)', // 绿
    'rgb(30, 255, 36)' // 大绿
];

function getColors(count) {
    let arr = [];
    let idx = 0;
    for (let i = 0; i < count; i++) {
        arr.push(palette[idx]);
        idx++;
        if (idx === palette.length) idx = 0;
    }
    return arr;
}

function getColor(index) {
    return palette[index % palette.length];
}

function getWarningColors() {
    return warningPalette;
}

function getWarningColor(index) {
    return warningPalette[index];
}

export default{ getColors, getWarningColors, getWarningColor, getColor };
