import { Mongo } from 'meteor/mongo';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Images } from '../imports/collections.js';


Images.allow({
	'insert': function () {
		return true;
	},

	'update': function () {
		return true;
	},

	'download': function () {
		return true;
	},

	'remove': function () {
		return true;
	}
});