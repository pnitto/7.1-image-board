var ImageCollection = require('models/image-board-collection');
var ImageCollectionView = require('views/imageCollectionView');
var imageModel = require('models/image-board');
var CreateImage = require('views/createImage');

$(document).ready(function(){
  // prepend the contents of `app/templates/application.hbs` into `body`
  $('#container').append(JST.application());
  var images = new ImageCollection();

  var createImage = new CreateImage();
  $('#container').append(createImage.render().el)

  var ListImageView = new ImageCollectionView({collection: images});
  $("#image-container").html(ListImageView.render().el);


  images.fetch()


});
