import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../imports/collections.js';
import './main.html';



Template.upload.events({
   'change .myFileInput': function(event, template) {

      FS.Utility.eachFile(event, function(file) {

        Images.insert(file, function (err, fileObj) {

          if (err){
          	console.log('Failed to insert image to collection...');
             // handle error
          } else {
          	console.log('Booyah!');
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
            };
            
            Meteor.users.update(userId, {$set: imagesURL});
            console.log('attached image to user');
          }
        });
     });
   },
});

