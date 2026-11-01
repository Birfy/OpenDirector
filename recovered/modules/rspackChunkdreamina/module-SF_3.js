import a from "Dm";
export function B(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "Reporter";
  if (e.template_id && e.template_id !== "0") {
    ["template_type_id"].forEach((i) => {
      a.F4(
        e[i],
        "[".concat(t, "] ").concat(i, " is required when template_id exists"),
      );
    });
  }
}
