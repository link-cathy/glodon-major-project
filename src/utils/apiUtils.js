import { message } from 'antd'
import _ from 'lodash'
import request from 'utils/request'

const generateApi = (baseUrl, services) => {
    const api = {}
    _.forEach(services, function(service) {
        api[service.id] = (params, urlParams) => {
            let url = baseUrl + service.url
            _.forEach(urlParams, (value, key) => {
                let reg = new RegExp('{' + key + '}', 'g')
                url = url.replace(reg, value)
            })
            let method = service.method
            return request[method.toLowerCase()](url, params, service.headers)
                .then((res) => {
                    if (res.response) {
                        if (res.response.error) {
                            message.error(res.response.message)
                        } else {
                            return res.response
                        }
                    } else if (res.error) {
                        message.error(res.error)
                    }
                })
        }
    })
    return api
}

export default generateApi