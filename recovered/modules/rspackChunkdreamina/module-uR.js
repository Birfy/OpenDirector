import { DAUtils } from "./module-pz.js";
import a from "Rd";
const o =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DANode extends a.Serializable {
  constructor() {
    super(...arguments);
    this.type = "";
    this.id = "";
    this.minVersion = undefined;
    this.minFeatures = undefined;
  }
  afterParse() {
    super.afterParse();
    if (this.id === "") {
      this.id = DAUtils.randomUUIDString();
    }
  }
  afterInit() {
    super.afterInit();
    if (this.id === "") {
      this.id = DAUtils.randomUUIDString();
    }
  }
  childNodes() {
    return [];
  }
  calculateMinVersion() {
    let e;
    let t = (e = this.minVersion) != null ? e : "0.0.1";
    this.childNodes().forEach((e) => {
      let i = e.calculateMinVersion();
      if (DAUtils.compareSemVersion(i, t) > 0) {
        t = i;
      }
    });
    return t;
  }
  calculateMinFeatures() {
    let e;
    let t = (e = this.minFeatures) != null ? e : [];
    this.childNodes().forEach((e) => {
      e.calculateMinFeatures().forEach((e) => {
        if (t.indexOf(e) < 0) {
          t.push(e);
        }
      });
    });
    return t;
  }
}
o([a.serializable("type")], DANode.prototype, "type", undefined);
o([a.serializable("id")], DANode.prototype, "id", undefined);
o([a.serializable("min_version")], DANode.prototype, "minVersion", undefined);
o([a.serializable("min_features")], DANode.prototype, "minFeatures", undefined);
