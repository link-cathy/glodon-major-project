import messagesZh from 'nls/zh/messages'

let nlsMessages = {
    'zh': messagesZh
}

let lang = navigator.language || navigator.userLanguage;// 常规浏览器语言和IE浏览器
lang = lang.toLocaleLowerCase()
let preLang = lang.substr(0, 2)

let messages = nlsMessages[lang] || nlsMessages[preLang] || nlsMessages['zh']

export default messages