var CreateImageView = require('views/imageItemView')

var imageCollectionView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
  },
  render: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(model){
      var view = new CreateImageView({model:model});
      self.$el.append(view.render().el);
    });
    return this;
  }
});

module.exports = imageCollectionView;
