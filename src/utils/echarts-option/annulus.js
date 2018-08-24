const option = {
    title: {
        text: '232',
        subtext: '超期',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 14,
            color: 'white'
        },
        subtextStyle: {
            fontSize: 14,
            color: 'white'
        }
    },
    color: [],
    series: [
        {
            type: 'pie',
            radius: ['55%', '65%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            hoverAnimation: false,
            startAngle: -45,
            data: [{ value: 25 }, { value: 0 }, { value: 0 }]
        },
        {
            type: 'pie',
            radius: ['45%', '46%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            hoverAnimation: false,
            startAngle: -45,
            data: [
                { value: 25 },
                {
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: ''
                        }
                    }
                }
            ]
        }
    ]
};
import deepCopy from '../deepCopy';
/**
 * 获取环形图的data，这个图只用于半开环形图， 并且只能有两个数据输入
 * @param {Number[2]} data 两个数据，环形从做到右的数据
 * @param {string[2]} colors  两个数据的颜色
 * @param {*} text 中心的主标题
 * @param {*} subtext  中心的副标题
 * @param {Number} textFontSize
 * @param {Number} subTextFontSize
 * @param {*} zeroColor 在第一个数字为0的情况下，内环显示颜色
 */
export default function getOption(
    data,
    colors,
    text,
    subtext,
    textFontSize,
    subTextFontSize,
    zeroColor
) {
    let newZeroColor = zeroColor || colors[1] || 'rgba(160,160,160,0.4)';
    let resultOption = deepCopy(option);
    let optionColor = ['rgba(0,0,0,0)'];
    optionColor = optionColor.concat(colors);
    resultOption.color = optionColor;
    resultOption.title.text = text;
    resultOption.title.subtext = subtext;
    resultOption.title.textStyle.fontSize = textFontSize;
    resultOption.title.subtextStyle.fontSize = subTextFontSize;
    let firstData = data[0] || 0;
    let secondData = data[1] || 0;
    if (firstData === 0) {
    // 在第一个数为0的时候去内环显示正常颜色
        resultOption.series[1].data[1].itemStyle.normal.color = newZeroColor;
        // 防止两个数都为0的情况下会出现除以0的情况
        if (secondData === 0) {
            secondData = 1;
        }
    }
    resultOption.series[0].data[1].value =
    75 * firstData / (firstData + secondData);
    resultOption.series[0].data[2].value =
    75 * secondData / (firstData + secondData);
    return resultOption;
}
