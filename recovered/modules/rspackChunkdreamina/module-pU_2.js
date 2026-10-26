import i from "NY";
import r from "QWK";
import a from "Kt";
import o from "oa";
import l from "bk";
import u from "qa";
import s from "fN";
import d from "K8";
import c from "fg";
import m from "fm";
import v from "HE6";
import p from "oE";
import g from "b5";
import f from "iN";
import h from "PQy";
import { l as l_1 } from "./module-IdB.js";
import y from "Wzd";
import b from "yF";
import A from "cBI";
import x from "KC";
import T from "dR";
import I from "qN";
class w {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new x.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        A.U(e, t),
        T.vo(t),
        I.Wh(t),
        b.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  getWorkDetails(e) {
    return i
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getApi("/mweb/v1/mget_item_info"),
            yield this._convertRequestToServerRequest(e),
          );
          const { cacheSyncToken, logid, data } = c.o(t, m.Cb);
          if (cacheSyncToken && logid) {
            const a = yield s.h8.decryptIV(cacheSyncToken, logid);
            yield v.IG(s.h8.decrypt.bind(s.h8), data.effectItemList, a);
          }
          const o = yield s.Pz.getSignOptions();
          p.sE(s.Pz.sign.bind(s.Pz), data.effectItemList, o);
          return d.TZ({
            workDetails: data.effectItemList.map((e) => h.U(e)),
            deductList: data.deductList,
          });
        } catch (error) {
          return g.c(error, -1, "get work details failed");
        }
      })
      .call(this);
  }
  getUnPublishedWorkDetails(e) {
    return i
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getApi("/mweb/v1/get_local_item_list"),
            yield this._convertRequestToServerRequest(e),
          );
          return d.TZ({
            workDetails: t.data.item_list.map((e) => h.U(c.o(e, m.Cb))),
            deductList: c.o(t.data.deduct_list, m.Cb),
          });
        } catch (error) {
          return g.c(error, -1, "get un published work details failed");
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: f.X.DEFAULT,
      path,
    });
  }
  _convertRequestToServerRequest(e) {
    return i._(function* () {
      let t;
      let imageInfo;
      const { imageResolutionStrategy, isForVideoDownload } = e;
      const a = u._(e, ["imageResolutionStrategy", "isForVideoDownload"]);
      if (imageResolutionStrategy) {
        imageInfo = yield l_1(
          l._(o._({}, imageResolutionStrategy), {
            enableSmartCrop: false,
          }),
        );
      }
      const s =
        ((t = a.packItemOpt) == null ? undefined : t.scene) === y._.Download &&
        !imageInfo;
      return c.w(
        l._(o._({}, a), {
          imageInfo,
          isForVideoDownload:
            isForVideoDownload != null ? isForVideoDownload : s,
        }),
      );
    })();
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
w = r.Cg(
  [
    r.Qj(0, f.r),
    r.Qj(1, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      f.r === undefined ? Object : f.r,
      a._ === undefined ? Object : a._,
    ]),
  ],
  w,
);
export class U {
  getWorkDetails(e) {
    return i
      ._(function* () {
        return yield this._getContentGenerationHistoryRepo.getWorkDetails(e);
      })
      .call(this);
  }
  getUnPublishedWorkDetail(e) {
    return i
      ._(function* () {
        return yield this._getContentGenerationHistoryRepo.getUnPublishedWorkDetails(
          e,
        );
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._getContentGenerationHistoryRepo =
      this._containerService.createInstance(w);
  }
}
U = r.Cg(
  [
    r.Qj(0, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [a._ === undefined ? Object : a._]),
  ],
  U,
);
