import a from "QWK";
import { _ } from "./module-Kt_2.js";
import i from "NY";
import { TZ } from "./module-K8.js";
import { o, w } from "./module-wKU.js";
import { r } from "./module-Sq_2.js";
import { B } from "./module-qm.js";
import { q } from "./module-pA_2.js";
let d = "/commerce/v3/teamwork";
let u = {
  CHECK_CREATE_TEAM: `${d}/check_create_team`,
  UPDATE_TEAM_INFO: `${d}/update_team_info`,
  GET_TEAM_INVITATION_LINK: `${d}/get_team_invitation_link`,
  GET_TEAM_INFO_BY_INVITE_LINK: `${d}/get_team_info_by_invite_link`,
  GET_LITE_TEAM_LIST: `${d}/get_lite_team_list`,
  GET_TEAM_INFO: `${d}/team_info`,
  JOIN_TEAM_BY_INVITE_LINK: `${d}/join_team_by_invite_link`,
  GET_TEAM_MEMBER_LIST: `${d}/get_team_member_list`,
  UPDATE_TEAM_MEMBER_INFO: `${d}/update_team_member_info`,
  REMOVE_TEAM_MEMBER: `${d}/remove_team_member`,
  GET_JOIN_TEAM_APPROVAL_RECORD_LIST: `${d}/get_join_team_approval_record_list`,
  HANDLE_JOIN_TEAM_APPROVAL: `${d}/handle_join_team_approval`,
};
class p {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        this._networkClientFactoryService.createNetworkClient();
    }
    return this._networkClientInstance;
  }
  _getApi(e) {
    const t = this;
    return i._(function* () {
      return t._httpApiSettingService.getAsyncApi(e);
    })();
  }
  _post(e, t) {
    const r = this;
    return i._(function* () {
      let a = yield r._networkClient.post(
        yield r._getApi(e),
        t != null ? t : {},
      );
      return o(a.data);
    })();
  }
  checkCreateTeamQualification(e = {}) {
    const t = this;
    return i._(function* () {
      try {
        let e = yield t._post(u.CHECK_CREATE_TEAM, {});
        return TZ(e);
      } catch (error) {
        return r(error);
      }
    })();
  }
  getTeamList(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.GET_LITE_TEAM_LIST, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  getTeamInfo(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.GET_TEAM_INFO, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  updateTeamInfo(e) {
    const t = this;
    return i._(function* () {
      try {
        yield t._post(u.UPDATE_TEAM_INFO, w(e, true));
        return TZ(undefined);
      } catch (error) {
        return r(error);
      }
    })();
  }
  getInviteLink(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.GET_TEAM_INVITATION_LINK, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  getTeamInfoByInviteLink(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.GET_TEAM_INFO_BY_INVITE_LINK, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  joinByInviteLink(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.JOIN_TEAM_BY_INVITE_LINK, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  getMembers(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.GET_TEAM_MEMBER_LIST, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  updateMemberInfo(e) {
    const t = this;
    return i._(function* () {
      try {
        yield t._post(u.UPDATE_TEAM_MEMBER_INFO, w(e, true));
        return TZ(undefined);
      } catch (error) {
        return r(error);
      }
    })();
  }
  removeMember(e) {
    const t = this;
    return i._(function* () {
      try {
        yield t._post(u.REMOVE_TEAM_MEMBER, w(e, true));
        return TZ(undefined);
      } catch (error) {
        return r(error);
      }
    })();
  }
  getApprovalList(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._post(u.GET_JOIN_TEAM_APPROVAL_RECORD_LIST, w(e, true));
        return TZ(r);
      } catch (error) {
        return r(error);
      }
    })();
  }
  handleApproval(e) {
    const t = this;
    return i._(function* () {
      try {
        yield t._post(u.HANDLE_JOIN_TEAM_APPROVAL, w(e, true));
        return TZ(undefined);
      } catch (error) {
        return r(error);
      }
    })();
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._networkClientFactoryService = t;
  }
}
p = a.Cg(
  [
    a.Qj(0, B),
    a.Qj(1, q),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      B === undefined ? Object : B,
      q === undefined ? Object : q,
    ]),
  ],
  p,
);
export class A {
  checkCreateTeamQualification(e) {
    return this._repository.checkCreateTeamQualification(e != null ? e : {});
  }
  getTeamList(e) {
    return this._repository.getTeamList(e);
  }
  getTeamInfo(e) {
    return this._repository.getTeamInfo(e);
  }
  updateTeamInfo(e) {
    return this._repository.updateTeamInfo(e);
  }
  getInviteLink(e) {
    return this._repository.getInviteLink(e);
  }
  getTeamInfoByInviteLink(e) {
    return this._repository.getTeamInfoByInviteLink(e);
  }
  joinByInviteLink(e) {
    return this._repository.joinByInviteLink(e);
  }
  getMembers(e) {
    return this._repository.getMembers(e);
  }
  updateMemberInfo(e) {
    return this._repository.updateMemberInfo(e);
  }
  removeMember(e) {
    return this._repository.removeMember(e);
  }
  getApprovalList(e) {
    return this._repository.getApprovalList(e);
  }
  handleApproval(e) {
    return this._repository.handleApproval(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(p);
  }
}
A = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  A,
);
