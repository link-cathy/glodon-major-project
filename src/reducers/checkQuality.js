/**
 * Created by yuanxh on 2018/8/20.
 */
import { ACTION_TYPES } from '@/constants'
import { createReducer, allActions, initState, initReducer  } from 'utils/reduxUtils'
import Api from 'utils/universalRequest'
import fileApi from 'utils/fileApi'
import cimApi from 'utils/cimApi'
import { GET_LIST_ARG } from '@/config'
import _ from 'lodash'


const action_type = ACTION_TYPES.CHECK_QUALITY;
const initialState = initState(action_type);
const initReducers = initReducer(action_type)
export const checkQuality = createReducer(initialState, initReducers)


export const addCheckQuestion = (arg) => (dispatch) => {
    return Api.universalAdd(arg)
}
export const updateCheckQuestion = (arg) => (dispatch) => {
    return Api.universalUpdate(arg)
}

export const getObjectTypeAllPropertySets = (objectTypeId) => (dispatch) => {
    return cimApi.getObjectTypeAllPropertySets({}, { objectTypeId: objectTypeId })
}
export const uploadImg = ({ fileList, objectTypeId }) => (dispatch) => {
    return cimApi.getObjectTypeAllPropertySets({}, { objectTypeId: objectTypeId }).then((res) => {
        if (res.message === 'Success' && res.data.length > 0) {
            const _data = res.data;
            const arr = _data[1].properties.filter((obj, index) => obj['name'].indexOf('attachimg') !== -1)
            _.forEach(fileList, (obj, index) => {
                const formData = new FormData();
                formData.append('file', fileList[index].originFileObj)
                formData.append('objectTypeId', objectTypeId)
                formData.append('propertyId', arr[index]['id'])
                formData.append('dateSetId', _data[1]['id'])
                return fileApi.fileUpload(formData)
            })
        }
    })
}

export const commonGetList = ({ object_type_id, action_type, conditions }) => (dispatch) => {
    let json = GET_LIST_ARG({ object_type_id });
    return Api.universalGet(json).then((res) => {
        if (res.message === 'Success' && res.data.instances.length > 0) {
            const list = res.data;
            dispatch(allActions[action_type](list));
        }
    })
}