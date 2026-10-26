import { _ } from "./module-xo_2.js";
let n;
n = setTimeout(() => window.jsonpCallback(false), 3000);
window.jsonpCallback = function (t) {
  window.clearTimeout(n);
  if (!t || !window.error_code || !window.draft_detail) {
    return void (window.jsonpDraft.callback
      ? window.jsonpDraft.callback(-1, {
          ret: "",
          msg: "",
          data: {},
        })
      : (window.jsonpDraft.status = -1));
  }
  const r = {
    data: window.draft_detail,
    ret: window.error_code,
  };
  r.data.template_data = JSON.parse(r.data.template_data);
  if (window.jsonpDraft.callback) {
    window.jsonpDraft.callback(0, r);
  }
  window.jsonpDraft.response = r;
  window.jsonpDraft.status = 0;
};
window.jsonpDraft = {
  status: -1,
};
_(function* () {
  let t;
  let workspaceId_1;
  let e;
  let n;
  let o;
  const { region, domain } =
    (() => {
      const t = document.getElementById("__GTW_LOCATION_INFO__");
      if (!(t == null ? undefined : t.textContent)) {
        return null;
      }
      try {
        const { __locationInfo } = JSON.parse(t.textContent);
        return {
          region: __locationInfo.code,
          domain: __locationInfo.domain.web_domain,
        };
      } catch (t) {
        return null;
      }
    })() || {};
  if (!region || !domain) {
    return Promise.reject(Error("region or domain is null"));
  }
  workspaceId_1 = (t = new URL(location.href)).searchParams.get("workspaceId");
  const { workspaceId, packageKey } =
    ((e = t.pathname.match(/\/ai-tool\/image-edit\/([^\?]+)/))
      ? {
          workspaceId: workspaceId_1,
          packageKey: e[1],
        }
      : null) || {};
  if (!workspaceId || !packageKey) {
    return Promise.reject(Error("workspaceId or packageKey is null"));
  }
  n = "en";
  if (
    (o = document.cookie.match(RegExp("(^| )capcut_locale=([^;]+)"))) !== null
  ) {
    n = o[2];
  }
  const lang = n;
  const f = yield fetch(
    "".concat(domain, "/lv/v1/editor/plane_draft/get_draft_detail"),
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        package_key: packageKey,
        app_version: "999.999.999",
        sdk_version: "16.1.0",
        lang,
        region,
        workspace_id: workspaceId,
      }),
    },
  );
  return yield f.json();
})()
  .then((t) => {
    window.draft_detail = t.data;
    window.error_code = t.ret;
    window.jsonpCallback(true);
  })
  .catch(() => {
    window.jsonpCallback(false);
  });
