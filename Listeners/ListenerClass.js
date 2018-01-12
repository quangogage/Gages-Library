class listenerclass {
  constructor() {
    this.funcs = [];
  }
  executeFuncs() {
    for (var i = 0; i < this.funcs.length; i++) {
      this.funcs[i].apply(this, arguments);
    }
  }
}
module.exports = listenerclass;
