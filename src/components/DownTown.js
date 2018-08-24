/**
 * Created by yuanxh on 2018/7/9.
 */
import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

class DownTown extends Component {
     handleMenuClick = (e) => {
         message.info('Click on menu item.');
         console.log('click', e);
     }
     render() {
         const downTown = this.props.downTownMenu;
         const menu = (
             <Menu onClick={this.handleMenuClick}>
                 {
                     (downTown instanceof Array && downTown.length > 0 ?
                         downTown.map((obj, index) => (
                             <Menu.Item key={index}>{obj}</Menu.Item>
                         ))
                         : '')
                 }
             </Menu>)
         return (
             <div>
                 <Dropdown overlay={menu}>
                     <Button style={{
                         marginLeft: 8, background: 'none',
                         borderRadius: '0',
                         border: '1px solid #23faff',
                         color: '#23faff'
                     }}>
                         {this.props.buttonTitle} <Icon type="down" />
                     </Button>
                 </Dropdown>
             </div>
         )
     }
}
export default DownTown;