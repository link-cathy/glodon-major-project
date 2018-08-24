/**
 * 表单日期组件
 */
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

let dateFormat = 'YYYY/MM/DD';
const createFormDate = (data) => {
    if (data.dateFormat) {
        dateFormat = data.dateFormat;
    }
    let defaultDate = data.value ? data.value : '';
    return (
        <DatePicker defaultValue={moment(defaultDate, dateFormat)} format={dateFormat} />
    )
}
let formDateComponent = {
    createFormDate
}
export default formDateComponent;