import a from "zS";
import r from "bT";
export function D() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const { delay = 0 } = e;
  const [isHovered, setIsHovered] = r.useState(false);
  const oRef = r.useRef();
  const lRef = r.useRef();
  return {
    isHovered,
    handleMouseEnter: a.A(() => {
      if (lRef.current) {
        window.clearTimeout(lRef.current);
        lRef.current = undefined;
      }
      if (oRef.current) {
        window.clearTimeout(oRef.current);
      }
      oRef.current = window.setTimeout(() => {
        setIsHovered(true);
      }, delay);
    }),
    handleMouseLeave: a.A(() => {
      if (oRef.current) {
        window.clearTimeout(oRef.current);
        oRef.current = undefined;
      }
      if (lRef.current) {
        window.clearTimeout(lRef.current);
      }
      lRef.current = window.setTimeout(() => {
        setIsHovered(false);
      }, delay);
    }),
  };
}
export function W() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const { delay = 0, cb } = e;
  const iRef = r.useRef(cb);
  const oRef = r.useRef();
  iRef.current = cb;
  const handleMouseEnter = a.A(() => {
    if (oRef.current) {
      window.clearTimeout(oRef.current);
    }
    if (iRef.current) {
      oRef.current = window.setTimeout(() => {
        var e;
        if ((e = iRef.current) == null) {
          return undefined;
        }
        return e.call(iRef);
      }, delay);
    }
  });
  const handleMouseLeave = a.A(() => {
    if (oRef.current) {
      window.clearTimeout(oRef.current);
      oRef.current = undefined;
    }
  });
  r.useEffect(() => {
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
