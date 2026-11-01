import n from "oa";
import r from "bk";
import o from "qa";
import i from "z8";
import a from "bT";
import u from "zP7";
import s from "u7";
import c from "PC";
import d from "mf";
import p from "Ww";
import f from "R8";
import h from "va";
import v from "mY";
import m from "a3";
import g from "aZD";
import x from "K6G";
import y from "V9";
import _ from "geN";
import A from "k6B";
import b from "Sc";
let C = {
  placement: "right",
  width: 250,
  height: 250,
  escToExit: true,
  mask: true,
  closable: true,
  maskClosable: true,
  mountOnEnter: true,
  getPopupContainer: () => document.body,
};
let k = a.forwardRef(function (e, t) {
  let l = a.useContext(v.QO);
  let { locale, getPrefixCls, componentConfig, rtl } = l;
  let N = A.A(
    e,
    C,
    componentConfig == null ? undefined : componentConfig.Drawer,
  );
  let {
    style,
    className,
    children,
    wrapClassName,
    maskStyle,
    headerStyle,
    bodyStyle,
    title,
    footer,
    okText,
    cancelText,
    width,
    height,
    placement,
    mask,
    visible,
    closable,
    maskClosable,
    confirmLoading,
    mountOnEnter,
    unmountOnExit,
    afterOpen,
    afterClose,
    getPopupContainer,
    escToExit,
    getChildrenPopupContainer,
    focusLock,
    autoFocus,
    okButtonProps,
    cancelButtonProps,
  } = N;
  let eo = o._(N, [
    "style",
    "className",
    "children",
    "wrapClassName",
    "maskStyle",
    "headerStyle",
    "bodyStyle",
    "title",
    "footer",
    "okText",
    "cancelText",
    "width",
    "height",
    "placement",
    "mask",
    "visible",
    "closable",
    "maskClosable",
    "confirmLoading",
    "mountOnEnter",
    "unmountOnExit",
    "afterOpen",
    "afterClose",
    "getPopupContainer",
    "escToExit",
    "getChildrenPopupContainer",
    "focusLock",
    "autoFocus",
    "okButtonProps",
    "cancelButtonProps",
  ]);
  let eiRef = a.useRef(null);
  let eaRef = a.useRef(null);
  let [eu, setEu] = a.useState(false);
  let [ec, setEc] = a.useState();
  let ep = getPrefixCls("drawer");
  let efRef = a.useRef(false);
  let [eh, setEh] = a.useState(false);
  let em = a.useCallback(() => {
    let e = getPopupContainer && getPopupContainer();
    return c.findDOMNode(e) || document.body;
  }, [getPopupContainer]);
  let eg = a.useMemo(() => !m.qD && em() === document.body, [eu, em]);
  _.A(em, {
    hidden: visible && mask,
  });
  a.useImperativeHandle(t, () => eiRef.current);
  a.useEffect(() => {
    if (visible && N.getPopupContainer) {
      setEu(true);
    }
  }, []);
  a.useEffect(() => {
    if (visible && ec === undefined && eiRef.current) {
      var e;
      let t = Number(
        (e = window.getComputedStyle(eiRef.current, null)) == null
          ? undefined
          : e.zIndex,
      );
      if (!isNaN(t)) {
        setEc(t + 1);
      }
    }
  }, [visible, ec]);
  a.useEffect(() => {
    let e = (e) => {
      if (escToExit && e && e.key === x.gw.key && N.onCancel) {
        N.onCancel(e);
      }
    };
    if (visible) {
      m.on(document, "keydown", e);
    }
    return () => {
      m.AU(document, "keydown", e);
    };
  }, [visible, escToExit]);
  let ex = i.jsxs("div", {
    className: `${ep}-scroll`,
    children: [
      title !== null &&
        i.jsx("div", {
          className: `${ep}-header`,
          style: headerStyle,
          children: i.jsx("div", {
            className: `${ep}-header-title`,
            children: title,
          }),
        }),
      closable &&
        i.jsx(g.A, {
          onClick: N.onCancel,
          className: `${ep}-close-icon`,
          children: i.jsx(d.A, {}),
        }),
      i.jsx("div", {
        ref: eaRef,
        style: bodyStyle,
        className: p.A(`${ep}-content`, {
          [`${ep}-content-nofooter`]: footer === null,
          [`${ep}-content-noheader`]: title === null,
        }),
        children: i.jsx(
          v.Ay,
          r._(n._({}, l), {
            zIndex: ec || 1050,
            getPopupContainer: (e) => {
              if (typeof getChildrenPopupContainer === "function") {
                return getChildrenPopupContainer(e);
              }
              return eaRef.current;
            },
            children,
          }),
        ),
      }),
      footer !== null &&
        (footer
          ? i.jsx("div", {
              className: `${ep}-footer`,
              children: footer,
            })
          : i.jsxs("div", {
              className: `${ep}-footer`,
              children: [
                i.jsx(
                  f.A,
                  r._(
                    n._(
                      {
                        onClick: N.onCancel,
                      },
                      cancelButtonProps,
                    ),
                    {
                      children: cancelText || locale.Drawer.cancelText,
                    },
                  ),
                ),
                i.jsx(
                  f.A,
                  r._(
                    n._(
                      {
                        type: "primary",
                        loading: confirmLoading,
                        onClick: N.onOk,
                      },
                      okButtonProps,
                    ),
                    {
                      children: okText || locale.Drawer.okText,
                    },
                  ),
                ),
              ],
            })),
    ],
  });
  let drawer = l.focusLock.drawer;
  let e_ = !!drawer;
  let eA = y.Gv(drawer) && drawer.autoFocus;
  let children_1 = (focusLock !== undefined ? focusLock : e_)
    ? i.jsx(s.Ay, {
        as: "span",
        disabled: !eh,
        crossFrame: false,
        autoFocus: autoFocus !== undefined ? autoFocus : eA,
        children: ex,
      })
    : ex;
  return i.jsx(h.A, {
    forceRender: !mountOnEnter,
    visible,
    getContainer: getPopupContainer,
    children: i.jsxs(
      "div",
      r._(n._({}, b.A(eo, ["onCancel", "onOk"])), {
        ref: eiRef,
        className: p.A(
          `${ep}-wrapper`,
          {
            [`${ep}-no-mask`]: !mask,
            [`${ep}-wrapper-hide`]: !visible,
          },
          wrapClassName,
        ),
        style: eg
          ? {
              position: "fixed",
            }
          : {
              zIndex: "inherit",
              position: "absolute",
            },
        children: [
          mask
            ? i.jsx(u.A, {
                in: visible,
                appear: true,
                timeout: 300,
                classNames: "fadeInStandard",
                mountOnEnter,
                unmountOnExit,
                children: i.jsx("div", {
                  className: `${ep}-mask`,
                  style: maskStyle,
                  onClick: (e) => {
                    if (!efRef.current && maskClosable && N.onCancel) {
                      N.onCancel(e);
                    }
                  },
                }),
              })
            : null,
          i.jsx(u.A, {
            in: visible,
            appear: true,
            timeout: 300,
            classNames: {
              top: "slideTop",
              bottom: "slideBottom",
              left: "slideLeft",
              right: "slideRight",
            }[placement],
            mountOnEnter,
            unmountOnExit,
            onEnter: (e) => {
              e.parentNode.style.display = "block";
              efRef.current = false;
            },
            onEntered: () => {
              setEh(true);
              if (afterOpen) {
                afterOpen();
              }
            },
            onExit: () => {
              setEh(false);
              efRef.current = true;
            },
            onExited: (e) => {
              efRef.current = false;
              e.parentNode.style.display = "";
              if (afterClose) {
                afterClose();
              }
            },
            children: i.jsx("div", {
              className: p.A(ep, className, {
                [`${ep}-rtl`]: rtl,
              }),
              style: Object.assign(
                placement === "left" || placement === "right"
                  ? {
                      width,
                    }
                  : {
                      height,
                    },
                {
                  [placement]: 0,
                },
                style,
              ),
              children: i.jsx("div", {
                className: `${ep}-inner`,
                children: i.jsx(
                  v.Ay,
                  r._(n._({}, l), {
                    zIndex: ec || 1050,
                    children: children_1,
                  }),
                ),
              }),
            }),
          }),
        ],
      }),
    ),
  });
});
export { k as A };
k.displayName = "Drawer";
