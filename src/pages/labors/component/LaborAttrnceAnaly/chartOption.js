import pin_png from '@/styles/images/pin.png';
import slider_png from '@/styles/images/slider.png';

/* const perPerson =  {
    'project_id': 'p0',
    'project_name': '项目0',
    'count_onhand': 118,
    'count_intime': 23
}; */

/* const getLegendText = (name, value, length, Suffix) => {
    let result = name
    for (let i = 0; i < length - name.length; i++) {
        result += ' ';
    }
    result += value + Suffix;
    return result;
} */
export const buildRanksBarOption = (data) => {
    let option = {
        tooltip: {},
        legend: {
            show: false
        },
        grid: {},
        xAxis: {
            type: 'category',
            data: data.map((item) => {
                return {
                    value: item.team_name,
                    textStyle: {
                        color: '#fff',
                        fontFamily: 'PingFangSC-Regular, sans-serif'
                    }
                }
            }),
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#23FAFF',
                    width: 1,
                    type: 'solid',
                    fontFamily: 'PingFangSC-Regular, sans-serif'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#00c7ff',
                    fontFamily: 'PingFangSC-Regular, sans-serif'
                }
            },
            nameTextStyle: {
                color: '#fff',
                fontFamily: 'PingFangSC-Regular, sans-serif'
            }
        },
        yAxis: {
            show: false,
            type: 'value',
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
                start: 0,
                end: Math.floor((7 / data.length) * 100),
                handleSize: 16,
                handleIcon: 'image://' + slider_png,
                backgroundColor: '#23FAFF',
                borderColor: '#23FAFF',
                height: 2,
                bottom: 10,
                handleStyle: {
                    height: 6
                }
            }
        ],
        series: {
            name: '队伍人数',
            type: 'bar',
            data: data.map((item) => {
                return item.count
            }),
            barWidth: 24, // 柱子宽度
            barGap: 70, // 柱子之间间距
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#1F97FD ' // 0% 处的颜色
                }, {
                    offset: 1, color: '#1EE2FD' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
            markPoint: {
                symbol: 'image://' + pin_png,
                data: data.map((item) => {
                    return {
                        name: '人数', value: item.count, xAxis: item.team_name, yAxis: item.count
                    }
                }),
                symbolSize: [32, 23],
                symbolOffset: [0, -40],
                itemStyle: {
                    color: '#23FAFF',
                    borderWidth: 32
                }
            }
        }
    }
    return option;
}
export const buildTypeOfWorkPieOption = (data) => {
    let option = {
        color: [
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#1F97FD' }, { offset: 1, color: '#1EE2FD' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#0BF1AE' }, { offset: 1, color: '#29B5C1' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#14CC8C' }, { offset: 1, color: '#95FA7F' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFE400' }, { offset: 1, color: '#FFA300' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#EE2963' }, { offset: 1, color: '#F2864C' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#9F5BFF' }, { offset: 1, color: '#E75DC6' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#4C59E9' }, { offset: 1, color: '#B94EE7' }], },
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            right: '10%',
            bottom: '15%',
            itemGap: 25,
            orient: 'vertical',
            type: 'scroll',
            data: data.map((item) => {
                return {
                    name: item.work_type_name,
                    icon: 'circle'
                }
            }),
            textStyle: {
                color: '#fff',
                fontFamily: 'AppleSystemUIFont',
                fontSize: 14,
                rich: {
                    width: 10,
                    height: 10,
                    fontSize: 12,
                    borderRadius: '50%',
                },
            }
        },
        series: {
            name: '访问来源',
            type: 'pie',
            radius: ['42%', '55%'],
            center: ['35%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                color: '#fff',
                fontFamily: 'AppleSystemUIFont',
                fontSize: 14,
                rich: {
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                },
                length: '40px'
            },
            lableLine: {
                show: true,
                color: '#fff',
                fontFamily: 'AppleSystemUIFont',
                fontSize: 14,
            },
            data: data.map((item) => {
                return {
                    name: item.work_type_name,
                    value: item.count
                }
            }),
        }
    }
    return option;
}