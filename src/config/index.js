/**
 * Created by yuanxh on 2018/7/12.
 */
import messages from 'utils/i18n'
import processInfoLeftMenu1 from '@/pages/process/component/ProcessContent'
import BaseInfoLayout from '@/pages/quality/baseInfo/BaseInfoLayout'
import CheckQuality from '@/pages/quality/checkQuality/'
import ManagerAttenceMgr from '@/pages/labors/component/ManagerAttenceMgr'
import ManagerAttenceAnaly from '@/pages/labors/component/ManagerAttenceAnaly'
import LaborEntryAndExit from '@/pages/labors/component/LaborEntryAndExit'
import LabourDemandMg from '@/pages/labors/component/LabourDemandMg'
import LaborAttenceMg from '@/pages/labors/component/LaborAttenceMg'
import LaborAttrnceAnaly from '@/pages/labors/component/LaborAttrnceAnaly'
import StatisticAnalysis from '@/pages/quality/checkQuality/StatisticAnalysis'
import SafetyContent from '@/pages/safety/component/SafetyContent'
export const config = {
    processInfo: {
        contentLeftNavBar: [
            { name: messages.processInfo.progressPlanning, components: processInfoLeftMenu1 },
            { name: messages.processInfo.actualProgressReport },
            { name: messages.processInfo.constructionProgressSimulation },
            { name: messages.processInfo.constructionProgressAnalys }],
    },
    safetyConstruction: {
        contentLeftNavBar: [
            { name: messages.safetyConstruction.leftMenu1, components: null },
            { name: messages.safetyConstruction.leftMenu2, components: null },
            { name: messages.safetyConstruction.leftMenu3, components: null },
            { name: messages.safetyConstruction.leftMenu4, components: null },
            { name: messages.safetyConstruction.leftMenu5, components: null },
            { name: messages.safetyConstruction.leftMenu6, components: SafetyContent }]
    },
    laborsInfo: {
        contentLeftNavBar: [
            { name: messages.labor.managerAttenceManage, components: ManagerAttenceMgr },
            { name: messages.labor.managerAttenceAnalysis, components: ManagerAttenceAnaly },
            { name: messages.labor.laborEntryAndExitManage, components: LaborEntryAndExit },
            { name: messages.labor.labourDemandManage, components: LabourDemandMg },
            { name: messages.labor.laborAttenceManage, components: LaborAttenceMg },
            { name: messages.labor.laborAnalysis, components: LaborAttrnceAnaly },
            { name: messages.labor.laborSubcontractorManage, components: null },
        ],
        queryConfig: {
            pageSize: 10
        }
    },
    qualityQuestion: {
        contentLeftNavBar: [
            { name: messages.qualityManage.qualityCheck, components: CheckQuality },
            { name: messages.qualityManage.qualityProblemAnalysStatistics, components: StatisticAnalysis, _props: { className: 'qulity-content' }},
            { name: messages.qualityManage.baseInfoMaintain, components: BaseInfoLayout },
        ]
    }
}
export const DATABASE_TABLE = {
    SUBCONSTRATOR: 'subConstrator', // 分包单位
    SUNCONSTRATOR_TEAM: 'subConstratorTeam', // 队伍
    QUALITY_PROBLEM_TYPE: 'qualityProblemType', // 质量问题库
    QUALITY_PROBLEM: 'qualityProblem', // 质量检查问题
    PROBLEM_RECTIFICATION: 'problemRectification', // 质量检查问题-整改（详情）
    PROBLEM_REVIEW: 'problemReview', // 质量检查问题-复查（详情）
    QUALITY_PROBLEM_SUM: 'qualityProblemSum', // 质量问题数量
    QUALITY_PROBLEM_BY_DUTY_PERSON: 'qualityProblemByDutyperson', // (未销项)质量问题按责任人(整改人)分析
    QUALITY_PROBLEM_BY_SUBCONSTRATOR: 'qualityProblemBySubconstrator', // (未销项)质量问题按分包商（责任单位-队伍）分析
    QUALITY_PROBLEM_TREND_BY_TYPE: 'qualityProblemTrendByType', // (未销项)质量问题按类型分析
    QUALITY_PROBLEM_TREND: 'qualityProblemTrend'// 质量问题趋势分析
}
// 获取list参数
export const GET_LIST_ARG = ({ object_type_id, conditions, start_page, end_page, page_size }) => (
    {
        'conditions': conditions || {},
        'end_page': end_page || 2,
        'object_type_id': object_type_id,
        'page_size': page_size || 10,
        'start_page': start_page || 1
    }
)