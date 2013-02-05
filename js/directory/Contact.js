/*

This is our main model: a SharePoint contact.

It would be *super*-cool if this is the only class in the whole application
that needs to have any knowledge of the schema hard-coded. I don't know if
that's achievable, but it would be a big win for maintainability. We might
be able to use something like the "schema" property used by Backbone-Forms.

*/

define([
	'app/App',
	'directory/App',
	'backbone-sharepoint'
], function (app, dirApp, bs) {
	"use strict";

	// **Contact** Model - inherits its attributes from the SharePoint list
	return Backbone.SP.Item.extend({
		// https://github.com/lstak/Backbone.SharePoint
		site: '/Apps',
		list: 'EmployeeDirectory'
	});

});
