/**
 * Created by fancl on 2018/8/20.
 */
import { ACTION_TYPES } from '@/constants'
import { createReducer, allActions, initState, initReducer  } from 'utils/reduxUtils'
import Api from 'utils/universalRequest'
// import cimApi from 'utils/cimApi'
const action_type = ACTION_TYPES.CHECK_QUALITY;
let initialState = initState(action_type);
const initReducers = initReducer(action_type)
export const qualitySubConstratorData = createReducer(initialState, initReducers)

export const addSubConstrator = (arg) => (dispatch) => {
    return Api.universalAdd(arg)
}
export const getSubConstratorList = (arg) => (dispatch) => {
    return Api.universalGet(arg).then((res) => {
        if (res.message.toLowerCase() === 'success' && res.data.instances) {
            switch (arg.conditions.laborType) {
                case 1:
                    dispatch(allActions[action_type.GET_LABOR_LIST](res.data))
                    break;
                case 2:
                    dispatch(allActions[action_type.GET_PROFESSIONAL_LIST](res.data))
                    break;
            }
        }
    })
}

export const getSubConstratorTeamList = (arg) => (dispatch) => {
    return Api.universalGet(arg).then((res) => {
        if (res.message.toLowerCase() === 'success' && res.data.instances) {
            if (arg && arg.conditions && arg.conditions.unitId) {
                let obj = { [arg.conditions.unitId]: res.data }
                dispatch(allActions[action_type.GET_CONDITION_TEAM_LIST](obj))
            } else {
                dispatch(allActions[action_type.GET_CONDITION_TEAM_LIST](res.data))
            }
        }
    })
}