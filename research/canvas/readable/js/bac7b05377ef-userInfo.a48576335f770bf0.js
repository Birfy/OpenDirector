!(function () {
  var t = document.getElementById("__GTW_USER_INFO__");
  if (t && t.textContent && !window.__userInfoStringify)
    try {
      var r = JSON.parse(t.textContent);
      if ("string" == typeof r.__userInfoStringify) {
        window.__userInfoStringify = r.__userInfoStringify;
        var e = (function (t) {
          try {
            var r = JSON.parse(t),
              e = r && "0" === r.ret && r.data && r.data.location,
              o = e && e.domain,
              n =
                o &&
                "object" == typeof o &&
                !Array.isArray(o) &&
                "string" == typeof o.web_domain &&
                o.web_domain.trim() &&
                "string" == typeof o.frontier_domain &&
                o.frontier_domain.trim() &&
                "string" == typeof o.commerce_domain &&
                o.commerce_domain.trim();
            if (
              !e ||
              "object" != typeof e ||
              Array.isArray(e) ||
              "string" != typeof e.code ||
              !e.code.trim() ||
              "string" != typeof e.web_idc ||
              !e.web_idc.trim() ||
              !n
            )
              return;
            return e;
          } catch (t) {}
        })(r.__userInfoStringify);
        e &&
          !window.__locationInfo &&
          ((window.__locationCountryCode = e.code),
          (window.__locationInfo = e));
      }
      "string" == typeof r.GATEWAY_INJECTED_USER_ID &&
        (window.GATEWAY_INJECTED_USER_ID = r.GATEWAY_INJECTED_USER_ID);
    } catch (t) {}
  var o = document.getElementById("__GTW_LIBRA_ABTEST__");
  if (o && o.textContent && !window._libra_abtest)
    try {
      var n = JSON.parse(o.textContent),
        _ = n && (n._libra_abtest || n.data);
      _ &&
        "object" == typeof _ &&
        !Array.isArray(_) &&
        (window._libra_abtest = _);
    } catch (t) {}
  if (void 0 === window._libra_server_abtest) {
    var i = (function () {
      var t = document.getElementById("__GTW_LIBRA_SERVER_ABTEST__");
      if (t && t.textContent)
        try {
          var r = JSON.parse(t.textContent),
            e = r && r.__server_abtest__;
          if (!e || "object" != typeof e || Array.isArray(e)) return;
          return e;
        } catch (t) {
          return;
        }
    })();
    void 0 !== i && (window._libra_server_abtest = i);
  }
})();
