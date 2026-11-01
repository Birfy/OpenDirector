import r from "guE";
export function Dm(e) {
  return {
    is_agent_mode: 1,
    section_id: e || undefined,
  };
}
export function PO(e) {
  const t = e == null ? undefined : e.enterScenario;
  const i = e == null ? undefined : e.templateId;
  return r.eB({
    template_id: i && i !== "0" ? i : undefined,
    reference_template_id: e == null ? undefined : e.referenceTemplateId,
    enter_scenario: t === "feed" || t === "search" ? t : undefined,
    search_id:
      t === "search" ? (e == null ? undefined : e.searchId) : undefined,
  });
}
export function W_(e) {
  if ((e == null ? undefined : e.templateFrom) === "activity") {
    return e.activityId;
  }
}
export function YQ(e) {
  return {
    cashierBusinessExtra: PO(e),
    cashierActivityId: W_(e),
  };
}
