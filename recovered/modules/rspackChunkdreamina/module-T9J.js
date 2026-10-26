import r from "z8";
import n from "bT";
import i from "fEZ";
import o from "wF";
import { X } from "./module-Rl_2.js";
import c from "z7R";
export var Q = n.memo(function (e) {
  const { className } = e;
  return r.jsx(X, {
    fallback: null,
    serviceId: c.Ji,
    children: (e) =>
      r.jsx(o.Z, {
        instantiationService: e.containerService,
        children: r.jsx(i.m, {
          className,
        }),
      }),
  });
});
