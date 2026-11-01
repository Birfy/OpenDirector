import { DANode } from "./module-uR.js";
import { DAIdIpFrame } from "./module-tE.js";
import d from "Rd";
let o;
export var DAIdIpMetaType;
const a =
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
o = DAIdIpMetaType || (DAIdIpMetaType = {});
o.Text = "text";
o.IdIpFrame = "idip_frame";
export class DAIdIpMeta extends DANode {
  constructor() {
    super(...arguments);
    this.metaType = DAIdIpMetaType.Text;
    this.text = undefined;
    this.frameInfo = undefined;
  }
  childNodes() {
    let e = [];
    let frameInfo = this.frameInfo;
    if (frameInfo != undefined) {
      e.push(frameInfo);
    }
    return e;
  }
}
a([d.serializable("meta_type")], DAIdIpMeta.prototype, "metaType", undefined);
a([d.serializable("text")], DAIdIpMeta.prototype, "text", undefined);
a(
  [d.serializable("frame_info", () => DAIdIpFrame)],
  DAIdIpMeta.prototype,
  "frameInfo",
  undefined,
);
