var listenerclass = require('./ListenerClass');

class scroll extends listenerclass {
  load() {
    window.addEventListener(
      'scroll',
      function(e) {
        this.executeFuncs(window.scrollY);
      }.bind(this)
    );
  }
}

module.exports = scroll;
