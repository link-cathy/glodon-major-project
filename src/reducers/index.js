/**
 * Created by yuanxh on 2018/8/13.
 */
import { combineReducers } from 'redux'
import { STATE_TYPES } from '@/constants'
import { createReducer } from 'utils/reduxUtils'

import { cockpit } from './cockpit'
import { safety } from './safety'
import { processInfo } from './processInfo'
import { labors } from './labors'
import { checkQuality } from './checkQuality'
import { qualitySubConstratorData } from './qualityLabor'
const combinedReducers =  combineReducers({
    [STATE_TYPES.COCKPIT]: cockpit,
    [STATE_TYPES.SAFETY]: safety,
    [STATE_TYPES.PROCESSINFO]: processInfo,
    [STATE_TYPES.LABORS]: labors,
    [STATE_TYPES.CHECKQUESTION]: checkQuality,
    [STATE_TYPES.QUALITY_SUBCONSTRATOR_DATA]: qualitySubConstratorData
})
const featureReducers = createReducer({}, {
})

function rootReducers(state, action) {
    const intermediateState = combinedReducers(state, action);
    const finalState = featureReducers(intermediateState, action);
    return finalState;
}
export default rootReducers
