/*

Main application layout.

*/

define([
	'app/App',
	'text!app/templates/Layout.html'
], function (app, LayoutTemplate) {
    "use strict";

	var MainRegion = Marionette.Region.extend({
		initialize: function () {
			var that = this;
			app.vent.listenTo(app.vent,"overlay:show", function () {
				if (that.$el) that.$el.hide();
			});
			app.vent.listenTo(app.vent,"overlay:close", function () {
				if (that.$el) that.$el.show();
			});
		}
	});

	var OverlayRegion = Marionette.Region.extend({
		onShow: function () {
			app.vent.trigger("overlay:show");
		},
		onClose: function () {
			app.vent.trigger("overlay:close");
		}
	});

	app.addInitializer(function () {
		var Layout = Marionette.Layout.extend({
			template: LayoutTemplate,
			regions: {
				header: {
					selector: "#app-header",
					regionType: MainRegion
				},
				main: {
					selector: "#app-main",
					regionType: MainRegion
				},
				overlay: {
					selector: "#app-overlay",
					regionType: OverlayRegion
				}
			}
		});

		var layout = new Layout();
		app.container.show(layout);

	});

});






		// View transitions (https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md#set-how-views-el-is-attached).
		// We render the initial layout first, so it appears to load faster;
		// subsequent views slide down into place.
		// Marionette.Region.prototype.open = function (view) {
		// 	this.$el.hide();
		// 	this.$el.html(view.el);
		// 	this.$el.slideDown("fast");
		// };
