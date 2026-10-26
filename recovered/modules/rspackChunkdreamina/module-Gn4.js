import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import l from "bT";
import _s from "xb";
import u from "Qp";
import d from "zQo";
import { fs } from "./module-SNb.js";
import { X } from "./module-dt_2.js";
export var V = l.memo(
  l.forwardRef(function (e, n) {
    let t;
    const {
      className,
      compact = false,
      dropdownTitle,
      dropdownRender,
      triggerProps,
      triggerElement,
    } = e;
    const y = o._(e, [
      "className",
      "compact",
      "dropdownTitle",
      "dropdownRender",
      "triggerProps",
      "triggerElement",
    ]);
    const xRef = l.useRef(null);
    l.useImperativeHandle(n, () => xRef.current);
    const N =
      (t = y["aria-label"]) != null
        ? t
        : typeof dropdownTitle === "string"
          ? dropdownTitle
          : typeof y.placeholder === "string"
            ? y.placeholder
            : undefined;
    u.P(xRef, N, y["aria-labelledby"]);
    const triggerElement_1 = l.useMemo(() => {
      var e;
      if (triggerElement && l.isValidElement(triggerElement)) {
        return l.cloneElement(triggerElement, {
          "aria-label":
            (e = triggerElement.props["aria-label"]) != null ? e : N,
        });
      }
      return triggerElement;
    }, [triggerElement, N]);
    const triggerProps_1 = l.useMemo(
      () =>
        a._(
          r._(
            {
              position: "bl",
              popupAlign: {
                top: fs,
                bottom: fs,
              },
              autoAlignPopupWidth: false,
            },
            triggerProps,
          ),
          {
            className: _s(
              "trigger-Cxh49O",
              triggerProps == null ? undefined : triggerProps.className,
            ),
          },
        ),
      [triggerProps],
    );
    const dropdownRender_1 = l.useMemo(() => {
      if (dropdownTitle) {
        return (e) =>
          i.jsxs(i.Fragment, {
            children: [
              i.jsx(X, {
                className: "dropdown-title-Z_7OuM",
                children: dropdownTitle,
              }),
              dropdownRender ? dropdownRender(e) : e,
            ],
          });
      }
      return dropdownRender;
    }, [dropdownTitle, dropdownRender]);
    return i.jsx(
      d.U,
      a._(
        r._(
          {
            ref: xRef,
          },
          y,
        ),
        {
          compact,
          className: _s(className, "select-R1ma8l", {
            "compact-IsT2NP": compact,
          }),
          triggerProps: triggerProps_1,
          triggerElement: triggerElement_1,
          dropdownRender: dropdownRender_1,
        },
      ),
    );
  }),
);
