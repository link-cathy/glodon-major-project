const dataZoom = {
    type: 'slider',
    show: true,
    filterMode: 'empty',
    startValue: 0,
    endValue: 0,
    orient: 'horizontal',
    zoomLock: true,
    dataBackground: {
        areaStyle: {
            color: 'rgb(83, 214, 234)'
        }
    },
    borderColor: 'rgb(83, 214, 234)',
    handleSize: '0%',
    handleStyle: {
        color: 'rgb(83, 214, 234)'
    },
    showDetail: false
};
import deepCopy from '../deepCopy';
/**
 *
 * @param {Number} startPosition datazoom开始的位置从0开始计数
 * @param {Number} endPosition  datazoom结束的位置
 */
export default function getDataZoom(startPosition, endPosition, orient = 'horizontal') {
    let result = deepCopy(dataZoom);
    result.startValue = startPosition;
    result.endValue = endPosition;
    result.orient = orient;
    if (orient === 'horizontal') {
        result['bottom'] = '0px';
        result['height'] = 12;
        result['xAxisIndex'] = 0;
    } else {
        result['width'] = 12;
        result['yAxisIndex'] = 0;
    }
    return result;
}
