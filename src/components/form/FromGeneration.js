/**
 * 表单生成器 create by linf 2018/7/31
 */
import React from 'react';
import fromDateComponent from './FormDateComponent'
import formMediaComponent from './FormMediaComponent'
import formStringComponent from './FormStringComponent'



const generateFormConpoments = (datas) => {
    datas.map((data, index) => {
        return (
            getConpoment(data)
        )
    })
}
const getConpoment = (data) => {
    let result;
    switch (data.ui_type) {
        case '001001':                      // 普通输入框
            result = formStringComponent.createInput(data)
            break;
        case '001002':                     // 下拉框
            result = formStringComponent.createDropDownBox(data)
            break;
        case '001003':                     // 树形选择器
            result = formStringComponent.createTreeSelector(data)
            break;
        case '001004':                     // 富文本框
            result = formStringComponent.createRichText(data);
            break;
        case '001005':                     // 单选框
            result = formStringComponent.createRadio(data);
            break;
        case '002001':                     // 日期选择
            result = fromDateComponent.createFormDate(data);
            break;
        case '003001':
            result = formMediaComponent.createUpload(data);
            break;
        case '003002':
            result = formMediaComponent.createPicturePanel(data);
            break;
        case '003003':
            result = formMediaComponent.createVedioPanel(data);
            break;
        case '003004':
            result = formMediaComponent.createFilePreview(data);
            break;
        case '003005':
            result = formMediaComponent.crateFeleDownLoad(data);
            break;
        default:
            result = '';
            break;
    }
    return result;
}
class CustomForm extends React.Component {
    render() {
        return (
            <div>
                {generateFormConpoments()}
            </div>
        )
    }

}
export default CustomForm;