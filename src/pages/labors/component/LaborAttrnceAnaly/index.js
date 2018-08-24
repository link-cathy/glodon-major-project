import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import { } from '@/reducers/labors';
import cimApi from 'utils/cimApi';
import { buildRanksBarOption, buildTypeOfWorkPieOption } from './chartOption'

const rankBarID = 'ranks_bar';
const typeOfWorkID = 'typeOfWork_pie'
const teams = [
    {
        'team_id': 't0',
        'team_name': '队伍0',
        'count': '199'
    }, {
        'team_id': 't0',
        'team_name': '队伍1',
        'count': '188'
    }, {
        'team_id': 't0',
        'team_name': '队伍2',
        'count': '167'
    }, {
        'team_id': 't0',
        'team_name': '队伍3',
        'count': '145'
    }, {
        'team_id': 't0',
        'team_name': '队伍4',
        'count': '123'
    }, {
        'team_id': 't0',
        'team_name': '队伍5',
        'count': '56'
    }, {
        'team_id': 't0',
        'team_name': '队伍6',
        'count': '89'
    }, {
        'team_id': 't0',
        'team_name': '队伍7',
        'count': '123'
    }, {
        'team_id': 't0',
        'team_name': '队伍8',
        'count': '188'
    }, {
        'team_id': 't0',
        'team_name': '队伍9',
        'count': '216'
    }, {
        'team_id': 't0',
        'team_name': '队伍10',
        'count': '200'
    },
]
const typesOfWork = [
    {
        'work_type_id': 'wt0',
        'work_type_name': '木工',
        'count': '15'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '瓦工',
        'count': '20'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '泥工',
        'count': '20'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '电工',
        'count': '5'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '机械工',
        'count': '12'
    }, {
        'work_type_id': 'wt0',
        'work_type_name': '测绘人员',
        'count': '4'
    },
]
const projectID = 1
class LaborAttenceAnasyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            presence_num: 0,
            realTime_num: 0
        }
    }
    initRanksBar() {
        // 获取数据
        cimApi.getTeamWorkers(projectID).then((result) => {
            if (result.message.toLowerCase() === 'success' && result.data) {
                let Chart = echarts.init(document.getElementById(rankBarID))
                let option = buildRanksBarOption(teams)
                Chart.setOption(option);
            }
        })
    }
    initTypeOfWorkPie() {
        cimApi.getWorkTypeWorkers(projectID).then((result) => {
            if (result.message.toLowerCase() === 'success' && result.data) {
                let Chart = echarts.init(document.getElementById(typeOfWorkID))
                let option = buildTypeOfWorkPieOption(typesOfWork)
                Chart.setOption(option);
            }
        })
    }
    initWorkerNum() {
        cimApi.getProjectWorkers(projectID).then((result) => {
            if (result.message.toLowerCase() === 'success') {
                this.setState({
                    presence_num: result.data[0].count_onhand,
                    realTime_num: result.data[0].count_intime
                })
            }
        })
    }
    componentDidMount() {
        this.initWorkerNum()
        this.initRanksBar()
        this.initTypeOfWorkPie()
    }
    render() {
        return (
            <section className="labourDemandAnasy-content labor-static-style">
                <article>
                    <header>
                        <div className="project-name-content"><span>{this.props.projectInfo.name}</span></div>
                    </header>
                    <div>
                        <Row className="summaryStatict">
                            <Col span={6}></Col>
                            <Col span={6} className="num-people-static">
                                <div>
                                    <div className="presence-num-content">
                                        <div><span className="shwo-name">在场</span></div>
                                        <div><span className="shwo-value presence-num">{this.state.presence_num}</span></div>
                                    </div>
                                    <div className="realTime-num-content">
                                        <div><span className="shwo-name">实时</span></div>
                                        <div><span className="shwo-value realTime-num">{this.state.realTime_num}</span></div>
                                    </div>
                                </div>
                            </Col>
                            <Col span={6}></Col>
                            <Col span={6} className="tips-static"></Col>
                        </Row>
                        <div className="detailStatic">
                            <div>
                                <Row >
                                    <Col span={12} className="rankBar-content">
                                        <div className="title-content"><span className="detail-title">队伍人数</span></div>
                                        <div id={rankBarID}></div>
                                    </Col>
                                    <Col span={12}>
                                        <div className="title-content"><span className="detail-title">工种人数</span></div>
                                        <div id={typeOfWorkID}></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        projectInfo: { name: '数字中国-全称', }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
const LaborAttrnceAnaly = connect(mapStateToProps, mapDispatchToProps)(LaborAttenceAnasyComponent)
export default LaborAttrnceAnaly;