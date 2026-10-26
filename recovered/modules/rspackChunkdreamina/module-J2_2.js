if (require.j == "wl4") var a = require("./module-id.js");
export class w extends (require.j == "wl4" ? a.w : null) {
  unshiftAndGetDisposableNode(e) {
    this.unshift(e);
    let _head = this._head;
    let r = false;
    return () => {
      if (!r) {
        r = true;
        super._remove(_head);
      }
    };
  }
  pushAndGetDisposableNode(e) {
    this.push(e);
    let _tail = this._tail;
    let r = false;
    return () => {
      if (!r) {
        r = true;
        super._remove(_tail);
      }
    };
  }
}
