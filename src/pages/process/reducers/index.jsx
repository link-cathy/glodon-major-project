/**
 * Created by yuanxh on 2018/6/27.
 */
import { GET_QUESTION_INFO, UPDATE_MODAL_STATUS, CLOSE_MODAL_INFO } from '../action'

const initState = {
    showModal: false,
    resultData: ''
}

const reducers = (state = initState, action) => {
    switch (action.type) {
        case GET_QUESTION_INFO:
            return Object.assign({}, state)
        case UPDATE_MODAL_STATUS:
            console.log(8888);
            return Object.assign({}, state, {
                showModal: (state.showModal ? false : true)
            })
        case CLOSE_MODAL_INFO:
            return Object.assign({}, state, {
                showModal: false
            })
        default:
            return state
    }
}

export default reducers;

