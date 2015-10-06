var CreateImageView = require('views/imageItemView')

var imageCollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'image-list',


  initialize: function(){
    var self = this;
    this.listenTo(this.collection, 'add remove', this.render);
    this.listenTo(this.collection, 'change', function(){
      setTimeout(function(){
        self.render();
      },30);
    },this);
  },
  render: function(){
    var self = this;
    //console.log(this);
    this.$el.html('');
    this.collection.each(function(model){
      var view = new CreateImageView({model:model});
      self.$el.append(view.render().el);
    });
    return this;
  }
});

module.exports = imageCollectionView;
