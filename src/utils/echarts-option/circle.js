import numberUtils from '../numberUtils';
const circleOption = {
    legend: {
        orient: 'horizontal',
        right: 20,
        data: []
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '20%'
    },
    series: [
        {
            type: 'pie',
            selectedMode: 'single',
            radius: ['24%', '25%'],
            hoverAnimation: false,
            label: {
                normal: {
                    show: false
                }
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: 'rgba(160,160,160,0.4)'
                        }
                    }
                }
            ]
        },
        {
            type: 'pie',
            radius: ['35%', '45%'],
            hoverAnimation: false,
            label: {
                normal: {
                    formatter: function(params) {
                        return numberUtils.formatValue(params.percent, 1) + '%';
                    },
                    show: true
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 5,
                    smooth: true
                }
            },
            data: []
        }
    ]
};
import deepCopy from '../deepCopy';
/**
 *
 * @param {Array} data 展示所需要的数据
 * @param {Array} labels legend labels
 * @param {Boolean} showLabel 是否显示外部比例
 * @param {Array} colors 颜色数组
 * @param {string} innerCircleColor 内环显示颜色
 * @param {array} outerCircleRadius 外圈半径 [35,45] 可以不用传递默认值为35% 45%
 * @param {Array} LegendIconImg legend的标签，如果传过来就用传过来的否则就采用roundRect来进行
 */
export default function getOption(
    data,
    labels,
    showLabel,
    colors,
    innerCircleColor,
    outerCircleRadius = [],
    legendIconImg = []
) {
    let dataArray = [];
    let legendArray = [];
    let resultOption = deepCopy(circleOption);
    if (!data || !labels || data.length !== labels.length) {
        console.log('输出参数异常');
    }
    // 生成显示的data数据
    for (let i = 0; i < data.length; i++) {
        let dataObject = {};
        let legendObject = {};
        dataObject['value'] = data[i];
        dataObject['name'] = labels[i];
        dataArray.push(dataObject);
        legendObject['name'] = labels[i];
        if (legendIconImg && legendIconImg[i]) {
            legendObject['icons'] = legendIconImg[i];
        } else {
            legendObject['icons'] = 'roundRect';
        }
    }
    resultOption.series[1].data = dataArray;
    resultOption.legend.data = legendArray;
    if (!showLabel) {
        resultOption.series[1].label.normal.show = false;
    }
    resultOption.color = colors;
    if (data.length > 0) {
        resultOption.series[0].data[0].itemStyle.normal.color = innerCircleColor;
    } else {
        resultOption.series[0].data[0].itemStyle.normal.color = 'rgba(0,0,0,0)';
    }
    if (outerCircleRadius.length === 2) {
        let circleRadius = [outerCircleRadius[0] + '%', outerCircleRadius[1] + '%'];
        let innerCircleRadius = [
            outerCircleRadius[0] - 11 + '%',
            outerCircleRadius[0] - 10 + '%'
        ];
        resultOption.series[0].radius = innerCircleRadius;
        resultOption.series[1].radius = circleRadius;
    }
    return resultOption;
}
