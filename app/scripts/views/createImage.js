var ImageCollection = require('models/image-board-collection');

var CreateImage = Backbone.View.extend({
  tagName: 'form',
  className: 'create-form',
  template: JST['create-item'],
  events: {
    'click .js-toggle-hidden':'hidden',
    'click .js-add-image': 'addImage'
  },
  render: function(){
    this.$el.html(this.template());
    //console.log(this);
    return this;
  },
  hidden: function(){
  this.$('.create-form').toggleClass('.hidden');
  },
  addImage: function(e){
    e.preventDefault();
    var collection = new ImageCollection();
    collection.create(this.serialize());
  },
  serialize: function(){
    var result = {};
    var input = this.$el.serializeArray();
    input.forEach(function(input){
    result[input.name] = input.value;
    });
    return result;
    }
});

module.exports = CreateImage;
