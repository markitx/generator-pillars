var channel = Backbone.Wreqr.radio.channel('admin');

// Entities
var Model = require('../../entities/<%= config.moduleClass %>'),
    Collection = require('../../entities/<%= inf.pluralize(config.moduleClass) %>');

// Views
var LoaderView = require('../../components/loader'),
    BaseView = require('../../components/baseView'),
    ListView = require('./listView'),
    DetailView = require('./detailView');


var <%= config.moduleClass %>Controller = Marionette.Controller.extend({
    initialize: function(options) {
        this.region = options.region;
        this.data = {};
    },

    listView: function() {
        var collection;
        if(this.data.list) {
            collection = this.data.list;
        } else {
            collection = new Collection();
            this.data.list = collection;
        }

        var layout = this.layout = new BaseView({
            collection: collection,
            mainView: ListView
        });

        layout.fetching = true;
        
        collection.fetch({ cache: true, prefill: true });        
        this.region.show(this.layout);

    },

    detailView: function(detailID) {
        var collection = this.data.list;

        var model,
            isFetching = false; 
                       
        // if collection try to get detail info and fill model with it.
        if(collection) {
            model = collection.get(detailID);
        } else {
            model = new Model({ id: detailID });
            isFetching = true;          
        }

        var layout = this.layout = new BaseView({
            model: model,
            mainView: detailView
        });

        layout.fetching = isFetching;

        this.region.show(this.layout);
        model.fetch({ cache: true, prefill: true });
    }
});

module.exports = <%= config.moduleClass %>Controller;
