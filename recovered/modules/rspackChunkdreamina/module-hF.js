let r = "";
let s = "";
let n = "";
const a = (t) => {
  if (!(!t || typeof t !== "object" || Array.isArray(t))) {
    return t;
  }
};
const o = (t) => {
  try {
    return a(JSON.parse(t));
  } catch (t) {
    return;
  }
};
const l = (t) => {
  var e;
  var i;
  var r =
    (e = a(t == null ? undefined : t.cc_commerce)) != null
      ? e
      : a(t == null ? undefined : t.ccCommerce);
  if (!r || !("credit_pack_stage" in r || "creditPackStage" in r)) {
    return {
      found: false,
    };
  }
  var s = (i = r.credit_pack_stage) != null ? i : r.creditPackStage;
  if (typeof s === "string") {
    return {
      found: true,
      stage: s.trim(),
      valid: true,
    };
  }
  return {
    found: true,
    valid: false,
  };
};
const c = (t) => {
  var e;
  var i;
  var r =
    (e = a(t == null ? undefined : t.libra_config)) != null
      ? e
      : a(t == null ? undefined : t.libraConfig);
  if (!r) {
    return {
      found: false,
    };
  }
  var s = (i = a(r.ab_config)) != null ? i : a(r.abConfig);
  for (var n of [l(r), l(s)]) {
    if (n.found) {
      return n;
    }
  }
  return {
    found: false,
  };
};
const u = (t) => {
  var code = ((t) => {
    if (t != null && t !== "" && t !== 0 && t !== "0") {
      if (typeof t !== "string" && typeof t !== "number") {
        return "unknown";
      }
      return String(t).slice(0, 64);
    }
  })(t.ret);
  if (code) {
    return {
      code,
      ok: false,
      reason: "business_error",
    };
  }
  for (var i of [c(t), c(a(t.data))]) {
    if (i.found) {
      if (i.valid) {
        return {
          ok: true,
          stage: i.stage,
        };
      }
      return {
        ok: false,
        reason: "invalid_response",
      };
    }
  }
  if (t.response === undefined || t.response === null || t.response === "") {
    return {
      ok: true,
      stage: "",
    };
  }
  var r = typeof t.response === "string" ? o(t.response.trim()) : a(t.response);
  if (r) {
    return u(r);
  }
  return {
    ok: false,
    reason: "invalid_response",
  };
};
export var cP = (t) => {
  var e = t.trim();
  return !!e && s === e;
};
export var kO = (t) => {
  var {
    enableStandaloneCreditsPackPurchaseModal = false,
    isTeamPurchase,
    isOversea = false,
    isStandaloneHost = false,
  } = t;
  return (
    !isTeamPurchase &&
    !isOversea &&
    (!isStandaloneHost || enableStandaloneCreditsPackPurchaseModal) &&
    !!n &&
    s === n &&
    (n && s === n ? r : "") !== "v0"
  );
};
export var Qi = (t) => {
  var e = t.trim();
  if (e !== n) {
    n = e;
    r = "";
    s = "";
  }
};
export var NK = (t, e) => {
  var i;
  var l = e.trim();
  if (!l) {
    return false;
  }
  Qi(l);
  var c = (i = typeof t === "string" ? o(t.trim()) : a(t))
    ? u(i)
    : {
        ok: false,
        reason: "invalid_response",
      };
  return (
    !!c.ok &&
    (((t, e) => {
      var i = typeof t === "string" ? t.trim() : "";
      if (e !== undefined) {
        var a = e.trim();
        if (!a || a !== n) {
          return;
        }
        s = a;
        r = i;
        return;
      }
      if (n) {
        r = i;
        s = n;
      }
    })(c.stage, l),
    true)
  );
};
export var Oo = () => {
  r = "";
  s = "";
  n = "";
};
