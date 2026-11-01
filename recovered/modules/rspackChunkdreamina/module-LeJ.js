import i from "PC";
import l from "bT";
import a from "zP7";
import c from "u7";
import u from "JXb";
import { A as A_1 } from "./module-puV.js";
import { gR, qD } from "./module-eYi.js";
import { gw } from "./module-uRm.js";
import { A as A_2 } from "./module-RE.js";
import { X } from "./module-Z6D.js";
import x from "ZKB";
import E from "Uww";
import C from "UC";
import w from "usi";
import { Q as Q_1, RK, iv, kk } from "./module-rF.js";
import { Ay, QO } from "./module-ce.js";
import { A as A_3 } from "./module-Cu.js";
import { Gv, Tn } from "./module-Pl5.js";
import { A as A_4 } from "./module-hn.js";
import { A as A_5 } from "./module-iNu.js";
import { A as A_6 } from "./module-To_2.js";
import { A as A_7 } from "./module-Bd_2.js";
let r;
let o;
r = function (e, t) {
  return (r =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const m = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  r(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
const v = ((e) => {
  function t() {
    const t = (e !== null && e.apply(this, arguments)) || this;
    t.container = null;
    return t;
  }
  m(t, e);
  t.prototype.componentDidMount = function () {
    const e = this;
    this.createContainer();
    this.timer = setTimeout(() => {
      if (!e.container) {
        e.createContainer();
      }
    });
  };
  t.prototype.componentWillUnmount = function () {
    clearTimeout(this.timer);
  };
  t.prototype.createContainer = function () {
    const getContainer = this.props.getContainer;
    this.container = getContainer && getContainer();
    this.forceUpdate();
  };
  t.prototype.render = function () {
    const children = this.props.children;
    if (this.container) {
      return i.createPortal(children, this.container);
    }
    return null;
  };
  return t;
})(l.Component);
o = function (e, t) {
  return (o =
    Object.setPrototypeOf ||
    ({
      __proto__: [],
    } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (const n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    })(e, t);
};
const h = (e, t) => {
  if (typeof t !== "function" && t !== null) {
    throw TypeError(
      "Class extends value " + String(t) + " is not a constructor or null",
    );
  }
  function n() {
    this.constructor = e;
  }
  o(e, t);
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
};
const g = ((e) => {
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  h(t, e);
  t.prototype.componentWillUnmount = function () {
    this.instance = null;
  };
  t.prototype.render = function () {
    const e = this;
    const props = this.props;
    const t_forceRender = props.forceRender;
    const t_visible = props.visible;
    if (t_forceRender || t_visible || this.instance) {
      return l.createElement(v, {
        ref: function (t) {
          return (e.instance = t);
        },
        ...this.props,
      });
    }
    return null;
  };
  t.displayName = "Portal";
  t.defaultProps = {
    getContainer: function () {
      return document.body;
    },
  };
  return t;
})(l.Component);
function A(e) {
  const t = Q_1();
  const t_prefixCls = t.prefixCls;
  const t_simple = t.simple;
  return l.createElement(
    Q,
    {
      prefixCls: t_prefixCls,
      simple: t_simple,
      ...e,
    },
    e.content,
  );
}
const N = (e) => {
  let e_icon = e.icon;
  if (
    !e_icon &&
    e_icon !== null &&
    ((e_icon = l.createElement(C.A, null)), e.isNotice)
  ) {
    switch (e.noticeType) {
      case "info":
        e_icon = l.createElement(x.A, null);
        break;
      case "success":
        e_icon = l.createElement(E.A, null);
        break;
      case "warning":
        e_icon = l.createElement(C.A, null);
        break;
      case "error":
        e_icon = l.createElement(w.A, null);
    }
  }
  if (e.isNotice) {
    e.hideCancel = true;
  }
  e.title =
    e_icon === null && e.title === null
      ? null
      : l.createElement("span", null, e_icon, e.title);
  return e;
};
const k = (e, t) => {
  let n;
  const r = document.createElement("div");
  document.body.appendChild(r);
  const o = kk();
  var i =
    t ||
    ((e) => {
      const t = l.createElement(
        Ay,
        {
          ...o,
        },
        l.createElement(A, {
          ...e,
          onCancel,
        }),
      );
      if (n) {
        n.render(t);
      } else {
        n = X(t, r);
      }
    });
  var a = {
    ...e,
    visible: false,
  };
  function c() {
    n = n == null ? undefined : n._unmount();
    if (r.parentNode) {
      r.parentNode.removeChild(r);
    }
    for (let e = 0; e < RK.length; e++) {
      if (RK[e] === s) {
        RK.splice(e, 1);
        break;
      }
    }
  }
  function onCancel(t) {
    if (!t && e.onCancel) {
      e.onCancel();
    }
    a.visible = false;
    a.afterClose = function () {
      if (e.afterClose) {
        e.afterClose();
      }
      c();
    };
    i(a);
  }
  function s() {
    a.visible = false;
    a.afterClose = function () {
      if (e.afterClose) {
        e.afterClose();
      }
      c();
    };
    i(a);
  }
  a.onOk = function () {
    let t;
    const n = e.onOk || e.onConfirm;
    if (n) {
      t = n();
    }
    if (t && t.then) {
      a.confirmLoading = true;
      i(a);
      t.then(
        () => {
          onCancel(true);
        },
        (e) => {
          console.error(e);
          a.confirmLoading = false;
          i(a);
        },
      );
    }
    if (!t) {
      onCancel(true);
    }
  };
  a = N(a);
  a.visible = true;
  i(a);
  RK.push(s);
  return {
    close: s,
    update: function (t) {
      i(
        (a = N(
          (a = {
            ...a,
            title: e.title,
            ...t,
          }),
        )),
      );
    },
  };
};
const M = (e, t) => {
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
const _ = l.forwardRef(function (e, t) {
  const n = M(l.useState(true), 2);
  const visible = n[0];
  const o = n[1];
  const i = M(l.useState(e), 2);
  const a = i[0];
  const c = i[1];
  l.useImperativeHandle(t, function () {
    return {
      update: function (e) {
        c(e);
      },
      close: function () {
        o(false);
      },
    };
  });
  return l.createElement(
    Q,
    {
      unmountOnExit: true,
      simple: true,
      ...a,
      visible,
      onOk: function () {
        const e = a.onOk && a.onOk();
        if (e && e.then) {
          c(function (e) {
            return {
              ...e,
              confirmLoading: true,
            };
          });
          e.then(
            () => {
              o(false);
            },
            (e) => {
              console.error(e);
              c(function (e) {
                return {
                  ...e,
                  confirmLoading: false,
                };
              });
            },
          );
        }
        if (!e) {
          o(false);
        }
      },
      onCancel: function () {
        if (a.onCancel) {
          a.onCancel();
        }
        o(false);
      },
    },
    a.content,
  );
});
const G = (e, t) => {
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
let W = null;
let K = 0;
if (!qD) {
  document.documentElement.addEventListener(
    "click",
    function (e) {
      W = {
        left: e.clientX,
        top: e.clientY,
      };
      setTimeout(() => {
        W = null;
      }, 100);
    },
    true,
  );
}
const B = {
  mask: true,
  maskClosable: true,
  mountOnEnter: true,
  escToExit: true,
  getPopupContainer: function () {
    return document.body;
  },
  alignCenter: true,
};
const U = l.forwardRef(function (e, ref) {
  let n;
  let r;
  let o;
  let m;
  let v;
  let h;
  let x;
  const E = l.useContext(QO);
  const C = A_7(e, B, (x = E.componentConfig) == null ? undefined : x.Modal);
  const {
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
    getPopupContainer = function () {
      return document.body;
    },
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
    modalRender,
    maskStyle,
    wrapStyle,
    closeIcon,
    ...rest
  } = C;
  const edRef = l.useRef(null);
  const emRef = l.useRef(null);
  const ev = G(l.useState(), 2);
  const eh = ev[0];
  const ey = ev[1];
  const eg = G(l.useState(), 2);
  const eb = eg[0];
  const ex = eg[1];
  const eERef = l.useRef(null);
  const eCRef = l.useRef(false);
  const ewRef = l.useRef(false);
  const eORef = l.useRef();
  if (!eORef.current) {
    eORef.current = K++;
  }
  const eS = G(
    A_6(false, {
      defaultValue: false,
      value: confirmLoading,
    }),
    2,
  );
  const loading = eS[0];
  const eA = eS[1];
  const eN = E.getPrefixCls("modal", C.prefixCls);
  const E_locale = E.locale;
  const E_rtl = E.rtl;
  const ej = !simple;
  const eR = "closable" in C ? C.closable : ej;
  n = l.useCallback(
    function () {
      return i.findDOMNode(getPopupContainer());
    },
    [getPopupContainer],
  );
  r = visible && mask;
  o = l.useRef(false);
  m = l.useRef({});
  v = function () {
    const e = n();
    if (e && e.style.overflow !== "hidden") {
      const t = e.style;
      o.current = true;
      const r =
        e.tagName === "BODY"
          ? window.innerWidth -
            (document.body.clientWidth || document.documentElement.clientWidth)
          : e.offsetWidth - e.clientWidth;
      if (r) {
        m.current.width = t.width;
        e.style.width = "calc(" + (e.style.width || "100%") + " - " + r + "px)";
      }
      m.current.overflow = t.overflow;
      e.style.overflow = "hidden";
    }
  };
  h = function () {
    if (o.current && n()) {
      const e = n();
      const t = m.current;
      Object.keys(t).forEach((n) => (e.style[n] = t[n]));
    }
    o.current = false;
    m.current = {};
  };
  l.useEffect(
    function () {
      if (r) {
        v();
      } else {
        h();
      }
      return function () {
        h();
      };
    },
    [n, r],
  );
  const eI = function () {
    if (C.onCancel) {
      C.onCancel();
    }
  };
  const onKeyDown = function (e) {
    if (escToExit && visible && e.key === gw.key) {
      e.stopPropagation();
      eI();
    }
  };
  const eMRef = l.useRef(false);
  const onClick = function (e) {
    let t;
    const C_onConfirm = C.onConfirm;
    const r = C.onOk || C_onConfirm;
    if (r) {
      t = r(e);
    }
    if (t && t.then) {
      eA(true);
      t.then(
        () => {
          eA(false);
        },
        (e) => {
          eA(false);
          console.error(e);
        },
      );
    }
  };
  l.useEffect(
    function () {
      let e = null;
      if (escToExit) {
        e = setTimeout(() => {
          let e;
          if (gR(document.body, edRef.current)) {
            if ((e = edRef.current) != null) {
              e.focus();
            }
          }
        });
      }
      return function () {
        if (e) {
          clearTimeout(e);
        }
      };
    },
    [visible, escToExit],
  );
  l.useEffect(
    function () {
      let e;
      if (visible && eb === undefined && edRef.current) {
        const t = +((e = window.getComputedStyle(edRef.current, null)) == null
          ? undefined
          : e.zIndex);
        if (!isNaN(t)) {
          ex(t + 1);
        }
      }
    },
    [visible, eb],
  );
  const modal = E.focusLock.modal;
  const eD = !!modal;
  const ez = Gv(modal) && modal.autoFocus;
  const eL = focusLock !== undefined ? focusLock : eD;
  const autoFocus_1 = autoFocus !== undefined ? autoFocus : ez;
  const eG = l.createElement(
    Ay,
    {
      ...E,
      prefixCls: C.prefixCls || E.prefixCls,
      locale: E_locale,
      zIndex: eb || 1050,
      getPopupContainer: function (e) {
        if (typeof getChildrenPopupContainer === "function") {
          return getChildrenPopupContainer(e);
        }
        return emRef.current;
      },
    },
    title &&
      l.createElement(
        "div",
        {
          className: eN + "-header",
        },
        l.createElement(
          "div",
          {
            className: eN + "-title",
            id: "arco-dialog-" + eORef.current,
          },
          title,
        ),
      ),
    l.createElement(
      "div",
      {
        ref: emRef,
        className: eN + "-content",
      },
      children,
    ),
    (() => {
      if (footer !== null) {
        const e = l.createElement(
          A_2,
          {
            onClick: eI,
            ...cancelButtonProps,
          },
          cancelText || E_locale.Modal.cancelText,
        );
        const t = l.createElement(
          A_2,
          {
            loading,
            onClick,
            type: "primary",
            ...okButtonProps,
          },
          okText || E_locale.Modal.okText,
        );
        const n = Tn(footer)
          ? footer(e, t)
          : footer || l.createElement(l.Fragment, null, !hideCancel && e, t);
        return l.createElement(
          "div",
          {
            className: eN + "-footer",
          },
          n,
        );
      }
    })(),
    eR &&
      (closeIcon !== undefined
        ? l.createElement(
            "span",
            {
              onClick: eI,
              className: eN + "-close-icon",
            },
            closeIcon,
          )
        : l.createElement(
            A_3,
            {
              tabIndex: -1,
              onClick: eI,
              className: eN + "-close-icon",
              role: "button",
              "aria-label": "Close",
            },
            l.createElement(u.A, null),
          )),
  );
  const eW = title
    ? {
        "aria-labelledby": "arco-dialog-" + eORef.current,
      }
    : {};
  const eK = l.createElement(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      ...eW,
      className: A_1(
        eN,
        {
          [eN + "-simple"]: simple,
          [eN + "-rtl"]: E_rtl,
        },
        className,
      ),
      style,
    },
    eL
      ? l.createElement(
          c.Ay,
          {
            crossFrame: false,
            disabled: !visible,
            autoFocus: autoFocus_1,
            lockProps: {
              tabIndex: -1,
              onKeyDown,
            },
          },
          eG,
        )
      : l.createElement(l.Fragment, null, eG),
  );
  const eB = (e) => {
    if (!eCRef.current) {
      let t = "";
      if (eERef.current) {
        const n = e.getBoundingClientRect();
        const r = eERef.current;
        const o = r.left;
        const i = r.top;
        t = `${o - n.left}px ${i - n.top}px`;
      }
      e.style.transformOrigin = t;
    }
  };
  return l.createElement(
    g,
    {
      visible,
      forceRender: !mountOnEnter,
      getContainer: getPopupContainer,
    },
    l.createElement(
      "div",
      {
        ref,
      },
      mask
        ? l.createElement(
            a.A,
            {
              in: visible,
              timeout: 400,
              appear: true,
              mountOnEnter,
              classNames: "fadeModal",
              unmountOnExit,
              onEnter: function (e) {
                e.style.display = "block";
              },
              onExited: function (e) {
                e.style.display = "none";
              },
            },
            l.createElement("div", {
              "aria-hidden": true,
              className: eN + "-mask",
              style: maskStyle,
            }),
          )
        : null,
      l.createElement(
        "div",
        {
          ...A_4(rest, [
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
          tabIndex: eL && autoFocus_1 ? null : -1,
          ref: edRef,
          className: A_1(
            eN + "-wrapper",
            {
              [eN + "-wrapper-no-mask"]: !mask,
              [eN + "-wrapper-align-center"]: alignCenter,
              [eN + "-wrapper-rtl"]: E_rtl,
            },
            wrapClassName,
          ),
          style: {
            ...(wrapStyle || {}),
            display: visible || eh ? "block" : "none",
            overflow: !visible && eh ? "hidden" : "",
          },
          onKeyDown: eL && autoFocus_1 ? null : onKeyDown,
          onMouseDown: function (e) {
            ewRef.current = e.target === e.currentTarget;
          },
          onClick: function (e) {
            if (ewRef.current) {
              ewRef.current = false;
              if (
                !eMRef.current &&
                maskClosable &&
                mask &&
                e.target === e.currentTarget
              ) {
                setTimeout(() => {
                  eI();
                }, 100);
              }
            }
          },
        },
        l.createElement(
          a.A,
          {
            in: visible,
            timeout: 400,
            appear: true,
            classNames: "zoomModal",
            unmountOnExit,
            mountOnEnter,
            onEnter: function (e) {
              ey(true);
              eERef.current = W;
              eCRef.current = !!e.style.transformOrigin;
              eB(e);
            },
            onEntered: function (e) {
              eB(e);
              eERef.current = null;
              if (afterOpen) {
                afterOpen();
              }
            },
            onExit: function () {
              eMRef.current = true;
            },
            onExited: function (e) {
              ey(false);
              eB(e);
              if (afterClose) {
                afterClose();
              }
              eMRef.current = false;
            },
          },
          l.cloneElement(Tn(modalRender) ? modalRender(eK) : eK, {
            onMouseDown: function () {
              ewRef.current = false;
            },
            onMouseUp: function () {
              ewRef.current = false;
            },
          }),
        ),
      ),
    ),
  );
});
U.displayName = "Modal";
U.config = iv;
U.confirm = function (e) {
  return k(e);
};
U.useModal = function () {
  const eRef = l.useRef();
  const t = l.createElement(A_5, {
    ref: eRef,
  });
  let n = 0;
  function r(t) {
    n += 1;
    let r;
    const o = l.createRef();
    let i = {
      ...t,
    };
    var a = l.createElement(_, {
      key: n,
      ref: o,
      ...N({
        ...t,
      }),
      afterClose: function () {
        let n;
        if (t.afterClose) {
          t.afterClose();
        }
        if ((n = eRef.current) != null) {
          n.removeInstance(a);
        }
      },
    });
    function c() {
      let e;
      if ((e = o.current) != null) {
        e.close();
      }
    }
    if ((r = eRef.current) != null) {
      r.addInstance(a);
    }
    RK.push(c);
    return {
      close: c,
      update: function (e) {
        let t;
        i = {
          ...i,
          ...e,
        };
        if ((t = o.current) != null) {
          t.update(
            N({
              ...i,
            }),
          );
        }
      },
    };
  }
  const o = {
    confirm: function (e) {
      return r({
        ...e,
      });
    },
  };
  ["info", "success", "warning", "error"].forEach((e) => {
    o[e] = function (t) {
      return r({
        ...t,
        isNotice: true,
        noticeType: e,
      });
    };
  });
  return [o, t];
};
["info", "success", "warning", "error"].forEach((e) => {
  U[e] = function (t) {
    return k({
      ...t,
      isNotice: true,
      noticeType: e,
    });
  };
});
U.destroyAll = function () {
  while (RK.length) {
    const e = RK.pop();
    if (e) {
      e();
    }
  }
};
var Q = U;
var q = Q;
export { q as A };
