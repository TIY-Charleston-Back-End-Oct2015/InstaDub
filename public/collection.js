var Backbone = require('backbone');
var BeerModel = require('./model');

module.exports = Backbone.Collection.extend({
  url: '/beers',
  model: BeerModel
});
