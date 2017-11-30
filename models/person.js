import {Class} from 'meteor/jagi:astronomy';
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
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
});

export default Person;
