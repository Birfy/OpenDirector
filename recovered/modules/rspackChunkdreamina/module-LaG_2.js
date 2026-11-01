import r from "bT";
let a;
class i {
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
        var r = isIntersecting && intersectionRatio >= this._threshold;
        var i = this._callbackMap.get(target);
        if (i) {
          var { callback, isCallbackOnce } = i;
          if (isCallbackOnce && r) {
            this.unobserve(target);
          }
          callback(r);
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
function o() {
  if (typeof IntersectionObserver !== "undefined") {
    if (a == null) {
      a = new i({
        threshold: 0.2,
      });
    }
    return a;
  }
}
export function lV(e, t) {
  const nRef = r.useRef(null);
  const [a, setA] = r.useState(false);
  r.useEffect(() => {
    var nRef_current = nRef.current;
    var r = o();
    if (nRef_current && r) {
      r.observe(
        nRef_current,
        (e) => {
          setA(e);
          if (t != null) {
            t(e);
          }
        },
        e,
      );
      return () => r.unobserve(nRef_current);
    }
  }, [e, t]);
  return [nRef, a];
}
export function oJ(e, t) {
  const nRef = r.useRef(null);
  r.useEffect(() => {
    var nRef_current = nRef.current;
    var r = o();
    if (nRef_current && r) {
      r.observe(
        nRef_current,
        (e) => {
          if (t == null) {
            return undefined;
          }
          return t(e);
        },
        e,
      );
      return () => r.unobserve(nRef_current);
    }
  }, [e, t]);
  return nRef;
}
export function Je() {
  const e =
    !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
  const tRef = r.useRef(null);
  const nRef = r.useRef();
  const [isIntersecting, setIsIntersecting] = r.useState(false);
  const lRef = r.useRef(false);
  const observe = r.useCallback(() => {
    if (!lRef.current) {
      var e = tRef.current;
      var a = o();
      if (e && a) {
        lRef.current = true;
        nRef.current = a;
        a.observe(e, (e) => setIsIntersecting(e));
      }
    }
  }, []);
  const unobserve = r.useCallback(() => {
    lRef.current = false;
    var tRef_current = tRef.current;
    if (tRef_current && nRef.current) {
      nRef.current.unobserve(tRef_current);
    }
  }, []);
  r.useEffect(() => {
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
