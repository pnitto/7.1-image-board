var ListItemView = require('views/imageCollectionView');

var imageItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['image-item'],

  events: {
    'click .delete-btn': 'delete',
    'click .edit-btn' : 'edit',
    'click .update-btn': 'update',
    'click .cancel-btn': 'cancel'
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  delete: function(){
    this.model.destroy();
  },
  edit: function(){
    this.$('.image').css('display','block');
    this.$('.edit-btn').hide();
    this.$('.delete-btn').hide();
    this.$('.update-btn').show();
    this.$('.cancel-btn').show();

    var image = this.$('.image').html();
    var post = this.$('.post').html();
    this.$('.image').html('<input type="text" class="image-update" value="' + image + '">');
    this.$('.post').html('<input type="text" class="post-update" value="' + post + '">');
  },
  update: function(){
    this.model.set('image', $('.image-update').val());
    this.model.set('post', $('.post-update').val());
    this.model.save()
    return this;
  },
  cancel: function(){
    ListItemView.render();
  }

});

module.exports = imageItemView;
