/**
 * Created by yuanxh on 2018/8/14.
 */
import React, { Component } from 'react';
import TableInfo from '@/components/TableInfo'

const columns = [
    { title: '检查结果', dataIndex: 'name', key: 'name' },
    { title: '项目名称', dataIndex: 'age', key: 'age' },
    { title: '检查人', dataIndex: 'address', key: 'address' },
    { title: '质量问题信息', dataIndex: 'question', key: 'x' },
    { title: '整改人', dataIndex: 'man', key: 'check' },
    { title: '通知人', dataIndex: 'man1', key: 'man' },
    { title: '例行检查', dataIndex: 'check', key: 'check1' },
    { title: '说明', dataIndex: 'information', key: 'information' },
    { title: '操作', dataIndex: 'doit', key: 'doit' },
];
const data = [
    {
        key: 1, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park',
        question: 'fdf',
        man: 'fdf',
        man1: 'dg',
        check: 'gdg',
        information: '66',
        doit: '44'
    },
    {
        key: 2, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park',
        question: 'fdf',
        man: 'fdf',
        man1: 'dg',
        check: 'gdg',
        information: '66',
        doit: '44'
    },
    {
        key: 3, name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park',
        question: 'fdf',
        man: 'fdf',
        man1: 'dg',
        check: 'gdg',
        information: '66',
        doit: '44'
    },
];
class CheckQualityTable extends Component {
    render() {
        return (
            <TableInfo
                Columns={columns}
                DataSource={data}
            >
            </TableInfo>
        )
    }
}
export default CheckQualityTable