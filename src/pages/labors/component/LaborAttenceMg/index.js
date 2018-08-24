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
import { getLaborAMSummarys, deleteLaborAMSummarys, changeLaborAMFormState, changeCurrentLaborAMSummarysRow, getLaborAMDetail, changeLaborAMDetailNoAsyn } from '@/reducers/labors';
import utils from 'utils/utils';
import { config } from '@/config';

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
        title: '考勤日期',
        dataIndex: 'checkDate',
        key: 'checkDate',
    }, {
        title: '劳务分包单位',
        dataIndex: 'unitName',
        key: 'unitName',
    }, {
        title: '出勤人数',
        dataIndex: 'attendCount',
        key: 'attendCount',
    }, {
        title: '填报人',
        dataIndex: 'recorderName',
        key: 'recorderName',
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
    object_type_id: messages.labor.object_type_id.laborAttendSummary,
    page_size: 10,
    start_page: 1
}
const dateFormat = 'YYYY-MM-DD'
class LaborAttenceMgComponent extends Component {
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
            className: 'defaul-style-pagination',
            size: 'small',
            pageSize: config.laborsInfo.queryConfig.pageSize,
            onChang: this.pageTo,
        }
        return (
            <section className="labourDemandMg-content labor-static-style">
                <article>
                    <header>
                        <HeaderOperation
                            queryData={this.queryData}
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
        summaryRows: state.labors.laborAMSummarys.rows,
        summaryPageInfo: state.labors.laborAMSummarys.pageInfo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSummarys: (args, queryConfig) => {
            return dispatch(getLaborAMSummarys(args, queryConfig))
        },
        deleteSummary: (args, queryConfig) => {
            return dispatch(deleteLaborAMSummarys(args, queryConfig))
        },
        getDetail: (args) => {
            return dispatch(getLaborAMDetail(args))
        },
        changeFormState: (toggle) => {
            dispatch(changeLaborAMFormState(toggle));
        },
        changeCurrenSummarysRow: (toggle) => {
            dispatch(changeCurrentLaborAMSummarysRow(toggle));
        },
        changeDetailNoAsyn: (datas) => {
            dispatch(changeLaborAMDetailNoAsyn(datas))
        }
    }
}
const LaborAttenceMg = connect(mapStateToProps, mapDispatchToProps)(LaborAttenceMgComponent)
export default LaborAttenceMg;