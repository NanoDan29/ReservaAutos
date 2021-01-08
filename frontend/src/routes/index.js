import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Auth from './auth'
import Landing from './Landing'

import React from 'react';

const Index = () => {
    return (<Router>
        <Switch>
         
            <Route path='/' component={Landing}/>
            <Route path='/auth'component={Auth}/>
            <Route path='/autos'/>
            <Route path='/404'/>            
        </Switch>

    </Router>);
}

export default Index;