/**
 * Created by yuanxh on 2018/8/17.
 */

/**
 * Created by yuanxh on 2018/8/16.
 */
import React, { Component } from 'react'
import { Form, Input, Row, Col } from 'antd'
const { TextArea } = Input;
const FormItem = Form.Item;

class GetQualityQuestionInfo extends Component {
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <Form
                className="ant-modal-add-question-form"
            >
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{ width: '50%' }}/>
                    )}
                </FormItem>
                <Row>
                    <Col span={12} >
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '84%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12} style={{ marginLeft: '-4.1%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 2 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '100%' }} />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <TextArea style={{ width: '50%' }}/>
                    )}
                </FormItem>
                <Row>
                    <Col span={3} offset={7}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 8 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '77%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={3} style={{ marginLeft: '-1%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 8 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '77%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={3} style={{ marginLeft: '-1%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 8 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '75%' }}/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} >
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '84%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12} style={{ marginLeft: '-4.1%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 2 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '100%' }} />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <TextArea style={{ width: '50%' }}/>
                    )}
                </FormItem>
            </Form>
        )
    }
}

const GetQualityQuestionInfoForm = Form.create()(GetQualityQuestionInfo)
export default GetQualityQuestionInfoForm