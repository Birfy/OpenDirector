if (require.j == "wl4") var a = require("./module-Bb.js");
if (require.j == "wl4") var o = require("./module-K8.js");
if (require.j == "wl4") var i = require("./module-cs_4.js");
export function $S(e, t, r) {
  let n;
  let c;
  let l;
  c = e((n = new i.Q()).token);
  l = new Promise((resolve, reject) => {
    let r = n.token.onCancellationRequested(() => {
      r.dispose();
      n.dispose();
      resolve(a.YQ());
    });
    Promise.resolve(c).then(
      (t) => {
        r.dispose();
        n.dispose();
        if (o.GC(t)) {
          resolve(t);
        } else {
          resolve(o.TZ(t));
        }
      },
      (e) => {
        r.dispose();
        n.dispose();
        reject(e);
      },
    );
  });
  let m = new (class {
    cancel() {
      n.cancel();
    }
    then(e, t) {
      return l.then(e, t);
    }
    catch(e) {
      return this.then(undefined, e);
    }
    finally(e) {
      return l.finally(e);
    }
  })();
  let s = setTimeout(() => {
    m.cancel();
  }, t);
  return m.then((e) => {
    clearTimeout(s);
    if (e.ok || e.code !== a.gn.Cancelled) {
      return e;
    }
    if (r !== undefined) {
      return o.TZ(r);
    }
    return a.w2();
  });
}
export function v6() {
  let resolve;
  let reject;
  let promise = new Promise((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });
  return {
    resolve,
    reject,
    promise,
  };
}
export function Rn(e) {
  let { promise, reject } = v6();
  if (e.aborted) {
    reject(e.reason);
  }
  let a = () => {
    reject(e.reason);
    e.removeEventListener("abort", a);
  };
  e.addEventListener("abort", a);
  return promise;
}
