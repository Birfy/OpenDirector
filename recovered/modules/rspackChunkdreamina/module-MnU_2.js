import r from "bT";
import { G } from "./module-FFd.js";
export var I = r.memo(function (e) {
  const { children } = e;
  const [ref, dragging] = G();
  const s = r.Children.only(children);
  return r.cloneElement(s, {
    ref,
    dragging,
    "data-drag-handle": true,
  });
});
