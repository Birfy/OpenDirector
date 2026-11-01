import t from "oa";
import n from "bk";
import i from "qa";
import r from "z8";
import o from "bT";
import l from "ED";
import s from "G4V";
import d from "V99";
var c = l.PA(function (e) {
  const { imageResource, onClick } = e;
  const l = i._(e, ["imageResource", "onClick"]);
  const { id, url = "", remoteExtraInfo = {} } = imageResource;
  const v = d.x();
  const { resolutionUrlMap, cacheKey } = remoteExtraInfo;
  const onClick_1 = o.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (!e.defaultPrevented && (v == null ? undefined : v.openPreview(id))) {
        e.preventDefault();
      }
    },
    [onClick, v, id],
  );
  return r.jsx(
    s.R,
    n._(t._({}, l), {
      referenceId: id,
      imageUrl: url,
      resolutionUrlMap,
      cacheKey,
      onClick: onClick_1,
    }),
  );
});
export { c as d };
