import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Cockpit from '../pages/cockpit';
import Process from '../pages/process';
import Labors from '../pages/labors';
import Quality from '../pages/quality'
import Safety from '../pages/safety'
import Surveillance from '../pages/surveillance'
import Cooperation from '../pages/cooperation'
import ConsolePane from '../ConsolePane'
// import config from './config'
const Routes = () => (
    <Switch>
        <Route exact path="/" render={() => <Redirect to="/cockpit" push />} />
        <Route exact path="/console" component={ConsolePane}/>
        <Route exact path="/cockpit" component={Cockpit}/>
        <Route exact path="/process" component={Process}/>
        <Route exact path="/labors" component={Labors}/>
        <Route exact path="/quality" component={Quality}/>
        <Route exact path="/safety" component={Safety}/>
        <Route exact path="/surveillance" component={Surveillance}/>
        <Route exact path="/cooperation" component={Cooperation}/>
    </Switch>
);

export default Routes;