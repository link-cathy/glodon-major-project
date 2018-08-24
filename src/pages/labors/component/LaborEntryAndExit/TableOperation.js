import React, { Component } from 'react';
import { Icon, Popconfirm } from 'antd';
import EditDialog from './EditDialog';
import messages from 'utils/i18n';

class TableOperation extends Component {
    /**
     * 打开编辑对话框
     */
    openEdit = () => {
        this.props.changeLaborsEAEFormState({ type: 1, visible: true })
        this.props.changeCurrentLaborEAESummarysRow(this.props.summaryRow)
    }
    deleteConfirm = () => {
        let json = {
            instanceID: this.props.row.INFO_OBJECT_ID,
            objectTypeId: messages.labor.object_type_id.laborApproachexitSummary
        }
        this.props.deleteLaborEntryAndExitSummary(json);
    }
    deleteCancle = () => {}
    render() {
        return (
            <div>
                <Icon type="edit" onClick={this.openEdit}/>
                <Popconfirm title="该条考勤信息删除后将不能回复，是否确认删除?" onConfirm={this.deleteConfirm} onCancel={this.deleteCancle} okText="删除" cancelText="取消" >
                    <Icon type="delete"/>
                </Popconfirm>
                <EditDialog />
            </div>
        )
    }
}
export default TableOperation;