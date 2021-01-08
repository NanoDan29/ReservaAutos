import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Home from '../components/landing/home'
import Nav from '../components/landing/Nav'

const Landing = () => {
    return (
        <Switch>
            <Nav />
            <Route exact path='/home' component={Home} />
            {/* <Route exact path='/' component={Registro}/> */}

        </Switch>
    );
}

export default Landing;