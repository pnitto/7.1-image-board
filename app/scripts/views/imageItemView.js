var imageItemView = Backbone.View.extend({
  tagName: 'li',
  template: JST['image-item'],

  events: {
    'click .delete-btn': 'delete'
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  delete: function(){
    this.model.destroy();
  },

})

module.exports = imageItemView;
