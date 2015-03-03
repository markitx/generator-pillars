var channel = Backbone.Wreqr.radio.channel('admin');

var SearchView = require('../../components/search');

var SearchItem = Marionette.ItemView.extend({
    template: 'modules/<%= config.moduleName %>/search-item',
    tagName: 'li',

    events: {
        'click a': 'showDetail'
    },

    showDetail: function() {
        var router = channel.reqres.request('app:router:get');

        router.navigate('/' + this.model.get('<%= config.moduleName %>ID'), { trigger: true });        
    }
});


var <%= config.moduleClass %>Search = SearchView.extend({
    itemView: SearchItem,
    searchOptions: {
        distance: 10,
        keys: ["name", "status"]
    }
});

module.exports = <%= config.moduleClass %>Search;