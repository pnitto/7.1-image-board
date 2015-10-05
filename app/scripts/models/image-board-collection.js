var imageBoard = require('models/image-board');

var ImageCollection = Backbone.Collection.extend({
  model: imageBoard,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/images"

})

module.exports = ImageCollection;
