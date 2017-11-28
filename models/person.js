import {Mongo} from 'meteor/mongo';

const Persons = new Mongo.Collection('persons');

Persons.attachSchema(new SimpleSchema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    userId: {
        type: String,
    },
    date_birth: {
        type: Date,
    },
    gender: {
        type: String,
    },
    createdAt: {
        type: Date,
        autoValue() {
            if (this.isInsert) {
                return new Date();
            } else {
                this.unset();
            }
        },
    },

}));

Persons.helpers({
    getFullName() {
        return `${this.first_name} ${this.last_name}`;
    }
});

Persons.mutations({
    setUserId(userId) {
        return {$set: {userId: userId}};
    }
});

export default Persons;
