var ListenerClass = require('./ListenerClass');

class KeyDown extends ListenerClass {
  load() {
    window.addEventListener(
      'keydown',
      function(e) {
        console.log('you pressed ' + e.keyCode);
        this.executeFuncs(e.keyCode);
      }.bind(this)
    );
  }
}

module.exports = KeyDown;
