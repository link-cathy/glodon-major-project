/**
 * Created by yuanxh on 2018/7/3.
 */
import React from 'react';
import MainHeader from './MainHeader';
import MainHeaderRouter from './MainHeaderRouter'
import { Row } from 'antd';
import messages from 'utils/i18n'
import routerConfig from '../router/config';
const CommonHeader = () => (
    <Row className="pocp-layout-common-style3">
        <MainHeader
            title1 = {messages.cityDes}
            title2= {messages.projectName}
        >
        </MainHeader>
        <MainHeaderRouter
            leftNavBar= {routerConfig.leftNavBar}
            rightNavBar = {routerConfig.rightNavBar}
        >
        </MainHeaderRouter>
    </Row>
)
export default CommonHeader;