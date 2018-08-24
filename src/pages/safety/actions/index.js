/**
 * Created by fancl on 2018/7/11.
 */

import 'isomorphic-fetch'

export const GET_SAFETY_CATEGORY_REQUEST = 'safetyInfo/GET_SAFETY_CATEGORY_REQUEST'
export const GET_SAFETY_CATEGORY_SUCCESS = 'safetyInfo/GET_SAFETY_CATEGORY_SUCCESS'
export const GET_SAFETY_CATEGORY_FAIL = 'safetyInfo/GET_SAFETY_CATEGORY_FAIL'

export const GET_SAFETY_OVERVIEW_REQUEST = 'safetyInfo/GET_SAFETY_OVERVIEW_REQUEST'
export const GET_SAFETY_OVERVIEW_SUCCESS = 'safetyInfo/GET_SAFETY_OVERVIEW_SUCCESS'
export const GET_SAFETY_OVERVIEW_FAIL = 'safetyInfo/GET_SAFETY_OVERVIEW_FAIL'

export const GET_SAFETY_RESPONSIBILITY_REQUEST = 'safetyInfo/GET_SAFETY_RESPONSIBILITY_REQUEST'
export const GET_SAFETY_RESPONSIBILITY_SUCCESS = 'safetyInfo/GET_SAFETY_RESPONSIBILITY_SUCCESS'
export const GET_SAFETY_RESPONSIBILITY_FAIL = 'safetyInfo/GET_SAFETY_RESPONSIBILITY_FAIL'

export const GET_SAFETY_SUBCONTRACTOR_REQUEST = 'safetyInfo/GET_SAFETY_SUBCONTRACTOR_REQUEST'
export const GET_SAFETY_SUBCONTRACTOR_SUCCESS = 'safetyInfo/GET_SAFETY_SUBCONTRACTOR_SUCCESS'
export const GET_SAFETY_SUBCONTRACTOR_FAIL = 'safetyInfo/GET_SAFETY_SUBCONTRACTOR_FAIL'

export const GET_SAFETY_TREND_REQUEST = 'safetyInfo/GET_SAFETY_TREND_REQUEST'
export const GET_SAFETY_TREND_SUCCESS = 'safetyInfo/GET_SAFETY_TREND_SUCCESS'
export const GET_SAFETY_TREND_FAIL = 'safetyInfo/GET_SAFETY_TREND_FAIL'

function getSafetyInfoRequest(requestType) {
    return {
        type: requestType
    }
}

function getSafetyInfoSuccess(successInfoType, data) {
    return {
        type: successInfoType,
        data: data
    }
}

function getSafetyInfoFail(failInfoType) {
    return {
        type: failInfoType
    }
}

export function getSafetyInfo(requestType) {
    return function(dispatch) {
        dispatch(getSafetyInfoRequest(requestType));

        let url = '/api/safety/'
        let successType
        let failType
        switch (requestType) {
            case GET_SAFETY_CATEGORY_REQUEST:
                url += 'queryGroupCategoryCount.json'
                successType = GET_SAFETY_CATEGORY_SUCCESS
                failType = GET_SAFETY_CATEGORY_FAIL
                break
            case GET_SAFETY_OVERVIEW_REQUEST:
                url += 'queryTotalCount.json'
                successType = GET_SAFETY_OVERVIEW_SUCCESS
                failType = GET_SAFETY_OVERVIEW_FAIL
                break
            case GET_SAFETY_RESPONSIBILITY_REQUEST:
                url += 'queryGroupDutyPersonCount.json'
                successType = GET_SAFETY_RESPONSIBILITY_SUCCESS
                failType = GET_SAFETY_RESPONSIBILITY_FAIL
                break
            case GET_SAFETY_SUBCONTRACTOR_REQUEST:
                url += 'queryGroupSubDetailCount.json'
                successType = GET_SAFETY_SUBCONTRACTOR_SUCCESS
                failType = GET_SAFETY_SUBCONTRACTOR_FAIL
                break
            case GET_SAFETY_TREND_REQUEST:
                url += 'queryGroupRiskTendencyCount.json'
                successType = GET_SAFETY_TREND_SUCCESS
                failType = GET_SAFETY_TREND_FAIL
                break
        }

        return fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                dispatch(getSafetyInfoSuccess(successType, json))
            }).catch(
                () => {
                    dispatch(getSafetyInfoFail(failType))
                }
            )
    }
}