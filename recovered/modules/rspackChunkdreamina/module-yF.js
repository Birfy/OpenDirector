if (require.j == "wl4") var a = require("oa");
let o = "network-client-retry-plugin";
function i(e) {
  return (
    e[o] || {
      lastRequestTime: 0,
      retryCount: 0,
    }
  );
}
export function P(e, t = {}) {
  e.interceptors.request.use((e) => {
    let t = i(e);
    t.lastRequestTime = Date.now();
    e[o] = t;
    return e;
  });
  e.interceptors.response.use(undefined, (r) => {
    let n = r == null ? undefined : r.config;
    if (!n) {
      return Promise.reject(r);
    }
    let {
      retries = 1,
      isRetry = () => true,
      retryDelay = 200,
      resetTimeout = true,
    } = a._({}, t, n == null ? undefined : n[o]);
    let d = i(n);
    if ((isRetry(r) || d.canRetry) && d.retryCount < retries) {
      d.retryCount += 1;
      let t =
        typeof retryDelay === "number"
          ? retryDelay
          : retryDelay(d.retryCount, r);
      if (e.defaults.agent === n.agent) {
        delete n.agent;
      }
      if (e.defaults.httpAgent === n.httpAgent) {
        delete n.httpAgent;
      }
      if (e.defaults.httpsAgent === n.httpsAgent) {
        delete n.httpsAgent;
      }
      if (!resetTimeout && n.timeout && d.lastRequestTime) {
        let e = Date.now() - d.lastRequestTime;
        n.timeout = Math.max(n.timeout - e - t, 1);
      }
      n.transformRequest = [(e) => e];
      return new Promise((resolve) => setTimeout(() => resolve(e(n)), t));
    }
    return Promise.reject(r);
  });
  return e;
}
