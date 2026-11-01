import n from "z8";
import "xj";
import t from "R8";
import o from "bT";
import r from "Qey";
import s from "yw";
import { A } from "./module-j7F.js";
export function Q(e) {
  const {
    name,
    sectionId,
    showMore,
    showHeading = true,
    children,
    onViewMore,
  } = e;
  const id = "create-inspiration-section-".concat(o.useId());
  const onClick = o.useCallback(() => {
    onViewMore(sectionId);
  }, [onViewMore, sectionId]);
  return n.jsxs("section", {
    className: A.inspirationSection,
    "aria-labelledby": showHeading ? id : undefined,
    "aria-label": showHeading ? undefined : name,
    children: [
      showHeading
        ? n.jsx("header", {
            className: A.sectionHeader,
            children: n.jsx("h2", {
              id,
              className: A.sectionTitle,
              children: name,
            }),
          })
        : null,
      n.jsx("div", {
        className: A.inspirationViewport,
        children: n.jsxs("div", {
          className: A.inspirationClip,
          children: [
            children,
            showMore
              ? n.jsx("div", {
                  className: A.inspirationFooter,
                  children: n.jsx(t.A, {
                    htmlType: "button",
                    type: "text",
                    size: "default",
                    className: A.inspirationViewMore,
                    onClick,
                    children: n.jsxs("span", {
                      className: A.inspirationViewMoreContent,
                      children: [
                        n.jsx("span", {
                          children: r.Ay.t(
                            "web_mainframe_shorts_btn_view_more",
                            {},
                            "View more",
                          ),
                        }),
                        n.jsx(s.Vjx, {
                          size: 12,
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                })
              : null,
          ],
        }),
      }),
    ],
  });
}
