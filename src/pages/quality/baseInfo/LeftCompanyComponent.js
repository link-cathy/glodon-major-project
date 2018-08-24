/**
 * Created by fancl on 2018/8/15.
 */
import React, { Component } from 'react'
import { Input, Button } from 'antd'
import TableInfo from '@/components/TableInfo'
import ModalInfo from '@/components/ModalInfo'
import AddLaborCompany from './AddLaborCompany'
import { ACTION_TYPES } from '@/constants'
const action_type = ACTION_TYPES.CHECK_QUALITY
const Search = Input.Search
import { getSubConstratorList, getSubConstratorTeamList } from '@/reducers/qualityLabor'
import { connect } from 'react-redux'
import messages from 'utils/i18n'
const qualityManage = messages.qualityManage

class LeftCompanyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    componentDidMount() {
        const json = {
            'conditions': {
                'laborType': this.props.laborType
            },
            'end_page': 10,
            'object_type_id': 'subConstrator',
            'page_size': 10000,
            'start_page': 1
        }
        this.props.getSubConstratorList(json)
        // this.props.getSubConstratorTeamList({ object_type_id: 'subConstratorTeam', page_size: 10000, start_page: 1 })
    }
    transferVisible({ visible, ...props }) {
        this.setState({
            visible,
            ...props
        })
    }
    searchQuery(value) {
        const json = {
            'conditions': {
                'laborType': this.props.laborType,
                // 'unitName': value.trim()
            },
            'end_page': 10,
            'object_type_id': 'subConstrator',
            'page_size': 10000,
            'start_page': 1
        }
        if (value && value.trim().length > 0) {
            json.conditions.unitName = value.trim()
        }
        this.props.getSubConstratorList(json)
    }
    render() {
        const columns = [
            {
                title: qualityManage.companyName,
                dataIndex: 'companyName',
                key: 'companyName',
                render: (text, record, index) => {
                    return (
                        <div>
                            <div>
                                {record.unitName}
                            </div>
                            <div style={{ fontSize: '0.875rem' }}>
                                {qualityManage.unifiedSocialCode + record.licence}
                            </div>
                        </div>
                    )
                }
            },
            {
                title: '队伍数量',
                dataIndex: 'teamNum',
                key: 'teamNum',
                render: (text, record, index) => {
                    return (
                        <div>
                            {record.teamNum || 0 + '队伍'}
                        </div>
                    )
                }
            },
        ];
        return (
            <div>
                <div style={{ margin: '20px 20px 5px 30px' }}>
                    <div>
                        <Search
                            placeholder={qualityManage.companyName}
                            onSearch={(value) => {
                                this.searchQuery(value)
                            }}
                            style={{ width: '70%' }}
                        />
                        <Button icon="plus"
                            className="common-button-style"
                            style={{ float: 'right', width: '27%' }} onClick={() => {
                                this.setState({ visible: true })
                            }}>
                            企业
                        </Button>
                    </div>
                    <div style={{ fontSize: '0.875rem', marginTop: '10px' }}>
                        共有{this.props.laborType === 1 ? this.props.subConstratorData[action_type.GET_LABOR_LIST].total_count : this.props.subConstratorData[action_type.GET_PROFESSIONAL_LIST].total_count}家企业
                    </div>
                </div>
                <TableInfo
                    Columns={columns}
                    DataSource={this.props.laborType === 1 ? this.props.subConstratorData[action_type.GET_LABOR_LIST].instances : this.props.subConstratorData[action_type.GET_PROFESSIONAL_LIST].instances}
                    pagination={false}
                    showHeader={false}
                    style={{ marginLeft: '10px' }}
                    onRow={(record, index) => {
                        return {
                            onClick: () => { this.props.handleChangeSubConstrator(record) },       // 点击行
                        }
                    }}
                >
                </TableInfo>
                <ModalInfo
                    visible={this.state.visible}
                    transferVisible = {(item) => (this.transferVisible(item))}
                    Contents= {AddLaborCompany}
                    width={1000}
                    modalTitle="劳务分包商"
                    destroyOnClose={true}
                    _props={{ transferVisible: (item) => (this.transferVisible.bind(this)) }}
                >
                </ModalInfo>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.qualitySubConstratorData, 676767);
    return {
        subConstratorData: state.qualitySubConstratorData // laborData : state.qualitySubConstratorData[action_type.GET_PROFESSIONAL_LIST]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSubConstratorList: (json) => {
            dispatch(getSubConstratorList(json))
        },
        getSubConstratorTeamList: (json) => {
            dispatch(getSubConstratorTeamList(json))
        }
    }
}
const LeftCompany = connect(mapStateToProps, mapDispatchToProps)(LeftCompanyComponent)
export default LeftCompany