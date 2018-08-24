/**
 * Created by yuanxh on 2018/6/27.
 */
export const CLOSE_MODAL_INFO = 'onCancel'
export const GET_QUESTION_INFO = 'getData'
export const UPDATE_MODAL_STATUS = 'updateModalStatus'
export const getQuestionData = () => {
    return {
        type: GET_QUESTION_INFO
    }
}
export const onCancel = () => {
    return {
        type: CLOSE_MODAL_INFO
    }
}
export const updateModalStatus = () => {
    return {
        type: UPDATE_MODAL_STATUS
    }
}