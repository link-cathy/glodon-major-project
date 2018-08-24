/**
 * Created by yuanxh on 2018/7/6.
 */
import React, { Component } from 'react'
import { Table } from 'antd'
import messages from 'utils/i18n'

class TableInfo extends Component {
    state = {
        pagination: ''
    }

    componentDidMount() {
        console.log(this.props.Columns);
        const _props = { ...this.props };
        let pagination = _props.pagination || (_props.pagination === false ? false : {});
        pagination = { ...pagination, className: 'defaul-style-pagination', size: 'small' }
        this.setState({
            pagination: pagination
        })
    }

    render() {
        return (

            <Table
                columns={this.props.Columns}
                dataSource={this.props.DataSource}
                bordered={false}
                pagination = {this.state.pagination}
                locale={{ emptyText: messages.tips.noData }}
                rowClassName = {(record, index) => (
                    index % 2 === 0 ? 'ant-table-body-trOdd' : 'ant-table-body-tr'
                )}
                {...this.props}
            />
        )
    }
}
export default TableInfo;