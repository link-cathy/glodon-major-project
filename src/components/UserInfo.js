import React, { Component } from 'react'
import { Icon, Menu, Dropdown } from 'antd';
import messages from 'utils/i18n'
import servicesConfig from '@/servicesConfig'
import { Link } from 'react-router-dom'

class UserInfo extends Component {

    state = {
        'viewMode': true
    }

    selectMenu = (e) => {
        if (e.key === 'userCenter') {
            window.open(servicesConfig.userService + '/info')
        } else if (e.key === 'logout') {
            window.open(servicesConfig.userService + '/logout')
        } else if (e.key === 'console') {
            this.setState({
                'viewMode': !this.state.viewMode
            })
        }
    }
    render() {
        const linkItem = this.state.viewMode ? <Link to="/console">{messages.userInfo.console}</Link> :
            <Link to="/">{messages.userInfo.view}</Link>

        const dropMenu = (
            <Menu onClick={this.selectMenu} className="user_operator">
                <Menu.Item key="console" className={'userConsole'}>
                    {linkItem}
                </Menu.Item>
                <Menu.Item key="userCenter" className={'userCenter'}>{messages.userInfo.userCenter}</Menu.Item>
                <Menu.Item key="logout" className={'userOutLogin'}>{messages.userInfo.outLogin}</Menu.Item>
            </Menu>
        )

        return (
            <div className="header-right">
                <Dropdown overlay={dropMenu}>
                    <div>
                        <Icon type="cim-signIn"/>
                        <Icon type="down" />
                    </div>
                </Dropdown>
            </div>
        )
    }
}
export default UserInfo;