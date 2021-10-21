import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Stormwind from './components/Stormwind/Stormwind';
import StartHere from './components/StartHere/StartHere';
import Darkmoon from './components/StartHere/Darkmoon';
import Characters from './components/Characters/Characters';
import Races from './components/Races/Races';
import Planes from './components/Planes/Planes';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={Stormwind} path='/updates' />
        <Route component={StartHere} path='/starthere' />
        <Route component={Darkmoon} path='/DarkmoonFaire' />
        <Route component={Races} path='/races' />
        <Route component={Characters} path='/characters' />
        <Route component={Planes} path='/planes' />
    </Switch>
)