if (require.j == "wl4") var a = require("./module-oe_2.js");
const o = require("bT");
if (require.j == "wl4") var i = require("w3");
if (require.j == "wl4") var n = require("./module-Tf.js");
export const $ = (e) => {
  let { uiConfigurationService } = o.useContext(n.F);
  let r = i.zy();
  let cRef = o.useRef(r.pathname);
  let lRef = o.useRef(null);
  let m = (t) => {
    if (t && t.pathName === cRef.current) {
      if (t.status === a.V.Activated) {
        lRef.current = e == null ? undefined : e();
      } else {
        var r;
        if ((r = lRef.current) != null) {
          r.call(lRef);
        }
      }
    }
  };
  o.useEffect(() => {
    let e = uiConfigurationService.uiManager[a.M];
    m(e.currentKeepAliveData);
    let r = e.onKeepAliveChange((e) => {
      m(e);
    });
    return () => {
      var e;
      r.dispose();
      if ((e = lRef.current) != null) {
        e.call(lRef);
      }
    };
  }, []);
};
export const f = (e) => {
  let { uiConfigurationService } = o.useContext(n.F);
  let r = i.zy();
  let cRef = o.useRef(r.pathname);
  let lRef = o.useRef(null);
  let m = (t) => {
    if (t && t.pathName === cRef.current) {
      if (t.status === a.V.Activated) {
        lRef.current = e == null ? undefined : e();
      } else {
        var r;
        if ((r = lRef.current) != null) {
          r.call(lRef);
        }
      }
    }
  };
  o.useLayoutEffect(() => {
    let e = uiConfigurationService.uiManager[a.M];
    m(e.currentKeepAliveData);
    let r = e.onKeepAliveChange((e) => {
      m(e);
    });
    return () => {
      var e;
      r.dispose();
      if ((e = lRef.current) != null) {
        e.call(lRef);
      }
    };
  }, []);
};
