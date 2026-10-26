if (require.j == "wl4") var a = require("./module-Vgu.js");
export function T2(e, t) {
  let r;
  if (!e.tryLockShared()) {
    return;
  }
  let o = false;
  if (t !== undefined) {
    r = a.I(() => {
      if (!o) {
        e.unLockShared();
        o = true;
      }
    }, t);
  }
  let i = () => {
    if (r != null) {
      r.dispose();
    }
    if (!o) {
      e.unLockShared();
      o = true;
    }
  };
  return {
    dispose: i,
    unlock: i,
  };
}
