import r from "zS";
import n from "bT";
export function D() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const { delay = 0 } = e;
  const [isHovered, setIsHovered] = n.useState(false);
  const oRef = n.useRef();
  const sRef = n.useRef();
  return {
    isHovered,
    handleMouseEnter: r.A(() => {
      if (sRef.current) {
        window.clearTimeout(sRef.current);
        sRef.current = undefined;
      }
      if (oRef.current) {
        window.clearTimeout(oRef.current);
      }
      oRef.current = window.setTimeout(() => {
        setIsHovered(true);
      }, delay);
    }),
    handleMouseLeave: r.A(() => {
      if (oRef.current) {
        window.clearTimeout(oRef.current);
        oRef.current = undefined;
      }
      if (sRef.current) {
        window.clearTimeout(sRef.current);
      }
      sRef.current = window.setTimeout(() => {
        setIsHovered(false);
      }, delay);
    }),
  };
}
export function W() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const { delay = 0, cb } = e;
  const aRef = n.useRef(cb);
  const oRef = n.useRef();
  aRef.current = cb;
  const handleMouseEnter = r.A(() => {
    if (oRef.current) {
      window.clearTimeout(oRef.current);
    }
    if (aRef.current) {
      oRef.current = window.setTimeout(() => {
        var e;
        if ((e = aRef.current) == null) {
          return undefined;
        }
        return e.call(aRef);
      }, delay);
    }
  });
  const handleMouseLeave = r.A(() => {
    if (oRef.current) {
      window.clearTimeout(oRef.current);
      oRef.current = undefined;
    }
  });
  n.useEffect(() => {
    if (!cb && oRef.current) {
      window.clearTimeout(oRef.current);
      oRef.current = undefined;
    }
  }, [cb]);
  return {
    handleMouseEnter,
    handleMouseLeave,
  };
}
