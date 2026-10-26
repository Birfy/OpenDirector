import _r from "fyk";
import "./module-QU.js";
export function yx(e) {
  const t = /(transform|transition|animation)/i;
  return Object.keys(e).reduce((acc, key) => {
    const l = t.test(key)
      ? {
          ["Webkit" + key.replace(/^(.)/, (e, t) => t.toUpperCase())]: e[key],
        }
      : {};
    return _r(
      {},
      acc,
      {
        [key]: e[key],
      },
      l,
    );
  }, {});
}
export var Bu = function (e, t) {
  if (e === undefined) {
    return t;
  }
  return e;
};
export { Jg } from "./module-Osm.js";
export { Lu } from "./module-Osm.js";
export { MD } from "./module-Osm.js";
export { SE } from "./module-Osm.js";
export { VP } from "./module-Osm.js";
export { YJ } from "./module-Osm.js";
export { db } from "./module-Osm.js";
export { lW } from "./module-Osm.js";
export { oq } from "./module-Osm.js";
export { pK } from "./module-Osm.js";
export { w5 } from "./module-Osm.js";
export { xC } from "./module-Osm.js";
export { xV } from "./module-Osm.js";
