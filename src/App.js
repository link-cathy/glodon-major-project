/**
 * Created by yuanxh on 2018/7/3.
 */
import React, { Component } from 'react';
import Routes from './router';
import Header from './layout'
import { HashRouter } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <HashRouter>
                <div className="pocp-layout">
                    <Header />
                    <Routes/>
                </div>
            </HashRouter>
        )
    }
}
export default App;

