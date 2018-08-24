/**
 * Created by yuanxh on 2018/8/13.
 */
import { ACTION_TYPES } from '@/constants'
import { createReducer } from 'utils/reduxUtils'
const initState = {
    showModal: false,
    resultData: ''
}

export const processInfo = createReducer(initState, {
    [ACTION_TYPES.GET_QUESTION_INFO](state, action) {
        return Object.assign({}, state)
    },
    [ACTION_TYPES.UPDATE_MODAL_STATUS](state, action) {
        return Object.assign({}, state, {
            showModal: (state.showModal ? false : true)
        })
    },
    [ACTION_TYPES.CLOSE_MODAL_INFO](state, action) {
        return Object.assign({}, state, {
            showModal: false
        })
    }
})

