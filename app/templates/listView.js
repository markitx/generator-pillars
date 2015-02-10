var channel = Backbone.Wreqr.radio.channel('<%= config.moduleName %>:detail');

var FormView = require('../../components/form'),
    EmptyView = require('../../components/emptyView'),
    LoadingView = require('../../components/loader');

var <%= config.moduleClass %>List = Marionette.LayoutView.extend({
    template: 'modules/<%= config.pluralName %>/<%= config.moduleName %>-list',
    className: '<%= config.moduleName %>-list',
    
    regions: {
    },

    initialize: function(options) {
        
    },

    onBeforeShow: function() {
    }

});

module.exports = <%= config.moduleClass %>List;
