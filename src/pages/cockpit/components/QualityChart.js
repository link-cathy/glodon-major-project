/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

import echarts from 'echarts'

class QualityChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        // this.setState({
        //     count: ++this.state.count
        // })
    }

    componentDidMount() {
        // this.props.getQualityInfo()
        // this.drawQualityChart()
    }

    drawQualityChart() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('quality'));

        let option = {
            series: [
                {
                    name: '',
                    type: 'gauge',
                    startAngle: 225, // 总的360，设置180就是半圆
                    endAngle: -45,
                    center: ['47%', '50%'], // 整体的位置设置
                    radius: 30,

                    axisLine: {
                        lineStyle: {
                            width: 1, // 柱子的宽度
                            color: [[1, '#FE3D3D']] // 0.298是百分比的比例值（小数），还有对应两个颜色值
                        }
                    },
                    axisTick: {
                        show: false,
                        length: 5,
                        shadowOffsetX: 5,
                        splitNumber: 2
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: true,
                        offsetCenter: [0, '90%'], // 标题位置设置
                        textStyle: {
                            // 标题样式设置
                            color: '#FFF',
                            fontSize: 14,
                            fontFamily: '微软雅黑'
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [
                        {
                            // 显示数据
                            value: 0,
                            name: '超期'
                        }
                    ]
                },
                {
                    name: '',
                    type: 'gauge',
                    startAngle: 225, // 总的360，设置180就是半圆
                    endAngle: -45,
                    center: ['47%', '50%'], // 整体的位置设置
                    radius: 50,
                    axisLine: {
                        lineStyle: {
                            width: 10, // 柱子的宽度
                            color: [
                                [
                                    0, '#FE3D3D'
                                ],
                                [1, '#8D8A93']
                            ] // 0.298是百分比的比例值（小数），还有对应两个颜色值
                        }
                    },
                    axisTick: {
                        show: false,
                        splitNumber: 2
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    itemStyle: {
                        color: '#FFF'
                    },
                    title: {
                        show: true,
                        offsetCenter: [0, '0%'], // 标题位置设置
                        textStyle: {
                            // 标题样式设置
                            color: '#FFF',
                            fontSize: 24,
                            fontFamily: '微软雅黑',
                            fontWeight: 'bold'
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [
                        {
                            // 显示数据
                            value: 0,
                            name: '0'
                        }
                    ]
                }
            ]
        };

        // const {qualityInfo, isLoading, errorMsg} = this.props.qualityInfo
        // var unSolvedCount  = qualityInfo.existingProblem;  //未销项
        // var timeoutAndUnchangedCount  = qualityInfo.outOfDateProblem || 0;  //超期未整改
        // var matterCount  = qualityInfo.matterCount;  //紧要
        // var seriousCount  = qualityInfo.seriousCount;  //严重
        //
        // option.series[1].data[0].value = timeoutAndUnchangedCount;
        // option.series[1].data[0].name = timeoutAndUnchangedCount+"";
        //
        // option.series[1].axisLine.lineStyle.color[0][0] = formatValue(timeoutAndUnchangedCount/unSolvedCount,2);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    render() {
        // const {qualityInfo, isLoading, errorMsg} = this.props.qualityInfo
        return (
            <Card className="card" id="quality_module" title={messages.homePage.quality} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">质量</CardTitle> */}
                {/* <CardBody className="card-body" style={{paddingTop:'0px !important', height: '164px'}}> */}

                {/* <div className="pie-chart"> */}
                {/* <div id="quality" style={{width: '140px', height: '140px'}}></div> */}
                {/* <div className="label"> */}
                {/* <span type="label"> */}
                {/* 未销项问题 */}
                {/* </span> */}
                {/* <span type="value" id="unSloveProblem"> */}
                {/* {qualityInfo.existingProblem || 0} */}
                {/* </span> */}
                {/* <span type="label"> */}
                {/* 个 */}
                {/* </span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="bar-chart"> */}
                {/* <div className="bar-item importantProblem"> */}
                {/* <div className="header"> */}
                {/* <span className="left"> 紧要问题 </span> */}
                {/* <span className="right"> <span id="importantProblem"> {qualityInfo.matterCount || 0} </span> 个 </span> */}
                {/* </div> */}
                {/* <div className="body"> */}
                {/* <div className="shared-horizontal-bar" style={{height: '3px', width: '100px'}}> */}
                {/* <div style={{width: '0%', background: 'rgb(254, 61, 61)', borderRadius: '1.5px 0px 0px 1.5px'}}> */}

                {/* </div> */}
                {/* <div style={{width: '100%', background: 'rgba(160, 160, 160, 0.4)', borderRadius: '0px 1.5px 1.5px 0px'}}> */}

                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="footer" id="percentage_important"> {formatValue(qualityInfo.matterCount / qualityInfo.unSolvedCount * 100, 1)}% </div> */}

                {/* </div> */}
                {/* <div className="bar-item seriousProblem"> */}
                {/* <div className="header"> */}
                {/* <span className="left"> 严重问题 </span> */}
                {/* <span className="right"> <span id="seriousProblem"> {qualityInfo.seriousCount || 0}</span> 个 </span> */}
                {/* </div> */}
                {/* <div className="body"> */}
                {/* <div className="shared-horizontal-bar" style={{height: '3px', width: '100px'}}> */}
                {/* <div style={{width: '0%', background: 'rgb(246, 198, 68)', borderRadius: '1.5px 0px 0px 1.5px'}}> */}

                {/* </div> */}
                {/* <div style={{width: '100%', background: 'rgba(160, 160, 160, 0.4)', borderRadius: '0px 1.5px 1.5px 0px'}}> */}

                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="footer"  id="percentage_serious"> {formatValue(qualityInfo.seriousCount / qualityInfo.unSolvedCount* 100, 1)}% </div> */}
                {/* </div> */}
                {/* </div> */}

                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default QualityChart; // = connect((state) => ({qualityInfo: state.qualityInfo}), {getQualityInfo})(QualityChart)

// function formatValue(value, digits, returnStr) {
//     if (digits < 0) {
//         console.log('小数点后位数不能为负数');
//         value = 0;
//     }
//     if (!value) {
//         value = 0;
//     }
//     if (returnStr) {
//         return parseFloat(value).toFixed(digits);
//     }
//     return parseFloat(parseFloat(value).toFixed(digits));
// }