/*
* @Author: linf
* @Date:   2018/8/2
* @Explain : 管理人员考勤管理组件入口
*/
import React, { Component } from 'react'
import HeaderOperation from './HeaderOperation'
import TableInfo from '@/components/TableInfo';
import deepCopy from '../../../../utils/deepCopy';
import { connect } from 'react-redux'
import utils from 'utils/utils';
import { config } from '@/config';
import { Icon } from 'antd';
import EditDialog from './EditDialog';
import { getManagerAttenceCycle, getManagerAttenceCycleStatic, changeManagerAnasyFormState } from '@/reducers/labors';
import laborUtils from '../../utils/utils';

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    }, {
        title: '项目名称',
        dataIndex: 'project_name',
        key: 'project_name',
    }, {
        title: '考勤周期',
        dataIndex: 'attence_cycle',
        key: 'attence_cycle',
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
    }
];

// 查询条件
let projectId = 1
class ManagerAttenceAnalyComponent extends Component {
    componentDidMount() {
        this.props.getAttenceCycle(projectId)
    }
    pageTo(page, pageSize) {
        this.props.getAttenceCycle(projectId)
    }
    queryData(json) {
        this.props.getAttenceCycle(projectId)
    }
    openEdit(row) {
        const rowData = this.props.attenceCycleDatas[row]
        const title = rowData.project_name + '项目' + rowData.attence_cycle.replace(/-/, '年').replace(/-/g, '') + '月考勤记录'
        this.props.changeFormState({ type: 0, visible: true, title: title })
        this.props.getAttenceCycleStatic({
            endDate: 1,
            startDate: 1,
            projectId: projectId
        })
    }
    buildData(datas) {
        return datas.map((item, index) => {
            let copyItem = deepCopy(item);
            copyItem.index = index + 1;
            copyItem.operation = (
                <div>
                    <Icon type="edit" onClick={ new laborUtils.TableCellProcess(index, 0).operationRow(this.openEdit.bind(this))}/>
                    <EditDialog />
                </div>
            )
            return copyItem;
        })
    }
    render() {
        const pagination = {
            defaultCurrent: this.props.attenceCyclePageInfo.rp,
            total: this.props.attenceCyclePageInfo.total,
            showTotal: utils.pageShowTotal,
            pageSize: config.laborsInfo.queryConfig.pageSize,
            className: 'defaul-style-pagination',
            size: 'small',
            onChang: this.pageTo,
        }
        return (
            <section className="managerAttenceAnaly-content labor-static-style">
                <article>
                    <header>
                        <HeaderOperation
                            queryData={this.queryData.bind(this)}
                            changeFormState={this.props.changeFormState}
                            deleteSummarys={this.props.deleteSummary}
                        />
                    </header>
                    <div>
                        <TableInfo pagination={pagination} Columns={columns} DataSource={this.buildData(this.props.attenceCycleDatas)} />
                    </div>
                </article>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        attenceCycleDatas: state.labors.managerAttenceCycle.rows,
        attenceCyclePageInfo: state.labors.managerAttenceCycle.pageInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAttenceCycle: (args, queryConfig) => {
            return dispatch(getManagerAttenceCycle(args, queryConfig))
        },
        getAttenceCycleStatic: (args, queryConfig) => {
            return dispatch(getManagerAttenceCycleStatic(args, queryConfig))
        },
        changeFormState: (args) => {
            dispatch(changeManagerAnasyFormState(args));
        }
    }
}
const ManagerAttenceAnaly = connect(mapStateToProps, mapDispatchToProps)(ManagerAttenceAnalyComponent)
export default ManagerAttenceAnaly;