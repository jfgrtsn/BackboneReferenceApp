/*

Notification controller notifies the user when certain app-level events occur.

*/

define([
	'app/App',
	'modkit',
	'toastr'
], function (app, ModKit, toastr) {
	"use strict";

	toastr.options = {
		positionClass: 'toast-bottom-right',
		timeOut: 5000
	};

	var NotificationController = ModKit.Controller.extend({

		initialize: function (options) {

			// We can fire a test message from anywhere in the app to make sure
			// everything's wired up properly.
			app.vent.listenTo(app.vent,"TestEvent", function (message) {
				toastr.success(message, "Notification test successful.");
			});

			// Notify user when a contact is saved to the server successfully.
			app.vent.listenTo(app.vent,"contact:save:success", function (model) {
				var message = "Successfully saved contact \"" + model.get("FirstName") + " " +
						model.get("LastName") + "\".";
				toastr.success(message);
			});
			
			// Notify user when we fail to save a contact to the server.
			app.vent.listenTo(app.vent,"contact:save:error", function (model, errorText) {
				var message = "Failed to save contact \"" + model.get("FirstName") + " " +
						model.get("LastName") + "\". Server said: \"" + errorText + "\".";
				toastr.error(message);
				console.log(message);
			});

			// Notify user when a contact is deleted from the server successfully.
			app.vent.listenTo(app.vent,"contact:delete:success", function (model) {
				var message = "Successfully deleted contact \"" +
						model.get("FirstName") + " " + model.get("LastName") + "\".";
				toastr.success(message);
			});
			
			// Notify user when we fail to delete a contact from the server.
			app.vent.listenTo(app.vent,"contact:delete:error", function (model, errorText) {
				var message = "Failed to delete contact \"" + model.get("FirstName") + " " +
						model.get("LastName") + "\". Server said: \"" + errorText + "\".";
				toastr.error(message);
				console.log(message);
			});

			// app.vent.listenTo(app.vent,"quickFilter:results:no", function (term) {
			// 	var message = "No results for \"" + term + "\".";
			// 	// Log failed searches to improve service
			// 	// _gaq.push(['_trackEvent', 'category', 'action', 'label', 'val']);
			// 	toastr.warning(message);
			// });

			// app.vent.listenTo(app.vent,"quickFilter:results:yes", function (term) {
			// 	// Log successful searches for usage statistics (may want to fire
			// 	// this on searchbox blur instead of every keystroke).
			// 	// _gaq.push(['_trackEvent', 'category', 'action', 'label', 'val']);
			// 	toastr.success("Got it!");
			// });

		}

	});

	app.addInitializer(function () {
		var notificationController = new NotificationController();
	});

	return NotificationController;

});
