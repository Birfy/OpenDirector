import r from "oa";
import n from "bk";
import a from "z8";
import o from "cO";
import s from "bT";
import l from "F5";
const className = "card-GnhFbd";
export function C(e) {
  let t;
  let i;
  const {
    items,
    loading,
    activeIndex = 0,
    failedCoverUrls = [],
    labels,
    viewportRef,
    cardRef,
    interactions,
    onActivate,
    onSelect,
    onCoverError,
    outgoingItem,
    transitionDirection = "next",
    renderMedia,
  } = e;
  const filterId = "banner-blur-".concat(s.useId().replace(/:/g, ""));
  const R = items.at(activeIndex);
  if (!loading && !R) {
    return null;
  }
  const N = items.length > 1;
  const A = (R == null ? undefined : R.title) || labels.preview;
  const S =
    (R == null || (i = R.coverUrlMap) == null || (t = i[1080]) == null
      ? undefined
      : t.trim()) ||
    (R == null ? undefined : R.coverUrl) ||
    "";
  const E = !S || failedCoverUrls.includes(S);
  const W = R ? [R] : [];
  if (outgoingItem) {
    if (transitionDirection === "previous") {
      W.push(outgoingItem);
    } else {
      W.unshift(outgoingItem);
    }
  }
  const children = R
    ? a.jsx(a.Fragment, {
        children: a.jsx("span", {
          className: "track-I1FrzK",
          "aria-hidden": "true",
          "data-hero-transition": outgoingItem ? "true" : undefined,
          "data-hero-transition-direction": outgoingItem
            ? transitionDirection
            : undefined,
          children: W.map((e) => {
            var t;
            var i;
            var r;
            var n =
              ((r = e.coverUrlMap) == null || (i = r[1080]) == null
                ? undefined
                : i.trim()) || e.coverUrl;
            return a.jsx(
              "span",
              {
                className: "media-TDay7m",
                children:
                  (t = renderMedia == null ? undefined : renderMedia(e)) != null
                    ? t
                    : n && !failedCoverUrls.includes(n)
                      ? a.jsx("img", {
                          className: "cover-FrnvTo",
                          "data-static-cover": !e.videoUrl || undefined,
                          src: o.m(n, null, {
                            logType: "js.href/src",
                            reportOnly: "false",
                            blackConfig: "{}",
                            configMode: "merge",
                            isCloseSSRReport: true,
                            bid: "cc_dreamina",
                            region: "cn",
                            urlLimit: "-1",
                            htmlLimit: "-1",
                            isSaveValidUrl: false,
                            isRuntimeLog: false,
                            isDOMParser: false,
                            escapeRule: "escape-report",
                            reportUrl:
                              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                            htmlparserOptions: "{}",
                            scmBranch: "-",
                            scmName: "-",
                            scmVersion: "-",
                            webpackPluginVersion: "3.6.0",
                            filename:
                              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMlpESm9hR1JJ$FhSaWJWWXp%REpL-%dKdE5Xe*ph$*wyWkcx$2$XTXlWbWhN$0ZsNlR*a*tiMWxZ$W5wT$Z6$nNaS*t4-zFsWWJIWmtXRk-xWk$oT05*bFlTbT$r$0%wOQ",
                          }),
                          crossOrigin: "anonymous",
                          width: 498,
                          height: 327,
                          alt: "",
                          draggable: false,
                          onError: onCoverError
                            ? () => onCoverError(n)
                            : undefined,
                        })
                      : null,
              },
              e.key,
            );
          }),
        }),
      })
    : null;
  return a.jsx("section", {
    className: "banner-ezZNik",
    "aria-label": labels.title,
    "aria-busy": loading,
    children: loading
      ? a.jsx("div", {
          className: "skeleton-JijIRl",
        })
      : a.jsxs(
          "div",
          n._(
            r._(
              {
                ref: viewportRef,
                className: "viewport-TWWrP5",
                style: {
                  "--banner-blur-filter": "url(#".concat(filterId, ")"),
                },
              },
              interactions,
            ),
            {
              children: [
                R && onActivate
                  ? a.jsx("button", {
                      ref: cardRef,
                      type: "button",
                      className,
                      "aria-label": A,
                      onClick: () => onActivate(R),
                      children,
                    })
                  : a.jsx("div", {
                      className,
                      children,
                    }),
                a.jsx(l.f, {
                  className: "blur-WMtEOF",
                  source: {
                    type: "media",
                    filterId,
                  },
                  height: "100px",
                  blur: 16,
                  opacity: 0.3,
                }),
                a.jsxs("div", {
                  className: "caption-BOYWxU",
                  children: [
                    (R == null ? undefined : R.title) || E
                      ? a.jsx("span", {
                          className: "title-coyvck",
                          children: A,
                        })
                      : null,
                    N && onSelect
                      ? a.jsx("div", {
                          className: "indicators-QY6q1J",
                          role: "group",
                          "aria-label": labels.title,
                          children: items.map((e, t) =>
                            a.jsx(
                              "button",
                              {
                                type: "button",
                                className: "indicator-CUa9yx",
                                "aria-label": `${t + 1} / `
                                  .concat(items.length, ": ")
                                  .concat(e.title || labels.preview),
                                "aria-current":
                                  t === activeIndex ? "true" : undefined,
                                onClick: () => onSelect(t),
                              },
                              e.key,
                            ),
                          ),
                        })
                      : null,
                  ],
                }),
              ],
            },
          ),
        ),
  });
}
