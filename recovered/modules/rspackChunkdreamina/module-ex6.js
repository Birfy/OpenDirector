import n from "oa";
import t from "z8";
import a from "bT";
import o from "yw";
const l = {
  standard: {
    icon: o.LAi,
  },
  artisan: {
    icon: o.Q_P,
  },
  teams: {
    icon: o.LAi,
  },
  maestro: {
    icon: o.R_x,
  },
  ultra: {
    icon: o.R_x,
  },
  teams_super: {
    icon: o.LAi,
  },
};
export function z(e) {
  const {
    className = "",
    style,
    level,
    inactive,
    enableClick = false,
    size = 20,
    onClick,
  } = e;
  const mRef = a.useRef(false);
  const p = a.useCallback((e) => !!(e && Object.hasOwn(l, e)), []);
  const onClick_1 = a.useCallback(() => {
    if (enableClick) {
      if (onClick != null) {
        onClick();
      }
    }
  }, [enableClick, onClick]);
  const g = a.useCallback(() => {
    var e = null;
    if (level && p(level)) {
      e = l[level].icon;
    }
    return e;
  }, [level, p]);
  const _ = a.useCallback(() => {
    var e = {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      fontSize: "".concat(size, "px"),
      color: inactive ? "var(--text-secondary)" : "var(--brand-bright-default)",
    };
    if (enableClick) {
      e.cursor = "pointer";
    }
    return n._({}, e, style);
  }, [size, enableClick, style, inactive]);
  const ref = a.useCallback((e) => {
    if (!mRef.current) {
      var r = e == null ? undefined : e.querySelector("svg");
      if (r) {
        var i = r.querySelectorAll("linearGradient");
        if (i.length > 0) {
          i.forEach((e) => {
            var i = e.getAttribute("id");
            if (i) {
              var n = ""
                .concat(i, "_")
                .concat(Math.random().toString(36).substr(2, 9));
              e.setAttribute("id", n);
              r.querySelectorAll('path[fill="url(#'.concat(i, ')"]')).forEach(
                (e) => {
                  e.setAttribute("fill", "url(#".concat(n, ")"));
                },
              );
            }
          });
          mRef.current = true;
        }
      }
    }
  }, []);
  const b = g();
  if (b) {
    return t.jsx("div", {
      className: "container-JEAjtM",
      ref,
      children: t.jsx(b, {
        className,
        style: _(),
        onClick: onClick_1,
      }),
    });
  }
  return null;
}
