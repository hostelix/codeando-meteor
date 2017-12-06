import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import TextField from '@atlaskit/field-text';
import Btn from '@atlaskit/button';
import Page, {Grid, GridColumn} from '@atlaskit/page';
import InlineMessage from '@atlaskit/inline-message';

class SignInPage extends Component {

    constructor(props) {
        super(...props);

        this.state = {
            form: {
                email: '',
                password: ''
            },
            showMessages: false,
            messageForm: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderMessages = this.renderMessages.bind(this);
    }

    componentWillMount() {
        /*if (Meteor.userId() !== undefined) {
            this.props.history.push('/');
        }*/
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
        const {email, password} = this.state.form;
        Meteor.loginWithPassword(email, password, (err) => {

            let data = {messageForm: {}, showMessages: false};

            if (err) {
                console.log(err);
                data.messageForm = {
                    message: err.reason,
                    type: "error"
                };
                data.showMessages = true;
            } else {
                setTimeout(() => {
                    this.props.history.push('/');
                    data.showMessages = false;
                }, 500);
            }
            this.setState(data);
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
                        <h2>Sign In</h2>
                        <div>
                            {this.renderMessages()}
                            <form>
                                <TextField label="Username or Email" value={this.state.form.email}
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

export default SignInPage;
