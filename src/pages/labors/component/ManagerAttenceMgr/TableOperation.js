import React, { Component } from 'react';
import { Icon, Popconfirm } from 'antd';
import EditDialog from './EditDialog';
// import deepCopy from 'utils/deepCopy';
import messages from 'utils/i18n';

/**
 * 获取数据
 * @param condions
 * @returns {*[]}
 */
let queryConfig = {
    data: {},
    end_page: 2,
    object_type_id: messages.labor.object_type_id.managerAttenceSummary,
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
            object_type_id: messages.labor.object_type_id.managerAttenceDetail,
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
            objectTypeId: messages.labor.object_type_id.managerAttenceSummary
        }
        this.props.deleteSummary([json], queryConfig);
    }
    deleteCancle = () => {}
    render() {
        return (
            <div>
                <Icon type="edit" onClick={this.openEdit}/>
                <Popconfirm title="该条考勤信息删除后将不能回复，是否确认删除?" onConfirm={this.deleteConfirm} okText="删除" cancelText="取消" onCancel={this.deleteCancle}>
                    <Icon type="delete"/>
                </Popconfirm>
                <EditDialog />
            </div>
        )
    }
}
export default TableOperation;