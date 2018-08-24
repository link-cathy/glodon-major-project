import React, { Component } from 'react';
import { Row, Col, Button, Select } from 'antd'
import messages from 'utils/i18n';
import EditDialog from './EditDialog';

const Option = Select.Option;
const getMoth = () => {
    const month = new Date().getMonth() + 1;
    return month
}
class HeaderOperation extends Component {
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
                        <span className="condition-name">考勤周期</span>
                        <Select defaultValue={2018} style={{ width: 120 }}>
                            <Option value={2018}>2018</Option>
                            <Option value={2019}>2018</Option>
                            <Option value={2020}>2018</Option>
                        </Select>
                        <span className="condition-name">年</span>
                        <Select defaultValue={getMoth()} style={{ width: 120 }}>
                            <Option value={1}>1</Option>
                            <Option value={2}>2</Option>
                            <Option value={3}>3</Option>
                            <Option value={4}>4</Option>
                            <Option value={5}>5</Option>
                            <Option value={6}>6</Option>
                            <Option value={7}>7</Option>
                            <Option value={8}>8</Option>
                            <Option value={9}>9</Option>
                            <Option value={10}>10</Option>
                            <Option value={11}>11</Option>
                            <Option value={12}>12</Option>
                        </Select>
                        <span className="condition-name">月</span>
                    </div>
                </Col>
                <Col span = {7} >
                    <div className="operation">
                        <Button className="operation-btn operation-btn-query" onClick={this.query.bind(this)}>{messages.operation.query}</Button>
                        <EditDialog />
                    </div>
                </Col>
                <Col span = {1}></Col>
            </Row>
        )
    }
}
export default HeaderOperation;