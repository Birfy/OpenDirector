import i from "QWK";
import a from "si5";
import o from "Kt";
import n from "NY";
import s from "cBI";
import l from "K8";
import c from "yF";
import d from "KC";
import u from "qN";
import v from "dR";
import h from "K6J";
import p from "fg";
import m from "fm";
import g from "b5";
import _ from "iN";
class y {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new d.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        s.U(e, t),
        u.Wh(t),
        v.vo(t),
        c.P(t),
        h.U(t),
        t);
    }
    return this._networkClientInstance;
  }
  getCanvasProjectList(e) {
    return n
      ._(function* () {
        try {
          const t = this._getUrl("/mweb/v1/infinite_canvas/list_project");
          const r = yield this._networkClient.post(
            t,
            this._convertRequestToServerRequest(e),
          );
          const i = this._convertResponseToData(p.o(r, m.Cb), e);
          return l.TZ(i);
        } catch (error) {
          return g.r(error);
        }
      })
      .call(this);
  }
  _convertResponseToData(e, t) {
    let r;
    let i;
    let o;
    const n = (((r = e.data) == null ? undefined : r.projects) || []).filter(
      (e) => !!e,
    );
    return a.yC(t.config, n, {
      hasMore: ((i = e.data) == null ? undefined : i.hasMore) || false,
      offset: ((o = e.data) == null ? undefined : o.nextCursor) || 0,
    });
  }
  _convertRequestToServerRequest(e) {
    return p.w({
      cursor: e.offset || e.config.cursor || 0,
      limit: e.config.limit,
      imageInfo: e.config.imageInfo,
      onlyFavorite: e.config.onlyFavorite,
      teamMemberUserId: e.config.teamMemberUserId,
      searchKeyword: e.config.searchKeyword,
      beginTimeStamp: e.config.beginTimeStamp,
      endTimeStamp: e.config.endTimeStamp,
      sortField: e.config.sortField,
      sortOrder: e.config.sortOrder,
    });
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: _.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
y = i.Cg(
  [
    i.Qj(0, o._),
    i.Qj(1, _.r),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      _.r === undefined ? Object : _.r,
    ]),
  ],
  y,
);
export class x {
  getCanvasProjectList(e) {
    let t;
    const r = a.CM(e)
      ? e
      : a.yC(e, [], {
          hasMore: true,
          offset: (t = e.cursor) != null ? t : 0,
        });
    return this._canvasProjectRepository.getCanvasProjectList(r);
  }
  constructor(e) {
    this._containerService = e;
    this._serviceBrand = undefined;
    this._canvasProjectRepository = this._containerService.createInstance(y);
  }
}
x = i.Cg(
  [
    i.Qj(0, o._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  x,
);
