/**
 * Created by fancl on 2018/8/8.
 */
import servicesConfig from '../servicesConfig'
import generateApi from './apiUtils'

let baseUrl = servicesConfig.fileService

const services = [
    {
        id: 'fileUpload',
        url: '/fileUpload',
        method: 'post',
        headers: {
            'Content-Type': null,
        }
    },
]

const api = generateApi(baseUrl, services)

export default api