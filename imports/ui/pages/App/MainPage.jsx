import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import React, {Component} from 'react';
import {withHistory} from 'react-router-dom';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.logout = this.logout.bind(this);
    }

    isAuthenticated() {
        return Meteor.userId() !== null;
    }

    componentWillMount() {
        if (!this.isAuthenticated()) {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.isAuthenticated()) {
            this.props.history.push('/login');
        }
    }

    logout(e) {
        e.preventDefault();
        Meteor.logout((err) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Auth App</a>
                        </div>
                        <div className="navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#" onClick={this.logout}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user()
    }
})(MainPage)
