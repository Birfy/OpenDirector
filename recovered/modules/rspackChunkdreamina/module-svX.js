import n from "oa";
import t from "bk";
import a from "qa";
import o from "z8";
import "siR";
import l from "F6v";
import _s from "xb";
import u from "hr";
import d from "MK";
import { A } from "./module-vLV.js";
const v = "yyyy-MM-dd hh:mm";
function g(e) {
  return e.ownerDocument.body;
}
function _(e) {
  const { details } = e;
  const i = d.Ay.t(
    "web_teams_multiple_membership_popup_title",
    {},
    "有效期详情",
  );
  const n = d.Ay.t("web_teams_multiple_membership_popup_seats", {}, "席位");
  const t = d.Ay.t(
    "web_teams_multiple_membership_popup_valid_time",
    {},
    "有效期",
  );
  return o.jsxs("div", {
    className: A.detailPopoverContent,
    children: [
      o.jsx("div", {
        className: A.title,
        children: i,
      }),
      o.jsx("div", {
        className: A.scrollView,
        children: o.jsx("div", {
          className: A.detailList,
          children: details.map((e, r) =>
            o.jsxs(
              "div",
              {
                className: A.detailItem,
                children: [
                  o.jsxs("div", {
                    className: A.detailRow,
                    children: [
                      o.jsx("div", {
                        className: A.detailLabel,
                        children: n,
                      }),
                      o.jsx("div", {
                        className: A.detailValue,
                        children: e.seatCount,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: A.detailRow,
                    children: [
                      o.jsx("div", {
                        className: A.detailLabel,
                        children: t,
                      }),
                      o.jsx("div", {
                        className: _s(A.detailValue, A.validityRange),
                        children: ""
                          .concat(u.i(v, e.beginTimeMs), " ～ ")
                          .concat(u.i(v, e.endTimeMs)),
                      }),
                    ],
                  }),
                ],
              },
              ""
                .concat(e.seatCount, ":")
                .concat(e.beginTimeMs, ":")
                .concat(e.endTimeMs, ":")
                .concat(r),
            ),
          ),
        }),
      }),
    ],
  });
}
export function q(e) {
  const {
    children,
    className,
    details = [],
    getPopupContainer = g,
    position = "bottom",
    style,
  } = e;
  const v = a._(e, [
    "children",
    "className",
    "details",
    "getPopupContainer",
    "position",
    "style",
  ]);
  if (details.length === 0) {
    return o.jsx(o.Fragment, {
      children,
    });
  }
  return o.jsx(
    l.A,
    t._(n._({}, v), {
      className: _s(A.popover, className),
      content: o.jsx(_, {
        details,
      }),
      getPopupContainer,
      popupHoverStay: true,
      position,
      showArrow: false,
      style: t._(n._({}, style), {
        maxWidth: 360,
      }),
      trigger: "hover",
      children,
    }),
  );
}
export { D } from "./module-pm_2.js";
