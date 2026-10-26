import r from "QWK";
import a from "Kt";
import n from "NY";
import o from "fg";
import s from "b5";
import d from "K8";
import l from "I3";
import u from "iN";
import { d as d_1 } from "./module-Nxf.js";
import { W } from "./module-Ov6.js";
import g from "KC";
import h from "dR";
import p from "qN";
import v from "yF";
import I from "cBI";
class _ {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new g.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        I.U(e, t),
        h.vo(t),
        p.Wh(t),
        v.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  requestAlgorithm(e, t, i) {
    return n
      ._(function* () {
        try {
          const { data } = yield this._networkClient.post(
            this._getApi(W.ALGO_PROXY),
            this._formatAlgorithmParams(e, t),
            {
              params: d_1(i),
            },
          );
          const a = o.o({
            fileList: data.file_list,
            data: data.resp_params ? o.o(l.j(data.resp_params)) : undefined,
          });
          return d.TZ(a);
        } catch (error) {
          return s.r(error);
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: u.X.DEFAULT,
      path,
    });
  }
  _formatAlgorithmParams(e, t) {
    const [reqKey, scene] = e.split(".");
    const { fileList, options } = t;
    const reqParams = this._formatAlgorithmParamsParams(t.params);
    return o.w({
      reqKey,
      scene,
      fileList,
      reqParams,
      options,
    });
  }
  _formatAlgorithmParamsParams(e) {
    return Object.fromEntries(
      Object.entries(e).flatMap(this._formatAlgorithmParamsParamEntry),
    );
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
    this._formatAlgorithmParamsParamEntry = (e) => {
      var [t, i] = e;
      if (Array.isArray(i)) {
        return i.flatMap((e, i) =>
          this._formatAlgorithmParamsParamEntry([
            "".concat(t, ".").concat(i),
            e,
          ]),
        );
      }
      if (typeof i === "string") {
        return [
          [
            t,
            {
              stringValue: i,
            },
          ],
        ];
      }
      if (typeof i === "number") {
        return [
          [
            t,
            i % 1 > 0
              ? {
                  doubleValue: i,
                }
              : {
                  intValue: i,
                },
          ],
        ];
      }
      return Object.entries(i).flatMap((e) => {
        var [i, r] = e;
        return this._formatAlgorithmParamsParamEntry([
          "".concat(t, ".").concat(i),
          r,
        ]);
      });
    };
  }
}
_ = r.Cg(
  [
    r.Qj(0, u.r),
    r.Qj(1, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      u.r === undefined ? Object : u.r,
      a._ === undefined ? Object : a._,
    ]),
  ],
  _,
);
export class Z {
  requestAlgorithm(e, t, i) {
    return this._algorithmRepository.requestAlgorithm(e, t, i);
  }
  constructor(e) {
    this._containerService = e;
    this._algorithmRepository = this._containerService.createInstance(_);
  }
}
Z = r.Cg(
  [
    r.Qj(0, a._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [a._ === undefined ? Object : a._]),
  ],
  Z,
);
