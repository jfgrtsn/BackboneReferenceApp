/*

Directory is a collection of Contacts.

We return a concrete directory object instead of an abstract Directory class,
making this effectively a Singleton. (I suspect it's not that easy--I might
have to override the constructor to guarantee singularity.)

*/

define([
	'app/App',
	'directory/App',
	'backbone-sharepoint',
	'directory/Contact'
], function (app, dirApp, bs, Contact) {
	"use strict";

	var Directory = Backbone.SP.List.extend({

		model: Contact,

		// Maintain sort order
		comparator: function (contact) {
			return contact.get("LastName") + " " + contact.get("FirstName");
		}

	});

	/*
	Decorator to make a collection filterable, adapted from Derick Bailey
	(http://jsfiddle.net/derickbailey/7tvzF/).
	*/
	var Filterable = function (original) {

	    var filterable = new original.constructor();
	    
	    // Allow this object to have its own events
	    filterable._callbacks = {};

	    filterable._currentCriteria = "";

	    // Apply filter criteria to the original function so filtering
	    // will happen from the complete collection
	    filterable.filter = function (term) {
	        var items;
	        
	        // Search; if we don't have a search term, just get all the models.
	        if (term) {
				term = term.toLowerCase();
				var tokens = term.replace(/^\s+|\s+$/g,'').split(/\b\s+/);
				var items = original.filter(function (item) {
					return (
						(item.get("FirstName").toLowerCase().indexOf(term) > -1) ||
						(item.get("LastName").toLowerCase().indexOf(term) > -1)  ||
						(item.get("JobTitle").toLowerCase().indexOf(term) > -1)
					);
				});

				app.vent.trigger("overlay:close");

				if (items.length == 0) {
					app.vent.trigger("quickFilter:results:no", term);
				} else {
					app.vent.trigger("quickFilter:results:yes", term);
				}

	        } else {
	            // var items = original.models;
	            var items = [];
	            app.vent.trigger("quickFilter:term:empty");
	        }
	        
	        // Store current criteria and reset the filterable collection
	        // with the new items
	        this._currentCriteria = term;
	        this.resetFilter(items);
	    };

	    // Preserve a special version of add() for use by resetFilter(), before we
	    // redefine add() to operate on the original collection.
	    filterable._add = filterable.add;
	    filterable.resetFilter = function(models, options) {
			options || (options = {});
			if (options.parse) models = this.parse(models, options);
			for (var i = 0, l = this.models.length; i < l; i++) {
			this._removeReference(this.models[i]);
			}
			options.previousModels = this.models.slice();
			this._reset();
			if (models) this._add(models, _.extend({silent: true}, options));
			if (!options.silent) this.trigger('reset', this, options);
			return this;
		};

		// Some functions need to operate on the original list

		/*
		I'm sure there's some fancy way to do this, like maybe...

			var methods = ['sync', 'add', 'remove', etc.]
			_.each(methods, function (method) {
				// Do something tricky here
			});

		I might try to figure that out someday.
		*/

	    filterable.sync = function () {
	    	original.sync();
	    };

	    filterable.add = function (models, options) {
	    	original.add(models, options);
	    };

	    filterable.remove = function (models, options) {
	    	original.remove(models, options);
	    };

	    filterable.push = function (model, options) {
	    	original.push(model, options);
	    };

	    filterable.pop = function (options) {
	    	original.pop(options);
	    };

	    filterable.unshift = function (model, options) {
	    	original.unshift(model, options);
	    };

	    filterable.reset = function (models, options) {
	    	original.reset(models, options);
	    };

	    filterable.fetch = function (options) {
	    	original.fetch(options);
	    };

	    filterable.update = function (models, options) {
	    	original.update(models, options);
	    };

	    filterable.create = function (model, options) {
	    	original.create(model, options);
	    };

	    // When the original collection changes, the filterable collection will
		// re-filter itself and end up with the new filterable result set.
	    original.on("all", function () {
	        filterable.filter(filterable._currentCriteria);
	    });

	    return filterable;
	};

	return Filterable(new Directory());

});
