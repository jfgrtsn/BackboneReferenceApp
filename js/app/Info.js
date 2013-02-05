/*

Displays an info page.

*/

define([
	'marionette',
	'modkit',
	'app/App',
	'handlebars',
	'text!app/templates/Intro.html',
	'text!app/templates/Results.html',
	'text!app/templates/NoResults.html',
	'text!app/templates/About.html',
	'text!app/templates/Tips.html',
	'text!app/templates/Feedback.html'
], function (Marionette, ModKit, app, Handlebars, IntroTemplate,
	ResultsTemplate, NoResultsTemplate, AboutTemplate,
	TipsTemplate, FeedbackTemplate) {
    "use strict";

	app.addInitializer(function () {
		// Layout regions
		var regionHeader = app.container.currentView.header,
			regionMain = app.container.currentView.main,
			regionOverlay = app.container.currentView.overlay;
			
		// Controller for showing info views
		var infoController = new ModKit.Controller();

		// Show introduction message
		app.commands.addHandler("showIntroMsg", function () {
			infoController.show(
				regionHeader,
				new ModKit.HeaderView({
					id: "app-intro",
					template: Handlebars.compile(IntroTemplate)
				})
			);
		});

		// Show search results header message
		app.commands.addHandler("showResultsMsg", function () {
			infoController.show(
				regionHeader,
				new ModKit.HeaderView({
					id: "app-results",
					template: Handlebars.compile(ResultsTemplate)
				})
			);
		});

		// Show no search results message
		app.commands.addHandler("showNoResultsMsg", function () {
			infoController.show(
				regionHeader,
				new ModKit.HeaderView({
					id: "app-noResults",
					template: Handlebars.compile(NoResultsTemplate)
				})
			);
		});

		// Show info about this application
		app.commands.addHandler("showAbout", function () {
			infoController.show(
				regionOverlay,
				new ModKit.OverlayView({
					id: "app-about",
					template: Handlebars.compile(AboutTemplate)
				})
			);
		});

		// Show tips & tricks
		app.commands.addHandler("showTips", function () {
			infoController.show(
				regionOverlay,
				new ModKit.OverlayView({
					id: "app-about",
					template: Handlebars.compile(TipsTemplate)
				})
			);
		});

		// Show user how to send feedback
		app.commands.addHandler("showFeedback", function () {
			infoController.show(
				regionOverlay,
				new ModKit.OverlayView({
					id: "app-about",
					template: Handlebars.compile(FeedbackTemplate)
				})
			);
		});

	});

});
