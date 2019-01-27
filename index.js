import React from 'react';
import { render } from 'react-dom';
import Route_1 from './Route_1';
import Route_2 from './Route_2';
import Route_3 from './Route_3';
import Master from './master';
import {Router, Route, browserHistory} from 'react-router';

render((
        <Router history = {browserHistory}>
            <Route path='/' component={Master} >
				<Route path='route_1' component={Route_1}/>
				<Route path='route_2' component={Route_2}/>
				<Route path='route_3' component={Route_3}/>
			</Route>
        </Router>

), document.getElementById('app'))

