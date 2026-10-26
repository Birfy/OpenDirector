import t from "oa";
import n from "qa";
import i from "z8";
import r from "cO";
import o from "bT";
import _l from "xb";
import d from "n3Q";
const className_1 = "image-U2tqew";
export var K = o.memo(function (e) {
  const {
    title,
    description,
    imageUrl,
    animationUrl,
    className,
    variant = "default",
  } = e;
  const F = n._(e, [
    "title",
    "description",
    "imageUrl",
    "animationUrl",
    "className",
    "variant",
  ]);
  const A = variant === "mainFrame2026";
  const content = o.useMemo(
    () =>
      i.jsxs("div", {
        className: _l("content-vksMp7", {
          "main-frame-2026-content-QTztRg": A,
        }),
        children: [
          i.jsxs("picture", {
            className: className_1,
            children: [
              i.jsx("source", {
                srcSet: animationUrl,
                type: "image/webp",
              }),
              i.jsx("img", {
                alt: "",
                src: r.m(imageUrl, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmRrT$d*WF$teE1XR%oyWTBjN%1scFlTWFZr%0%0MFdWaEtib$JZ$FQwPQ",
                }),
                className: className_1,
              }),
            ],
          }),
          i.jsx("div", {
            className: "title-PNJ6Q0",
            children: title,
          }),
          i.jsx("div", {
            className: "description-AHTcsg",
            children: description,
          }),
        ],
      }),
    [animationUrl, description, imageUrl, A, title],
  );
  return i.jsx(
    d.I,
    t._(
      {
        content,
        trigger: "hover",
        className: _l(className, {
          "main-frame-2026-popover-mtZVcM": A,
        }),
      },
      F,
    ),
  );
});
