import r from "z8";
import "Vx";
import a from "Ix";
import o from "bT";
import i from "xb";
export var e = o.memo(function (e) {
  const { label, cover, checked } = e;
  return r.jsxs("div", {
    className: i("option-content-EADNPb", {
      "checked-R3n99p": checked,
    }),
    children: [
      r.jsx("div", {
        className: "option-cover-container-RPYch2",
        children: cover,
      }),
      r.jsx(a.A, {
        content: label,
        checkOverflow: true,
        children: r.jsx("span", {
          className: "option-label-Cnz8sm",
          children: label,
        }),
      }),
    ],
  });
});
