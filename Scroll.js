import ListenerClass from './ListenerClass';

class Scroll extends ListenerClass {
  load() {
    window.addEventListener(
      'scroll',
      function(e) {
        this.executeFuncs(window.scrollY);
      }.bind(this)
    );
  }
}

export default Scroll;
