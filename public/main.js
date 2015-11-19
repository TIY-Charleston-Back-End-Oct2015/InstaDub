var $ = require('jquery');
var BeerCollection = require('./collection');
var BeersView = require('./collectionView');
var FormView = require('./formView');

$(function () {
  var beers = new BeerCollection();
  beers.fetch().then(function () {
    new BeersView({collection: beers});
  });
});
