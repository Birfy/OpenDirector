import r from "QWK";
import a from "Kt";
import n from "NY";
import s from "K8";
import o from "fg";
import l from "fm";
import c from "b5";
import u from "iN";
import d from "GS";
import h from "KC";
import p from "dR";
import g from "qN";
import v from "yF";
import m from "cBI";
class f {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new h.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        m.U(e, t),
        p.vo(t),
        g.Wh(t),
        v.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  process(inputList, t) {
    return n
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getUrl("/mweb/v1/video_generate/pre_process"),
            o.w({
              inputList,
            }),
            {
              signal: t == null ? undefined : t.signal,
              params: (t == null ? undefined : t.babiParam)
                ? d.wi({
                    babiParam: t.babiParam,
                    generateId: t.generateId,
                  })
                : undefined,
            },
          );
          const r = o.o(i, l.Cb);
          return s.TZ(r.data.taskList);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  getTasks(submitIdList, t) {
    return n
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getUrl("/mweb/v1/video_generate/mget_pre_process_result"),
            o.w({
              submitIdList,
            }),
            {
              signal: t == null ? undefined : t.signal,
            },
          );
          const r = o.o(i, l.Cb);
          return s.TZ(r.data.taskList);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: u.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
f = r.Cg(
  [
    r.Qj(0, a._),
    r.Qj(1, u.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      a._ === undefined ? Object : a._,
      u.r === undefined ? Object : u.r,
    ]),
  ],
  f,
);
class _ {
  process(e, t) {
    return this._repository.process(e, t);
  }
  getTasks(e, t) {
    return this._repository.getTasks(e, t);
  }
  constructor(e) {
    this._containerService = e;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(f);
  }
}
export { _ as l };
_ = r.Cg(
  [
    r.Qj(0, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [a._ === undefined ? Object : a._]),
  ],
  _,
);
