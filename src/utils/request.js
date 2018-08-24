import 'isomorphic-fetch'
import _ from 'lodash'
// import utils from 'utils/utils'

const baseHeaders =  {
    'PCOP-TENANTID': 1,
    'PCOP-USERID': 1,
}

const getHeaders = (headers) => {
    let _headers = {
        ...baseHeaders,
        ...headers
    }

    _.forEach(_headers, (value, key) => {
        if (!value) delete _headers[key]
    })

    return _headers
}

function doFetch(url, method, body, headers, return_type) {

    return fetch(url, {
        method: method,
        credentials: 'include',
        headers: getHeaders(headers),
        body: body
    })
        .then(response => {
            if (return_type === 'json') {
                return response.json();
            } else if (return_type === 'text') {
                return response.text();
            } else if (return_type === 'blob') {
                return response.blob();
            } else if (return_type === 'formData') {
                return response.formData();
            } else if (return_type === 'arrayBuffer') {
                return response.arrayBuffer();
            } else {
                return response.json();
            }
        })
        .then(
            response => ({ response }),
            error => {
                console.log(error.message)
                return { error }
            }
        )
}

export function $get(url, paramsData, headers) {
    let body = _.map(paramsData, (value, key) => {
        return key + '=' + value
    }).join('&')
    let getUrl = url
    if (body) {
        getUrl += '?' + body
    }
    return doFetch(getUrl, 'GET', null, headers)
}

export function $post(url, paramsData, headers) {
    let _headers = {
        'Content-Type': 'application/json',
        ...headers
    }
    let body = paramsData
    if (_headers['Content-Type'] === 'application/json') {
        body = JSON.stringify(paramsData)
    }
    return doFetch(url, 'POST', body, _headers)
}

export function $put(url, paramsData, headers) {
    let _headers = {
        'Content-Type': 'application/json',
        ...headers
    }
    let body = paramsData
    if (_headers['Content-Type'] === 'application/json') {
        body = JSON.stringify(paramsData)
    }
    return doFetch(url, 'PUT', body, _headers)
}

export function $delete(url, paramsData) {
    let body = _.map(paramsData, (value, key) => {
        return key + '=' + value
    }).join('&')
    let getUrl = url
    if (body) {
        getUrl += '?' + body
    }
    return doFetch(getUrl, 'DELETE')
}

export default {
    get: $get,
    post: $post,
    delete: $delete,
    put: $put
}