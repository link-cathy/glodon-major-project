/**
 * Created by fancl on 2018/6/25.
 */
export const GET_PROJECT_PROFILE_INFO_REQUEST = 'projectInfo/GET_PROJECT_PROFILE_INFO_REQUEST'
export const GET_PROJECT_PROFILE_INFO_SUCCESS = 'projectInfo/GET_PROJECT_PROFILE_INFO_SUCCESS'
export const GET_PROJECT_PROFILE_INFO_FAIL = 'projectInfo/GET_PROJECT_PROFILE_INFO_FAIL'

function getProjectProfileInfoRequest() {
    return {
        type: GET_PROJECT_PROFILE_INFO_REQUEST
    }
}

function getProjectProfileInfoSuccess(qualityInfo) {
    return {
        type: GET_PROJECT_PROFILE_INFO_SUCCESS,
        projectProfileInfo: qualityInfo
    }
}

function getProjectProfileInfoFail() {
    return {
        type: GET_PROJECT_PROFILE_INFO_FAIL
    }
}

export function getProjectProfileInfo() {
    return function(dispatch) {
        dispatch(getProjectProfileInfoRequest());

        return fetch('/api/cockpit/projectProfile.json')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                dispatch(getProjectProfileInfoSuccess(json))
            }).catch(
                () => {
                    dispatch(getProjectProfileInfoFail())
                }
            )
    }
}