/**
 * Created by fancl on 2018/7/11.
 */
import {
    GET_SAFETY_CATEGORY_REQUEST,
    GET_SAFETY_CATEGORY_SUCCESS,
    GET_SAFETY_CATEGORY_FAIL,
    GET_SAFETY_OVERVIEW_REQUEST,
    GET_SAFETY_OVERVIEW_SUCCESS,
    GET_SAFETY_OVERVIEW_FAIL,
    GET_SAFETY_RESPONSIBILITY_REQUEST,
    GET_SAFETY_RESPONSIBILITY_SUCCESS,
    GET_SAFETY_RESPONSIBILITY_FAIL,
    GET_SAFETY_SUBCONTRACTOR_REQUEST,
    GET_SAFETY_SUBCONTRACTOR_SUCCESS,
    GET_SAFETY_SUBCONTRACTOR_FAIL,
    GET_SAFETY_TREND_REQUEST,
    GET_SAFETY_TREND_SUCCESS,
    GET_SAFETY_TREND_FAIL
} from '../actions';

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

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_SAFETY_CATEGORY_REQUEST:
            return {
                ...state,
                category: {
                    isLoading: true,
                    data: {},
                    errorMsg: ''
                }
            }
        case GET_SAFETY_CATEGORY_SUCCESS:
            return {
                ...state,
                category: {
                    isLoading: false,
                    data: action.data,
                    errorMsg: ''
                }
            }
        case GET_SAFETY_CATEGORY_FAIL:
            return {
                ...state,
                category: {
                    isLoading: false,
                    data: action.data,
                    errorMsg: 'request error'
                }
            }

        case GET_SAFETY_OVERVIEW_REQUEST:
            return {
                ...state,
                overview: {
                    isLoading: true,
                    data: {},
                    errorMsg: ''
                }
            }
        case GET_SAFETY_OVERVIEW_SUCCESS:
            return {
                ...state,
                overview: {
                    isLoading: false,
                    data: action.data,
                    errorMsg: ''
                }
            }
        case GET_SAFETY_OVERVIEW_FAIL:
            return {
                ...state,
                overview: {
                    isLoading: false,
                    data: {},
                    errorMsg: 'request error'
                }
            }

        case GET_SAFETY_RESPONSIBILITY_REQUEST:
            return {
                ...state,
                responsibility: {
                    isLoading: true,
                    data: {},
                    errorMsg: ''
                }
            }
        case GET_SAFETY_RESPONSIBILITY_SUCCESS:
            return {
                ...state,
                responsibility: {
                    isLoading: false,
                    data: action.data,
                    errorMsg: ''
                }
            }
        case GET_SAFETY_RESPONSIBILITY_FAIL:
            return {
                ...state,
                responsibility: {
                    isLoading: false,
                    data: {},
                    errorMsg: 'request error'
                }
            }

        case GET_SAFETY_SUBCONTRACTOR_REQUEST:
            return {
                ...state,
                subcontractor: {
                    isLoading: true,
                    data: {},
                    errorMsg: ''
                }
            }
        case GET_SAFETY_SUBCONTRACTOR_SUCCESS:
            return {
                ...state,
                subcontractor: {
                    isLoading: false,
                    data: action.data,
                    errorMsg: 'request error'
                }
            }
        case GET_SAFETY_SUBCONTRACTOR_FAIL:
            return {
                ...state,
                subcontractor: {
                    isLoading: false,
                    data: {},
                    errorMsg: 'request error'
                }
            }

        case GET_SAFETY_TREND_REQUEST:
            return {
                ...state,
                trend: {
                    isLoading: true,
                    data: {},
                    errorMsg: ''
                }
            }
        case GET_SAFETY_TREND_SUCCESS:
            return {
                ...state,
                trend: {
                    isLoading: false,
                    data: action.data,
                    errorMsg: ''
                }
            }
        case GET_SAFETY_TREND_FAIL:
            return {
                ...state,
                trend: {
                    isLoading: false,
                    data: {},
                    errorMsg: 'request error'
                }
            }
        default:
            return state;
    }
}