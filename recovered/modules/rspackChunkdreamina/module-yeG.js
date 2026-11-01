import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "ED";
import s from "rEw";
import d from "V99";
export var q = l.PA(function (e) {
  const { audioResource, label, onClick } = e;
  const c = i._(e, ["audioResource", "label", "onClick"]);
  const { id, url = "", name, duration } = audioResource;
  const A = d.x();
  const onClick_1 = o.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && (A == null ? undefined : A.openPreview(id))) {
        e.preventDefault();
      }
    },
    [onClick, A, id],
  );
  return r.jsx(
    s.a,
    n._(t._({}, c), {
      referenceId: id,
      audioUrl: url,
      label: label != null ? label : name,
      duration,
      onClick: onClick_1,
    }),
  );
});
