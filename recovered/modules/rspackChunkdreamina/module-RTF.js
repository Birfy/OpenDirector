import { fastFormats, formatNames, fullFormats } from "./module-Stk.js";
import s from "./module-saR.js";
import { Name, _ } from "./module-uEg.js";
let o = new Name("fullFormats");
let n = new Name("fastFormats");
let l = (
  e,
  t = {
    keywords: true,
  },
) => {
  if (Array.isArray(t)) {
    d(e, t, fullFormats, o);
    return e;
  }
  let [r, i] = t.mode === "fast" ? [fastFormats, n] : [fullFormats, o];
  d(e, t.formats || formatNames, r, i);
  if (t.keywords) {
    s(e);
  }
  return e;
};
function d(e, t, r, a) {
  let s;
  for (let o of ((s = e.opts.code).formats != null ||
    (s.formats = (0, _)`require("ajv-formats/dist/formats").${a}`),
  t)) {
    e.addFormat(o, r[o]);
  }
}
l.get = (e, t = "full") => {
  let r = (t === "fast" ? fastFormats : fullFormats)[e];
  if (!r) {
    throw Error(`Unknown format "${e}"`);
  }
  return r;
};
let _t;
_t = l;
export default l;
Object.defineProperty(_t, "__esModule", {
  value: true,
});
_t.default = l;
