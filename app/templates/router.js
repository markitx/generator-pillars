
var Router = Marionette.AppRouter.extend({

  appRoutes: {
    "(/)": "listView",
    "(/):detailid": "detailView"
  }

});


module.exports = Router;