/*

App is the heart of the application--it instantiates and manages models,
collections, views, controllers, layouts, etc.

*/

define(['marionette'], function (Marionette) {
	"use strict";
    
	var app = new Marionette.Application();
	app.addRegions({
		container: '#app-container'
	});
	return app;

});
