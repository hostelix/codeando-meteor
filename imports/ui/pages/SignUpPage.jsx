import React, {Component} from 'react';
import TextField from '@atlaskit/field-text';
import Btn from '@atlaskit/button';
import {Accounts} from 'meteor/accounts-base';

class SignUpPage extends Component {

    constructor(props) {
        super(...props);

        this.state = {
            form: {
                username: '',
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

        let {username, email, password} = this.state.form;

        Accounts.createUser({email: email, username: username, password: password}, (err) => {
            if (err) {
                console.log(err);
            } else {
                this.props.history.push('/signin');
            }
        });
    }

    render() {
        return (
            <div>
                <form>
                    <TextField label="Username" value={this.state.form.username}
                               onChange={this.handleChangeField("username")}/>

                    <TextField label="Email" value={this.state.form.email}
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

export default SignUpPage;
