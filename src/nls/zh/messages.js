// zh
const messages = {
    cockpit: '驾驶舱',
    labors: '人员管理',
    process: '进度管理',
    quality: '质量管理',
    safety: '安全管理',
    surveillance: '职能监控',

    cityDes: '新城新区建设总指挥部',
    safetyTime: '安全生产时间',
    projectName: '重大项目监管',

    userInfo: {
        outLogin: '退出',
        userCenter: '用户中心',
        console: '编辑模式',
        view: '浏览模式'
    },

    // 首页驾驶舱
    homePage: {
        projectOverview: '项目概况',
        projectProgress: '项目进度',
        workRemind: '工作提醒',
        projectTeam: '项目团队',
        quality: '质量',
        safety: '安全',
        labors: '人员',
        device: '设备',
        effectMap: '效果图',
        imageProgress: '形象进度',
        greenConstructionMonitorData: '绿色施工监管数据',
        analysisElementAffectProgress: '进度影响要素分析',
        videoMonitor: '视频监控'
    },
    // 导航栏
    leftNavBar: {
        cockpit: '项目概况',
        labors: '人员管理',
        process: '进度管理',
    },
    rightNavBar: {
        quality: '质量管理',
        safety: '安全管理',
        surveillance: '智能监控',
        // cooperation: '项目协同'
    },
    // 进度管理
    processInfo: {
        temperature: '温度',
        humidity: '湿度',
        windSpeed: '风速',
        noise: '噪音',
        PM25: 'PM2.5',
        PM10: 'PM10',
        projectStatus: '工期状态',
        workersNum: '实时作业人数',
        qualityQuestion: '未销项质量问题',
        safetyQuestion: '未销选安全隐患',
        exceedTime: '超期',
        commonNum: '个',
        peopleNum: '人',
        seriousQuestion: '严重紧要',
        delayQuestion: '未销项',
        limitProjectTime: '总工期',
        remainProjectTime: '剩余天数',
        localeWorkers: '现场人数',
        planWorkers: '计划人数',
        modalTitleProjectName: '进度计划',
        modalTitleShow: [{
            name: ['要求开始时间', '要求完成时间', '要求工期', '剩余工期']
        }, {
            name: ['实际开始时间', '实际完成时间', '已执行工期', '工期状态']
        }],
        modalRightTitle: '当前进度的统计冻结时间为:',
        progressPlanning: '计划进度编制',
        actualProgressReport: '实际进度填报',
        constructionProgressSimulation: '施工进度模拟',
        constructionProgressAnalys: '施工进度综合分析'
    },
    // 人员管理
    labor: {
        onlineWorkers: '实时作业人数',
        dailyWorkers: '日累计进场人数',
        totalWorkers: '项目总人数',
        teamWorkers: '队伍人数',
        categoryWorkers: '工种人数',
        todayWorkersLine: '今日作业人员曲线',
        recentDaysWorkersLine: '最近7日作业人员',
        ageDistributionOfworkers: '工人年龄分布',
        regionDistributionOfworkers: '工人地域分布',
        peopleDistributionOfworkers: '工人少数民族情况',
        inOutDistributionOfworkers: '人员进出场情况',
        workersIn: '进场人员',
        workersOut: '出场人员',
        workersTotal: '项目总人员',
        // 左边导航条
        /* register: '劳务人员登记',
        plain: '劳务需求计划',
        attendance: '劳务人员考勤',
        train: '劳务人员培训',
        analysis: '劳务人员统计分析', */
        managerAttenceManage: '管理人员考勤管理',
        managerAttenceAnalysis: '管理人员考勤统计分析',
        laborEntryAndExitManage: '劳务人员进退场管理',
        labourDemandManage: '劳务需求计划管理',
        laborAttenceManage: '劳务人员考勤管理',
        laborAnalysis: '劳务人员统计分析',
        laborSubcontractorManage: '劳务人分包单位管理',
        managerAttence: {
            manage: {
                MainPanel: {
                    attenceDate: '考勤日期',
                    projectName: '项目名称',
                    getAttenceFieldsURL: 'http://10.129.27.104:7109/queryInstance',
                    attenceShowFields: '',
                    getAttenceDataURL: '',
                    previewTitle: '考勤人员考勤记录查看',
                    editTitle: '考勤人员考勤记录编辑',
                    addTitle: '考勤人员考勤记录添加',
                }
            },
            analysis: {
            },
        },
        demandMag: {
            MainPanel: {
                demandDate: '需求日期',
                projectName: '项目名称',
                previewTitle: '劳务需求计划记录查看',
                editTitle: '劳务需求计划记录编辑',
                addTitle: '劳务需求计划添加',
            }
        },
        entryExit: {
            MainPanel: {
                entryExitDate: '进退场日期',
                projectName: '项目名称',
                previewTitle: '进退场查看',
                editTitle: '进退场编辑',
                addTitle: '进退场添加',
            }
        },
        laborAttence: {
            MainPanel: {
                entryExitDate: '考勤日期',
                projectName: '项目名称',
                previewTitle: '劳务人员考勤查看',
                editTitle: '劳务人员考勤编辑',
                addTitle: '劳务人员考勤添加',
            }
        },
        object_type_id: {
            managerAttenceSummary: 'adminAttendSummary',
            managerAttenceDetail: 'adminAttendDetail',
            laborPlanSummary: 'laborPlanSummary',
            laborPlanDetail: 'laborPlanDetail',
            laborAttendSummary: 'laborAttendSummary',
            laborAttendDetail: 'laborAttendWorkType',
            laborApproachexitSummary: 'laborApproachexitSummary'
        }
    },
    // 安全文明施工
    safetyConstruction: {
        unsoleved: '未销项',
        problem: '隐患',
        responsiblity: '责任人',
        analysis: '分析',
        subcontractor: '分包单位',
        category: '类型',
        thirtyDays: '30天',
        number: '数量',
        according: '按',
        recent: '近',
        leftMenu1: '培训资料管理',
        leftMenu2: '教育培训记录',
        leftMenu3: '安全检查管理',
        leftMenu4: '重大危险源监测',
        leftMenu5: '绿色施工监管',
        leftMenu6: '安全隐患分析'
    },
    // 操作名词
    operation: {
        query: '查询',
        add: '新增',
        save: '保存',
        close: '关闭',
        operate: '操作'
    },
    style: {
        defaultStyle: {
            table: 'defaul-style-table',
            datePicker: 'defaul-style-DatePicke',
            input: 'defaul-style-input',
            button: 'defaul-style-button',
            dropDown: 'defaul-style-dropDown',
        }
    },
    worktype: [
        {
            name: '工种名称1',
            type: 1
        },
        {
            name: '工种名称2',
            type: 2
        },
    ],
    tips: {
        deleteSuccess: '删除成功！',
        deleteFaild: '删除失败！',
        updateSuccess: '更新成功！',
        updateFaild: '更新失败！',
        addSuccess: '添加成功！',
        addFaild: '添加失败！',
        querySuccess: '数据请求成功！',
        queryFaild: '数据请求失败！',
        noData: '暂无数据'
    },
    // 质量管理
    qualityManage: {
        qualityProblemAnalysStatistics: '质量统计分析',
        qualityCheck: '质量检查',
        baseInfoMaintain: '基础信息维护',
        searchProject: '项目名称',
        checkDate: '检查日期',
        checkDateTo: '至',
        qualityQustion: '质量问题',
        checkResult: '检查结果',
        warnLevel: '紧急级别',
        timeSort: '时间排序',
        timeOut: '超时状态',
        company: '分包单位',
        findQuestion: '问题排查',
        findRecord: '排查记录',
        projectName: '项目名称',
        questionStep: '问题部位',
        checkType: '检查类型',
        checkQuationInfo: '质量问题补充说明',
        actionRequire: '整改需求',
        questionStatus: '状态',
        actionTimeLimit: '整改时限',
        actionDate: '整改时间',
        actionCheckTime: '复查时间',
        actionInfo: '整改说明',
        actionCheckInfo: '复查说明',
        actionDoMen: '整改人',
        actionInformMen: '通知人',
        actionCheckMen: '检查人',
        actionCheckMen1: '复查人',
        checkTime: '检查时间',
        livePicture: '现场照片',
        uploadPicture: '请选择上传',
        checkResult0: '无需整改',
        checkResult1: '待整改',
        checkResult2: '待复查',
        checkResult3: '合格',
        checkResult4: '不合格',
        warnLevel1: '一般',
        warnLevel2: '严重',
        warnLevel3: '紧要',
        checkStep: '检查部位',
        information: '说明',
        companyTitle: '选择分包企业',
        laborTeam: '劳务队伍',
        professionalCompany: '专业分包商',
        companyName: '企业名称',
        captainName: '队长姓名',
        captainMobile: '队长电话',
        captainID: '队长身份证',
        teamSize: '队伍规模',
        teamSource: '队伍来源',
        remark: '备注',
        category: '所属类别',
        mainQualificationsLevel: '主要资质等级',
        unifiedSocialCode: '统一社会代码',
        businessScope: '经营范围',
        legalRepresentative: '法定代表人',
        legalPersonNumber: '法人联系电话',
        registeredCapital: '注册资金',
        registeredAddress: '注册地',
        address: '地址',
        postCode: '邮编',
        safetyConstructionLicenseNo: '安全施工许可证号',
        licenseValidDate: '许可证有效日期',
        licenseOrganization: '许可证发证机关',
        // projectNamePlaceHolder:'请输入项目名称',
        startTime: '开始时间',
        endTime: '结束时间',
        addFormDatePicker: '选择时间',
        dropDownPlaceHolder: '全部',
        qualityQuestionKu: ['屋顶', '下水道'],
        dropDownCheckResult: ['无需整改', '待整改', '待复查', '合格', '不合格'],
        dropDownWarnLevel: ['一般', '严重', '紧要'],
        dropDownCheckType: ['检查类型1', '检查类型2', '检查类型3'],
        dangerTotal: '隐患数量',
        dangerProjectMan: '未销项隐患按责任分析',
        dangerProjectCompany: '未销项隐患按分包单位分析',
        safeDangerType: '安全隐患类型分析(近30天)',
        safeDangerAnalysis: '安全隐患分析(近30天)',
        warnQuestionMount: '紧要问题',
    },
    enum: {
        projects: ['数字中国-全称'],
        units: ['单位名称1'],
        laborSubcontractUnit: ['劳务分包单位1']
    }

}

export default messages