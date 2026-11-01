import "cO";
import { fU } from "./module-FEe.js";
export function FY() {
  let e;
  let t;
  let i;
  let n;
  let a;
  return (
    !fU() &&
    !!(
      (((e = window) == null ? undefined : e.matchMedia) &&
        (((t = window) == null
          ? undefined
          : t.matchMedia(
              "only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)",
            ).matches) ||
          ((i = window) == null
            ? undefined
            : i.matchMedia(
                "only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)",
              ).matches))) ||
      (((n = window) == null ? undefined : n.devicePixelRatio) &&
        ((a = window) == null ? undefined : a.devicePixelRatio) > 1.3)
    )
  );
}
const a = FY();
fU();
const o = 1.5;
export function mA(e, t) {
  let i;
  let r;
  if (a) {
    return {
      width: Math.round(
        e * ((i = window) == null ? undefined : i.devicePixelRatio),
      ),
      height: Math.round(
        t * ((r = window) == null ? undefined : r.devicePixelRatio),
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
  var l = width && height ? width / height : 1;
  var c = ((e, t, i, r) => {
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
        var a;
        var o;
        var s = Number(item);
        if (t > i) {
          a = s;
          o = s / r;
        } else {
          o = s;
          a = s * r;
        }
        acc[item] = {
          height: o,
          width: a,
        };
        return acc;
      }, {}),
    };
  })(resolutionUrlMap, width, height, l);
  if (c && resolutionUrlMap) {
    return resolutionUrlMap[
      (function (e, t, i, r) {
        const n =
          arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        const s =
          arguments.length > 5 && arguments[5] !== undefined && arguments[5];
        let l = "360";
        for (let c = 0; c < e.length; c++) {
          const d = e[c];
          const u = t[d];
          if (a && !n && s) {
            if (Math.max(u.width, u.height) >= Math.max(i, r) * o) {
              l = d;
              break;
            }
          } else if (u.height >= r && u.width >= i) {
            if (n) {
              l = c < e.length - 1 ? e[c + 1] : e[c];
              break;
            }
            l = d;
            break;
          }
        }
        return l;
      })(
        c.resolutionKeysArr,
        c.resolutionNumberMap,
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
    var s = a ? width * o : width;
    var l = a ? height * o : height;
    var c = Object.entries(resolutionUrlMap)
      .map((e) => {
        var [t, value] = e;
        return {
          sceneInfo: ((e) => {
            const [t, i, r] = e.split("-");
            if (t !== "normal" && t !== "smartCrop" && t !== "smart_crop") {
              return {
                scene: "normal",
                width: Number(e),
                height: Number(e),
              };
            }
            return {
              scene: t === "normal" ? "normal" : "smart_crop",
              width: Number(i.split(":")[1]),
              height: Number(r.split(":")[1]),
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
        return width >= s && height >= l;
      });
    if (c.length === 0) {
      return null;
    }
    var d = c.map((entry) => {
      var {
        sceneInfo: { width, height },
      } = entry;
      return {
        entry,
        ratioDiff: Math.abs(width / height - n),
        areaDiff: width * height - s * l,
      };
    });
    d.sort((e, t) => {
      if (e.ratioDiff !== t.ratioDiff) {
        return e.ratioDiff - t.ratioDiff;
      }
      return e.areaDiff - t.areaDiff;
    });
    return d[0].entry.value;
  }
};
