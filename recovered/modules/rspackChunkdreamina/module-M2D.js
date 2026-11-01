import r from "yJ";
import n from "QaK";
import a from "eqj";
import o from "No";
let s = false;
export class Entry {
  start() {
    if (!s) {
      s = true;
      a.T();
      r.jo(n.cN);
      this._flow = new o.n();
      this._flow.startLifeCycle().catch((e) => {
        console.error("init error:", e);
      });
    }
  }
  constructor(e) {
    this.start();
  }
}
