/*
* @Author: linf
* @Date:   2018/8/2
* @Explain : 管理人员考勤管理组件入口
*/
import React, { Component } from 'react'
import HeaderOperation from './HeaderOperation'
import TableInfo from '@/components/TableInfo';
import TableOperation from './TableOperation'
import deepCopy from '../../../../utils/deepCopy';
import moment from 'moment';
import messages from 'utils/i18n';
import { connect } from 'react-redux'
import utils from 'utils/utils';
import { config } from '@/config';
import { getManagerAMSummarys, deleteManagerAMSummarys, changeManagerAMFormState, changeCurrentManagerAMSummarysRow, getManagerAMDetail, changeManagerAMDetailNoAsyn } from '@/reducers/labors';

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    }, {
        title: '项目名称',
        dataIndex: 'projectName',
        key: 'projectName',
    }, {
        title: '单位名称',
        dataIndex: 'unitName',
        key: 'unitName',
    }, {
        title: '考勤日期',
        dataIndex: 'checkDate',
        key: 'checkDate',
    }, {
        title: '考勤记录人',
        dataIndex: 'recorderName',
        key: 'recorderName',
    }, {
        title: '考勤填报时间',
        dataIndex: 'recordDate',
        key: 'recordDate',
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
    }
];

// 查询条件
let queryConfig = {
    data: {},
    end_page: 2,
    object_type_id: messages.labor.object_type_id.managerAttenceSummary,
    page_size: 10,
    start_page: 1
}
const dateFormat = 'YYYY-MM-DD'
class ManagerAttenceMgComponent extends Component {
    componentDidMount() {
        queryConfig = { ...queryConfig, ...{ conditions: {}, end_page: 2, start_page: 1 }}
        this.props.getSummarys(queryConfig)
    }
    pageTo(page, pageSize) {
        queryConfig = { ...queryConfig, ...{ end_page: page + 1, start_page: page, page_size: pageSize }}
        this.props.getSummarys(queryConfig)
    }
    queryData(json) {
        queryConfig = { ...queryConfig, ...{ conditions: json, end_page: 2, start_page: 1 }}
        this.props.getSummarys(queryConfig)
    }
    buildData(datas) {
        return datas.map((item, index) => {
            let copyItem = deepCopy(item);
            copyItem.index = index + 1;
            copyItem.checkDate = moment(copyItem.checkDate).format(dateFormat);
            copyItem.operation = <TableOperation
                deleteSummary={this.props.deleteSummary}
                changeCurrenSummarysRow={this.props.changeCurrenSummarysRow}
                changeFormState={this.props.changeFormState}
                summaryRow={item}
                queryData={this.queryData.bind(this)}
                getManagerAMDetail={this.props.getManagerAMDetail}
                getDetail={this.props.getDetail}
            />;
            return copyItem;
        })
    }
    render() {
        const pagination = {
            defaultCurrent: this.props.summaryPageInfo.rp,
            total: this.props.summaryPageInfo.total,
            showTotal: utils.pageShowTotal,
            pageSize: config.laborsInfo.queryConfig.pageSize,
            className: 'defaul-style-pagination',
            size: 'small',
            onChang: this.pageTo,
        }
        return (
            <section className="laborEntryAndExit-content labor-static-style">
                <article>
                    <header>
                        <HeaderOperation
                            queryData={this.queryData.bind(this)}
                            changeCurrenSummarysRow={this.props.changeCurrenSummarysRow}
                            changeFormState={this.props.changeFormState}
                            deleteSummarys={this.props.deleteSummary}
                            changeDetailNoAsyn={this.props.changeDetailNoAsyn}
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
        summaryRows: state.labors.managerAMSummarys.rows,
        summaryPageInfo: state.labors.managerAMSummarys.pageInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSummarys: (args) => {
            return dispatch(getManagerAMSummarys(args))
        },
        deleteSummary: (args) => {
            return dispatch(deleteManagerAMSummarys(args))
        },
        getDetail: (args) => {
            return dispatch(getManagerAMDetail(args))
        },
        changeFormState: (toggle) => {
            dispatch(changeManagerAMFormState(toggle));
        },
        changeCurrenSummarysRow: (toggle) => {
            dispatch(changeCurrentManagerAMSummarysRow(toggle));
        },
        changeDetailNoAsyn: (datas) => {
            dispatch(changeManagerAMDetailNoAsyn(datas))
        }
    }
}
const ManagerAttenceMgr = connect(mapStateToProps, mapDispatchToProps)(ManagerAttenceMgComponent)
export default ManagerAttenceMgr;