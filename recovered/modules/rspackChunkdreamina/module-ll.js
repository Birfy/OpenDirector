import a from "Qey";
const i = {
  skillName: () =>
    a.Ay.t("skill_agent_preset_query_skill_name", {}, "[skill name]"),
  skillDescription: () =>
    a.Ay.t(
      "skill_agent_preset_query_desc",
      {},
      "[instructions for how this skill should work]",
    ),
};
const n = {
  skillName: () =>
    a.Ay.t("skill_agent_preset_query_intro", {}, "I want to create:"),
  skillDescription: () =>
    a.Ay.t("skill_agent_preset_query_middle", {}, ". This skill can:"),
};
export function _F(e) {
  return e === "skillName" || e === "skillDescription";
}
export function z() {
  return a.Ay.t(
    "skill_agent_create_template_slot_incomplete",
    {},
    "Fill in your skill name and instructions",
  );
}
export function gF(e) {
  return i[e]();
}
export function rP(e) {
  return n[e]();
}
export function w2() {
  return [
    {
      type: "text",
      text: rP("skillName"),
    },
    {
      type: "create-skill-template-slot",
      slotType: "skillName",
    },
    {
      type: "text",
      text: rP("skillDescription"),
    },
    {
      type: "create-skill-template-slot",
      slotType: "skillDescription",
    },
  ];
}
export function XD() {
  return a.Ay.t(
    "skill_publish_edit_skill_placeholder",
    {},
    "I want to edit this skill:",
  );
}
