/**
 * Created by yuanxh on 2018/7/3.
 */
import React from 'react';
import { Row } from 'antd';
import MenuList from './LeftMenus';
import '../styles/layout/Contents.less';

const Contents = ({ Menus, menDefaultActiveKey, ...props }) => {
    return (
        <Row className="pocp-layout-common-style2 ">
            <MenuList
                Menus = {Menus}
                menDefaultActiveKey = {menDefaultActiveKey}
                {...props}
            >
            </MenuList>
        </Row>
    ) }

export default Contents;
