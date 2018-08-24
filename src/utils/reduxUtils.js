import { ACTION_TYPES } from '@/constants'
import _ from 'lodash'
const createAction = (type) => {
    return function(args) {
        let action = { type }
        action.data = args
        return action
    }
}

const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action.data);
        } else {
            return state;
        }
    }
}

const Actions = (actionObject) => (
    _.keys(actionObject).reduce((previousValue, obj) => (
        { ...previousValue, [actionObject[obj]]: createAction(actionObject[obj]) }
    ), {})
)
const createAllActions = (action) => (
    _.keys(action).reduce((previousValue, currentValue) =>
        (typeof action[currentValue] === 'string' ?
            { ...previousValue, [action[currentValue]]: createAction(action[currentValue]) } : Actions(action[currentValue]))
        , {})
)
const initState = (checkQualityType) => (_.keys(checkQualityType).reduce((previousValue, currentValue) => (
    { ...previousValue, [checkQualityType[currentValue]]: {}}
), {}))

const initReducer = (checkQualityType) => (_.keys(checkQualityType).reduce((previousValue, currentValue) => (
    { ...previousValue, [checkQualityType[currentValue]]: (state, action) => ({ ...state, [checkQualityType[currentValue]]: action }) }
), {}))
const allActions = createAllActions(ACTION_TYPES)
export {
    createAction,
    createReducer,
    allActions,
    initState,
    initReducer
}