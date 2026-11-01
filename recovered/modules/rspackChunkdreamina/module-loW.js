import a from "oa";
import o from "bk";
import i from "z8";
import c from "bT";
import s from "yw";
import _l from "xb";
import { T as T_1 } from "./module-sd.js";
import { O } from "./module-w0.js";
import { i as i_1 } from "./module-BCJ.js";
import { A as A_1 } from "./module-oe0.js";
import j from "bN1";
let n;
function p() {
  if (n == null) {
    n = require
      .e("wb5")
      .then(require.t.bind(require, "OX4", 19))
      .then((e) => {
        var { default: _default } = e;
        return _default;
      })
      .catch(() => undefined);
  }
  return n;
}
const h = i.jsx("svg", {
  className: "static-icon-Rnn9m4",
  width: "20",
  height: "20",
  viewBox: "0 0 17.5988 17.5988",
  fill: "none",
  children: i.jsx("path", {
    d: "M7.68469 0.684403C8.1477 -0.228134 9.45111 -0.228134 9.91412 0.684403L10.7021 2.23746C11.7211 4.24581 13.353 5.87767 15.3614 6.89668L16.9144 7.68469C17.8269 8.1477 17.8269 9.45111 16.9144 9.91413L15.3614 10.7021C13.353 11.7211 11.7211 13.353 10.7021 15.3614L9.91413 16.9144C9.45111 17.8269 8.1477 17.8269 7.68468 16.9144L6.89668 15.3614C5.87767 13.353 4.24581 11.7211 2.23745 10.7021L0.684403 9.91412C-0.228135 9.45111 -0.228134 8.1477 0.684403 7.68469L2.23746 6.89668C4.24581 5.87767 5.87767 4.24581 6.89668 2.23746L7.68469 0.684403Z",
    fill: "currentColor",
  }),
});
function useV(e) {
  const { className, playToken = 0, size = 20 } = e;
  const [a, setA] = c.useState(false);
  const [s, setS] = c.useState();
  const v = s == null ? undefined : s.Component;
  c.useEffect(() => {
    if (playToken <= 0 || O()) {
      return void setA(false);
    }
    var e = false;
    setA(true);
    Promise.all([T_1(), p()]).then((t) => {
      var r;
      var [n, a] = t;
      if (!e) {
        if (!n || !a) {
          return void setA(false);
        }
        setS(
          ((r = ((a.op - a.ip) / a.fr) * 1000),
          {
            Component: n,
            config: {
              animationData: a,
              autoplay: true,
              loop: false,
              renderer: "svg",
              rendererSettings: {
                preserveAspectRatio: "xMidYMid meet",
              },
            },
            speed: r / 600,
          }),
        );
      }
    });
    return () => {
      e = true;
    };
  }, [playToken]);
  const f = c.useCallback(() => {
    setA(false);
  }, []);
  const g = c.useMemo(
    () => [
      {
        name: "error",
        callback: f,
      },
      {
        name: "data_failed",
        callback: f,
      },
    ],
    [f],
  );
  return i.jsx("span", {
    className: _l("root-n1ckwG", className),
    style: {
      flexBasis: size,
      width: size,
      height: size,
    },
    "aria-hidden": "true",
    children:
      a && v
        ? i.jsx(
            v,
            {
              className: "animation-CmadfW",
              config: s.config,
              lottieEventListeners: g,
              speed: s.speed,
            },
            playToken,
          )
        : h,
  });
}
const b = c.memo(function (e) {
  const { active } = e;
  const [n, setN] = c.useState();
  const [o, setO] = c.useState("idle");
  const lRef = c.useRef(active);
  lRef.current = active;
  const u = n == null ? undefined : n.Component;
  c.useEffect(() => {
    if (!O()) {
      var e = false;
      Promise.all([
        T_1(),
        require
          .e("gyv")
          .then(require.t.bind(require, "GyJ", 19))
          .then((e) => {
            var { default: _default } = e;
            return _default;
          }),
      ])
        .then((t) => {
          var [r, animationData] = t;
          if (!e && r) {
            setN({
              Component: r,
              config: {
                animationData,
                autoplay: false,
                loop: false,
                renderer: "svg",
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid meet",
                },
              },
            });
          }
        })
        .catch(() => undefined);
      return () => {
        e = true;
      };
    }
  }, []);
  c.useEffect(() => {
    if (O()) {
      setO("idle");
    } else {
      setO((e) => {
        if (active) {
          if (e === "holding") {
            return e;
          }
          return "entering";
        }
        if (u) {
          if (e === "idle") {
            return e;
          }
          return "exiting";
        }
        return "idle";
      });
    }
  }, [active, u]);
  const p = c.useCallback(() => {
    setO((e) => {
      if (lRef.current) {
        return "holding";
      }
      if (e === "exiting") {
        return "idle";
      }
      return "exiting";
    });
  }, []);
  const h = c.useCallback(() => {
    setO("idle");
  }, []);
  const v = c.useMemo(
    () => [
      {
        name: "complete",
        callback: p,
      },
      {
        name: "error",
        callback: h,
      },
      {
        name: "data_failed",
        callback: h,
      },
    ],
    [p, h],
  );
  if (!u || o === "idle") {
    return null;
  }
  const f = o === "exiting";
  return i.jsx("span", {
    className: A_1.newProjectCurveAnimation,
    "aria-hidden": "true",
    children: i.jsx(u, {
      className: A_1.newProjectCurveLottie,
      config: n.config,
      direction: f ? -1 : 1,
      height: "138px",
      lottieEventListeners: v,
      playingState: o === "holding" ? "paused" : "playing",
      speed: f ? 2 : 1,
      width: "496px",
    }),
  });
});
var y = c.memo(function (e) {
  const { onCreateProject } = e;
  const r = i_1();
  const n = j.k();
  const lRef = c.useRef(false);
  const uRef = c.useRef(false);
  const hRef = c.useRef(false);
  const [y, setY] = c.useState(false);
  const [playToken, setPlayToken] = c.useState(0);
  c.useEffect(() => {
    if (typeof window !== "undefined" && !O()) {
      Promise.all([T_1(), p()]);
    }
  }, []);
  const A = c.useCallback(() => {
    var e = lRef.current || uRef.current;
    if (e !== hRef.current) {
      hRef.current = e;
      setY(e);
      if (e) {
        setPlayToken((e) => e + 1);
      }
    }
  }, []);
  const onMouseEnter = c.useCallback(() => {
    lRef.current = true;
    A();
  }, [A]);
  const onMouseLeave = c.useCallback(() => {
    lRef.current = false;
    A();
  }, [A]);
  const onFocus = c.useCallback(() => {
    uRef.current = true;
    A();
  }, [A]);
  const onBlur = c.useCallback(() => {
    uRef.current = false;
    A();
  }, [A]);
  return i.jsxs("button", {
    type: "button",
    className: A_1.newProjectCard,
    "aria-label": r.createProject,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onClick: onCreateProject,
    children: [
      i.jsx(b, {
        active: y,
      }),
      i.jsxs("span", {
        className: A_1.newProjectContent,
        children: [
          i.jsxs("span", {
            className: A_1.addIcon,
            "data-active": y,
            "aria-hidden": "true",
            children: [
              i.jsx("span", {
                className: A_1.addIconPlus,
                children: i.jsx(s.xZp, {
                  size: 16,
                }),
              }),
              i.jsx("span", {
                className: A_1.addIconStar,
                children: i.jsx(useV, {
                  playToken,
                  size: 16,
                }),
              }),
            ],
          }),
          i.jsx(
            "span",
            o._(
              a._(
                {
                  className: A_1.newProjectLabel,
                },
                n,
              ),
              {
                children: r.createProject,
              },
            ),
          ),
        ],
      }),
    ],
  });
});
export { y as s };
