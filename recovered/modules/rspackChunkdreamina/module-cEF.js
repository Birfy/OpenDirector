import a from "bT";
import r from "B3";
import { D } from "./module-Cc_3.js";
const o = {
  colors: ["#E0EFF9", "#FDFDFD", "#F2F9FC", "#FFFFFF"],
  distortion: 0.2,
  frame: 6515105.373000615,
  scale: 2,
  speed: 2,
  swirl: 0.5,
};
const l = {
  colors: ["#151D21", "#212A2E", "#263034", "#0F161A"],
  distortion: 0.25,
  frame: 9062243.995007988,
  scale: 2.8,
  speed: 1.4,
  swirl: 0.6,
};
export function z(e) {
  const themeMode = D();
  const [s, setS] = a.useState(false);
  const [u, setU] = a.useState(null);
  const [ready, setReady] = a.useState(false);
  a.useEffect(() => {
    var e;
    var t;
    var n;
    var a =
      (e = (t = window).matchMedia) == null
        ? undefined
        : e.call(t, "(prefers-reduced-motion: reduce)");
    var r = document.createElement("canvas").getContext("webgl2");
    var i = r !== null;
    if (!(r == null || (n = r.getExtension("WEBGL_lose_context")) == null)) {
      n.loseContext();
    }
    var o = () => {
      setS(i && (a == null ? undefined : a.matches) !== true);
    };
    o();
    if (typeof (a == null ? undefined : a.addEventListener) === "function") {
      a.addEventListener("change", o);
    } else if (a != null) {
      a.addListener(o);
    }
    return () => {
      if (
        typeof (a == null ? undefined : a.removeEventListener) === "function"
      ) {
        a.removeEventListener("change", o);
      } else if (a != null) {
        a.removeListener(o);
      }
    };
  }, []);
  a.useEffect(() => {
    if (s && e && !u) {
      var t = false;
      require
        .e("0wy")
        .then(require.bind(require, "epw"))
        .then((e) => {
          var { MeshGradient } = e;
          if (!t) {
            setU(() => MeshGradient);
          }
        })
        .catch(() => {});
      return () => {
        t = true;
      };
    }
  }, [e, u, s]);
  a.useEffect(() => {
    if (!u || !s) {
      return void setReady(false);
    }
    var e = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(e);
  }, [u, s]);
  return {
    MeshGradient: u,
    motionSupported: s,
    ready,
    themeMode,
    motionConfig: themeMode === r.l.Light ? o : l,
  };
}
