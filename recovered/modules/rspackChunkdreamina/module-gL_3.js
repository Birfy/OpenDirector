import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "PC";
import a from "bT";
import c from "zP7";
import u from "u7";
import d from "fyk";
import "U4";
import { V as V_1 } from "./module-Tb.js";
import { A as A_1 } from "./module-Ww_2.js";
import { gR, qD } from "./module-a3_2.js";
import { Er, gw } from "./module-K6G.js";
import { A as A_2 } from "./module-R8.js";
import { A as A_3 } from "./module-va.js";
import { X } from "./module-Y5R.js";
import { A as A_4 } from "./module-bH_2.js";
import { A as A_5 } from "./module-WL.js";
import { A as A_6 } from "./module-ER_2_2.js";
import { A as A_7 } from "./module-c4.js";
import { Q, RK, iv, kk } from "./module-pw_2.js";
import { Ay, QO } from "./module-mY_2.js";
import { A as A_8 } from "./module-aZD.js";
import { Gv, Tn } from "./module-V9.js";
import { A as A_9 } from "./module-Sc_2.js";
import { A as A_10 } from "./module-geN.js";
import { A as A_11 } from "./module-Ru_5.js";
import { A as A_12 } from "./module-vC_2.js";
import { A as A_13 } from "./module-k6B.js";
const y = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-lv-close"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    d(
      {
        fill: "none",
        viewBox: "0 0 20 20",
        stroke: "currentColor",
      },
      l,
    ),
    a.createElement("path", {
      fill: "#16161D",
      d: "m10 11.178 5.724 5.724a.5.5 0 0 0 .707 0l.471-.471a.5.5 0 0 0 0-.707L11.178 10l5.724-5.724a.5.5 0 0 0 0-.707l-.471-.471a.5.5 0 0 0-.707 0L10 8.82 4.276 3.098a.5.5 0 0 0-.707 0l-.471.471a.5.5 0 0 0 0 .707L8.82 10l-5.723 5.724a.5.5 0 0 0 0 .707l.471.471a.5.5 0 0 0 .707 0L10 11.178Z",
    }),
  );
});
y.defaultProps = {
  isIcon: true,
};
y.displayName = "IconLvClose";
function _(e) {
  let { prefixCls, simple } = Q();
  return l.jsx(
    A,
    o._(
      r._(
        {
          prefixCls,
          simple,
        },
        e,
      ),
      {
        children: e.content,
      },
    ),
  );
}
let M = (e) => {
  if (e.isNotice) {
    let { icon } = e;
    if (!icon && icon !== null) {
      switch (e.noticeType) {
        case "info":
          icon = l.jsx(A_4, {});
          break;
        case "success":
          icon = l.jsx(A_7, {});
          break;
        case "warning":
          icon = l.jsx(A_6, {});
          break;
        case "error":
          icon = l.jsx(A_5, {});
      }
    }
    e.title = l.jsxs("span", {
      children: [icon, e.title],
    });
    e.hideCancel = true;
  } else {
    e.title = l.jsxs("span", {
      children: [e.icon !== null && (e.icon || l.jsx(A_6, {})), e.title],
    });
  }
  return e;
};
const T = (e, t) => {
  let n;
  let i = document.createElement("div");
  document.body.appendChild(i);
  let s = kk();
  let a = o._(r._({}, e), {
    visible: false,
  });
  let c =
    t ||
    ((e) => {
      let t = l.jsx(
        Ay,
        o._(r._({}, s), {
          children: l.jsx(
            _,
            o._(r._({}, e), {
              onCancel,
            }),
          ),
        }),
      );
      if (n) {
        n.render(t);
      } else {
        n = X(t, i);
      }
    });
  function u() {
    n = n == null ? undefined : n._unmount();
    if (i.parentNode) {
      i.parentNode.removeChild(i);
    }
    for (let e = 0; e < RK.length; e++) {
      if (RK[e] === d) {
        RK.splice(e, 1);
        break;
      }
    }
  }
  function d() {
    a.visible = false;
    a.afterClose = () => {
      if (e.afterClose) {
        e.afterClose();
      }
      u();
    };
    c(a);
  }
  function onCancel(t) {
    if (!t && e.onCancel) {
      e.onCancel();
    }
    a.visible = false;
    a.afterClose = () => {
      if (e.afterClose) {
        e.afterClose();
      }
      u();
    };
    c(a);
  }
  a.onOk = () => {
    let t;
    let n = e.onOk || e.onConfirm;
    if (n) {
      t = n();
    }
    if (t && t.then) {
      a.confirmLoading = true;
      c(a);
      t.then(
        () => {
          onCancel(true);
        },
        (e) => {
          console.error(e);
          a.confirmLoading = false;
          c(a);
        },
      );
    }
    if (!t) {
      onCancel(true);
    }
  };
  a = M(a);
  a.visible = true;
  c(a);
  RK.push(d);
  return {
    close: d,
    update: function (t) {
      c(
        (a = M(
          (a = r._(
            o._(r._({}, a), {
              title: e.title,
            }),
            t,
          )),
        )),
      );
    },
  };
};
const V = a.forwardRef(function (e, t) {
  let [visible, setVisible] = a.useState(true);
  let [s, setS] = a.useState(e);
  a.useImperativeHandle(t, () => ({
    update: setS,
    close: () => {
      setVisible(false);
    },
  }));
  return l.jsx(
    A,
    o._(
      r._(
        {
          unmountOnExit: true,
          simple: true,
        },
        s,
      ),
      {
        visible,
        onOk: function () {
          let e = s.onOk && s.onOk();
          if (e && e.then) {
            setS(
              o._(r._({}, s), {
                confirmLoading: true,
              }),
            );
            e.then(
              () => {
                setVisible(false);
              },
              (e) => {
                console.error(e);
                setS(
                  o._(r._({}, s), {
                    confirmLoading: false,
                  }),
                );
              },
            );
          }
          if (!e) {
            setVisible(false);
          }
        },
        onCancel: function () {
          if (s.onCancel) {
            s.onCancel();
          }
          setVisible(false);
        },
        children: s.content,
      },
    ),
  );
});
let H = null;
let L = 0;
if (!qD) {
  document.documentElement.addEventListener(
    "click",
    (e) => {
      H = {
        left: e.clientX,
        top: e.clientY,
      };
      setTimeout(() => {
        H = null;
      }, 100);
    },
    true,
  );
}
let F = {
  mask: true,
  maskClosable: true,
  mountOnEnter: true,
  escToExit: true,
  backspaceToExit: true,
  getPopupContainer: () => document.body,
  alignCenter: true,
};
export let A = a.forwardRef(function (e, t) {
  let d;
  let p;
  let f;
  let h = a.useContext(QO);
  let m = A_13(e, F, (d = h.componentConfig) == null ? undefined : d.Modal);
  let {
    className,
    style,
    visible,
    simple,
    title,
    children,
    cancelText,
    okText,
    okButtonProps,
    cancelButtonProps,
    getPopupContainer = () => document.body,
    footer,
    afterClose,
    confirmLoading,
    mountOnEnter,
    unmountOnExit,
    afterOpen,
    hideCancel,
    autoFocus,
    focusLock,
    maskClosable,
    mask,
    alignCenter,
    getChildrenPopupContainer,
    wrapClassName,
    escToExit,
    backspaceToExit,
    modalRender,
    duration = 400,
    maskStyle,
    wrapStyle,
    closeIcon,
    ariaModal = !((f = global.navigator) == null || (p = f.userAgent) == null
      ? undefined
      : p.includes("Chrome/131")),
  } = m;
  let ed = i._(m, [
    "className",
    "style",
    "visible",
    "simple",
    "title",
    "children",
    "cancelText",
    "okText",
    "okButtonProps",
    "cancelButtonProps",
    "getPopupContainer",
    "footer",
    "afterClose",
    "confirmLoading",
    "mountOnEnter",
    "unmountOnExit",
    "afterOpen",
    "hideCancel",
    "autoFocus",
    "focusLock",
    "maskClosable",
    "mask",
    "alignCenter",
    "getChildrenPopupContainer",
    "wrapClassName",
    "escToExit",
    "backspaceToExit",
    "modalRender",
    "duration",
    "maskStyle",
    "wrapStyle",
    "closeIcon",
    "ariaModal",
  ]);
  let epRef = a.useRef(null);
  let efRef = a.useRef(null);
  let [eh, setEh] = a.useState();
  let [ev, setEv] = a.useState();
  let eyRef = a.useRef(null);
  let ebRef = a.useRef(false);
  let exRef = a.useRef(false);
  let ewRef = a.useRef();
  if (!ewRef.current) {
    ewRef.current = L++;
  }
  let [loading, eO] = A_12(false, {
    defaultValue: false,
    value: confirmLoading,
  });
  let eC = h.getPrefixCls("modal", m.prefixCls);
  let { locale, rtl } = h;
  let e$ = !("closable" in m) || m.closable;
  let ek = a.useCallback(
    () => s.findDOMNode(getPopupContainer()),
    [getPopupContainer],
  );
  A_10(ek, {
    hidden: visible && mask,
  });
  let eA = () => {
    if (m.onCancel) {
      m.onCancel();
    }
  };
  let onKeyDown = (e) => {
    var t;
    var n;
    var r;
    if (escToExit && visible && e.key === gw.key) {
      e.stopPropagation();
      eA();
    }
    if (
      backspaceToExit &&
      visible &&
      e.key === Er.key &&
      !Array.from(
        (r =
          (t = epRef.current) == null || (n = t.querySelectorAll) == null
            ? undefined
            : n.call(t, "input,textarea")) != null
          ? r
          : [],
      ).some((e) => e === document.activeElement)
    ) {
      e.stopPropagation();
      eA();
    }
  };
  let e_Ref = a.useRef(false);
  let onClick = (e) => {
    let t;
    let { onConfirm, onOk } = m;
    let o = onOk || onConfirm;
    if (o) {
      t = o(e);
    }
    if (t && t.then) {
      eO(true);
      t.then(
        () => {
          eO(false);
        },
        (e) => {
          eO(false);
          console.error(e);
        },
      );
    }
  };
  a.useEffect(() => {
    let e = null;
    if (escToExit || backspaceToExit) {
      e = setTimeout(() => {
        if (gR(document.body, epRef.current)) {
          var e;
          if ((e = epRef.current) != null) {
            e.focus();
          }
        }
      });
    }
    return () => {
      if (e) {
        clearTimeout(e);
      }
    };
  }, [visible, escToExit, backspaceToExit]);
  a.useEffect(() => {
    if (visible && ev === undefined && epRef.current) {
      var e;
      let t = Number(
        (e = window.getComputedStyle(epRef.current, null)) == null
          ? undefined
          : e.zIndex,
      );
      if (!isNaN(t)) {
        setEv(t + 1);
      }
    }
  }, [visible, ev]);
  let modal = h.focusLock.modal;
  let eS = !!modal;
  let eD = Gv(modal) && modal.autoFocus;
  let eR = focusLock !== undefined ? focusLock : eS;
  let autoFocus_1 = autoFocus !== undefined ? autoFocus : eD;
  let ez = l.jsxs(
    Ay,
    o._(r._({}, h), {
      prefixCls: m.prefixCls || h.prefixCls,
      locale,
      zIndex: ev || 1050,
      getPopupContainer: (e) => {
        if (typeof getChildrenPopupContainer === "function") {
          return getChildrenPopupContainer(e);
        }
        return efRef.current;
      },
      children: [
        title &&
          l.jsx("div", {
            className: `${eC}-header`,
            children: l.jsx("div", {
              className: `${eC}-title`,
              id: `arco-dialog-${ewRef.current}`,
              children: title,
            }),
          }),
        l.jsx("div", {
          ref: efRef,
          className: `${eC}-content`,
          children,
        }),
        (() => {
          if (footer === null) {
            return;
          }
          let e = l.jsx(
            A_2,
            o._(
              r._(
                {
                  onClick: eA,
                },
                cancelButtonProps,
              ),
              {
                children: cancelText || locale.Modal.cancelText,
              },
            ),
          );
          let t = l.jsx(
            A_2,
            o._(
              r._(
                {
                  loading,
                  onClick,
                  type: "primary",
                },
                okButtonProps,
              ),
              {
                children: okText || locale.Modal.okText,
              },
            ),
          );
          let n = Tn(footer)
            ? footer(e, t)
            : footer ||
              l.jsxs(l.Fragment, {
                children: [!hideCancel && e, t],
              });
          return l.jsx("div", {
            className: `${eC}-footer`,
            children: n,
          });
        })(),
        e$ &&
          (closeIcon !== undefined
            ? l.jsx("span", {
                onClick: eA,
                className: `${eC}-close-icon`,
                children: closeIcon,
              })
            : l.jsx(A_8, {
                tabIndex: -1,
                onClick: eA,
                className: `${eC}-close-icon`,
                role: "button",
                "aria-label": "Close",
                children: l.jsx(y, {}),
              })),
      ],
    }),
  );
  let eV = title
    ? {
        "aria-labelledby": `arco-dialog-${ewRef.current}`,
      }
    : {};
  let eW = l.jsx(
    "div",
    o._(
      r._(
        {
          role: "dialog",
          "aria-modal": ariaModal,
        },
        eV,
      ),
      {
        className: A_1(
          eC,
          {
            [`${eC}-simple`]: simple,
            [`${eC}-rtl`]: rtl,
            [`${eC}-closable`]: e$,
          },
          className,
        ),
        style,
        children: eR
          ? l.jsx(u.Ay, {
              crossFrame: false,
              disabled: !visible,
              autoFocus: autoFocus_1,
              lockProps: {
                tabIndex: -1,
                onKeyDown,
              },
              children: ez,
            })
          : l.jsx(l.Fragment, {
              children: ez,
            }),
      },
    ),
  );
  let eB = (e) => {
    if (ebRef.current) {
      return;
    }
    let t = "";
    if (eyRef.current) {
      let n = e.getBoundingClientRect();
      let { left, top } = eyRef.current;
      t = `${left - n.left}px ${top - n.top}px`;
    }
    e.style.transformOrigin = t;
  };
  return l.jsx(A_3, {
    visible,
    forceRender: !mountOnEnter,
    getContainer: getPopupContainer,
    children: l.jsxs("div", {
      ref: t,
      children: [
        mask
          ? l.jsx(c.A, {
              in: visible,
              timeout: duration,
              appear: true,
              mountOnEnter,
              classNames: "fadeModal",
              unmountOnExit,
              onEnter: (e) => {
                e.style.display = "block";
              },
              onExited: (e) => {
                e.style.display = "none";
              },
              children: l.jsx("div", {
                "aria-hidden": true,
                className: `${eC}-mask`,
                style: maskStyle,
              }),
            })
          : null,
        l.jsx(
          "div",
          o._(
            r._(
              {},
              A_9(ed, [
                "content",
                "icon",
                "showIcon",
                "isNotice",
                "noticeType",
                "onCancel",
                "onOk",
                "onConfirm",
                "closable",
                "prefixCls",
              ]),
            ),
            {
              tabIndex: eR && autoFocus_1 ? null : -1,
              ref: epRef,
              className: A_1(
                `${eC}-wrapper`,
                {
                  [`${eC}-wrapper-no-mask`]: !mask,
                  [`${eC}-wrapper-align-center`]: alignCenter,
                  [`${eC}-wrapper-rtl`]: rtl,
                },
                wrapClassName,
              ),
              style: o._(r._({}, wrapStyle || {}), {
                display: visible || eh ? "block" : "none",
                overflow: !visible && eh ? "hidden" : "",
              }),
              onKeyDown: eR && autoFocus_1 ? null : onKeyDown,
              onMouseDown: (e) => {
                exRef.current = e.target === e.currentTarget;
              },
              onClick: (e) => {
                if (exRef.current) {
                  exRef.current = false;
                  if (
                    !e_Ref.current &&
                    maskClosable &&
                    mask &&
                    e.target === e.currentTarget
                  ) {
                    setTimeout(() => {
                      eA();
                    }, 100);
                  }
                }
              },
              children: l.jsx(c.A, {
                in: visible,
                timeout: duration,
                appear: true,
                classNames: "zoomModal",
                unmountOnExit,
                mountOnEnter,
                onEnter: (e) => {
                  setEh(true);
                  eyRef.current = H;
                  ebRef.current = !!e.style.transformOrigin;
                  eB(e);
                },
                onEntered: (e) => {
                  eB(e);
                  eyRef.current = null;
                  if (afterOpen) {
                    afterOpen();
                  }
                },
                onExit: () => {
                  e_Ref.current = true;
                },
                onExited: (e) => {
                  setEh(false);
                  eB(e);
                  if (afterClose) {
                    afterClose();
                  }
                  e_Ref.current = false;
                },
                children: a.cloneElement(
                  Tn(modalRender) ? modalRender(eW) : eW,
                  {
                    onMouseDown: () => {
                      exRef.current = false;
                    },
                    onMouseUp: () => {
                      exRef.current = false;
                    },
                  },
                ),
              }),
            },
          ),
        ),
      ],
    }),
  });
});
A.displayName = "Modal";
A.config = iv;
A.confirm = (e) =>
  T(
    r._(
      {
        okButtonProps: {
          status: "danger",
        },
      },
      e,
    ),
  );
A.useModal = function () {
  let e = a.createRef();
  let t = l.jsx(A_11, {
    ref: e,
  });
  let n = 0;
  function i(t) {
    let i;
    n += 1;
    let s = a.createRef();
    let c = l.jsx(
      V,
      o._(
        r._(
          {
            ref: s,
          },
          M(t),
        ),
        {
          afterClose: function () {
            let n;
            if (t.afterClose) {
              t.afterClose();
            }
            if ((n = e.current) != null) {
              n.removeInstance(c);
            }
          },
        },
      ),
      n,
    );
    function u() {
      let e;
      if ((e = s.current) != null) {
        e.close();
      }
    }
    if ((i = e.current) != null) {
      i.addInstance(c);
    }
    RK.push(u);
    return {
      close: u,
      update: function (e) {
        let t;
        if ((t = s.current) != null) {
          t.update(e);
        }
      },
    };
  }
  let s = {
    confirm: (e) => i(r._({}, e)),
  };
  ["info", "success", "warning", "error"].forEach((e) => {
    s[e] = (t) =>
      i(
        o._(r._({}, t), {
          isNotice: true,
          noticeType: e,
        }),
      );
  });
  return [s, t];
};
["info", "success", "warning", "error"].forEach((e) => {
  A[e] = (t) =>
    T(
      o._(r._({}, t), {
        isNotice: true,
        noticeType: e,
      }),
    );
});
A.destroyAll = () => {
  while (RK.length) {
    let e = RK.pop();
    if (e) {
      e();
    }
  }
};
