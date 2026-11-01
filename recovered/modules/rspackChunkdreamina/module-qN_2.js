export function J$(e) {
  e.interceptors.response.use((e) => {
    if (e.status === 200) {
      var t;
      let r = e.data;
      if (
        r.data &&
        ((r == null ? undefined : r.logId) ||
          (r == null ? undefined : r.logid) ||
          (r == null ? undefined : r.log_id))
      ) {
        r.data.__logId = r.logId || r.logid || r.log_id;
      }
      if (
        r.data &&
        ((r == null ? undefined : r.cache_sync_token) ||
          (r == null ? undefined : r.cacheSyncToken))
      ) {
        r.data.__cacheSyncToken =
          r.cache_sync_token || (r == null ? undefined : r.cacheSyncToken);
      }
      if (
        (r == null ? undefined : r.ret) === "0" ||
        (r == null || (t = r.BaseResp) == null ? undefined : t.StatusCode) === 0
      ) {
        return Promise.resolve(r == null ? undefined : r.data);
      }
    }
    return Promise.reject(e.data);
  });
}
export function Wh(e, t) {
  e.interceptors.response.use((e) => {
    let { disableRetCheck = false } = t != null ? t : {};
    if (e.status === 200) {
      var a;
      let t = e.data;
      if (
        disableRetCheck ||
        (t == null ? undefined : t.ret) === "0" ||
        (t == null || (a = t.BaseResp) == null ? undefined : a.StatusCode) ===
          0 ||
        (t == null ? undefined : t.status_code) === 0 ||
        (t == null ? undefined : t.ret) === "" ||
        (t == null ? undefined : t.err_no) === 0
      ) {
        return Promise.resolve(t);
      }
      return Promise.reject(t);
    }
    return Promise.reject(e);
  });
}
