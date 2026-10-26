import a from "bT";
let n;
class o {
  observe(e, callback) {
    const isCallbackOnce =
      arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    this._observedElementList.push(e);
    this._callbackMap.set(e, {
      callback,
      isCallbackOnce,
    });
    this._observer.observe(e);
  }
  unobserve(e) {
    const t = this._observedElementList.indexOf(e);
    if (t >= 0) {
      this._observedElementList.splice(t, 1);
      this._callbackMap.delete(e);
      this._observer.unobserve(e);
    }
  }
  disconnect() {
    this._observedElementList = [];
    this._callbackMap.clear();
    this._observer.disconnect();
  }
  constructor(e) {
    this._callbackMap = new Map();
    this._observedElementList = [];
    this._handleIntersection = (e) => {
      e.forEach((e) => {
        var { target, isIntersecting, intersectionRatio } = e;
        var a = isIntersecting && intersectionRatio >= this._threshold;
        var o = this._callbackMap.get(target);
        if (o) {
          var { callback, isCallbackOnce } = o;
          if (isCallbackOnce && a) {
            this.unobserve(target);
          }
          callback(a);
        }
      });
    };
    var t;
    var { threshold } = e != null ? e : {};
    this._observer = new IntersectionObserver(this._handleIntersection, e);
    this._threshold =
      (t = Array.isArray(threshold) ? threshold[0] : threshold) != null ? t : 1;
  }
}
function i() {
  if (typeof IntersectionObserver !== "undefined") {
    if (n == null) {
      n = new o({
        threshold: 0.2,
      });
    }
    return n;
  }
}
export function lV(e, t) {
  const rRef = a.useRef(null);
  const [n, setN] = a.useState(false);
  a.useEffect(() => {
    var rRef_current = rRef.current;
    var a = i();
    if (rRef_current && a) {
      a.observe(
        rRef_current,
        (e) => {
          setN(e);
          if (t != null) {
            t(e);
          }
        },
        e,
      );
      return () => a.unobserve(rRef_current);
    }
  }, [e, t]);
  return [rRef, n];
}
export function oJ(e, t) {
  const rRef = a.useRef(null);
  a.useEffect(() => {
    var rRef_current = rRef.current;
    var a = i();
    if (rRef_current && a) {
      a.observe(
        rRef_current,
        (e) => {
          if (t == null) {
            return undefined;
          }
          return t(e);
        },
        e,
      );
      return () => a.unobserve(rRef_current);
    }
  }, [e, t]);
  return rRef;
}
export function Je() {
  const e =
    !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
  const tRef = a.useRef(null);
  const rRef = a.useRef();
  const [isIntersecting, setIsIntersecting] = a.useState(false);
  const cRef = a.useRef(false);
  const observe = a.useCallback(() => {
    if (!cRef.current) {
      var e = tRef.current;
      var n = i();
      if (e && n) {
        cRef.current = true;
        rRef.current = n;
        n.observe(e, (e) => setIsIntersecting(e));
      }
    }
  }, []);
  const unobserve = a.useCallback(() => {
    cRef.current = false;
    var tRef_current = tRef.current;
    if (tRef_current && rRef.current) {
      rRef.current.unobserve(tRef_current);
    }
  }, []);
  a.useEffect(() => {
    if (e) {
      observe();
    }
    return unobserve;
  }, [e, observe, unobserve]);
  return {
    elementRef: tRef,
    isIntersecting,
    observe,
    unobserve,
  };
}
