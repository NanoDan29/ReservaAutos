import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthRouter from './auth';
import LandingRouter from './landing';
import AutosRouter from './autos';
import Private from './private';
import { useSelector } from 'react-redux'


const Routes = () => {
    const { loginState } = useSelector((info) => info.auth)
    console.log(loginState)
    return (
        <Router>
            <Switch>
                <Route
                    path="/auth"
                    render={AuthRouter}
                />

                <Private
                    auntenticar={loginState}
                    Component={AutosRouter}
                    path="/autos"
                />

                <Route
                    path="/"
                    render={LandingRouter}
                />
            </Switch>
        </Router>
    )
}


export default Routes;