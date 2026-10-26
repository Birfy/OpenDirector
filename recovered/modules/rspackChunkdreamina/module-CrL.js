import r from "Qey";
import o from "A4";
import n from "yMd";
import a from "Foo";
const s = new Set(["3:4", "4:3", "16:9", "9:16", "21:9", "9:21"]);
const c = Array.from(
  new Set(
    a.i.flatMap((e) => {
      var [t, i] = e.split(":");
      return [e, "".concat(i, ":").concat(t)];
    }),
  ),
);
function l(e) {
  return typeof e === "number" && Number.isFinite(e) && e > 0;
}
export function _l(e) {
  const t = new Set();
  return e.reduce((acc, item) => {
    var r = item.ratioType ? o.t[item.ratioType] : undefined;
    var aspectRatio =
      r != null
        ? r
        : ((e, t) => {
            if (l(e) && l(t)) {
              const i = e / t;
              const r = c.find((e) => {
                var [t, r] = e.split(":").map(Number);
                return Math.abs(t / r - i) / i <= 0.001;
              });
              if (r) {
                return r;
              }
              for (let o = 1; o <= 100; o += 1) {
                const n = Math.max(1, Math.round(i * o));
                if (Math.abs(n / o - i) / i <= 0.001) {
                  return "".concat(n, ":").concat(o);
                }
              }
              return "".concat(e, ":").concat(t);
            }
          })(item.width, item.height);
    if (!aspectRatio || t.has(aspectRatio)) {
      return acc;
    }
    t.add(aspectRatio);
    var a = l(item.width) && l(item.height);
    acc.push({
      aspectRatio,
      width: a ? item.width : undefined,
      height: a ? item.height : undefined,
    });
    return acc;
  }, []);
}
export function $_(e) {
  const { intelligentAspectRatioOptionVisible, feats, imageRatioSizes } = e;
  const c = feats.includes(n.Si.GPTImageModel);
  const l = (
    imageRatioSizes === undefined
      ? a.i
      : _l(imageRatioSizes).map((e) => {
          var { aspectRatio } = e;
          return aspectRatio;
        })
  ).map((e) => ({
    label: e,
    value: e,
    disabled: c && s.has(e),
  }));
  if (intelligentAspectRatioOptionVisible) {
    return [
      {
        value: undefined,
        label: r.Ay.t("dreamina_image4_ratio_auto", {}),
      },
      ...l,
    ];
  }
  return l;
}
export function ju(e, t) {
  if (e.length === 0) {
    return t;
  }
  let i;
  const r = e.find((e) => {
    var { value } = e;
    return value === t;
  });
  if (r && !r.disabled) {
    return t;
  }
  if (
    (i = e.find((e) => {
      var { disabled } = e;
      return !disabled;
    })) == null
  ) {
    return undefined;
  }
  return i.value;
}
