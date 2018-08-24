import React from 'react';
import { Upload, Button, Icon } from 'antd';

const createUpload = function(data) {
    const props = {
        action: data.uploadAdress ? data.uploadAdress : '',
        onChange({ file, fileList }) {
            if (file.status !== 'uploading') {
                console.log(file, fileList);
            }
            if (data.uploadAdress) {
                // 提示没有找到上传地址
                return false;
            }
        },
        defaultFileList: [],
    };
    return (
        <Upload {...props}>
            <Button>
                <Icon type="upload" /> Upload
            </Button>
        </Upload>
    )
}

const createPicturePanel = () => {

}

const createVedioPanel = (data) => {

}

const createFilePreview = (data) => {

}

const crateFeleDownLoad = (data) => {
}

const formMediaComponent = {
    createUpload,
    createPicturePanel,
    createVedioPanel,
    createFilePreview,
    crateFeleDownLoad,
}
export default formMediaComponent;
