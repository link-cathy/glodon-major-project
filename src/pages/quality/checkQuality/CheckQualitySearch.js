/**
 * Created by yuanxh on 2018/8/15.
 */
import React, { Component } from 'react'
import { Form, Button, Input, Select, DatePicker  } from 'antd'
// import { connect } from 'react-redux'
import QualityCheckAction from './QualityCheckAction'
import CheckQuality from '@/pages/quality/checkQuality'

import messages from 'utils/i18n'
const FormItem = Form.Item;
const Option = Select.Option;

class CheckQualitySearch extends Component {
    state={
        visible: false
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    }
    componentDidMount() {
        this.props.form.setFieldsValue({ qualityQuestion: messages.qualityManage.qualityQuestionKu.length.toString() })
        this.props.form.setFieldsValue({ checkResult: messages.qualityManage.dropDownCheckResult.length.toString() })
        this.props.form.setFieldsValue({ warnLevel: messages.qualityManage.dropDownWarnLevel.length.toString() })
    }
    onHandClick =() => {
        this.props.changeComponent({ components: QualityCheckAction, _props: { Component: CheckQuality, changeComponentFunc: this.props.changeComponent }})
    }
    transferVisible = ({ visible, ...props }) => {
        this.setState({
            visible,
            ...props
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 },
            },
        };
        return (
            <Form
                className="ant-advanced-search-form"
                layout="inline"
                onSubmit={this.handleSearch}
            >
                <FormItem
                    style={{ width: '34%' }}
                    {...formItemLayout}
                    label={messages.qualityManage.searchProject}>
                    {getFieldDecorator(`field`, {
                    })(
                        <Input
                            style={{ width: '88.7%' }}/>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 8 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 14 },
                    }}
                    style={{ width: '17%' }}
                    label={messages.qualityManage.checkDate}
                >
                    {getFieldDecorator('date-picker')(
                        <DatePicker placeholder={messages.qualityManage.startTime}/>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 3 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 14 },
                    }}
                    style={{ width: '17%' }}
                    label={messages.qualityManage.checkDateTo}
                >
                    {getFieldDecorator('date-picker')(
                        <DatePicker placeholder={messages.qualityManage.endTime}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    style={{ width: '29%' }}
                    label={messages.qualityManage.qualityQustion}
                >
                    {getFieldDecorator('qualityQuestion', {
                    })(
                        <Select
                            style={{ width: '93.6%' }}
                            onChange={this.handleSelectChange}
                            initialValue={messages.qualityManage.qualityQuestionKu.length.toString()}
                        >
                            <Option value={messages.qualityManage.qualityQuestionKu.length.toString()}>{messages.qualityManage.dropDownPlaceHolder}</Option>
                            {messages.qualityManage.qualityQuestionKu.map((obj, index) =>
                                <Option key={index} value={index.toString()}>{obj}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 10 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 11 },
                    }}
                    style={{ width: '17%' }}
                    label={messages.qualityManage.checkResult}
                >
                    {getFieldDecorator('checkResult', {
                    })(
                        <Select
                            style={{ width: '100%' }}
                            onChange={this.handleSelectChange}
                            initialValue={messages.qualityManage.dropDownCheckResult.length.toString()}
                        >
                            <Option value={messages.qualityManage.dropDownCheckResult.length.toString()}>{messages.qualityManage.dropDownPlaceHolder}</Option>
                            {messages.qualityManage.dropDownCheckResult.map((obj, index) =>
                                <Option key={index} value={index.toString()}>{obj}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 8 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 11 },
                    }}
                    style={{ width: '16%' }}
                    label={messages.qualityManage.warnLevel}
                >
                    {getFieldDecorator('warnLevel', {
                    })(
                        <Select
                            style={{ width: '100%' }}
                            onChange={this.handleSelectChange}
                            initialValue={messages.qualityManage.dropDownWarnLevel.length.toString()}
                        >
                            <Option value={messages.qualityManage.dropDownWarnLevel.length.toString()}>{messages.qualityManage.dropDownPlaceHolder}</Option>
                            {messages.qualityManage.dropDownWarnLevel.map((obj, index) =>
                                <Option key={index} value={index.toString()}>{obj}</Option>
                            )}
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 10 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 13 },
                    }}
                    style={{ width: '16%' }}
                    label={messages.qualityManage.timeSort}
                >
                    {getFieldDecorator('gender', {
                    })(
                        <DatePicker placeholder={messages.qualityManage.dropDownPlaceHolder}/>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 7 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 12 },
                    }}
                    style={{ width: '18%' }}
                    label={messages.qualityManage.timeOut}
                >
                    {getFieldDecorator('gender', {
                    })(
                        <DatePicker placeholder={messages.qualityManage.dropDownPlaceHolder}/>
                    )}
                </FormItem>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 8 },
                    }}
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 16 },
                    }}
                    style={{ width: '21%' }}
                    label={messages.qualityManage.company}>
                    {getFieldDecorator(`field`, {
                    })(
                        <Input
                            style={{ width: '90%' }}
                        />
                    )}
                </FormItem>
                <FormItem
                    wrapperCol= {{
                        xs: { span: 24 },
                        sm: { span: 16 },
                    }}
                    style={{ width: '12%' }}>
                    <Button type="default" className="common-button-style" onClick={this.onHandClick}>{messages.operation.add}</Button>
                </FormItem>
            </Form>
        )
    }
}



const CheckQualitySearchForm = Form.create()(CheckQualitySearch)

// const CheckQualitySearchs = connect(mapStateToProps, mapDispatchToProps)(CheckQualitySearchForm);
export default CheckQualitySearchForm
