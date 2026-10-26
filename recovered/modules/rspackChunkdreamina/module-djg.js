import a from "z8";
import r from "ED";
import i from "nmh";
import o from "uW5";
import l from "fjo";
import s from "MFD";
import c from "Dc";
import u from "tp";
export var R = r.PA(function (e) {
  let t;
  let n;
  var { item, label = item.name, labelClassName } = e;
  const label_1 =
    label && labelClassName
      ? a.jsx("span", {
          className: labelClassName,
          children: label,
        })
      : label;
  switch (item.type) {
    case "image":
      return a.jsx(l.C, {
        url: item.url,
        label: label_1,
        aspectRatio: item.width && item.height ? item.width / item.height : 1,
        resolutionUrlMap:
          (t = item.remoteExtraInfo) == null ? undefined : t.resolutionUrlMap,
        cacheKey: (n = item.remoteExtraInfo) == null ? undefined : n.cacheKey,
      });
    case "video":
      return a.jsx(u.w, {
        url: item.url,
        coverUrl: item.coverUrl,
        width: item.width,
        height: item.height,
        duration: item.duration,
        label: label_1,
      });
    case "audio":
      return a.jsx(i.D, {
        url: item.url,
        duration: item.duration,
        label: label_1,
      });
    case "markdown":
      return a.jsx(s.e, {
        url: item.url,
        label,
      });
    case "pdf":
      return a.jsx(c.L, {
        url: item.url,
        label,
      });
    case "docx":
      return a.jsx(o.f, {
        url: item.url,
        label,
      });
  }
});
