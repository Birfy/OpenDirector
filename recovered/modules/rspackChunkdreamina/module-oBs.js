import i from "zS";
import n from "bT";
export function W(e) {
  const { dep, scrollElement, onReachEnd, triggerLimit = 200 } = e;
  const cRef = n.useRef(false);
  n.useEffect(() => {
    cRef.current = false;
  }, [dep]);
  return i.A(() => {
    if (
      scrollElement &&
      !cRef.current &&
      scrollElement.scrollHeight - scrollElement.scrollTop <=
        scrollElement.clientHeight + triggerLimit
    ) {
      cRef.current = true;
      if (onReachEnd != null) {
        onReachEnd();
      }
    }
  });
}
