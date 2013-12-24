
App = Ember.Application.create();

var model = {
  name: "Jan Bobisud",
  description: "Developer of iOS, OS X and Ember.js apps.",
  email: "me@bobisjan.com",
  city: "Prague",
  profiles: [{
    title: "Master's Student",
    email: "bobisjan@fel.cvut.cz",
    url: "http://fel.cvut.cz",
    logo: "images/cvut.jpg",
    contact: "**Software Engineering**<br>Open Informatics<br>Faculty of Electrical Engineering<br>Czech Technical University in Prague"
  }, {
    title: "Junior Software Engineer",
    email: "jan.bobisud@capgemini.com",
    url: "http://cz.capgemini.com",
    logo: "images/capgemini.jpg",
    contact: "**Capgemini Czech Republic s.r.o.**<br>Evropska 2588/33a<br>160 00 Praha<br>Czech Republic"
  }],
  links: [{
    title: "GitHub",
    url: "https://github.com/bobisjan/"
  }, {
    title: "LinkedIn",
    url: "http://cz.linkedin.com/pub/jan-bobisud/76/802/273/"
  }]
};

Ember.Handlebars.helper('mail-to', function(value, options) {
  var escaped = Handlebars.Utils.escapeExpression(value);
  return new Handlebars.SafeString('<a href="mailto:' + escaped + '" class="btn btn-primary btn-xs">' + escaped + '</a>');
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('year', function() {
  var now = new Date();
  return now.getFullYear();
});

App.Router.map(function() {

});

App.ApplicationRoute = Em.Route.extend({
  model: function() {
    return model;
  }
});

App.IndexRoute = Em.Route.extend({
  model: function() {
    return model;
  }
});
