var imageItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['image-item'],

  events: {
    'click .delete-btn': 'delete',
    'click .edit-btn' : 'edit'
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  delete: function(){
    this.model.destroy();
  },
  edit: function(){
    var image = this.$('.url').val();
    var caption = this.$('.caption').val();
    var imageview = new imageItemView({image: image, post: caption });
  }

});

module.exports = imageItemView;
