import { a as a_1 } from "./module-l_2_3.js";
import { y } from "./module-FPQ.js";
let n;
(n = function (sdk_glue_load_status, r, sdk_glue_load_err_src) {
  if (Math.ceil(100 * Math.random()) <= 100 * r) {
    const n = String(y.CN_APP_ID);
    const a = String(28324);
    const s = {
      ev_type: "batch",
      list: [
        {
          ev_type: "custom",
          payload: {
            name: "sdk_glue_load",
            type: "event",
            metrics: {},
            categories: {
              sdk_glue_load_status,
              sdk_glue_load_err_src,
              payload_bdms_aid: n,
              payload_bdms_page_id: a,
            },
          },
          common: {
            context: {
              ctx_bdms_aid: n,
              ctx_bdms_page_id: a,
            },
            bid: "web_bdms_cn",
            pid: window.location.pathname,
            view_id: "/_1",
            user_id: "",
            session_id: "0-a-1-2-c",
            release: "",
            env: "production",
            url: window.location.href,
            timestamp: +new Date(),
            sdk_version: "1.6.1",
            sdk_name: "SDK_SLARDAR_WEB",
          },
        },
      ],
    };
    const c = new XMLHttpRequest();
    c.open(
      "POST",
      "".concat(
        a_1.SLARDAR.reportUrl,
        "/monitor_browser/collect/batch/?biz_id=web_bdms_cn",
      ),
      true,
    );
    c.setRequestHeader("Content-type", "application/json");
    c.send(JSON.stringify(s));
  }
})("before_load", 0.1, "");
window.addEventListener(
  "error",
  function (t) {
    const r = t.target || t.srcElement;
    if (
      r instanceof HTMLElement &&
      r.nodeName === "SCRIPT" &&
      (r.src || "").indexOf("sdk-glue") !== -1
    ) {
      n("load_error", 1, r.src);
    }
  },
  true,
);
if (window.performance && window.performance.mark) {
  window.performance.mark("HEAD_BDMS_SCRIPT_START");
}
