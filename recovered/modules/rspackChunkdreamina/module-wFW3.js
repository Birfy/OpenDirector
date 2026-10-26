import i from "oa";
export function P(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    resumeContextList,
    agentOptModeEnabled = true,
    cloudAgentExperimentEnabled = false,
  } = t;
  const o = !!(resumeContextList == null
    ? undefined
    : resumeContextList.length);
  let l = {};
  try {
    l = (e && JSON.parse(e)) || {};
  } catch (e) {
    l = {};
  }
  return JSON.stringify(
    i._(
      {},
      l,
      o
        ? {
            resume_context_list: resumeContextList,
          }
        : {},
      agentOptModeEnabled
        ? {
            dreamina_agent_opt_mode: true,
          }
        : {},
      cloudAgentExperimentEnabled
        ? {
            cloud_agent_experiment: true,
          }
        : {},
    ),
  );
}
