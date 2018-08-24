// 查看0，新增1，编辑2
import React, { Component } from 'react';
import { Modal } from 'antd';
import utils from 'utils/utils';
import { changeManagerAnasyFormState } from '@/reducers/labors';
import { connect } from 'react-redux';
import TableInfo from '@/components/TableInfo';
import deepCopy from '../../../../utils/deepCopy';

let columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    }, {
        title: '姓名',
        dataIndex: 'person_name',
        key: 'person_name',
    }, {
        title: '身份证号',
        dataIndex: 'person_id',
        key: 'person_id',
    }, {
        title: '职务',
        dataIndex: 'duty',
        key: 'duty',
    }, {
        title: '请假次数',
        dataIndex: 'leave_times',
        key: 'leave_times',
    }, {
        title: '出勤率',
        dataIndex: 'attence_rate',
        key: 'attence_rate',
    }
];
class EditDialogComponent extends Component {
    clickClose() {
        this.props.changeFormState({ type: 0, visible: false })
    }
    handleCancel() {
        this.props.changeFormState({ type: 0, visible: false })
    }
    handleOk() {
        this.props.changeFormState({ type: 0, visible: false })
    }
    buildData(datas) {
        if (Array.isArray(datas)) {
            datas.map((item) => {
                item.attence_rate = parseInt(parseFloat(item.attence_rate, 10) * 100, 10) + '%'
                return item
            })
        }
        return datas;
    }
    buildTables = (datas, typeName) => {
        const $this = this
        if (Array.isArray(datas)) {
            return (
                datas.map((item) => {
                    const title = typeName + ': ' + item.unit_name
                    const pagination = false
                    const datas = $this.buildData(deepCopy(item.person_list))
                    return (
                        <div key={utils.guid()}>
                            <div className="unit-name"><span>{title}</span></div>
                            <div>
                                <TableInfo pagination={pagination} Columns={columns} DataSource={datas}/>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return
        }
    }
    render() {
        return (
            <Modal
                title={this.props.FormState.title ? this.props.FormState.title : '' }
                visible={this.props.FormState.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                className="managerAttenceAnaly-edit static-modal-stayle"
            >
                <div>
                    {this.buildTables(this.props.attenceCycleStatic.shigong, '施工单位')}
                    {this.buildTables(this.props.attenceCycleStatic.jianli, '监理单位')}
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        FormState: state.labors.managerAnasyFormState,
        attenceCycleStatic: state.labors.managerAttenceCycleStatic.rows
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeFormState: (args) => {
            dispatch(changeManagerAnasyFormState(args));
        }
    }
}
const EditDialog = connect(mapStateToProps, mapDispatchToProps)(EditDialogComponent)
export default EditDialog;