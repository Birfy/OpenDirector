import a from "Qey";
import r from "xLi";
const s = {
  [r.$.ReviewReject]: () =>
    a.Ay.t(
      "skill_toast_save_failed_sensitive_content",
      {},
      "The text you entered may contain inappropriate content",
    ),
  [r.$.Duplicate]: () =>
    a.Ay.t(
      "skill_card_button_add_duplicate",
      {},
      "This skill has already been added",
    ),
  [r.$.OverLimit]: () =>
    a.Ay.t("skill_overlimit", {}, "You've reached the maximum of 300 skills"),
  [r.$.ActiveLimitExceeded]: () =>
    a.Ay.t(
      "skill_package_toast_activation_limit",
      {},
      "You've reached the active skill limit. Turn some skills off and try again.",
    ),
  [r.$.DuplicateName]: () =>
    a.Ay.t(
      "skill_form_name_duplicate",
      {},
      "A skill with this name already exists. Choose a different name.",
    ),
};
export function S(t) {
  let e;
  if ((e = s[Number(t)]) == null) {
    return undefined;
  }
  return e.call(s);
}
