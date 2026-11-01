export function i() {
  if (typeof window === "undefined") {
    return false;
  }
  let e;
  const t =
    (e = window._libra_server_abtest) == null
      ? undefined
      : e.dreamina_agent_opt_mode;
  return (t == null ? undefined : t.enable) === true;
}
