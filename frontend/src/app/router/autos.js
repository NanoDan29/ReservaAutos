import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import { Page1,Page2 } from '../components/autos';
import { NotFound } from '../components/mistakes';

const AutosRouter = () => {
    return (
        <Switch>
            <Route 
                path="/autos/page1"
                exact={ true }
                component={ Page1 }
            />
            <Route 
                paqth="/autos/page2"
                exact={ true }
                component={ Page2 }
            />

            <Route 
                path="/autos/notfound"
                exact={ true }
                component={ NotFound }
            />

            
            <Redirect to="notfound"/>
        </Switch>
    )
}

export default AutosRouter;
