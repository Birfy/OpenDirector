import a from "NY";
import r from "QWK";
import n from "mL";
import o from "Y6";
import l from "KV";
import s from "Kt";
import u from "KC";
import c from "dR";
import d from "b5";
import h from "fg";
import m from "cBI";
import v from "K8";
import p from "yF";
import f from "iN";
import g from "ug";
function y(_containerService) {
  const e = new u.LL().build({
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  m.U(_containerService, e);
  c.vo(e);
  g.I(e);
  p.P(e);
  return e;
}
class _ {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance = y(this._containerService);
    }
    return this._networkClientInstance;
  }
  markFavorite(t) {
    return a
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getApi("/mweb/v1/mark_favorite"),
            this._formatMarkFavoriteParams(t),
          );
          return v.TZ(null);
        } catch (error) {
          return d.r(error);
        }
      })
      .call(this);
  }
  _getApi(t) {
    return this._httpApiSettingService.getRequestURL({
      domainType: f.X.DEFAULT,
      path: t,
    });
  }
  _formatMarkFavoriteParams(t) {
    const { hasFavorited, itemId } = t;
    return h.w({
      itemId,
      op: hasFavorited ? 1 : 2,
    });
  }
  constructor(t, e) {
    this._containerService = t;
    this._httpApiSettingService = e;
  }
}
_ = r.Cg(
  [
    r.Qj(0, s._),
    r.Qj(1, f.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      s._ === undefined ? Object : s._,
      f.r === undefined ? Object : f.r,
    ]),
  ],
  _,
);
class k {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance = y(this._containerService);
    }
    return this._networkClientInstance;
  }
  removeWorkDetail(t) {
    return a
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getApi("/mweb/v1/remove_from_homepage"),
            this._formatRemoveParams(t),
          );
          return v.TZ(null);
        } catch (error) {
          return d.r(error);
        }
      })
      .call(this);
  }
  _getApi(t) {
    return this._httpApiSettingService.getRequestURL({
      domainType: f.X.DEFAULT,
      path: t,
    });
  }
  _formatRemoveParams(t) {
    const { itemId } = t;
    return h.w({
      itemId,
    });
  }
  constructor(t, e) {
    this._containerService = t;
    this._httpApiSettingService = e;
  }
}
k = r.Cg(
  [
    r.Qj(0, s._),
    r.Qj(1, f.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      s._ === undefined ? Object : s._,
      f.r === undefined ? Object : f.r,
    ]),
  ],
  k,
);
class S {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance = y(this._containerService);
    }
    return this._networkClientInstance;
  }
  updateDownloadable(t) {
    return this.updateItemInfo(t);
  }
  updateItemInfo(t) {
    return a
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getApi("/mweb/v1/update_item"),
            this._formatUpdateParams(t),
          );
          return v.TZ(null);
        } catch (error) {
          return d.r(error);
        }
      })
      .call(this);
  }
  _getApi(t) {
    return this._httpApiSettingService.getRequestURL({
      domainType: f.X.DEFAULT,
      path: t,
    });
  }
  _formatUpdateParams(t) {
    return h.w(t, true);
  }
  constructor(t, e) {
    this._containerService = t;
    this._httpApiSettingService = e;
  }
}
S = r.Cg(
  [
    r.Qj(0, s._),
    r.Qj(1, f.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      s._ === undefined ? Object : s._,
      f.r === undefined ? Object : f.r,
    ]),
  ],
  S,
);
class b {
  markFavorite(t) {
    return a
      ._(function* () {
        const e = yield this._workDetailFavoriteRepository.markFavorite(t);
        if (e.ok) {
          this._syncDomainModelDataAfterMarkFavorite(t);
        }
        return e;
      })
      .call(this);
  }
  removeWorkDetail(t) {
    return a
      ._(function* () {
        const e = yield this._workDetailRemoveRepository.removeWorkDetail(t);
        if (e.ok) {
          this._syncModelDataAfterRemove(t);
        }
        return e;
      })
      .call(this);
  }
  updateDownloadable(t) {
    return a
      ._(function* () {
        return yield this._workDetailUpdateDownloadableRepository.updateDownloadable(
          t,
        );
      })
      .call(this);
  }
  updateItemInfo(t) {
    return this._workDetailUpdateDownloadableRepository.updateItemInfo(t);
  }
  _syncDomainModelDataAfterMarkFavorite(t) {
    const { hasFavorited, origin, itemId } = t;
    const r = n.A(origin);
    if (r.statistic) {
      r.statistic.hasFavorited = hasFavorited;
      if (r.statistic.favoriteNum !== undefined) {
        r.statistic.favoriteNum = hasFavorited
          ? (r.statistic.favoriteNum || 0) + 1
          : Math.max(0, (r.statistic.favoriteNum || 0) - 1);
      }
    }
    this._domainModelChangeSyncService.syncDomainModelData({
      eventType: o.T.Update,
      modelType: o.$.WorkDetailData,
      id: itemId,
      data: r,
      delta: {
        scene: "favorite",
      },
    });
  }
  _syncModelDataAfterRemove(t) {
    this._domainModelChangeSyncService.syncDomainModelData({
      eventType: o.T.Delete,
      modelType: o.$.WorkDetailData,
      id: t.itemId,
      extra: {
        thirdResourceId: t.thirdResourceId,
      },
    });
  }
  constructor(t, e) {
    this._instantiationService = t;
    this._domainModelChangeSyncService = e;
    this._workDetailFavoriteRepository =
      this._instantiationService.createInstance(_);
    this._workDetailRemoveRepository =
      this._instantiationService.createInstance(k);
    this._workDetailUpdateDownloadableRepository =
      this._instantiationService.createInstance(S);
  }
}
export { b as k };
b = r.Cg(
  [
    r.Qj(0, s._),
    r.Qj(1, l.j),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      s._ === undefined ? Object : s._,
      l.j === undefined ? Object : l.j,
    ]),
  ],
  b,
);
