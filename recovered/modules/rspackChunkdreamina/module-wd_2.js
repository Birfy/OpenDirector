import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import _l from "xb";
import d from "Gn4";
import c from "cO";
const m = {
  "option-content": "option-content-iMGfmm",
  optionContent: "option-content-iMGfmm",
  "option-media-container": "option-media-container-v5dNt8",
  optionMediaContainer: "option-media-container-v5dNt8",
  "option-media": "option-media-J9Oz1z",
  optionMedia: "option-media-J9Oz1z",
};
const p = o.memo(function (e) {
  const { option, checked } = e;
  const { label, extra } = option;
  const { imageUrl } = extra != null ? extra : {};
  return r.jsxs("div", {
    className: _l(m.optionContent, {
      [m.checked]: checked,
    }),
    children: [
      imageUrl
        ? r.jsx("div", {
            className: m.optionMediaContainer,
            children: r.jsx("img", {
              src: c.m(imageUrl, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWQyTnRWbnBh$np$d1dWaFNjR0l5Tldoa$F6RnFZakl4ZDJJe%5Xe*libEo2$ERKT2RtSn$$bXhp-mx*MFdqSldk$nBZ%21oa1J6bD$%RmN4-kZwS*JHaE1XRT$zWWtk$2Ft%kRP$3BpTWp$d1ds-zFNRXh-Wkd4aWJWWj$X$mhTZ*1OcE1-%mFWM%p3$1ZNe*$scFhlR3haTTF*MFlqTkNNR0Z-T1hWT$-wNTJZbT$T-kdKd$$-$mtTRTQw$1ZoS2Jt%ll%$DA9",
              }),
              alt: label,
              className: m.optionMedia,
              crossOrigin: "anonymous",
              draggable: false,
            }),
          })
        : null,
      r.jsx("span", {
        children: label,
      }),
    ],
  });
});
const v = {
  trigger: "trigger-bmH_lW",
};
export var H = o.memo(function (e) {
  const { triggerProps, options, className } = e;
  const c = i._(e, ["triggerProps", "options", "className"]);
  const { value } = c;
  const options_1 = o.useMemo(
    () =>
      options.map((option) =>
        n._(t._({}, option), {
          label: r.jsx(p, {
            option,
            checked: option.value === value,
          }),
        }),
      ),
    [options, value],
  );
  const triggerProps_1 = o.useMemo(
    () =>
      n._(t._({}, triggerProps), {
        className: _l(
          v.trigger,
          triggerProps == null ? undefined : triggerProps.className,
        ),
      }),
    [triggerProps],
  );
  return r.jsx(
    d.V,
    n._(t._({}, c), {
      triggerProps: triggerProps_1,
      options: options_1,
      className: _l(v.select, className),
    }),
  );
});
