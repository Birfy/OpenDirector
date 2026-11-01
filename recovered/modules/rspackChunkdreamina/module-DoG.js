import n from "Qey";
import r from "CR";
var a = {
  [r.Q.ErrAgentModelUnavailable]: {
    starlingKey: "agent_model_error_model_unavailable",
    defaultText: "Model unavailable. Choose another model.",
  },
  [r.Q.ErrAgentModelRequestCancelled]: {
    starlingKey: "agent_model_error_model_request_cancelled",
    defaultText: "Request canceled",
  },
  [r.Q.ErrRateLimit]: {
    starlingKey: "agent_model_error_model_rate_limited",
    defaultText: "Too many people are chatting now. Please try again later.",
  },
  [r.Q.ErrAgentModelContextTooLong]: {
    starlingKey: "agent_model_error_model_context_too_long",
    defaultText: "This chat has reached its limit. Start a new one.",
  },
  [r.Q.ErrAgentModelNetworkError]: {
    starlingKey: "agent_model_error_model_network_error",
    defaultText: "Network error. Please try again.",
  },
  [r.Q.ErrAgentModelContentFiltered]: {
    starlingKey: "agent_model_error_model_content_filtered",
    defaultText:
      "This may contain inappropriate content. Edit it and try again.",
  },
};
export { a as n };
function o(e) {
  const t = e === undefined ? undefined : a[e];
  if (t) {
    return n.F2.t(t.starlingKey, {}, t.defaultText);
  }
}
export { o as a };
