import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import {Login,Registro} from '../components/auth'

const auth = () => {
    return ( 
        <Switch>
        <Route exact path='/auth/login' component={Login}/>
        <Route exact path='/auth/registro' component={Registro}/>

        </Switch>
     );
}
 
export default auth;