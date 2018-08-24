/**
 * Created by yuanxh on 2018/8/15.
 */

import React, { Component } from 'react'
import { Row, Divider } from 'antd'
import { connect } from 'react-redux'
import CheckQualitySearch from './CheckQualitySearch'
import TableInfo from '@/components/TableInfo'
import { commonGetList } from '@/reducers/checkQuality'
import messages from 'utils/i18n'
import QualityCheckAction from './QualityCheckAction'
import CheckQualityS from '@/pages/quality/checkQuality'
import AddCheckForm  from '@/pages/quality/checkQuality/AddCheckForm'
import { ACTION_TYPES } from '@/constants'
import { DATABASE_TABLE } from '@/config'
import _ from 'lodash'

class CheckQuality extends Component {
    componentDidMount() {
        this.props.commonGetList(DATABASE_TABLE.QUALITY_PROBLEM, ACTION_TYPES.CHECK_QUALITY.GET_ADD_QUESTION_LIST);
    }
    handleUpdate = (text, record, type) => {
        let _props = {};
        switch (type) {
            case 'update':
                _props = {
                    components: QualityCheckAction,
                    _props: { Component: CheckQualityS, changeComponentFunc: this.props.changeComponent, dataSource: record }
                }
                break;
            case 'reform':
                _props = {
                    components: AddCheckForm,
                    _props: { Component: CheckQualityS, changeComponentFunc: this.props.changeComponent, dataSource: record, type: 'reform' }
                }
                break;
            case 'review':
                _props = {
                    components: AddCheckForm,
                    _props: { Component: CheckQualityS, changeComponentFunc: this.props.changeComponent, dataSource: record, type: 'review' }
                }
                break;
        }
        this.props.changeComponent(_props)
    }
    render() {
        const columns = [
            {
                title: <span>检查结果<Divider type="vertical" />整改时限</span>,
                width: '15%',
                dataIndex: 'status', key: 'status',
            },
            { title: '项目名称', width: '20%', dataIndex: 'projectName', key: 'projectName' },
            { title: <span>检查人<Divider type="vertical" />检查时间</span>, width: '10%', dataIndex: 'checkName', key: 'checkName' },
            { title: '质量问题信息', width: '10%', dataIndex: 'problemRegionInfo', key: 'problemRegionInfo' },
            { title: '整改人', width: '5%', dataIndex: 'changeName', key: 'changeName' },
            { title: '通知人', width: '5%', dataIndex: 'notifyorName', key: 'notifyorName' },
            { title: '例行检查', width: '10%', dataIndex: 'checkTime', key: 'checkTime' },
            { title: '说明', width: '10%', dataIndex: 'problemDesc', key: 'problemDesc' },
            {
                title: 'operation',
                width: '15%',
                dataIndex: 'operation',
                key: 'operation',
                render: (text, record) => {
                    return (
                        <span>
                            <a onClick={() => this.handleUpdate(text, record, 'update')}>update</a>
                            <a onClick={() => this.handleUpdate(text, record, 'delete')}>Delete</a>
                            <a onClick={() => this.handleUpdate(text, record, 'reform')}>createZ</a>
                            <a onClick={() => this.handleUpdate(text, record, 'review')}>createF</a>
                        </span>
                    )
                }
            },
        ];
        const data = _.map(this.props.list.instances, (obj, index) => {
            let backgroundColor = {}
            let checkResult = ''
            let warnLevel = ''
            let warnLevelBack = {}
            switch (obj['status']) {
                case 0: checkResult = messages.qualityManage.checkResult0; break;
                case 1: checkResult = messages.qualityManage.checkResult1; backgroundColor = { background: 'linear-gradient(0deg, #FFA300 0%, #FFE400 100%)' }; break;
                case 2: checkResult = messages.qualityManage.checkResult2; backgroundColor = { background: 'linear-gradient(0deg, #FF5400 0%, #FFA100 100%)' }; break;
                case 3: checkResult = messages.qualityManage.checkResult3; backgroundColor = { background: 'linear-gradient(-180deg, #95FA7F 0%, #14CC8C 100%)' }; break;
                case 4: checkResult = messages.qualityManage.checkResult4; backgroundColor = { background: 'linear-gradient(-179deg, #F2864C 0%, #CE1D51 100%)' }; break;
            }
            obj['status'] = <div key={obj['status']}><div><span className="checkQuestionStatus" style={backgroundColor}></span><span>{checkResult}</span></div><div>hdjhdjhhj</div></div>
            switch (obj['problemLevel']) {
                case 1: warnLevel = messages.qualityManage.warnLevel1; warnLevelBack = {
                    background: 'rgba(35,250,255,0.30)',
                    color: '#23FAFF',
                    border: '1px solid #23FAFF'
                }; break;
                case 2: warnLevel = messages.qualityManage.warnLevel2; warnLevelBack = {
                    background: 'rgba(255,64,64,0.30)',
                    color: '#FF4040',
                    border: '1px solid #FF4040'
                }; break;
                case 3: warnLevel = messages.qualityManage.warnLevel3; warnLevelBack = {
                    background: 'rgba(255,144,0,0.30)',
                    color: '#FF9000',
                    border: '1px solid #FF9000'
                }; break;
            }
            obj['problemRegionInfo'] = <div key={obj['problemLevel']}><div><div className="checkQuestionWarnLevel" style={warnLevelBack}>{warnLevel}</div><span>{obj['qualityProblemTypeName']}</span></div>
                <span>3</span><span>D3单体4层</span>
            </div>
            return obj;
        });
        return (
            <Row>
                <Row>
                    <CheckQualitySearch {...this.props}/>
                </Row>
                <Row>
                    <TableInfo Columns={columns}
                        DataSource={data}></TableInfo>
                </Row>
            </Row>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.checkQuestion.getAddQuestionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        commonGetList: (object_type_id, action_type) => {
            dispatch(commonGetList({ object_type_id, action_type }))
        }
    }
}
const CheckQualitys = connect(mapStateToProps, mapDispatchToProps)(CheckQuality)
export default CheckQualitys