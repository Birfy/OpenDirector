import n from "z8";
import t from "bT";
import _o from "xb";
import "xj";
import s from "R8";
import l from "cO";
const c = t.memo(function (e) {
  const { item, selected, onSelect } = e;
  const { id, name, icon } = item;
  return n.jsxs(s.A, {
    htmlType: "button",
    type: "text",
    size: "default",
    shape: "round",
    "aria-pressed": selected,
    className: _o("tab-MIagJp", {
      "selected-dns_Eh": selected,
    }),
    onClick: () => {
      if (!selected) {
        onSelect(id);
      }
    },
    children: [
      n.jsx("span", {
        className: "label-_c8RAH",
        children: name,
      }),
      n.jsx("span", {
        className: "decoration-slot-QoeT05",
        "aria-hidden": "true",
        children: n.jsx("img", {
          src: l.m(
            icon ||
              "data:image/png;base64,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",
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMldtM$diRnBET$hkamJXeDBX$mhLTl$4WFRta*tSM$p1WWpOS05$eFl$bWha-msxMldtM$diRnBET$hkamJXeDBX$mhLTl$4WFRta*tSM$p1WWpOS05$eFl$bWha-$R*d1pFZFdkRXh1$W5wbFIwWj$Xak5XZWc9PQ",
            },
          ),
          crossOrigin: "anonymous",
          alt: "",
          draggable: false,
          className: "decoration-image-ad0B16",
        }),
      }),
    ],
  });
});
var d = t.memo(function (e) {
  const { items, value, onChange, ariaLabel, className } = e;
  if (items.length === 0) {
    return null;
  }
  return n.jsx("div", {
    className: _o("tab-list-RL7cVe", className),
    role: "group",
    "aria-label": ariaLabel,
    children: items.map((item) =>
      n.jsx(
        c,
        {
          item,
          selected: item.id === value,
          onSelect: onChange,
        },
        item.id,
      ),
    ),
  });
});
export { d as n };
