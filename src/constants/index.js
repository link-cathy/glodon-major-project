/**
 * Created by yuanxh on 2018/8/13.
 */

export const ACTION_TYPES = {
    // GET_PROJECT_PROFILE_INFO_REQUEST: 'projectInfo/GET_PROJECT_PROFILE_INFO_REQUEST',
    // GET_PROJECT_PROFILE_INFO_SUCCESS: 'projectInfo/GET_PROJECT_PROFILE_INFO_SUCCESS',
    // GET_PROJECT_PROFILE_INFO_FAIL: 'projectInfo/GET_PROJECT_PROFILE_INFO_FAIL',
    // CLOSE_MODAL_INFO: 'onCancel',
    // GET_QUESTION_INFO: 'getData',
    // UPDATE_MODAL_STATUS: 'updateModalStatus',
    // GET_SAFETY_CATEGORY_REQUEST: 'safetyInfo/GET_SAFETY_CATEGORY_REQUEST',
    // GET_SAFETY_CATEGORY_SUCCESS: 'safetyInfo/GET_SAFETY_CATEGORY_SUCCESS',
    // GET_SAFETY_CATEGORY_FAIL: 'safetyInfo/GET_SAFETY_CATEGORY_FAIL',
    //
    // GET_SAFETY_OVERVIEW_REQUEST: 'safetyInfo/GET_SAFETY_OVERVIEW_REQUEST',
    // GET_SAFETY_OVERVIEW_SUCCESS: 'safetyInfo/GET_SAFETY_OVERVIEW_SUCCESS',
    // GET_SAFETY_OVERVIEW_FAIL: 'safetyInfo/GET_SAFETY_OVERVIEW_FAIL',
    //
    // GET_SAFETY_RESPONSIBILITY_REQUEST: 'safetyInfo/GET_SAFETY_RESPONSIBILITY_REQUEST',
    // GET_SAFETY_RESPONSIBILITY_SUCCESS: 'safetyInfo/GET_SAFETY_RESPONSIBILITY_SUCCESS',
    // GET_SAFETY_RESPONSIBILITY_FAIL: 'safetyInfo/GET_SAFETY_RESPONSIBILITY_FAIL',
    //
    // GET_SAFETY_SUBCONTRACTOR_REQUEST: 'safetyInfo/GET_SAFETY_SUBCONTRACTOR_REQUEST',
    // GET_SAFETY_SUBCONTRACTOR_SUCCESS: 'safetyInfo/GET_SAFETY_SUBCONTRACTOR_SUCCESS',
    // GET_SAFETY_SUBCONTRACTOR_FAIL: 'safetyInfo/GET_SAFETY_SUBCONTRACTOR_FAIL',
    //
    // GET_SAFETY_TREND_REQUEST: 'safetyInfo/GET_SAFETY_TREND_REQUEST',
    // GET_SAFETY_TREND_SUCCESS: 'safetyInfo/GET_SAFETY_TREND_SUCCESS',
    // GET_SAFETY_TREND_FAIL: 'safetyInfo/GET_SAFETY_TREND_FAIL',
    LABOR: {
        GET_LABOR_EAE_SUMMARY_DATA: 'LaborEntryAndExitSummarys',
        LABOR_EAE_FORM_STATE: 'LaborEAEFormSate',
        CHANGE_CURRENT_LABOR_EAE_SUMMARY_ROW: 'changeCurrentLaborEAESummaryRow',

        GET_MANAGER_AM_SUMMARY_DATA: 'getMannagerAMSummartData',
        GET_MANAGER_AM_DETAIL_DATA: 'getMannagerAMDetailData',
        CHANGE_MANAGER_AM_FORM_STATE: 'changeManagerAMFormState',
        CHANGE_CURRENT_MANAGER_AM_SUMMARY_ROW: 'changeCurrentManagerAMSummaryRow',

        GET_LABOR_DM_SUMMARY_DATA: 'getLaborDMSummartData',
        GET_LABOR_DM_DETAIL_DATA: 'getLaborDMDetailData',
        CHANGE_LABOR_DM_FORM_STATE: 'changeLaborDMFormState',
        CHANGE_CURRENT_LABOR_DM_SUMMARY_ROW: 'changeCurrentLaborDMSummaryRow',

        GET_LABOR_AM_SUMMARY_DATA: 'getLaborAMSummartData',
        GET_LABOR_AM_DETAIL_DATA: 'getLaborAMDetailData',
        CHANGE_LABOR_AM_FORM_STATE: 'changeLaborAMFormState',
        CHANGE_CURRENT__LABOR_AM_SUMMARY_ROW: 'changeCurrentLaborAMSummaryRow',
        GET_MANAGER_ATTENCE_CYCLE: 'getManagerAttenceCycle',
        GET_MANAGER_ATTENCE_CYCLE_STATIC: 'getManagerAttenceCycleStatic',
        CHANGE_MANAGER_ANALY_FORM_STATE: 'changeManagerAnasyFormState',
    },
    // checkQuality
    CHECK_QUALITY: {
        GET_ADD_QUESTION_LIST: 'getAddQuestionList',
        GET_QUESTION_COUNT: 'getQuestionCount',
        GET_QUESTION_BYSTRAROR_COUNT: 'getQuestionByStratorCount',
        GET_QUESTION_BYDETYPERSON_COUNT: 'getQuestionByDetyPersonCount',
        GET_QUESTION_TREND_BYTYPE_COUNT: 'getQuestionTrendByTypeCount',
        GET_QUESTION_TREND_COUNT: 'getQuestionTrendCount',
        GET_PROFESSIONAL_LIST: 'getProfessionalData',
        GET_LABOR_LIST: 'getLaborData',
        GET_CONDITION_TEAM_LIST: 'getConditionTeamData',
        GET_ORIGINAL_TEAM_LIST: 'getOriginalTeamData',
    }
}
export const STATE_TYPES = {
    COCKPIT: 'cockpit',
    SAFETY: 'safety',
    PROCESSINFO: 'processInfo',
    LABORS: 'labors',
    CHECKQUESTION: 'checkQuestion',
    QUALITY_SUBCONSTRATOR_DATA: 'qualitySubConstratorData'
}

