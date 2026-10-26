import r from "NY";
import a from "oa";
import o from "bk";
import s from "QWK";
import n from "K8";
import u from "yF";
import c from "KC";
import d from "dR";
import l from "qN";
import h from "fg";
import _ from "b5";
import p from "iN";
import v from "Kt";
import g from "cBI";
import { n as n_1 } from "./module-KgO.js";
function S(e) {
  if (e == null ? undefined : e.itemId) {
    return {
      itemIdStr: "".concat(e.itemId),
    };
  }
}
function j(e) {
  return o._(a._({}, e), {
    aigcImage: S(e.aigcImage),
  });
}
function b(e) {
  return o._(a._({}, e), {
    content:
      e.content &&
      ((e) => {
        const { mainImage, auxiliaryImages, videoInfo } = e;
        return o._(a._({}, e), {
          mainImage: mainImage && j(mainImage),
          auxiliaryImages:
            auxiliaryImages == null ? undefined : auxiliaryImages.map(j),
          videoInfo:
            videoInfo &&
            o._(a._({}, videoInfo), {
              aigcVideo: S(videoInfo.aigcVideo),
            }),
        });
      })(e.content),
  });
}
function y(e) {
  if (e) {
    const { itemId, itemIdStr } = e;
    if (itemIdStr) {
      e.itemId = itemIdStr;
    } else if (typeof itemId === "number") {
      e.itemId = Number.isSafeInteger(itemId) ? "".concat(itemId) : undefined;
    }
    delete e.itemIdStr;
  }
}
function A(e) {
  let t;
  let i;
  let r;
  if (e) {
    y((t = e.content.mainImage) == null ? undefined : t.aigcImage);
    if ((i = e.content.auxiliaryImages) != null) {
      i.forEach((e) => y(e.aigcImage));
    }
    y((r = e.content.videoInfo) == null ? undefined : r.aigcVideo);
  }
  return e;
}
export class L {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new c.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        g.U(e, t),
        d.vo(t),
        l.Wh(t),
        u.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  createSubject(e) {
    return r
      ._(function* () {
        try {
          const t = (yield this._networkClient.post(
            this._getApi(n_1.CREATE_SUBJECT),
            h.w(b(e)),
          )).data;
          return n.TZ(t !== undefined ? A(h.o(t)) : undefined);
        } catch (error) {
          return _.c(error, -1, "create subject failed");
        }
      })
      .call(this);
  }
  updateSubject(e) {
    return r
      ._(function* () {
        try {
          const t = (yield this._networkClient.post(
            this._getApi(n_1.UPDATE_SUBJECT),
            h.w(b(e)),
          )).data;
          return n.TZ(t !== undefined ? A(h.o(t)) : undefined);
        } catch (error) {
          return _.c(error, -1, "update subject failed");
        }
      })
      .call(this);
  }
  deleteSubject(e) {
    return r
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getApi(n_1.DELETE_SUBJECT),
            h.w(e),
          );
          return n.TZ(undefined);
        } catch (error) {
          return _.c(error, -1, "delete subject failed");
        }
      })
      .call(this);
  }
  deleteSubjects(e) {
    return r
      ._(function* () {
        try {
          yield this._networkClient.post(
            this._getApi(n_1.DELETE_SUBJECT),
            h.w(e),
          );
          return n.TZ(undefined);
        } catch (error) {
          return _.c(error, -1, "batch delete subjects failed");
        }
      })
      .call(this);
  }
  getSubjectList(e) {
    return r
      ._(function* () {
        try {
          let t;
          let i;
          let r;
          let s;
          const u = yield this._networkClient.post(
            this._getApi(n_1.GET_SUBJECT_LIST),
            h.w(e),
          );
          const c =
            (s = u.data) != null
              ? s
              : {
                  next_cursor: 0,
                  has_more: false,
                  data_list: [],
                };
          const d = h.o(c);
          return n.TZ(
            (((i =
              (r = (t = o._(a._({}, d), {
                searchId: u.logid,
              })).dataList) != null
                ? r
                : t.data_list) != null
              ? i
              : []
            ).forEach(A),
            t),
          );
        } catch (error) {
          return _.c(error, -1, "get subject list failed");
        }
      })
      .call(this);
  }
  generateSubjectVoice(e) {
    return r
      ._(function* () {
        try {
          const t = (yield this._networkClient.post(
            this._getApi(n_1.GENERATE_SUBJECT_VOICE),
            h.w(e),
          )).data;
          return n.TZ(t !== undefined ? h.o(t) : undefined);
        } catch (error) {
          return _.c(error, -1, "generate subject voice failed");
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: p.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
L = s.Cg(
  [
    s.Qj(0, p.r),
    s.Qj(1, v._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      p.r === undefined ? Object : p.r,
      v._ === undefined ? Object : v._,
    ]),
  ],
  L,
);
