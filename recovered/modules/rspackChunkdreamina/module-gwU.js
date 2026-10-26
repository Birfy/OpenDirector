import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "ED";
import s from "Dri";
import d from "V99";
export var L = l.PA(function (e) {
  const { videoResource, onClick } = e;
  const l = i._(e, ["videoResource", "onClick"]);
  const { id, url = "", coverUrl, duration } = videoResource;
  const F = d.x();
  const onClick_1 = o.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && (F == null ? undefined : F.openPreview(id))) {
        e.preventDefault();
      }
    },
    [onClick, F, id],
  );
  return r.jsx(
    s.z,
    n._(t._({}, l), {
      referenceId: id,
      videoUrl: url,
      coverUrl: duration ? coverUrl : undefined,
      duration,
      onClick: onClick_1,
    }),
  );
});
