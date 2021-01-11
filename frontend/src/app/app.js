import React from 'react';
import Routes from './router'
import Store from './store'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/js/fontawesome'

const App = () => <Provider store={Store}>
    <Routes />
</Provider>


export default App;