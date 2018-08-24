import React from 'react'
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store'
import utils from 'utils/utils'
import './styles/index.less'

if (module.hot) {
    module.hot.accept()
}
if (utils.isLoginRequired()) {
    utils.gotoLogin()
} else {
    ReactDom.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('app')
    )
}
