/*

Manages application menus.

*/

define([
	'app/App',
	'directory/App',
	'backbone',
	'marionette'
], function (app, dirApp, Backbone, Marionette) {

	/*
	Work in progress; for now the menu is hard-coded in
	the layout template.
	*/

	// var MenuCommand = Backbone.Model.extend({
	// 	menuTitle: ,
	//	hotkey: 
	// });

	// var MenuCommandView = Marionette.ItemView.extend({
	// 	model: MenuCommand,
	//	template: ,
	//	id: "menu" + this.model.get("menuTitle")
	// });

	// var Menu = Backbone.Collection.extend();

	// var MenuView = Marionette.CollectionView.extend({
	// 	itemView: MenuCommandView
	// });

	// var MenuSet = Backbone.Collection.extend();

	// var MenuSetView = new Marionette.CompositeView.extend({
	// 	comparator: function (menu) {
	// 		return menu.get("menuTitle");
	// 	},
	// 	addMenu: function (menu) {
	// 		this.add(menu);
	// 	}
	// });

	/*
	This part should probably be broken out into a
	separate controller.
	*/
	app.addInitializer(function () {

		app.commands.addHandler("showMenu", function (menu) {
			menu.toggleClass("app-menu-open");
		});

		app.commands.addHandler("closeAllMenus", function () {
			$(".app-menu").removeClass("app-menu-open");
		});

		// Show & hide the app menu
		$(".app-menu").click(function (e) {
			app.execute("showMenu", $(this));
			e.stopPropagation();
		});
		$(document).click(function () {
			app.execute("closeAllMenus");
		});

		/*
		TODO: when we have an API for registering menus/commands, move stuff
		like this to the appropriate controllers.
		*/

		// Add a new contact
		$("#new-contact").click(function (e) {
			dirApp.execute("newContact");
			e.stopPropagation();
		});

		// Show Tips & Tricks screen
		$("#show-tips").click(function (e) {
			app.execute("showTips");
			e.stopPropagation();
		});

		// Show Feedback screen
		$("#show-feedback").click(function (e) {
			app.execute("showFeedback");
			e.stopPropagation();
		});

		// Show About screen
		$("#show-about").click(function (e) {
			app.execute("showAbout");
			e.stopPropagation();
		});

		// $("#test-event").click(function (e) {
		// 	app.vent.trigger("TestEvent", "Test event fired from menu item.");
		// 	e.stopPropagation();
		// });

	});

});