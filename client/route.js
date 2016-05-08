Router.route('/profile',{
 waitOn: function () {
 return Meteor.subscribe('images')
 },
 action: function () {
 if (this.ready())
 this.render('Profile');
 else
 this.render('Loading');
 }
});

Router.route('/', function () {
	this.render('upload');
});

// Router.route('/', function () {
// 	this.render('Profile');
// });