import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "ED";
import s from "fG8";
import d from "V99";
export var E = l.PA(function (e) {
  const { docxResource, onClick } = e;
  const l = i._(e, ["docxResource", "onClick"]);
  const { id, url = "" } = docxResource;
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
    s.y,
    n._(t._({}, l), {
      referenceId: id,
      docxUrl: url,
      onClick: onClick_1,
    }),
  );
});
