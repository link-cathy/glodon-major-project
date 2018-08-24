/**
 * Created by yuanxh on 2018/8/13.
 */
import { ACTION_TYPES } from '@/constants'
import { createReducer } from 'utils/reduxUtils'
// import { Actions } from 'utils/reduxUtils'
const initState = {
    isLoading: false,
    projectProfileInfo: {

    },
    errorMsg: ''
}
export const cockpit = createReducer(initState, {
    [ACTION_TYPES.GET_PROJECT_PROFILE_INFO_REQUEST](state, action)
    {
        return {
            ...state,
            isLoading: true,
            projectProfileInfo: {},
            errorMsg: ''
        }
    },
    [ACTION_TYPES.GET_PROJECT_PROFILE_INFO_SUCCESS](state, action) {


        return {
            ...state,
            isLoading: false,
            projectProfileInfo: action.projectProfileInfo,
            errorMsg: ''
        }
    },
    [ACTION_TYPES.GET_PROJECT_PROFILE_INFO_FAIL](state, action) {
        return {
            ...state,
            isLoading: false,
            projectProfileInfo: {},
            errorMsg: 'request error'
        }
    }
})

export const getProjectProfileInfo = () => {
    return function(dispatch) {
        // dispatch(Actions.getProjectProfileInfoRequest());

        return fetch('/api/cockpit/projectProfile.json')
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                // dispatch(getProjectProfileInfoSuccess(json))
            }).catch(
                () => {
                    // dispatch(getProjectProfileInfoFail())
                }
            )
    }
}