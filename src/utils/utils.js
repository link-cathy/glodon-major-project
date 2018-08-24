import _ from 'lodash'
import servicesConfig from '@/servicesConfig'

const ACCESS_TOKEN = 'accessToken'

// 设置cookie
function setCookie(name, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
}

// 获取cookie
function getCookie(name) {
    let reg = RegExp(name + '=([^;]+)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return '';
    }
}

// 删除cookie
function delCookie(name) {
    setCookie(name, null, -1);
}

// 是否需要登录
function isLoginRequired() {
    let flag = getQueryString('apiflag');
    let tms = 99;
    if (flag) {
        let tsp1 = _.parseInt(flag);
        let tsp2 = new Date().getTime();
        tms = _.parseInt(tsp2 - tsp1) / 1000;
    }

    return (tms > 15) ? true : false;
}

function gotoLogin() {
    let url = window.location.href;
    window.location.href = servicesConfig.loginService + '?url=' + url;
}

function getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 设置accessToken
function setAccessToken(token) {
    setCookie(ACCESS_TOKEN, token)
}

// 获得accessToken
function getAccessToken() {
    return getCookie(ACCESS_TOKEN)
}

// 生成uuid
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function guid() {
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}
function pageShowTotal(total) {
    let pageNum = Math.ceil(total / 10);
    return `共 ${pageNum}页/共 ${total}条`;
}

const RegexpCommon = {
    idNumRegexp: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    mobileRegexp: /^((\+)?86|((\+)?86)?)0?1[3456789]\d{9}$/,
    postCodeRegexp: /^[0-9]{6}$/
}

export default {
    setCookie,
    getCookie,
    delCookie,
    isLoginRequired,
    setAccessToken,
    getAccessToken,
    guid,
    gotoLogin,
    pageShowTotal,
    RegexpCommon
}