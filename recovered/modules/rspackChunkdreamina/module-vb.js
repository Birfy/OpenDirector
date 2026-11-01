let n;
let t;
let o;
let r;
let s;
let l;
let c;
let d;
let m;
let p;
export var O = {
  Windows:
    (n =
      (s = global.navigator) == null || (r = s.platform) == null
        ? undefined
        : r.startsWith("Win")) != null && n,
  MacOS:
    (t =
      (c = global.navigator) == null || (l = c.platform) == null
        ? undefined
        : l.startsWith("Mac")) != null && t,
  Linux:
    (o =
      (m = global.navigator) == null || (d = m.platform) == null
        ? undefined
        : d.startsWith("Linux")) != null && o,
  IOS:
    ["iPhone", "iPad", "iPod"].indexOf(
      (p = global.navigator) == null ? undefined : p.platform,
    ) >= 0,
};
