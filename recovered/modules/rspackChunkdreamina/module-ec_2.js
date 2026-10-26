import { DANode } from "./module-uR.js";
import { ImageInputOption } from "./module-OV.js";
import { ImageInputResource } from "./module-fe.js";
import s from "Rd";
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
export class AbilityParam extends DANode {
  constructor() {
    super(...arguments);
    this.resource_list = undefined;
    this.option = undefined;
  }
  childNodes() {
    let e = [];
    let resource_list = this.resource_list;
    if (resource_list != undefined) {
      resource_list.forEach((t) => {
        e.push(t);
      });
    }
    let option = this.option;
    if (option != undefined) {
      e.push(option);
    }
    return e;
  }
}
o(
  [s.serializable("resource_list", () => ImageInputResource)],
  AbilityParam.prototype,
  "resource_list",
  undefined,
);
o(
  [s.serializable("option", () => ImageInputOption)],
  AbilityParam.prototype,
  "option",
  undefined,
);
