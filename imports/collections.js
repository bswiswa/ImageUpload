var imageStore = new FS.Store.GridFS(“images”);

Images = new FS.Collection(“images”, {
 stores: [imageStore]
});

if(Meteor.isServer) {
	Meteor.publish("images", function(){ return Images.find(); });



}