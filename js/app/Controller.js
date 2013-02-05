/*

AppController

*/

define([

	// Application core
	'app/App',
	'app/Layout',
	'app/Info',

	// Modules
	'mods/Notification',
	'mods/Keyboard',
	'mods/Menus',
	'mods/ListSearch'

], function (app) {
	"use strict";

	var AppController = Marionette.Controller.extend({

		initialize: function (options) {

			// Layout regions
			var regionHeader = app.container.currentView.header,
				regionMain = app.container.currentView.main,
				regionOverlay = app.container.currentView.overlay;
			
			app.vent.listenTo(app.vent,"overlay:close", function () {
				regionOverlay.close();
			});

			// Hide the "loading" indicator when directory data have been loaded
			app.vent.listenTo(app.vent,"directory:data:loaded", function () {
				$("#app-loading").hide();
			});

			app.vent.listenTo(app.vent, "quickFilter:term:empty", function () {
				app.execute("showIntroMsg");
			});

			app.vent.listenTo(app.vent, "quickFilter:results:yes", function () {
				app.execute("showResultsMsg");
			});
				
			app.vent.listenTo(app.vent, "quickFilter:results:no", function () {
				app.execute("showNoResultsMsg");
			});
			
		}

	});

	// https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md#adding-initializers
	app.addInitializer(function () {
		var appController = new AppController();
	});
		
	return AppController;

});
