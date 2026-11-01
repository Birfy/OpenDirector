import n from "bT";
export function U() {
  const eRef = n.useRef({
    active: false,
    current: 0,
  });
  return {
    start: n.useCallback(() => {
      eRef.current = {
        active: true,
        current: new Date().valueOf(),
      };
    }, []),
    stop: n.useCallback((t) => {
      if (eRef.current.active) {
        if (t != null) {
          t(new Date().valueOf() - eRef.current.current);
        }
      }
      eRef.current = {
        active: false,
        current: 0,
      };
    }, []),
  };
}
