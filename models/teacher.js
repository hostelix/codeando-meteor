import {Class} from 'meteor/jagi:astronomy';
import {Person} from './person';
import {Teachers} from '../collections';

const Teacher = Class.create({
    name: 'Teacher',
    collection: Teachers,
    fields: {
        personId: {
            type: String
        },
    },
    helpers: {
        person() {
            return Person.findOne(this.personId);
        }
    }
});

export default Teacher;
