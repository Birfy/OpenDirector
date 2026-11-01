import t from "z8";
import n from "bT";
import i from "hA6";
import r from "eVd";
import o from "EYk";
import l from "wF";
import s from "KhL";
export var G = n.memo(function (e) {
  const { renderCredits, tooltipContent, discountItemName } = e;
  const c = i.n();
  const m = l.h(o.a);
  const discountReportPage = s.V();
  const vRef = n.useRef(null);
  const m_isReady = m.isReady;
  n.useEffect(() => {
    if (m_isReady && c) {
      vRef.current = c;
    }
  }, [m_isReady, c]);
  const limitations = n.useMemo(() => {
    if (m_isReady) {
      return c || null;
    }
    return vRef.current;
  }, [m_isReady, c]);
  if (limitations) {
    return t.jsx(r.V, {
      className: "commercial-button-content-ulzQdt",
      limitations,
      formatCredits: renderCredits,
      discountItemName,
      discountDetailTips: tooltipContent,
      fallbackTooltipContent: tooltipContent,
      discountReportPage,
    });
  }
  return null;
});
