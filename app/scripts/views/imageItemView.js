var imageItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['image-item'],

  events: {
    'click .delete-btn': 'delete',
    'click .edit-btn' : 'edit',
    'click .update-btn': 'update'
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  delete: function(){
    this.model.destroy();
  },
  edit: function(){
    $('.image').css('display','block');
    $('.edit-btn').hide();
    $('.update-btn').show();

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
  }

});

module.exports = imageItemView;
