// Initialize and kick off the Backbone.js application
require([

	// Application core
	'app/App',
	'app/Controller',

	// Directory sub-application
	'directory/Controller'

], function (app) {
	"use strict";
	app.start();
});

// RequireJS configuration
requirejs.config({
	paths: {
		'jquery': '../lib/js/jquery-1.9.1.min',
		'underscore': '../lib/js/underscore-1.4.3.min',
		'backbone': '../lib/js/backbone-0.9.10.min',
		'backbone-sharepoint': '../lib/js/backbone-sharepoint.odata',
		'marionette': '../lib/js/backbone.marionette.v1.0.0-rc3.min',
		'modkit': 'util/ModKit',
		'handlebars': 'util/handlebars-helper',
		'text': '../lib/js/text-2.0.3',
		// 'moment': '../lib/js/moment.min',
		'toastr': '../lib/js/toastr-1.1.2.min',
		'mousetrap': '../lib/js/mousetrap-1.2.2.min'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'backbone-sharepoint': {
			deps: ['backbone']
		},
		'marionette': {
			deps: ['backbone'],
			exports: 'Backbone.Marionette'
		},
		'toastr': {
			deps: ['jquery'],
			exports: 'toastr'
		}
	}
});
