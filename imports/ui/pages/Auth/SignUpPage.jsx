import React, {Component} from 'react';
import {Accounts} from 'meteor/accounts-base';
import TextField from '@atlaskit/field-text';
import Btn from '@atlaskit/button';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import InlineMessage from '@atlaskit/inline-message';

class SignUpPage extends Component {

    constructor(props) {
        super(...props);

        this.state = {
            form: {
                username: '',
                email: '',
                password: ''
            },
            showMessages: false,
            messageForm: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderMessages = this.renderMessages.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChangeField(nameField) {
        let form = {...this.state.form};
        return (e) => {
            form[nameField] = e.target.value;
            this.setState({form});
        }
    }

    clearForm() {

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                email: '',
                username: '',
                password: ''
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();

        let {username, email, password} = this.state.form;

        Accounts.createUser({email: email, username: username, password: password}, (err) => {
            let messageForm = {};
            if (err) {
                console.log(err);
                messageForm = {
                    message: err.reason,
                    type: "error"
                };
            } else {
                messageForm = {
                    message: "Register Success",
                    type: "confirmation"
                };

                this.clearForm();
                setTimeout(() => {
                    //this.props.history.push('/signin');
                }, 500);

            }
            this.setState({messageForm: messageForm, showMessages: true});
        });
    }

    renderMessages() {
        return this.state.showMessages ? (
            <InlineMessage
                title={this.state.messageForm.message}
                type={this.state.messageForm.type}
            >
                <p>{this.state.messageForm.message}</p>
            </InlineMessage>
        ) : '';
    }

    render() {
        return (

            <Page>
                <Grid>
                    <GridColumn medium={4}/>
                    <GridColumn medium={4}>
                        <h2>Sign Up</h2>
                        <div>
                            {this.renderMessages()}
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
                    </GridColumn>
                    <GridColumn medium={4}/>
                </Grid>
            </Page>
        );
    }
}

export default SignUpPage;
