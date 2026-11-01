export function ty(e) {
  if (e) {
    if (typeof e === "string") {
      return e;
    }
    return e.imageUri;
  }
}
export function Mn(e) {
  let t;
  if (e == null ? undefined : e.vid) {
    return ""
      .concat(String((t = e.source) != null ? t : ""), ":")
      .concat(e.vid);
  }
}
export function vN(e) {
  return (
    (e == null ? undefined : e.status) === "done" &&
    e.auditDecision === "reject"
  );
}
export var oP = {
  status: "idle",
};
export var dH = {
  status: "auditing",
};
export var N3 = {
  status: "done",
  auditDecision: "pass",
};
export var xI = {
  status: "done",
  auditDecision: "reject",
};
