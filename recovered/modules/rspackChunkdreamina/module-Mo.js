import r from "NY";
import n from "QWK";
import a from "si5";
import o from "WJn";
import l from "Kt";
import s from "fg";
import u from "fm";
import d from "K8";
import v from "KC";
import f from "dR";
import g from "qN";
import h from "b5";
import y from "cBI";
import _ from "lq";
import b from "yF";
import I from "xi";
import T from "iN";
const paramsVar = "__get_weekly_challenge_list_params";
const promiseVar = "pWeeklyList";
const resultVar = "__get_weekly_challenge_list_result";
class A {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new v.LL().build({
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })),
        y.U(e, t),
        f.vo(t),
        g.Wh(t),
        b.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  getWeeklyChallengeList(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getApi("/mweb/v1/get_weekly_challenge_list"),
            this._convertGetWeeklyChallengeListRequestToServerRequest(e),
          );
          const i = this._convertGetWeeklyChallengeListResponseToData(
            s.o(t.data),
            e,
          );
          return d.TZ(i);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  getWeeklyChallengeDetail(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getApi("/mweb/v1/get_weekly_challenge_detail"),
            this._convertGetWeeklyChallengeDetailRequestToServerRequest(e),
          );
          const i = this._convertGetWeeklyChallengeDetailResponseToData(
            s.o(t.data, u.Cb),
          );
          return d.TZ(i);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  getWeeklyChallengeWorkList(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getApi("/mweb/v1/get_weekly_challenge_work_list"),
            this._convertGetWeeklyChallengeWorkListRequestToServerRequest(e),
          );
          const i = this._convertGetWeeklyChallengeWorkListResponseToData(
            s.o(t.data, u.Cb),
            e,
          );
          return d.TZ(i);
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: T.X.DEFAULT,
      path,
    });
  }
  _convertGetWeeklyChallengeListRequestToServerRequest(e) {
    return s.w({
      ...e.config,
      offset: e.offset,
    });
  }
  _convertGetWeeklyChallengeListResponseToData(e, t) {
    return a.yC(t.config, e.actInfoList, {
      hasMore: e.hasMore,
      offset: e.nextOffset,
    });
  }
  _convertGetWeeklyChallengeDetailRequestToServerRequest(e) {
    return s.w(e);
  }
  _convertGetWeeklyChallengeDetailResponseToData(e) {
    let t;
    const { actInfo, actAwardList } = e;
    return {
      actInfo,
      actAwardList:
        (t =
          actAwardList == null
            ? undefined
            : actAwardList.map((e) => {
                var { item, itemId, remark } = e;
                return {
                  itemId,
                  remark,
                  item: _.v(item),
                };
              })) != null
          ? t
          : [],
    };
  }
  _convertGetWeeklyChallengeWorkListRequestToServerRequest(e) {
    return s.w({
      ...e.config,
      offset: e.offset,
    });
  }
  _convertGetWeeklyChallengeWorkListResponseToData(e, t) {
    let i;
    const r = ((i = e.itemList) != null ? i : [])
      .map((e) => {
        try {
          return _.v(e);
        } catch (error) {
          I.V.error("activity formatWorkDetailDomainModel failed", error);
          return;
        }
      })
      .filter((e) => !!e);
    return a.yC(t.config, r, {
      hasMore: e.hasMore,
      offset: e.nextOffset,
    });
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
A = n.Cg(
  [
    n.Qj(0, T.r),
    n.Qj(1, l._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      T.r === undefined ? Object : T.r,
      l._ === undefined ? Object : l._,
    ]),
  ],
  A,
);
class S {
  getWeeklyChallengeList(e) {
    return r
      ._(function* () {
        let t;
        let i;
        const n = a.CM(e)
          ? e
          : a.yC(e, [], {
              hasMore: true,
              offset: (i = e.offset) != null ? i : 0,
            });
        let o = yield (
          (this._containerService,
          (t = this._preloadJsonpInjectDataService),
          r._(function* () {
            let hasMore;
            let offset;
            const r = yield t.getData(
              {
                paramsVar,
                promiseVar,
                resultVar,
                paramsMatch: (e) =>
                  Array.isArray(e.status) &&
                  e.status.length === 1 &&
                  Array.isArray(n.config.status) &&
                  n.config.status.length === 1 &&
                  e.status[0] === n.config.status[0] &&
                  e.language === n.config.language,
                resultFormat: (t) => {
                  t.data.act_info_list = t.data.act_info_list.filter((e) => {
                    var { act_status } = e;
                    return act_status === "in_progress";
                  });
                  var r = s.o(t.data, u.Cb);
                  hasMore = r.hasMore;
                  offset = r.nextOffset;
                  return Promise.resolve(r.actInfoList);
                },
              },
              {
                burn: true,
              },
            );
            if (r.ok && Array.isArray(r.value)) {
              return d.TZ(
                a.yC(n.config, r.value, {
                  hasMore,
                  offset,
                }),
              );
            }
            return d.xz(-1, "read preload failed");
          })())
        );
        if (!(o.ok && o.value)) {
          o = yield this._activityRepository.getWeeklyChallengeList(n);
        }
        return o;
      })
      .call(this);
  }
  getWeeklyChallengeDetail(e) {
    return r
      ._(function* () {
        return this._activityRepository.getWeeklyChallengeDetail(e);
      })
      .call(this);
  }
  getWeeklyChallengeWorkList(e) {
    let t;
    const i = a.CM(e)
      ? e
      : a.yC(e, [], {
          hasMore: true,
          offset: (t = e.offset) != null ? t : 0,
        });
    return this._activityRepository.getWeeklyChallengeWorkList(i);
  }
  constructor(e, t) {
    this._containerService = e;
    this._preloadJsonpInjectDataService = t;
    this._activityRepository = this._containerService.createInstance(A);
  }
}
export { S as l };
S = n.Cg(
  [
    n.Qj(0, l._),
    n.Qj(1, o.p),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      l._ === undefined ? Object : l._,
      o.p === undefined ? Object : o.p,
    ]),
  ],
  S,
);
