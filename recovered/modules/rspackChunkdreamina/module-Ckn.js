import a from "fg";
import r from "fm";
const n = {
  isEdited: false,
};
export function q(t) {
  if (!t) {
    return n;
  }
  try {
    const e = a.o(JSON.parse(t), r.Cb);
    if (typeof e.isEdit !== "boolean") {
      return n;
    }
    return {
      isEdited: e.isEdit,
    };
  } catch (t) {
    return n;
  }
}
