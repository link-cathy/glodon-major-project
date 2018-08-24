import React, { Component } from 'react';
import { Row, Col, DatePicker, Input, Button } from 'antd'
import messages from 'utils/i18n';
import EditDialog from './EditDialog';

const { RangePicker } = DatePicker;
class HeaderOperation extends Component {
    /**
     * 打开编辑对话框
     */
    openEdit = () => {
        const row = { projectName: '', entryExitDate: Date.now(), approachCount: '', exitCount: '', recorderName: 'admin', recordDate: Date.now() }
        this.props.changeLaborsEAEFormState({ type: 1, visible: true })
        this.props.changeCurrentLaborEAESummarysRow(row)
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
        this.props.pageTo({
            date: this.state.date,
            projectNmae: this.state.projectName
        })
    }
    render() {
        return (
            <Row className = "head-operation">
                <Col span = {1}></Col>
                <Col span = {15}>
                    <div className="condition">
                        <span className="condition-name">{messages.labor.entryExit.MainPanel.entryExitDate}</span>
                        <RangePicker onChange={this.dateOnchange} className={messages.style.defaultStyle.datePicker} popupStyle={{ width: '316px' }} style={{}} />
                    </div>
                    <div className="condition">
                        <span className="condition-name">{messages.labor.entryExit.MainPanel.projectName}</span>
                        <Input onChange={this.inputOnchange} className={messages.style.defaultStyle.input + ' condition-value'}></Input>
                    </div>
                </Col>
                <Col span = {7} >
                    <div className="operation">
                        <Button className="operation-btn operation-btn-query" onClick={this.query}>{messages.operation.query}</Button>
                        <Button className="operation-btn operation-btn-add" onClick={this.openEdit}>{messages.operation.add}</Button>
                        <EditDialog />
                    </div>
                </Col>
                <Col span = {1}></Col>
            </Row>
        )
    }
}
export default HeaderOperation;