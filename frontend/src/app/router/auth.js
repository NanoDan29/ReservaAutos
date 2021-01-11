import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import { Login,Register } from '../components/auth'
import '../styles/components/auth.css'

const AuthRouter = () => {
    return (
        <Switch>
            <Route
                path="/auth/login"
                exact={true}
                component={ Login }
            />

            <Route
                path="/auth/register"
                exact={true}
                component={ Register }
            />

            <Redirect to="/auth/login"/>
        </Switch>
    )
}

export default AuthRouter;