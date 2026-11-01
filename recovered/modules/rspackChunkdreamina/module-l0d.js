import s from "QWK";
import n from "Kt";
import r from "NY";
import o from "fg";
import a from "b5";
import l from "iN";
import { l as l_1 } from "./module-u04.js";
import d from "KC";
import u from "dR";
import h from "qN";
import _ from "yF";
import p from "cBI";
class v {
  get _networkClient() {
    let t;
    let e;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((t = this._containerService),
        (e = new d.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        p.U(t, e),
        u.vo(e),
        h.Wh(e),
        _.P(e),
        e);
    }
    return this._networkClientInstance;
  }
  createTasks(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/prompt_enhancement/create"),
            o.w(t),
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return this._formatResponse(i);
        } catch (error) {
          return a.r(error);
        }
      })
      .call(this);
  }
  queryTasks(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/prompt_enhancement/query"),
            o.w(t),
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return this._formatResponse(i);
        } catch (error) {
          return a.r(error);
        }
      })
      .call(this);
  }
  updateTasks(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/prompt_enhancement/update"),
            o.w(t),
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return this._formatResponse(i);
        } catch (error) {
          return a.r(error);
        }
      })
      .call(this);
  }
  retryTasks(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/prompt_enhancement/retry"),
            o.w(t),
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return this._formatResponse(i);
        } catch (error) {
          return a.r(error);
        }
      })
      .call(this);
  }
  deleteTasks(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/prompt_enhancement/delete"),
            o.w(t),
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return this._formatResponse(i);
        } catch (error) {
          return a.r(error);
        }
      })
      .call(this);
  }
  deleteAllTasks(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi("/mweb/v1/prompt_enhancement/delete_all"),
            o.w(t),
            {
              signal: e == null ? undefined : e.signal,
            },
          );
          return this._formatResponse(i);
        } catch (error) {
          return a.r(error);
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: l.X.DEFAULT,
      path,
    });
  }
  _formatResponse(t) {
    return l_1(t);
  }
  constructor(t, e) {
    this._containerService = t;
    this._httpApiSettingService = e;
  }
}
v = s.Cg(
  [
    s.Qj(0, n._),
    s.Qj(1, l.r),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      n._ === undefined ? Object : n._,
      l.r === undefined ? Object : l.r,
    ]),
  ],
  v,
);
export class W {
  createTasks(t, e) {
    return this._repository.createTasks(t, e);
  }
  queryTasks(t, e) {
    return this._repository.queryTasks(t, e);
  }
  updateTasks(t, e) {
    return this._repository.updateTasks(t, e);
  }
  retryTasks(t, e) {
    return this._repository.retryTasks(t, e);
  }
  deleteTasks(t, e) {
    return this._repository.deleteTasks(t, e);
  }
  deleteAllTasks(t, e) {
    return this._repository.deleteAllTasks(t, e);
  }
  constructor(t) {
    this._containerService = t;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(v);
  }
}
W = s.Cg(
  [
    s.Qj(0, n._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  W,
);
