var Scroll = require('./Scroll');

class Listeners {
  constructor() {
    this.scroll = new Scroll();
  }

  load() {
    this.scroll.load();
  }

  add(func, listener) {
    this[listener].funcs.push(func);
  }
}

module.exports = Listeners;
