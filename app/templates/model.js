
module.exports = Backbone.Model.extend({
    idAttribute: '<%= config.moduleName %>ID',
    urlRoot: '/api/<%= config.pluralName %>'
});
