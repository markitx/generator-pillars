var channel = Backbone.Wreqr.radio.channel('<%= config.moduleName %>:detail');

var FormView = require('../../components/form'),
    EmptyView = require('../../components/emptyView'),
    LoadingView = require('../../components/loader');

var <%= config.moduleClass %>Detail = Marionette.LayoutView.extend({
    template: 'modules/<%= config.pluralName %>/<%= config.moduleName %>-detail',
    className: '<%= config.moduleName %>-detail',
    
    regions: {
    },

    initialize: function(options) {

    },

    onBeforeShow: function() {
    }

});

module.exports = <%= config.moduleClass %>Detail;
