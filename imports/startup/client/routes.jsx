import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import SignInPage from '../../ui/pages/Auth/SignInPage';
import SignUpPage from '../../ui/pages/Auth/SignUpPage';
import NotFoundPage from '../../ui/pages/HttpError/NotFoundPage';
import MainPage from '../../ui/pages/App/MainPage';

const browserHistory = createBrowserHistory();

export const AppRoutes = () => (
    <div>
        <Router history={browserHistory}>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/login" component={SignInPage}/>
                <Route exact path="/register" component={SignUpPage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </Router>
    </div>
);
