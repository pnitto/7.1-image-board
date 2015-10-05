var Imageboard = Backbone.Model.extend({
    idAttribue: '_id',
  defaults: function(){
    return {
      image: "",
      post: "",
    };
  }
});


module.exports = Imageboard;
