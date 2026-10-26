import n from "X5";
import r from "TO";
import a from "hX7";
import o from "L8k";
import s from "NY";
import c from "oa";
import l from "bk";
import d from "QWK";
import u from "Kt";
import v from "K8";
const m = /^[A-Za-z0-9+/]+={0,2}$/;
function p(e) {
  return l._(c._({}, e), {
    avatarColor: ((e) => {
      if (!e || !(e.length % 4 == 0 && m.test(e))) {
        return e;
      }
      try {
        return decodeURIComponent(atob(e));
      } catch (t) {
        return e;
      }
    })(e.avatarColor),
  });
}
class _ extends n.CommercialTeamworkDataService {
  getTeamList(e) {
    const t = this;
    const i = () => super.getTeamList;
    return s._(function* () {
      const n = yield i().call(t, e);
      if (n.ok) {
        return v.TZ(
          l._(c._({}, n.value), {
            teamList: n.value.teamList.map(p),
          }),
        );
      }
      return n;
    })();
  }
  getTeamInfo(e) {
    const t = this;
    const i = () => super.getTeamInfo;
    return s._(function* () {
      const n = yield i().call(t, e);
      if (n.ok) {
        return v.TZ(
          l._(c._({}, n.value), {
            teamInfo: p(n.value.teamInfo),
          }),
        );
      }
      return n;
    })();
  }
  getTeamInfoByInviteLink(e) {
    const t = this;
    const i = () => super.getTeamInfoByInviteLink;
    return s._(function* () {
      const n = yield i().call(t, e);
      if (n.ok) {
        return v.TZ(
          l._(c._({}, n.value), {
            teamInfo: p(n.value.teamInfo),
          }),
        );
      }
      return n;
    })();
  }
  updateTeamInfo(e) {
    const t = c._({}, e);
    if (e.avatarColor !== undefined) {
      t.avatarColor = ((e) => {
        if (!e) {
          return e;
        }
        try {
          return btoa(encodeURIComponent(e));
        } catch (t) {
          return e;
        }
      })(e.avatarColor);
    }
    return super.updateTeamInfo(t);
  }
  constructor(e) {
    super(e);
  }
}
export function IU(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  e.register(n.ICommercialTeamworkDataService, _);
  e.register(r.X, a.L);
  e.register(
    n.ICommercialTeamWorkspaceService,
    new o.d(n.BaseCommercialTeamWorkspaceService, [
      {
        getTeamId: t.getTeamId,
      },
    ]),
  );
}
export function hU(e) {
  return e.invokeFunction((e) => ({
    commercialTeamworkDataService: e.get(n.ICommercialTeamworkDataService),
    commercialTeamWorkspaceService: e.get(n.ICommercialTeamWorkspaceService),
    commercialTeamPermissionService: e.get(r.X),
  }));
}
export function Xm(e, t) {
  const {
    commercialTeamworkDataService,
    commercialTeamWorkspaceService,
    commercialTeamPermissionService,
  } = t;
  e.registerInstance(
    n.ICommercialTeamworkDataService,
    commercialTeamworkDataService,
  );
  e.registerInstance(
    n.ICommercialTeamWorkspaceService,
    commercialTeamWorkspaceService,
  );
  e.registerInstance(r.X, commercialTeamPermissionService);
}
_ = d.Cg(
  [
    d.Qj(0, u._),
    d.Sn("design:type", Function),
    d.Sn("design:paramtypes", [u._ === undefined ? Object : u._]),
  ],
  _,
);
