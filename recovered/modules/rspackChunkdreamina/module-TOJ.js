import r from "NY";
import s from "oa";
import n from "bk";
import o from "QWK";
import { N9, tK } from "./module-eA1.js";
import d from "o7";
import c from "A7";
import { rf } from "./module-CFv.js";
import v from "tvS";
import { z as z_1 } from "./module-BOb.js";
import { i as i_1 } from "./module-pyf.js";
import { b as b_1 } from "./module-vB_2.js";
import { R } from "./module-NSp.js";
import { x as x_1 } from "./module-S9_2.js";
import { Je, U6, fH } from "./module-OVQ.js";
import { R as R_1 } from "./module-CRx.js";
import { Dr, xT, yM } from "./module-Z7t.js";
import { F_, Im, Yk, bz, jG, jj, v_ } from "./module-SyU.js";
import { U } from "./module-jjM.js";
import { B as B_1 } from "./module-ggu.js";
import { Dt, QT, mZ } from "./module-uc.js";
import $ from "xi";
import { D as D_1 } from "./module-vJh.js";
import { R as R_3 } from "./module-MU_2.js";
import { W3 } from "./module-IFN.js";
import ec from "si5";
import { V as V_1 } from "./module-BSY.js";
import ev from "K8";
import { S as S_1 } from "./module-j06.js";
import { Q } from "./module-Ceq.js";
import { LQ } from "./module-BNQ.js";
import { Vr, ad, cc, jT, r5, un } from "./module-NP_2.js";
import { t as t_1 } from "./module-VK.js";
import { PW } from "./module-sj.js";
import eC from "vI";
import eD from "yMd";
import { cD } from "./module-pzl.js";
import { x as x_2 } from "./module-B3V.js";
import { H as H_1 } from "./module-gm_2.js";
import { DO, Lx, Tk, Uf, dQ, gs, on, u4 } from "./module-PSG.js";
import { l as l_1 } from "./module-ONA.js";
import eK from "Hi";
import eP from "aX";
import { Zu, c4, wo } from "./module-ufM.js";
import { q as q_1 } from "./module-jdT.js";
function u(e) {
  return (
    typeof e.uniqueKey === "string" &&
    e.uniqueKey.length > 0 &&
    typeof e.generateType === "number"
  );
}
class l {
  getHistoryList(e) {
    return r
      ._(function* () {
        let t;
        const i = yield this._assetHistoryGatewayService.getHistoryList(
          s._({}, e),
        );
        if (i.ok) {
          return n._(s._({}, i), {
            value:
              ((t = i.value),
              s._(
                {
                  hasMore: t.hasMore,
                  nextOffset: t.nextOffset,
                  list: t.list.filter(u),
                },
                t.usingLocalItemMeta !== undefined
                  ? {
                      usingLocalItemMeta: t.usingLocalItemMeta,
                    }
                  : {},
                t.itemMetaList !== undefined
                  ? {
                      itemMetaList: t.itemMetaList,
                    }
                  : {},
                t.searchId !== undefined
                  ? {
                      searchId: t.searchId,
                    }
                  : {},
                t.targetWorkspaceId !== undefined
                  ? {
                      targetWorkspaceId: t.targetWorkspaceId,
                    }
                  : {},
              )),
          });
        }
        return i;
      })
      .call(this);
  }
  constructor(e) {
    this._assetHistoryGatewayService = e;
  }
}
l = o.Cg(
  [
    o.Qj(0, tK),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [tK === undefined ? Object : tK]),
  ],
  l,
);
const _ = v.u1("shared-asset-query-session-service");
class m extends d.jG {
  get onEntitiesUpsert() {
    return this._assetEntityStore.onEntitiesUpsert;
  }
  get onEntitiesUpsertChange() {
    return this._assetEntityStore.onEntitiesUpsertChange;
  }
  get onEntitiesRemove() {
    return this._assetEntityStore.onEntitiesRemove;
  }
  get onGeneratedEntitiesUpsert() {
    return this._onGeneratedEntitiesUpsert.event;
  }
  createQueryContext(e) {
    const t = new z_1(
      this._assetQuerySessionService,
      this._assetEntityStore,
      e,
    );
    this._register({
      dispose: () => t.dispose(),
    });
    return t;
  }
  upsertEntities(e, t) {
    if (e.length !== 0) {
      this._assetEntityStore.upsertMany(e);
      if ((t == null ? undefined : t.source) === "generated") {
        this._onGeneratedEntitiesUpsert.fire(e);
      }
    }
  }
  removeEntities(e) {
    if (e.length) {
      this._assetEntityStore.removeMany(e);
    }
  }
  favorite(e) {
    return this._assetActionService.favorite(e);
  }
  download(e) {
    return this._assetActionService.download(e);
  }
  delete(e) {
    return this._assetActionService.delete(e);
  }
  constructor(e, t, i) {
    super();
    this._assetQuerySessionService = e;
    this._assetEntityStore = t;
    this._assetActionService = i;
    this._onGeneratedEntitiesUpsert = this._register(new c.v());
  }
}
m = o.Cg(
  [
    o.Qj(0, _),
    o.Qj(1, i_1),
    o.Qj(2, rf),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      _ === undefined ? Object : _,
      i_1 === undefined ? Object : i_1,
      rf === undefined ? Object : rf,
    ]),
  ],
  m,
);
class S {
  get(e) {
    return this._executors[e];
  }
  constructor(e) {
    this._executors = e.reduce((acc, item) => {
      acc[item.assetType] = item;
      return acc;
    }, {});
  }
}
const I = v.u1("shared-asset-favorite-executor-registry");
class b extends S {
  constructor(e) {
    super(e.getFavoriteExecutors());
  }
}
b = o.Cg(
  [
    o.Qj(0, R),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [R === undefined ? Object : R]),
  ],
  b,
);
const T = v.u1("shared-asset-download-executor-registry");
class C extends S {
  constructor(e) {
    super(e.getDownloadExecutors());
  }
}
C = o.Cg(
  [
    o.Qj(0, R),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [R === undefined ? Object : R]),
  ],
  C,
);
const D = v.u1("shared-asset-delete-executor-registry");
class M extends S {
  constructor(e) {
    super(e.getDeleteExecutors());
  }
}
M = o.Cg(
  [
    o.Qj(0, R),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [R === undefined ? Object : R]),
  ],
  M,
);
const L = v.u1("shared-asset-mutation-service");
const j = {
  favorite: "canFavorite",
  download: "canDownload",
  delete: "canDelete",
};
class x {
  favorite(e) {
    const t = this._getFavoriteKey(e);
    const i = this._favoriteChains.get(t);
    var r = (i ? i.catch(() => undefined) : Promise.resolve(undefined))
      .then(() => this._runFavorite(e))
      .finally(() => {
        if (this._favoriteChains.get(t) === r) {
          this._favoriteChains.delete(t);
        }
      });
    this._favoriteChains.set(t, r);
    return r;
  }
  download(e) {
    return r
      ._(function* () {
        const { entity, executor } = this._prepareAction(
          "download",
          e,
          this._downloadExecutorRegistry,
        );
        yield executor.download({
          entity,
          target: e,
        });
        return {
          target: e,
        };
      })
      .call(this);
  }
  delete(e) {
    return r
      ._(function* () {
        const { entity, executor } = this._prepareAction(
          "delete",
          e,
          this._deleteExecutorRegistry,
        );
        yield executor.delete({
          entity,
          target: e,
        });
        yield this._assetMutationService.delete(e);
        return {
          target: e,
        };
      })
      .call(this);
  }
  _runFavorite(e) {
    return r
      ._(function* () {
        const { entity, executor } = this._prepareAction(
          "favorite",
          e,
          this._favoriteExecutorRegistry,
        );
        const r = !entity.favorited;
        yield executor.favorite({
          entity,
          target: e,
          isFavorited: r,
        });
        const s = this._assetEntityStore.get(e.assetId);
        if (s) {
          this._assetEntityStore.upsertMany([x_1(s, e, r)]);
        }
        return {
          target: e,
          favorited: r,
        };
      })
      .call(this);
  }
  _prepareAction(e, t, i) {
    const r = this._requireEntity(t);
    if (
      !((e, t) => {
        let i;
        const r = (i = e.capabilities) == null ? undefined : i[j[t]];
        if (r !== undefined) {
          return r;
        }
        return Je(e.summaryData) && e.summaryData.aigcData !== undefined;
      })(r, e)
    ) {
      throw Error("Asset ".concat(r.assetId, " does not support ").concat(e));
    }
    const executor = i.get(r.assetType);
    if (!executor) {
      throw Error(
        "Asset type "
          .concat(r.assetType, " does not have a ")
          .concat(e, " executor"),
      );
    }
    return {
      entity: r,
      executor,
    };
  }
  _getFavoriteKey(e) {
    let t;
    let i;
    const e_itemLocator = e.itemLocator;
    if (e_itemLocator) {
      return "asset:"
        .concat(e.assetId, "|item:")
        .concat((t = e_itemLocator.itemId) != null ? t : "", ":")
        .concat((i = e_itemLocator.itemIndex) != null ? i : "");
    }
    return "asset:".concat(e.assetId);
  }
  _requireEntity(e) {
    const t = this._assetEntityStore.get(e.assetId);
    if (!t) {
      throw Error(
        "Asset ".concat(e.assetId, " was not found in asset-domain store"),
      );
    }
    return t;
  }
  constructor(e, t, i, r, s) {
    this._assetEntityStore = e;
    this._assetMutationService = t;
    this._favoriteExecutorRegistry = i;
    this._downloadExecutorRegistry = r;
    this._deleteExecutorRegistry = s;
    this._favoriteChains = new Map();
  }
}
x = o.Cg(
  [
    o.Qj(0, i_1),
    o.Qj(1, L),
    o.Qj(2, I),
    o.Qj(3, T),
    o.Qj(4, D),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      i_1 === undefined ? Object : i_1,
      L === undefined ? Object : L,
      I === undefined ? Object : I,
      T === undefined ? Object : T,
      D === undefined ? Object : D,
    ]),
  ],
  x,
);
function q(e, t) {
  if (xT(e.assetType)) {
    let i;
    let r;
    let o;
    let a;
    const u = jj(e.assetType, t);
    if (u) {
      return n._(s._({}, e), {
        sourceRef: s._(
          n._(s._({}, e.sourceRef), {
            source:
              (i = (r = e.sourceRef) == null ? undefined : r.source) != null
                ? i
                : "aigc-history",
            uniqueKey: u.uniqueKey,
          }),
          u.historyRecordId
            ? {
                historyRecordId: u.historyRecordId,
              }
            : {},
          u.submitId
            ? {
                submitId: u.submitId,
              }
            : {},
          ((o = t.idModel) == null ? undefined : o.recordId)
            ? {
                recordId: t.idModel.recordId,
              }
            : {},
          ((a = t.idModel) == null ? undefined : a.agentHistoryId)
            ? {
                agentHistoryId: t.idModel.agentHistoryId,
              }
            : {},
        ),
        capabilities: n._(s._({}, e.capabilities), {
          canOpenDetail: true,
        }),
        summaryData: n._(s._({}, bz(e)), {
          assetType: e.assetType,
          aigcData: t,
        }),
        detailData: u,
        detailComplete: true,
      });
    }
  }
}
class O {
  resolveDetail(e) {
    return r
      ._(function* () {
        let t;
        const i =
          e.itemLocator &&
          (t = this._assetEntityStore.getByItemLocator(e.itemLocator)) != null
            ? t
            : this._assetEntityStore.get(e.assetId);
        if (i) {
          if (fH(i)) {
            return i;
          }
          const r = i.assetId;
          const s = this._inFlightResolves.get(r);
          if (s) {
            return s;
          }
          var n = this._resolveEntity(i).then(
            (e) => {
              if (e) {
                this._assetEntityStore.upsert(e);
              }
              if (this._inFlightResolves.get(r) === n) {
                this._inFlightResolves.delete(r);
              }
              return e;
            },
            (e) => {
              if (this._inFlightResolves.get(r) === n) {
                this._inFlightResolves.delete(r);
              }
              throw e;
            },
          );
          this._inFlightResolves.set(r, n);
          return n;
        }
      })
      .call(this);
  }
  _resolveEntity(e) {
    return r
      ._(function* () {
        if (xT(e.assetType)) {
          let t;
          let i;
          let r;
          let o;
          let a;
          let u;
          let l;
          let d;
          const c = bz(e);
          if (c == null ? undefined : c.aigcData) {
            const h = q(e, c.aigcData);
            if (h) {
              return h;
            }
          }
          const v = Im(c);
          const _ =
            (t =
              (i = jG(v, ["history_record_id", "record_id"])) != null
                ? i
                : (a = e.sourceRef) == null
                  ? undefined
                  : a.historyRecordId) != null
              ? t
              : (u = e.sourceRef) == null
                ? undefined
                : u.recordId;
          const p =
            (r =
              (o = jG(v, ["submit_id", "unique_key"])) != null
                ? o
                : (l = e.sourceRef) == null
                  ? undefined
                  : l.submitId) != null
              ? r
              : (d = e.sourceRef) == null
                ? undefined
                : d.uniqueKey;
          if (!_ && !p) {
            return;
          }
          const g = yield this._getContentGenerationItemService.getItemByIds(
            _
              ? {
                  historyIds: [_],
                }
              : {
                  submitIds: [p],
                },
          );
          if (!g.ok) {
            return;
          }
          const m = ((e, t) => {
            for (const i of t) {
              if (i && e[i]) {
                return e[i];
              }
            }
            for (const r of Object.values(e)) {
              if (r) {
                return r;
              }
            }
          })(g.value.data, [_, p]);
          if (!m) {
            return;
          }
          return q(e, m);
        }
        if (e.assetType === "story") {
          if (e.assetType === "story") {
            const f = Yk(e.summaryData, "story")
              ? e.summaryData
              : {
                  assetType: "story",
                };
            return n._(s._({}, e), {
              summaryData: f,
              detailData: s._(
                {
                  assetType: "story",
                },
                f.story
                  ? {
                      story: f.story,
                    }
                  : {},
                f.searchRecord
                  ? {
                      searchRecord: f.searchRecord,
                    }
                  : {},
              ),
              detailComplete: true,
            });
          }
          return;
        }
        if (e.assetType === "canvas") {
          if (e.assetType === "canvas") {
            const y = Yk(e.summaryData, "canvas")
              ? e.summaryData
              : {
                  assetType: "canvas",
                };
            return n._(s._({}, e), {
              summaryData: y,
              detailData: s._(
                {
                  assetType: "canvas",
                },
                y.draft
                  ? {
                      draft: y.draft,
                    }
                  : {},
                y.project
                  ? {
                      project: y.project,
                    }
                  : {},
                y.searchRecord
                  ? {
                      searchRecord: y.searchRecord,
                    }
                  : {},
              ),
              detailComplete: true,
            });
          }
          return;
        }
      })
      .call(this);
  }
  constructor(e, t) {
    this._assetEntityStore = e;
    this._getContentGenerationItemService = t;
    this._inFlightResolves = new Map();
  }
}
O = o.Cg(
  [
    o.Qj(0, i_1),
    o.Qj(1, R_1),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      i_1 === undefined ? Object : i_1,
      R_1 === undefined ? Object : R_1,
    ]),
  ],
  O,
);
function K(e) {
  let t;
  let i;
  return ""
    .concat(e.assetType, ":")
    .concat(e.assetId, ":")
    .concat((t = e.itemId) != null ? t : "", ":")
    .concat(String((i = e.itemIndex) != null ? i : ""));
}
function P(e) {
  if (e.itemId) {
    return "".concat(e.assetType, ":").concat(e.assetId, ":").concat(e.itemId);
  }
  return K(e);
}
function G(assetId, t) {
  if (!(t == null ? undefined : t.length)) {
    return [];
  }
  const i = [];
  const r = new Set();
  t.forEach((t) => {
    if (t.assetId === assetId) {
      var n = K(t);
      if (!r.has(n)) {
        r.add(n);
        i.push(s._({}, t));
      }
    }
  });
  return i;
}
function B(e) {
  if (e.mode === "asset") {
    return {
      assetId: e.assetId,
      mode: "asset",
    };
  }
  return {
    assetId: e.assetId,
    mode: "items",
    itemLocators: G(e.assetId, e.itemLocators),
  };
}
function V(e) {
  const t = [];
  const i = new Map();
  e.forEach((e) => {
    var r;
    var s;
    var n;
    var o = ((e) => {
      if (e.mode === "asset") {
        return {
          assetId: e.assetId,
          mode: "asset",
        };
      }
      const t = G(e.assetId, e.itemLocators);
      if (t.length) {
        return {
          assetId: e.assetId,
          mode: "items",
          itemLocators: t,
        };
      }
    })(e);
    if (o) {
      if (!i.has(o.assetId)) {
        t.push(o.assetId);
      }
      i.set(
        o.assetId,
        ((r = i.get(o.assetId)),
        r && o.mode !== "asset" && r.mode !== "asset"
          ? {
              assetId: o.assetId,
              mode: "items",
              itemLocators: G(o.assetId, [
                ...((s = r.itemLocators) != null ? s : []),
                ...((n = o.itemLocators) != null ? n : []),
              ]),
            }
          : o),
      );
    }
  });
  return t
    .map((e) => i.get(e))
    .filter((e) => !!e)
    .map((e) => B(e));
}
function N(aigcData, t) {
  let i;
  if ((i = aigcData.itemList) == null ? undefined : i.length) {
    return n._(s._({}, aigcData), {
      itemList: aigcData.itemList.filter((e) => {
        var i = QT(e);
        return !i || !t.has(i);
      }),
    });
  }
  return aigcData;
}
class W {
  delete(e) {
    const t = this._assetEntityStore.get(e.assetId);
    if (!t) {
      return Promise.resolve();
    }
    const i = ((e, t) => {
      if (
        e.assetType === "image" ||
        e.assetType === "audio" ||
        e.assetType === "document"
      ) {
        let i;
        let r;
        let o;
        const a = Dt(
          Je(e.summaryData) ? e.summaryData.aigcData : undefined,
          t,
          e.itemLocators,
          e.assetType,
        );
        if (a.length) {
          let u;
          let l;
          let d;
          let c;
          const h = new Set(a);
          const v =
            Je(e.summaryData) &&
            e.summaryData.assetType === e.assetType &&
            e.summaryData.aigcData
              ? n._(s._({}, e.summaryData), {
                  aigcData: N(e.summaryData.aigcData, h),
                })
              : e.summaryData;
          const detailData =
            U6(e.detailData) &&
            e.detailData.assetType === e.assetType &&
            e.detailData.aigcData
              ? n._(s._({}, e.detailData), {
                  aigcData: N(e.detailData.aigcData, h),
                })
              : e.detailData;
          const p = n._(s._({}, e), {
            itemLocators:
              ((d =
                (l = (u = n._(s._({}, e), {
                  itemLocators:
                    (r = e.itemLocators) == null
                      ? undefined
                      : r.filter(
                          (t) =>
                            t.assetType !== e.assetType ||
                            !t.itemId ||
                            !h.has(t.itemId),
                        ),
                })).itemLocators) != null
                  ? l
                  : []),
              (c = 0),
              d.map((e) => {
                if (e.assetType !== u.assetType) {
                  return e;
                }
                return n._(s._({}, e), {
                  itemIndex: c++,
                });
              })),
            summaryData: v,
            detailData,
          });
          if (
            ((i =
              (o = p.itemLocators) == null
                ? undefined
                : o
                    .filter((t) => t.assetType === e.assetType)
                    .map((e) => e.itemId)
                    .filter((e) => !!e)) != null
              ? i
              : []
            ).length
          ) {
            return p;
          }
          return undefined;
        }
      }
    })(t, e);
    if (i) {
      this._assetEntityStore.upsertMany([i]);
      this._syncSelectionAfterPartialDelete(i);
    } else {
      this._deleteAssets([e.assetId]);
    }
    return Promise.resolve();
  }
  _deleteAssets(e) {
    const t = Array.from(new Set(e));
    if (t.length) {
      this._assetEntityStore.removeMany(t);
      const i = new Set(t);
      const r = this._assetSelectionService
        .getSnapshot()
        .selectedEntries.filter((e) => !i.has(e.assetId));
      this._assetSelectionService.setSelectedEntries(r);
    }
  }
  _syncSelectionAfterPartialDelete(e) {
    let t;
    const i = new Map(
      ((t = e.itemLocators) != null ? t : []).map((e) => [P(e), e]),
    );
    const r = this._assetSelectionService
      .getSnapshot()
      .selectedEntries.flatMap((t) => {
        if (t.assetId !== e.assetId || t.mode === "asset") {
          return [t];
        }
        var r;
        var s;
        var n =
          (r =
            (s = t.itemLocators) == null
              ? undefined
              : s.map((e) => i.get(P(e))).filter((e) => !!e)) != null
            ? r
            : [];
        if (n.length) {
          return [
            {
              assetId: t.assetId,
              mode: "items",
              itemLocators: n,
            },
          ];
        }
        return [];
      });
    this._assetSelectionService.setSelectedEntries(r);
  }
  constructor(e, t) {
    this._assetEntityStore = e;
    this._assetSelectionService = t;
  }
}
W = o.Cg(
  [
    o.Qj(0, i_1),
    o.Qj(1, B_1),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      i_1 === undefined ? Object : i_1,
      B_1 === undefined ? Object : B_1,
    ]),
  ],
  W,
);
class H {
  create(e) {
    const sessionId = ((e) => {
      if (!e.trim()) {
        throw Error("AssetQuerySessionId must be a non-empty string");
      }
      return e;
    })(`asset-query-session:${this._sequence++}`);
    const i = n._(
      s._(
        {
          sessionId,
        },
        e,
      ),
      {
        assetIds: [...e.assetIds],
      },
    );
    this._sessions.set(sessionId, i);
    return i;
  }
  get(e) {
    const t = this._sessions.get(e);
    if (t) {
      return n._(s._({}, t), {
        assetIds: [...t.assetIds],
      });
    }
  }
  getAll() {
    return Array.from(this._sessions.values()).map((e) =>
      n._(s._({}, e), {
        assetIds: [...e.assetIds],
      }),
    );
  }
  append(e, t) {
    let i;
    let r;
    let o;
    let a;
    const u = this._requireSession(e, "append");
    const l = n._(s._({}, u), {
      assetIds:
        ((i = u.assetIds),
        (r = t.assetIds),
        (o = new Set(i)),
        (a = [...i]),
        r.forEach((e) => {
          if (!o.has(e)) {
            o.add(e);
            a.push(e);
          }
        }),
        a),
      nextCursor: t.nextCursor,
      hasMore: t.hasMore,
      loading: false,
      initialized: true,
      stale: false,
    });
    this._sessions.set(e, l);
    return l;
  }
  replace(e, t) {
    const i = this._requireSession(e, "replace");
    const r = n._(s._({}, i), {
      assetIds: [...t.assetIds],
      nextCursor: t.nextCursor,
      hasMore: t.hasMore,
      loading: false,
      initialized: true,
      stale: false,
    });
    this._sessions.set(e, r);
    return r;
  }
  update(e, t) {
    const i = this._requireSession(e, "update");
    const r = s._(
      {},
      i,
      t,
      t.assetIds
        ? {
            assetIds: [...t.assetIds],
          }
        : {},
    );
    this._sessions.set(e, r);
    return r;
  }
  remove(e) {
    this._sessions.delete(e);
  }
  clear() {
    this._sessions.clear();
  }
  _requireSession(e, t) {
    const i = this._sessions.get(e);
    if (!i) {
      throw Error(
        "AssetListSessionRepository."
          .concat(t, ": unknown sessionId ")
          .concat(e),
      );
    }
    return i;
  }
  constructor() {
    this._sessions = new Map();
    this._sequence = 0;
  }
}
const z = v.u1("shared-asset-list-session-repository");
class J {
  shouldUseQueryServiceForKeywordSearch(e) {
    let t;
    return !!((t = e.filters) == null ? undefined : t.teamId);
  }
}
const Y = v.u1("shared-asset-query-search-route-policy-service");
function Z(e, t) {
  let i;
  let r;
  let s;
  let n;
  let o;
  switch (t) {
    case "updated_time":
      if ((i = (r = e.updatedAt) != null ? r : e.createdAt) != null) {
        return i;
      }
      return 0;
    case "generated_time":
      if ((s = (n = e.generatedAt) != null ? n : e.createdAt) != null) {
        return s;
      }
      return 0;
    default:
      if ((o = e.createdAt) != null) {
        return o;
      }
      return 0;
  }
}
function X(e, t, sort) {
  let r;
  let s;
  const n =
    (r = sort == null ? undefined : sort.field) != null ? r : "created_time";
  const o = (s = sort == null ? undefined : sort.order) != null ? s : "desc";
  const a = Z(e, n);
  const u = Z(t, n);
  const l = o === "asc" ? a - u : u - a;
  if (l !== 0) {
    return l;
  }
  return String(e.assetId).localeCompare(String(t.assetId));
}
const ee = Dr.filter((e) => e !== "subject");
function et(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    !Array.isArray(e) &&
    (typeof e.cursor === "string" || e.cursor === null) &&
    typeof e.failedAttempts === "number"
  );
}
function ei(e) {
  return Object.keys(e).length > 0;
}
function er(e) {
  let t;
  if (et(e)) {
    return {
      cursor: e.cursor,
      failedAttempts:
        Number.isFinite((t = e.failedAttempts)) && t >= 0 ? Math.floor(t) : 0,
    };
  }
  return e;
}
class en {
  query(e) {
    return r
      ._(function* () {
        let t;
        let i;
        if (e.assetType) {
          if (
            (t =
              (i = this._strategies.get(e.assetType)) == null
                ? undefined
                : i.query(e)) != null
          ) {
            return t;
          }
          return {
            entities: [],
          };
        }
        return this._queryAllAssetTypes(e);
      })
      .call(this);
  }
  _queryAllAssetTypes(e) {
    return r
      ._(function* () {
        let t;
        const i = this._parseBrowseCursor(
          (t = e.pagination) == null ? undefined : t.cursor,
        );
        const r = i
          ? Object.entries(i)
              .filter((e) => {
                var [t, i] = e;
                return yM(t) && !(et(i) && i.failedAttempts >= 1);
              })
              .map((e) => {
                var [t] = e;
                return t;
              })
          : [...ee];
        const o = yield Promise.allSettled(
          r.map((t) => {
            var r;
            return this.query(
              n._(s._({}, e), {
                assetType: t,
                pagination: n._(s._({}, e.pagination), {
                  cursor:
                    (r = ((e) => {
                      if (e !== undefined) {
                        if (et(e)) {
                          return e.cursor;
                        }
                        return e;
                      }
                    })(i == null ? undefined : i[t])) != null
                      ? r
                      : undefined,
                }),
              }),
            );
          }),
        );
        const a = [];
        const u = [];
        o.forEach((result, t) => {
          var error;
          var assetType = r[t];
          if (result.status === "fulfilled") {
            a.push({
              assetType,
              result: result.value,
            });
          } else {
            u.push({
              assetType,
              result,
            });
            error = result.reason;
            $.V.warn("[asset-domain] Asset type query failed", {
              assetType,
              error,
            });
          }
        });
        if (!a.length && u.length > 0 && u[0]) {
          throw u[0].result.reason;
        }
        const l = ((e, t, i) => {
          let r;
          let n;
          r = e.reduce((acc, item) => {
            var i;
            var r;
            var { assetType, result } = item;
            var o =
              (i = result).nextCursor !== undefined
                ? (r = i.nextCursor) != null
                  ? r
                  : null
                : undefined;
            if (o !== undefined) {
              acc[assetType] = o;
            }
            return acc;
          }, {});
          n = t.reduce((acc, item) => {
            var r;
            var { assetType } = item;
            var n =
              (r = i == null ? undefined : i[assetType]) === undefined
                ? null
                : et(r)
                  ? r.failedAttempts >= 1
                    ? undefined
                    : {
                        cursor: r.cursor,
                        failedAttempts: r.failedAttempts + 1,
                      }
                  : {
                      cursor: r,
                      failedAttempts: 1,
                    };
            if (n !== undefined) {
              acc[assetType] = er(n);
            }
            return acc;
          }, {});
          return s._({}, r, n);
        })(a, u, i);
        return {
          entities: a
            .flatMap((e) => {
              var { result } = e;
              return result.entities;
            })
            .sort((t, i) => X(t, i, e.sort)),
          nextCursor: this._stringifyBrowseCursor(l),
        };
      })
      .call(this);
  }
  _parseBrowseCursor(e) {
    if (e) {
      try {
        const t = JSON.parse(e);
        if (!(!t || typeof t !== "object" || Array.isArray(t))) {
          const i = Object.entries(t).reduce((acc, entry) => {
            var [i, r] = entry;
            var s =
              typeof r === "string" || r === null || et(r) ? er(r) : undefined;
            if (yM(i) && s !== undefined) {
              acc[i] = s;
            }
            return acc;
          }, {});
          if (ei(i)) {
            return i;
          }
          return undefined;
        }
        return;
      } catch (e) {
        return;
      }
    }
  }
  _stringifyBrowseCursor(e) {
    if (ei(e)) {
      return JSON.stringify(e);
    }
  }
  constructor(e) {
    this._strategies = e.getStrategies();
  }
}
en = o.Cg(
  [
    o.Qj(0, D_1),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [D_1 === undefined ? Object : D_1]),
  ],
  en,
);
function ea(e) {
  return "canSearchDeeper" in e;
}
const eu = v.u1("shared-asset-search-service");
class ed {
  query(input) {
    return r
      ._(function* () {
        const t = yield this._runQuery(input);
        this._assetEntityStore.upsertMany(t.entities);
        const i = ea(t);
        const r = this._assetListSessionStore.create({
          input,
          assetIds: t.entities.map((e) => e.assetId),
          nextCursor: t.nextCursor,
          hasMore: !!t.nextCursor,
          loading: false,
          initialized: true,
          stale: false,
          canSearchDeeper: i ? t.canSearchDeeper : undefined,
          deeperCursor: i ? t.deeperCursor : undefined,
        });
        const s = this._toQuerySessionResult(r);
        if ("searchId" in t && t.searchId) {
          s.searchId = t.searchId;
        }
        return s;
      })
      .call(this);
  }
  loadMore(e) {
    return r
      ._(function* () {
        const t = this._requireSession(e);
        if (!t.nextCursor) {
          return this._toQuerySessionResult(t);
        }
        const i = this._bumpLoadMoreGeneration(e);
        const writeEpoch = this._getGenerations(e).writeEpoch;
        const o = yield this._runQuery(
          n._(s._({}, t.input), {
            pagination: n._(s._({}, t.input.pagination), {
              cursor: t.nextCursor,
            }),
          }),
        );
        const a = this._sessionGenerations.get(e);
        const u = this._assetListSessionStore.get(e);
        if (!u) {
          throw new W3(e, "loadMore");
        }
        if (!a || a.loadMore !== i || a.writeEpoch !== writeEpoch) {
          return this._toQuerySessionResult(u);
        }
        this._assetEntityStore.upsertMany(o.entities);
        const l = this._assetListSessionStore.append(e, {
          assetIds: o.entities.map((e) => e.assetId),
          nextCursor: o.nextCursor,
          hasMore: !!o.nextCursor,
        });
        return this._toQuerySessionResult(l);
      })
      .call(this);
  }
  searchDeeper(e) {
    return r
      ._(function* () {
        let t;
        const i = this._requireSession(e);
        if (!i.deeperCursor) {
          return this._toQuerySessionResult(i);
        }
        const r = this._bumpLoadMoreGeneration(e);
        const writeEpoch = this._getGenerations(e).writeEpoch;
        const a = yield this._runQuery(
          n._(s._({}, i.input), {
            pagination: n._(s._({}, i.input.pagination), {
              cursor: i.deeperCursor,
            }),
          }),
        );
        const u = this._assetListSessionStore.get(e);
        if (!u) {
          throw new W3(e, "searchDeeper");
        }
        const l = this._sessionGenerations.get(e);
        if (!l || l.loadMore !== r || l.writeEpoch !== writeEpoch) {
          return this._toQuerySessionResult(u);
        }
        this._assetEntityStore.upsertMany(a.entities);
        const d = this._assetListSessionStore.append(e, {
          assetIds: a.entities.map((e) => e.assetId),
          nextCursor: a.nextCursor,
          hasMore: !!a.nextCursor,
        });
        if (ea(a)) {
          this._assetListSessionStore.update(e, {
            canSearchDeeper: a.canSearchDeeper,
            deeperCursor: a.deeperCursor,
          });
        }
        return this._toQuerySessionResult(
          (t = this._assetListSessionStore.get(e)) != null ? t : d,
        );
      })
      .call(this);
  }
  canSearchDeeper(e) {
    const t = this._assetListSessionStore.get(e);
    return !!((t == null ? undefined : t.canSearchDeeper) && t.deeperCursor);
  }
  refresh(e) {
    return r
      ._(function* () {
        let t;
        const i = this._requireSession(e);
        const r = this._bumpRefreshGeneration(e);
        const o = yield this._runQuery(
          n._(s._({}, i.input), {
            pagination: n._(s._({}, i.input.pagination), {
              cursor: undefined,
            }),
          }),
        );
        const a = this._assetListSessionStore.get(e);
        if (!a) {
          throw new W3(e, "refresh");
        }
        if (!this._isLatestRefresh(e, r)) {
          return this._toQuerySessionResult(a);
        }
        this._assetEntityStore.upsertMany(o.entities);
        const u = this._assetListSessionStore.replace(e, {
          assetIds: o.entities.map((e) => e.assetId),
          nextCursor: o.nextCursor,
          hasMore: !!o.nextCursor,
        });
        const l = ea(o);
        this._assetListSessionStore.update(e, {
          canSearchDeeper: l ? o.canSearchDeeper : undefined,
          deeperCursor: l ? o.deeperCursor : undefined,
        });
        const d = this._sessionGenerations.get(e);
        if (d) {
          d.writeEpoch += 1;
        }
        return this._toQuerySessionResult(
          (t = this._assetListSessionStore.get(e)) != null ? t : u,
        );
      })
      .call(this);
  }
  disposeSession(e) {
    this._assetListSessionStore.remove(e);
    this._sessionGenerations.delete(e);
  }
  peekSession(e) {
    const t = this._assetListSessionStore.get(e);
    if (t) {
      return this._toQuerySessionResult(t);
    }
  }
  hasMore(e) {
    const t = this._assetListSessionStore.get(e);
    return !!(t == null ? undefined : t.nextCursor);
  }
  _getGenerations(e) {
    let t = this._sessionGenerations.get(e);
    if (!t) {
      t = {
        refresh: 0,
        loadMore: 0,
        writeEpoch: 0,
      };
      this._sessionGenerations.set(e, t);
    }
    return t;
  }
  _bumpRefreshGeneration(e) {
    const t = this._getGenerations(e);
    t.refresh += 1;
    return t.refresh;
  }
  _bumpLoadMoreGeneration(e) {
    const t = this._getGenerations(e);
    t.loadMore += 1;
    return t.loadMore;
  }
  _isLatestRefresh(e, t) {
    let i;
    return (
      ((i = this._sessionGenerations.get(e)) == null
        ? undefined
        : i.refresh) === t
    );
  }
  _requireSession(e) {
    const t = this._assetListSessionStore.get(e);
    if (!t) {
      throw Error("Unknown asset query session: ".concat(e));
    }
    return t;
  }
  _toQuerySessionResult(e) {
    return {
      sessionId: e.sessionId,
      snapshot: {
        input: e.input,
        assetIds: [...e.assetIds],
        nextCursor: e.nextCursor,
      },
      canSearchDeeper: e.canSearchDeeper,
    };
  }
  _runQuery(e) {
    if (
      e.query &&
      e.assetType !== undefined &&
      xT(e.assetType) &&
      this._assetQuerySearchRoutePolicyService.shouldUseQueryServiceForKeywordSearch(
        e,
      )
    ) {
      return this._assetQueryService.query(e);
    }
    if (e.query && e.assetType !== "subject") {
      return this._assetSearchService.search(e);
    }
    return this._assetQueryService.query(e);
  }
  constructor(e, t, i, r, s) {
    this._assetQueryService = e;
    this._assetSearchService = t;
    this._assetEntityStore = i;
    this._assetListSessionStore = r;
    this._assetQuerySearchRoutePolicyService = s;
    this._sessionGenerations = new Map();
  }
}
ed = o.Cg(
  [
    o.Qj(0, R_3),
    o.Qj(1, eu),
    o.Qj(2, i_1),
    o.Qj(3, z),
    o.Qj(4, Y),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      R_3 === undefined ? Object : R_3,
      eu === undefined ? Object : eu,
      i_1 === undefined ? Object : i_1,
      z === undefined ? Object : z,
      Y === undefined ? Object : Y,
    ]),
  ],
  ed,
);
function eS(e) {
  return !!e && "deeper" in e && e.deeper;
}
function eI(e) {
  switch (e) {
    case "image":
      return PW.Image;
    case "video":
      return PW.Video;
    case "audio":
      return PW.Audio;
    case "document":
      return PW.Document;
    case "story":
      return PW.Story;
    case "canvas":
      return PW.Canvas;
    case "subject":
      return;
    default:
      throw Error("Unsupported asset type: ".concat(String(e)));
  }
}
function eb(e) {
  return eI(e) !== undefined;
}
function eT(e) {
  if (Object.keys(e).length) {
    return JSON.stringify(e);
  }
}
const ej = new Set(Object.values(eD.ce).filter((e) => typeof e === "number"));
function ex(e, t, i) {
  let r;
  if ((r = Tk(e, i)) != null) {
    return r;
  }
  return Tk(e, t);
}
function ew(e) {
  if (u4(e)) {
    const t = DO(e, {
      canFavorite: (e) => ex(e, "can_favorite", "canFavorite"),
      canDelete: (e) => ex(e, "can_delete", "canDelete"),
      canLocate: (e) => ex(e, "can_locate", "canLocate"),
      canEdit: (e) => ex(e, "can_edit", "canEdit"),
    });
    if (Object.keys(t).length) {
      return t;
    }
    return undefined;
  }
}
function ek(e) {
  return mZ(e);
}
function eA(e) {
  let t;
  let i;
  let r;
  if ((t = (i = e.submit_id) != null ? i : e.history_record_id) != null) {
    return t;
  }
  return ek((r = e.item_list) == null ? undefined : r[0]);
}
function eq(e) {
  let t;
  let i;
  let r;
  let s;
  let n;
  let o;
  let a;
  let u;
  let l;
  let d;
  let c;
  let h;
  let v;
  let _;
  if (
    (t =
      (i =
        (r =
          (s =
            (n =
              e == null || (o = e.common_attr) == null
                ? undefined
                : o.cover_url) != null
              ? n
              : e == null || (a = e.commonAttr) == null
                ? undefined
                : a.coverUrl) != null
            ? s
            : e == null || (l = e.video) == null || (u = l.thumb) == null
              ? undefined
              : u.url) != null
          ? r
          : e == null || (d = e.image) == null
            ? undefined
            : d.url) != null
        ? i
        : e == null || (h = e.common_attr) == null || (c = h.item_urls) == null
          ? undefined
          : c[0]) != null
  ) {
    return t;
  }
  if (e == null || (_ = e.commonAttr) == null || (v = _.itemUrls) == null) {
    return undefined;
  }
  return v[0];
}
function eO(e, t) {
  return (e.length ? e : [undefined]).every((e) => cD(e)[t]);
}
class eF {
  search(e) {
    return r
      ._(function* () {
        if (!e.query) {
          throw ev.xz(-1, "asset search keyword is required");
        }
        const t = ((e) => {
          if (e) {
            try {
              t = JSON.parse(e);
            } catch (e) {
              return;
            }
            if (!(!t || typeof t !== "object" || Array.isArray(t))) {
              var t;
              const i = {};
              Dr.forEach((e) => {
                var r = t[e];
                if (
                  typeof r === "object" &&
                  r !== null &&
                  (("retry" in r && r.retry === true) ||
                    ("deeper" in r && r.deeper === true
                      ? typeof r.blockIndex === "number"
                      : typeof r.searchId === "string" &&
                        (typeof r.offset === "string" ||
                          typeof r.offset === "number")))
                ) {
                  i[e] = r;
                }
              });
              if (Object.keys(i).length) {
                return i;
              }
              return undefined;
            }
          }
        })((n = e.pagination) == null ? undefined : n.cursor);
        const i = (
          e.assetType ? [e.assetType] : t ? Object.keys(t).filter(yM) : [...Dr]
        ).filter(eb);
        if (!i.length) {
          throw ev.xz(-1, "no asset types to search");
        }
        const r = yield Promise.all(
          i.map((i) => {
            var r = t == null ? undefined : t[i];
            return this._searchByAssetType(i, e, r);
          }),
        );
        const s = r.filter((e) => e.ok);
        if (!s.length) {
          var n;
          var o;
          let a;
          let u;
          const l = r.find((e) => !e.ok);
          throw ev.xz(
            (a = l == null ? undefined : l.code) != null ? a : -1,
            (u = l == null ? undefined : l.msg) != null
              ? u
              : "asset search failed",
          );
        }
        const d = {};
        r.forEach((e, r) => {
          var s = i[r];
          if (e.ok) {
            if (e.nextCursor) {
              d[e.assetType] = e.nextCursor;
            }
            return;
          }
          var n = t == null ? undefined : t[s];
          d[s] =
            n != null
              ? n
              : {
                  retry: true,
                };
        });
        const c = {};
        s.forEach((e) => {
          if (e.canSearchDeeper) {
            var i = t == null ? undefined : t[e.assetType];
            var r = eS(i) ? i.blockIndex : 0;
            c[e.assetType] = {
              deeper: true,
              blockIndex: r + 1,
            };
          }
        });
        return {
          query: e.query,
          entities: s
            .flatMap((e) => e.entities)
            .sort((t, i) => X(t, i, e.sort)),
          nextCursor: eT(d),
          searchId: (o = s[0]) == null ? undefined : o.searchId,
          canSearchDeeper: s.some((e) => e.canSearchDeeper),
          deeperCursor: eT(c),
        };
      })
      .call(this);
  }
  _searchByAssetType(e, t, i) {
    return r
      ._(function* () {
        let r;
        let n;
        let o;
        let a;
        let u;
        let l;
        let d;
        let entities;
        const searchAssetType = eI(e);
        if (!searchAssetType || !t.query) {
          return {
            ok: false,
            code: -1,
            msg: searchAssetType
              ? "asset search keyword is required"
              : "unsearchable asset type: ".concat(e),
          };
        }
        const v = i && "searchId" in i ? i : undefined;
        const _ = eS(i) ? i : undefined;
        const p = (l = t.filters) == null ? undefined : l.workspaceId;
        r = {};
        if (Vr(t) && LQ(e, "search")) {
          r.onlyFavorited = true;
        }
        if (
          (o = (n = r5(e, t, "search")).historyFilterTypes.filter((e) => e > 0))
            .length
        ) {
          r.showTypeList = o;
        }
        if (n.hasFrameInterpolation) {
          r.isInsertFrame = true;
        }
        Object.assign(r, jT(e, t));
        if ((a = ad(e, t)) == null ? undefined : a.length) {
          r.generationModeList = a;
        }
        const g = r;
        const searchParams = s._(
          {
            searchChannel: p ? "generate" : "asset",
            keyword: t.query,
            source: "input",
            count:
              (u = (d = t.pagination) == null ? undefined : d.pageSize) != null
                ? u
                : 20,
          },
          p
            ? {
                workspaceId: p,
              }
            : {},
          _
            ? {
                blockIndex: _.blockIndex,
              }
            : {},
          t.hideStoryAgentResult !== undefined
            ? {
                hideStoryAgentResult: t.hideStoryAgentResult,
              }
            : {},
          cc(t) !== undefined
            ? {
                sortField: cc(t),
              }
            : {},
          un(t) !== undefined
            ? {
                sortOrder: un(t),
              }
            : {},
          g,
        );
        const f = v
          ? ((e) => {
              const { searchParams, searchAssetType, cursor } = e;
              return ec.yC(
                searchParams,
                {
                  type: searchAssetType,
                  data: [],
                },
                {
                  searchId: cursor.searchId,
                  offset: String(cursor.offset),
                  hasMore: true,
                },
              );
            })({
              searchParams,
              searchAssetType,
              cursor: v,
            })
          : searchParams;
        const y = yield this._searchCoreService.getAssetsSearchResult(
          searchAssetType,
          f,
        );
        if (!y.ok) {
          return {
            ok: false,
            code: y.code,
            msg: y.msg,
          };
        }
        try {
          entities = yield this._mapSearchEntities(e, y.value.value.data);
        } catch (error) {
          if (typeof error === "object" && error !== null) {
            return {
              ok: false,
              code: typeof error.code === "number" ? error.code : -1,
              msg:
                typeof error.msg === "string"
                  ? error.msg
                  : typeof error.message === "string"
                    ? error.message
                    : "asset search map failed",
            };
          }
          return {
            ok: false,
            code: -1,
            msg: String(error),
          };
        }
        const { searchId } = y.value;
        return {
          ok: true,
          assetType: e,
          entities,
          searchId,
          canSearchDeeper: xT(e) && !!y.value.canSearchDeeper,
          nextCursor:
            y.value.hasMore && searchId
              ? {
                  searchId,
                  offset: Number(y.value.offset),
                }
              : undefined,
        };
      })
      .call(this);
  }
  _mapSearchEntities(e, t) {
    return r
      ._(function* () {
        let i;
        if (xT(e)) {
          return t.flatMap((t) => {
            var i;
            var r = ((e, t) => {
              if (!t || typeof t !== "object") {
                return t;
              }
              const { asset } = t;
              if (asset && typeof asset === "object") {
                const r = asset[e];
                if (r && typeof r === "object") {
                  return r;
                }
                return asset;
              }
              return t;
            })(e, t);
            var o = ((e) => {
              if (u4(e)) {
                let t;
                let i;
                const r = gs(e, "asset_option");
                const s = gs(e, "conversation_session");
                const n = ew(gs(e, "permission"));
                const o = e.item_list;
                const video = gs(e, "video");
                const originVideo =
                  (t = gs(e, "origin_video")) != null
                    ? t
                    : gs(e, "originVideo");
                const l = gs(e, "audio_cover");
                const d = l
                  ? DO(l, {
                      origin_url: (e) => on(e, "origin_url"),
                      cover_url_map: (e) => gs(e, "cover_url_map"),
                    })
                  : undefined;
                const c =
                  (i = Uf(e, "generate_type")) != null
                    ? i
                    : Uf(e, "generateType");
                const item_list = Array.isArray(o)
                  ? o
                      .map((e) =>
                        ((e) => {
                          if (u4(e)) {
                            const t = gs(e, "common_attr");
                            const i = gs(e, "commonAttr");
                            const r = gs(e, "image");
                            const s = gs(e, "video");
                            const n = ew(gs(e, "permission"));
                            const o = s ? gs(s, "thumb") : undefined;
                            const id = on(e, "id");
                            const u = t
                              ? DO(t, {
                                  id: (e) => on(e, "id"),
                                  cover_url: (e) => on(e, "cover_url"),
                                  description: (e) => on(e, "description"),
                                  item_urls: (e) => dQ(e, "item_urls"),
                                  prompt: (e) => on(e, "prompt"),
                                  title: (e) => on(e, "title"),
                                })
                              : undefined;
                            const l = i
                              ? DO(i, {
                                  id: (e) => on(e, "id"),
                                  coverUrl: (e) => on(e, "coverUrl"),
                                  description: (e) => on(e, "description"),
                                  itemUrls: (e) => dQ(e, "itemUrls"),
                                  prompt: (e) => on(e, "prompt"),
                                  title: (e) => on(e, "title"),
                                })
                              : undefined;
                            const d = r
                              ? DO(r, {
                                  url: (e) => on(e, "url"),
                                })
                              : undefined;
                            const thumb = o
                              ? DO(o, {
                                  url: (e) => on(e, "url"),
                                })
                              : undefined;
                            return Lx({
                              id,
                              permission: n,
                              common_attr:
                                u && Object.keys(u).length ? u : undefined,
                              commonAttr:
                                l && Object.keys(l).length ? l : undefined,
                              image: d && Object.keys(d).length ? d : undefined,
                              video: s
                                ? Lx({
                                    thumb,
                                  })
                                : undefined,
                            });
                          }
                        })(e),
                      )
                      .filter((e) => !!e)
                  : undefined;
                const submit_id = on(e, "submit_id");
                const history_record_id = on(e, "history_record_id");
                const created_time = Uf(e, "created_time");
                const prompt = on(e, "prompt");
                const draft_content = on(e, "draft_content");
                const f = s
                  ? DO(s, {
                      history_record_id: (e) => on(e, "history_record_id"),
                    })
                  : undefined;
                const y = r
                  ? DO(r, {
                      has_favorited: (e) => Tk(e, "has_favorited"),
                      favorite_item_id_list: (e) =>
                        dQ(e, "favorite_item_id_list"),
                    })
                  : undefined;
                return Lx({
                  submit_id,
                  history_record_id,
                  permission: n,
                  generate_type:
                    typeof c === "number" && ej.has(c) ? c : undefined,
                  created_time,
                  asset_option: y && Object.keys(y).length ? y : undefined,
                  item_list,
                  prompt,
                  draft_content,
                  video,
                  originVideo,
                  audio_cover: d && Object.keys(d).length ? d : undefined,
                  conversation_session:
                    f && Object.keys(f).length ? f : undefined,
                });
              }
            })(r);
            if (
              !o ||
              (e === "audio" &&
                !((i = o.item_list) == null ? undefined : i.length))
            ) {
              return [];
            }
            var a = eA(o);
            if (!a) {
              return [];
            }
            var u = x_2(a);
            var l = ((e, t, i) => {
              let r;
              let o;
              let a;
              let u;
              let l;
              const d = ((e, t, i) => {
                if ((r = i.submit_id) != null ? r : i.history_record_id) {
                  var r;
                  let o;
                  const a = t && typeof t === "object" ? t : i;
                  return n._(s._({}, a), {
                    generate_type:
                      (o = i.generate_type) != null
                        ? o
                        : ((e) => {
                            switch (e) {
                              case "image":
                                return eD.ce.Text2Image;
                              case "video":
                                return eD.ce.Text2Video;
                              case "audio":
                                return eD.ce.Text2Song;
                              case "document":
                                return eD.ce.Document;
                            }
                          })(e),
                  });
                }
              })(e, t, i);
              if (d) {
                const c = ((e) => {
                  if (e) {
                    if (Array.isArray(e)) {
                      return e[0];
                    }
                    return e;
                  }
                })(eC.B(d));
                if (c) {
                  const h = (r = c.idModel) != null ? r : {};
                  const v = n._(s._({}, c), {
                    uniqueKey:
                      c.uniqueKey ||
                      String(
                        (o =
                          (a = i.submit_id) != null
                            ? a
                            : i.history_record_id) != null
                          ? o
                          : "",
                      ),
                    generateType:
                      (u = c.generateType) != null ? u : d.generate_type,
                    idModel: n._(s._({}, h), {
                      submitId: h.submitId || i.submit_id,
                      recordId: h.recordId || i.history_record_id,
                      agentHistoryId:
                        h.agentHistoryId ||
                        (i.conversation_session
                          ? String(
                              (l = i.conversation_session.history_record_id) !=
                                null
                                ? l
                                : "",
                            )
                          : undefined),
                    }),
                  });
                  if (v_(v)) {
                    return v;
                  }
                  return undefined;
                }
              }
            })(e, r, o);
            return ((e) => {
              const e_item_list = e.item_list;
              if (!e_item_list || e_item_list.length <= 1) {
                return [{}];
              }
              const i = eA(e);
              return e_item_list.map((item, itemIndex) => {
                var scopedItemId = ek(item);
                return s._(
                  {
                    item,
                    itemIndex,
                    scopedAssetId:
                      scopedItemId != null
                        ? scopedItemId
                        : "".concat(i, ":item:").concat(itemIndex),
                  },
                  scopedItemId
                    ? {
                        scopedItemId,
                      }
                    : {},
                );
              });
            })(o).map((t) =>
              ((e, t, i, r, rawId, splitItem) => {
                let u;
                let l;
                let d;
                let c;
                let h;
                let v;
                let _;
                let p;
                let g;
                let m;
                let f;
                let y;
                let S;
                let I;
                let b;
                let T;
                let C;
                let D;
                let M;
                let L;
                let R;
                let E;
                let j;
                let x;
                let w;
                let k;
                let q;
                let O;
                let F;
                let Q;
                const U =
                  (f =
                    (y =
                      (S =
                        (I =
                          (b =
                            (T =
                              (C =
                                (w =
                                  (D = t.item_list) == null
                                    ? undefined
                                    : D[0]) == null ||
                                (M = w.common_attr) == null
                                  ? undefined
                                  : M.title) != null
                                ? C
                                : w == null || (L = w.commonAttr) == null
                                  ? undefined
                                  : L.title) != null
                              ? T
                              : w == null || (R = w.common_attr) == null
                                ? undefined
                                : R.prompt) != null
                            ? b
                            : w == null || (E = w.commonAttr) == null
                              ? undefined
                              : E.prompt) != null
                          ? I
                          : w == null || (j = w.common_attr) == null
                            ? undefined
                            : j.description) != null
                        ? S
                        : w == null || (x = w.commonAttr) == null
                          ? undefined
                          : x.description) != null
                      ? y
                      : t.prompt) != null
                    ? f
                    : t.draft_content;
                const K = splitItem.item !== undefined;
                const P =
                  K && (k = eq(splitItem.item)) != null
                    ? k
                    : (l =
                          (d = eq(
                            (c = (u = t).item_list) == null ? undefined : c[0],
                          )) != null
                            ? d
                            : (v = u.audio_cover) == null ||
                                (h = v.cover_url_map) == null
                              ? undefined
                              : h[720]) != null
                      ? l
                      : (_ = u.audio_cover) == null
                        ? undefined
                        : _.origin_url;
                const G = splitItem.scopedAssetId
                  ? x_2(splitItem.scopedAssetId)
                  : r;
                const itemIds =
                  K && splitItem.scopedItemId
                    ? [splitItem.scopedItemId]
                    : (q = (m =
                          (p =
                            (g = t.item_list) == null
                              ? undefined
                              : g.map((e) => ek(e)).filter((e) => !!e)) != null
                            ? p
                            : []).length
                          ? m
                          : undefined) != null
                      ? q
                      : undefined;
                const itemLocators =
                  K && splitItem.item
                    ? H_1(e, G, [splitItem.item])
                    : H_1(e, r, t.item_list);
                const canResolveDetail = !!((O = i != null ? i : t.submit_id) !=
                null
                  ? O
                  : t.history_record_id);
                const W = s._(
                  {
                    assetType: e,
                    searchRecord: t,
                  },
                  i
                    ? {
                        aigcData: i,
                      }
                    : {},
                );
                const H =
                  (F = t.asset_option) == null
                    ? undefined
                    : F.favorite_item_id_list;
                const favorited =
                  K && splitItem.scopedItemId && H
                    ? H.includes(splitItem.scopedItemId)
                    : !!((Q = t.asset_option) == null
                        ? undefined
                        : Q.has_favorited);
                const t_created_time = t.created_time;
                return {
                  assetId: G,
                  assetType: e,
                  title: U,
                  cover: P,
                  createdAt: t_created_time,
                  updatedAt: t_created_time,
                  generatedAt: t_created_time,
                  favorited,
                  itemLocators,
                  sourceRef: s._(
                    n._(
                      s._(
                        {
                          source: "aigc-search",
                        },
                        t.submit_id
                          ? {
                              submitId: t.submit_id,
                            }
                          : {},
                        t.history_record_id
                          ? {
                              historyRecordId: t.history_record_id,
                            }
                          : {},
                      ),
                      {
                        rawId,
                      },
                    ),
                    K && t.submit_id
                      ? {
                          recordUniqueKey: t.submit_id,
                        }
                      : {},
                    itemIds
                      ? {
                          itemIds,
                        }
                      : {},
                  ),
                  presentation: s._(
                    {},
                    U
                      ? {
                          title: U,
                        }
                      : {},
                    P
                      ? {
                          coverUrl: P,
                        }
                      : {},
                  ),
                  capabilities: ((e) => {
                    const { canResolveDetail } = e;
                    const i = ((e) => {
                      let t;
                      let i;
                      const { searchRecord, aigcData, splitItem } = e;
                      if (splitItem.itemIndex !== undefined) {
                        var o;
                        var a;
                        let u;
                        let l;
                        let d;
                        let c;
                        const h =
                          (u =
                            (l = splitItem.item) == null
                              ? undefined
                              : l.permission) != null
                            ? u
                            : aigcData == null ||
                                (c = aigcData.itemList) == null ||
                                (d = c[splitItem.itemIndex]) == null
                              ? undefined
                              : d.permission;
                        if (h) {
                          return [h];
                        }
                        return [];
                      }
                      const v =
                        (t =
                          aigcData == null || (i = aigcData.itemList) == null
                            ? undefined
                            : i.map((e) => e.permission).filter((e) => !!e)) !=
                        null
                          ? t
                          : [];
                      if (v.length) {
                        return v;
                      }
                      const _ =
                        (o =
                          (a = searchRecord.item_list) == null
                            ? undefined
                            : a.map((e) => e.permission).filter((e) => !!e)) !=
                        null
                          ? o
                          : [];
                      if (_.length) {
                        return _;
                      }
                      if (searchRecord.permission) {
                        return [searchRecord.permission];
                      }
                      return [];
                    })(e);
                    return {
                      canFavorite:
                        e.aigcData !== undefined && eO(i, "canFavorite"),
                      canDownload: e.aigcData !== undefined,
                      canDelete: e.aigcData !== undefined && eO(i, "canDelete"),
                      canOpenDetail: canResolveDetail,
                      canLocate: eO(i, "canLocate"),
                    };
                  })({
                    searchRecord: t,
                    aigcData: i,
                    splitItem,
                    canResolveDetail,
                  }),
                  summaryData: W,
                  detailComplete: F_(e, i),
                };
              })(e, o, l, u, a, t),
            );
          });
        }
        switch (e) {
          case "story":
            return t.flatMap((e) => {
              var t;
              var i;
              var r = ((e) => {
                if (u4(e)) {
                  const t = gs(e, "cover");
                  const i = gs(e, "asset_option");
                  const r = e.story_id;
                  return {
                    story_id:
                      typeof r === "string" || typeof r === "number"
                        ? r
                        : undefined,
                    draft_id: on(e, "draft_id"),
                    name: on(e, "name"),
                    create_at: Uf(e, "create_at"),
                    cover: t
                      ? {
                          image_url: on(t, "image_url"),
                        }
                      : undefined,
                    asset_option: i
                      ? {
                          has_favorited: Tk(i, "has_favorited"),
                        }
                      : undefined,
                  };
                }
              })(e);
              if (!r) {
                return [];
              }
              var o = r.story_id === undefined ? undefined : String(r.story_id);
              if (!o) {
                return [];
              }
              var a = x_2(o);
              var u = (t = r.cover) == null ? undefined : t.image_url;
              return [
                {
                  assetId: a,
                  assetType: "story",
                  title: r.name,
                  cover: u,
                  createdAt: r.create_at,
                  updatedAt: r.create_at,
                  favorited: !!((i = r.asset_option) == null
                    ? undefined
                    : i.has_favorited),
                  itemLocators: [
                    n._(
                      s._(
                        {
                          assetType: "story",
                          assetId: a,
                        },
                        r.draft_id
                          ? {
                              itemId: r.draft_id,
                            }
                          : {},
                      ),
                      {
                        itemIndex: 0,
                      },
                    ),
                  ],
                  sourceRef: s._(
                    {
                      source: "story",
                      rawId: o,
                    },
                    r.draft_id
                      ? {
                          itemIds: [r.draft_id],
                        }
                      : {},
                  ),
                  presentation: s._(
                    {},
                    r.name
                      ? {
                          title: r.name,
                        }
                      : {},
                    u
                      ? {
                          coverUrl: u,
                        }
                      : {},
                  ),
                  capabilities: {
                    canOpenDetail: true,
                  },
                  summaryData: {
                    assetType: "story",
                    searchRecord: r,
                  },
                },
              ];
            });
          case "canvas":
            i = (e) => this._getDraftMap(e);
            return r._(function* () {
              const e = t
                .map((e) =>
                  ((e) => {
                    if (u4(e)) {
                      const t = gs(e, "asset_option");
                      return {
                        id: on(e, "id"),
                        create_at: Uf(e, "create_at"),
                        modify_at: Uf(e, "modify_at"),
                        asset_option: t
                          ? {
                              has_favorited: Tk(t, "has_favorited"),
                            }
                          : undefined,
                      };
                    }
                  })(e),
                )
                .filter((e) => !!e)
                .filter((e) => !!e.id);
              const r = e.map((e) => e.id);
              const n = yield i(r);
              return e.map((e) => {
                var t;
                var i;
                var r;
                var o;
                var a;
                var u;
                var l;
                var d;
                var c;
                var draft = n.get(e.id);
                var v =
                  (t =
                    (i = draft == null ? undefined : draft.id) != null
                      ? i
                      : draft == null
                        ? undefined
                        : draft.packageId) != null
                    ? t
                    : e.id;
                var _ = x_2(v);
                var p = draft == null ? undefined : draft.name;
                var g =
                  draft == null || (l = draft.cover) == null
                    ? undefined
                    : l.url;
                var createdAt =
                  (r = draft == null ? undefined : draft.createdAt) != null
                    ? r
                    : e.create_at;
                var updatedAt =
                  (o =
                    (a = draft == null ? undefined : draft.updatedAt) != null
                      ? a
                      : e.modify_at) != null
                    ? o
                    : createdAt;
                return {
                  assetId: _,
                  assetType: "canvas",
                  title: p,
                  cover: g,
                  createdAt,
                  updatedAt,
                  favorited: !!((u =
                    draft == null || (d = draft.asset_option) == null
                      ? undefined
                      : d.has_favorited) != null
                    ? u
                    : (c = e.asset_option) == null
                      ? undefined
                      : c.has_favorited),
                  itemLocators: [
                    {
                      assetType: "canvas",
                      assetId: _,
                      itemId: v,
                      itemIndex: 0,
                    },
                  ],
                  sourceRef: {
                    source: "canvas-draft",
                    rawId: v,
                    itemIds: [v],
                  },
                  presentation: s._(
                    {},
                    p
                      ? {
                          title: p,
                        }
                      : {},
                    g
                      ? {
                          coverUrl: g,
                        }
                      : {},
                  ),
                  capabilities: {
                    canOpenDetail: true,
                  },
                  summaryData: {
                    assetType: "canvas",
                    searchRecord: e,
                    draft,
                  },
                };
              });
            })();
          default:
            return [];
        }
      })
      .call(this);
  }
  _getDraftMap(ids) {
    return r
      ._(function* () {
        if (!ids.length) {
          return new Map();
        }
        const workspaceId = yield t_1(this._workspaceService);
        const i = yield this._userDraftBySdkDataService.getUserDraftByIDs({
          workspaceId,
          ids,
        });
        if (!i.ok) {
          throw ev.xz(i.code, i.msg);
        }
        return new Map(i.value.value.list.map((e) => [e.id, e]));
      })
      .call(this);
  }
  constructor(e, t, i) {
    this._searchCoreService = e;
    this._userDraftBySdkDataService = t;
    this._workspaceService = i;
  }
}
eF = o.Cg(
  [
    o.Qj(0, V_1),
    o.Qj(1, S_1),
    o.Qj(2, Q),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      V_1 === undefined ? Object : V_1,
      S_1 === undefined ? Object : S_1,
      Q === undefined ? Object : Q,
    ]),
  ],
  eF,
);
class eQ extends d.jG {
  get onSelectionChange() {
    return this._onSelectionChange.event;
  }
  getSnapshot() {
    let e;
    return {
      selectedEntries: (e = this._selectedEntries.map((e) => B(e))),
      selectedAssetIds: e.map((e) => e.assetId),
    };
  }
  setSelectedEntries(e) {
    this._updateSelection(V(e));
  }
  setSelectedAssetIds(e) {
    this.setSelectedEntries(
      Array.from(new Set(e)).map((e) => ({
        assetId: e,
        mode: "asset",
      })),
    );
  }
  toggleSelectedAsset(e) {
    let t;
    const i = this._findEntryIndex(e);
    if (
      i >= 0 &&
      ((t = this._selectedEntries[i]) == null ? undefined : t.mode) === "asset"
    ) {
      this._updateSelection(this._selectedEntries.filter((e, t) => t !== i));
      return false;
    }
    const r = [...this._selectedEntries];
    const s = {
      assetId: e,
      mode: "asset",
    };
    if (i >= 0) {
      r[i] = s;
    } else {
      r.push(s);
    }
    this._updateSelection(r);
    return true;
  }
  toggleSelectedItem(e) {
    let t;
    const i = this._findEntryIndex(e.assetId);
    const r = [...this._selectedEntries];
    const n = s._({}, e);
    if (i < 0) {
      r.push({
        assetId: e.assetId,
        mode: "items",
        itemLocators: [n],
      });
      this._updateSelection(r);
      return true;
    }
    const o = r[i];
    if (!o) {
      return false;
    }
    if (o.mode === "asset") {
      r[i] = {
        assetId: e.assetId,
        mode: "items",
        itemLocators: [n],
      };
      this._updateSelection(r);
      return true;
    }
    const a = (t = o.itemLocators) != null ? t : [];
    const u = P(e);
    if (a.some((e) => P(e) === u)) {
      const l = a.filter((e) => P(e) !== u);
      if (l.length) {
        r[i] = {
          assetId: e.assetId,
          mode: "items",
          itemLocators: l,
        };
        this._updateSelection(r);
      } else {
        this._updateSelection(r.filter((e, t) => t !== i));
      }
      return false;
    }
    r[i] = {
      assetId: e.assetId,
      mode: "items",
      itemLocators: [...a, n],
    };
    this._updateSelection(r);
    return true;
  }
  clearAssetSelection(e) {
    const t = this._selectedEntries.filter((t) => t.assetId !== e);
    this._updateSelection(t);
  }
  isAssetSelected(e) {
    return this._findEntryIndex(e) >= 0;
  }
  isItemSelected(e) {
    let t;
    const i = this._selectedEntries.find((t) => t.assetId === e.assetId);
    if (!i) {
      return false;
    }
    if (i.mode === "asset") {
      return true;
    }
    const r = P(e);
    return ((t = i.itemLocators) != null ? t : []).some((e) => P(e) === r);
  }
  clear() {
    this._updateSelection([]);
  }
  dispose() {
    this._selectedEntries = [];
    super.dispose();
  }
  _emitSelectionChange() {
    this._onSelectionChange.fire(this.getSnapshot());
  }
  _findEntryIndex(e) {
    return this._selectedEntries.findIndex((t) => t.assetId === e);
  }
  _updateSelection(e) {
    let t;
    const i = V(e);
    t = this._selectedEntries;
    if (
      !(
        t.length === i.length &&
        t.every((e, t) => {
          var r;
          var s;
          var n;
          var o;
          var a = i[t];
          return (
            !!a &&
            e.assetId === a.assetId &&
            e.mode === a.mode &&
            ((r = e.itemLocators),
            (s = a.itemLocators),
            (n = r != null ? r : []),
            (o = s != null ? s : []),
            n.length === o.length &&
              n.every((e, t) => {
                var i = o[t];
                return (
                  e.assetType === i.assetType &&
                  e.assetId === i.assetId &&
                  e.itemId === i.itemId &&
                  e.itemIndex === i.itemIndex
                );
              }))
          );
        })
      )
    ) {
      this._selectedEntries = i;
      this._emitSelectionChange();
    }
  }
  constructor(...e) {
    super(...e);
    this._selectedEntries = [];
    this._onSelectionChange = this._register(new c.v());
  }
}
function eB(e, t) {
  return !!(t && e.has(t));
}
function eV(e) {
  return l_1(e) || eK.c(e);
}
function eN(e) {
  let t;
  let i;
  let r;
  let s;
  const n = [
    ...((t =
      (r = e.itemLocators) == null ? undefined : r.map((e) => e.itemId)) != null
      ? t
      : []),
    ...((i = (s = e.sourceRef) == null ? undefined : s.itemIds) != null
      ? i
      : []),
  ].filter((e) => !!e);
  if (n.length) {
    return Array.from(new Set(n));
  }
  return Array.from(
    new Set(
      Je(e.summaryData) && e.summaryData.aigcData
        ? wo(e.summaryData.aigcData)
        : [],
    ),
  );
}
function eW(aigcData, t) {
  let i;
  return n._(s._({}, t), {
    assetOption:
      (i = t.assetOption) != null
        ? i
        : aigcData == null
          ? undefined
          : aigcData.assetOption,
  });
}
class eH {
  syncAigcFavoriteState(e) {
    if (eP.e(e)) {
      return void Object.values(
        (t = e.submitIdDataMap) != null ? t : {},
      ).forEach((e) => {
        if (eV(e)) {
          this.syncAigcFavoriteState(e);
        }
      });
    }
    if (eV(e)) {
      var t;
      let i;
      let r;
      let o;
      let a;
      let u;
      let l;
      let d;
      let c;
      let h;
      const v = (l =
        (i =
          (r =
            (o = e.uniqueKey) != null
              ? o
              : (a = e.idModel) == null
                ? undefined
                : a.submitId) != null
            ? r
            : e.historyRecordId) != null
          ? i
          : (u = e.idModel) == null
            ? undefined
            : u.recordId)
        ? x_2(l)
        : undefined;
      const _ = new Set(
        [
          e.uniqueKey,
          e.historyRecordId,
          (d = e.idModel) == null ? undefined : d.submitId,
          (c = e.idModel) == null ? undefined : c.recordId,
          (h = e.idModel) == null ? undefined : h.agentHistoryId,
        ].filter((e) => !!e),
      );
      const p = new Set(wo(e));
      const g = this._assetEntityStore.getAll().filter((e) =>
        ((e, t, i, r) => {
          if (r && e.assetId === r) {
            return true;
          }
          let s;
          let n;
          const { sourceRef } = e;
          if (
            eB(t, sourceRef == null ? undefined : sourceRef.uniqueKey) ||
            eB(t, sourceRef == null ? undefined : sourceRef.recordUniqueKey) ||
            eB(t, sourceRef == null ? undefined : sourceRef.historyRecordId) ||
            eB(t, sourceRef == null ? undefined : sourceRef.submitId) ||
            eB(t, sourceRef == null ? undefined : sourceRef.recordId)
          ) {
            return true;
          }
          const a =
            Je(e.summaryData) && e.summaryData.aigcData
              ? e.summaryData.aigcData
              : U6(e.detailData) && e.detailData.aigcData
                ? e.detailData.aigcData
                : undefined;
          return (
            !!(
              eB(t, a == null ? undefined : a.uniqueKey) ||
              eB(t, a == null ? undefined : a.historyRecordId) ||
              eB(
                t,
                a == null || (s = a.idModel) == null ? undefined : s.submitId,
              ) ||
              eB(
                t,
                a == null || (n = a.idModel) == null ? undefined : n.recordId,
              )
            ) || eN(e).some((e) => i.has(e))
          );
        })(e, _, p, v),
      );
      if (g.length) {
        this._assetEntityStore.upsertMany(
          g.map((t) =>
            n._(s._({}, t), {
              favorited: ((e, t) => {
                const i = eN(e);
                if (!i.length) {
                  let r;
                  const s = Zu((r = t.itemList) == null ? undefined : r[0]);
                  return c4(t, s ? [s] : []);
                }
                return c4(t, i);
              })(t, e),
              summaryData:
                Je(t.summaryData) && t.summaryData.assetType === t.assetType
                  ? n._(s._({}, t.summaryData), {
                      aigcData: eW(t.summaryData.aigcData, e),
                    })
                  : t.summaryData,
              detailData:
                U6(t.detailData) && t.detailData.assetType === t.assetType
                  ? n._(s._({}, t.detailData), {
                      aigcData: eW(t.detailData.aigcData, e),
                    })
                  : t.detailData,
            }),
          ),
        );
      }
    }
  }
  constructor(e) {
    this._assetEntityStore = e;
  }
}
eH = o.Cg(
  [
    o.Qj(0, i_1),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [i_1 === undefined ? Object : i_1]),
  ],
  eH,
);
function eJ(e, t) {
  if (e) {
    if (t) {
      if (e.assetType !== t.assetType) {
        return t;
      }
      return s._({}, e, t);
    }
    return e;
  }
  return t;
}
function eY(e, t) {
  if (e) {
    if (t) {
      return s._({}, e, t);
    }
    return e;
  }
  return t;
}
class eZ extends d.jG {
  get onEntitiesUpsert() {
    return this._onEntitiesUpsert.event;
  }
  get onEntitiesUpsertChange() {
    return this._onEntitiesUpsertChange.event;
  }
  get onEntitiesRemove() {
    return this._onEntitiesRemove.event;
  }
  get onStoreClear() {
    return this._onStoreClear.event;
  }
  upsert(e) {
    const previous = this._entityMap.get(e.assetId);
    const i = this._upsertWithoutEvent(e);
    this._onEntitiesUpsert.fire([i]);
    this._onEntitiesUpsertChange.fire([
      {
        previous,
        entity: i,
      },
    ]);
  }
  upsertMany(e) {
    if (e.length) {
      const t = e.map((e) => ({
        previous: this._entityMap.get(e.assetId),
        entity: this._upsertWithoutEvent(e),
      }));
      const i = t.map((e) => e.entity);
      this._onEntitiesUpsert.fire(i);
      this._onEntitiesUpsertChange.fire(t);
    }
  }
  get(e) {
    return this._entityMap.get(e);
  }
  getByItemLocator(e) {
    let t;
    const i = this._entityMap.get(e.assetId);
    if (i && i.assetType === e.assetType) {
      if (
        (e.itemId === undefined && e.itemIndex === undefined) ||
        ((t = i.itemLocators) == null
          ? undefined
          : t.some(
              (t) =>
                e.assetType === t.assetType &&
                e.assetId === t.assetId &&
                (e.itemId === undefined || e.itemId === t.itemId) &&
                (e.itemIndex === undefined || e.itemIndex === t.itemIndex),
            ))
      ) {
        return i;
      }
      return undefined;
    }
  }
  getAll() {
    return Array.from(this._entityMap.values());
  }
  findBySourceKey(e) {
    const t = [];
    for (const i of this._entityMap.values()) {
      const r = i.sourceRef;
      if (
        (r == null ? undefined : r.uniqueKey) === e ||
        (r == null ? undefined : r.rawId) === e ||
        (r == null ? undefined : r.recordUniqueKey) === e
      ) {
        t.push(i.assetId);
      }
    }
    return t;
  }
  remove(e) {
    if (this._removeWithoutEvent(e)) {
      this._onEntitiesRemove.fire([e]);
    }
  }
  removeMany(e) {
    if (e.length) {
      const t = e.filter((e) => this._removeWithoutEvent(e));
      if (t.length) {
        this._onEntitiesRemove.fire(t);
      }
    }
  }
  clear() {
    if (this._entityMap.size !== 0) {
      this._entityMap.clear();
      this._onStoreClear.fire();
    }
  }
  dispose() {
    this._entityMap.clear();
    super.dispose();
  }
  _upsertWithoutEvent(e) {
    let t;
    let i;
    let r;
    let o;
    let a;
    let u;
    let l;
    let d;
    let c;
    t = this._entityMap.get(e.assetId);
    i = e;
    const h =
      t && t.assetType === i.assetType
        ? n._(s._({}, t, i), {
            title: (r = i.title) != null ? r : t.title,
            cover: (o = i.cover) != null ? o : t.cover,
            createdAt: (a = i.createdAt) != null ? a : t.createdAt,
            favorited:
              ((d = i.favorited), (c = t.favorited), d !== undefined ? d : c),
            itemLocators: (u = i.itemLocators) != null ? u : t.itemLocators,
            sourceRef: eY(t.sourceRef, i.sourceRef),
            presentation: eY(t.presentation, i.presentation),
            capabilities: eY(t.capabilities, i.capabilities),
            summaryData: eJ(t.summaryData, i.summaryData),
            detailData: eJ(t.detailData, i.detailData),
            detailComplete:
              i.detailComplete === true ||
              ((l = t.detailComplete) != null ? l : i.detailComplete),
          })
        : i;
    this._entityMap.set(e.assetId, h);
    return h;
  }
  _removeWithoutEvent(e) {
    return this._entityMap.delete(e);
  }
  constructor(...e) {
    super(...e);
    this._entityMap = new Map();
    this._onEntitiesUpsert = this._register(new c.v());
    this._onEntitiesUpsertChange = this._register(new c.v());
    this._onEntitiesRemove = this._register(new c.v());
    this._onStoreClear = this._register(new c.v());
  }
}
function eX(e) {
  let t;
  let i;
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  e.register(N9, l);
  e.register(i_1, eZ);
  e.register(z, H);
  e.register(B_1, eQ);
  e.register(R_3, en);
  e.register(Y, (t = r.querySearchRoutePolicyService) != null ? t : J);
  e.register(eu, (i = r.searchService) != null ? i : eF);
  e.register(_, ed);
  e.register(U, O);
  e.register(L, W);
  e.register(I, b);
  e.register(T, C);
  e.register(D, M);
  e.register(rf, x);
  e.register(q_1, eH);
  e.register(b_1, m);
}
export { eX as G };
