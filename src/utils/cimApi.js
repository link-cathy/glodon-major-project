import servicesConfig from '../servicesConfig'
import generateApi from './apiUtils'

let baseUrl = servicesConfig.cimService

const services = [
    {
        id: 'universalGetData',
        url: '/queryInstance',
        method: 'post'
    },
    {
        id: 'universalUpdteData',
        url: '/instance/{instanceID}',
        method: 'put'
    },
    {
        id: 'universalAddData',
        url: '/importManually',
        method: 'post'
    },
    {
        id: 'universalDeleteData',
        url: '/instance/{instanceID}',
        method: 'delete'
    },
    {
        id: 'getManagerAttenceCycle',
        url: '/projectStatistics/{projectId}',
        method: 'get'
    },
    {
        id: 'getManagerAttenceCycleStatic',
        url: '/projectWorkerDetail/{projectId}',
        method: 'get'
    },
    {
        id: 'getProjectWorkers',
        url: '/projectWorkers/{projectId}',
        method: 'get'
    },
    {
        id: 'getTeamWorkers',
        url: '/teamWorkers/{projectId}',
        method: 'get'
    },
    {
        id: 'getWorkTypeWorkers',
        url: '/workTypeWorkers/{projectId}',
        method: 'get'
    }

]

const api = generateApi(baseUrl, services)


export default api