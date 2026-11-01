import r from "wnX";
import i from "bT";
import { FI, Wb } from "./module-rJ.js";
import { YJ, oq, w5 } from "./module-jW8.js";
import l from "qNJ";
import _f from "fyk";
const u = "__COLLAPSE_CONTEXT__";
const c = {};
const SContext = i.createContext({
  key: u,
});
const d = i.forwardRef(function (e, t) {
  const e_header = e.header;
  const u = e_header === undefined ? "" : e_header;
  const e_icon = e.icon;
  const e_hideIcon = e.hideIcon;
  const v = e_hideIcon !== undefined && e_hideIcon;
  const e_disabled = e.disabled;
  const h = e_disabled !== undefined && e_disabled;
  const e_content = e.content;
  const g = e_content === undefined ? null : e_content;
  const e_defaultActive = e.defaultActive;
  const e_value = e.value;
  const y = e_value === undefined ? "" : e_value;
  const e_active = e.active;
  const e_animationTimeout = e.animationTimeout;
  const e_animationFunction = e.animationFunction;
  const e_className = e.className;
  const F = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const style = e_style === undefined ? {} : e_style;
  const S = i.useState(e_defaultActive !== undefined && e_defaultActive);
  const R = S[0];
  const D = S[1];
  const I = oq(e_active === undefined ? R : e_active);
  const A = I[0];
  const V = I[1];
  const L = I[2];
  const ORef = i.useRef(0);
  const ref = i.useRef(null);
  const MRef = i.useRef(null);
  const PRef = i.useRef(null);
  const WRef = i.useRef(null);
  const H = c[i.useContext(SContext).key] || {};
  const z = i.useContext(H) || {};
  const X = YJ(false);
  const J = X[0];
  const q = X[1];
  const j = X[2];
  i.useEffect(
    function () {
      let e = false;
      if (z.isGroup) {
        if (e_active !== undefined) {
          e = e_active;
        }
        if (z.value) {
          e = z.value.includes(y);
        }
      } else {
        e = A;
      }
      j(e);
    },
    [y, e_active, A, z.isGroup, z.value],
  );
  const Y = () => {
    let e;
    let t;
    const WRef_current = WRef.current;
    if (
      (e =
        WRef_current == null ||
        (t = WRef_current.getBoundingClientRect()) == null
          ? undefined
          : t.height) != null
    ) {
      return e;
    }
    return 0;
  };
  const B = (e) => {
    if (PRef.current) {
      PRef.current.style.height = e;
      const t = r.$k(PRef.current, "transitionDuration");
      setTimeout(
        () =>
          PRef.current &&
          (PRef.current.style.height = q.current ? "auto" : "0px"),
        q.current ? t : 20,
      );
    }
  };
  const G = () => {
    const e = Y();
    const t = ORef.current === 0;
    ORef.current = e;
    if (t) {
      const n = J ? "auto" : "0px";
      if (PRef.current) {
        PRef.current.style.height = n;
      }
      return;
    }
    B(e + "px");
  };
  const updateLayout = function () {
    if (PRef.current) {
      const e = Y();
      PRef.current.style.height = q.current ? ORef.current + "px" : "0px";
      r.dY(function () {
        ORef.current = e;
        B(q.current ? e + "px" : "0px");
      });
    }
  };
  const Z = (t) => {
    if (!h) {
      if (e.onCollapse) {
        e.onCollapse(t);
      }
      if (z.isGroup) {
        z.onCollapse(y);
      } else {
        D(!V.current);
      }
    }
  };
  i.useEffect(
    function () {
      L(e_active === undefined ? R : e_active);
    },
    [e_active, R],
  );
  i.useImperativeHandle(t, function () {
    return {
      dom: MRef.current,
      head: ref.current,
      updateLayout,
    };
  });
  i.useEffect(
    function () {
      G();
    },
    [J],
  );
  w5(
    function () {
      updateLayout();
    },
    [g],
  );
  return i.createElement(Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    return i.createElement(
      "div",
      {
        className: r.xF(e_prefixCls + "-collapse-item", F, {
          disabled: h || z.disabled,
        }),
        style,
        ref: MRef,
      },
      i.createElement(
        "div",
        {
          className: r.xF(e_prefixCls + "-collapse-header"),
          ref,
          onClick: function () {
            return Z(y);
          },
        },
        u,
        !v &&
          i.createElement(
            "div",
            {
              className: r.xF(e_prefixCls + "-collapse-icon"),
            },
            e_icon ||
              i.createElement(l.A, {
                className: e_prefixCls + "-collapse-icon-arrow",
                style: {
                  transform: `rotate(${J ? "180deg" : "0deg"})`,
                },
              }),
          ),
      ),
      i.createElement(
        "div",
        {
          className: r.xF(e_prefixCls + "-collapse-content"),
          ref: PRef,
          style: {
            transitionDuration:
              e_animationTimeout !== undefined
                ? e_animationTimeout + "ms"
                : undefined,
            transitionTimingFunction: e_animationFunction,
          },
        },
        i.createElement(
          "div",
          {
            className: r.xF(e_prefixCls + "-collapse-content-container"),
            ref: WRef,
          },
          g,
        ),
      ),
    );
  });
});
const Group = i.forwardRef(function (e, t) {
  const e_items = e.items;
  const o = e_items === undefined ? [] : e_items;
  const e_className = e.className;
  const e_style = e.style;
  const e_defaultActiveItems = e.defaultActiveItems;
  const h = e_defaultActiveItems === undefined ? [] : e_defaultActiveItems;
  const e_useAccordion = e.useAccordion;
  const g = e_useAccordion !== undefined && e_useAccordion;
  const e_disabled = e.disabled;
  const disabled = e_disabled !== undefined && e_disabled;
  const e_children = e.children;
  const e_groupKey = e.groupKey;
  const C = i.useState([]);
  const k = C[0];
  const w = C[1];
  const F = i.useState([]);
  const T = F[0];
  const N = F[1];
  const S = i.useState([]);
  const R = S[0];
  const D = S[1];
  const I = e_groupKey || u;
  if (!c[I]) {
    c[I] = i.createContext({
      isGroup: false,
      value: [],
      onCollapse: function () {},
    });
  }
  const A = c[I];
  const VRef = i.useRef(null);
  const prefixCls = i.useContext(FI).prefixCls;
  const O = (e) => o.map((t) => e.indexOf(t.value) > -1);
  i.useEffect(function () {
    w(O(h));
    D(h);
  }, []);
  i.useEffect(
    function () {
      N(e.activeItems === undefined ? k : O(e.activeItems));
      if (e_children && e.activeItems) {
        D(e.activeItems);
      }
    },
    [e.activeItems, k],
  );
  i.useImperativeHandle(t, function () {
    return {
      dom: VRef.current,
    };
  });
  return i.createElement(
    "div",
    {
      className: r.xF(
        prefixCls + "-collapse-group",
        e_className === undefined ? "" : e_className,
      ),
      style: e_style === undefined ? {} : e_style,
      ref: VRef,
    },
    i.createElement(
      SContext.Provider,
      {
        value: {
          key: I,
        },
      },
      i.createElement(
        A.Provider,
        {
          value: {
            isGroup: true,
            onCollapse: function (t) {
              if (!disabled) {
                if (e.onCollapse) {
                  e.onCollapse(t);
                }
                if (e.activeItems !== undefined) {
                  w(O(e.activeItems));
                  D(e.activeItems);
                  return;
                }
                if (e_children) {
                  D(
                    R.includes(t)
                      ? R.filter((e) => e !== t)
                      : g
                        ? [t]
                        : [].concat(R, [t]),
                  );
                } else {
                  const n = o.findIndex((e) => e.value === t);
                  if (n < 0 || o[n].disabled) {
                    return;
                  }
                  w(
                    k.map((e, t) => {
                      if (t === n) {
                        return !e;
                      }
                      return !g && e;
                    }),
                  );
                }
              }
            },
            disabled,
            value: e_children ? R : undefined,
          },
        },
        e_children ||
          i.createElement(
            i.Fragment,
            null,
            o.map((e, t) => {
              const n = _f(
                {
                  active: T[t],
                  disabled: disabled || e.disabled,
                  defaultActive: O(h)[t],
                },
                e,
              );
              return i.createElement(
                d,
                _f(
                  {
                    key: e.value,
                  },
                  n,
                ),
              );
            }),
          ),
      ),
    ),
  );
});
r.DU(d, {
  Group,
});
