import n from "z8";
export function r(e) {
  const { icon, label, suffix, title } = e;
  return n.jsxs("span", {
    className: "content-ZGqJM8",
    children: [
      n.jsx("span", {
        className: "icon-cpE9PK",
        children: icon,
      }),
      n.jsx("span", {
        className: "label-Gk1H7H",
        title,
        children: label,
      }),
      suffix
        ? n.jsx("span", {
            className: "suffix-gDLzoF",
            children: suffix,
          })
        : null,
    ],
  });
}
