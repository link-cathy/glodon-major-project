import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducers from '@/reducers';
import loggerMiddleware from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('@/reducers', () => {
        const nextRootReducer = require('@/reducers/index');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;