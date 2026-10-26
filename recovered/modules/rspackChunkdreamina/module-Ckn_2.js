import r from "fg";
import a from "fm";
const n = {
  isEdited: false,
};
export function q(e) {
  if (!e) {
    return n;
  }
  try {
    const t = r.o(JSON.parse(e), a.Cb);
    if (typeof t.isEdit !== "boolean") {
      return n;
    }
    return {
      isEdited: t.isEdit,
    };
  } catch (e) {
    return n;
  }
}
