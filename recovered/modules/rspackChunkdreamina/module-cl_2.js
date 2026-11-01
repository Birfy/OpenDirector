import r from "bT";
export function A() {
  let [, eDispatch] = r.useReducer((e) => e + 1, 0);
  return eDispatch;
}
