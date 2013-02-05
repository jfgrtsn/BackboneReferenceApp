/*

Manages application-wide keyboard shortcuts.

*/

require([
	'app/App',
	'directory/App',
	'mousetrap'
], function (app, dirApp) {
    'use strict';

    Mousetrap.bind('esc', function (e) {
    	app.vent.trigger('overlay:close');
    	app.execute("closeAllMenus");
    });

    Mousetrap.bind('/', function (e) {
    	$('#list-search').focus();
    	return false;
    });

    Mousetrap.bind(['M','m'], function (e) {
    	app.execute('showMenu', $('#quick-menu'));
    	return false;
    });

    Mousetrap.bind('?', function (e) {
    	app.execute('showTips');
    	return false;
    });

    Mousetrap.bind(['N','n'], function (e) {
		dirApp.execute('newContact');
		return false;
    });

});
