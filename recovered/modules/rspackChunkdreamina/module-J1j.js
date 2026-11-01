import r from "FY";
export function $T(e) {
  return (
    e === r.A.Success ||
    e === r.A.PoorEffect ||
    e === r.A.Fail ||
    e === r.A.TnsFail
  );
}
export function ar(e) {
  return [r.A.Success, r.A.PoorEffect].includes(e);
}
export function Du(e) {
  return [r.A.Fail, r.A.TnsFail].includes(e);
}
export function cr(e) {
  return [r.A.Init, r.A.Processing].includes(e);
}
