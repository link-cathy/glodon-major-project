/**
 * Created by yuanxh on 2018/8/16.
 */
import React, { Component } from 'react'
import { Form, Input, Row, Col, Select, Radio, Checkbox, Upload, Button, DatePicker } from 'antd'
import { connect } from 'react-redux'
import ModalInfo from '@/components/ModalInfo'
import ModalHeaderTab from '@/components/ModalHeaderTab';
import TableInfo from '@/components/TableInfo'
import { addCheckQuestion, uploadImg, updateCheckQuestion, getObjectTypeAllPropertySets } from '@/reducers/checkQuality'
import utils from 'utils/utils'
import messages from 'utils/i18n'
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Search = Input.Search;

class AddQualityQuestion extends Component {
    state={
        visible: false,
        fileList: [],
        displayStatus: true
    }
    transferVisible = ({ visible, ...props }) => {
        this.setState({
            visible,
            ...props
        })
    }
    componentDidMount() {
        if (this.props.dataSource) {
            this.setState({ displayStatus: false })
            this.props.form.setFieldsValue({ status: this.props.dataSource.status.key })
            this.props.form.setFieldsValue({ problemLevel: (this.props.dataSource.problemRegionInfo ? this.props.dataSource.problemRegionInfo.key : 0) })
            const data = (({
                projectName, problemRegion, unitName, problemDesc, changeDemand,
                changeName, notifyorName, checkName, qualityProblemTypeName, inspectionType
            }) =>
                ({
                    projectName, problemRegion, unitName, problemDesc, changeDemand, changeName,
                    notifyorName, checkName, qualityProblemTypeName, inspectionType
                }))(this.props.dataSource)
            Object.keys(data).forEach((obj) => {
                this.props.form.setFieldsValue({ [obj]: this.props.dataSource[obj] })
            })
            return;
        }
        this.props.form.setFieldsValue({ qualityProblemTypeName: '0' })
        this.props.form.setFieldsValue({ status: '1' })
        this.props.form.setFieldsValue({ inspectionType: '0' })
    }
    onchangeCompany = () => {
        this.setState({
            visible: true
        })
    }
    handSubmit =(e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values['problemId'] = parseFloat(utils.guid())
                values['problemLevel'] = parseInt(values['problemLevel'], 10);
                values['status'] = parseInt(values['status'], 10)
                const json = {
                    objectID: 'qualityProblem',
                    values: [values]
                }
                if (values['upload']) {
                    this.props.uploadImg(values['upload'].fileList, json.objectID)
                }
                delete values['upload'];
                if (this.props.dataSource) {
                    json['instanceID'] = this.props.dataSource['INFO_OBJECT_ID']
                    json['values'] = values;
                    this.props.updateCheckQuestion(json);
                } else {
                    this.props.addCheckQuestion(json)
                }
                this.props.changeComponentFunc({ components: this.props.Component })
            }
        });
    }
    handleColse =() => {
        this.props.changeComponentFunc({ components: this.props.Component })
    }
    // handlePreview = (file) => {
    //     this.setState({
    //         previewImage: file.url || file.thumbUrl,
    //         previewVisible: true,
    //     });
    // }

    handleChange = ({ fileList }) => {
        this.setState({ fileList: fileList })
    }
    render() {
        const data = [
            {
                key: 1,
                name: <div><div><span className="checkQuestionStatus"></span>John Brown</div><div>hdjhdjhhj</div></div>,
            },
            {
                key: 2,
                name: 'John Brown',
            },
            {
                key: 3,
                name: 'John Brown',
            },
        ];
        const columns = [
            {
                title: '单位名称',
                dataIndex: 'name', key: 'name',
                width: '80%'
            },
            {
                title: '操作',
                dataIndex: 'doit',
                key: 'doit',
                width: '20%',
                render: (text, record, index) => (
                    <Checkbox ></Checkbox >)
            },
        ];
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
        const SearchCom = <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
        ></Search>;
        return (
            <Form
                id="AddQualityForm"
                className="ant-modal-add-question-form"
            >
                <FormItem
                    {...formItemLayout}
                    label={messages.qualityManage.projectName}
                >
                    {getFieldDecorator('projectName', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{ width: '61%' }}/>
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
                            label={messages.qualityManage.questionStep}
                        >
                            {getFieldDecorator('problemRegion', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '75%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5} style={{ marginLeft: '-6.2%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 7 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            label={messages.qualityManage.company}
                        >
                            {getFieldDecorator('unitName', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '100%' }} />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={2}>
                        <FormItem
                            wrapperCol={{ span: 22 }}
                        >
                            <Button style={{ width: '56%' }} className="common-submit-button-style" type="primary" htmlType="submit" onClick={this.onchangeCompany}>......</Button>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol= {{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label={messages.qualityManage.qualityQustion}
                        >
                            {getFieldDecorator('qualityProblemTypeName', {
                                // rules: [{ required: true, message: 'Please select your gender!' }],
                            })(
                                <Select
                                    style={{ width: '93.6%' }}
                                    onChange={this.handleSelectChange}
                                >
                                    {messages.qualityManage.qualityQuestionKu.map((obj, index) =>
                                        <Option key={index} value={index.toString()}>{obj}</Option>
                                    )}
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6} style={{ marginLeft: '-3%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            wrapperCol= {{
                                xs: { span: 24 },
                                sm: { span: 15 },
                            }}
                            label={messages.qualityManage.checkType}
                        >
                            {getFieldDecorator('inspectionType', {
                                // rules: [{ required: true, message: 'Please select your gender!' }],
                            })(
                                <Select
                                    style={{ width: '100%' }}
                                >
                                    {messages.qualityManage.dropDownCheckType.map((obj, index) =>
                                        <Option key={index} value={index.toString()}>{obj}</Option>
                                    )}
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                    {...formItemLayout}
                    label={messages.qualityManage.checkQuationInfo}
                >
                    {getFieldDecorator('problemDesc', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <TextArea style={{ width: '61%' }}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={messages.qualityManage.actionRequire}
                >
                    {getFieldDecorator('changeDemand', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <TextArea style={{ width: '61%' }}/>
                    )}
                </FormItem>
                <Row>
                    <Col span={12}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 8 },
                            }}
                            label={messages.qualityManage.warnLevel}
                        >
                            {getFieldDecorator('problemLevel')(
                                <RadioGroup>
                                    <RadioButton className="common-button-group-style" value="1">一般</RadioButton>
                                    <RadioButton className="common-button-group-style" value="2">严重</RadioButton>
                                    <RadioButton className="common-button-group-style" value="3">紧要</RadioButton>
                                </RadioGroup>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 5 },
                            }}
                            wrapperCol= {{
                                xs: { span: 24 },
                                sm: { span: 4 },
                            }}
                            label={messages.qualityManage.questionStatus}
                        >
                            {getFieldDecorator('status', {
                                // rules: [{ required: true, message: 'Please select your gender!' }],
                            })(
                                <Select
                                    disabled={this.state.displayStatus}
                                    style={{ width: '102%' }}
                                >
                                    {messages.qualityManage.dropDownCheckResult.map((obj, index) =>
                                        <Option key={index} value={index.toString()}>{obj}</Option>
                                    )}
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} offset={6}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            label={messages.qualityManage.actionTimeLimit}
                        >
                            {getFieldDecorator('changeTime', {
                                // rules: [{
                                //     required: true, message: 'Please input your E-mail!',
                                // }],
                            })(
                                <DatePicker placeholder={messages.qualityManage.addFormDatePicker} style={{ width: '77%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 9 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            label={messages.qualityManage.actionDoMen}
                        >
                            {getFieldDecorator('changeName', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '77%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4} style={{ marginLeft: '-1.1%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 8 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            label={messages.qualityManage.actionInformMen}
                        >
                            {getFieldDecorator('notifyorName', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '74%' }}/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={8} offset={4} >
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 10 },
                            }}
                            label={messages.qualityManage.actionCheckMen}
                        >
                            {getFieldDecorator('checkName', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '87%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12} style={{ marginLeft: '-3.5%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 5 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label={messages.qualityManage.checkTime}
                        >
                            {getFieldDecorator('checkTime', {
                                // rules: [{
                                //     required: true, message: 'Please input your E-mail!',
                                // }],
                            })(
                                <DatePicker placeholder={messages.qualityManage.addFormDatePicker} style={{ width: '96%' }} />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 8 },
                    }}
                    wrapperCol={ {
                        xs: { span: 24 },
                        sm: { span: 9 },
                    }}
                    className="livePicture"
                    label={messages.qualityManage.livePicture}
                >
                    {getFieldDecorator('upload', {
                        // valuePropName: 'fileList',
                        // getValueFromEvent: this.normFile,
                    })(
                        <Upload
                            name="file"
                            action={'/fileUpload'}
                            beforeUpload={() => false}
                            //  customRequest={this.handleUpload}
                            fileList={this.state.fileList}
                            listType="picture-card"
                            // onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >{this.state.fileList.length > 5 ? null : <Button type="primary" className="common-submit-button-style ant-upload-text">
                                {messages.qualityManage.uploadPicture}
                            </Button>}

                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 22 }}
                    style={{ textAlign: 'center' }}
                >
                    <Button className="common-submit-button-style" type="primary" htmlType="submit" onClick={this.handSubmit}>{messages.operation.save}</Button>
                    <Button style={{ marginLeft: '2%' }} className="defaul-style-button" type="primary" onClick={this.handleColse}>{messages.operation.close}</Button>
                </FormItem>
                <ModalInfo
                    visible={this.state.visible}
                    transferVisible = {(item) => (this.transferVisible(item))}
                    Contents= {ModalHeaderTab}
                    modalTitle={messages.qualityManage.companyTitle}
                    _props={{
                        ModalTabBarRight: SearchCom,
                        privateClass: 'new-tab-center-style new-tab-modal-center-style',
                        Components: [{
                            component: TableInfo,
                            tabTitle: messages.qualityManage.laborTeam,
                            _props: { Columns: columns, DataSource: data }
                        }, {
                            component: TableInfo,
                            tabTitle: messages.qualityManage.professionalCompany,
                            _props: { Columns: columns, DataSource: data }
                        }]
                    }}
                >
                </ModalInfo>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addQuestionKeys: state.checkQuestion.addQuestionKeys
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCheckQuestion: (json) => {
            dispatch(addCheckQuestion(json))
        },
        updateCheckQuestion: (json) => {
            dispatch(updateCheckQuestion(json))
        },
        uploadImg: (fileList, objectTypeId) => {
            dispatch(uploadImg({ fileList: fileList, objectTypeId: objectTypeId }))
        },
        getObjectTypeAllPropertySets: (objectTypeId) => {
            return dispatch(getObjectTypeAllPropertySets(objectTypeId))
        }
    }
}

const AddQualityQuestionForm = Form.create()(AddQualityQuestion)
const AddQualityQuestions = connect(mapStateToProps, mapDispatchToProps)(AddQualityQuestionForm);
export default AddQualityQuestions