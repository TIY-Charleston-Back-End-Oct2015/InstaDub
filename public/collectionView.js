var Backbone = require('backbone');
var Beers = require('./collection');
var _ = require('underscore');
var $ = require('jquery');
var BeerModelView = require('./modelView');
Backbone.$ = $;


module.exports = Backbone.View.extend({
  el: '#page',
  initialize: function () {
    this.addAll();
  },
  addOne: function (beerModel) {
    var beerView = new BeerModelView({model: beerModel});
    this.$el.append(beerView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
})
