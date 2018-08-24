/**
 * Created by yuanxh on 2018/7/30.
 */
import React, { Component } from 'react'
import { TreeSelect, message } from 'antd';
import { connect } from 'react-redux'
import { selectHydrated as selectUiState } from '@/reducers/uiState'
import { selectHydrated as selectTreeState, getTreeList } from '@/reducers/treeList'
import { renderTreeNodes } from './treeListUtils'
import messages from 'utils/i18n'

class TreeListSelect extends Component {
    state={
        value: null
    }
    componentDidMount() {
        if (!this.props.treeList) {
            this.props.getTreelist();
        }
        if (this.props.selectValue) {
            this.setState({ value: this.props.selectValue })
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.value !== prevState.value) {
            return {
                value: nextProps.value
            };
        }
        return null;
    }

    onChange = (value, lable, extra) => {
        this.setState({ value });
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(value)
        }
    }

    onLoadData = (treeNode) => {
        return new Promise((resolve) => {
            const nodeTypeId = treeNode.props.type_id
            const childrenNode = treeNode.props.children
            if (!childrenNode || childrenNode.length === 0) {
                return this.props.getTreelist({ parentTypeId: nodeTypeId }).then(() => {
                    resolve()
                })
            } else {
                message.warning(messages.industryClass.industryClassNull)
                return resolve()
            }
        })
    }

    render() {
        return (
            <TreeSelect
                showSearch
                style={this.props.style}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                placeholder={messages.dataManagerModule.selectIndustryClass}
                searchPlaceholder ={messages.dataManagerModule.placeholderSearchTree}
                allowClear
                onChange={this.onChange.bind(this)}
                disabled={this.props.disabled}
                loadData={this.onLoadData}
                treeNodeFilterProp="type_name"
                notFoundContent={messages.notFoundContent}
            >
                {renderTreeNodes(this.props.treeList, true)}
            </TreeSelect>
        );
    }
}

TreeListSelect.defaultProps = {
    disabled: false
};

const mapStateToProps = (state) => {
    return {
        treeList: selectTreeState(state),
        loading: selectUiState(state).treeList_loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTreelist: (args) => {
            return dispatch(getTreeList(args))
        }
    }
}

let TreeListComponent = connect(mapStateToProps, mapDispatchToProps)(TreeListSelect);
export default TreeListComponent;
