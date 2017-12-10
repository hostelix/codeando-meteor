import React, {Component} from 'react';
import {Redirect} from 'react-router';
import EmptyState from '@atlaskit/empty-state';
import Button from '@atlaskit/button';

const buttonReturnHome = (
    <Button
        appearance="primary"
        onClick={() => window.location.href = '/'}
    >
        Go to Home
    </Button>
);

class Page404 extends Component {
    constructor(props) {
        super(...props);

        this.data = {
            header: '404',
            description: 'Page Not Found',
            imageUrl: 'https://i.blogs.es/790e04/error-1349562_960_720/450_1000.png',
            primaryAction: buttonReturnHome
        }
    }

    render() {
        return (
            <EmptyState {...this.data}/>
        );
    }
}

export default Page404;
