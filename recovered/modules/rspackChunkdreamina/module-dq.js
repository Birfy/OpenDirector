import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import "Vx";
import i from "Ix";
import c from "A3";
import s from "Qey";
import u from "bT";
import d from "zP7";
import _m from "xb";
import f from "yw";
import { R as R_1 } from "./module-Du8.js";
import { b } from "./module-qO.js";
import p from "./module-ZYW.js";
import g from "hUS";
import { G as G_1 } from "./module-uz.js";
import * as y from "./module-eM.js";
import { N as N_1 } from "./module-Om.js";
import * as C from "./module-Pp.js";
export var F = u.memo(function (e) {
  const {
    abortable,
    loading,
    className,
    tooltipProps,
    children,
    onClick,
    onKeyDown,
  } = e;
  const T = o._(e, [
    "abortable",
    "loading",
    "className",
    "tooltipProps",
    "children",
    "onClick",
    "onKeyDown",
  ]);
  const { collapsed } = u.useContext(R_1);
  const { submitButtonRef } = u.useContext(b);
  const R = u.useContext(G_1);
  const MRef = u.useRef(null);
  const ref = u.useCallback(
    (e) => {
      MRef.current = e;
      if (submitButtonRef) {
        submitButtonRef.current = e;
      }
    },
    [submitButtonRef],
  );
  const [z, setZ] = u.useState(0);
  const D = u.useMemo(
    () => ({
      enter: "submit-button-send-icon-enter-qZSfGc",
      enterActive: "submit-button-send-icon-enter-active-RzAZwz",
      exit: "submit-button-send-icon-exit-YUoUbD",
      exitActive: "submit-button-send-icon-exit-active-x99EAp",
    }),
    [],
  );
  const F = u.useMemo(
    () => ({
      enter: "submit-button-stop-icon-enter-x2iH0a",
      enterActive: "submit-button-stop-icon-enter-active-iq2LtI",
      exit: "submit-button-stop-icon-exit-LD8RcE",
      exitActive: "submit-button-stop-icon-exit-active-o02EMo",
    }),
    [],
  );
  const P = u.useMemo(
    () => ({
      enter: "submit-button-loading-icon-enter-NRqrSR",
      enterActive: "submit-button-loading-icon-enter-active-JfUi7H",
      exit: "submit-button-loading-icon-exit-FWXKXR",
      exitActive: "submit-button-loading-icon-exit-active-v1Obtc",
    }),
    [],
  );
  const O = u.useMemo(
    () =>
      l.jsx(
        d.A,
        {
          timeout: 300,
          classNames: D,
          children: l.jsx(f.mDt, {}),
        },
        z,
      ),
    [z, D],
  );
  const B = u.useMemo(
    () =>
      l.jsx(
        d.A,
        {
          timeout: 300,
          classNames: F,
          children: l.jsx(f.uUv, {}),
        },
        "".concat(abortable),
      ),
    [abortable, F],
  );
  const G = u.useMemo(
    () =>
      l.jsx(
        d.A,
        {
          timeout: 100,
          classNames: P,
          children: l.jsx(g.w, {}),
        },
        "".concat(loading),
      ),
    [loading, P],
  );
  const icon = u.useMemo(
    () =>
      l.jsxs(N_1, {
        component: null,
        children: [
          loading || abortable ? l.jsx(l.Fragment, {}) : O,
          !loading && abortable ? B : l.jsx(l.Fragment, {}),
          loading ? G : l.jsx(l.Fragment, {}),
        ],
      }),
    [loading, abortable, O, B, G],
  );
  const { run } = c.default(
    (e) => {
      if (abortable === undefined && loading === undefined) {
        setZ((e) => e + 1);
      }
      if (onClick != null) {
        onClick(e);
      }
    },
    p.$,
    [],
    {
      leading: true,
      trailing: false,
    },
  );
  const onKeyDown_1 = u.useCallback(
    (e) => {
      if (e.code === "Space") {
        e.preventDefault();
      }
      if (onKeyDown != null) {
        onKeyDown(e);
      }
    },
    [onKeyDown],
  );
  return l.jsxs(l.Fragment, {
    children: [
      collapsed ? null : children,
      l.jsx(y.o, {
        state: {
          hintVisible:
            R.hintVisible &&
            !collapsed &&
            MRef.current ===
              (submitButtonRef == null ? undefined : submitButtonRef.current),
          dismissHint: R.dismissHint,
        },
        children: l.jsx(
          i.A,
          r._(a._({}, tooltipProps), {
            children: l.jsx("div", {
              children: l.jsx(
                C.b,
                r._(
                  a._(
                    {
                      ref,
                      type: "primary",
                      shape: "circle",
                      icon,
                      "aria-label": abortable
                        ? s.Ay.t("agent_button_tooltip_stop", {}, "停止生成")
                        : s.Ay.t("web_new_generate", {}, "生成"),
                    },
                    T,
                  ),
                  {
                    "aria-busy": !!loading,
                    "data-testid": "dreamina.generator.submit",
                    "data-generator-submit-available": !loading && !abortable,
                    className: _m("submit-button-Zt7UOy", className),
                    onClick: run,
                    onKeyDown: onKeyDown_1,
                  },
                ),
              ),
            }),
          }),
        ),
      }),
    ],
  });
});
