import a from "NY";
import o from "QWK";
import { jG } from "./module-o7_2.js";
import { _ } from "./module-Kt_2.js";
export class s extends jG {
  initDomain(e) {
    if (e) {
      this._resolveBlockPromise();
    }
    this._domain = e;
  }
  getAsyncApi(e) {
    const t = this;
    return a._(function* () {
      yield t._blockPromise;
      return t.getApi(e);
    })();
  }
  getApi(e) {
    if (!this._domain) {
      throw Error(`Domain not found for type: ${this._domain}`);
    }
    let t = e.startsWith("/") ? e.slice(1) : e;
    return `${this._domain}/${t}`;
  }
  updateApi(e) {
    this.initDomain(e);
  }
  constructor(e, t) {
    super();
    this._containerService = t;
    this._domain = "";
    this._resolveBlockPromise = () => {};
    this._blockPromise = new Promise((resolve) => {
      this._resolveBlockPromise = resolve;
    });
    if (typeof e === "function") {
      e(this._containerService).then((e) => {
        this.initDomain(e);
      });
    } else {
      this.initDomain(e);
    }
  }
}
s = o.Cg(
  [
    o.Qj(1, _),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [Object, _ === undefined ? Object : _]),
  ],
  s,
);
