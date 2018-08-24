/**
 * Created by yuanxh on 2018/8/13.
 */

import { ACTION_TYPES } from '@/constants'
import { createReducer } from 'utils/reduxUtils'
const initState = {
    category: {
        isLoading: false,
        data: {},
        errorMsg: ''
    },
    overview: {
        isLoading: false,
        data: {},
        errorMsg: ''
    },
    responsibility: {
        isLoading: false,
        data: {},
        errorMsg: ''
    },
    subcontractor: {
        isLoading: false,
        data: {},
        errorMsg: ''
    },
    trend: {
        isLoading: false,
        data: {},
        errorMsg: ''
    }
}

export const safety = createReducer(initState, {
    [ACTION_TYPES.GET_SAFETY_CATEGORY_REQUEST](state, action) {
        return {
            ...state,
            category: {
                isLoading: true,
                data: {},
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_CATEGORY_SUCCESS](state, action) {
        return {
            ...state,
            category: {
                isLoading: false,
                data: action.data,
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_CATEGORY_FAIL](state, action) {
        return {
            ...state,
            category: {
                isLoading: false,
                data: action.data,
                errorMsg: 'request error'
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_OVERVIEW_REQUEST](state, action) {
        return {
            ...state,
            overview: {
                isLoading: true,
                data: {},
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_OVERVIEW_SUCCESS](state, action) {
        return {
            ...state,
            overview: {
                isLoading: false,
                data: action.data,
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_OVERVIEW_FAIL](state, action) {
        return {
            ...state,
            overview: {
                isLoading: false,
                data: {},
                errorMsg: 'request error'
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_REQUEST](state, action) {
        return {
            ...state,
            responsibility: {
                isLoading: true,
                data: {},
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_SUCCESS](state, action) {
        return {
            ...state,
            responsibility: {
                isLoading: false,
                data: action.data,
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_FAIL](state, action) {
        return {
            ...state,
            responsibility: {
                isLoading: false,
                data: {},
                errorMsg: 'request error'
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_REQUEST](state, action) {
        return {
            ...state,
            subcontractor: {
                isLoading: true,
                data: {},
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_SUCCESS](state, action) {
        return {
            ...state,
            subcontractor: {
                isLoading: false,
                data: action.data,
                errorMsg: 'request error'
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_FAIL](state, action) {
        return {
            ...state,
            subcontractor: {
                isLoading: false,
                data: {},
                errorMsg: 'request error'
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_TREND_REQUEST](state, action) {
        return {
            ...state,
            trend: {
                isLoading: true,
                data: {},
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_TREND_SUCCESS](state, action) {
        return {
            ...state,
            trend: {
                isLoading: false,
                data: action.data,
                errorMsg: ''
            }
        }
    },
    [ACTION_TYPES.GET_SAFETY_TREND_FAIL](state, action) {
        return {
            ...state,
            trend: {
                isLoading: false,
                data: {},
                errorMsg: 'request error'
            }
        }
    }
}
)
export const getSafetyInfo = (requestType) => {
    return function(dispatch) {
        // dispatch(getSafetyInfoRequest(requestType));

        let url = '/api/safety/'
        let successType
        let failType
        switch (requestType) {
            case ACTION_TYPES.GET_SAFETY_CATEGORY_REQUEST:
                url += 'queryGroupCategoryCount.json'
                successType = ACTION_TYPES.GET_SAFETY_CATEGORY_SUCCESS
                failType = ACTION_TYPES.GET_SAFETY_CATEGORY_FAIL
                break
            case ACTION_TYPES.GET_SAFETY_OVERVIEW_REQUEST:
                url += 'queryTotalCount.json'
                successType = ACTION_TYPES.GET_SAFETY_OVERVIEW_SUCCESS
                failType = ACTION_TYPES.GET_SAFETY_OVERVIEW_FAIL
                break
            case ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_REQUEST:
                url += 'queryGroupDutyPersonCount.json'
                successType = ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_SUCCESS
                failType = ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_FAIL
                break
            case ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_REQUEST:
                url += 'queryGroupSubDetailCount.json'
                successType = ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_SUCCESS
                failType = ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_FAIL
                break
            case ACTION_TYPES.GET_SAFETY_TREND_REQUEST:
                url += 'queryGroupRiskTendencyCount.json'
                successType = ACTION_TYPES.GET_SAFETY_TREND_SUCCESS
                failType = ACTION_TYPES.GET_SAFETY_TREND_FAIL
                break
        }

        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(successType, failType);
                // dispatch(getSafetyInfoSuccess(successType, json))
            }).catch(
                () => {
                    // dispatch(getSafetyInfoFail(failType))
                }
            )
    }
}