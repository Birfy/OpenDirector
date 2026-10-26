export function F() {
  if (typeof window === "undefined") {
    return false;
  }
  let t;
  const e =
    (t = window._libra_server_abtest) == null ? undefined : t.scene_config;
  if (typeof e !== "object" || e === null) {
    return false;
  }
  const i = "creation_agent_v33" in e ? e.creation_agent_v33 : undefined;
  if (typeof i !== "object" || i === null || !("extend_ab_params" in i)) {
    return false;
  }
  const i_extend_ab_params = i.extend_ab_params;
  return (
    typeof i_extend_ab_params === "object" &&
    i_extend_ab_params !== null &&
    "enable_directory_skills_upload" in i_extend_ab_params &&
    i_extend_ab_params.enable_directory_skills_upload === true
  );
}
