let a;
let n;
let o;
let l;
let i;
let s;
let c;
let d;
let u;
let v;
export var O = {
  Windows:
    (a =
      (i = global.navigator) == null || (l = i.platform) == null
        ? undefined
        : l.startsWith("Win")) != null && a,
  MacOS:
    (n =
      (c = global.navigator) == null || (s = c.platform) == null
        ? undefined
        : s.startsWith("Mac")) != null && n,
  Linux:
    (o =
      (u = global.navigator) == null || (d = u.platform) == null
        ? undefined
        : d.startsWith("Linux")) != null && o,
  IOS:
    ["iPhone", "iPad", "iPod"].indexOf(
      (v = global.navigator) == null ? undefined : v.platform,
    ) >= 0,
};
