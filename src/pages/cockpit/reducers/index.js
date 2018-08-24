/**
 * Created by fancl on 2018/6/25.
 */
import { GET_PROJECT_PROFILE_INFO_REQUEST, GET_PROJECT_PROFILE_INFO_SUCCESS, GET_PROJECT_PROFILE_INFO_FAIL } from '../actions'

const initState = {
    isLoading: false,
    projectProfileInfo: {

    },
    errorMsg: ''
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_PROJECT_PROFILE_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                projectProfileInfo: {},
                errorMsg: ''
            }
        case GET_PROJECT_PROFILE_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projectProfileInfo: action.projectProfileInfo,
                errorMsg: ''
            }
        case GET_PROJECT_PROFILE_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                projectProfileInfo: {},
                errorMsg: 'request error'
            }
        default:
            return state;
    }
}