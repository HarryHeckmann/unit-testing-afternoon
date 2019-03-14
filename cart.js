const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(obj) {
    this.cart.push(obj)
    this.total = this.total+obj.price
  },

  removeFromCart: function(id, price) {
    this.cart.splice(id,1)
    this.total = this.total-price
  },
  
  checkout: function() {
    this.cart.splice(0, this.cart.length)
    this.total = 0
  }
};