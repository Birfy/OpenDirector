import r from "bT";
import o from "yI";
import i from "olG";
import { A as A_1 } from "./module-puV.js";
import { QO } from "./module-ce.js";
import { Et } from "./module-Pl5.js";
import { A as A_2 } from "./module-Bd_2.js";
const u = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const s = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
function FComponent(e) {
  const className = r.useContext(QO).getPrefixCls("spin") + "-dot";
  const style = {
    width: e.size,
    height: e.size,
  };
  const o = e.size ? parseInt(String(e.size)) : 0;
  return r.createElement(
    "div",
    {
      className: className + "-list",
      style: {
        height: e.size,
        width: Et(o) && o > 0 ? 7 * o : "",
      },
    },
    s([], u([, , , , ,]), false).map((e, key) =>
      r.createElement("div", {
        key,
        className,
        style,
      }),
    ),
  );
}
const v = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
export const A = r.forwardRef(function (e, ref) {
  const c = r.useContext(QO);
  const c_getPrefixCls = c.getPrefixCls;
  const c_componentConfig = c.componentConfig;
  const h = A_2(
    e,
    {},
    c_componentConfig == null ? undefined : c_componentConfig.Spin,
  );
  const {
    style,
    className,
    children,
    loading,
    size,
    icon,
    element,
    tip,
    dot,
    delay,
    block,
    ...rest
  } = h;
  const k = v(r.useState(!delay && loading), 2);
  const T = k[0];
  const j = k[1];
  const R = r.useCallback(o.A(j, delay), [delay]);
  const I = delay ? T : loading;
  const F = c_getPrefixCls("spin");
  r.useEffect(
    function () {
      if (delay) {
        R(loading);
      }
      return function () {
        if (R) {
          R.cancel();
        }
      };
    },
    [loading],
  );
  const M = r.createElement(
    "span",
    {
      className: F + "-icon",
    },
    icon
      ? r.cloneElement(icon, {
          className: A_1(F.replace("-spin", "-icon") + "-loading"),
          style: {
            fontSize: size,
          },
        })
      : element ||
          (dot
            ? r.createElement(FComponent, {
                size,
              })
            : r.createElement(i.A, {
                style: {
                  fontSize: size,
                },
              })),
  );
  return r.createElement(
    "div",
    {
      ref,
      className: A_1(
        F,
        {
          [F + "-block"]: block !== undefined && block,
          [F + "-loading"]: I,
          [F + "-with-tip"]: tip && !children,
        },
        className,
      ),
      style,
      ...rest,
    },
    children
      ? r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            {
              className: F + "-children",
            },
            children,
          ),
          I &&
            r.createElement(
              "div",
              {
                className: F + "-loading-layer",
                style: {
                  fontSize: size,
                },
              },
              r.createElement(
                "span",
                {
                  className: F + "-loading-layer-inner",
                },
                M,
                tip
                  ? r.createElement(
                      "div",
                      {
                        className: F + "-tip",
                      },
                      tip,
                    )
                  : null,
              ),
            ),
        )
      : r.createElement(
          r.Fragment,
          null,
          M,
          tip
            ? r.createElement(
                "div",
                {
                  className: F + "-tip",
                },
                tip,
              )
            : null,
        ),
  );
});
A.displayName = "Spin";
