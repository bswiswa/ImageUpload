import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

var imageStore = new FS.Store.GridFS("images");

export var Images = new FS.Collection("images", {
 stores: [imageStore]
});

if(Meteor.isServer) {
	Meteor.publish("images", function(){
		return Images.find(); 
	});
	Meteor.publish("users", function() {
		return Meteor.users.find({"_id": this.userId()
	});
	});	

}