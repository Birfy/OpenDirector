import a from "LwL";
import i from "pyg";
import n from "ONA";
import o from "sV8";
import s from "aS";
import { m } from "./module-UEd.js";
import c from "e3";
export var t = (e) => {
  if (!("generateType" in e && n.l(e))) {
    return e.prompt;
  }
  if (o.n(e)) {
    return a.X(e);
  }
  if (s.g(e) && m(e)) {
    var t;
    return (
      i.y((t = e.videoDubbingInfo) == null ? undefined : t.unifiedEditInput) ||
      e.prompt
    );
  }
  if (c.A(e) || s.g(e)) {
    return e.prompt;
  }
};
