var Imageboard = Backbone.Model.extend({
    idAttribute: '_id',
  defaults: function(){
    return {
      image: "",
      post: "",
    };
  }
});


module.exports = Imageboard;
