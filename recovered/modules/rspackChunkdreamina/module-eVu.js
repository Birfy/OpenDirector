import t from "oa";
import n from "bk";
import i from "z8";
import r from "bT";
import o from "Qey";
import l from "yw";
import s from "G4V";
import d from "Dri";
import c from "rEw";
import m from "IZb";
import p from "eDF";
import v from "fG8";
import * as F from "./module-O7U.js";
export var u = r.memo(function (e) {
  let u;
  const { resource, onClick, referenceRenderProps, renderResource } = e;
  const f = r.useMemo(
    () =>
      i.jsx(l.L9n, {
        size: 16,
      }),
    [],
  );
  const content = r.useMemo(
    () => o.Ay.t("seedance_25_check_all", {}, "查看全部"),
    [],
  );
  const onClick_1 = r.useCallback(
    (e) => {
      e.preventDefault();
      if (onClick != null) {
        onClick();
      }
    },
    [onClick],
  );
  const g = r.useMemo(() => {
    var overlayMasked = !(referenceRenderProps == null
      ? undefined
      : referenceRenderProps.groupCollapsed);
    return {
      referenceRenderProps,
      icon: overlayMasked ? f : undefined,
      overlayMasked,
      className: overlayMasked ? "expand-entry-ElVVI8" : undefined,
      onClick: onClick_1,
    };
  }, [f, onClick_1, referenceRenderProps]);
  return i.jsx(F.t, {
    content,
    referenceRenderProps,
    children:
      (u = renderResource == null ? undefined : renderResource(resource, g)) !=
      null
        ? u
        : ((e, u) => {
            const { referenceRenderProps } = u;
            switch (e.type) {
              case "image":
                let r;
                const { resolutionUrlMap, cacheKey } =
                  (r = e.remoteExtraInfo) != null ? r : {};
                return i.jsx(
                  s.R,
                  n._(t._({}, u), {
                    referenceId: e.id,
                    imageUrl: e.url,
                    resolutionUrlMap,
                    cacheKey,
                  }),
                );
              case "video":
                const { coverUrl, duration } = e;
                return i.jsx(
                  d.z,
                  n._(t._({}, u), {
                    referenceId: e.id,
                    videoUrl: e.url,
                    coverUrl: duration ? coverUrl : undefined,
                    duration,
                  }),
                );
              case "audio":
                return i.jsx(
                  c.a,
                  n._(t._({}, u), {
                    referenceId: e.id,
                    audioUrl: e.url,
                    duration: e.duration,
                    label: (
                      referenceRenderProps == null
                        ? undefined
                        : referenceRenderProps.groupCollapsed
                    )
                      ? e.name
                      : undefined,
                  }),
                );
              case "markdown":
                return i.jsx(
                  m.h,
                  n._(t._({}, u), {
                    referenceId: e.id,
                    markdownUrl: e.url,
                  }),
                );
              case "pdf":
                return i.jsx(
                  p.A,
                  n._(t._({}, u), {
                    referenceId: e.id,
                    pdfUrl: e.url,
                  }),
                );
              case "docx":
                return i.jsx(
                  v.y,
                  n._(t._({}, u), {
                    referenceId: e.id,
                    docxUrl: e.url,
                  }),
                );
              default:
                return null;
            }
          })(resource, g),
  });
});
