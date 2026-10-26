let a = require.j == "wl4" ? new Map() : null;
function o(e) {
  try {
    if (!e) {
      return "";
    }
    let { url, data } = e;
    return `${url}${JSON.stringify(data)}`;
  } catch (e) {
    return "";
  }
}
export function U(e, t) {
  let { maxAge = 3600000, customGetCacheKey = o } = t != null ? t : {};
  e.interceptors.request.use((e) => {
    var t;
    let {
      needCache,
      needRefresh,
      cacheErrorCodes = [],
    } = (t = e.params) != null ? t : {};
    let c = customGetCacheKey(e);
    e.cacheKey = c;
    e.cacheErrorCodes = cacheErrorCodes;
    if (!needCache || needRefresh) {
      a.delete(c);
      return e;
    }
    let l = ((e) => {
      let t = a.get(e);
      if (!t) {
        return;
      }
      let { maxAge, cacheStartTime } = t;
      if (Date.now() < maxAge + cacheStartTime) {
        return t;
      }
    })(c);
    if (l) {
      e.adapter = (config) =>
        Promise.resolve({
          data: l.data,
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        });
    } else {
      a.delete(c);
    }
    return e;
  });
  e.interceptors.response.use((e) => {
    let { config, status, data } = e;
    let { cacheKey, cacheErrorCodes } = config || {};
    if (
      cacheKey &&
      status === 200 &&
      ((cacheErrorCodes == null
        ? undefined
        : cacheErrorCodes.includes(data == null ? undefined : data.ret)) ||
        (data == null ? undefined : data.ret) === "0")
    ) {
      a.set(cacheKey, {
        data,
        maxAge,
        cacheStartTime: Date.now(),
      });
    }
    return e;
  });
  return e;
}
