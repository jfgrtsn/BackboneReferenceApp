/*

ModKit is a library for building plug-in modules for web apps.

*/

define([
	'app/App',
	'marionette',
	'handlebars'
], function (app, Marionette, Handlebars) {
	"use strict";

	var ModKit = {};

	/*
	Base Header view type. Not inteneded to be instantiated directly,
	but extended by a module-specific view.
	*/
	ModKit.HeaderView = Marionette.ItemView.extend({
		tagName: "div",
		className: "app-section",
		template: Handlebars.compile("<p>This module needs a template!</p>"),
		onRender: function () {
			app.execute("closeAllMenus");
		}
	});

	ModKit.HeaderView.extend = Marionette.extend;

	/*
	Base Overlay view type. Not inteneded to be instantiated directly,
	but extended by a module-specific view.
	*/
	ModKit.OverlayView = Marionette.ItemView.extend({
		tagName: "div",
		className: "app-section",
		template: Handlebars.compile("<p>This module needs a template!</p>"),
		events: {
			"click .close": "closeView"
		},
		closeView: function (e) {
			e.preventDefault();
			e.stopPropagation();
			this.close();
		},
		onRender: function () {
			app.execute("closeAllMenus");
		},
		onClose: function () {
			app.vent.trigger("overlay:close");
		}
	});

	ModKit.OverlayView.extend = Marionette.extend;

	/*
	Base Module controller type. Not intended to be instantiated directly,
	but extended by a module-specific controller.
	*/
	ModKit.Controller = Marionette.Controller.extend({
		show: function (region, view) {
			app.execute("closeAllMenus");
			region.show(view);
		}
	});

	ModKit.Controller.extend = Marionette.extend;

	return ModKit;
	
});
