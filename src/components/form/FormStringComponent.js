/**
 * 字符串涉及的表单组件
 */
import React from 'react';
import { Input, Select, TextArea, Radio  } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const createInput = (data) => {
    let value = data.value ? data.value : '';
    return (
        <Input placeholder="Basic usage" value ={value} />
    )
}
const createDropDownBox = (data) => {
    let options = data.options.map((item, index) => {
        return (
            <Option key={item.value} value={item.value}>{item.alias}</Option>
        )
    })
    return (
        <InputGroup>
            <Select defaultValue={data.value}>
                {options}
            </Select>
        </InputGroup>
    )
}
const createTreeSelector = (data) => {

}
const createRichText = (data) => {
    let value = data.value ? data.value : '';
    return (
        <TextArea placeholder="" value={value} autosize />
    )
}
const createRadio = (data) => {
    let radios = data.options.map((item, index) => {
        return (
            <Option key={item.value} value={item.value}>{item.alias}</Option>
        )
    })
    return (
        <RadioGroup name="radiogroup" defaultValue={data.value}>
            {radios}
        </RadioGroup>
    )
}
let FormStringComponent = {
    createInput,
    createDropDownBox,
    createTreeSelector,
    createRichText,
    createRadio,
}
export default FormStringComponent;