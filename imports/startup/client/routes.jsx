import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import SignInPage from '../../ui/pages/SignInPage';
import SignUpPage from '../../ui/pages/SignUpPage';
import NotFoundPage from '../../ui/pages/NotFoundPage';

const browserHistory = createBrowserHistory();

export const AppRoutes = () => (
    <div>
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={SignInPage}/>
                <Route exact path="/signin" component={SignInPage}/>
                <Route exact path="/signup" component={SignUpPage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </Router>
    </div>
);
