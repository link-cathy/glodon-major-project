import React, { Component } from 'react';
import { Table } from 'antd'

import messages from 'utils/i18n';
import utils from 'utils/utils';
// import request from 'utils/request';


// 请求表内容
class BodyTable extends Component {
    pageTo(page, pageSize) {
        this.props.pageto(page, pageSize);
    }
    render() {
        const tableDatas = this.props.tableDatas;
        return (
            <Table
                dataSource={tableDatas.dataSource}
                columns={this.props.columns}
                className={messages.style.defaultStyle.table + ' managerAttence-table'}
                pagination={{
                    defaultCurrent: tableDatas.rp,
                    size: 'small',
                    total: tableDatas.total,
                    showTotal: utils.pageShowTotal,
                    className: 'defaul-style-pagination',
                    pageSize: tableDatas.pageSize,
                    onChang: this.pageTo,
                }}
            />
        )
    }
}
export default BodyTable;