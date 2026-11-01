import n from "NY";
import r from "oa";
import a from "bk";
import o from "aX";
import s from "K8";
import c from "pzl";
import l from "B3V";
import d from "SyU";
import u from "ufM";
import v from "gm";
import { C as C_1, X } from "./module-T6.js";
import p from "NP";
function _(e) {
  let t;
  return ((t = e.query) == null ? undefined : t.trim()) || undefined;
}
function y(e) {
  let t;
  let i;
  let n;
  let r;
  let a;
  if (
    (t =
      (i =
        (n = e.uniqueKey) != null
          ? n
          : (r = e.idModel) == null
            ? undefined
            : r.submitId) != null
        ? i
        : e.historyRecordId) != null
  ) {
    return t;
  }
  if ((a = e.idModel) == null) {
    return undefined;
  }
  return a.recordId;
}
function h(e, t, i) {
  for (const n of e) {
    if (i(n)) {
      let r;
      let a;
      let o;
      const itemIndex =
        (r =
          (a = n.itemList) == null
            ? undefined
            : a.findIndex((e) => u.Zu(e) === t.itemId)) != null
          ? r
          : -1;
      const item = (o = n.itemList) == null ? undefined : o[itemIndex];
      if (itemIndex >= 0 && item) {
        return {
          record: n,
          item,
          itemIndex,
        };
      }
    }
  }
}
function g(e, t, i) {
  let n;
  const r = u.Zu(t);
  return (
    r || "".concat((n = y(e)) != null ? n : e.uniqueKey, ":item:").concat(i)
  );
}
export function kz(e) {
  return e.flatMap((e) => {
    if (!o.e(e)) {
      return [e];
    }
    var { submitIdDataMap } = e;
    if (submitIdDataMap) {
      return Object.values(submitIdDataMap)
        .filter(Boolean)
        .sort((e, t) => {
          var i;
          var n;
          var r;
          var a;
          var o;
          var s;
          return (
            ((i =
              (a = t.statusModel) == null || (r = a.timeModel) == null
                ? undefined
                : r.createdTime) != null
              ? i
              : 0) -
            ((n =
              (s = e.statusModel) == null || (o = s.timeModel) == null
                ? undefined
                : o.createdTime) != null
              ? n
              : 0)
          );
        });
    }
    return [];
  });
}
export function oc(e) {
  return e.flatMap((e) => {
    var e_itemList = e.itemList;
    if (!e_itemList || e_itemList.length <= 1) {
      return [
        {
          record: e,
        },
      ];
    }
    return e_itemList.map((scopedItem, scopedItemIndex) => {
      var n = u.Zu(scopedItem);
      return r._(
        {
          record: e,
          scopedItem,
          scopedItemIndex,
          scopedAssetId: g(e, scopedItem, scopedItemIndex),
        },
        n
          ? {
              scopedItemId: n,
            }
          : {},
      );
    });
  });
}
function S(e, t) {
  return (e.length ? e : [undefined]).every((e) => c.cD(e)[t]);
}
export function kT(assetType, t) {
  let i;
  let n;
  let o;
  let s;
  let c;
  let m;
  let p;
  let _;
  let h;
  let g;
  const f =
    "record" in (i = t)
      ? i
      : {
          record: i,
        };
  const { record } = f;
  if (
    assetType !== "audio" ||
    ((s = record.itemList) == null ? undefined : s.length)
  ) {
    const rawId = (n = f.scopedAssetId) != null ? n : y(record);
    if (rawId) {
      const aigcData =
        record.uniqueKey && typeof record.generateType === "number"
          ? record
          : void console.warn(
              "[AssetDomain] skipping AssetHistoryRecord with missing uniqueKey/generateType",
              {
                uniqueKey: record.uniqueKey,
                generateType: record.generateType,
              },
            );
      if (aigcData) {
        let T;
        let J;
        let j;
        let C;
        let w;
        let L;
        let M;
        let A;
        let D;
        let R;
        let N;
        let x;
        let P;
        let E;
        let F;
        let O;
        let K;
        const assetId = l.x(rawId);
        const W =
          (J =
            (j =
              (C =
                (w =
                  (L =
                    (O =
                      (T = f.scopedItem) != null
                        ? T
                        : (M = record.itemList) == null
                          ? undefined
                          : M[0]) == null || (A = O.commonAttr) == null
                      ? undefined
                      : A.coverUrl) != null
                    ? L
                    : O == null || (D = O.video) == null
                      ? undefined
                      : D.coverUrl) != null
                  ? w
                  : O == null || (N = O.video) == null || (R = N.thumb) == null
                    ? undefined
                    : R.url) != null
                ? C
                : O == null || (x = O.image) == null
                  ? undefined
                  : x.url) != null
              ? j
              : (E = record.audioCover) == null || (P = E.coverUrlMap) == null
                ? undefined
                : P[720]) != null
            ? J
            : (F = record.audioCover) == null
              ? undefined
              : F.originUrl;
        const title = (o = record.prompt) != null ? o : record.draftContent;
        const itemIds = ((e) => {
          if (e.scopedItem) {
            if (e.scopedItemId) {
              return [e.scopedItemId];
            }
            return undefined;
          }
          const t = u.wo(e.record);
          if (t.length) {
            return t;
          }
        })(f);
        const q =
          (m = record.statusModel) == null || (c = m.timeModel) == null
            ? undefined
            : c.createdTime;
        return {
          assetId,
          assetType,
          title,
          cover: W,
          createdAt: q,
          updatedAt: q,
          generatedAt: q,
          favorited: f.scopedItem
            ? u.GC(f.record, f.scopedItemId)
            : u.D5(f.record),
          itemLocators: f.scopedItem
            ? [
                r._(
                  {
                    assetType,
                    assetId,
                  },
                  f.scopedItemId
                    ? {
                        itemId: f.scopedItemId,
                      }
                    : {},
                  f.scopedItemIndex !== undefined
                    ? {
                        itemIndex: f.scopedItemIndex,
                      }
                    : {},
                ),
              ]
            : v.H(assetType, assetId, f.record.itemList),
          sourceRef: r._(
            a._(
              r._(
                {
                  source: "aigc-history",
                  uniqueKey: record.uniqueKey,
                },
                f.scopedAssetId && record.uniqueKey
                  ? {
                      recordUniqueKey: record.uniqueKey,
                    }
                  : {},
                record.historyRecordId
                  ? {
                      historyRecordId: record.historyRecordId,
                    }
                  : {},
                ((p = record.idModel) == null ? undefined : p.submitId)
                  ? {
                      submitId: record.idModel.submitId,
                    }
                  : {},
                ((_ = record.idModel) == null ? undefined : _.recordId)
                  ? {
                      recordId: record.idModel.recordId,
                    }
                  : {},
                ((h = record.idModel) == null ? undefined : h.agentHistoryId)
                  ? {
                      agentHistoryId: record.idModel.agentHistoryId,
                    }
                  : {},
                ((g = record.idModel) == null ? undefined : g.workspaceId) !==
                  undefined
                  ? {
                      workspaceId: String(record.idModel.workspaceId),
                    }
                  : {},
              ),
              {
                rawId,
              },
            ),
            itemIds
              ? {
                  itemIds,
                }
              : {},
          ),
          presentation: r._(
            {},
            title
              ? {
                  title,
                }
              : {},
            W
              ? {
                  coverUrl: W,
                }
              : {},
          ),
          capabilities: {
            canFavorite: S(
              (K = ((e) => {
                if (e.scopedItem) {
                  if (e.scopedItem.permission) {
                    return [e.scopedItem.permission];
                  }
                  return [];
                }
                let t;
                let i;
                const n =
                  (t =
                    (i = e.record.itemList) == null
                      ? undefined
                      : i.map((e) => e.permission).filter((e) => !!e)) != null
                    ? t
                    : [];
                if (n.length > 0) {
                  return n;
                }
                return [];
              })(f)),
              "canFavorite",
            ),
            canDelete: S(K, "canDelete"),
            canLocate: S(K, "canLocate"),
          },
          summaryData: {
            assetType,
            aigcData,
          },
          detailComplete: d.F_(assetType, record),
        };
      }
    }
  }
}
export class El {
  query(e) {
    return n
      ._(function* () {
        let t;
        let i = 0;
        let cursor = (t = e.pagination) == null ? undefined : t.cursor;
        while (true) {
          const o = yield this._queryPage(
            a._(r._({}, e), {
              pagination: r._(
                {},
                e.pagination,
                cursor !== undefined
                  ? {
                      cursor,
                    }
                  : {},
              ),
            }),
          );
          if (
            o.entities.length > 0 ||
            !o.nextCursor ||
            i >= 10 ||
            (i++, o.nextCursor === cursor)
          ) {
            return o;
          }
          cursor = o.nextCursor;
        }
      })
      .call(this);
  }
  _queryPage(e) {
    return n
      ._(function* () {
        let t;
        let i;
        let n;
        let offset;
        let searchId;
        let c;
        let l;
        let d;
        let workspaceId;
        let teamMemberUserId;
        let hideStoryAgentResult;
        let k;
        let T;
        let J;
        let searchKeyword;
        let C;
        let generationModeList;
        let L;
        const M = yield this._assetHistoryDataService.getHistoryList(
          ((c = this.assetType),
          (workspaceId = p.z(e)),
          (teamMemberUserId = p.Oy(e)),
          (hideStoryAgentResult = p._y(e)),
          (k = p.r5(c, e).historyFilterTypes),
          (T = p.jT(c, e)),
          (J = p.xX(e).timeRange),
          (C = (searchKeyword = _(e))
            ? ((e) => {
                if (!e) {
                  return {
                    offset: 0,
                  };
                }
                try {
                  const t = JSON.parse(e);
                  if (t && typeof t === "object" && !Array.isArray(t)) {
                    const i = Number(t.offset);
                    return r._(
                      {
                        offset: Number.isFinite(i) ? i : 0,
                      },
                      typeof t.searchId === "string" && t.searchId
                        ? {
                            searchId: t.searchId,
                          }
                        : {},
                    );
                  }
                } catch (e) {}
                const n = Number(e);
                return {
                  offset: Number.isFinite(n) ? n : 0,
                };
              })((d = e.pagination) == null ? undefined : d.cursor)
            : undefined),
          (generationModeList = p.ad(c, e)),
          r._(
            {
              offset:
                (l = C == null ? undefined : C.offset) != null ? l : p.A3(e),
              count: p.XL(e),
              direction: p.AG(e),
              orderBy: p.yV(e),
              filterTypeList: X(c),
              filterStatusList: [-2, ...(p.Vr(e) ? [-1] : []), ...k],
            },
            T,
            (J == null ? undefined : J.beginTimestamp) !== undefined
              ? {
                  filterBeginTimeStamp: J.beginTimestamp,
                }
              : {},
            (J == null ? undefined : J.endTimestamp) !== undefined
              ? {
                  filterEndTimeStamp: J.endTimestamp,
                }
              : {},
            searchKeyword
              ? {
                  searchKeyword,
                }
              : {},
            (C == null ? undefined : C.searchId)
              ? {
                  searchId: C.searchId,
                }
              : {},
            hideStoryAgentResult !== undefined
              ? {
                  hideStoryAgentResult,
                }
              : {},
            workspaceId !== undefined
              ? {
                  workspaceId,
                }
              : {},
            teamMemberUserId !== undefined
              ? {
                  teamMemberUserId,
                }
              : {},
            generationModeList.length
              ? {
                  generationModeList,
                }
              : {},
          )),
        );
        if (!M.ok) {
          throw s.xz(M.code, M.msg);
        }
        const A = kz(M.value.list).filter((e) => C_1(this.assetType, e));
        const D = M.value.usingLocalItemMeta
          ? ((t = (L = M.value.itemMetaList) != null ? L : []),
            (i = []),
            (n = new Set()),
            t.forEach((e) => {
              var t;
              var a =
                (t = h(A, e, (t) => {
                  var i;
                  var n;
                  var r;
                  return new Set(
                    [
                      t.uniqueKey,
                      t.historyRecordId,
                      (i = t.idModel) == null ? undefined : i.submitId,
                      (n = t.idModel) == null ? undefined : n.recordId,
                      t.id,
                      t.submitId,
                      (r = t.task) == null ? undefined : r.submitId,
                    ].filter((e) => !!e),
                  ).has(e.historyId);
                })) || !e.agentHistoryId
                  ? t
                  : h(A, e, (t) => {
                      var i;
                      return (
                        ((i = t.idModel) == null
                          ? undefined
                          : i.agentHistoryId) === e.agentHistoryId
                      );
                    });
              if (a) {
                var { record, item, itemIndex } = a;
                var l = u.Zu(item);
                var scopedAssetId = g(record, item, itemIndex);
                if (!n.has(scopedAssetId)) {
                  n.add(scopedAssetId);
                  i.push(
                    r._(
                      {
                        record,
                        scopedItem: item,
                        scopedItemIndex: itemIndex,
                        scopedAssetId,
                      },
                      l
                        ? {
                            scopedItemId: l,
                          }
                        : {},
                    ),
                  );
                }
              }
            }),
            i)
          : oc(A);
        return r._(
          {
            entities: D.map((e) => kT(this.assetType, e)).filter((e) => !!e),
            nextCursor: M.value.hasMore
              ? ((offset = M.value.nextOffset),
                (searchId = M.value.searchId),
                _(e)
                  ? JSON.stringify(
                      r._(
                        {
                          offset,
                        },
                        searchId
                          ? {
                              searchId,
                            }
                          : {},
                      ),
                    )
                  : String(offset))
              : undefined,
          },
          M.value.searchId
            ? {
                searchId: M.value.searchId,
              }
            : {},
        );
      })
      .call(this);
  }
  constructor(e, t) {
    this.assetType = e;
    this._assetHistoryDataService = t;
  }
}
