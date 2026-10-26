import o from "QWK";
import l from "bT";
import { Tn, XB } from "./module-lX1.js";
import { A } from "./module-Zf7.js";
import { A as A_1 } from "./module-F0_2.js";
let r;
let i;
let a;
const useU = (e) => {
  const tRef = l.useRef(e);
  tRef.current = e;
  return tRef;
};
const s = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
function d(e, t) {
  if (s) {
    if (e) {
      if (Tn(e)) {
        return e();
      }
      if ("current" in e) {
        return e.current;
      }
      return e;
    }
    return t;
  }
}
const useV = (e) => {
  if (A && !Tn(e)) {
    console.error(
      `useUnmount expected parameter is a function, got ${typeof e}`,
    );
  }
  const t = useU(e);
  l.useEffect(function () {
    return function () {
      t.current();
    };
  }, []);
};
const m = (e, t) => {
  if (e === t) {
    return true;
  }
  for (let n = 0; n < e.length; n++) {
    if (!Object.is(e[n], t[n])) {
      return false;
    }
  }
  return true;
};
r = l.useEffect;
const useH = (e, t, target) => {
  const iRef = l.useRef(false);
  const aRef = l.useRef([]);
  const oRef = l.useRef([]);
  const uRef = l.useRef(undefined);
  r(function () {
    let r;
    const l = (Array.isArray(target) ? target : [target]).map((e) => d(e));
    if (!iRef.current) {
      iRef.current = true;
      aRef.current = l;
      oRef.current = t;
      uRef.current = e();
      return;
    }
    if (
      !(
        l.length === aRef.current.length &&
        m(aRef.current, l) &&
        m(oRef.current, t)
      )
    ) {
      if ((r = uRef.current) != null) {
        r.call(uRef);
      }
      aRef.current = l;
      oRef.current = t;
      uRef.current = e();
    }
  });
  useV(function () {
    let e;
    if ((e = uRef.current) != null) {
      e.call(uRef);
    }
    iRef.current = false;
  });
};
const p = (e, t, n = {}) => {
  const n_enable = n.enable;
  const i = n_enable === undefined || n_enable;
  const a = useU(t);
  useH(
    () => {
      if (i) {
        const t = d(n.target, window);
        if (t == null ? undefined : t.addEventListener) {
          const r = function (e) {
            return a.current(e);
          };
          const o = Array.isArray(e) ? e : [e];
          o.forEach((e) => {
            t.addEventListener(e, r, {
              capture: n.capture,
              once: n.once,
              passive: n.passive,
            });
          });
          return function () {
            o.forEach((e) => {
              t.removeEventListener(e, r, {
                capture: n.capture,
              });
            });
          };
        }
      }
    },
    [e, n.capture, n.once, n.passive, i],
    n.target,
  );
};
i = l.useEffect;
const useE = (e, t) => {
  const nRef = l.useRef(false);
  i(function () {
    return function () {
      nRef.current = false;
    };
  }, []);
  i(function () {
    if (nRef.current) {
      return e();
    }
    nRef.current = true;
  }, t);
};
const b = "AHOOKS_SYNC_STORAGE_EVENT_NAME";
a = function () {
  if (s) {
    return localStorage;
  }
};
var useY = function (e, t = {}) {
  let storageArea;
  const t_listenStorageChange = t.listenStorageChange;
  const enable = t_listenStorageChange !== undefined && t_listenStorageChange;
  const t_onError = t.onError;
  const s =
    t_onError === undefined
      ? (e) => {
          console.error(e);
        }
      : t_onError;
  try {
    storageArea = a();
  } catch (error) {
    s(error);
  }
  function d() {
    try {
      const r = storageArea == null ? undefined : storageArea.getItem(e);
      if (r) {
        if (t.deserializer) {
          return t.deserializer(r);
        }
        return JSON.parse(r);
      }
    } catch (error) {
      s(error);
    }
    if (Tn(t.defaultValue)) {
      return t.defaultValue();
    }
    return t.defaultValue;
  }
  const f = o.zs(l.useState(d), 2);
  const v = f[0];
  const m = f[1];
  useE(() => {
    m(d());
  }, [e]);
  const h = function (t) {
    if (t.key === e && t.storageArea === storageArea) {
      m(d());
    }
  };
  p("storage", h, {
    enable,
  });
  p(
    b,
    function (e) {
      h(e.detail);
    },
    {
      enable,
    },
  );
  return [
    v,
    A_1(function (r) {
      const a = Tn(r) ? r(v) : r;
      if (!enable) {
        m(a);
      }
      try {
        let newValue;
        const oldValue =
          storageArea == null ? undefined : storageArea.getItem(e);
        if (XB(a)) {
          newValue = null;
          if (storageArea != null) {
            storageArea.removeItem(e);
          }
        } else {
          newValue = t.serializer ? t.serializer(a) : JSON.stringify(a);
          if (storageArea != null) {
            storageArea.setItem(e, newValue);
          }
        }
        dispatchEvent(
          new CustomEvent(b, {
            detail: {
              key: e,
              newValue,
              oldValue,
              storageArea,
            },
          }),
        );
      } catch (error) {
        s(error);
      }
    }),
  ];
};
export { useY as A };
