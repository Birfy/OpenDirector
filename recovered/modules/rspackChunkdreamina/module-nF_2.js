import r from "e3";
import a from "sV8";
import n from "aX";
import s from "aS";
import o from "u3a";
import l from "pc";
import c from "Zt";
import { v } from "./module-Lk_2.js";
import { g } from "./module-Cx_3.js";
import { n as n_1 } from "./module-iwC.js";
import { F } from "./module-ihZ.js";
import { n as n_2 } from "./module-Oz_3.js";
import { V } from "./module-jL.js";
export var T = (e) => {
  if (r.A(e)) {
    if (F(e.generateType)) {
      return "image";
    }
    return null;
  }
  if (a.n(e)) {
    if (n_2(e.generateType)) {
      return "music";
    }
    if (g(e.generateType)) {
      return "audio";
    }
    return null;
  }
  if (n.e(e)) {
    return "agentic";
  }
  if (s.g(e)) {
    if (o.f(e)) {
      return "audio";
    }
    if (
      n_1(e.generateType) ||
      (s.g(e) &&
        e.originalInput &&
        (l.p(e.originalInput) || c.r(e.originalInput)))
    ) {
      return "digitalHuman";
    }
    if (v(e.generateType) || v(e.firstGenerateType)) {
      return "actionCopy";
    }
    if (V(e.generateType)) {
      return "video";
    }
    return null;
  }
  return null;
};
