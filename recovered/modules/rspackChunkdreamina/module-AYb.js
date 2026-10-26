import r from "QWK";
import a from "Kt";
import o from "NY";
import s from "KC";
import n from "xy";
import u from "dR";
import c from "qN";
import d from "b5";
import l from "yF";
import h from "iN";
import _ from "cBI";
import p from "oa";
import v from "bk";
import g from "fg";
import m from "ZX";
import j from "qa";
import b from "K8";
function S(e) {
  switch (e.materialType) {
    case m.Xx.Image:
      return {
        materialType: m.Xx.Image,
        uri: e.uri,
        itemId: e.itemId,
      };
    case m.Xx.Video:
      return {
        materialType: m.Xx.Video,
        vid: e.uri,
        itemId: e.itemId,
      };
    case m.Xx.Audio:
      return {
        materialType: m.Xx.Audio,
        vid: e.uri,
        itemId: e.itemId,
      };
    case m.Xx.Subject:
      return {
        materialType: m.Xx.Subject,
        subjectDataId: e.subjectDataId,
      };
  }
}
class y {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new s.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        _.U(e, t),
        n.sc(t),
        u.vo(t),
        c.Wh(t),
        l.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  executeAudit(e, t) {
    return o
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getUrl("/mweb/v1/execute_generate_audit"),
            g.w(
              v._(p._({}, e), {
                materialList: e.materialList.map(S),
              }),
            ),
            {
              signal: t == null ? undefined : t.signal,
            },
          );
          return ((e) => {
            const { resultList } = g.o(e.data);
            return b.TZ(
              resultList.map((e) => {
                var { auditFailCode } = e;
                var i = j._(e, ["auditFailCode"]);
                return v._(p._({}, i), {
                  errorCode: ((e) => {
                    if (e !== undefined && e.trim() !== "") {
                      const t = Number(e);
                      if (Number.isSafeInteger(t)) {
                        return t;
                      }
                      return undefined;
                    }
                  })(auditFailCode),
                });
              }),
            );
          })(i);
        } catch (error) {
          return d.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: h.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
y = r.Cg(
  [
    r.Qj(0, a._),
    r.Qj(1, h.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      a._ === undefined ? Object : a._,
      h.r === undefined ? Object : h.r,
    ]),
  ],
  y,
);
export class G {
  executeAudit(e, t) {
    return this._auditRepository.executeAudit(e, t);
  }
  constructor(e) {
    this._containerService = e;
    this._auditRepository = this._containerService.createInstance(y);
  }
}
G = r.Cg(
  [
    r.Qj(0, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [a._ === undefined ? Object : a._]),
  ],
  G,
);
