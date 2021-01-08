import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Login from '../components/auth/Loging'
import Registro from '../components/auth/Registro'

const Auth = () => {
    return ( 
        <Switch>
        <Route exact path='/auth/login' component={Login}/>
        <Route exact path='/auth/registro' component={Registro}/>

        </Switch>
     );
}
 
export default Auth;