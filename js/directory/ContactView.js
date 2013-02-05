/*

View of an individual contact.

*/

define([
	'marionette',
	'app/App',
	'directory/App',
	'directory/Contact',
	'handlebars',
	'text!directory/templates/ListContact.html'
], function (Marionette, app, dirApp, Contact, Handlebars, ContactTemplate) {
    "use strict";

	// **ContactView** handles an individual **Contact**
	var ContactView = Backbone.Marionette.ItemView.extend({

		tagName: "li",
		className: "contact list-item container",
		template: Handlebars.compile(ContactTemplate),

		events: {
			"click .result-icon": "editContact"
		},

		editContact: function () {
			dirApp.execute("editContact", this.model);
		}

	});

	return ContactView;

});