export function Oi(e) {
  const t = {
    personalListDataType: "publish",
    personalSubTabContentType: e.subTabContentType,
  };
  if (e.enterScenario) {
    t.personalEnterScenario = e.enterScenario;
  }
  return t;
}
