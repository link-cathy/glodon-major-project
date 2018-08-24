/**
 * Created by yuanxh on 2018/8/14.
 */
import { ACTION_TYPES } from '@/constants'
import { createReducer, allActions } from 'utils/reduxUtils'
import universalRequest from 'utils/universalRequest';
import { message } from 'antd';
import messages from 'utils/i18n';
import cimApi from 'utils/cimApi';

const defaultData = {
    pageInfo: { rp: 1, pageSize: 10, total: 0 },
    rows: []
}
const defaultFormState = { type: 0, visible: false, title: '' }
const initState = {
    laborsEAESummaryData: defaultData,
    laborsEAEFormState: defaultFormState,
    currentLaborEAESummaryRow: null,

    managerAMSummarys: defaultData,
    managerAMDetail: defaultData,
    managerAMFormSate: defaultFormState,
    changeCurrentManagerAMSummaryRow: null,

    managerAttenceCycle: defaultData,
    managerAttenceCycleStatic: defaultData,
    managerAnasyFormState: defaultFormState,

    laborDMSummarys: defaultData,
    laborDMDetail: defaultData,
    laborDMFormSate: defaultFormState,
    changeCurrentLaborDMSummaryRow: null,

    laborAMSummarys: defaultData,
    laborAMDetail: defaultData,
    laborAMFormSate: defaultFormState,
    changeCurrentlaborAMSummaryRow: null
}

export const labors = createReducer(initState, {
    [ACTION_TYPES.GET_LABOR_EAE_SUMMARY_DATA](state, data) {
        return {
            ...state,
            laborsEAESummaryData: data
        }
    },
    [ACTION_TYPES.LABOR_EAE_FORM_STATE](state, data) {
        return {
            ...state,
            laborsEAEFormState: data
        }
    },
    [ACTION_TYPES.CHANGE_CURRENT_LABOR_EAE_SUMMARY_ROW](state, data) {
        return {
            ...state,
            currentLaborEAESummaryRow: data
        }
    },
    [ACTION_TYPES.GET_MANAGER_AM_SUMMARY_DATA](state, data) {
        return {
            ...state,
            managerAMSummarys: data
        }
    },
    [ACTION_TYPES.GET_MANAGER_AM_DETAIL_DATA](state, data) {
        return {
            ...state,
            managerAMDetail: data
        }
    },
    [ACTION_TYPES.CHANGE_MANAGER_AM_FORM_STATE](state, data) {
        return {
            ...state,
            managerAMFormSate: data
        }
    },
    [ACTION_TYPES.CHANGE_CURRENT_MANAGER_AM_SUMMARY_ROW](state, data) {
        return {
            ...state,
            changeCurrentManagerAMSummaryRow: data
        }
    },

    [ACTION_TYPES.GET_LABOR_DM_SUMMARY_DATA](state, data) {
        return {
            ...state,
            laborDMSummarys: data
        }
    },
    [ACTION_TYPES.GET_LABOR_DM_DETAIL_DATA](state, data) {
        return {
            ...state,
            laborDMDetail: data
        }
    },
    [ACTION_TYPES.CHANGE_LABOR_DM_FORM_STATE](state, data) {
        return {
            ...state,
            laborDMFormSate: data
        }
    },
    [ACTION_TYPES.CHANGE_CURRENT_LABOR_DM_SUMMARY_ROW](state, data) {
        return {
            ...state,
            changeCurrentLaborDMSummaryRow: data
        }
    },

    [ACTION_TYPES.GET_LABOR_AM_SUMMARY_DATA](state, data) {
        return {
            ...state,
            laborAMSummarys: data
        }
    },
    [ACTION_TYPES.GET_LABOR_AM_DETAIL_DATA](state, data) {
        return {
            ...state,
            laborAMDetail: data
        }
    },
    [ACTION_TYPES.CHANGE_LABOR_AM_FORM_STATE](state, data) {
        return {
            ...state,
            laborAMFormSate: data
        }
    },
    [ACTION_TYPES.CHANGE_CURRENT__LABOR_AM_SUMMARY_ROW](state, data) {
        return {
            ...state,
            changeCurrentLaborAMSummaryRow: data
        }
    },
    [ACTION_TYPES.GET_MANAGER_ATTENCE_CYCLE](state, data) {
        return {
            ...state,
            managerAttenceCycle: data
        }
    },
    [ACTION_TYPES.GET_MANAGER_ATTENCE_CYCLE_STATIC](state, data) {
        return {
            ...state,
            managerAttenceCycleStatic: data
        }
    },
    [ACTION_TYPES.CHANGE_MANAGER_ANALY_FORM_STATE](state, data) {
        return {
            ...state,
            managerAnasyFormState: data
        }
    }
})
/**
 * 创建同步改变数据的reducer(数据结构针对重大项目统一模式)
 * @param type
 * @returns {function(*=): *}
 */
const createGetDatasNoAsyn = (type) => (props) => {
    return allActions[type](buildPureData(props))
}
/**
 * 创建异步获取数据的reducer(数据结构针对重大项目统一模式)
 * @param type
 * @returns {function(*=, *): function(*): (PromiseLike<T> | Promise<T>)}
 */
const createGetDatas = (type) => (props, datas) => (dispatch) => {
    return universalRequest.universalGet(props).then((res) => {
        if (res.message.toLowerCase() === 'success') {
            dispatch(allActions[type](buildData(props, res)))
        }
    })
}
/**
 * 创建异步删除数据的reducer(数据结构针对重大项目统一模式)
 * @param type
 * @returns {function(*=, *=): Function}
 */
const creatDeleteDatas = (type) => (props, refreshParams) => (dispatch) => {
    if (Array.isArray(props)) {
        for (let i = 0, length = props.length; i < length; i++) {
            const item = props[i]
            return universalRequest.universalDelete(item).then((resut) => {
                if (resut.message.toLowerCase() === 'success') {
                    message.success(messages.tips.deleteSuccess)
                    if (refreshParams) {
                        return universalRequest.universalGet(refreshParams).then((res) => {
                            if (res.message.toLowerCase() === 'success') {
                                dispatch(allActions[type](buildData(refreshParams, res)))
                            }
                        })
                    }
                } else {
                    message.success(messages.tips.deleteFaild)
                }
            })
        }
    }
}
/**
 * 创建异步添加数据的reducer(数据结构针对重大项目统一模式)
 * @param type
 * @returns {function(*=, *=): Function}
 */
const createAddDatas = (type) => (props, refreshParams) => (dispatch) => {
    if (Array.isArray(props)) {
        for (let i = 0, length = props.length; i < length; i++) {
            universalRequest.universalAdd(props[i]).then((result) => {
                if (result.message.toLowerCase() === 'success') {
                    if (i === (length - 1)) {
                        message.success(messages.tips.addSuccess)
                        if (refreshParams) { // 是否刷新页面
                            return universalRequest.universalGet(refreshParams).then((res) => {
                                if (res.message.toLowerCase() === 'success') {
                                    dispatch(allActions[type](buildData(refreshParams, res)))

                                }
                            })
                        }
                    }
                } else {
                    message.success(messages.tips.addFaild);
                }
            })
        }
    } else {
        message.success(messages.tips.addFaild);
    }
}
/**
 * 创建异步修改数据的reducer(数据结构针对重大项目统一模式)
 * @param type
 * @returns {function(*=, *=): Function}
 */
const createUpdateDatas = (type) => (props, refreshParams) => (dispatch) => {
    if (Array.isArray(props)) {
        for (let i = 0, length = props.length; i < length; i++) {
            universalRequest.universalUpdate(props[i]).then((result) => {
                if (result.message.toLowerCase() === 'success') {
                    if (i === (length - 1)) {
                        message.success(messages.tips.updateSuccess);
                        message.success(messages.tips.updateSuccess)
                        if (refreshParams) { // 是否刷新页面
                            return universalRequest.universalGet(refreshParams).then((res) => {
                                if (res.message.toLowerCase() === 'success') {
                                    dispatch(allActions[type](buildData(refreshParams, res)))
                                }
                            })
                        }
                    }
                } else {
                    message.success(messages.tips.updateFaild);
                }
            }).catch(() => {
                message.success(messages.tips.updateFaild);
            })
        }
    }
}

// 管理人员考勤管理
export const getManagerAMSummarys = createGetDatas('getMannagerAMSummartData');
export const deleteManagerAMSummarys = creatDeleteDatas('getMannagerAMSummartData');
export const ManagerAMFormAdd = createAddDatas('getMannagerAMSummartData');
export const ManagerAMFormUpdate = createUpdateDatas('getMannagerAMSummartData');
export const getManagerAMDetail = createGetDatas('getMannagerAMDetailData');
export const changeManagerAMDetailNoAsyn = createGetDatasNoAsyn('getMannagerAMDetailData')
export const changeManagerAMFormState = (props) => {
    return allActions['changeManagerAMFormState'](props)
}
export const changeCurrentManagerAMSummarysRow = (props) => {
    return allActions['changeCurrentManagerAMSummaryRow'](props)
}

// 管理人员考勤统计
export const getManagerAttenceCycle = (projectId) => (dispatch) => {
    cimApi.getManagerAttenceCycle(null, { projectId: projectId }).then((result) => {
        if (result.message.toLowerCase() === 'success') {
            const json  = {
                rows: result.data,
                pageInfo: {
                    rp: 1,
                    pageSize: 10,
                    total: 0
                }
            }
            dispatch(allActions['getManagerAttenceCycle'](json))
        } else {
            // 获取数据失败
        }
    })
}
export const getManagerAttenceCycleStatic = (props) => (dispatch) => {
    cimApi.getManagerAttenceCycleStatic({ endDate: props.endDate, startDate: props.startDate }, { projectId: props.projectId }).then((result) => {
        if (result.message.toLowerCase() === 'success') {
            const json  = {
                rows: result.data,
                pageInfo: {
                    rp: 1,
                    pageSize: 10,
                    total: 1
                }
            }
            dispatch(allActions['getManagerAttenceCycleStatic'](json))
        } else {
            // 获取数据失败
        }
    })
}
export const changeManagerAnasyFormState = (args) => {
    return allActions['changeManagerAnasyFormState'](args)
}

// 劳务人员需求计划
export const getLaborDMSummarys = createGetDatas('getLaborDMSummartData');
export const deleteLaborDMSummarys = creatDeleteDatas('getLaborDMSummartData');
export const laborDMFormAdd = createAddDatas('getLaborDMSummartData');
export const laborDMFormUpdate = createUpdateDatas('getLaborDMSummartData');
export const getLaborDMDetail = createGetDatas('getLaborDMDetailData');
export const changeLaborDMDetailNoAsyn = createGetDatasNoAsyn('getLaborDMDetailData')
export const changeLaborDMFormState = (props) => {
    return allActions['changeLaborDMFormState'](props)
}
export const changeCurrentLaborDMSummarysRow = (props) => {
    return allActions['changeCurrentLaborDMSummaryRow'](props)
}

// 劳务人员出勤管理
export const getLaborAMSummarys = createGetDatas('getLaborAMSummartData');
export const deleteLaborAMSummarys = creatDeleteDatas('getLaborAMSummartData');
export const laborAMFormAdd = createAddDatas('getLaborAMSummartData');
export const laborAMFormUpdate = createUpdateDatas('getLaborAMSummartData');
export const getLaborAMDetail = createGetDatas('geLaborAMDetailData');
export const changeLaborAMDetailNoAsyn = createGetDatasNoAsyn('getLaborAMDetailData')
export const changeLaborAMFormState = (props) => {
    return allActions['changeLaborAMFormState'](props)
}
export const changeCurrentLaborAMSummarysRow = (props) => {
    return allActions['changeCurrentLaborAMSummaryRow'](props)
}

// 人员进出场信息
export const getLaborEntryAndExitSummarys = createGetDatas('LaborEntryAndExitSummarys');
export const deleteLaborEntryAndExitSummarys = creatDeleteDatas('LaborEntryAndExitSummarys');
export const laborEntryAndExitFormAdd = createAddDatas('LaborEntryAndExitSummarys');
export const laborEntryAndExitFormUpdate = createUpdateDatas('LaborEntryAndExitSummarys');
export const changeLaborsEAEFormState = (props) => {
    return allActions['LaborEAEFormSate'](props)
}
export const changeCurrentLaborEAESummarysRow = (props) => {
    return allActions['changeCurrentLaborEAESummaryRow'](props)
}

/**
 * 构建查询结果
 * @param props
 * @param res
 * @returns {{rows, pageInfo: {rp: (number|*), pageSize: (number|*), total: *}}}
 */
const buildData = (props, res) => {
    const datas = res.data;
    const json = {
        rows: datas.instances,
        pageInfo: {
            rp: props.start_page,
            pageSize: props.page_size,
            total: datas.total_count
        }
    }
    return json;
}
const buildPureData = (datas) => {
    return {
        rows: datas,
        pageInfo: {
            rp: 1,
            pageSize: 10,
            total: datas.length
        }
    }
}

