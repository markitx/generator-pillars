var App = require('./appConfig');

// Controller
var Controller = require('./modules/<%= config.pluralName %>/controller');

// Router
var Router = require('./modules/<%= config.pluralName %>/router');

App.vent.bind("app:start", function(options) {

    var controller = new Controller({
            region: App.mainRegion
        });

    App.Router = new Router({
        controller: controller
    });

    if(controller.breadcrumb) {
        App.breadcrumbRegion.show(controller.breadcrumb);
    }

    Backbone.history.start({ pushState: true, root: '/<%= config.pluralName %>' });

});