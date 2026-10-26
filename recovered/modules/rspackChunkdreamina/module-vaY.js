import a from "NY";
import r from "oa";
import i from "z8";
import o from "bT";
import l from "ED";
import s from "Qey";
import c from "yw";
import u from "Ib";
import d from "wF";
import { P } from "./module-Emn.js";
import p from "Lx";
function v(reference) {
  return reference.type === "image" || reference.type === "video";
}
function h(e) {
  let t;
  return (t = e == null ? undefined : e.startsWith("blob:")) != null && t;
}
export var G = l.PA(function (e) {
  const {
    reference,
    children,
    insertIntoPromptLabelKey,
    insertIntoPromptDefaultText,
    onInsertReferenceIntoPrompt,
    referenceRenderProps,
  } = e;
  const _ = d.h(p.C);
  const y =
    referenceRenderProps == null
      ? undefined
      : referenceRenderProps.onCollapseReferenceGroup;
  const x = o.useCallback(() => {
    onInsertReferenceIntoPrompt(reference);
    if (y != null) {
      y();
    }
  }, [y, onInsertReferenceIntoPrompt, reference]);
  const k = o.useCallback(
    () =>
      a._(function* () {
        if (v(reference)) {
          if (
            reference.type !== "video" ||
            (n = yield _.getInstance()).validateSubjectCreateVideoDuration(
              reference.duration,
            )
          ) {
            let e;
            var n;
            const i =
              (e = reference.uri) != null ? e : yield reference.resolveUri();
            if (i) {
              if (!n) {
                n = yield _.getInstance();
              }
              const initialData = yield a._(function* () {
                if (reference.type === "video") {
                  var e;
                  var n;
                  var o;
                  var l;
                  let s;
                  const videoUrl = yield a._(function* () {
                    if (!h(reference.url)) {
                      return reference.url;
                    }
                    let e;
                    const n =
                      (e = reference.file) != null
                        ? e
                        : yield reference.resolveFile();
                    if (n) {
                      return URL.createObjectURL(n);
                    }
                  })();
                  return {
                    mediaType: "video",
                    video: {
                      videoId: i,
                      aigcItemId:
                        (s = reference.remoteExtraInfo) == null
                          ? undefined
                          : s.aigcItemId,
                      videoUrl,
                      coverUrl: h(reference.coverUrl)
                        ? undefined
                        : reference.coverUrl,
                      duration: reference.duration,
                    },
                  };
                }
                return {
                  mainImage: r._(
                    {
                      imageUri: i,
                      imageUrl: reference.url,
                      width: reference.width,
                      height: reference.height,
                      coverUrlMap:
                        (n = Object.entries(
                          (e =
                            (o = reference.remoteExtraInfo) == null
                              ? undefined
                              : o.resolutionUrlMap) != null
                            ? e
                            : {},
                        ).filter((e) => typeof e[1] === "string")).length > 0
                          ? Object.fromEntries(n)
                          : undefined,
                    },
                    (
                      (l = reference.remoteExtraInfo) == null
                        ? undefined
                        : l.aigcItemId
                    )
                      ? {
                          aigcImage: {
                            itemId: reference.remoteExtraInfo.aigcItemId,
                          },
                        }
                      : null,
                  ),
                };
              })();
              n.showSubjectCreateModal({
                initialData,
                enterFrom: u.B.Generation,
                onSuccess: () => {
                  n.subjectSearchManager.searchByKeyword("");
                },
              });
            }
          }
        }
      })(),
    [reference, _],
  );
  const options = o.useMemo(() => {
    var e = [];
    if (v(reference)) {
      e.push({
        key: "create-subject",
        text: s.Ay.t("subject_panel_create_btn", {}, "创建主体"),
        icon: i.jsx(c.xZp, {
          size: 16,
        }),
        handler: k,
      });
    }
    e.push({
      key: "insert-into-prompt",
      text: s.Ay.t(insertIntoPromptLabelKey, {}, insertIntoPromptDefaultText),
      icon: i.jsx(c.jHH, {
        size: 16,
      }),
      handler: x,
    });
    return e;
  }, [k, x, insertIntoPromptDefaultText, insertIntoPromptLabelKey, reference]);
  const children_1 = o.useMemo(() => {
    if (referenceRenderProps && o.isValidElement(children)) {
      return o.cloneElement(children, {
        referenceRenderProps: r._(
          {},
          children.props.referenceRenderProps,
          referenceRenderProps,
        ),
      });
    }
    return children;
  }, [children, referenceRenderProps]);
  return i.jsx(
    P,
    {
      resetKey: (
        referenceRenderProps == null
          ? undefined
          : referenceRenderProps.groupCollapsed
      )
        ? "collapsed"
        : "expanded",
      className: "trigger-nFZxNx",
      options,
      children: children_1,
    },
    reference.id,
  );
});
