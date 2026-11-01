import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import _l from "xb";
import d from "Du8";
import u from "qO";
import m from "pa";
import p from "Lt";
import h from "kD";
export var L = o.memo(function (e) {
  const { referenceRenderProps = {}, className } = e;
  const l = i._(e, ["referenceRenderProps", "className"]);
  const g = o.useContext(d.R);
  const { visualIndex = 0 } = referenceRenderProps;
  const { id } = o.useContext(u.b);
  const id_1 = o.useMemo(
    () => "".concat(id, "-reference-upload-").concat(visualIndex),
    [id, visualIndex],
  );
  return s.jsx(
    m.x,
    n._(
      r._(
        {
          id: id_1,
          referenceRenderProps,
        },
        l,
      ),
      {
        className: _l(className, {
          [h.A.referenceUpload]: p.G(g),
        }),
      },
    ),
  );
});
