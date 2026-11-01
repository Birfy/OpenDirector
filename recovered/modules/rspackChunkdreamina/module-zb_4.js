import a from "GVE";
function r() {
  for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) {
    n[t] = arguments[t];
  }
  return window.__DreaminaSlardar(...n);
}
export function Z() {
  window.__DreaminaSlardar("start");
  let e;
  let n;
  let t;
  const o = new URLSearchParams(window.location.search);
  return new a.m(
    r,
    {
      pc_sessionId: (e = o.get("pcSessionId")) != null ? e : "",
      app_channel: (n = o.get("appChannel")) != null ? n : "",
      pc_did: (t = o.get("did")) != null ? t : "",
    },
    {},
    {},
    {
      lcpSummary: true,
    },
  );
}
