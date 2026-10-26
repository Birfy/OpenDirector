import r from "z8";
import o from "WJf";
import i from "bT";
import { cy } from "./module-V9.js";
export function A({ nodeList, pattern, highlightClassName }) {
  if (!pattern) {
    return nodeList;
  }
  let o = (e) => {
    if (e && e.props && typeof e.props.children === "string") {
      return i.cloneElement(
        e,
        undefined,
        r.jsx(a, {
          text: e.props.children,
          keyword: pattern,
          highlightClassName,
        }),
      );
    }
    return e;
  };
  if (cy(nodeList)) {
    return nodeList.map((e) => o(e));
  }
  return o(nodeList);
}
function a({ text, keyword, highlightClassName }) {
  if (!keyword) {
    return r.jsx(r.Fragment, {
      children: text,
    });
  }
  let i = RegExp(`(${o.A(keyword)})`, "i");
  let l = text.split(i);
  return r.jsx(r.Fragment, {
    children: l.map((children, t) => {
      if (i.test(children)) {
        return r.jsx(
          "span",
          {
            className: highlightClassName,
            children,
          },
          t,
        );
      }
      return r.jsx(
        "span",
        {
          children,
        },
        t,
      );
    }),
  });
}
