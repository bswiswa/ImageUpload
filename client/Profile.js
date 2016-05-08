import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../imports/collections.js';
import { Users } from '../imports/collections.js';
import './Profile.html';


Template.Profile.helpers({
  // profile: function(){
  //   return 0;
  // },

  find_users() {
      return Meteor.users.find({});
    }

});