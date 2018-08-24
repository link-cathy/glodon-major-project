/*
* @Author: linf
* @Date:   2018/8/2
* @Explain : 管理人员考勤管理组件入口
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderOperation from './HeaderOperation'
import TableOperation from './TableOperation'
import deepCopy from '../../../../utils/deepCopy';
import moment from 'moment';
import messages from 'utils/i18n';
import { getLaborEntryAndExitSummarys, deleteLaborEntryAndExitSummary, changeLaborsEAEFormState, changeCurrentLaborEAESummarysRow } from '@/reducers/labors';
import TableInfo from '@/components/TableInfo';
import { config } from '@/config';
import utils from 'utils/utils';

const columns = [{
    title: '序号',
    dataIndex: 'index',
    key: 'index',
}, {
    title: '项目名称',
    dataIndex: 'projectName',
    key: 'projectName',
}, {
    title: '进退场日期',
    dataIndex: 'checkDate',
    key: 'checkDate',
}, {
    title: '进场人数',
    dataIndex: 'approachCount',
    key: 'approachCount',
}, {
    title: '出场人数',
    dataIndex: 'exitCount',
    key: 'exitCount',
}, {
    title: '填报人',
    dataIndex: 'recorderName',
    key: 'recorderName',
}, {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
}];

// 查询条件
let queryConfig = {
    data: {},
    end_page: 2,
    object_type_id: messages.labor.object_type_id.laborApproachexitSummary,
    page_size: 10,
    start_page: 1
}
const dateFormat = 'YYYY-MM-DD'
class ManagerAttenceMgr extends Component {
    componentDidMount() {
        queryConfig = { ...queryConfig, ...{ conditions: {}, end_page: 2, start_page: 1 }}
        this.props.getLaborEntryAndExitSummarys(queryConfig)
    }
    buildData(datas) {
        return datas.map((item, index) => {
            let copyItem = deepCopy(item);
            copyItem.index = index + 1;
            copyItem.checkDate = moment(copyItem.checkDate).format(dateFormat);
            copyItem.operation = <TableOperation
                deleteLaborEntryAndExitSummary={this.props.deleteLaborEntryAndExitSummary}
                changeCurrentLaborEAESummarysRow={this.props.changeCurrentLaborEAESummarysRow}
                changeLaborsEAEFormState={this.props.changeLaborsEAEFormState}
                summaryRow={this.props.summaryRows[index]}
                queryData={this.queryData.bind(this)}
            />;
            return copyItem;
        })
    }
    pageTo(page, pageSize) {
        queryConfig = { ...queryConfig, ...{ end_page: page + 1, start_page: page, page_size: pageSize }}
        this.props.getLaborEntryAndExitSummarys(queryConfig)
    }
    queryData(json) {
        queryConfig = { ...queryConfig, ...{ conditions: json, end_page: 2, start_page: 1 }}
        this.props.getLaborEntryAndExitSummarys(queryConfig)
    }
    render() {
        const pagination = {
            defaultCurrent: this.props.summaryPageInfo.rp,
            total: this.props.summaryPageInfo.total,
            showTotal: utils.pageShowTotal,
            className: 'defaul-style-pagination',
            size: 'small',
            pageSize: config.laborsInfo.queryConfig.pageSize,
            onChang: this.pageTo,
        }
        return (
            <section className="mangerAttenceMgr-content labor-static-style">
                <article>
                    <header>
                        <HeaderOperation
                            queryData={this.queryData}
                            changeCurrentLaborEAESummarysRow={this.props.changeCurrentLaborEAESummarysRow}
                            changeLaborsEAEFormState={this.props.changeLaborsEAEFormState}
                            deleteLaborEntryAndExitSummary={this.props.deleteLaborEntryAndExitSummary}
                        />
                    </header>
                    <div>
                        <TableInfo pagination={pagination} Columns={columns} DataSource={this.buildData(this.props.summaryRows)} />
                    </div>
                </article>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        summaryRows: state.labors.laborsEAESummaryData.rows,
        summaryPageInfo: state.labors.laborsEAESummaryData.pageInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLaborEntryAndExitSummarys: (args) => {
            return dispatch(getLaborEntryAndExitSummarys(args))
        },
        deleteLaborEntryAndExitSummary: (args) => {
            return dispatch(deleteLaborEntryAndExitSummary(args))
        },
        changeLaborsEAEFormState: (toggle) => {
            dispatch(changeLaborsEAEFormState(toggle));
        },
        changeCurrentLaborEAESummarysRow: (toggle) => {
            dispatch(changeCurrentLaborEAESummarysRow(toggle));
        }
    }
}

let ManagerAttenceMgrs = connect(mapStateToProps, mapDispatchToProps)(ManagerAttenceMgr);
export default ManagerAttenceMgrs;