export function W(e) {
  let t;
  let r;
  if (!((r = e.interceptors) == null || (t = r.request) == null)) {
    t.use((e) => {
      let t = new URLSearchParams(window.location.search).get("token") || "";
      if (t) {
        if (!e.data) {
          e.data = {};
        }
        e.data.share_token = t;
      }
      return e;
    });
  }
}
