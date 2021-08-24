import { check } from 'meteor/check';
import { ValuesCollection } from './ValuesCollection';
 
Meteor.methods({
  'values.insert'(value) {
    check(value, String);
 
    ValuesCollection.insert({
      value,
      createdAt: new Date
    })
  },
 
});