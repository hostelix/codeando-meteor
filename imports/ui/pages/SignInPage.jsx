import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import TextField from '@atlaskit/field-text';
import Btn from '@atlaskit/button';

class SignInPage extends Component {

    constructor(props) {
        super(...props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeField(nameField) {
        let form = {...this.state.form};
        return (e) => {
            form[nameField] = e.target.value;
            this.setState({form});
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let {email, password} = this.state.form;

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                console.log(err);
            } else {
                this.props.history.push('/home');
            }
        });
    }

    render() {
        return (
            <div>
                <form>
                    <TextField label="Username or Email" value={this.state.form.email}
                               onChange={this.handleChangeField("email")}/>
                    <TextField label="Password" type="password" value={this.state.form.password}
                               onChange={this.handleChangeField("password")}/>
                    <br/>
                    <Btn appearance="primary" onClick={this.handleSubmit}>Sign In</Btn>
                </form>
            </div>
        );
    }
}

export default SignInPage;
