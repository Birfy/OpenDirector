import i from "oa";
import r from "z8";
import a from "bT";
import { x } from "./module-Fg.js";
import { C } from "./module-vbt.js";
import { l } from "./module-q0.js";
import { j } from "./module-X3f.js";
import { A } from "./module-Toe.js";
import { K } from "./module-zHt.js";
import * as m from "./module-BV.js";
import * as v from "./module-waF.js";
import { S } from "./module-VE_2.js";
import g from "oZZ";
export var h = a.memo(function (e) {
  if (x(e)) {
    return r.jsx(g.v, i._({}, e));
  }
  if (C(e)) {
    return r.jsx(K, i._({}, e));
  }
  if (l(e)) {
    return r.jsx(v.r, i._({}, e));
  }
  if (j(e)) {
    return r.jsx(m.n, i._({}, e));
  }
  if (A(e)) {
    return r.jsx(S, i._({}, e));
  }
  return r.jsx(r.Fragment, {
    children: e.children,
  });
});
