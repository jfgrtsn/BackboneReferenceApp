/*

Initialization and workflow logic for Directory module.

Responsibilities:
- Directory list
- Quick-filter
- Enable editing (?)
- Add contact
- Edit contact
- Delete contact

*/

define([
	'modkit',
	'app/App',
	'directory/App',
	'directory/Directory',
	'directory/DirectoryView',
	'directory/AddContactController',
	'directory/EditContactController'
], function (ModKit, app, dirApp, directory, DirectoryView) {
	"use strict";

	var DirectoryController = ModKit.Controller.extend();

	/*
	Marionette.Application.addInitializer() injects initialization code into the Application
	(https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md#adding-initializers)
	*/
	app.addInitializer(function () {
		// Start Directory Application
		dirApp.start();
	});

	dirApp.addInitializer(function () {

		// Load data
		directory.fetch({
			orderby: 'LastName',
			success: function () {
				app.vent.trigger("directory:data:loaded");
			}
		});

		// Start Directory Controller
		var directoryController = new DirectoryController()
			.show(
				app.container.currentView.main,
				new DirectoryView({collection: directory})
			);

		// Listen for the user to type in the quick-filter box and filter
		// our collection accordingly
		dirApp.commands.addHandler("quickFilter", function (term) {
			directory.filter(term);
		});

	});

	return DirectoryController;

});
