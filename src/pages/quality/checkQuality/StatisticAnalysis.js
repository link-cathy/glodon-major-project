/**
 * Created by yuanxh on 2018/8/23.
 */

import React, { Component } from 'react'
import { Row, Col, Progress  } from 'antd'
import echarts from 'echarts'
import titleStyle from '../../../styles/processInfo/images/titleStyle.png'
import messages from 'utils/i18n'
import { build_first_option, build_seconde_option, build_fourth_option, build_third_option, build_fifth_option } from './echart-option/echart-option'
const data2 = [
    {
        'team_id': 't0',
        'team_name': '严里发',
        'count': '7',
        'commonly': '2',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '陈祥海',
        'count': '3',
        'commonly': '1',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '陈祥海',
        'count': '4',
        'commonly': '1',
        'serious': '0'
    }, {
        'team_id': 't0',
        'team_name': '陈祥海',
        'count': '5',
        'commonly': '0',
        'serious': '1'
    }
]
const data3 = [
    {
        'team_id': 't0',
        'team_name': '常州市金坛区广顺建筑安装劳务有限公司',
        'count': '8',
        'commonly': '1',
        'serious': '0'
    }, {
        'team_id': 't0',
        'team_name': '常州市金坛区宏达建筑安装劳务有限公司',
        'count': '4',
        'commonly': '3',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '常州市金坛区金凯建筑安装劳务有限公司',
        'count': '7',
        'commonly': '1',
        'serious': '0'
    }
]
const data4 =  [
    {
        'work_type_id': 'wt0',
        'work_type_name': '材料管理',
        'count': '3'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '坑边荷裁',
        'count': '2'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '施工场地',
        'count': '1'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '洞口防护',
        'count': '1'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '其他',
        'count': '2'
    },
]
const data5 = [
    {
        'team_id': 't0',
        'team_name': '6月01',
        'count': '7',
        'commonly': '2',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '6月02',
        'count': '3',
        'commonly': '1',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '6月03',
        'count': '4',
        'commonly': '1',
        'serious': '0'
    }, {
        'team_id': 't0',
        'team_name': '6月04',
        'count': '5',
        'commonly': '0',
        'serious': '1'
    },
    {
        'team_id': 't0',
        'team_name': '6月05',
        'count': '7',
        'commonly': '2',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '6月06',
        'count': '3',
        'commonly': '1',
        'serious': '1'
    }, {
        'team_id': 't0',
        'team_name': '6月07',
        'count': '4',
        'commonly': '1',
        'serious': '0'
    }, {
        'team_id': 't0',
        'team_name': '6月08',
        'count': '5',
        'commonly': '0',
        'serious': '1'
    }
]
class StatisticAnalysis extends Component {
    componentDidMount() {
        this.renderNumberChart()
        this.initSecondChar();
        this.initThirdChar()
        this.initFourthChar();
        this.initFifthChar();
    }
    renderNumberChart =() => {
        let dangerTotal = echarts.init(document.getElementById('dangerTotal'))
        dangerTotal.setOption(build_first_option())
    }
    initSecondChar() {
        let dangerTotal = echarts.init(document.getElementById('dangerProjectMan'))
        dangerTotal.setOption(build_seconde_option(data2))
    }
    initThirdChar() {
        let dangerTotal = echarts.init(document.getElementById('dangerProjectCompany'))
        dangerTotal.setOption(build_third_option(data3))
    }
    initFourthChar() {
        let dangerTotal = echarts.init(document.getElementById('safeDangerType'))
        dangerTotal.setOption(build_fourth_option(data4))
    }
    initFifthChar() {
        let dangerTotal = echarts.init(document.getElementById('safeDangerAnalysis'))
        dangerTotal.setOption(build_fifth_option(data5))
    }
    render() {
        return (
            <Row className="statistic-analysis-content pocp-common-div-height1">
                <Row className="statistic-analysis-content-height">
                    <Col span={8} className="pocp-common-div-height2 top-chart-content">
                        <Row >
                            <Col span={1}>
                                <img src={titleStyle} />
                            </Col>
                            <Col span={10}>
                                <span>{messages.qualityManage.dangerTotal}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={16}>
                                <Row id="dangerTotal" style={{ height: '280px' }}></Row>
                            </Col>
                            <Col span={8}>
                                <Row><Col span={22}>{messages.qualityManage.warnQuestionMount}</Col><Col span={2}>{messages.processInfo.commonNum}</Col></Row>
                                <Progress percent={30}></Progress>
                                <Row><Col span={22}>{messages.qualityManage.warnQuestionMount}</Col><Col span={2}>{messages.processInfo.commonNum}</Col></Row>
                                <Progress percent={30}></Progress>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8} className="top-chart-content">
                        <div className="char-title-content">
                            <span className="char-title">{messages.qualityManage.dangerProjectMan}</span>
                        </div>
                        <div id="dangerProjectMan"></div>
                    </Col>
                    <Col span={8} className="top-chart-content">
                        <div className="char-title-content">
                            <span className="char-title">{messages.qualityManage.dangerProjectCompany}</span>
                        </div>
                        <div id="dangerProjectCompany"></div>
                    </Col>
                </Row>
                <Row className="pocp-common-div-height2">
                    <Col span = {9} className="bottom-chart-content">
                        <div className="char-title-content">
                            <span className="char-title">{messages.qualityManage.safeDangerType}</span>
                        </div>
                        <div id="safeDangerType"></div>
                    </Col>
                    <Col span = {15} className="bottom-chart-content">
                        <div className="char-title-content">
                            <span className="char-title">{messages.qualityManage.safeDangerAnalysis}</span>
                        </div>
                        <div id="safeDangerAnalysis"></div>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default StatisticAnalysis