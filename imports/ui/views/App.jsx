import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

class App extends Component {

    constructor(props) {
        super(...props);
        this.state = {};
    }

    render() {
        return (
            <div>Codeando Meteor</div>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user()
    }
})(App)
