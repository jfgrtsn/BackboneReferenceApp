/*

DirectoryView renders and manages a Directory collection.

*/

define([
	'marionette',
	'app/App',
	'directory/App',
	'directory/ContactView'
], function (Marionette, app, dirApp, ContactView) {
    "use strict";

	var DirectoryView = Marionette.CollectionView.extend({
		tagName: "ul",
		id: "directory-list",
		itemView: ContactView
	});

	return DirectoryView;

});
