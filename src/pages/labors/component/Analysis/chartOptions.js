import echarts from 'echarts/lib/echarts'

export const online_team_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        data: ['李改', '刘智明', '杜凌'],
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        // name: '销量',
        type: 'bar',
        data: [5, 20, 36],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        },
    }]
};
export const online_category_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
        ],
        radius: ['50%', '70%'],
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        },
    }]
};
export const online_today_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        type: 'category',
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        // name: '销量',
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        }
    }]
};
export const daily_recent_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        type: 'category',
        data: ['7月1日', '7月2日', '7月3日', '7月4日', '7月5日', '7月6日', '7月7日'],
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        // name: '销量',
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        }
    }]
};

export const total_age_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
        // name: '访问来源',
        type: 'pie',
        data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
        ],
        radius: ['50%', '70%'],
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        },
    }]
};
export const total_region_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        data: ['李改', '刘智明', '杜凌'],
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        // name: '销量',
        type: 'bar',
        data: [5, 20, 36],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        },
    }]
};
export const total_people_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        data: ['李改', '刘智明', '杜凌'],
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        // name: '销量',
        type: 'bar',
        data: [5, 20, 36],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        },
    }]
};
export const total_inout_option = {
    // /*title: {
    //     text: 'ECharts 入门示例'
    // }, */
    tooltip: {},
    // legend: {
    //     data:['销量']
    // },
    xAxis: {
        data: ['李改', '刘智明', '杜凌'],
        nameTextStyle: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        // name: '销量',
        type: 'bar',
        data: [5, 20, 36],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#1EE2FD' },
                        { offset: 1, color: '#1F97FD' }
                    ]
                )
            }
        },
    }]
};
