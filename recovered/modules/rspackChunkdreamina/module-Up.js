import i from "NY";
export function D(e) {
  return i._(function* () {
    const t = yield fetch(e);
    const r = yield t.blob();
    return URL.createObjectURL(r);
  })();
}
