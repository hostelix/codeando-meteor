import {Class} from 'meteor/jagi:astronomy';
import {Meteor} from 'meteor/meteor';
import {Persons} from '../collections';

const Person = Class.create({
    name: 'Person',
    collection: Persons,
    fields: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        userId: {
            type: String,
        },
        dateBirth: {
            type: Date,
        },
        gender: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: function () {
                return new Date();
            },
        },
    },
    helpers: {
        user() {
            return Meteor.users.findOne(this.userId);
        },
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    behaviors: ['timestamp']
});

export default Person;
