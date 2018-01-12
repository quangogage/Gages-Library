class ListenerClass {
  constructor() {
    this.funcs = [];
  }
  executeFuncs() {
    for (var i = 0; i < this.funcs.length; i++) {
      this.funcs[i].apply(this, arguments);
    }
  }
}
export default ListenerClass;
