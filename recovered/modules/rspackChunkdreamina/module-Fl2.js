import a from "oa";
import r from "OW";
import o from "jV7";
import "Kd";
import l from "T4";
import i from "Egb";
import c from "HX";
import d from "l3";
export function F(e, n) {
  const t = l.k();
  t.init({
    autoReport: false,
  });
  const { channel, extraCommonParams } = t.getParams();
  const p = new URLSearchParams(window.location.search);
  p.get("pcSessionId");
  p.get("appChannel");
  p.get("did");
  (w = window) == null || (h = w.navigator) == null || h.userAgent;
  if (
    ((_ = location) == null ? undefined : _.pathname) ===
    i.a$.baseName + i.ph[c.Du.ThirdPartyCallback]
  ) {
    var h;
    var w;
    var _;
    const b = new r.P(
      {
        appId: d.y.CN_APP_ID,
        channel: "sg",
        disableAutoPv: true,
        enableAbTest: true,
        abChannelDomain: "https://abtestvm."
          .concat(o.k$, "yte")
          .concat(o.yp, "ance.com"),
        webId: window.GATEWAY_INJECTED_WEB_ID || "",
        maxReportMerge: 30,
        reportInterval: 2000,
      },
      {
        appVersion: "0.1.0",
        enableTTWid: true,
        ttWidUnionHost: "https://ttwid."
          .concat(o.k$, "yte")
          .concat(o.yp, "ance.com"),
        stagingFlag: +!!n.isDev,
      },
    );
    b.setCustomParams(a._({}, extraCommonParams, channel));
    return b;
  }
  const f = new r.P(
    {
      appId: d.y.CN_APP_ID,
      channel: "cn",
      disableAutoPv: false,
      enableAbTest: true,
      abChannelDomain: "https://abtestvm."
        .concat(o.k$, "yte")
        .concat(o.yp, "ance.com"),
      webId: window.GATEWAY_INJECTED_WEB_ID || "",
      maxReportMerge: 30,
      reportInterval: 2000,
    },
    {
      appVersion: "0.1.0",
      enableTTWid: true,
      ttWidUnionHost: "https://ttwid."
        .concat(o.k$, "yte")
        .concat(o.yp, "ance.com"),
      stagingFlag: +!!n.isDev,
    },
  );
  f.setCustomParams(a._({}, extraCommonParams, channel));
  return f;
}
