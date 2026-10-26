import n from "z8";
import a from "bT";
import o from "Ybg";
import { P } from "./module-yzC.js";
import c from "Z1";
function useS(e) {
  const { children, className } = e;
  const sRef = a.useRef(null);
  const { showBackToTop, handleScroll, scrollToTop } = o.$({
    scrollContainerRef: sRef,
  });
  return n.jsxs(P, {
    ref: sRef,
    threshold: 0,
    className,
    onScroll: handleScroll,
    children: [
      children,
      n.jsx(o.s, {
        className: c.A.backToTop,
        visible: showBackToTop,
        onClick: scrollToTop,
      }),
    ],
  });
}
export { useS as s };
