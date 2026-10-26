import n from "oa";
import t from "bk";
import o from "z8";
import "xj";
import r from "R8";
import s from "bT";
import _l from "xb";
import d from "Qey";
import m from "yw";
import p from "Cc8";
import * as u from "./module-QX.js";
import * as h from "./module-yKh.js";
import { A as A_1 } from "./module-BCf.js";
const x = "scroll-bMkAV_";
const className = "sr-only-aghTYP";
const b = {
  [p.Wj]: "true",
  [p.E$]: "csr",
};
export var B = s.memo(function (e) {
  const {
    name,
    sectionId,
    showMore,
    showHeading = true,
    status,
    items,
    maxItemCount = 10,
    layout = "grid",
    mediaMode = "interactive",
    onOpenDetail,
    onExpose,
    onHoverEnd,
    onVideoPlayEnd,
    onViewRelatedCanvas,
    onViewMore,
  } = e;
  const id = "create-short-video-section-".concat(s.useId());
  const ref = s.useRef(null);
  const [S, setS] = s.useState({
    previous: false,
    next: false,
  });
  const onScroll = s.useCallback(() => {
    var $Ref_current = ref.current;
    if ($Ref_current) {
      var i = {
        previous: $Ref_current.scrollLeft > 1,
        next:
          $Ref_current.scrollLeft + $Ref_current.clientWidth <
          $Ref_current.scrollWidth - 1,
      };
      setS((e) => {
        if (e.previous === i.previous && e.next === i.next) {
          return e;
        }
        return i;
      });
    }
  }, []);
  s.useEffect(() => {
    if (layout === "films") {
      onScroll();
      var e = ref.current;
      if (e) {
        var i = new ResizeObserver(onScroll);
        i.observe(e);
        return () => i.disconnect();
      }
    }
  }, [layout, items.length, status, onScroll]);
  const z = (e) => {
    var $Ref_current = ref.current;
    var a = $Ref_current == null ? undefined : $Ref_current.firstElementChild;
    if ($Ref_current && a) {
      var n =
        Number.parseFloat(window.getComputedStyle($Ref_current).columnGap) || 0;
      var t = a.getBoundingClientRect().width + n;
      $Ref_current.scrollBy({
        left: e * t,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  };
  const onClick = s.useCallback(() => {
    onViewMore(sectionId);
  }, [onViewMore, sectionId]);
  const B = s.useCallback(
    (e) => items.findIndex((i) => i.id === e.id),
    [items],
  );
  const O = s.useCallback(
    (e) => {
      var i = B(e);
      var a = items[i];
      if (a) {
        onOpenDetail(a, i);
      }
    },
    [B, items, onOpenDetail],
  );
  const J = s.useCallback(
    (e, i, a) => {
      var n = B(e);
      if (n >= 0) {
        if (onExpose != null) {
          onExpose(e.id, n, i, a);
        }
      }
    },
    [B, onExpose],
  );
  const X = s.useCallback(
    (e, i) => {
      var a = B(e);
      if (a >= 0) {
        if (onHoverEnd != null) {
          onHoverEnd(e.id, a, i);
        }
      }
    },
    [B, onHoverEnd],
  );
  const H = s.useCallback(
    (e, i) => {
      var a = B(e);
      if (a >= 0) {
        if (onVideoPlayEnd != null) {
          onVideoPlayEnd(e.id, a, i);
        }
      }
    },
    [B, onVideoPlayEnd],
  );
  return o.jsxs("section", {
    className: "section-a1l5So",
    "aria-labelledby": id,
    children: [
      layout === "grid" && (showHeading || showMore)
        ? o.jsxs("header", {
            className: "header-Anv4Yv",
            children: [
              o.jsx("h2", {
                id,
                className: showHeading ? "title-d6b7TX" : className,
                children: name,
              }),
              showMore
                ? o.jsx(r.A, {
                    htmlType: "button",
                    type: "text",
                    size: "small",
                    className: "view-more-M6poEh",
                    onClick,
                    children: d.Ay.t(
                      "web_mainframe_shorts_btn_view_more",
                      {},
                      "View more",
                    ),
                  })
                : null,
            ],
          })
        : o.jsx("h3", {
            id,
            className,
            children: name,
          }),
      o.jsxs("div", {
        className: "viewport-G7HW66",
        children: [
          o.jsx("div", {
            ref,
            className: _l("grid-W_RHFf", {
              "film-grid-MHmYtO": layout === "films",
            }),
            role: "list",
            "aria-label": name,
            "aria-busy": status === "loading",
            onScroll,
            children:
              status === "loading"
                ? Array.from(
                    {
                      length: maxItemCount,
                    },
                    (e, i) =>
                      o.jsx(
                        u.n,
                        {
                          appearance: layout === "films" ? "film" : undefined,
                        },
                        "short-video-skeleton-".concat(i),
                      ),
                  )
                : items.slice(0, maxItemCount).map((e) =>
                    o.jsx(
                      h.m,
                      t._(
                        n._(
                          {
                            data: e,
                            appearance: layout === "films" ? "film" : undefined,
                            role: "listitem",
                            mediaMode,
                            coverCompletedMark:
                              mediaMode === "static" ? undefined : b,
                          },
                          mediaMode === "static"
                            ? {
                                [p.vz]: "true",
                              }
                            : {},
                        ),
                        {
                          relatedAction:
                            mediaMode !== "static" &&
                            e.canPreviewCanvas &&
                            onViewRelatedCanvas
                              ? {
                                  label: A_1(e.canvasSourceType),
                                  onClick: () => onViewRelatedCanvas(e.id),
                                }
                              : undefined,
                          onOpen: mediaMode === "static" ? undefined : O,
                          onExpose: mediaMode === "static" ? undefined : J,
                          onHoverEnd: mediaMode === "static" ? undefined : X,
                          onVideoPlayEnd:
                            mediaMode === "static" ? undefined : H,
                        },
                      ),
                      e.id,
                    ),
                  ),
          }),
          layout === "films" && (S.previous || S.next)
            ? o.jsxs(o.Fragment, {
                children: [
                  o.jsx(r.A, {
                    htmlType: "button",
                    type: "text",
                    shape: "circle",
                    className: _l(x, "previous-k8m5wR"),
                    "aria-label": ""
                      .concat(d.Ay.t("web_new_last_one", {}, "Last one"), " ")
                      .concat(name),
                    disabled: !S.previous,
                    onClick: () => z(-1),
                    children: o.jsx(m.gu7, {
                      size: 16,
                      "aria-hidden": "true",
                    }),
                  }),
                  o.jsx(r.A, {
                    htmlType: "button",
                    type: "text",
                    shape: "circle",
                    className: _l(x, "next-wcbBCb"),
                    "aria-label": ""
                      .concat(d.Ay.t("web_new_next_one", {}, "Next one"), " ")
                      .concat(name),
                    disabled: !S.next,
                    onClick: () => z(1),
                    children: o.jsx(m.Vjx, {
                      size: 16,
                      "aria-hidden": "true",
                    }),
                  }),
                ],
              })
            : null,
        ],
      }),
    ],
  });
});
