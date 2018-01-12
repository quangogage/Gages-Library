var scroll = require('./Scroll');

class listeners {
  constructor() {
    this.scroll = new scroll();
  }

  load() {
    this.scroll.load();
  }

  add(func, listener) {
    this[listener].funcs.push(func);
  }
}

module.exports = listeners;
