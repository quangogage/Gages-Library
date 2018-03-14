var Scroll = require('./Scroll');
var KeyDown = require('./KeyDown');

class Listeners {
  constructor() {
    this.scroll = new Scroll();
  }

  load() {
    this.scroll.load();
    this.keydown.load();
  }

  add(func, listener) {
    this[listener].funcs.push(func);
  }
}

module.exports = Listeners;
