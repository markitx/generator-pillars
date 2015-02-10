var App = require('./appConfig');

// Controller
var Controller = require('./modules/<%= config.pluralName %>/controller');

// Router
var Router = require('./modules/<%= config.pluralName %>/router');

App.vent.bind("app:start", function(options) {

    App.Router = new Router({
        controller: new Controller({
            region: App.mainRegion
        })
    });

    Backbone.history.start({ pushState: true, root: '/<%= config.pluralName %>' });

    App.reqres.setHandler('app:router:get', function() {
        return App.Router;
    });

});