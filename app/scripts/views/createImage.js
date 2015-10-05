var images = require('models/image-board-collection')

var CreateImage = Backbone.View.extend({
  tagName: 'form',
  className: 'create-form',
  template: JST['create'],
  events: {
    'click .create-image':'hidden'
  },
  render: function(){
    this.$el.html(this.template());
    //console.log(this);
    return this;
  },
  hidden: function(){
    this.$('.create-div').toggleClass('hidden')
  },
  serialize: function(){
    var result = {};
    console.log(result);
    var input = this.$el.serializeArray();
    input.forEach(function(input){
        result[input.name] = input.value;
    });
    return result;
  }
});

module.exports = CreateImage;
