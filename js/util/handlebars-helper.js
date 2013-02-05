/*

Helper utility for using Handlebars with RequireJS; also a handy place
to put Handlebars helper functions.

*/

define([
	// 'moment',
	'../lib/js/handlebars-1.0.rc.1'
], function(moment) {
	"use strict";

	// Template helper functions

	// Handlebars.registerHelper( 'absDate', function(date) {
	// 	return moment(date).format("MMMM D, YYYY");
	// });

	// Handlebars.registerHelper( 'absDateShort', function(date) {
	// 	return moment(date).format("M/D");
	// });

	// Handlebars.registerHelper( 'relDate', function(date) {
	// 	return moment(date).fromNow();
	// });

	Handlebars.registerHelper( 'separator', function() {
		return new Handlebars.SafeString('<span class="separator">|</span>');
	});
	
	return Handlebars;
});
