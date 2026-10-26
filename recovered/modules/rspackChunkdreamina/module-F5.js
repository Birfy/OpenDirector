import n from "z8";
import t from "cO";
import o from "bT";
import _r from "xb";
const l = Array.from(
  {
    length: 4,
  },
  (e, i) => i + 1,
);
export function f(e) {
  const { source, height, blur, opacity, className } = e;
  const style = {
    "--progressive-blur-height": height,
    "--progressive-blur-opacity": String(opacity),
  };
  return n.jsxs("span", {
    "aria-hidden": "true",
    className: _r("overlay-E8xRKy", className),
    style,
    children: [
      source.type === "media"
        ? n.jsx("svg", {
            width: "0",
            height: "0",
            children: n.jsxs("filter", {
              id: source.filterId,
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              colorInterpolationFilters: "sRGB",
              children: [
                l.map((e) => {
                  var i =
                    `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">\n                <defs><linearGradient id="g" x2="0" y2="1">\n                  <stop offset="${(e - 1) / l.length}" stop-color="white" stop-opacity="0"/>\n                  <stop offset="${e / l.length}" stop-color="white"/>\n                </linearGradient></defs>\n                <rect y="100%" width="100%" height="`
                      .concat(height, '" style="transform:translateY(-')
                      .concat(
                        height,
                        ')" fill="url(#g)"/>\n              </svg>',
                      );
                  return n.jsxs(
                    o.Fragment,
                    {
                      children: [
                        n.jsx("feGaussianBlur", {
                          in: "SourceGraphic",
                          stdDeviation: (blur * e) / l.length,
                          result: "blur-".concat(e),
                        }),
                        n.jsx("feImage", {
                          href: t.m(
                            "data:image/svg+xml,".concat(encodeURIComponent(i)),
                            null,
                            {
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
                                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$kMk50T1c1amJWWjZZekpzTWxw$E1Xb*lTRlo1$EROQ2$XSXlaS*xh$0%1NllWa*FiRXh-%25Oa1dFbDFaRWhPTkZsW$NtNWtXRTA5",
                            },
                          ),
                          x: "0",
                          y: "0",
                          width: "100%",
                          height: "100%",
                          preserveAspectRatio: "none",
                          result: "mask-".concat(e),
                        }),
                        n.jsx("feComposite", {
                          in: "blur-".concat(e),
                          in2: "mask-".concat(e),
                          operator: "in",
                          result: "layer-".concat(e),
                        }),
                      ],
                    },
                    e,
                  );
                }),
                n.jsx("feMerge", {
                  result: "blurred",
                  children: l.map((e) =>
                    n.jsx(
                      "feMergeNode",
                      {
                        in: "layer-".concat(e),
                      },
                      e,
                    ),
                  ),
                }),
                n.jsx("feFlood", {
                  className: "visibility-Aq24xN",
                  floodColor: "white",
                  result: "visibility",
                }),
                n.jsx("feComposite", {
                  in: "blurred",
                  in2: "visibility",
                  operator: "in",
                  result: "visible-blur",
                }),
                n.jsxs("feMerge", {
                  children: [
                    n.jsx("feMergeNode", {
                      in: "SourceGraphic",
                    }),
                    n.jsx("feMergeNode", {
                      in: "visible-blur",
                    }),
                  ],
                }),
              ],
            }),
          })
        : null,
      source.type === "image" && source.url
        ? l.map((e) =>
            n.jsx(
              "span",
              {
                className: "layer-tLFSEi",
                style: {
                  "--progressive-blur-start": String((e - 1) / l.length),
                  "--progressive-blur-end": String(e / l.length),
                  "--progressive-blur-radius": `${(blur * e) / l.length}px`,
                },
                children: n.jsx("img", {
                  src: t.m(source.url, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIy$1RJNWRHTkhPWFZh$np$d1kzaz$kMk50T1c1amJWWjZZekpzTWxw$E1Xb*lTRlo1$EROQ2$XSXlaS*xh$0%1NllWa*FiRXh-%25Oa1dFbDFaRWhPTkZsW$NtNWtXRTA5",
                  }),
                  crossOrigin: "anonymous",
                  alt: "",
                  loading: "lazy",
                  decoding: "async",
                }),
              },
              e,
            ),
          )
        : null,
    ],
  });
}
