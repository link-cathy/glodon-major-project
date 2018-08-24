/**
 * Created by fancl on 2018/8/15.
 */
import React, { Component } from 'react';
import TableInfo from '@/components/TableInfo'
import { Input, Button, Popconfirm, Icon } from 'antd'
import ModalInfo from '@/components/ModalInfo'
import AddLaborTeam from './AddLaborTeam'
import messages from 'utils/i18n'
import { ACTION_TYPES } from '@/constants'
const action_type = ACTION_TYPES.CHECK_QUALITY
const qualityManage = messages.qualityManage
const Search = Input.Search
import { DATABASE_TABLE, GET_LIST_ARG } from '@/config'
import { getSubConstratorTeamList } from '@/reducers/qualityLabor'
import { connect } from 'react-redux'

class RightTableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            subConstratorTeam: null
        }
    }
    subConstratorChange(event) {
        const json = GET_LIST_ARG({ object_type_id: DATABASE_TABLE.SUNCONSTRATOR_TEAM, conditions: { 'unitId': event.unitId }})
        this.props.getSubConstratorTeamList(json)
    }
    searchQuery(value) {
        let json = {};
        json = GET_LIST_ARG({ object_type_id: DATABASE_TABLE.SUNCONSTRATOR_TEAM })
        if (value && value.trim().length > 0) {
            json.conditions['leadName'] = value.trim()
        }
        this.props.getSubConstratorTeamList(json)
    }
    transferVisible({ visible, ...props }) {
        this.setState({
            visible,
            ...props
        })
    }
    render() {
        const columns = [
            { title: qualityManage.captainName, dataIndex: 'leadName', key: 'captainName' },
            { title: qualityManage.captainMobile, dataIndex: 'leadPhone', key: 'captainMobile' },
            { title: qualityManage.captainID, dataIndex: 'leadPinID', key: 'captainID' },
            { title: qualityManage.teamSize + '(人)', dataIndex: 'scale', key: 'teamSize' },
            { title: qualityManage.teamSource, dataIndex: 'source', key: 'teamSource' },
            { title: qualityManage.remark, dataIndex: 'remark', key: 'remark' },
            {
                title: messages.operation.operate,
                dataIndex: 'operate',
                key: 'operate',
                width: '10%',
                render: (text, record, index) => (
                    <div>
                        <Icon
                            type="edit"
                            style={{ marginRight: '20px' }}
                            onClick={() => {
                                this.setState({ subConstratorTeam: record, visible: true })
                            }}/>
                        <Popconfirm
                            title="确定要取消正在导入的数据?"
                            okText="确定"
                            cancelText="取消">
                            <Icon
                                type="delete"
                                style={{ color: '#979797' }}
                            />
                        </Popconfirm>
                    </div>
                )
            },
        ];
        return (
            <div>
                <div style={{ margin: '20px 20px 20px 30px' }}>
                    <Search
                        placeholder={qualityManage.captainName}
                        onSearch={value => {
                            this.searchQuery(value)
                        }}
                        style={{ width: '28%', marginLeft: '60%' }}
                    />
                    <Button
                        icon="plus"
                        className="common-button-style"
                        style={{ float: 'right', width: '10%' }}
                        onClick={
                            () => {
                                this.setState({ visible: true })
                            }}>
                        队伍
                    </Button>
                </div>
                <TableInfo
                    Columns={columns}
                    DataSource={this.props.subConstrator && this.props.conditionTeamData[this.props.subConstrator.unitId] ? this.props.conditionTeamData[this.props.subConstrator.unitId].instances : []}
                    style={{ marginTop: '15px' }}
                >
                </TableInfo>
                <ModalInfo
                    visible={this.state.visible}
                    transferVisible = {(item) => (this.transferVisible(item))}
                    Contents= {AddLaborTeam}
                    width={1000}
                    modalTitle={messages.qualityManage.laborTeam}
                    destroyOnClose={true}
                    _props={{ transferVisible: (item) => (this.transferVisible.bind(this)), laborType: this.props.laborType, subConstratorTeam: this.state.subConstratorTeam }}
                >
                </ModalInfo>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        conditionTeamData: state.qualitySubConstratorData[action_type.GET_CONDITION_TEAM_LIST] // laborData : state.qualitySubConstratorData.professionalData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSubConstratorTeamList: (json) => {
            dispatch(getSubConstratorTeamList(json))
        }
    }
}
const RightTableTeam = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(RightTableComponent)
export default RightTableTeam