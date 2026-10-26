import a from "LLl";
import i from "HSE";
import n from "A3X";
import o from "Lk";
import s from "iwC";
import l from "ihZ";
import c from "jL";
export var C = (e) => {
  var { generateType, firstGenerateType } =
    (d = e.aigcImageParams) != null ? d : {};
  if (a.Y(e)) {
    return "image";
  }
  if (i.J(e)) {
    var d;
    var u;
    var { collection } = e;
    if (
      collection.length > 0 &&
      l.F(
        (u = collection[0].aigcImageParams) == null
          ? undefined
          : u.generateType,
      )
    ) {
      return "image";
    }
    return null;
  }
  if (n.s(e)) {
    if (o.v(generateType) || o.v(firstGenerateType)) {
      return "actionCopy";
    }
    if (s.n(generateType) || s.n(firstGenerateType)) {
      return "digitalHuman";
    }
    if (c.V(generateType)) {
      return "video";
    }
    return null;
  }
  return null;
};
