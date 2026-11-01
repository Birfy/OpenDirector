import a from "Qey";
const string0 = "__DREAMINA_VIDEO_CONTINUATION_ORIGIN_VIDEO_SLOT__";
const string1 = "__DREAMINA_VIDEO_CONTINUATION_DURATION_SLOT__";
const s = "参考{string0}的内容，延长视频{string1}：";
export function n() {
  let e;
  let t;
  if (
    (e =
      (t = u(
        d(
          a.Ay.t(
            "seedance_25_extend",
            {
              string0,
              string1,
            },
            s,
          ),
        ),
      )) != null
        ? t
        : u(d(s))) != null
  ) {
    return e;
  }
  return [];
}
function d(e) {
  return e.replaceAll("{string0}", string0).replaceAll("{string1}", string1);
}
function u(e) {
  const t = [];
  let r = 0;
  let a = 0;
  let s = 0;
  const o = RegExp("".concat(string0, "|").concat(string1), "g");
  for (const d of e.matchAll(o)) {
    let u;
    const l = d[0];
    const c = (u = d.index) != null ? u : 0;
    const m = e.slice(r, c);
    if (m) {
      t.push({
        type: "text",
        text: m,
      });
    }
    if (l === string0) {
      a++;
      t.push({
        type: "slot",
        slot: "originVideo",
      });
    } else {
      s++;
      t.push({
        type: "slot",
        slot: "duration",
      });
    }
    r = c + l.length;
  }
  const p = e.slice(r);
  if (p) {
    t.push({
      type: "text",
      text: p,
    });
  }
  if (a === 1 && s === 1) {
    return t;
  }
}
Object.defineProperty(exports, "g", {
  enumerable: true,
  get: () => " ",
});
