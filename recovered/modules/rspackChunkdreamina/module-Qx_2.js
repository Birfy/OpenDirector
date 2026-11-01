import n from "NY";
import r from "oa";
import a from "bk";
import o from "qa";
import s from "jf";
const c = {
  1: s._z.PageUp,
  2: s._z.PageDown,
};
const l = {
  1: s.Qu.Image,
  2: s.Qu.Video,
  3: s.Qu.Story,
  4: s.Qu.Canvas,
  5: s.Qu.VideoBGM,
  6: s.Qu.Audio,
  7: s.Qu.VideoAudioEffect,
  8: s.Qu.LipSync,
  9: s.Qu.ActionCopy,
  10: s.Qu.CreationAgent,
  12: s.Qu.Document,
};
const d = {
  0: s.ln.Default,
  1: s.ln.SuperResolution,
  [-1]: s.ln.Favorited,
  [-2]: s.ln.OnlySuccess,
  [-3]: s.ln.Agentic,
  [-4]: s.ln.FrameInterpolation,
};
const u = {
  0: s.ql.CreateTime,
  1: s.ql.UpdateTime,
  2: s.ql.GeneratedTime,
};
export function W(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    _serviceBrand: undefined,
    getHistoryList: (i) =>
      n._(function* () {
        let n;
        let v;
        let m;
        let p;
        const { orderBy } = i;
        const y = o._(i, ["orderBy"]);
        const usingLocalItemMeta =
          ((n = t.isLocalItemMetaEnabled) == null ? undefined : n.call(t)) ===
          true;
        const g = r._(
          a._(r._({}, y), {
            direction: c[i.direction],
            filterTypeList:
              (v = i.filterTypeList) == null ? undefined : v.map((e) => l[e]),
            filterStatusList:
              (m = i.filterStatusList) == null ? undefined : m.map((e) => d[e]),
          }),
          orderBy !== undefined
            ? {
                orderBy: u[orderBy],
              }
            : {},
          usingLocalItemMeta
            ? {
                byLocalItem: true,
                channel: s.Iw.GenerateSidebar,
              }
            : {},
        );
        const f =
          usingLocalItemMeta &&
          !!((p = i.searchKeyword) == null ? undefined : p.trim());
        const I = yield f ? e.getAssetList(g) : e.getHistoryList(g);
        if (I.ok) {
          return a._(r._({}, I), {
            value: a._(r._({}, I.value), {
              usingLocalItemMeta,
            }),
          });
        }
        return I;
      })(),
  };
}
