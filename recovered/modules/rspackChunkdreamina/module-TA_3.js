import "cO";
import { fU } from "./module-FEe_2.js";
export function FY() {
  let e;
  let t;
  let r;
  let n;
  let o;
  return (
    !fU() &&
    !!(
      (((e = window) == null ? undefined : e.matchMedia) &&
        (((t = window) == null
          ? undefined
          : t.matchMedia(
              "only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)",
            ).matches) ||
          ((r = window) == null
            ? undefined
            : r.matchMedia(
                "only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)",
              ).matches))) ||
      (((n = window) == null ? undefined : n.devicePixelRatio) &&
        ((o = window) == null ? undefined : o.devicePixelRatio) > 1.3)
    )
  );
}
const o = FY();
fU();
const a = 1.5;
export function mA(e, t) {
  let r;
  let i;
  if (o) {
    return {
      width: Math.round(
        e * ((r = window) == null ? undefined : r.devicePixelRatio),
      ),
      height: Math.round(
        t * ((i = window) == null ? undefined : i.devicePixelRatio),
      ),
    };
  }
  return {
    width: e,
    height: t,
  };
}
export var HM = (e) => {
  var {
    width,
    height,
    resolutionUrlMap,
    pickNext = false,
    autoPickNext = false,
  } = e;
  var c = width && height ? width / height : 1;
  var l = ((e, t, r, i) => {
    if (!e) {
      return null;
    }
    var resolutionKeysArr = Object.keys(e)
      .filter((e) => e === "number" || e === "origin" || !!Number(e))
      .sort((e, t) => {
        if (e === "origin") {
          return 1;
        }
        if (t === "origin") {
          return -1;
        }
        return Number(e) - Number(t);
      });
    return {
      resolutionKeysArr,
      resolutionNumberMap: resolutionKeysArr.reduce((acc, item) => {
        if (item === "origin") {
          acc.origin = {
            width: Infinity,
            height: Infinity,
          };
          return acc;
        }
        var o;
        var a;
        var s = Number(item);
        if (t > r) {
          o = s;
          a = s / i;
        } else {
          a = s;
          o = s * i;
        }
        acc[item] = {
          height: a,
          width: o,
        };
        return acc;
      }, {}),
    };
  })(resolutionUrlMap, width, height, c);
  if (l && resolutionUrlMap) {
    return resolutionUrlMap[
      (function (e, t, r, i) {
        const n =
          arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        const s =
          arguments.length > 5 && arguments[5] !== undefined && arguments[5];
        let c = "360";
        for (let l = 0; l < e.length; l++) {
          const m = e[l];
          const u = t[m];
          if (o && !n && s) {
            if (Math.max(u.width, u.height) >= Math.max(r, i) * a) {
              c = m;
              break;
            }
          } else if (u.height >= i && u.width >= r) {
            if (n) {
              c = l < e.length - 1 ? e[l + 1] : e[l];
              break;
            }
            c = m;
            break;
          }
        }
        return c;
      })(
        l.resolutionKeysArr,
        l.resolutionNumberMap,
        width,
        height,
        pickNext,
        autoPickNext,
      )
    ];
  }
};
export var vw = (e) => {
  var { width, height, resolutionUrlMap } = e;
  if (resolutionUrlMap) {
    var n = width && height ? width / height : 1;
    var s = o ? width * a : width;
    var c = o ? height * a : height;
    var l = Object.entries(resolutionUrlMap)
      .map((e) => {
        var [t, value] = e;
        return {
          sceneInfo: ((e) => {
            const [t, r, i] = e.split("-");
            if (t !== "normal" && t !== "smartCrop" && t !== "smart_crop") {
              return {
                scene: "normal",
                width: Number(e),
                height: Number(e),
              };
            }
            return {
              scene: t === "normal" ? "normal" : "smart_crop",
              width: Number(r.split(":")[1]),
              height: Number(i.split(":")[1]),
            };
          })(t),
          value,
        };
      })
      .filter((e) => e.sceneInfo.scene === "smart_crop")
      .filter((e) => {
        var {
          sceneInfo: { width, height },
        } = e;
        return width >= s && height >= c;
      });
    if (l.length === 0) {
      return null;
    }
    var m = l.map((entry) => {
      var {
        sceneInfo: { width, height },
      } = entry;
      return {
        entry,
        ratioDiff: Math.abs(width / height - n),
        areaDiff: width * height - s * c,
      };
    });
    m.sort((e, t) => {
      if (e.ratioDiff !== t.ratioDiff) {
        return e.ratioDiff - t.ratioDiff;
      }
      return e.areaDiff - t.areaDiff;
    });
    return m[0].entry.value;
  }
};
