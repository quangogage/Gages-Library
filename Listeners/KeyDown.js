var ListenerClass = require('./ListenerClass');

class KeyDown extends ListenerClass {
  load() {
    window.addEventListener(
      'keydown',
      function(e) {
        var keyCode = e.target || e.which;
        this.executeFuncs(keyCode);
      }.bind(this)
    );
  }
}

module.exports = KeyDown;
