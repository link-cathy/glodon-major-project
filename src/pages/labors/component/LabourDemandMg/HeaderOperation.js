import React, { Component } from 'react';
import { Row, Col, DatePicker, Input, Button } from 'antd'
import messages from 'utils/i18n';
import EditDialog from './EditDialog';
// import deepCopy from '../../../../utils/deepCopy';

const { RangePicker } = DatePicker;
const blankEditRow = {
    workTypeId: '',
    planCount: 0
}
class HeaderOperation extends Component {
    /**
     * 打开编辑对话框
     */
    openEdit = () => {
        const title = messages.labor.demandMag.MainPanel.addTitle
        const row = { planCount: 0, recordDate: Date.now(), recorderName: 'admin', projectName: '', checkDate: Date.now() }
        this.props.changeFormState({ type: 1, visible: true, title: title })
        this.props.changeCurrenSummarysRow(row)
        this.props.changeDetailNoAsyn([blankEditRow])
    }
    dateOnchange = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    inputOnchange(e) {
        this.setState({
            projectName: e.target.value
        })
    }
    query() {
        let json = {};
        const date = this.state.date;
        const projectName = this.state.projectName
        if (date !== 0) {
            json.checkDate = date;
        }
        if (projectName !== '') {
            json.projectName = projectName;
        }
        this.props.pageTo(json);
    }
    render() {
        return (
            <Row className = "head-operation">
                <Col span = {1}></Col>
                <Col span = {15}>
                    <div className="condition">
                        <span className="condition-name">{messages.labor.demandMag.MainPanel.demandDate}</span>
                        <RangePicker className={messages.style.defaultStyle.datePicker} popupStyle={{ width: '316px' }} style={{}} onChange={this.dateOnchange.bind(this)}/>
                    </div>
                    <div className="condition">
                        <span className="condition-name">{messages.labor.managerAttence.manage.MainPanel.projectName}</span>
                        <Input className={messages.style.defaultStyle.input + ' condition-value'} onChange={this.inputOnchange.bind(this)}></Input>
                    </div>
                </Col>
                <Col span = {7} >
                    <div className="operation">
                        <Button className="operation-btn operation-btn-query" onClick={this.query.bind(this)}>{messages.operation.query}</Button>
                        <Button className="operation-btn operation-btn-add" onClick={this.openEdit.bind(this)} >{messages.operation.add}</Button>
                        <EditDialog />
                    </div>
                </Col>
                <Col span = {1}></Col>
            </Row>
        )
    }
}
export default HeaderOperation;