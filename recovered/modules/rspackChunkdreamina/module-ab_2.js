import n from "bT";
function o(e, t) {
  switch (t.type) {
    case "RESOLVE":
      return {
        value: t.value,
        error: undefined,
      };
    case "REJECT":
      return {
        value: false,
        error: t.error,
      };
    case "RESET":
      return {
        value: undefined,
        error: undefined,
      };
    default:
      return e;
  }
}
export function A() {
  return n.useReducer(o, {
    value: undefined,
    error: undefined,
  });
}
