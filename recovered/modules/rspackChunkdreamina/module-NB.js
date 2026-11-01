import s from "QWK";
import n from "Kt";
import r from "NY";
import o from "oa";
import a from "iN";
import l from "fg";
import c from "b5";
import d from "K8";
import { Z } from "./module-Xfo.js";
import h from "KC";
import _ from "dR";
import p from "qN";
import v from "yF";
import m from "cBI";
class g {
  get _networkClient() {
    let t;
    let e;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((t = this._containerService),
        (e = new h.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        m.U(t, e),
        _.vo(e),
        p.Wh(e),
        v.P(e),
        e);
    }
    return this._networkClientInstance;
  }
  generateControlnetPreview(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi(Z.PREVIEW),
            l.w(t),
            {
              params: o._({}, e),
            },
          );
          const s = l.o(i.data);
          return d.TZ(s);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  poseDetect(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi(Z.POSE_DETECT),
            l.w(t),
            {
              params: o._({}, e),
            },
          );
          const s = l.o(i.data);
          return d.TZ(s);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  getRecognizeFace(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi(Z.FACE_RECOGNIZE),
            l.w(t),
            e,
          );
          const s = l.o(i.data);
          return d.TZ(s);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  getSaliencySEG(t, e) {
    return r
      ._(function* () {
        try {
          const i = yield this._networkClient.post(
            this._getApi(Z.SALIENCY_SEG),
            l.w(t),
            e,
          );
          const s = l.o(i.data);
          return d.TZ(s);
        } catch (error) {
          return c.r(error);
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: a.X.DEFAULT,
      path,
    });
  }
  constructor(t, e) {
    this._httpApiSettingService = t;
    this._containerService = e;
  }
}
g = s.Cg(
  [
    s.Qj(0, a.r),
    s.Qj(1, n._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      a.r === undefined ? Object : a.r,
      n._ === undefined ? Object : n._,
    ]),
  ],
  g,
);
export class k {
  generateControlnetPreview(t, e) {
    return this._controlnetPreviewRepository.generateControlnetPreview(t, e);
  }
  poseDetect(t, e) {
    return this._controlnetPreviewRepository.poseDetect(t, e);
  }
  getRecognizeFace(t, e) {
    return this._controlnetPreviewRepository.getRecognizeFace(t, e);
  }
  getSaliencySEG(t, e) {
    return this._controlnetPreviewRepository.getSaliencySEG(t, e);
  }
  constructor(t) {
    this._containerService = t;
    this._controlnetPreviewRepository =
      this._containerService.createInstance(g);
  }
}
k = s.Cg(
  [
    s.Qj(0, n._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  k,
);
