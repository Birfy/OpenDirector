import r from "z8";
import n from "iZ";
import { A } from "./module-aC3.js";
const o = ["first", "second", "third", "fourth"];
export function F(e) {
  const {
    titleId,
    title,
    items,
    loading,
    renderCard,
    viewportRef,
    navigation,
  } = e;
  if (loading || items.length !== 0) {
    return r.jsxs("section", {
      className: A.section,
      "aria-labelledby": titleId,
      "aria-busy": loading,
      "data-whats-new-layout": "rail",
      children: [
        r.jsx("header", {
          className: A.header,
          children: r.jsx("h2", {
            id: titleId,
            className: A.title,
            children: title,
          }),
        }),
        r.jsxs("div", {
          className: A.scrollFrame,
          children: [
            loading
              ? r.jsx("div", {
                  className: A.skeletonTrack,
                  "aria-hidden": "true",
                  children: o.map((e) =>
                    r.jsxs(
                      "div",
                      {
                        className: A.cardSlot,
                        children: [
                          r.jsx(n.D, {
                            className: A.media,
                          }),
                          r.jsx("div", {
                            className: A.caption,
                            children: r.jsx(n.D, {
                              className: A.skeletonTitle,
                            }),
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                })
              : r.jsx("div", {
                  ref: viewportRef,
                  className: A.viewport,
                  role: "group",
                  "aria-label": title,
                  children: r.jsx("div", {
                    className: A.track,
                    children: items.map((e) =>
                      r.jsx(
                        "div",
                        {
                          className: A.cardSlot,
                          "data-whats-new-card": "",
                          children: renderCard(e),
                        },
                        e.key,
                      ),
                    ),
                  }),
                }),
            loading ? null : navigation,
          ],
        }),
      ],
    });
  }
  return null;
}
