
var CreateImage = Backbone.View.extend({
  tagName: 'div',
  className: 'create-image',
  template: JST['create-item'],
  events: {
    'click .js-toggle-hidden':'hidden',
    'click .js-add-image': 'addImage',
    'click .js-cancel' : 'cancel',
  },
  render: function(){
    this.$el.html(this.template());
    //console.log(this);
    return this;
  },
  hidden: function(e){
  e.preventDefault();
  this.$('.content').toggleClass('hidden');
  this.$('.url').val('');
  this.$('.caption').val('');
  },
  cancel: function(){
  e.preventDefault();
  this.model.destroy();

  this.$('.content').toggleClass('hidden');
  },
  addImage: function(e){
    e.preventDefault();
    console.log(this.collection.create(this.serialize()))
  },
  serialize: function(){
    var result = {};
    var input = this.$('form').serializeArray();
    input.forEach(function(input){
    result[input.name] = input.value;
    });
    return result;
    }
});

module.exports = CreateImage;
