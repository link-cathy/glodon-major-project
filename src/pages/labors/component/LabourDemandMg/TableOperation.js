import React, { Component } from 'react';
import { Icon, Popconfirm } from 'antd';
import EditDialog from './EditDialog';
// import deepCopy from 'utils/deepCopy';
import messages from 'utils/i18n';

let queryConfig = {
    data: {},
    end_page: 2,
    object_type_id: messages.labor.object_type_id.laborPlanSummary,
    page_size: 10,
    start_page: 1
}
class TableOperation extends Component {
    /**
     * 打开编辑对话框
     */
    openEdit = () => {
        const params = {
            conditions: {
                summaryId: this.props.summaryRow.summaryId
            },
            end_page: 2,
            object_type_id: messages.labor.object_type_id.laborPlanDetail,
            page_size: 10,
            start_page: 1
        }
        const title = messages.labor.demandMag.MainPanel.editTitle
        this.props.changeFormState({ type: 2, visible: true, title: title })
        this.props.changeCurrenSummarysRow(this.props.summaryRow)
        this.props.getDetail(params)
    }
    deleteConfirm = () => {
        let json = {
            instanceID: this.props.summaryRow.INFO_OBJECT_ID,
            objectTypeId: messages.labor.object_type_id.laborPlanSummary
        }
        this.props.deleteSummary([json], queryConfig);
    }
    deleteCancle = () => {}
    render() {
        return (
            <div>
                <Icon type="edit" onClick={this.openEdit}/>
                <Popconfirm title="该条考勤信息删除后将不能回复，是否确认删除?" onConfirm={this.deleteConfirm.bind(this)} okText="删除" cancelText="取消" onCancel={this.deleteCancle.bind(this)}>
                    <Icon type="delete"/>
                </Popconfirm>
                <EditDialog />
            </div>
        )
    }
}
export default TableOperation;