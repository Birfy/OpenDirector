import n from "z8";
import r from "bT";
import a from "ja";
export var D = r.memo(function (e) {
  const { url, duration, label, action } = e;
  return n.jsxs("div", {
    className: "preview-jv_Mul",
    children: [
      label || action
        ? n.jsxs("div", {
            className: "header-bHfDkO",
            children: [
              label
                ? n.jsx("div", {
                    className: "label-PV5DiE",
                    children: label,
                  })
                : null,
              action,
            ],
          })
        : null,
      n.jsx(a.q, {
        url,
        duration,
      }),
    ],
  });
});
