import _r from "fyk";
import a from "bT";
import { X } from "./module-QU.js";
export var q = function (e, t, n) {
  const r = this;
  this.root = undefined;
  this.app = undefined;
  this.container = undefined;
  this.context = undefined;
  this.render = function (e) {
    const r_app = r.app;
    const n = _r({}, e, {
      context: r.context,
    });
    if (r.root) {
      r.root.render(a.createElement(r_app, n));
    } else {
      r.root = X(a.createElement(r_app, n), r.container);
    }
  };
  this.unmount = function () {
    let e;
    if ((e = r.root) != null) {
      e._unmount();
    }
    r.root = undefined;
  };
  this.app = e;
  this.container = t;
  this.context = n;
};
