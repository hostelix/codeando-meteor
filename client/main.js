/* JS go here */
import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '../imports/ui/views/App.jsx';

Meteor.startup(() => {
    render(<App/>, document.getElementById('app-root'));
});
