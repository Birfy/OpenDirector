import a from "NY";
import o from "qa";
import i from "QWK";
import { _ as __1 } from "./module-Kt_2.js";
import { TZ, xz } from "./module-K8.js";
import { j as j_1 } from "./module-iFH.js";
import m from "dw4";
import d from "oa";
import u from "bk";
import { n as n_1 } from "./module-mLM.js";
import { Z } from "./module-hp_4.js";
import { OY, fU, xC } from "./module-JL_2.js";
import { W } from "./module-Rbx.js";
import { X } from "./module-TO_5.js";
class s {
  updateMutationLoading(e) {
    this._mutationLoadingCount = e
      ? this._mutationLoadingCount + 1
      : Math.max(this._mutationLoadingCount - 1, 0);
  }
  updateMutationError(e) {
    this._mutationError = e;
  }
  increaseRefreshVersion() {
    this._refreshVersion += 1;
  }
  updateCurrentTeam(e) {
    this._teamManager.updateCurrentTeamFromList(e);
  }
  constructor(e, t, r, a) {
    this._teamManager = e;
    this._memberManager = t;
    this._approvalManager = r;
    this._inviteManager = a;
    this._mutationLoadingCount = 0;
    this._mutationError = undefined;
    this._refreshVersion = 0;
    let o = this;
    this.state = {
      get currentTeam() {
        return o._teamManager.getStoreState().currentTeam;
      },
      get teamListPage() {
        return o._teamManager.getStoreState().teamListPage;
      },
      get membersPage() {
        return o._memberManager.getStoreState().page;
      },
      get applicationsPage() {
        return o._approvalManager.getStoreState().page;
      },
      get inviteContext() {
        return o._inviteManager.getStoreState().context;
      },
      get inviteSession() {
        return o._inviteManager.getStoreState().session;
      },
      get seat() {
        return o._teamManager.getStoreState().seat;
      },
      get permission() {
        return o._teamManager.getStoreState().permission;
      },
      loading: {
        get initializing() {
          return o._teamManager.getStoreState().loading.initializing;
        },
        get teamList() {
          return o._teamManager.getStoreState().loading.teamList;
        },
        get members() {
          return o._memberManager.getStoreState().loading;
        },
        get applications() {
          return o._approvalManager.getStoreState().loading;
        },
        get invite() {
          return o._inviteManager.getStoreState().loading;
        },
        get mutation() {
          return o._mutationLoadingCount > 0;
        },
      },
      error: {
        get initializing() {
          return o._teamManager.getStoreState().error.initializing;
        },
        get teamList() {
          return o._teamManager.getStoreState().error.teamList;
        },
        get members() {
          return o._memberManager.getStoreState().error;
        },
        get applications() {
          return o._approvalManager.getStoreState().error;
        },
        get invite() {
          return o._inviteManager.getStoreState().error;
        },
        get mutation() {
          return o._mutationError;
        },
      },
      get refreshVersion() {
        return o._refreshVersion;
      },
    };
    m.Gn(this, {
      _mutationLoadingCount: m.sH,
      _mutationError: m.sH,
      _refreshVersion: m.sH,
      updateMutationLoading: m.XI,
      updateMutationError: m.XI,
      increaseRefreshVersion: m.XI,
    });
  }
}
class _ {
  updateLoading(e) {
    this._loadingCount = e
      ? this._loadingCount + 1
      : Math.max(this._loadingCount - 1, 0);
    this.state.loading = this._loadingCount > 0;
  }
  updateError(e) {
    this.state.error = e;
  }
  updatePage(e, t = false) {
    this.state.page = OY(this.state.page, e, t, (e) => e.approvalRecordId);
  }
  resetTeamScope() {
    this.state.page = fU();
    this.state.error = undefined;
  }
  constructor() {
    this.state = {
      page: fU(),
      loading: false,
    };
    this._loadingCount = 0;
    m.l_(this);
  }
}
class f {
  getStoreState() {
    return this._store.state;
  }
  resetTeamScope() {
    this._requestSequence += 1;
    this._pageTeamId = undefined;
    this._store.resetTeamScope();
  }
  refreshApprovalList(e = {}) {
    const t = this;
    return a._(function* () {
      let r;
      let a;
      let o;
      let i = (r = e.teamId) != null ? r : t._getCurrentTeamId();
      if (!i) {
        return xz(-1, "current team is not available");
      }
      let n = ++t._requestSequence;
      let l = !!(e.keepData && t._pageTeamId === i);
      let m = t._pageTeamId === i ? t._store.state.page.nextCursor : "";
      let s = u._(
        d._(
          {
            teamId: i,
          },
          t._getOptionalCursor(e, m),
        ),
        {
          count: (a = e.count) != null ? a : 20,
        },
      );
      if (e.status !== undefined) {
        s.status = e.status;
      }
      try {
        t._store.updateLoading(true);
        let e = yield t._teamworkDataService.getApprovalList(s);
        if (!e.ok) {
          if (n === t._requestSequence) {
            t._store.updateError(e);
          }
          return e;
        }
        let r =
          ((o = s.status) == null ? undefined : o.length) === 1 &&
          s.status[0] === n_1.PENDING;
        let a = {
          list: e.value.approvalRecordList,
          nextCursor: e.value.nextCursor,
          hasMore: e.value.hasMore,
        };
        if (r && typeof e.value.pendingRecordCount === "number") {
          a.total = e.value.pendingRecordCount;
        }
        if (n === t._requestSequence) {
          t._store.updatePage(a, l);
          t._pageTeamId = i;
          t._store.updateError(undefined);
        }
        return TZ(a);
      } finally {
        t._store.updateLoading(false);
      }
    })();
  }
  handleApproval(e) {
    return this._teamworkDataService.handleApproval(e);
  }
  _getOptionalCursor(e, t) {
    if (e.cursor) {
      return {
        cursor: e.cursor,
      };
    }
    if (e.keepData && t) {
      return {
        cursor: t,
      };
    }
    return {};
  }
  constructor(e, t) {
    this._getCurrentTeamId = e;
    this._teamworkDataService = t;
    this._store = new _();
    this._requestSequence = 0;
  }
}
f = i.Cg(
  [
    i.Qj(1, Z),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      Function,
      typeof CommercialTeamworkDataService === "undefined"
        ? Object
        : CommercialTeamworkDataService,
    ]),
  ],
  f,
);
class S {
  setStorage(e) {
    this._storage = e;
    if (this._hasMemoryState) {
      if (this._memorySession) {
        this._persist(this._memorySession);
      } else {
        this._removePersistedSession();
      }
    }
  }
  saveSession(e) {
    let t;
    let r = {
      inviteLink: e.inviteLink,
      status: (t = e.status) != null ? t : W.CAN_APPLY,
      updatedAt: Date.now(),
    };
    if (e.path) {
      r.path = e.path;
    }
    if (e.query) {
      r.query = e.query;
    }
    if (e.teamInfo) {
      r.teamInfo = e.teamInfo;
    }
    if (e.inviterInfo) {
      r.inviterInfo = e.inviterInfo;
    }
    if (e.approvalRecord) {
      r.approvalRecord = e.approvalRecord;
    }
    this._save(r);
    return r;
  }
  restoreSession() {
    if (this._hasMemoryState) {
      return this._memorySession;
    }
    try {
      let e;
      let t =
        (e = this._storage) == null ? undefined : e.getItem(this._storageKey);
      if (!t) {
        return;
      }
      let r = JSON.parse(t);
      this._memorySession = r;
      this._hasMemoryState = true;
      return r;
    } catch (e) {
      return;
    }
  }
  markJoined(teamInfo) {
    return this.markStatus(W.JOINED, {
      teamInfo,
    });
  }
  markStatus(status, t = {}) {
    let r = this.restoreSession();
    if (!r) {
      return;
    }
    let a = u._(d._({}, r, t), {
      status,
      updatedAt: Date.now(),
    });
    this._save(a);
    return a;
  }
  clearSession() {
    this._memorySession = undefined;
    this._hasMemoryState = true;
    this._removePersistedSession();
  }
  _save(e) {
    this._memorySession = e;
    this._hasMemoryState = true;
    this._persist(e);
  }
  _persist(e) {
    try {
      let t;
      if ((t = this._storage) != null) {
        t.setItem(this._storageKey, JSON.stringify(e));
      }
    } catch (e) {}
  }
  _removePersistedSession() {
    try {
      let e;
      if ((e = this._storage) != null) {
        e.removeItem(this._storageKey);
      }
    } catch (e) {}
  }
  constructor(e = "commerce-team-invite-session") {
    this._storageKey = e;
    this._hasMemoryState = false;
  }
}
class g {
  updateLoading(e) {
    this._loadingCount = e
      ? this._loadingCount + 1
      : Math.max(this._loadingCount - 1, 0);
    this.state.loading = this._loadingCount > 0;
  }
  updateError(e) {
    this.state.error = e;
  }
  updateContext(e) {
    this.state.context = e;
  }
  updateSession(e) {
    this.state.session = e;
  }
  resetTeamScope() {
    this.state.context = undefined;
    this.state.error = undefined;
  }
  constructor() {
    this.state = {
      loading: false,
    };
    this._loadingCount = 0;
    m.l_(this);
  }
}
class y {
  getStoreState() {
    return this._store.state;
  }
  resetTeamScope() {
    this._requestSequence += 1;
    this._store.resetTeamScope();
  }
  setInviteSessionStorage(e) {
    this._inviteSession.setStorage(e);
    this._store.updateSession(this._inviteSession.restoreSession());
  }
  saveInviteSession(e) {
    let t = this._inviteSession.saveSession(e);
    this._store.updateSession(t);
    return t;
  }
  restoreInviteSession() {
    let e = this._inviteSession.restoreSession();
    this._store.updateSession(e);
    return e;
  }
  clearInviteSession() {
    this._inviteSession.clearSession();
    this._store.updateSession(undefined);
  }
  openInviteContext(e = {}) {
    const t = this;
    return a._(function* () {
      let r;
      let a = (r = e.teamId) != null ? r : t._getCurrentTeamId();
      if (!a) {
        return xz(-1, "current team is not available");
      }
      let o = ++t._requestSequence;
      try {
        t._store.updateLoading(true);
        let r = yield t._teamworkDataService.getInviteLink({
          teamId: a,
          refresh: e.refresh,
        });
        if (!r.ok) {
          if (o === t._requestSequence) {
            t._store.updateError(r);
          }
          return r;
        }
        if (o === t._requestSequence) {
          t._store.updateContext(r.value);
          t._store.updateError(undefined);
        }
        return r;
      } finally {
        t._store.updateLoading(false);
      }
    })();
  }
  createJoinSessionParams(e) {
    let t = this._inviteSession.restoreSession();
    let r =
      (t == null ? undefined : t.inviteLink) === e.inviteLink ? t : undefined;
    let a = {
      inviteLink: e.inviteLink,
      status: W.CAN_APPLY,
    };
    if (r == null ? undefined : r.teamInfo) {
      a.teamInfo = r.teamInfo;
    }
    if (r == null ? undefined : r.inviterInfo) {
      a.inviterInfo = r.inviterInfo;
    }
    return a;
  }
  getTeamInfoByInviteLink(e) {
    const t = this;
    return a._(function* () {
      return t._teamworkDataService.getTeamInfoByInviteLink({
        invitationLink: e.inviteLink,
      });
    })();
  }
  joinByInviteLink(e) {
    const t = this;
    return a._(function* () {
      return t._teamworkDataService.joinByInviteLink({
        invitationLink: e.inviteLink,
      });
    })();
  }
  getInviteTeamInfo() {
    let e;
    if ((e = this._inviteSession.restoreSession()) == null) {
      return undefined;
    }
    return e.teamInfo;
  }
  markStatus(e) {
    this._store.updateSession(this._inviteSession.markStatus(e));
  }
  markJoined(e) {
    this._store.updateSession(this._inviteSession.markJoined(e));
  }
  constructor(e, t) {
    this._getCurrentTeamId = e;
    this._teamworkDataService = t;
    this._store = new g();
    this._inviteSession = new S();
    this._requestSequence = 0;
  }
}
y = i.Cg(
  [
    i.Qj(1, Z),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      Function,
      typeof CommercialTeamworkDataService === "undefined"
        ? Object
        : CommercialTeamworkDataService,
    ]),
  ],
  y,
);
class w {
  updateLoading(e) {
    this._loadingCount = e
      ? this._loadingCount + 1
      : Math.max(this._loadingCount - 1, 0);
    this.state.loading = this._loadingCount > 0;
  }
  updateError(e) {
    this.state.error = e;
  }
  updatePage(e, t = false) {
    let r = OY(this.state.page, e, t, (e) => e.userId);
    let a =
      typeof e.remainingRemoveCnt === "number"
        ? e.remainingRemoveCnt
        : t
          ? this.state.page.remainingRemoveCnt
          : undefined;
    this.state.page = d._({}, r);
    if (typeof a === "number") {
      this.state.page.remainingRemoveCnt = a;
    }
  }
  resetTeamScope() {
    this.state.page = fU();
    this.state.error = undefined;
  }
  constructor() {
    this.state = {
      page: fU(),
      loading: false,
    };
    this._loadingCount = 0;
    m.l_(this);
  }
}
class I {
  getStoreState() {
    return this._store.state;
  }
  resetTeamScope() {
    this._requestSequence += 1;
    this._pageTeamId = undefined;
    this._store.resetTeamScope();
  }
  refreshMembers(e = {}) {
    const t = this;
    return a._(function* () {
      let r;
      let a;
      let o = (r = e.teamId) != null ? r : t._getCurrentTeamId();
      if (!o) {
        return xz(-1, "current team is not available");
      }
      let i = ++t._requestSequence;
      let n = !!(e.keepData && t._pageTeamId === o);
      let l = t._pageTeamId === o ? t._store.state.page.nextCursor : "";
      let m = u._(
        d._(
          {
            teamId: o,
          },
          t._getOptionalCursor(e, l),
        ),
        {
          count: (a = e.count) != null ? a : 50,
        },
      );
      if (typeof e.needQuitMembers === "boolean") {
        m.needQuitMembers = e.needQuitMembers;
      }
      try {
        t._store.updateLoading(true);
        let e = yield t._teamworkDataService.getMembers(m);
        if (!e.ok) {
          if (i === t._requestSequence) {
            t._store.updateError(e);
          }
          return e;
        }
        let r = {
          list: e.value.teamMemberList,
          nextCursor: e.value.nextCursor,
          hasMore: e.value.hasMore,
        };
        r.total = e.value.memberCnt;
        if (typeof e.value.remainingRemoveCnt === "number") {
          r.remainingRemoveCnt = e.value.remainingRemoveCnt;
        }
        if (i === t._requestSequence) {
          t._store.updatePage(r, n);
          t._pageTeamId = o;
          t._store.updateError(undefined);
        }
        return TZ(r);
      } finally {
        t._store.updateLoading(false);
      }
    })();
  }
  updateMemberInfo(e) {
    let { nickname } = e;
    let r = o._(e, ["nickname"]);
    if (nickname !== undefined) {
      r.nickName = nickname;
    }
    return this._teamworkDataService.updateMemberInfo(r);
  }
  removeMember(e) {
    return this._teamworkDataService.removeMember(e);
  }
  _getOptionalCursor(e, t) {
    if (e.cursor) {
      return {
        cursor: e.cursor,
      };
    }
    if (e.keepData && t) {
      return {
        cursor: t,
      };
    }
    return {};
  }
  constructor(e, t) {
    this._getCurrentTeamId = e;
    this._teamworkDataService = t;
    this._store = new w();
    this._requestSequence = 0;
  }
}
I = i.Cg(
  [
    i.Qj(1, Z),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      Function,
      typeof CommercialTeamworkDataService === "undefined"
        ? Object
        : CommercialTeamworkDataService,
    ]),
  ],
  I,
);
class j {
  get hasTeamListLoaded() {
    return this._hasTeamListLoaded;
  }
  get hasCurrentTeamDetailLoaded() {
    let e;
    let t = (e = this.state.currentTeam) == null ? undefined : e.teamId;
    return !!(t && this._currentTeamDetailTeamId === t);
  }
  updateLoading(e, t) {
    let r;
    let a = (r = this._loadingCounts.get(e)) != null ? r : 0;
    let o = t ? a + 1 : Math.max(a - 1, 0);
    if (o > 0) {
      this._loadingCounts.set(e, o);
    } else {
      this._loadingCounts.delete(e);
    }
    this.state.loading[e] = o > 0;
  }
  updateError(e, t) {
    this.state.error[e] = t;
  }
  updateTeamListPage(e, t = false) {
    this.state.teamListPage = OY(
      this.state.teamListPage,
      e,
      t,
      (e) => e.teamId,
    );
  }
  markTeamListLoaded() {
    this._hasTeamListLoaded = true;
  }
  updateCurrentTeamFromDetail(e) {
    this._notifyTeamScopeChangeIfNeeded(e == null ? undefined : e.teamId);
    let t = this._createPermissionState(e);
    this._currentTeamDetailTeamId = e == null ? undefined : e.teamId;
    this.state.currentTeam = e;
    this.state.seat = xC(e, t);
    this.state.permission = t;
  }
  updateCurrentTeamFromList(e) {
    let t;
    this._notifyTeamScopeChangeIfNeeded(e == null ? undefined : e.teamId);
    if (
      (e == null ? undefined : e.teamId) &&
      ((t = this.state.currentTeam) == null ? undefined : t.teamId) ===
        e.teamId &&
      this._currentTeamDetailTeamId === e.teamId
    ) {
      return void this.updateCurrentTeamFromDetail(
        d._({}, this.state.currentTeam, e),
      );
    }
    let r = this._createPermissionState();
    this._currentTeamDetailTeamId = undefined;
    this.state.currentTeam = e;
    this.state.seat = xC(undefined, r);
    this.state.permission = r;
  }
  _notifyTeamScopeChangeIfNeeded(e) {
    let t;
    if (((t = this.state.currentTeam) == null ? undefined : t.teamId) !== e) {
      this._onTeamScopeChange();
    }
  }
  _createPermissionState(team) {
    return this._teamPermissionService.computeTeamPermission({
      team,
    });
  }
  constructor(e, t) {
    this._teamPermissionService = e;
    this._onTeamScopeChange = t;
    this._loadingCounts = new Map();
    this._hasTeamListLoaded = false;
    let permission = this._createPermissionState();
    this.state = {
      teamListPage: fU(),
      seat: xC(undefined, permission),
      permission,
      loading: {
        initializing: false,
        teamList: false,
      },
      error: {},
    };
    m.l_(this);
  }
}
class k {
  getStoreState() {
    return this._store.state;
  }
  get hasTeamListLoaded() {
    return this._store.hasTeamListLoaded;
  }
  get hasCurrentTeamDetailLoaded() {
    return this._store.hasCurrentTeamDetailLoaded;
  }
  getTeamId() {
    const e = this;
    return a._(function* () {
      try {
        let t;
        let r;
        let a = yield (t = (r = e._options).getTeamId) == null
          ? undefined
          : t.call(r);
        return e._normalizeInjectedTeamId(a);
      } catch (e) {
        return;
      }
    })();
  }
  checkCreateTeamQualification(e) {
    return this._teamworkDataService.checkCreateTeamQualification(e);
  }
  refreshTeamList(e = {}) {
    const t = this;
    return a._(function* () {
      let { cursor, count, keepData } = e;
      let i = {
        cursor: t._getCursor(
          {
            cursor,
            keepData,
          },
          t._store.state.teamListPage.nextCursor,
        ),
        count: count != null ? count : 20,
      };
      return t._refreshTeamListPage(i, !!keepData);
    })();
  }
  getOwnerTeamInfoList(e = {}) {
    const t = this;
    return a._(function* () {
      let r;
      let a;
      let o = [];
      let i = (r = e.cursor) != null ? r : "0";
      let count = (a = e.count) != null ? a : 100;
      while (i) {
        let e = yield t._teamworkDataService.getTeamList({
          cursor: i,
          count,
          onlyOwner: true,
        });
        if (!e.ok) {
          return e;
        }
        o.push(...e.value.teamList);
        if (!e.value.hasMore || !e.value.nextCursor) {
          break;
        }
        i = e.value.nextCursor;
      }
      return t._getOwnerTeamDetails(o);
    })();
  }
  refreshCurrentTeamDetail(e = {}) {
    let t;
    let r = (t = this._store.state.currentTeam) == null ? undefined : t.teamId;
    if (r) {
      return this.refreshTeamDetail(r, !!e.reuseInFlight);
    }
    return this._refreshCurrentTeamDetailAfterTeamList(!!e.reuseInFlight);
  }
  switchTeam(e) {
    const t = this;
    return a._(function* () {
      let r = t._findTeam(e);
      if (r) {
        t._store.updateCurrentTeamFromList(r);
        return t.refreshCurrentTeamDetail();
      }
      let a = yield t._findTeamByPaging(e);
      if (!a.ok) {
        return a;
      }
      if (a.value) {
        t._store.updateCurrentTeamFromList(a.value);
        return t.refreshCurrentTeamDetail();
      }
      let o = yield t.refreshTeamList();
      if (!o.ok) {
        return o;
      }
      let i = t._findTeam(e);
      if (i) {
        t._store.updateCurrentTeamFromList(i);
        return t.refreshCurrentTeamDetail();
      }
      let n = yield t._findTeamByPaging(e);
      if (n.ok) {
        if (n.value) {
          t._store.updateCurrentTeamFromList(n.value);
          return t.refreshCurrentTeamDetail();
        }
        return xz(-1, "team is not available");
      }
      return n;
    })();
  }
  updateTeamInfo(e) {
    return this._teamworkDataService.updateTeamInfo(e);
  }
  refreshTeamDetail(e, t = false) {
    return this._getCurrentTeamDetailTask(e, t);
  }
  initializeCurrentTeamDetail() {
    const e = this;
    return a._(function* () {
      while (
        e._store.state.currentTeam &&
        !e._store.hasCurrentTeamDetailLoaded
      ) {
        let r = e._store.state.currentTeam.teamId;
        let a = yield e._getCurrentTeamDetailTask(r, true);
        if (!a.ok) {
          let t;
          if (
            ((t = e._store.state.currentTeam) == null
              ? undefined
              : t.teamId) !== r
          ) {
            continue;
          }
          return a;
        }
      }
      return TZ(undefined);
    })();
  }
  updateInitializingLoading(e) {
    this._store.updateLoading("initializing", e);
  }
  updateInitializingError(e) {
    this._store.updateError("initializing", e);
  }
  updateTeamListError(e) {
    this._store.updateError("teamList", e);
  }
  updateCurrentTeamFromList(e) {
    this._store.updateCurrentTeamFromList(e);
  }
  _refreshCurrentTeamDetailAfterTeamList(e) {
    const t = this;
    return a._(function* () {
      let r;
      let a = yield t.refreshTeamList();
      if (!a.ok) {
        return a;
      }
      let o = (r = t._store.state.currentTeam) == null ? undefined : r.teamId;
      if (o) {
        return t._getCurrentTeamDetailTask(o, e);
      }
      return xz(-1, "current team is not available");
    })();
  }
  _getCurrentTeamDetailTask(e, t) {
    if (t) {
      let t = this._currentTeamDetailTasks.get(e);
      if (t) {
        return t;
      }
    }
    let r = ++this._currentTeamDetailRequestSequence;
    this._latestCurrentTeamDetailRequestSequenceByTeam.set(e, r);
    let a = this._requestCurrentTeamDetail(e, r).finally(() => {
      if (this._currentTeamDetailTasks.get(e) === a) {
        this._currentTeamDetailTasks.delete(e);
        if (this._latestCurrentTeamDetailRequestSequenceByTeam.get(e) === r) {
          this._latestCurrentTeamDetailRequestSequenceByTeam.delete(e);
        }
      }
    });
    this._currentTeamDetailTasks.set(e, a);
    return a;
  }
  _requestCurrentTeamDetail(e, t) {
    const r = this;
    return a._(function* () {
      let a = yield r._teamworkDataService.getTeamInfo({
        teamId: e,
      });
      if (!a.ok) {
        return a;
      }
      let teamInfo = a.value.teamInfo;
      let currentTeam = r._store.state.currentTeam;
      let n =
        (currentTeam == null ? undefined : currentTeam.teamId) === e
          ? d._({}, currentTeam, teamInfo)
          : d._({}, teamInfo);
      if (
        (currentTeam == null ? undefined : currentTeam.teamId) === e &&
        r._latestCurrentTeamDetailRequestSequenceByTeam.get(e) === t
      ) {
        r._store.updateCurrentTeamFromDetail(n);
      }
      return TZ(n);
    })();
  }
  _refreshTeamListPage(e, t) {
    const r = this;
    return a._(function* () {
      try {
        r._store.updateLoading("teamList", true);
        let o = yield r._teamworkDataService.getTeamList(e);
        if (o.ok) {
          let a;
          let i = {
            list: o.value.teamList,
            nextCursor: o.value.nextCursor,
            hasMore: o.value.hasMore,
          };
          let n =
            (a = r._store.state.currentTeam) == null ? undefined : a.teamId;
          r._store.updateTeamListPage(i, t);
          r._syncCurrentTeam(n, t);
          if (r._isInitialTeamListRefresh(e.cursor, t)) {
            r._store.markTeamListLoaded();
            r._store.updateError("initializing", undefined);
          }
          r._store.updateError("teamList", undefined);
          return TZ(i);
        }
        r._store.updateError("teamList", o);
        return o;
      } finally {
        r._store.updateLoading("teamList", false);
      }
    })();
  }
  _getOwnerTeamDetails(e) {
    const t = this;
    return a._(function* () {
      let r = [];
      for (let a = 0; a < e.length; a += 5) {
        for (let o of yield Promise.all(
          e.slice(a, a + 5).map((e) =>
            t._teamworkDataService.getTeamInfo({
              teamId: e.teamId,
            }),
          ),
        )) {
          if (!o.ok) {
            return o;
          }
          r.push(o.value.teamInfo);
        }
      }
      return TZ(r);
    })();
  }
  _findTeamByPaging(e) {
    const t = this;
    return a._(function* () {
      while (
        t._store.state.teamListPage.hasMore &&
        t._store.state.teamListPage.nextCursor
      ) {
        let r = yield t.refreshTeamList({
          cursor: t._store.state.teamListPage.nextCursor,
          keepData: true,
        });
        if (!r.ok) {
          return r;
        }
        let a = t._findTeam(e);
        if (a) {
          return TZ(a);
        }
      }
      return TZ(undefined);
    })();
  }
  _getCursor(e, t) {
    if (e.cursor) {
      return e.cursor;
    }
    if (e.keepData && t) {
      return t;
    }
    return "0";
  }
  _isInitialTeamListRefresh(e, t) {
    return !t && e === "0";
  }
  _normalizeInjectedTeamId(e) {
    if (typeof e === "string") {
      return e.trim() || undefined;
    }
  }
  _findTeam(e) {
    return this._store.state.teamListPage.list.find((t) => t.teamId === e);
  }
  _syncCurrentTeam(e, t = false) {
    let list = this._store.state.teamListPage.list;
    let currentTeam = this._store.state.currentTeam;
    let o = e ? list.find((t) => t.teamId === e) : undefined;
    if (o) {
      this._store.updateCurrentTeamFromList(o);
    } else if (
      e &&
      (currentTeam == null ? undefined : currentTeam.teamId) === e
    ) {
      if (t || this._store.state.teamListPage.hasMore) {
        this._store.updateCurrentTeamFromList(currentTeam);
      } else {
        this._store.updateCurrentTeamFromList(undefined);
      }
    } else {
      this._store.updateCurrentTeamFromList(t ? currentTeam : list[0]);
    }
  }
  constructor(e, t, r, a) {
    this._options = e;
    this._teamworkDataService = r;
    this._currentTeamDetailTasks = new Map();
    this._latestCurrentTeamDetailRequestSequenceByTeam = new Map();
    this._currentTeamDetailRequestSequence = 0;
    this._store = new j(a, t);
  }
}
k = i.Cg(
  [
    i.Qj(2, Z),
    i.Qj(3, X),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof CommercialTeamWorkspaceServiceOptions === "undefined"
        ? Object
        : CommercialTeamWorkspaceServiceOptions,
      Function,
      typeof CommercialTeamworkDataService === "undefined"
        ? Object
        : CommercialTeamworkDataService,
      typeof CommercialTeamPermissionService === "undefined"
        ? Object
        : CommercialTeamPermissionService,
    ]),
  ],
  k,
);
export class F {
  get state() {
    return this._store.state;
  }
  getTeamId() {
    return this._teamManager.getTeamId();
  }
  isTeamScene() {
    const e = this;
    return a._(function* () {
      return !!(yield e.getTeamId());
    })();
  }
  initializeIfNeeded() {
    const e = this;
    return a._(function* () {
      if (e._initializeTask) {
        return e._initializeTask;
      }
      if (
        e._teamManager.hasTeamListLoaded &&
        (!e.state.currentTeam || e._teamManager.hasCurrentTeamDetailLoaded)
      ) {
        e._teamManager.updateInitializingError(undefined);
        return TZ(undefined);
      }
      let t = e._initializeWorkspace().finally(() => {
        if (e._initializeTask === t) {
          e._initializeTask = undefined;
        }
      });
      e._initializeTask = t;
      return t;
    })();
  }
  checkCreateTeamQualification(e) {
    return this._teamManager.checkCreateTeamQualification(e);
  }
  refreshTeamList(e = {}) {
    return this._teamManager.refreshTeamList(e);
  }
  getOwnerTeamInfoList(e = {}) {
    return this._teamManager.getOwnerTeamInfoList(e);
  }
  refreshCurrentTeamDetail(e = {}) {
    return this._teamManager.refreshCurrentTeamDetail(e);
  }
  switchTeam(e) {
    return this._teamManager.switchTeam(e);
  }
  setInviteSessionStorage(e) {
    this._inviteManager.setInviteSessionStorage(e);
  }
  saveInviteSession(e) {
    return this._inviteManager.saveInviteSession(e);
  }
  restoreInviteSession() {
    return this._inviteManager.restoreInviteSession();
  }
  clearInviteSession() {
    this._inviteManager.clearInviteSession();
  }
  openInviteContext(e = {}) {
    return this._inviteManager.openInviteContext(e);
  }
  getTeamInfoByInviteLink(e) {
    return this._inviteManager.getTeamInfoByInviteLink(e);
  }
  applyJoinByInviteLink(e) {
    const t = this;
    return this._runMutation(
      a._(function* () {
        t.saveInviteSession(t._inviteManager.createJoinSessionParams(e));
        let r = yield t._inviteManager.joinByInviteLink(e);
        if (!r.ok) {
          t._inviteManager.markStatus(W.ERROR);
          return r;
        }
        if (r.value.joinResult === j_1.APPROVING) {
          t._inviteManager.markStatus(W.PENDING_APPROVAL);
        } else if (r.value.joinResult === j_1.SUCCESS) {
          let e = t._inviteManager.getInviteTeamInfo();
          yield t.refreshTeamList();
          if (e) {
            let r = yield t.switchTeam(e.teamId);
            if (!r.ok) {
              t._store.updateCurrentTeam(e);
            }
            t._inviteManager.markJoined(r.ok ? r.value : e);
          } else {
            t._inviteManager.markStatus(W.JOINED);
          }
        }
        return r;
      }),
    );
  }
  refreshMembers(e = {}) {
    return this._memberManager.refreshMembers(e);
  }
  updateTeamInfo(e) {
    const t = this;
    return this._runMutation(
      a._(function* () {
        let r = yield t._teamManager.updateTeamInfo(e);
        if (r.ok) {
          yield t.refreshTeamList();
          return t._teamManager.refreshTeamDetail(e.teamId);
        }
        return r;
      }),
    );
  }
  updateMemberInfo(e) {
    let { refreshAfterSuccess = true } = e;
    let r = o._(e, ["refreshAfterSuccess"]);
    const i = this;
    return this._runMutation(
      a._(function* () {
        let e = yield i._memberManager.updateMemberInfo(r);
        if (e.ok && refreshAfterSuccess) {
          yield i._refreshAfterMemberWrite(r.teamId);
        }
        return e;
      }),
    );
  }
  removeMember(e) {
    let { refreshAfterSuccess = true } = e;
    let r = o._(e, ["refreshAfterSuccess"]);
    const i = this;
    return this._runMutation(
      a._(function* () {
        let e = yield i._memberManager.removeMember(r);
        if (e.ok && refreshAfterSuccess) {
          yield i._refreshAfterMemberWrite(r.teamId);
        }
        return e;
      }),
    );
  }
  refreshApprovalList(e = {}) {
    return this._approvalManager.refreshApprovalList(e);
  }
  handleApproval(e) {
    let t =
      (o = e.teamId) != null
        ? o
        : (r = this.state.currentTeam) == null
          ? undefined
          : r.teamId;
    if (!t) {
      return Promise.resolve(xz(-1, "current team is not available"));
    }
    var r;
    var o;
    const i = this;
    return this._runMutation(
      a._(function* () {
        let r = yield i._approvalManager.handleApproval({
          approvalRecordId: e.approvalRecordId,
          action: e.action,
        });
        if (r.ok && e.refreshAfterSuccess !== false) {
          yield i.refreshApprovalList({
            teamId: t,
          });
          yield i.refreshMembers({
            teamId: t,
          });
          yield i.refreshTeamList();
          yield i.refreshCurrentTeamDetail();
        }
        return r;
      }),
    );
  }
  _initializeWorkspace() {
    const e = this;
    return a._(function* () {
      try {
        e._teamManager.updateInitializingLoading(true);
        if (!e._teamManager.hasTeamListLoaded) {
          let t = yield e.refreshTeamList();
          if (!t.ok && !e._teamManager.hasTeamListLoaded) {
            e._teamManager.updateInitializingError(t);
            return t;
          }
          if (!t.ok) {
            e._teamManager.updateTeamListError(undefined);
          }
        }
        let t = yield e._teamManager.initializeCurrentTeamDetail();
        if (!t.ok) {
          e._teamManager.updateInitializingError(t);
          return t;
        }
        e._teamManager.updateInitializingError(undefined);
        return TZ(undefined);
      } finally {
        e._teamManager.updateInitializingLoading(false);
      }
    })();
  }
  _runMutation(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateMutationLoading(true);
        let r = yield e();
        if (r.ok) {
          t._store.increaseRefreshVersion();
          t._store.updateMutationError(undefined);
        } else {
          t._store.updateMutationError(r);
        }
        return r;
      } finally {
        t._store.updateMutationLoading(false);
      }
    })();
  }
  _refreshAfterMemberWrite(e) {
    const t = this;
    return a._(function* () {
      let r;
      yield t.refreshMembers({
        teamId: e,
      });
      yield t.refreshTeamList();
      if (((r = t.state.currentTeam) == null ? undefined : r.teamId) === e) {
        yield t.refreshCurrentTeamDetail();
      }
    })();
  }
  _handleTeamScopeChange() {
    let e;
    let t;
    let r;
    if ((e = this._memberManager) != null) {
      e.resetTeamScope();
    }
    if ((t = this._approvalManager) != null) {
      t.resetTeamScope();
    }
    if ((r = this._inviteManager) != null) {
      r.resetTeamScope();
    }
  }
  constructor(e = {}, t) {
    this._containerService = t;
    this._teamManager = this._containerService.createInstance(k, e, () =>
      this._handleTeamScopeChange(),
    );
    let r = () => {
      var e;
      if ((e = this._teamManager.getStoreState().currentTeam) == null) {
        return undefined;
      }
      return e.teamId;
    };
    this._memberManager = this._containerService.createInstance(I, r);
    this._approvalManager = this._containerService.createInstance(f, r);
    this._inviteManager = this._containerService.createInstance(y, r);
    this._store = new s(
      this._teamManager,
      this._memberManager,
      this._approvalManager,
      this._inviteManager,
    );
  }
}
F = i.Cg(
  [
    i.Qj(1, __1),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      typeof CommercialTeamWorkspaceServiceOptions === "undefined"
        ? Object
        : CommercialTeamWorkspaceServiceOptions,
      __1 === undefined ? Object : __1,
    ]),
  ],
  F,
);
