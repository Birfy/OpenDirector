import { U } from "./module-uiO.js";
export var u = (() => {
  if (typeof window === "undefined") {
    return false;
  }
  var e;
  var t =
    (e = window._libra_server_abtest) == null
      ? undefined
      : e.cloud_agent_experiment;
  return (
    U(t) &&
    !Array.isArray(t) &&
    "enabled" in t &&
    typeof t.enabled === "boolean" &&
    t.enabled === true
  );
})();
