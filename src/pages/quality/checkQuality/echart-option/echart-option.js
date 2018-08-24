/**
 * Created by yuanxh on 2018/8/24.
 */
import slider_png from '@/styles/images/slider.png';

export const build_first_option = (data) => {
    return {
        title: {
            text: '232',
            subtext: '超期',
            x: 'center',
            y: 'center',
            textStyle:
                {
                    fontSize: 14,
                    color: 'white'
                },
            subtextStyle: {
                fontSize: 14,
                color: 'white'
            }
        },
        color: [
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{ offset: 0, color: '#EF2B63' }, { offset: 1, color: '#FEB963' }],
            },
            'rgba(255,255,255,0.2)'
        ],
        series: [
            {
                type: 'pie',
                radius: ['55%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                hoverAnimation: false,
                startAngle: 225,
                data: [{ value: 50 },
                    {
                        value: 25,
                        itemStyle: {
                            color: ''
                        }
                    },
                    {
                        value: 25, itemStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }]
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
                startAngle: 225,
                data: [
                    { value: 75 },
                    {
                        value: 25,
                        itemStyle: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                ]
            }
        ]
    }
}
export const build_seconde_option = (data) => {
    let option = {
        legend: {
            data: [
                {
                    name: '一般',
                    icon: 'rect'
                }, {
                    name: '严重',
                    icon: 'rect'
                }, {
                    name: '紧要',
                    icon: 'rect'
                }
            ],
            textStyle: {
                color: '#fff',
                fontFamily: 'AppleSystemUIFont',
                fontSize: 14,
                rich: {
                    width: 12,
                    height: 12,
                    fontSize: 12,
                    borderRadius: 0,
                }
            }
        },
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
        series: [
            {
                name: '一般',
                type: 'bar',
                stack: '1',
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
                        offset: 0, color: '#29B5C1' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0BF1AE' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            {
                name: '严重',
                type: 'bar',
                stack: '1',
                data: data.map((item) => {
                    return item.commonly
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
                        offset: 0, color: '#FFA300' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FFE400' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            {
                name: '紧要',
                type: 'bar',
                stack: '1',
                data: data.map((item) => {
                    return item.serious
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
                        offset: 0, color: '#EE2963' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#F2864C' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
        ]
    }
    return option;
}
export const build_third_option = (data) => {
    let option = {
        legend: {
            data: [
                {
                    name: '一般',
                    icon: 'rect'
                }, {
                    name: '严重',
                    icon: 'rect'
                }, {
                    name: '紧要',
                    icon: 'rect'
                }
            ],
            textStyle: {
                color: '#fff',
                fontFamily: 'AppleSystemUIFont',
                fontSize: 14,
                rich: {
                    width: 12,
                    height: 12,
                    fontSize: 12,
                    borderRadius: 0,
                }
            }
        },
        yAxis: {
            type: 'category',
            data: data.map((item) => {
                return {
                    value: item.team_name,
                    textStyle: {
                        offset: [-20, 20],
                        color: '#fff',
                        fontFamily: 'PingFangSC-Regular, sans-serif'
                    }
                }
            }),
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#23FAFF',
                    width: 0,
                    type: 'solid',
                    fontFamily: 'PingFangSC-Regular, sans-serif'
                }
            },
            offset: -40,
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
        xAxis: {
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
        series: [
            {
                name: '一般',
                type: 'bar',
                stack: '1',
                data: data.map((item) => {
                    return item.count
                }),
                barWidth: 8, // 柱子宽度
                barGap: 70, // 柱子之间间距
                offset: [0, -20],
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#29B5C1' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0BF1AE' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            {
                name: '严重',
                type: 'bar',
                stack: '1',
                data: data.map((item) => {
                    return item.commonly
                }),
                barWidth: 24, // 柱子宽度
                barGap: 70, // 柱子之间间距
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#FFA300' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FFE400' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            {
                name: '紧要',
                type: 'bar',
                stack: '1',
                data: data.map((item) => {
                    return item.serious
                }),
                barWidth: 24, // 柱子宽度
                barGap: 70, // 柱子之间间距
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#EE2963' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#F2864C' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
        ]
    }
    return option;
}
export const build_fourth_option = (data) => {
    let option = {
        color: [
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#1F97FD' }, { offset: 1, color: '#1EE2FD' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#29B5C1' }, { offset: 1, color: '#0BF1AE' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#FFE400' }, { offset: 1, color: '#FFA300' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#F2864C' }, { offset: 1, color: '#EE2963' }], },
            { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#B94EE7' }, { offset: 1, color: '#4C59E9' }], },
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
                markPoint: {
                    symbol: 'pin',
                    symbolSize: [34, 23],

                }
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
export const build_fifth_option = (data) => {
    let option = {
        legend: {
            data: [
                {
                    name: '新增隐患',
                    icon: 'rect'
                }, {
                    name: '消除隐患',
                    icon: 'rect'
                }, {
                    name: '末销项隐患总数',
                    icon: 'rect'
                }
            ],
            textStyle: {
                color: '#fff',
                fontFamily: 'AppleSystemUIFont',
                fontSize: 14,
                rich: {
                    width: 12,
                    height: 12,
                    fontSize: 12,
                    borderRadius: 0,
                }
            }
        },
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
        yAxis: [
            {
                show: false,
                type: 'value',
            }, {
                show: false,
                type: 'value',
            },
        ],
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
        series: [
            {
                name: '新增隐患',
                type: 'bar',
                data: data.map((item) => {
                    return item.serious
                }),
                barWidth: 24, // 柱子宽度
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#29B5C1' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#0BF1AE' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            {
                name: '消除隐患',
                type: 'bar',
                barWidth: 24, // 柱子宽度
                data: data.map((item) => {
                    return item.commonly
                }),
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#FFA300' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FFE400' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            },
            {
                name: '末销项隐患总数',
                type: 'line',
                symbolSize: 6,
                symbol: 'circle',
                itemStyle: {
                    color: '#23FAFF',
                    shadowColor: 'rgba(35,250,255, 0.5)',
                    shadowBlur: 26,
                },
                data: data.map((item) => {
                    return item.count
                }),
                barWidth: 24, // 柱子宽度
                barGap: 70, // 柱子之间间距
                color: '#23FAFF'
            }
        ]
    }
    return option;
}