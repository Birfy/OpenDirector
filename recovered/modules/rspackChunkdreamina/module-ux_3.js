import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "ED";
import s from "IZb";
import d from "V99";
export var v = l.PA(function (e) {
  const { markdownResource, onClick } = e;
  const l = i._(e, ["markdownResource", "onClick"]);
  const { id, url = "" } = markdownResource;
  const p = d.x();
  const onClick_1 = o.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && (p == null ? undefined : p.openPreview(id))) {
        e.preventDefault();
      }
    },
    [onClick, p, id],
  );
  return r.jsx(
    s.h,
    n._(t._({}, l), {
      referenceId: id,
      markdownUrl: url,
      onClick: onClick_1,
    }),
  );
});
