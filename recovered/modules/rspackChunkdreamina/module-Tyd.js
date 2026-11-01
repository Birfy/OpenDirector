import { b as b_1 } from "./module-rE_3.js";
import s from "NY";
import a from "QWK";
import r from "mN";
import o from "Kt";
import l from "D5";
import c from "zOR";
import d from "P8";
import u from "dY";
import h from "DV";
import m from "KC";
import p from "dR";
import g from "fm";
import _ from "qN";
import v from "cBI";
import b from "K8";
import f from "iN";
import S from "tvS";
import x from "dw4";
import j from "bE";
import $ from "Lg";
import T from "Y6";
import W from "o7";
import R from "ON";
import C from "Ssw";
import A from "Urz";
import M from "Qey";
import F from "lj";
import Z from "Hr";
import E from "QJY";
import L from "oa";
import J from "bk";
import O from "RHU";
import D from "QJf";
import P from "Lvy";
export { H as UiStaticConfig } from "./module-rE_3.js";
class k {
  getUnreadCount(e) {
    return s
      ._(function* () {
        return yield this._request(
          this._getUrl("/mweb/v1/get_unread_count"),
          e,
        );
      })
      .call(this);
  }
  getNoticeList(e) {
    return s
      ._(function* () {
        const t = this._getUrl("/mweb/v1/get_notice_list");
        return this._request(t, e);
      })
      .call(this);
  }
  _request(e, t) {
    return s
      ._(function* () {
        try {
          const i = yield this._networkClient.post(e, t);
          return b.TZ(i);
        } catch (error) {
          const { ret, errmsg } = error || {};
          const a = ret ? Number(ret) : 1002;
          return b.xz(a, errmsg != null ? errmsg : "unknown error");
        }
      })
      .call(this);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: f.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    var i;
    var n;
    this._containerService = e;
    this._httpApiSettingService = t;
    this._networkClient =
      ((i = this._containerService),
      (n = new m.LL().build({
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })),
      v.U(i, n),
      p.vo(n),
      g.$h(n),
      _.J$(n),
      n);
  }
}
k = a.Cg(
  [
    a.Qj(0, o._),
    a.Qj(1, f.r),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      f.r === undefined ? Object : f.r,
    ]),
  ],
  k,
);
class y {
  getUnreadCount(e) {
    return this._noticeRepository.getUnreadCount(e);
  }
  getNoticeList(e) {
    return s
      ._(function* () {
        return this._noticeRepository.getNoticeList(e);
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._noticeRepository = this._containerService.createInstance(k);
  }
}
y = a.Cg(
  [
    a.Qj(0, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
  ],
  y,
);
const w = S.u1("dreamina-notice-service");
const N = S.u1("notificationService-service");
class H {
  updateMarketSkillLike(e, t) {
    const i = this.marketSkillByIdMap.get(e);
    if (i) {
      this.marketSkillByIdMap.set(
        e,
        J._(L._({}, i), {
          likeCount: t.likeCount,
          isLiked: t.isLiked,
        }),
      );
    }
  }
  updateMarketSkillAuthorFollow(e, hasFollowed) {
    const i = new Map();
    this.marketSkillByIdMap.forEach((n, s) => {
      var a;
      i.set(
        s,
        ((a = n.author) == null ? undefined : a.secUid) === e
          ? J._(L._({}, n), {
              author: J._(L._({}, n.author), {
                hasFollowed,
              }),
            })
          : n,
      );
    });
    this.marketSkillByIdMap = i;
  }
  constructor(e) {
    this.marketSkillByIdMap = new Map();
    this.marketSkillByIdMap.set(e.id, e);
    x.l_(this);
  }
}
class I extends W.jG {
  constructor(e, t, i, n) {
    super();
    this._skillDataService = t;
    this._containerService = i;
    this._followUserDataService = n;
    this._reportMarketSkillAction = (e, t, i) => {
      D.uL(this._containerService, e, t, i, {
        page: "explore",
        enterFrom: "message_center_click",
      });
    };
    this.canToggleMarketSkillLike = (e) =>
      this._skillMarketInteractionBehavior.canToggleMarketSkillLike(e);
    this.clickMarketSkill = (e, t) => {
      this._skillMarketInteractionBehavior.clickMarketSkill(e, t);
    };
    this.addMarketSkill = (e, t, i) =>
      this._skillMarketInteractionBehavior.addMarketSkill(e, t, i);
    this.useMarketSkill = (e, t, i) =>
      this._skillMarketInteractionBehavior.useMarketSkill(e, t, i);
    this.reportMarketSkill = (e, t) => {
      this._skillMarketInteractionBehavior.reportMarketSkill(e, t);
    };
    this.deleteMarketSkill = (e, t) => {
      this._skillMarketInteractionBehavior.deleteMarketSkill(e, t);
    };
    this.toggleMarketSkillLike = (e, t) =>
      this._skillMarketInteractionBehavior.toggleMarketSkillLike(e, t);
    this.toggleMarketSkillAuthorFollow = (e) =>
      this._skillMarketInteractionBehavior.toggleMarketSkillAuthorFollow(e);
    this.store = new H(e);
    this._skillMarketInteractionBehavior = new O.S({
      stateAdapter: this.store,
      skillDataService: this._skillDataService,
      containerService: this._containerService,
      followUserDataService: this._followUserDataService,
      reportAction: this._reportMarketSkillAction,
      onLikeCommitted: P.GK,
    });
    this._store.add(this._skillMarketInteractionBehavior);
  }
}
I = a.Cg(
  [
    a.Qj(1, c.M),
    a.Qj(2, o._),
    a.Qj(3, u.n),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof DreaminaMarketSkill === "undefined" ? Object : DreaminaMarketSkill,
      c.M === undefined ? Object : c.M,
      o._ === undefined ? Object : o._,
      u.n === undefined ? Object : u.n,
    ]),
  ],
  I,
);
class K extends W.jG {
  open(e) {
    return s
      ._(function* () {
        const t = ++this._openGeneration;
        const { skillId } = e;
        if (!skillId) {
          return void this._showUnavailableMessage();
        }
        const n = yield this._skillDataService.fetchMarketSkillsByIds({
          skillIds: [skillId],
        });
        if (t === this._openGeneration) {
          if (!n.ok) {
            return void this._showUnavailableMessage();
          }
          const s = n.value.skills.find((e) => e.id === skillId);
          if (!s) {
            return void Z.l.warning(
              M.Ay.t(
                "skill_publish_msg_button_view_deleted",
                {},
                "This skill is no longer available",
              ),
            );
          }
          const skillMarketManager = this._containerService.createInstance(
            I,
            s,
          );
          let r = false;
          const onAfterClose = () => {
            if (!r) {
              r = true;
              skillMarketManager.dispose();
            }
          };
          let l = false;
          try {
            const c = E.Q({
              mode: "market",
              containerService: this._containerService,
              skill: s,
              skillMarketManager,
              onAfterClose,
            });
            l = c !== null;
          } finally {
            if (!l) {
              onAfterClose();
            }
          }
        }
      })
      .call(this);
  }
  dispose() {
    this._invalidatePendingOpen();
    super.dispose();
  }
  _invalidatePendingOpen() {
    this._openGeneration += 1;
  }
  _showUnavailableMessage() {
    Z.l.warning(
      M.Ay.t(
        "skill_publish_msg_button_view_failed",
        {},
        "Couldn't view skill details. Please try again.",
      ),
    );
  }
  constructor(e, t, i) {
    super();
    this._containerService = e;
    this._skillDataService = t;
    this._dreaminaUiConfigurationService = i;
    this._openGeneration = 0;
    this._register(
      this._dreaminaUiConfigurationService.onWouldRouteChange(() => {
        this._invalidatePendingOpen();
      }),
    );
  }
}
function X(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "id";
  const n = new Map();
  const s = [];
  for (const a of [...e, ...t]) {
    if (!n.has(a[i])) {
      n.set(a[i], a);
      s.push(a);
    }
  }
  return s;
}
K = a.Cg(
  [
    a.Qj(0, o._),
    a.Qj(1, c.M),
    a.Qj(2, F.K),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      c.M === undefined ? Object : c.M,
      F.K === undefined ? Object : F.K,
    ]),
  ],
  K,
);
class B {
  get newMessageCount() {
    return this._newMessageCount;
  }
  get hasMore() {
    return this._hasMore;
  }
  get hasInitialized() {
    return this._hasInitialized;
  }
  get cursor() {
    return this._cursor;
  }
  get noticeList() {
    return this._noticeList;
  }
  get messageList() {
    return this._messageList;
  }
  get hasLogin() {
    return this._hasLogin;
  }
  setNewMessageCount(e) {
    this._newMessageCount = e;
  }
  setHasMore(e) {
    Object.assign(this._hasMore, e);
  }
  setHasInitialized(e) {
    Object.assign(this._hasInitialized, e);
  }
  setCursor(e) {
    Object.assign(this._cursor, e);
  }
  setNoticeList(e) {
    this._noticeList = [...e];
  }
  setMessageList(e) {
    this._messageList = [...e];
  }
  setHasLogin(e) {
    this._hasLogin = e;
  }
  updateMessageFollowState(e, t) {
    this._messageList.forEach((i) => {
      if (i.messageFrom.secUid === e) {
        i.hasFollowed = t;
      }
    });
  }
  constructor() {
    this._newMessageCount = {
      2: 0,
      1: 0,
    };
    this._hasMore = {
      2: false,
      1: false,
    };
    this._hasInitialized = {
      2: false,
      1: false,
    };
    this._cursor = {
      2: 0,
      1: 0,
    };
    this._noticeList = [];
    this._messageList = [];
    this._hasLogin = false;
    x.l_(this);
  }
}
const count = Math.max(16, Math.ceil(window.innerHeight / 62));
class z extends W.jG {
  get totalNewMessageCount() {
    const { newMessageCount } = this.notificationStore;
    return newMessageCount[2] + newMessageCount[1];
  }
  changeFollowState(followingUserId, t) {
    return s
      ._(function* () {
        let i;
        const n = {
          followingUserId,
          enterScenario: $.ZU.CommunityMessage,
          secondPage: "message",
        };
        if (t) {
          i = yield this._followDataService.followUser(followingUserId);
          A.Oj(this._containerService, n);
        } else {
          i = yield this._followDataService.unfollowUser(followingUserId);
          A.TD(this._containerService, n);
        }
        if (!C.v(i)) {
          if (i.ok) {
            this.notificationStore.updateMessageFollowState(followingUserId, t);
          }
        }
      })
      .call(this);
  }
  getUnreadCount() {
    return s
      ._(function* () {
        const e = yield this._noticeService.getUnreadCount({
          noticeTypeList: [2, 1],
        });
        if (e.ok) {
          this.notificationStore.setNewMessageCount(e.value);
        }
        return e;
      })
      .call(this);
  }
  requestNoticeList(noticeType, cursor) {
    return s
      ._(function* () {
        return yield this._noticeService.getNoticeList({
          count,
          noticeType,
          cursor,
        });
      })
      .call(this);
  }
  fetchToUpdateNoticeList(e) {
    return s
      ._(function* () {
        const t = yield this.requestNoticeList(
          e,
          this.notificationStore.cursor[e],
        );
        if (t.ok) {
          const { hasMore, nextCursor, noticeList, messageList } = t.value;
          if (e === 2) {
            this.notificationStore.setMessageList(
              X(
                this.notificationStore.messageList,
                messageList != null ? messageList : [],
              ),
            );
          } else {
            this.notificationStore.setNoticeList(
              X(
                this.notificationStore.noticeList,
                noticeList != null ? noticeList : [],
              ),
            );
          }
          this.notificationStore.setHasMore({
            [e]: hasMore,
          });
          this.notificationStore.setCursor({
            [e]: nextCursor,
          });
        }
      })
      .call(this);
  }
  fetchToUpdateFirstPageNotice(e) {
    return s
      ._(function* () {
        if (
          !this.notificationStore.hasInitialized[e] ||
          !(this.notificationStore.newMessageCount[e] <= 0)
        ) {
          const t = yield this.requestNoticeList(e, 0);
          if (t.ok) {
            const { hasMore, nextCursor, noticeList, messageList } = t.value;
            if (e === 1) {
              this.notificationStore.setNoticeList(
                noticeList != null ? noticeList : [],
              );
            } else {
              this.notificationStore.setMessageList(
                messageList != null ? messageList : [],
              );
            }
            this.notificationStore.setHasMore({
              [e]: hasMore,
            });
            this.notificationStore.setHasInitialized({
              [e]: true,
            });
            this.notificationStore.setCursor({
              [e]: nextCursor,
            });
          }
          return t;
        }
      })
      .call(this);
  }
  fetchToUpdateAllTypeFirstPageNotice() {
    return s
      ._(function* () {
        yield Promise.all([
          this.fetchToUpdateFirstPageNotice(2),
          this.fetchToUpdateFirstPageNotice(1),
        ]);
      })
      .call(this);
  }
  openMarketSkillDetail(e) {
    return this._skillDetailCoordinator.open(e);
  }
  setNewMessageCount(e) {
    this.notificationStore.setNewMessageCount({
      2: e,
      1: e,
    });
  }
  _setHasLogin(e) {
    this.notificationStore.setHasLogin(e);
  }
  _bindEvents() {
    if (this._accountService.hasLogin) {
      this._setHasLogin(true);
    } else {
      this._store.add(
        this._accountService.onDidLogin(() => {
          this._setHasLogin(true);
        }),
      );
    }
    this._store.add(
      this._accountService.onDidLogout(() => {
        this._setHasLogin(false);
      }),
    );
    const e = this._containerService.createInstance(R.Q, {
      type: T.$.WorkDetailData,
      onDelete: (e) => {
        var t = this.notificationStore.messageList.find(
          (t) => t.noticeItem.itemId === e,
        );
        if (t) {
          t.noticeItem.status = 2;
          this.notificationStore.setMessageList([
            ...this.notificationStore.messageList,
          ]);
        }
      },
    });
    this._store.add(e);
  }
  constructor(e, t, i, n) {
    super();
    this._containerService = e;
    this._noticeService = t;
    this._accountService = i;
    this._followDataService = n;
    this.notificationStore = new B();
    this._skillDetailCoordinator = this._register(
      this._containerService.createInstance(K),
    );
    this._bindEvents();
  }
}
a.Cg(
  [x.EW, a.Sn("design:type", Number), a.Sn("design:paramtypes", [])],
  z.prototype,
  "totalNewMessageCount",
  null,
);
z = a.Cg(
  [
    a.Qj(0, o._),
    a.Qj(1, w),
    a.Qj(2, j.c),
    a.Qj(3, u.n),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      w === undefined ? Object : w,
      j.c === undefined ? Object : j.c,
      u.n === undefined ? Object : u.n,
    ]),
  ],
  z,
);
class U extends l.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    const { registry } = e;
    registry.register(w, y);
    registry.register(N, z);
    registry.register(u.n, h.C);
    registry.register(c.M, d.r);
    return Promise.resolve();
  }
}
const V = require("z8");
const q = require("Kpt");
require("Vx");
require("BZ4");
require("ho");
const Y = require("Ix");
const G = require("XY2");
const ee = require("tpI");
const et = require("bT");
const ei = require("ED");
const en = require("yw");
const es = require("wF");
const ea = require("M8X");
const er = require("gC");
const eo = require("vy");
const el = require("F5u");
const ec = require("P0S");
const ed = require("n3");
const eu = require("zS");
const eh = require("pr");
const em = require("xb");
const eg = require("BDO");
const e_ = require("lq");
const ev = require("RMk");
const eb = require("HX");
const ef = require("r9f");
const ek = require("NS");
const ey = require("uMU");
const eS = require("gZ");
const ew = require("c5");
const eN = require("eB");
const ex = require("qDt");
const ej = require("d6P");
const e$ = require("EB4");
const textParam = "web_notifications_bottom_text";
function eW(e) {
  return e.map((e) => {
    if (e.subType === 38) {
      return {
        type: "skillAudit",
        skillAuditParam: e,
      };
    }
    if (e.subType === 42) {
      return {
        type: "itemReview",
        itemReviewParam: e,
      };
    }
    if (e.subType === 1) {
      return {
        type: "favorite",
        favoriteParam: e,
      };
    }
    if (e.subType === 8) {
      return {
        type: "modelInvite",
        modelInvite: e,
      };
    }
    return {
      type: "follow",
      followParam: e,
    };
  });
}
const eR = require("SHg");
function eC(e) {
  switch (e.itemReviewNoticeType) {
    case 1:
      return "publishPassed";
    case 3:
      return "editPassed";
    case 2:
    case 4:
      return "rejected";
    default:
      let t;
      let i;
      if (
        eR._(
          (i = e.noticeItem) == null || (t = i.item) == null
            ? undefined
            : t.commonAttr,
        )
      ) {
        return "rejected";
      }
      return "publishPassed";
  }
}
function eA(e) {
  let t;
  let i;
  let n;
  return (
    e.itemReviewNoticeTitle ||
    ((n = e.noticeItem) == null ||
    (i = n.item) == null ||
    (t = i.commonAttr) == null
      ? undefined
      : t.title) ||
    ""
  );
}
require("yS");
require("xj");
const eM = require("gL");
const eF = require("R8");
const wrapClassName = "skill-audit-result-modal-wrapper-_tFV_m";
const eE = "skill-audit-result-modal-vRcRe2";
const eL = "content-CxR6Mg";
const eJ = "header-odoWyX";
const eO = "title-group-qkLlCW";
const eD = "warning-icon-NaSpFx";
const eP = "title-nLKvwY";
const eH = "close-button-W1RtBY";
const eI = "description-rB_IpI";
const eK = "footer-XCgFSY";
const eX = "secondary-button-mQqe0f";
const eB = "primary-button-x8LlNm";
const eQ = require("qbo");
const ez = {
  "notice-list": "notice-list-OrLR8n",
  noticeList: "notice-list-OrLR8n",
  list: "list-NdBeMk",
};
const eU = require("QrD");
const eV = require("cO");
const eq = require("hQb");
const eY = require("cn");
const eG = require("glR");
const e0 = new (class {
  observe(e, callback) {
    const isCallbackOnce =
      arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    this._observedElementList.push(e);
    this._callbackMap.set(e, {
      callback,
      isCallbackOnce,
    });
    this._observer.observe(e);
  }
  unobserve(e) {
    let t;
    const i = this._observedElementList.indexOf(e);
    if (i >= 0) {
      this._observedElementList.splice(i, 1);
      this._callbackMap.delete(e);
      if ((t = this._observer) != null) {
        t.unobserve(e);
      }
    }
  }
  disconnect() {
    let e;
    this._observedElementList = [];
    this._callbackMap.clear();
    if ((e = this._observer) != null) {
      e.disconnect();
    }
  }
  constructor(e) {
    this._callbackMap = new Map();
    this._observedElementList = [];
    this._handleIntersection = (e) => {
      e.forEach((e) => {
        var { target, isIntersecting, intersectionRatio } = e;
        var s = isIntersecting && intersectionRatio >= this._threshold;
        var a = this._callbackMap.get(target);
        if (a) {
          var { callback, isCallbackOnce } = a;
          if (isCallbackOnce && s) {
            this.unobserve(target);
          }
          callback(s);
        }
      });
    };
    var t;
    var { threshold } = e != null ? e : {};
    this._observer = new IntersectionObserver(this._handleIntersection, e);
    this._threshold =
      (t = Array.isArray(threshold) ? threshold[0] : threshold) != null ? t : 1;
  }
})({
  threshold: 0.2,
});
function useE1(e, t) {
  const iRef = et.useRef(null);
  const nRef = et.useRef(e0);
  const [s, setS] = et.useState(false);
  et.useEffect(() => {
    var iRef_current = iRef.current;
    if (iRef_current) {
      nRef.current.observe(
        iRef_current,
        (e) => {
          setS(e);
          if (t != null) {
            t(e);
          }
        },
        e,
      );
    }
    return () => {
      if (iRef_current) {
        nRef.current.unobserve(iRef_current);
      }
    };
  }, [iRef, e, t]);
  return [iRef, s];
}
const e2 = (createdTime) => {
  var t = Date.now() / 1000 - createdTime;
  if (t < 3600) {
    var minutes = Math.floor(t / 60);
    return M.Ay.t(
      "web_new_message_time_min",
      {
        minutes,
      },
      "{minutes}分钟前",
    );
  }
  if (t < 86400) {
    var n = Math.floor(t / 3600);
    return M.Ay.t(
      "web_notifications_time_hours_ago",
      {
        num: n,
        hoursDiff: n,
      },
      "{hoursDiff}小时前",
    );
  }
  var s = Math.floor(t / 86400);
  return M.Ay.t(
    "web_notifications_time_days_ago",
    {
      num: s,
      daysDiff: s,
    },
    "{daysDiff}天前",
  );
};
const e3 = ei.PA(function (e) {
  const {
    data,
    rowStyle,
    onReportShowDetail,
    onFollowStateChange,
    onUserInfoClick,
    onClickNoticeItem,
  } = e;
  const { createdTime, messageFrom, hasFollowed } = data;
  const { name, avatarUrl, secUid } = messageFrom;
  const [m, p] = useE1(true);
  const [g, setG] = et.useState(213);
  const vRef = et.useRef(null);
  const b = eu.A(() => {
    onUserInfoClick(data);
  });
  et.useEffect(() => {
    if (p) {
      onReportShowDetail(data);
    }
  }, [data, p, onReportShowDetail]);
  et.useEffect(() => {
    var e;
    var t = (e = vRef.current) == null ? undefined : e.clientWidth;
    if (t) {
      setG(289 - t);
    }
  }, [hasFollowed]);
  const f = eu.A((e) => {
    e.stopPropagation();
    e.preventDefault();
    onClickNoticeItem(data);
    if (
      !eG.e({
        hasFollowed,
        status: messageFrom.status,
      })
    ) {
      if (hasFollowed) {
        if (onFollowStateChange != null) {
          onFollowStateChange(secUid, false);
        }
      } else if (onFollowStateChange != null) {
        onFollowStateChange(secUid, true);
      }
    }
  });
  return V.jsxs("div", {
    className: "notice-item-c4lxcU",
    style: rowStyle,
    ref: m,
    children: [
      V.jsx("div", {
        role: "button",
        "aria-label": M.Ay.t("homepage_top_myspace_button", {}, "个人主页"),
        tabIndex: 0,
        onKeyDown: eh.q,
        className: "avatar-mFLPfP",
        onClick: b,
        children: V.jsx(eY.e, {
          src: eV.m(avatarUrl || eq, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fha-WJ%bHpZa2M1TTB4WE1Xe*pNMD$v$2pK$mRHRll$bXhp$XpsdFlqSjRjMkl6WTNSa$-xWjZZekpH-mxw$E1-QmtSM$ow$Ec1%2$t$khSbmxhTTFaNg",
          }),
        }),
      }),
      V.jsxs("div", {
        className: "notice-info-VmrfI_",
        children: [
          V.jsxs("div", {
            className: "notice-content-OKa7CC",
            style: {
              maxWidth: "".concat(g, "px"),
            },
            children: [
              V.jsx("span", {
                role: "button",
                tabIndex: 0,
                onKeyDown: eh.q,
                className: "name-YZRBDD",
                onClick: b,
                children: name,
              }),
              V.jsxs("span", {
                className: "content-A13AXP",
                children: [
                  "\xa0",
                  M.Ay.t("web_new_notice_commfollow", {}, "关注了你"),
                ],
              }),
            ],
          }),
          V.jsx("div", {
            className: "create-time-vNAFGN",
            children: e2(createdTime),
          }),
        ],
      }),
      V.jsx(eF.A, {
        type: "default",
        className: em("follow-NSA0GG", {
          "followed-ouYg27": hasFollowed,
        }),
        onClick: f,
        ref: vRef,
        children: hasFollowed
          ? M.Ay.t("web_new_profile_followed", {}, "已关注")
          : M.Ay.t("web_profile_btn_follow", {}, "关注"),
      }),
    ],
  });
});
function checkOverflow(e) {
  const { scrollHeight, clientHeight } = e || {};
  return scrollHeight > clientHeight;
}
const e6 = "name-pRAp__";
const e9 = et.memo(function (e) {
  let t;
  const {
    data,
    rowStyle,
    onClosePopUp,
    onReportShowDetail,
    onUserInfoClick,
    onClickNoticeItem,
  } = e;
  const { createdTime, messageFrom } = data;
  const { name, avatarUrl } = messageFrom;
  const h = es.h(F.K);
  const [m, p] = useE1(true);
  const g = eu.A(() => {
    onUserInfoClick(data);
  });
  et.useEffect(() => {
    if (p) {
      onReportShowDetail(data);
    }
  }, [data, p, onReportShowDetail]);
  const _ = eu.A(() => {
    var e = {};
    if (e == null ? undefined : e.canShow) {
      h.navigate(eb.Du.InviteFission, {
        state: {},
      });
      onClosePopUp();
      onClickNoticeItem(data);
    } else {
      Z.l.normal(
        M.Ay.t(
          "web_new_dre_beta_activity_expired_toast",
          {},
          "活动已过期，请关注未来更多活动",
        ),
      );
    }
  });
  const v = {};
  const content = et.useMemo(() => {
    var e;
    var t;
    var n;
    var s = {
      1: M.Ay.t(
        "web_new_dre_notification_invite_accepted",
        {
          href0: (e) =>
            V.jsx("span", {
              role: "button",
              tabIndex: 0,
              onKeyDown: eh.q,
              className: e6,
              onClick: g,
              children: e,
            }),
          name,
        },
        "<href0>{name}</href0> 接受了你的邀请，获得了模型抢先体验资格",
      ),
      2: M.Ay.t(
        "web_new_dre_notification_reward_unlocked",
        {
          href0: (e) =>
            V.jsx("span", {
              role: "button",
              tabIndex: 0,
              onKeyDown: eh.q,
              className: e6,
              onClick: g,
              children: e,
            }),
          name,
          number2:
            (e = v == null ? undefined : v.inviteRewardLimit) != null ? e : 6,
        },
        "你可解锁30天基础会员权，{name} 接受你的邀请，已邀请达 {number2} 人，快去看看吧",
      ),
      3: M.Ay.t(
        "web_new_dre_notification_invites_full",
        {
          href0: (e) =>
            V.jsx("span", {
              role: "button",
              tabIndex: 0,
              onKeyDown: eh.q,
              className: e6,
              onClick: g,
              children: e,
            }),
          name,
          number1:
            (t = v == null ? undefined : v.inviteTotalLimit) != null ? t : 10,
        },
        "你的邀请名额已用完。<href0>{name}</href0>  接受你的邀请，已经邀请 {number1} 名好友",
      ),
    };
    var a = (n = data.inviteContent) == null ? undefined : n.inviteScene;
    if (a) {
      return s[a];
    }
    return "";
  }, [
    (t = data.inviteContent) == null ? undefined : t.inviteScene,
    name,
    g,
    v == null ? undefined : v.inviteRewardLimit,
    v == null ? undefined : v.inviteTotalLimit,
  ]);
  return V.jsxs("div", {
    className: "notice-item-dIIW50",
    style: rowStyle,
    ref: m,
    children: [
      V.jsx("div", {
        role: "button",
        "aria-label": M.Ay.t("homepage_top_myspace_button", {}, "个人主页"),
        tabIndex: 0,
        onKeyDown: eh.q,
        className: "avatar-jEoRKU",
        onClick: g,
        children: V.jsx(eY.e, {
          src: eV.m(avatarUrl || eq, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$FhaaFZ6$XlZ$mhT-k$4WE1Xe*pNMD$v$2pK$mRHRll$bXhp$Xpsd1ltNWFjR1JI$lhSa$-xWjZZekpH-mxw$E1-QmtSM$ow$Ec1%2$t$khSbmxhTTFaNg",
          }),
        }),
      }),
      V.jsxs("div", {
        className: "notice-info-TzUDvI",
        children: [
          V.jsx(Y.A, {
            className: "tool-tip-f9nkxE",
            checkOverflow,
            content,
            triggerProps: {
              trigger: "hover",
              containerScrollToClose: true,
            },
            children: V.jsx("div", {
              className: "notice-content-ydXSU2",
              children: V.jsxs("span", {
                className: "content-HVHoAO",
                children: [content, " "],
              }),
            }),
          }),
          V.jsx("div", {
            className: "create-time-dGJvRC",
            children: e2(createdTime),
          }),
        ],
      }),
      V.jsx(eF.A, {
        type: "default",
        disabled: !(v == null ? undefined : v.canShow),
        className: em("action-btn-jDOYuB"),
        onClick: _,
        children: M.Ay.t(
          "web_new_dre_notification_join_beta_and_invite_btn_see",
          {},
          "查看",
        ),
      }),
    ],
  });
});
const e4 = require("OQ");
const e8 = ei.PA(function (e) {
  const {
    data,
    rowStyle,
    onReportShowDetail,
    onOpenDetailModal,
    onUserInfoClick,
    onClickNoticeItem,
  } = e;
  const { createdTime, messageFrom, noticeItem } = data;
  const { coverUrl, coverUrlMap, status } = noticeItem;
  const { name, avatarUrl } = messageFrom;
  const g = eu.A((e) => {
    e.stopPropagation();
    onOpenDetailModal(data.id);
    onClickNoticeItem(data);
  });
  const _ = eu.A(() => {
    onUserInfoClick(data);
    onClickNoticeItem(data);
  });
  const [v, b] = useE1(true);
  et.useEffect(() => {
    if (b) {
      onReportShowDetail(data);
    }
  }, [data, b, onReportShowDetail]);
  return V.jsxs("div", {
    className: "notice-item-NnODvq",
    style: rowStyle,
    ref: v,
    children: [
      V.jsx("div", {
        role: "button",
        "aria-label": M.Ay.t("homepage_top_myspace_button", {}, "个人主页"),
        tabIndex: 0,
        onKeyDown: eh.q,
        className: "avatar-deLTzU",
        onClick: _,
        children: V.jsx(eY.e, {
          src: eV.m(avatarUrl || eq, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaa$IyeHlXbE14ZEZwW$RucFpWMlJz$EZkc01*cFhNSFpp%jJ4e$dsTXhkRnBZ$*5wWl-y%nN%RmRzT%ZwWE1I$mtTRTQw$1ZoS2Jt%ll%$DA9",
          }),
        }),
      }),
      V.jsxs("div", {
        className: "notice-info-Qkh52d",
        children: [
          V.jsxs("div", {
            className: "notice-content-d24Nmh",
            children: [
              V.jsx("span", {
                role: "button",
                tabIndex: 0,
                onKeyDown: eh.q,
                className: "name-iRAvsr",
                onClick: _,
                children: name,
              }),
              V.jsxs("span", {
                className: "content-b8jNOc",
                children: [
                  "\xa0",
                  M.Ay.t("web_new_notice_commlike", {}, "赞了你的作品"),
                ],
              }),
            ],
          }),
          V.jsx("div", {
            className: "create-time-KiW_KO",
            children: e2(createdTime),
          }),
        ],
      }),
      status === 1
        ? V.jsx("div", {
            role: "button",
            tabIndex: 0,
            onKeyDown: eh.q,
            "aria-label": M.Ay.t("web_new_publish_preview", {}, "预览"),
            onClick: g,
            children: V.jsx(e4.sg, {
              src: eV.m(coverUrl, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: true,
                bid: "cc_dreamina",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: false,
                escapeRule: "escape-report",
                reportUrl:
                  "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                htmlparserOptions: "{}",
                scmBranch: "-",
                scmName: "-",
                scmVersion: "-",
                webpackPluginVersion: "3.6.0",
                filename:
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaa$IyeHlXbE14ZEZwW$RucFpWMlJz$EZkc01*cFhNSFpp%jJ4e$dsTXhkRnBZ$*5wWl-y%nN%RmRzT%ZwWE1I$mtTRTQw$1ZoS2Jt%ll%$DA9",
              }),
              resolutionUrlMap: coverUrlMap,
              className: "work-qgnTk7",
              "data-apm-action": "like-message-item",
              crossOrigin: "anonymous",
              width: Number.parseFloat("40px"),
              height: Number.parseFloat("40px"),
            }),
          })
        : V.jsx(Y.A, {
            content: M.Ay.t("web_new_work_deleted", {}, "作品已删除"),
            children: V.jsx("div", {
              className: "invalid-work-thWM8B",
              children: V.jsx(en.en5, {
                className: "icon-MgBGfZ",
              }),
            }),
          }),
    ],
  });
});
const e7 = require("Q8l");
const te = require("HVP");
const tt = "action-button-S2eJxI";
const ti = et.memo(function (e) {
  const { data, rowStyle, itemRef, onOpenDetail } = e;
  const { noticeItem, createdTime } = data;
  const o = eA(data);
  const l = (noticeItem == null ? undefined : noticeItem.status) === 1;
  const c = {
    title: M.Ay.t("web_new_publish_notice_title", {}, "发布通知"),
    reviewFailed: M.Ay.t(
      "web_new_publish_notice_review_failed",
      {},
      "审核未通过",
    ),
    editPassed: te.Mq(),
    publishPassed: M.Ay.t("web_new_publish_success", {}, "发布成功"),
    view: M.Ay.t("web_notifications_view_btn", {}, "查看"),
  };
  const d = eu.A((e) => {
    e.stopPropagation();
    onOpenDetail(data.id);
  });
  return V.jsxs("div", {
    className: "notice-item-XXkRg4",
    style: rowStyle,
    ref: itemRef,
    children: [
      V.jsx("div", {
        className: "notice-icon-LgOlA6",
        children: V.jsx(eY.e, {
          src: eV.m(e7, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$FhaaFd*SnNZbE14Z$ZwW$duQmFXR04wWWxk$2$tTXlSbT$h$Xp*d1pFZFdkRXd5-kRC-$Z6QjBZMjFXTW1*WFZqTk1WekZzWXpOT2F*b3lWWFJo$0ZKc1lsTTFNR016-%doamJX%XhZM2M5%FE9PQ",
          }),
        }),
      }),
      V.jsxs("div", {
        className: "notice-info-sUTghj",
        children: [
          V.jsxs("div", {
            className: "notice-content-d3KeOL",
            children: [
              V.jsx("span", {
                className: "notice-title-EVXRP3",
                children: c.title,
              }),
              o
                ? V.jsx(Y.A, {
                    content: o,
                    checkOverflow: true,
                    triggerProps: {
                      trigger: "hover",
                      containerScrollToClose: true,
                    },
                    children: V.jsx("span", {
                      className: "work-title-T7OG49",
                      children: o,
                    }),
                  })
                : null,
            ],
          }),
          V.jsx("div", {
            className: "notice-desc-a8J7Yd",
            children: ((e, t) => {
              switch (eC(e)) {
                case "rejected":
                  return t.reviewFailed;
                case "editPassed":
                  return t.editPassed;
                default:
                  return t.publishPassed;
              }
            })(data, c),
          }),
          V.jsx("div", {
            className: "create-time-CKImoj",
            children: e2(createdTime),
          }),
        ],
      }),
      l
        ? V.jsx(eF.A, {
            type: "default",
            className: tt,
            onClick: d,
            children: c.view,
          })
        : V.jsx(Y.A, {
            content: M.Ay.t("web_new_work_deleted", {}, "作品已删除"),
            children: V.jsx("span", {
              children: V.jsx(eF.A, {
                type: "default",
                className: tt,
                disabled: true,
                children: c.view,
              }),
            }),
          }),
    ],
  });
});
const tn = et.memo(function (e) {
  let t;
  let i;
  const { data, rowStyle, itemRef, onOpenSkillAuditMessage } = e;
  const o =
    (t = (i = data.skillAuditInfo) == null ? undefined : i.skillName) != null
      ? t
      : M.Ay.t("skill_publish_dialog_skillname", {}, "skill");
  const l = et.useMemo(
    () =>
      ((e, skill) => {
        let i;
        const n = {
          skill,
        };
        switch ((i = e.skillAuditInfo) == null ? undefined : i.resultCode) {
          case 1:
            return M.Ay.t(
              "skill_publish_msg_title_published",
              n,
              "Your skill {skill} is live now",
            );
          case 2:
          case 3:
          case 4:
          case 5:
            return M.Ay.t(
              "skill_publish_msg_title_failed",
              n,
              "Your skill {skill} wasn't posted",
            );
          case 6:
            return M.Ay.t(
              "skill_publish_msg_title_removed",
              n,
              "Your skill {skill} is no longer available",
            );
          default:
            return M.Ay.t(
              "skill_publish_msg_title_updated",
              n,
              "Your skill {skill} has been updated",
            );
        }
      })(data, o),
    [data, o],
  );
  const c = eu.A((e) => {
    e.stopPropagation();
    onOpenSkillAuditMessage(data.id);
  });
  return V.jsxs("div", {
    className: "notice-item-hZ29Yx",
    style: rowStyle,
    ref: itemRef,
    children: [
      V.jsx("div", {
        className: "notice-icon-nyEhJ0",
        children: V.jsx(eY.e, {
          src: eV.m(e7, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak1u%ndZa2QzZEZsW$Ztd*hXRk-wWWxk$2$tTXlSbT$h$Xp*d1pFZFdkRXd6$*5KaF-zaHp%RmRHT$ZwS*JEQk1WekZzWXpOT2F*b3lWWFJo$0ZKc1lsTTFNR016-%doamJX%XhZM2M5%FE9PQ",
          }),
        }),
      }),
      V.jsxs("div", {
        className: "notice-info-csisMX",
        children: [
          V.jsxs("div", {
            className: "notice-content-wnGBNq",
            children: [
              V.jsx("span", {
                className: "notice-title-YvnLzg",
                children: M.Ay.t(
                  "skill_publish_msg_publish_notice",
                  {},
                  "Skill status update:",
                ),
              }),
              V.jsx(Y.A, {
                content: l,
                checkOverflow: true,
                triggerProps: {
                  trigger: "hover",
                  containerScrollToClose: true,
                },
                children: V.jsx("span", {
                  className: "title-text-kJ6f7y",
                  children: l,
                }),
              }),
            ],
          }),
          V.jsx("div", {
            className: "create-time-BxUUS5",
            children: e2(data.createdTime),
          }),
        ],
      }),
      V.jsx(eF.A, {
        type: "default",
        className: "action-button-ZdsuP9",
        onClick: c,
        children: M.Ay.t("skill_publish_msg_button_view", {}, "View more"),
      }),
    ],
  });
});
const ts = require("GT");
const tr = require("Kd");
function to(e, t, DOMAIN_WHITELIST) {
  let n;
  const { uid, webId } = (n = t.userProfile) != null ? n : {};
  if (!t.hasLogin || !uid || !webId || DOMAIN_WHITELIST.length === 0) {
    return e;
  }
  try {
    let r;
    let o;
    const l = new URL(e);
    r = l.hostname;
    o = r.toLowerCase();
    if (
      !DOMAIN_WHITELIST.some((e) => {
        var t = e.trim().toLowerCase().replace(/^\.+/, "");
        return t.length > 0 && (o === t || o.endsWith(".".concat(t)));
      })
    ) {
      return e;
    }
    l.searchParams.set("_u", btoa(uid));
    l.searchParams.set("_w", btoa(webId));
    return l.href;
  } catch (t) {
    return e;
  }
}
const tl = {
  "system-notice-detail": "system-notice-detail-aQwHlm",
  systemNoticeDetail: "system-notice-detail-aQwHlm",
  type: "type-QxI02L",
  title: "title-INjZ1Q",
  "content-wrapper": "content-wrapper-WESA_f",
  contentWrapper: "content-wrapper-WESA_f",
  content: "content-VcwEcF",
  image: "image-fa7om4",
  "created-time": "created-time-_Kx69c",
  createdTime: "created-time-_Kx69c",
  "confirm-btn-wrapper": "confirm-btn-wrapper-Q9JmjB",
  confirmBtnWrapper: "confirm-btn-wrapper-Q9JmjB",
  "confirm-btn": "confirm-btn-QOvufD",
  confirmBtn: "confirm-btn-QOvufD",
};
const tc = require("kF");
const td = require("Dm");
const tu = require("xL");
class th extends tc.v {
  constructor(...e) {
    super(...e);
    this.eventName = "message_action";
  }
}
class tm extends tu.N {
  setMessageEventDetails(e) {
    this._params.messageId = e.messageId;
    this._params.messageType = e.messageType;
    if (e.messageTitle) {
      this._params.messageTitle = e.messageTitle;
    }
  }
  _validateParams(e) {
    ["message_id", "message_type", "action"].forEach((t) => {
      td.F4(e[t], "[MessageActionReporter] ".concat(t, " is required"));
    });
  }
  _getCollectorClass() {
    return th;
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tm = a.Cg(
  [
    a.Qj(1, o._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      o._ === undefined ? Object : o._,
    ]),
  ],
  tm,
);
const tp = et.memo(function (e) {
  const { detail, containerService, onClose } = e;
  const { id, title, content, imageList = [], createdTime } = detail;
  const cRef = et.useRef([]);
  const [d, setD] = et.useState([]);
  const h = es.h(j.c);
  const m = eu.A((e) => {
    e.stopPropagation();
  });
  et.useEffect(() => {
    document.body.addEventListener("click", m);
    return () => {
      document.body.removeEventListener("click", m);
    };
  }, [containerService, detail, m]);
  et.useEffect(() => {
    setD(
      (e = imageList == null ? undefined : imageList.map(() => false)) != null
        ? e
        : [],
    );
    var e;
    var t = (e) => {
      setD((t) => {
        var i = [...t];
        i[e] = true;
        return i;
      });
    };
    cRef.current.forEach((e, i) => {
      e.addEventListener("load", () => t(i));
      return () => {
        e.removeEventListener("load", () => t(i));
      };
    });
  }, [imageList]);
  const p = eu.A((e) => {
    if (e) {
      return {
        width: e.naturalWidth / e.naturalHeight > 1 ? "100%" : "50%",
        height: "auto",
        display: d[cRef.current.indexOf(e)] ? "block" : "none",
      };
    }
    return {};
  });
  const g = eu.A((e, messageTitle, messageId) => (n) => {
    if (n.target.closest("a") && e) {
      var s = e.createInstance(tm, {
        action: "click_url",
      });
      s.setParams({
        messageType: "system_message",
        messageTitle,
        messageId,
      });
      s.report();
    }
  });
  const _ = eu.A((e) => {
    var t;
    for (
      var i = /https?:\/\/[-\w.\/]+#?[\w=&%{}\/]*\??[\w=&%{}]*/g, n = [], s = 0;
      (t = i.exec(e)) !== null;
    ) {
      if (t.index > s) {
        n.push({
          type: "text",
          value: e.slice(s, t.index).trim(),
        });
      }
      n.push({
        type: "link",
        value: t[0],
      });
      s = i.lastIndex;
    }
    if (s < e.length) {
      n.push({
        type: "text",
        value: e.slice(s).trim(),
      });
    }
    return n.filter((e) => e.value !== "");
  });
  const v = /<a\b[^>]*>(.*?)<\/a>/i.test(content);
  const b = _(content);
  return V.jsxs("div", {
    className: tl.systemNoticeDetail,
    children: [
      V.jsx("div", {
        className: tl.type,
        children: M.Ay.t("web_new_message_from_system", {}, "系统消息"),
      }),
      V.jsxs("div", {
        className: tl.infoWrap,
        onClick: g(containerService, title, id),
        children: [
          V.jsx("div", {
            className: tl.title,
            children: title,
          }),
          V.jsx("div", {
            className: tl.createdTime,
            children: e2(createdTime),
          }),
          V.jsxs("div", {
            className: tl.contentWrapper,
            children: [
              v
                ? V.jsx("div", {
                    className: tl.content,
                    dangerouslySetInnerHTML: {
                      __html: eV.t(ts(content), null, {
                        logType: "react.dangerouslySetInnerHTML",
                        reportOnly: "false",
                        blackConfig: "{}",
                        configMode: "merge",
                        isCloseSSRReport: true,
                        bid: "cc_dreamina",
                        region: "cn",
                        urlLimit: "-1",
                        htmlLimit: "-1",
                        isSaveValidUrl: false,
                        isRuntimeLog: false,
                        isDOMParser: false,
                        escapeRule: "escape-report",
                        reportUrl:
                          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                        htmlparserOptions: "{}",
                        scmBranch: "-",
                        scmName: "-",
                        scmVersion: "-",
                        webpackPluginVersion: "3.6.0",
                        filename:
                          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*ExcFl$bWho$jNkMll6TnNlb$JI$m5ST$Z6$jJaRWRz-Wxw$E1Xd*FXRkpvW$ZkM2RX%kl%alJa$0$wd$p*aE5Q%T09",
                      }),
                    },
                  })
                : V.jsx("div", {
                    className: tl.content,
                    children: b.map((e) => {
                      if (e.type === "link") {
                        return V.jsx(
                          "a",
                          {
                            href: eV.m(
                              to(e.value, h, tr.a.DOMAIN_WHITELIST),
                              null,
                              {
                                logType: "js.href/src",
                                reportOnly: "false",
                                blackConfig: "{}",
                                configMode: "merge",
                                isCloseSSRReport: true,
                                bid: "cc_dreamina",
                                region: "cn",
                                urlLimit: "-1",
                                htmlLimit: "-1",
                                isSaveValidUrl: false,
                                isRuntimeLog: false,
                                isDOMParser: false,
                                escapeRule: "escape-report",
                                reportUrl:
                                  "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                                htmlparserOptions: "{}",
                                scmBranch: "-",
                                scmName: "-",
                                scmVersion: "-",
                                webpackPluginVersion: "3.6.0",
                                filename:
                                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*ExcFl$bWho$jNkMll6TnNlb$JI$m5ST$Z6$jJaRWRz-Wxw$E1Xd*FXRkpvW$ZkM2RX%kl%alJa$0$wd$p*aE5Q%T09",
                              },
                            ),
                            target: "_blank",
                            rel: "noreferrer",
                            children: e.value,
                          },
                          e.value,
                        );
                      }
                      return V.jsx(
                        "span",
                        {
                          children: e.value,
                        },
                        e.value,
                      );
                    }),
                  }),
              imageList == null
                ? undefined
                : imageList.map((e, t) =>
                    V.jsx(
                      "img",
                      {
                        alt: [title, t + 1].join(" · "),
                        ref: (e) => (cRef.current[t] = e),
                        style: p(cRef.current[t]),
                        src: eV.m(e.url, null, {
                          logType: "js.href/src",
                          reportOnly: "false",
                          blackConfig: "{}",
                          configMode: "merge",
                          isCloseSSRReport: true,
                          bid: "cc_dreamina",
                          region: "cn",
                          urlLimit: "-1",
                          htmlLimit: "-1",
                          isSaveValidUrl: false,
                          isRuntimeLog: false,
                          isDOMParser: false,
                          escapeRule: "escape-report",
                          reportUrl:
                            "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                          htmlparserOptions: "{}",
                          scmBranch: "-",
                          scmName: "-",
                          scmVersion: "-",
                          webpackPluginVersion: "3.6.0",
                          filename:
                            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*ExcFl$bWho$jNkMll6TnNlb$JI$m5ST$Z6$jJaRWRz-Wxw$E1Xd*FXRkpvW$ZkM2RX%kl%alJa$0$wd$p*aE5Q%T09",
                        }),
                        className: tl.image,
                        crossOrigin: "anonymous",
                      },
                      e.url,
                    ),
                  ),
            ],
          }),
          V.jsx("div", {
            className: tl.confirmBtnWrapper,
            children: V.jsx(eF.A, {
              type: "primary",
              className: tl.confirmBtn,
              onClick: onClose,
              children: M.Ay.t("web_common_btn_ok", {}, "我知道了"),
            }),
          }),
        ],
      }),
    ],
  });
});
const tg = {
  noticeImageWidth: "40px",
  noticeImageHeight: "40px",
  "notice-item": "notice-item-_Zs2uo",
  noticeItem: "notice-item-_Zs2uo",
  avatar: "avatar-LThsgG",
  "notice-title": "notice-title-gRZJCP",
  noticeTitle: "notice-title-gRZJCP",
  "notice-info": "notice-info-Ac5hXY",
  noticeInfo: "notice-info-Ac5hXY",
  "notice-content": "notice-content-pbUBhT",
  noticeContent: "notice-content-pbUBhT",
  content: "content-kT4Kgx",
  type: "type-hp5rys",
  name: "name-at9KyV",
  "create-time": "create-time-_MaqnC",
  createTime: "create-time-_MaqnC",
  work: "work-m3jp6k",
  image: "image-P8m4xH",
  "system-notice-content": "system-notice-content-sOYM6k",
  systemNoticeContent: "system-notice-content-sOYM6k",
  "close-btn": "close-btn-IX6RYX",
  closeBtn: "close-btn-IX6RYX",
};
const t_ = et.memo(function (e) {
  let t;
  let i;
  const {
    data,
    containerService,
    rowStyle,
    onReportShowDetail,
    onClickNoticeItem,
  } = e;
  const l = es.h(j.c);
  const [c, d] = useE1(true);
  et.useEffect(() => {
    if (d) {
      onReportShowDetail(data);
    }
  }, [data, d, onReportShowDetail]);
  const u = eu.A((e) => {
    e.preventDefault();
    onClickNoticeItem(data);
    if (data.url) {
      try {
        var t = new URL(to(data.url, l, tr.a.DOMAIN_WHITELIST));
        if (t.protocol === "http:" || t.protocol === "https:") {
          return void window.open(
            eV.m(t.href, null, {
              logType: "js.window.location",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: true,
              bid: "cc_dreamina",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: false,
              escapeRule: "escape-report",
              reportUrl:
                "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
              htmlparserOptions: "{}",
              scmBranch: "-",
              scmName: "-",
              scmVersion: "-",
              webpackPluginVersion: "3.6.0",
              filename:
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*NH%khWblJNTTA0M$l6TlNiR0p%T$hWa%0xSndX$EpWZEd*W$$te*l$el$3WXpOb2FHTnRaREZqZHowOQ",
            }),
            "_blank",
            "noopener,noreferrer",
          );
        }
      } catch (e) {}
    }
    var i = eM.A.confirm({
      title: M.Ay.t("web_new_message_from_system", {}, "系统消息"),
      wrapClassName: "notice-detail",
      content: V.jsx(es.Z, {
        instantiationService: containerService,
        children: V.jsx(tp, {
          detail: data,
          containerService,
          onClose: () => {
            i.close();
          },
        }),
      }),
      closeIcon: V.jsx(en.gzW, {
        role: "button",
        tabIndex: 0,
        "aria-label": M.Ay.t("dreamina_web_common_close"),
        onKeyDown: eh.q,
        className: tg.closeBtn,
      }),
      footer: null,
    });
  });
  const h =
    (i = data.imageList) == null || (t = i[0]) == null ? undefined : t.url;
  const { title } = data;
  return V.jsxs("div", {
    className: tg.noticeItem,
    style: rowStyle,
    ref: c,
    onClick: u,
    children: [
      V.jsx("div", {
        className: tg.avatar,
        children: V.jsx(eY.e, {
          src: eV.m(e7, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*NH%khWblJNTTA0M$l6TlNiR0p%T$hWa%0xSndX$EpWZEd*W$$te*l$el$3WXpOb2FHTnRaREZqZHowOQ",
          }),
        }),
      }),
      V.jsxs("div", {
        className: tg.noticeInfo,
        children: [
          V.jsx("div", {
            className: tg.noticeTitle,
            children: V.jsx("span", {
              role: "button",
              tabIndex: 0,
              onKeyDown: eh.q,
              children: title,
            }),
          }),
          V.jsx("div", {
            className: tg.systemNoticeContent,
            children: V.jsx("span", {
              className: tg.content,
              dangerouslySetInnerHTML: {
                __html: eV.t(ts(data.content), null, {
                  logType: "react.dangerouslySetInnerHTML",
                  reportOnly: "false",
                  blackConfig: "{}",
                  configMode: "merge",
                  isCloseSSRReport: true,
                  bid: "cc_dreamina",
                  region: "cn",
                  urlLimit: "-1",
                  htmlLimit: "-1",
                  isSaveValidUrl: false,
                  isRuntimeLog: false,
                  isDOMParser: false,
                  escapeRule: "escape-report",
                  reportUrl:
                    "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                  htmlparserOptions: "{}",
                  scmBranch: "-",
                  scmName: "-",
                  scmVersion: "-",
                  webpackPluginVersion: "3.6.0",
                  filename:
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*NH%khWblJNTTA0M$l6TlNiR0p%T$hWa%0xSndX$EpWZEd*W$$te*l$el$3WXpOb2FHTnRaREZqZHowOQ",
                }),
              },
            }),
          }),
          V.jsx("div", {
            className: tg.createTime,
            children: e2(data.createdTime),
          }),
        ],
      }),
      h
        ? V.jsx("div", {
            className: tg.noticeImage,
            children: V.jsx(e4.sg, {
              alt: "",
              src: eV.m(h, null, {
                logType: "js.href/src",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: true,
                bid: "cc_dreamina",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: false,
                escapeRule: "escape-report",
                reportUrl:
                  "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                htmlparserOptions: "{}",
                scmBranch: "-",
                scmName: "-",
                scmVersion: "-",
                webpackPluginVersion: "3.6.0",
                filename:
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZbTA1T%d*WFduQlpNa1l3W$ZjNWR$d3l%blpp$0$KMlltM$dk$1JJ$Fhaak0yeDZaRWRXZE$4WE5-WmtSMnhx$2xNe*NH%khWblJNTTA0M$l6TlNiR0p%T$hWa%0xSndX$EpWZEd*W$$te*l$el$3WXpOb2FHTnRaREZqZHowOQ",
              }),
              className: tg.image,
              "data-apm-action": "system-notice-item",
              crossOrigin: "anonymous",
            }),
          })
        : null,
    ],
  });
});
function useTv(e) {
  const {
    data,
    rowStyle,
    onOpenSkillAuditMessage,
    onClickNoticeItem,
    onReportShowDetail,
  } = e;
  const [r, o] = useE1(true);
  et.useEffect(() => {
    if (o) {
      onReportShowDetail(data);
    }
  }, [data, o, onReportShowDetail]);
  const l = eu.A((e) => {
    onOpenSkillAuditMessage(e);
    onClickNoticeItem(data);
  });
  return V.jsx(tn, {
    data,
    rowStyle,
    itemRef: r,
    onOpenSkillAuditMessage: l,
  });
}
function useTb(e) {
  const {
    data,
    rowStyle,
    onClosePopUp,
    onOpenDetailModal,
    onClickNoticeItem,
    onReportShowDetail,
  } = e;
  const [o, l] = useE1(true);
  et.useEffect(() => {
    if (l) {
      onReportShowDetail(data);
    }
  }, [data, l, onReportShowDetail]);
  const onOpenDetail = eu.A((e) => {
    onClosePopUp();
    onOpenDetailModal(e);
    onClickNoticeItem(data);
  });
  return V.jsx(ti, {
    data,
    rowStyle,
    itemRef: o,
    onOpenDetail,
  });
}
const tf = ei.PA(function (e) {
  let t;
  const {
    data,
    style,
    activeType,
    containerService,
    onClosePopUp,
    onReportShowDetail,
    onReportClickDetail,
    onFollowStateChange,
    onOpenDetailModal,
    onOpenSkillAuditMessage,
  } = e;
  const h = et.useCallback(
    (e) => {
      onReportShowDetail(e, activeType);
    },
    [onReportShowDetail, activeType],
  );
  const m = et.useCallback(
    (e) => {
      onReportShowDetail(e, activeType);
    },
    [onReportShowDetail, activeType],
  );
  const p = et.useCallback(
    (e) => {
      onReportClickDetail(e, activeType);
    },
    [onReportClickDetail, activeType],
  );
  const g = et.useCallback(
    (e) => {
      onReportClickDetail(e, activeType);
    },
    [onReportClickDetail, activeType],
  );
  const onUserInfoClick = eu.A((e) => {
    onClosePopUp();
    ea.cQ(containerService, F.K).navigate(eb.Du.GuestPerson, {
      params: {
        secUid: e.messageFrom.secUid,
      },
    });
    onReportClickDetail(e, activeType);
    containerService
      .createInstance(
        eU.F,
        {
          enterScenario: $.ZU.CommunityMessage,
          position: "message",
        },
        {},
      )
      .report();
  });
  if (
    (t = et
      .useMemo(
        () => ({
          time: (e) => {
            if (e.timeParam) {
              return V.jsx("div", {
                style,
                className: "time-lyiZkP",
                children: M.Ay.t(e.timeParam),
              });
            }
            return null;
          },
          text: (e) => {
            if (e.textParam) {
              return V.jsx("div", {
                style,
                className: "no-more-Yvd9fw",
                children: M.Ay.t(e.textParam),
              });
            }
            return null;
          },
          divider: (e) => {
            if (e.dividerParam) {
              return V.jsx("div", {
                style,
                className: "divider-rTwhwa",
                children: V.jsx("div", {
                  className: "divider-line-S7W8wV",
                }),
              });
            }
            return null;
          },
          system: (e) => {
            if (e.systemParam) {
              return V.jsx(t_, {
                data: e.systemParam,
                onClosePopUp,
                style,
                rowStyle: style,
                containerService,
                onReportShowDetail: h,
                onClickNoticeItem: p,
              });
            }
            return null;
          },
          favorite: (e) => {
            var t;
            if ((t = e.favoriteParam) == null ? undefined : t.noticeItem) {
              return V.jsx(e8, {
                data: e.favoriteParam,
                rowStyle: style,
                onClosePopUp,
                onOpenDetailModal,
                onReportShowDetail: m,
                onUserInfoClick,
                onClickNoticeItem: g,
              });
            }
            return null;
          },
          modelInvite: (e) => {
            if (e.modelInvite) {
              return V.jsx(e9, {
                data: e.modelInvite,
                rowStyle: style,
                onClosePopUp,
                onReportShowDetail: m,
                onUserInfoClick,
                onClickNoticeItem: g,
              });
            }
            return null;
          },
          follow: (e) => {
            if (e.followParam) {
              return V.jsx(e3, {
                data: e.followParam,
                rowStyle: style,
                onClosePopUp,
                onReportShowDetail: m,
                onFollowStateChange,
                onUserInfoClick,
                onClickNoticeItem: g,
              });
            }
            return null;
          },
          skillAudit: (e) => {
            var t;
            if (
              (t = e.skillAuditParam) == null ? undefined : t.skillAuditInfo
            ) {
              return V.jsx(useTv, {
                data: e.skillAuditParam,
                rowStyle: style,
                onOpenSkillAuditMessage,
                onReportShowDetail: m,
                onClickNoticeItem: g,
              });
            }
            return null;
          },
          itemReview: (e) => {
            var t;
            if ((t = e.itemReviewParam) == null ? undefined : t.noticeItem) {
              return V.jsx(useTb, {
                data: e.itemReviewParam,
                rowStyle: style,
                onClosePopUp,
                onOpenDetailModal,
                onReportShowDetail: m,
                onClickNoticeItem: g,
              });
            }
            return null;
          },
        }),
        [
          onClosePopUp,
          containerService,
          onOpenDetailModal,
          onOpenSkillAuditMessage,
          style,
          onFollowStateChange,
          h,
          m,
          p,
          onUserInfoClick,
          g,
        ],
      )
      [data.type](data)) != null
  ) {
    return t;
  }
  return null;
});
const tk = et.forwardRef(function (e, t) {
  const {
    itemList,
    activeType,
    noticeContainer,
    onClosePopUp,
    onScroll,
    onOpenDetailModal,
    onOpenSkillAuditMessage,
    onFollowStateChange,
  } = e;
  const uRef = et.useRef(null);
  const hRef = et.useRef(
    new eQ.jS({
      fixedWidth: false,
      defaultHeight: 74,
    }),
  );
  const mRef = et.useRef({});
  const containerService = es.h(o._);
  const onReportShowDetail = eu.A((e, t) => {
    if (!mRef.current[e.id]) {
      var i;
      var n;
      var s = containerService.createInstance(tm, {
        action: "show",
      });
      if (t === 1) {
        i = "system_message";
        n = e.title;
      } else if (t === 2) {
        i = "community_message";
      }
      s.setParams({
        messageType: i,
        messageId: e.id,
        messageTitle: n,
      });
      s.report();
      mRef.current[e.id] = true;
    }
  });
  const onReportClickDetail = eu.A((e, t) => {
    var i;
    var n;
    var s = containerService.createInstance(tm, {
      action: "click",
    });
    if (t === 1) {
      i = "system_message";
      n = e.title;
    } else if (t === 2) {
      i = "community_message";
    }
    s.setParams({
      messageType: i,
      messageId: e.id,
      messageTitle: n,
    });
    s.report();
  });
  et.useImperativeHandle(t, () => ({
    scrollToFirstPage: () => {
      var e;
      if ((e = uRef.current) != null) {
        e.scrollToRow(0);
      }
    },
    clearCache: () => {
      var e;
      hRef.current.clearAll();
      if ((e = uRef.current) != null) {
        e.recomputeRowHeights(0);
      }
    },
  }));
  const rowRenderer = eu.A((e) => {
    var { key, index, style, parent } = e;
    var data = itemList[index];
    return V.jsx(
      eQ.dl,
      {
        cache: hRef.current,
        parent,
        columnIndex: 0,
        rowIndex: index,
        children: V.jsx(tf, {
          data,
          style: J._(L._({}, style), {
            width: "100%",
          }),
          activeType,
          containerService,
          onClosePopUp,
          onOpenDetailModal,
          onOpenSkillAuditMessage,
          onReportShowDetail,
          onReportClickDetail,
          onFollowStateChange,
        }),
      },
      key,
    );
  });
  return V.jsx("div", {
    className: ez.noticeList,
    ref: noticeContainer,
    onScrollCapture: onScroll,
    children: V.jsx(eQ.t$, {
      children: (e) => {
        var { width, height } = e;
        return V.jsx("div", {
          className: ez.list,
          children: V.jsx(
            eQ.B8,
            {
              className: ez.listContainer,
              ref: uRef,
              width,
              height,
              deferredMeasurementCache: hRef.current,
              rowCount: itemList.length,
              rowHeight: hRef.current.rowHeight,
              rowRenderer,
              overscanRowCount: 10,
            },
            activeType,
          ),
        });
      },
    }),
  });
});
const ty = ei.PA(tk);
const tS = "loading-container-KepNE3";
const tw = ei.PA(function (e) {
  const {
    isFetching,
    activeType,
    noticeListRef,
    onClosePopUp,
    notificationService,
    notificationStore,
  } = e;
  const cRef = et.useRef(null);
  const d = es.h(ej.q);
  const u = es.h(ew.O);
  const h = es.h(eN.x);
  const m = es.h(ex.b);
  const p = es.h(F.K);
  const g = es.h(o._);
  const onScroll = eu.A(() => {
    if (cRef.current) {
      var { scrollTop, clientHeight, scrollHeight } = cRef.current;
      if (
        scrollHeight > 0 &&
        scrollTop + clientHeight >= scrollHeight &&
        notificationStore.hasMore[activeType]
      ) {
        notificationService.fetchToUpdateNoticeList(activeType);
      }
    }
  });
  const onFollowStateChange = eu.A((e, t) => {
    notificationService.changeFollowState(e, t);
  });
  const b = eu.A(() =>
    s._(function* () {
      const e = yield h.getInstance();
      e.open(ef.JK(e.mode));
    })(),
  );
  const f = eu.A((workDetailData, from) =>
    s._(function* () {
      (yield d.getInstance()).openWorkDetailModal({
        workDetailData,
        from,
        reportUtil: {
          reportParams: {
            enterScenario: $.ZU.CommunityMessage,
          },
        },
      });
    })(),
  );
  const k = eu.A((item, workTitle, i) => {
    onClosePopUp();
    p.navigate(eb.Du.Personal, {
      query: ey.Oi({
        subTabContentType: eg.S(item) ? "short_video" : "inspiration",
      }),
      state: {
        hasBack: true,
      },
    });
    if (i) {
      ((e) => {
        let work_title;
        const { workTitle, canEdit, onFeedback, onEdit } = e;
        work_title = workTitle.trim();
        const r = {
          title: M.Ay.t(
            "web_new_publish_notice_review_failed",
            {},
            "审核未通过",
          ),
          content: work_title
            ? M.Ay.t(
                "web_new_publish_review_rejected_modal_content",
                {
                  work_title,
                },
                "您的作品“{work_title}”本次更新内容可能包含敏感信息，未通过审核，可重新编辑后再次提交；如有疑问可通过客服中心咨询反馈。",
              )
            : M.Ay.t(
                "web_new_publish_review_rejected_modal_content_untitled",
                {},
                "您的作品本次更新内容可能包含敏感信息，未通过审核，可重新编辑后再次提交；如有疑问可通过客服中心咨询反馈。",
              ),
          edit: M.Ay.t(
            "web_new_publish_review_rejected_modal_edit",
            {},
            "重新编辑",
          ),
        };
        let o = null;
        o = eM.A.confirm({
          wrapClassName,
          className: eE,
          simple: true,
          icon: null,
          footer: null,
          closable: false,
          closeIcon: null,
          title: V.jsxs("header", {
            className: eJ,
            children: [
              V.jsxs("div", {
                className: eO,
                children: [
                  V.jsx(en.iQw, {
                    size: 20,
                    className: eD,
                  }),
                  V.jsx("span", {
                    className: eP,
                    children: r.title,
                  }),
                ],
              }),
              V.jsx("button", {
                type: "button",
                className: eH,
                "aria-label": M.Ay.t("genetate_sidebar_close", {}, "关闭"),
                onClick: () => {
                  if (o == null) {
                    return undefined;
                  }
                  return o.close();
                },
                children: V.jsx(en.gzW, {
                  size: 20,
                }),
              }),
            ],
          }),
          content: V.jsxs("div", {
            className: eL,
            children: [
              V.jsx("p", {
                className: eI,
                children: r.content,
              }),
              V.jsxs("footer", {
                className: eK,
                children: [
                  V.jsx(eF.A, {
                    type: "default",
                    className: eX,
                    onClick: () => {
                      if (o != null) {
                        o.close();
                      }
                      onFeedback();
                    },
                    children: M.Ay.t(
                      "skill_publish_dialog_button_feedback",
                      {},
                      "Give feedback",
                    ),
                  }),
                  canEdit
                    ? V.jsx(eF.A, {
                        type: "primary",
                        className: eB,
                        onClick: () => {
                          if (o != null) {
                            o.close();
                          }
                          onEdit();
                        },
                        children: r.edit,
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      })({
        workTitle,
        canEdit: ek.Y(item),
        onFeedback: () => void b(),
        onEdit: () => {
          m.getInstance().then((t) => {
            t.createEditPublishedContentModal({
              item,
              enterFrom: "audit_fail_reedit",
            });
          });
        },
      });
    } else {
      f(
        item,
        eS.d({
          entry: "publish",
          isOwner: true,
        }),
      );
    }
  });
  const onOpenDetailModal = eu.A((e) =>
    s._(function* () {
      const t = notificationStore.messageList.find((t) => t.id === e);
      if (t == null ? undefined : t.noticeItem) {
        const i = e_.v(t.noticeItem.item);
        if (t.subType === 42) {
          k(i, eA(t), eC(t) === "rejected");
        } else {
          yield f(i);
        }
        g.createInstance(
          e$.y,
          {
            enterScenario: $.ZU.CommunityMessage,
            drawType: $.zN.Draw,
          },
          {
            data: i,
          },
        ).report();
      }
    })(),
  );
  const S = eu.A((e) =>
    s._(function* () {
      const e_originalSkillId = e.originalSkillId;
      (yield u.getInstance()).agenticGeneratorManager.openSkillEditor({
        initialSkillId: e_originalSkillId,
        preferredViewMode: e_originalSkillId ? "detail" : undefined,
        enterFrom: "message_center_click",
      });
    })(),
  );
  const w = eu.A((e) => notificationService.openMarketSkillDetail(e));
  const N = eu.A((e) =>
    s._(function* () {
      const t = notificationStore.messageList.find((t) => t.id === e);
      const auditInfo = t == null ? undefined : t.skillAuditInfo;
      if (auditInfo) {
        if (auditInfo.resultCode === 1) {
          return void (yield w(auditInfo));
        }
        ((e) => {
          const { auditInfo, onFeedback, onOpenSkill } = e;
          const s = ((e) => {
            let t;
            let i;
            let n;
            const s = {
              skill_name:
                ((i = e.skillName) == null ? undefined : i.trim()) ||
                M.Ay.t("skill_publish_dialog_skillname", {}, "skill"),
            };
            if (e.resultCode === 6) {
              return {
                title: M.Ay.t(
                  "skill_publish_dialog_title_removed",
                  {},
                  "Your skill is no longer available",
                ),
                content: M.Ay.t(
                  "skill_publish_dialog_desc_removed_due_to_policy_violation",
                  s,
                  'Your skill "{skill_name}" was removed because it contains content that violates our Community Guidelines. Edit it and try again. Let us know through feedback if you have any questions.',
                ),
              };
            }
            const reason =
              (t = (n = e.reason) == null ? undefined : n.trim()) != null
                ? t
                : "";
            const title = M.Ay.t(
              "skill_publish_dialog_title_review_rejected",
              {},
              "Your skill needs changes",
            );
            switch (e.resultCode) {
              case 2:
                return {
                  title,
                  content: M.Ay.t(
                    "skill_publish_dialog_desc_review_rejected_sensitive_content",
                    s,
                    'Your skill "{skill_name}" wasn\'t posted because it may contain sensitive information. Edit it and try again. Let us know through feedback if you have any questions.',
                  ),
                };
              case 4:
                return {
                  title,
                  content: M.Ay.t(
                    "skill_publish_dialog_desc_review_rejected_bad_quality",
                    s,
                    'Your skill "{skill_name}" wasn\'t posted because it needs some improvements, such as formatting, tools, or logic issues. Edit it and try again. Let us know through feedback if you have any questions.',
                  ),
                };
              case 5:
                return {
                  title,
                  content: M.Ay.t(
                    "skill_publish_dialog_desc_review_rejected_manual_reason",
                    J._(L._({}, s), {
                      reason,
                    }),
                    'Your skill "{skill_name}" wasn\'t posted because {reason}. Edit it and try again. Let us know through feedback if you have any questions.',
                  ),
                };
              default:
                return {
                  title,
                  content: M.Ay.t(
                    "skill_publish_dialog_desc_review_rejected_malicious_behavior",
                    s,
                    'Your skill "{skill_name}" wasn\'t posted because it may contain harmful prompts or code. Edit it and try again. Let us know through feedback if you have any questions.',
                  ),
                };
            }
          })(auditInfo);
          let a = null;
          a = eM.A.confirm({
            wrapClassName,
            className: eE,
            simple: true,
            icon: null,
            footer: null,
            closable: false,
            closeIcon: null,
            title: V.jsxs("header", {
              className: eJ,
              children: [
                V.jsxs("div", {
                  className: eO,
                  children: [
                    V.jsx(en.iQw, {
                      size: 20,
                      className: eD,
                    }),
                    V.jsx("span", {
                      className: eP,
                      children: s.title,
                    }),
                  ],
                }),
                V.jsx("button", {
                  type: "button",
                  className: eH,
                  "aria-label": M.Ay.t("genetate_sidebar_close", {}, "关闭"),
                  onClick: () => {
                    if (a == null) {
                      return undefined;
                    }
                    return a.close();
                  },
                  children: V.jsx(en.gzW, {
                    size: 20,
                  }),
                }),
              ],
            }),
            content: V.jsxs("div", {
              className: eL,
              children: [
                V.jsx("p", {
                  className: eI,
                  children: s.content,
                }),
                V.jsxs("footer", {
                  className: eK,
                  children: [
                    V.jsx(eF.A, {
                      type: "default",
                      className: eX,
                      onClick: () => {
                        if (a != null) {
                          a.close();
                        }
                        onFeedback();
                      },
                      children: M.Ay.t(
                        "skill_publish_dialog_button_feedback",
                        {},
                        "Give feedback",
                      ),
                    }),
                    V.jsx(eF.A, {
                      type: "primary",
                      className: eB,
                      onClick: () => {
                        if (a != null) {
                          a.close();
                        }
                        onOpenSkill();
                      },
                      children: M.Ay.t(
                        "skill_publish_dialog_button_view_skill",
                        {},
                        "View skill",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        })({
          auditInfo,
          onFeedback: () => void b(),
          onOpenSkill: () => void S(auditInfo),
        });
      }
    })(),
  );
  const itemList = et.useMemo(() => {
    var e;
    var t;
    var n;
    var s;
    var a;
    var r;
    var o;
    var c;
    var d;
    if (activeType === 2) {
      e = notificationStore.messageList;
      t = notificationStore.hasMore[2];
      n = new Date().setHours(0, 0, 0, 0) / 1000;
      s = e.filter((e) => e.createdTime < n);
      a = e.filter((e) => e.createdTime >= n);
      r = [];
      if (a.length > 0) {
        r.push({
          type: "time",
          timeParam: "web_notifications_date_today",
        });
        r.push(...eW(a));
      }
      if (s.length > 0) {
        if (a.length > 0) {
          r.push({
            type: "divider",
            dividerParam: "",
          });
        }
        r.push({
          type: "time",
          timeParam: "web_notifications_date_earlier",
        });
        r.push(...eW(s));
      }
      if (!t && e.length > 0) {
        r.push({
          type: "text",
          textParam,
        });
      }
      return x.sH(r);
    }
    o = notificationStore.noticeList;
    c = notificationStore.hasMore[1];
    (d = []).push(
      ...o.map((systemParam) => ({
        type: "system",
        systemParam,
      })),
    );
    if (!c && o.length > 0) {
      d.push({
        type: "text",
        textParam,
      });
    }
    return x.sH(d);
  }, [
    activeType,
    notificationStore.messageList,
    notificationStore.noticeList,
    notificationStore.hasMore,
  ]);
  if (isFetching && !notificationStore.noticeList.length) {
    return V.jsx("div", {
      className: tS,
      children: V.jsx(ev.I, {
        className: "spin-QlhMCi",
      }),
    });
  }
  if (itemList.length) {
    return V.jsx(V.Fragment, {
      children: V.jsx(
        ty,
        {
          itemList,
          ref: noticeListRef,
          activeType,
          noticeContainer: cRef,
          onClosePopUp,
          onScroll,
          onOpenDetailModal,
          onOpenSkillAuditMessage: N,
          onFollowStateChange,
        },
        activeType,
      ),
    });
  }
  return V.jsx("div", {
    className: tS,
    children: M.Ay.t("web_new_message_have_no_news", {}, "暂无消息"),
  });
});
const tN = "title-OxWeDE";
const tx = [
  {
    key: 2,
    text: "web_notifications_type_activity",
    defaultText: "Activities",
  },
  {
    key: 1,
    text: "web_notifications_type_system",
    defaultText: "System notifications",
  },
];
const tj = ei.PA(function (e) {
  const {
    isFetching,
    noticeListRef,
    onClosePopUp,
    onActiveTypeChange,
    defaultNoticeCategory,
    isMainFrame2026 = false,
  } = e;
  const [o, setO] = et.useState(defaultNoticeCategory);
  const notificationService = es.h(N);
  const { newMessageCount } = notificationService.notificationStore;
  et.useEffect(() => {
    setO(defaultNoticeCategory);
  }, [defaultNoticeCategory]);
  const u = eu.A((e) => {
    setO(e);
    onActiveTypeChange(e);
  });
  const h = V.jsx(tw, {
    activeType: o,
    isFetching,
    onClosePopUp,
    noticeListRef,
    notificationService,
    notificationStore: notificationService.notificationStore,
  });
  return V.jsxs("div", {
    className: em("container-xvqxAd", {
      "main-frame-2026-IfSiAh": isMainFrame2026,
    }),
    onMouseOver: (e) => e.stopPropagation(),
    children: [
      isMainFrame2026
        ? V.jsxs("div", {
            className: "title-row-AU6uWT",
            children: [
              V.jsx("div", {
                className: tN,
                children: M.Ay.t("web_new_your_information", {}, "消息中心"),
              }),
              V.jsx("button", {
                type: "button",
                className: "close-button-ygZfkf",
                "aria-label": M.Ay.t(
                  "octo_common_close_action_label",
                  {},
                  "关闭",
                ),
                onClick: onClosePopUp,
                children: V.jsx(en.gzW, {
                  size: 16,
                }),
              }),
            ],
          })
        : V.jsx("div", {
            className: tN,
            children: M.Ay.t("web_new_your_information", {}, "消息中心"),
          }),
      V.jsx("div", {
        className: "tab-u_Khxm",
        children: tx.map((e) => {
          var t;
          return V.jsxs(
            "div",
            {
              role: "button",
              tabIndex: 0,
              onKeyDown: eh.q,
              "aria-pressed": o === e.key,
              className: em("tab-text-s867X4", {
                "active-dyJTvi": o === e.key,
              }),
              onClick: () => u(e.key),
              children: [
                M.Ay.t(e.text, {}, e.defaultText),
                ((t =
                  newMessageCount == null
                    ? undefined
                    : newMessageCount[e.key]) != null
                  ? t
                  : 0) > 0
                  ? V.jsx("div", {
                      className: "unread-dot-PJEn_o",
                    })
                  : null,
              ],
            },
            e.key,
          );
        }),
      }),
      isMainFrame2026
        ? V.jsx("div", {
            className: "content-YPdCTx",
            children: h,
          })
        : h,
    ],
  });
});
const t$ = "drawer-wwf_a9";
const tT = [0, 1];
const tW = [-3, 5];
const id = "notification";
const tC = "--main-frame-2026-commerce-banner-top-offset";
const tA = {
  right: "calc(8px + var(".concat(eo.nv, ", 0px))"),
  top: "var(".concat(tC, ", 8px)"),
  bottom: 8,
  height: "calc(100% - var(".concat(tC, ", 8px) - 8px)"),
};
const tM = J._(L._({}, tA), {
  top: 8,
  height: "calc(100% - 16px)",
});
const tF = {
  boxSizing: "border-box",
  minWidth: 16,
  height: 16,
  padding: "0 3px",
  overflow: "hidden",
  fontFamily: "Montserrat",
  fontSize: 10,
  fontWeight: 500,
  lineHeight: "12px",
  color: "var(--lvv-color-text-inverted)",
  textAlign: "center",
  whiteSpace: "nowrap",
  background: "var(--brand-main-default)",
  border: "2px solid var(--bg-body)",
  borderRadius: 99,
};
const tZ = J._(L._({}, tF), {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1px 3px",
  overflow: "visible",
  color: "var(--component-primary-button-text-default)",
  lineHeight: "9px",
  background: "var(--brand-bright-default)",
  border: 0,
  borderRadius: 10,
  boxShadow: "none",
});
const tE = ei.PA(function (e) {
  const { children, menuWrapperPlacement, tooltip } = e;
  const isMainFrame2026 = menuWrapperPlacement === "top-actions";
  const r = es.h(o._);
  const l = es.h(N);
  const { hasLogin } = l.notificationStore;
  const d = es.h(F.K);
  const u = isMainFrame2026 ? ea.cQ(r, el.i) : undefined;
  const h = (u == null ? undefined : u.hasActiveDetailSurface()) ? tM : tA;
  const [isFetching, setM] = et.useState(true);
  const gRef = et.useRef(null);
  const _Ref = et.useRef();
  const [v, setV] = et.useState(false);
  const [f, setF] = et.useState(2);
  const { totalNewMessageCount = 0 } = l;
  const {
    newMessageCount = {
      2: 0,
      1: 0,
    },
  } = l.notificationStore;
  const w = et.useCallback(
    () =>
      s._(function* () {
        if (hasLogin) {
          yield l.getUnreadCount();
        }
      })(),
    [hasLogin, l],
  );
  const x = et.useCallback(
    (e) =>
      s._(function* () {
        let t;
        const i = yield l.fetchToUpdateFirstPageNotice(e);
        if (i == null ? undefined : i.ok) {
          if ((t = gRef.current) != null) {
            t.clearCache();
          }
        }
        return i;
      })(),
    [l],
  );
  const j = et.useCallback(() => {
    setV(false);
  }, []);
  et.useEffect(() => {
    if (hasLogin && u) {
      var e = u.registerExclusivePanel({
        id,
        dismiss: j,
      });
      return () => e.dispose();
    }
  }, [j, hasLogin, u]);
  et.useEffect(() => {
    if (v) {
      var e = d.onSideMenuItemClick(j);
      return () => e.dispose();
    }
  }, [j, v, d]);
  const $ = et.useCallback(() => {
    if (_Ref.current) {
      clearInterval(_Ref.current);
    }
    _Ref.current = setInterval(() => {
      w();
    }, 60000);
  }, [w]);
  et.useEffect(() => {
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
      s._(function* () {
        yield w();
        $();
      })(),
    );
    return () => {
      if (_Ref.current) {
        clearInterval(_Ref.current);
      }
    };
  }, [w, $]);
  const T = et.useCallback(
    (e) =>
      s._(function* () {
        let t;
        let i;
        if (e) {
          if (_Ref.current) {
            clearInterval(_Ref.current);
          }
          if ((t = gRef.current) != null) {
            t.scrollToFirstPage();
          }
          yield x(f);
          w();
          setM(false);
        } else {
          if ((i = gRef.current) != null) {
            i.clearCache();
          }
          $();
        }
      })(),
    [f, w, $, x],
  );
  et.useEffect(() => {
    T(v);
    d.setSideMenuSelected("SiderMenuNotification", v);
  }, [T, v, d]);
  if (!hasLogin) {
    return null;
  }
  const W = V.jsx(ee.A, {
    count:
      isMainFrame2026 && totalNewMessageCount > 99
        ? V.jsx(en.xcf, {
            size: 12,
          })
        : totalNewMessageCount,
    maxCount: 99,
    offset: isMainFrame2026 ? tW : tT,
    dotStyle: isMainFrame2026 ? tZ : tF,
    className: "notice-badge-kUnfie",
    children,
  });
  return V.jsxs(er.I, {
    source: ed.HH.ClickSide,
    className: "notice-jSzZ4L",
    onClick: () => {
      if (newMessageCount[2] > 0) {
        setF(2);
      } else if (newMessageCount[1] > 0) {
        setF(1);
      }
      if (!(v || u == null)) {
        u.activateExclusivePanel(id);
      }
      setV(!v);
      ec.I(r, {
        newMessageCnt: totalNewMessageCount,
      });
    },
    children: [
      isMainFrame2026 && tooltip && !v
        ? V.jsx(Y.A, {
            content: tooltip,
            position: "bottom",
            mini: true,
            triggerProps: {
              mouseEnterDelay: 0,
              mouseLeaveDelay: 0,
              popupAlign: {
                bottom: 8,
              },
            },
            children: W,
          })
        : W,
      V.jsx("div", {
        onClick: (e) => e.stopPropagation(),
        children: V.jsx(G.A, {
          placement: isMainFrame2026 ? "right" : "left",
          footer: null,
          width: isMainFrame2026 ? 360 : 397,
          style: isMainFrame2026 ? h : undefined,
          title: null,
          className: v ? "visible-bbVmZL" : "hide-CkkeX6",
          visible: v,
          wrapClassName: isMainFrame2026
            ? [t$, "top-actions-drawer-kBU1fj"]
            : t$,
          closable: false,
          onCancel: j,
          getPopupContainer: () => {
            var e;
            if (isMainFrame2026) {
              return document.body;
            }
            if ((e = d.getRenderRootWrapper()) != null) {
              return e;
            }
            return document.body;
          },
          children: V.jsx(tj, {
            isFetching,
            onClosePopUp: j,
            onActiveTypeChange: (e) =>
              s._(function* () {
                setM(true);
                yield x(e);
                if (newMessageCount[e] > 0) {
                  l.getUnreadCount();
                }
                setM(false);
              })(),
            noticeListRef: gRef,
            defaultNoticeCategory: f,
            isMainFrame2026,
          }),
        }),
      }),
    ],
  });
});
const tL = require("YC");
class tJ extends W.jG {
  content(e) {
    let t;
    const tooltip =
      b_1.type === "icon"
        ? (t = b_1.tooltips) == null
          ? undefined
          : t.call(b_1)
        : undefined;
    return V.jsx(es.Z, {
      instantiationService: this._containerService,
      children: V.jsx(tL.t, {
        fallback: V.jsx("div", {}),
        children: V.jsx(
          tE,
          J._(L._({}, e), {
            tooltip,
          }),
        ),
      }),
    });
  }
  constructor(e, t, i) {
    super();
    this._containerService = e;
    this._platformUiConfigurationService = t;
    this._notificationService = i;
    this._platformUiConfigurationService.registerConfig({
      [q.N.SideMenu]: [
        J._(L._({}, b_1), {
          MenuWrapper: (e) => this.content(e),
        }),
      ],
    });
  }
}
tJ = a.Cg(
  [
    a.Qj(0, o._),
    a.Qj(1, F.K),
    a.Qj(2, N),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      F.K === undefined ? Object : F.K,
      N === undefined ? Object : N,
    ]),
  ],
  tJ,
);
class tO {
  dispose() {
    let e;
    let t;
    if ((e = this._childContainerService) != null) {
      e.dispose();
    }
    if ((t = this._instance) != null) {
      t.dispose();
    }
  }
  _bootstrap() {
    return s
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(tJ);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(U);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuNotification",
  ctor: (tO = a.Cg(
    [
      a.Qj(0, o._),
      a.Sn("design:type", Function),
      a.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
    ],
    tO,
  )),
  instantiationPhase: r.J.Eager,
  registerWhenLogin: false,
};
