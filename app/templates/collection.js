
var <%= config.moduleClass %> = require('./<%= config.moduleClass %>');

var <%= inf.pluralize(config.moduleClass) %> = Backbone.Collection.extend({
    model: <%= config.moduleClass %>,

    url: '/api/<%= config.pluralName %>'
});

module.exports = <%= inf.pluralize(config.moduleClass) %>;


