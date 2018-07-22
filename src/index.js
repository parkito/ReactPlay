// Article_App
// import React from 'react'
// import {render} from 'react-dom'
// import App from './Article_App/components/App'
//
// render(<App/>, document.getElementById('root'));


// React_Beginner
import React from 'react';
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import App from './React_Begginer/component/App'
import StorePicker from './React_Begginer/component/StorePicker'
import NotFound from './React_Begginer/component/NotFound'

const Root = () => {
    return (
        <Router>
                <Switch>
                    <Route exact path='/' component={StorePicker}/>
                    <Route path="/store/:storeId" component={App}/>
                    <Route component={NotFound}/>
                </Switch>
        </Router>
    )
};

render(<Root/>, document.querySelector('#root'));
