import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "ED";
import s from "eDF";
import d from "V99";
export var W = l.PA(function (e) {
  const { pdfResource, onClick } = e;
  const l = i._(e, ["pdfResource", "onClick"]);
  const { id, url = "" } = pdfResource;
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
    s.A,
    n._(t._({}, l), {
      referenceId: id,
      pdfUrl: url,
      onClick: onClick_1,
    }),
  );
});
