import r from "K8";
import a from "CEb";
import n from "yMd";
import { P } from "./module-PQZ.js";
import { I } from "./module-Hm7.js";
export function J(e, t) {
  return e.createInstance(P, {
    mockDataCreator: () =>
      I(e, t, {
        generateType: n.ce.CreationAgent,
      }),
    processInputParamsConverter: () => r.TZ(new a.S(t).convert()),
  });
}
