/**
 * @example
 *
 *  import Fetch,{$get} from 'utils/Fetch';

    let URLTypes = {
        Settings:{
            hostname:"/"
        }
    }
    Fetch.bind(URLTypes);

    Fetch.get();
    or:
    $get();

    参数说明：

    param {object}
        name,
        query:{}
        path:{},
        body:{},
        type:'json' 是否使用json传参,默认为null、不使用
 *
 */

import 'isomorphic-fetch'
import _ from 'lodash'

let ApiURL = {
    Settings: {
        hostname: '/'
    }
};
function parseUrl(data) {
    let { name, URLType, urlStr, path = {}, query = {}} = data;


    let url; let
        urls = [];
    name = name || URLType;
    url = ApiURL.Settings.hostname + (urlStr || (ApiURL.URL && ApiURL.URL[name]) || '');

    _.forEach(path, function(value, key) {
        url = url.replace(new RegExp('\{' + key + '\}', 'g'), value);
    })
    if (url.indexOf('?') === -1) {
        url += '?';
    }
    _.forEach(query, function(value, key) {
        urls.push(key + '=' + value);
    })
    url += urls.join('&');
    return url;
}
function options(data, method) {
    let { type = '', body } = data;


    let bodys = [];
    let config = {
        method: method,
        credentials: 'include'
    };
    if (type === 'json') {
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        }
        config.body = JSON.stringify(body);
    } else {
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if (body) {
            _.forEach(body, function(value, key) {
                bodys.push(key + '=' + value)
            })
        }
        config.body = bodys.join('&');
    }
    return config;
}

function load(data, type) {
    let url = parseUrl(data);
    let config = typeof type === 'string' ? options(data, type) : Object.assign({}, type, { credentials: 'include' });
    return fetch(url, config).then(response => response.json()).then(
        response => ({ response }),
        error => ({ error: error })
    )
}

function urls() {
    return ApiURL;
}


export function bind(obj) {
    ApiURL = obj;
}

export function $get(data, flag = {}) {
    return load(data, flag)
}

export function $post(data) {
    return load(data, 'POST')
}

export function $put(data) {
    return load(data, 'PUT')
}

export function $delete(data) {
    return load(data, 'DELETE')
}

export default {
    urls,
    bind,
    get: $get,
    post: $post,
    delete: $delete,
    put: $put
}