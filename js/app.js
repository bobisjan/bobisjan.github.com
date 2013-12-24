
App = Ember.Application.create();

App.Link = Em.Object.extend({
  title: null,
  url: null
});

App.Router.map(function() {

});

App.ApplicationRoute = Em.Route.extend({
  setupController: function(controller, model) {
    var links = [App.Link.create({
      title: "GitHub",
      url: "https://github.com/bobisjan/"
    }), App.Link.create({
      title: "LinkedIn",
      url: "http://cz.linkedin.com/pub/jan-bobisud/76/802/273/"
    })];
    
    controller.set('links', links);
  }
});

App.ApplicationController = Em.Controller.extend({
  links: []
});
