import r from "NY";
import n from "oa";
import a from "bk";
import o from "oD";
import s from "bE";
import l from "do";
import c from "lj";
import d from "CQ";
import u from "xi";
import h from "H4";
import m from "I0";
import g from "cEb";
import v from "Egb";
import _ from "HX";
import p from "De";
import f from "r8";
import b from "BAs";
import D from "QWK";
import C from "z8";
import "yS";
import T from "gL";
import R from "Qey";
import k from "Kt";
import N from "z2";
import P from "kF";
import M from "Dm";
import E from "xL";
import "xj";
import W from "R8";
import $ from "cO";
import I from "pr";
import A from "yw";
import L from "do9";
import H from "IH";
import Z from "AAv";
import B from "sl";
import U from "bo";
import V from "M8X";
import K from "f82";
import J from "c5";
import Q from "wF";
import q from "bT";
import Y from "xhn";
import ee from "xb";
import en from "T5";
import ec from "a0";
import eh from "Fa";
import eg from "D5";
import ev from "yx";
import e_ from "m7q";
import { f as f_1 } from "./module-xxn.js";
import eS from "kT";
import ew from "z7R";
import eD from "yi";
import eC from "TL";
import eZ from "rt";
import eU from "RGL";
import eX from "qa";
import ti from "qaC";
import tr from "mo6";
import tl from "yMd";
import tu from "qDt";
import tm from "RII";
import tg from "DP0";
import tv from "Ymy";
import t_ from "zS";
import tp from "SU";
import tf from "Hr";
import tb from "OQ";
import tk from "tl4";
import tN from "nO";
import tx from "FF3";
import tP from "CtwG";
import tM from "FV";
import tj from "g9";
class y {
  prioritize(e) {
    return [...e].sort((e, t) => t.priority - e.priority);
  }
}
const S = "dialog_manager_daily_count";
class w {
  get size() {
    return this._dialogs.size;
  }
  get currentDialogId() {
    let e;
    if ((e = this._currentDialog) == null) {
      return undefined;
    }
    return e.id;
  }
  getDialog(e) {
    return this._dialogs.get(e);
  }
  register(e) {
    let t;
    const i =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._dialogs.set(e.id, e);
    this._registrationOptions.set(
      e.id,
      a._(n._({}, i), {
        requiresLogin: (t = i.requiresLogin) == null || t,
      }),
    );
    this._updatePriorityQueue();
    e.onClose(() => {
      if (this._currentDialog === e) {
        this._updateDailyDialogCount(e.id);
        this._currentDialog = null;
        this._settleDialog(e.id, "closed");
        this.showNext();
      }
    });
  }
  unregister(e) {
    let t;
    const i =
      (t = this._registrationOptions.get(e)) == null ? undefined : t.onSettled;
    this._dialogs.delete(e);
    this._registrationOptions.delete(e);
    const r = this._prioritizedDialogs.indexOf(e);
    if (r !== -1) {
      this._prioritizedDialogs.splice(r, 1);
    }
    if (i != null) {
      i("cancelled");
    }
    this._notifyIdle();
  }
  _settleDialog(dialogId, t) {
    const i = this._registrationOptions.get(dialogId);
    const r = i == null ? undefined : i.onSettled;
    if (i) {
      this._registrationOptions.set(
        dialogId,
        a._(n._({}, i), {
          onSettled: undefined,
        }),
      );
    }
    this.unregister(dialogId);
    try {
      if (r != null) {
        r(t);
      }
    } catch (error) {
      u.V.error("[DialogManager] stage callback failed", {
        dialogId,
        error,
      });
    }
  }
  whenIdle() {
    if (this._isIdle()) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      this._idleWaiters.add(resolve);
    });
  }
  runWhenIdle(e) {
    if (this._currentDialog || this._isShowingNext) {
      this._idleCallbacks.add(e);
    } else {
      e();
    }
  }
  showNext() {
    return r
      ._(function* () {
        if (!this._currentDialog) {
          if (this._isShowingNext) {
            this._shouldRetryShowNext = true;
            return;
          }
          try {
            let e;
            const t = function* (t) {
              let r;
              let n;
              let a;
              let o;
              let s;
              let l;
              const c = e._dialogs.get(t);
              if (!e._canEvaluateDialog(t)) {
                return "continue";
              }
              if (
                ((n = e._registrationOptions.get(t)) == null ||
                (r = n.shouldSkip) == null
                  ? undefined
                  : r.call(n)) ||
                !e._canShowDialog(t)
              ) {
                i.push(t);
                return "continue";
              }
              let d;
              try {
                d = !!(c && (yield c.shouldShow()));
              } catch (error) {
                if (
                  !(
                    (o = e._registrationOptions.get(t)) == null ||
                    (a = o.onSettled) == null
                  )
                ) {
                  a.call(o, "failed");
                }
                throw error;
              }
              if (c && d) {
                e._currentDialog = c;
                try {
                  if (
                    !(
                      (l = e._registrationOptions.get(t)) == null ||
                      (s = l.onSelected) == null
                    )
                  ) {
                    s.call(l);
                  }
                  Promise.resolve(e._currentDialog.show()).catch((t) => {
                    e._handleShowError(c, t);
                  });
                } catch (error) {
                  e._handleShowError(c, error);
                }
                return "break";
              }
              if (c && (i.push(t), e._shouldRetryShowNext)) {
                return "break";
              }
            };
            this._isShowingNext = true;
            this._shouldRetryShowNext = false;
            if (this._prepareSchedule && this._dialogs.size > 0) {
              yield this._prepareSchedule();
              this._updatePriorityQueue();
            }
            var i = [];
            for (const r of this._prioritizedDialogs) {
              e = this;
              const n = yield* t(r);
              if (n === "break") {
                break;
              }
            }
            i.forEach((e) => {
              this._settleDialog(e, "skipped");
            });
          } finally {
            this._isShowingNext = false;
            if (!this._currentDialog && this._shouldRetryShowNext) {
              this._shouldRetryShowNext = false;
              yield this.showNext();
            }
            this._flushIdleCallbacks();
            this._notifyIdle();
          }
        }
      })
      .call(this);
  }
  _isIdle() {
    return (
      !this._currentDialog && !this._isShowingNext && this._dialogs.size === 0
    );
  }
  _notifyIdle() {
    if (this._isIdle()) {
      this._idleWaiters.forEach((e) => e());
      this._idleWaiters.clear();
    }
  }
  _updatePriorityQueue() {
    const e = Array.from(this._dialogs.values());
    const t = this._priorityStrategy.prioritize(e);
    this._prioritizedDialogs.length = 0;
    this._prioritizedDialogs.push(...t.map((e) => e.id));
  }
  _getDailyDialogCount() {
    const date = new Date().toDateString();
    let count = 0;
    for (const i of this._getDailyDialogCountStorageKeys()) {
      const r = localStorage.getItem(i);
      if (r) {
        const n = JSON.parse(r);
        if (n.date === date) {
          count = Math.max(count, n.count);
        }
      }
    }
    return {
      count,
      date,
    };
  }
  _updateDailyDialogCount(e) {
    if (
      (t = this.getDialog(e)) == null ? undefined : t.limitByDailyDialogCount
    ) {
      var t;
      const i = this._getDailyDialogCount();
      i.count += 1;
      localStorage.setItem(
        this._getDailyDialogCountStorageKey(),
        JSON.stringify(i),
      );
    }
  }
  _canShowDialog(e) {
    let t;
    return (
      ((t = this.getDialog(e)) == null
        ? !undefined
        : !t.limitByDailyDialogCount) || this._getDailyDialogCount().count < 2
    );
  }
  _canEvaluateDialog(e) {
    const t = this._registrationOptions.get(e);
    return (
      (t == null ? undefined : t.requiresLogin) !== true ||
      this._accountService.hasLogin
    );
  }
  _handleShowError(e, t) {
    u.V.error("[DialogManager] show dialog failed", {
      dialogId: e.id,
      error: t,
    });
    if (this._currentDialog === e) {
      this._currentDialog = null;
    }
    this._settleDialog(e.id, "failed");
    Promise.resolve().then(() => this.showNext());
  }
  _flushIdleCallbacks() {
    if (
      !this._currentDialog &&
      !this._isShowingNext &&
      !this._shouldRetryShowNext
    ) {
      const e = Array.from(this._idleCallbacks);
      this._idleCallbacks.clear();
      e.forEach((e) => {
        try {
          e();
        } catch (error) {
          u.V.error("[DialogManager] idle callback failed", {
            error,
          });
        }
      });
    }
  }
  _getDailyDialogCountStorageKey() {
    let e;
    if (this._accountService.hasLogin) {
      return ""
        .concat(S, "_")
        .concat(
          (e = this._accountService.userProfile) == null ? undefined : e.uid,
        );
    }
    return S;
  }
  _getDailyDialogCountStorageKeys() {
    const e = this._getDailyDialogCountStorageKey();
    if (e === S) {
      return [e];
    }
    return [e, S];
  }
  constructor(e, t = new y(), i) {
    this._accountService = e;
    this._priorityStrategy = t;
    this._prepareSchedule = i;
    this._dialogs = new Map();
    this._registrationOptions = new Map();
    this._prioritizedDialogs = [];
    this._currentDialog = null;
    this._isShowingNext = false;
    this._shouldRetryShowNext = false;
    this._idleCallbacks = new Set();
    this._idleWaiters = new Set();
    this._accountService.onDidLogin(() => {
      Promise.resolve().then(() => this.showNext());
    });
  }
}
class x {
  show() {
    return r
      ._(function* () {
        if (!this._isOperating) {
          this._isOperating = true;
          try {
            this._contextView = h.Y(this._containerService, this.id);
            yield this.createModal();
            this.isVisible = true;
          } finally {
            this._isOperating = false;
          }
        }
      })
      .call(this);
  }
  close() {
    if (!this._isOperating) {
      this._isOperating = true;
      try {
        let e;
        if ((e = this._contextView) != null) {
          e.unmount();
        }
      } finally {
        this.isVisible = false;
        try {
          this._closeCallbacks.forEach((e) => e());
        } finally {
          this._isOperating = false;
        }
      }
    }
  }
  onClose(e) {
    this._closeCallbacks.push(e);
  }
  constructor(e, t, i, r = true) {
    this._containerService = e;
    this.id = t;
    this.priority = i;
    this.limitByDailyDialogCount = r;
    this._isOperating = false;
    this.isVisible = false;
    this._closeCallbacks = [];
  }
}
class F extends P.v {
  constructor(...e) {
    super(...e);
    this.eventName = "new_feature_intro_popup";
  }
}
class j extends E.N {
  _validateParams(e) {
    ["action", "title"].forEach((t) => {
      M.F4(e[t], "[NewFeatureIntroPopupReporter] ".concat(t, " is required"));
    });
  }
  _getCollectorClass() {
    return F;
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
j = D.Cg(
  [
    D.Qj(1, k._),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      k._ === undefined ? Object : k._,
    ]),
  ],
  j,
);
const O = (e) => {
  var { onClose, onBind } = e;
  return C.jsxs("div", {
    className: "bind-capcut-account-first-screen-modal-content-thxfD4",
    children: [
      C.jsx("div", {
        className: "close-icon-wrapper-nwz9eM",
        role: "button",
        tabIndex: 0,
        onKeyDown: I.q,
        "aria-label": R.Ay.t("dreamina_web_common_close", {}, "关闭"),
        onClick: onClose,
        children: C.jsx(A.gzW, {
          size: 16,
        }),
      }),
      C.jsx("video", {
        className: "header-video-L4eTZC",
        src: $.m(L, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lTbkJp-lZ*MFd%SkdkMWt6$mpCT$-wWnFX$Ek1T$dKd$$-%mFi$3g1WXpO%mRHTXl%bmxh$jFaM$R*-3hkbHBI%m5OT%1rNTJZb*hDZ*1KdFZu$mtTRTEy$1cxc2RWcERN$3Ba$0$Kc$p*aFJkRmx-$*1wa%0xWjFaR%14-ld*W$Nuc*tRek-2$1ROS2J*cFhOSFJp$npscldWZDNkRmt5T1hWa1IxWjFaR%0xT%dNemFHa*pi$1F4WTNjO$BRPT0",
        }),
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
      }),
      C.jsxs("div", {
        className: "body-fAoOWf",
        children: [
          C.jsx("div", {
            className: "title-zklVMi",
            children: R.Ay.t(
              "jm_capcut_bind_announcement_title",
              {},
              "绑定剪映账号，让灵感即刻成片",
            ),
          }),
          C.jsx("div", {
            className: "description-BZ2Dq7",
            children: R.Ay.t(
              "jm_capcut_bind_announcement_desc",
              {},
              "绑定剪映账号，下载并登录「剪映PC端」，您的生成内容会实时同步至剪映个人空间，在素材库中直接调用即梦生成内容，实现更精细的剪辑创作。",
            ),
          }),
          C.jsx(W.A, {
            type: "primary",
            className: "bind-btn-I6u7OS",
            onClick: onBind,
            children: R.Ay.t("jm_capcut_bind_announcement_cta", {}, "立即绑定"),
          }),
        ],
      }),
    ],
  });
};
class z extends x {
  shouldShow() {
    return Promise.resolve(false);
  }
  createModal() {
    this._modal = T.A.confirm({
      wrapClassName: "dialog-wrapper-p5kSCk",
      icon: null,
      footer: null,
      closeIcon: null,
      closable: false,
      maskClosable: false,
      escToExit: false,
      focusLock: false,
      content: C.jsx(O, {
        onClose: this._handleButtonClose.bind(this),
        onBind: this._handleBind.bind(this),
      }),
    });
    this._reportNewFeatureIntroPopup("show");
    return Promise.resolve();
  }
  _handleClose() {
    let e;
    this._setHasShowed();
    if ((e = this._modal) != null) {
      e.close();
    }
    this.close();
  }
  _handleButtonClose() {
    this._reportNewFeatureIntroPopup("close");
    this._handleClose();
  }
  _handleBind() {
    return r
      ._(function* () {
        (yield this._bindCapcutAccountFeatureLoaderService.getInstance()).startBindingFlow(
          {
            enterFrom: "new_feature_intro_popup",
          },
        );
        this._reportNewFeatureIntroPopup("click_primary");
        this._handleClose();
      })
      .call(this);
  }
  _setHasShowed() {
    localStorage.setItem("bind_capcut_dialog_has_showed", "1");
  }
  _reportNewFeatureIntroPopup(e) {
    this._containerService
      .createInstance(j, {
        action: e,
        title: R.Ay.t(
          "jm_capcut_bind_announcement_title",
          {},
          "绑定剪映账号，让灵感即刻成片",
        ),
      })
      .report();
  }
  constructor(e, t, i, r) {
    super(i, e, t, false);
    this._containerService = i;
    this._bindCapcutAccountFeatureLoaderService = r;
    this._modal = null;
  }
}
z = D.Cg(
  [
    D.Qj(2, k._),
    D.Qj(3, N.M),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      String,
      Number,
      k._ === undefined ? Object : k._,
      N.M === undefined ? Object : N.M,
    ]),
  ],
  z,
);
const G = "banner-shqwLx";
const X = "img-mnLwk8";
const ei = q.memo(function (e) {
  const { className, mediaType, imageUrl, videoUrl, showVideoVolume } = e;
  return C.jsxs(C.Fragment, {
    children: [
      mediaType === "image" && imageUrl
        ? C.jsx("div", {
            className: ee(G, className),
            children: C.jsx("img", {
              alt: R.Ay.t("frame_change_image_title"),
              className: X,
              src: $.m(imageUrl, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3liSFZr%0$wMlR*ZFNjRmx-Z%ha-W$%bHFZakl4ZDJJe%5Xe*libEo2$ERKc2RX%klTblpN$np*c1drZHNhRXd5-khWa1NFcDJ%RmN4-kZwS*JHaE1ibEo2Wl$kR2$Wb3pWbm89",
              }),
              crossOrigin: "anonymous",
            }),
          })
        : null,
      mediaType === "video" && videoUrl
        ? C.jsx("div", {
            className: ee(G, className),
            children: C.jsx(Y.L, {
              videoElementClassName: "video-ua1TeD",
              url: videoUrl,
              tryAutoPlayWithVolume: true,
              loop: true,
              mute: true,
              controlsMode: "normal",
              controlsTimelineClassName: "controls-timeline-_33kfi",
              controlsPlayClassName: "controls-play-vfdsOf",
              controlsDisplay: {
                left: ["playButton"],
                right: showVideoVolume ? ["volume"] : [],
              },
              playOptions: {
                crossOrigin: "anonymous",
              },
              renderLoading: () =>
                C.jsx("img", {
                  alt: "",
                  className: X,
                  src: $.m(imageUrl, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3liSFZr%0$wMlR*ZFNjRmx-Z%ha-W$%bHFZakl4ZDJJe%5Xe*libEo2$ERKc2RX%klTblpN$np*c1drZHNhRXd5-khWa1NFcDJ%RmN4-kZwS*JHaE1ibEo2Wl$kR2$Wb3pWbm89",
                  }),
                  crossOrigin: "anonymous",
                }),
            }),
          })
        : null,
    ],
  });
});
const er = "content-Ji9gYI";
const ea = q.memo(function (e) {
  const { descType, descRichText, description, className } = e;
  return C.jsxs("div", {
    className: ee("description-Ay_atB", className),
    children: [
      descType === "rich_text" && descRichText
        ? C.jsx("div", {
            className: er,
            dangerouslySetInnerHTML: {
              __html: $.t(en.M(descRichText), null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3liSFZr%0$wMlR*ZFNjRmx-Z%ha-W$%bHFZakl4ZDJJe%5Xe*libEo2$ERKc2RX%klTblpN$jFKc1l6Sk5kb%Z-TlRCamJ%aDBXa2RXZWxsN%5%QmpNMmhvWTIxa01XTjNQ$DA9",
              }),
            },
          })
        : null,
      descType === "text" && description
        ? C.jsx("div", {
            className: er,
            children: description,
          })
        : null,
    ],
  });
});
const eo = q.memo(function (e) {
  const { buttonConfigs, className } = e;
  return C.jsx("div", {
    className: ee("operation-QpBeY3", className),
    children: buttonConfigs.map((e) =>
      C.jsx(
        W.A,
        {
          type: e.type,
          className: ee("button-pP31zF", {
            "half-_afQwr": buttonConfigs.length === 2,
            "primary-YtYn0w": e.type === "primary",
            "secondary-gYDHlk": e.type === "secondary",
          }),
          onClick: e.onClick,
          children: R.Ay.t(e.starlingKey, {}, e.defaultText),
        },
        "".concat(e.type, "-").concat(e.starlingKey),
      ),
    ),
  });
});
const es = "footer-IouMSq";
const el = q.memo(function (e) {
  const {
    mediaType,
    imageUrl,
    videoUrl,
    showVideoVolume,
    title,
    description,
    buttonConfigs,
  } = e;
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(ei, {
        className: "model-media-TQqGXl",
        mediaType,
        imageUrl,
        videoUrl,
        showVideoVolume,
      }),
      C.jsx("div", {
        className: "model-title-SH92T1",
        children: title,
      }),
      C.jsx(ea, {
        className: "model-desc-KdSkg5",
        descType: "text",
        description,
      }),
      C.jsx(eo, {
        className: es,
        buttonConfigs,
      }),
    ],
  });
});
const ed = q.memo(function (e) {
  const { title, descType, descRichText, description, buttonConfigs } = e;
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs("div", {
        className: "text-logo-dOQFr8",
        children: [
          C.jsx(ec.F, {}),
          C.jsx("span", {
            className: "dot-zYwo29",
          }),
          C.jsx("span", {
            children: R.Ay.t(
              "web_intro_popup_title_website_name",
              {},
              "网页端",
            ),
          }),
        ],
      }),
      C.jsx("div", {
        className: "text-title-wu_eKD",
        children: title,
      }),
      C.jsx(ea, {
        className: "text-desc-eqld5k",
        descType,
        descRichText,
        description,
      }),
      C.jsx(eo, {
        className: es,
        buttonConfigs,
      }),
    ],
  });
});
const eu = q.memo(function (e) {
  const {
    mediaType,
    imageUrl,
    videoUrl,
    showVideoVolume,
    title,
    descType,
    descRichText,
    description,
    buttonConfigs,
  } = e;
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(ei, {
        className: "view-media-eWRxaq",
        mediaType,
        imageUrl,
        videoUrl,
        showVideoVolume,
      }),
      C.jsx("div", {
        className: "view-title-klopCv",
        children: title,
      }),
      C.jsx(ea, {
        descType,
        descRichText,
        description,
      }),
      C.jsx(eo, {
        className: es,
        buttonConfigs,
      }),
    ],
  });
});
const em = {
  model: {
    style: {
      width: 320,
      backgroundColor: "var(--dialog-bg)",
    },
    renderConent: (e) => C.jsx(el, n._({}, e)),
  },
  view: {
    style: {
      width: 480,
      backgroundColor: "var(--dialog-bg)",
    },
    renderConent: (e) => C.jsx(eu, n._({}, e)),
  },
  text: {
    style: {
      width: 480,
      backgroundImage: "url(".concat(eh, ")"),
    },
    renderConent: (e) => C.jsx(ed, n._({}, e)),
  },
};
class ep extends eg.O {
  _registerDynamicSharedServices() {
    this._dynamicDependencyService.register(ev.B, e_.i);
  }
  _registerChildLevelServices() {
    return Promise.resolve();
  }
}
const eb = "intro_dialog_has_showed";
class ey extends x {
  shouldShow() {
    return r
      ._(function* () {
        yield this._getCurrentIntroConfig();
        return !!this._introConfig && !this._getHasShown(this._introConfig);
      })
      .call(this);
  }
  createModal() {
    return r
      ._(function* () {
        const e = yield this._createChildContainer();
        this._transformIntroConfigToModalProps();
        if (this._IntroModalProps) {
          this._modal = ((e) => {
            const { containerService, onClose } = e;
            const { style, renderConent } = em[e.modalType];
            return T.A.info({
              style,
              wrapClassName: "wrapper-ONlwkB",
              icon: null,
              closeIcon: C.jsx(A.gzW, {
                role: "button",
                tabIndex: 0,
                "aria-label": R.Ay.t("dreamina_web_common_close"),
                onKeyDown: I.q,
              }),
              content: C.jsx(Q.Z, {
                instantiationService: containerService,
                children: renderConent(e),
              }),
              footer: null,
              onCancel: onClose,
            });
          })(
            n._(
              {
                containerService: e,
                onClose: this._close.bind(this),
              },
              this._IntroModalProps,
            ),
          );
          this._reportNewFeatureIntroPopup("show");
        }
      })
      .call(this);
  }
  _getLocalStorageKey(e) {
    if (!this._accountService.hasLogin) {
      return eb;
    }
    const t = e.source === "vimo" ? "_vimo" : "";
    return ""
      .concat(eb)
      .concat(t, "_")
      .concat(e.id, "_")
      .concat(this._accountService.userProfile.uid);
  }
  _getHasShown(e) {
    return !!global.localStorage.getItem(this._getLocalStorageKey(e));
  }
  _setHasShown(e) {
    global.localStorage.setItem(this._getLocalStorageKey(e), "1");
  }
  _trySetHasShown(e) {
    try {
      this._setHasShown(e);
    } catch (error) {
      const errorName =
        typeof error === "object" &&
        error !== null &&
        "name" in error &&
        typeof error.name === "string"
          ? error.name
          : "UnknownError";
      u.V.warn("[IntroDialog] write shown state failed", {
        errorName,
      });
    }
  }
  _createChildContainer() {
    return this._containerService.createInstance(ep).createChild();
  }
  _getCurrentIntroConfig() {
    return r
      ._(function* () {
        this._introConfig =
          yield this._introDialogConfigDataService.fetchCurrentIntroConfig({
            hasShown: (e) => this._getHasShown(e),
            getStartupResult: () => this._getStartupResult(),
          });
      })
      .call(this);
  }
  _getStartupResult() {
    if (!this._startupResultPromise) {
      this._startupResultPromise = this._dreaminaCommerceStartupDataService
        .fetchStartUp(U.og())
        .then((e) => {
          if (e.ok) {
            return e.value;
          }
        })
        .catch(() => undefined);
    }
    return this._startupResultPromise;
  }
  _transformIntroConfigToModalProps() {
    if (this._introConfig) {
      const {
        modalType,
        mediaType,
        titleStarlingKey,
        titleText,
        descType,
        descRichText,
        descStarlingKey,
        descText,
        imageUrl,
        videoUrl,
        videoHasVolume,
        primaryStarlingKey,
        primaryText,
        secondaryStarlingKey,
        secondaryText,
      } = this._introConfig;
      const buttonConfigs = [];
      if (secondaryStarlingKey && secondaryText) {
        buttonConfigs.push({
          type: "secondary",
          starlingKey: secondaryStarlingKey,
          defaultText: secondaryText,
          onClick: this._onSecondaryButtonClick.bind(this),
        });
      }
      if (primaryStarlingKey && primaryText) {
        buttonConfigs.push({
          type: "primary",
          starlingKey: primaryStarlingKey,
          defaultText: primaryText,
          onClick: this._onPrimaryButtonClick.bind(this),
        });
      }
      this._IntroModalProps = {
        modalType: modalType || "view",
        mediaType,
        title: R.Ay.t(titleStarlingKey, {}, titleText),
        descType: descType || "text",
        descRichText,
        description: descStarlingKey
          ? R.Ay.t(descStarlingKey, {}, descText)
          : undefined,
        imageUrl,
        videoUrl,
        showVideoVolume: videoHasVolume,
        buttonConfigs,
      };
    }
  }
  _onPrimaryButtonClick() {
    return r
      ._(function* () {
        this._reportNewFeatureIntroPopup("click_primary");
        let e;
        const t = (e = this._introConfig) == null ? undefined : e.primaryConfig;
        if (t == null ? undefined : t.primaryLink) {
          const r = t.primaryLink;
          if (
            (r.startsWith("guide:") && this._tryBannerJump(H.$.Custom, r)) ||
            (r.startsWith("vip:") && this._tryBannerJump(H.$.VIPPage, r))
          ) {
            return void this._close();
          }
          global.open(r);
          return void this._close();
        }
        if ((t == null ? undefined : t.generateType) === Z.LG) {
          this._tryBannerJump(
            H.$.TeamVIPPage,
            undefined,
            B.d.NewFeatureIntroPopup,
          );
          this._close();
          return;
        }
        if (
          (t == null ? undefined : t.generateType) ||
          (t == null ? undefined : t.routeConfig)
        ) {
          yield this._handleGeneratorNavigation(t);
        }
        this._close();
      })
      .call(this);
  }
  _tryBannerJump(e, t, i) {
    const r = V.cQ(this._containerService, H.h);
    return !!r && (r.handleBannerClick(e, t, i), true);
  }
  _handleGeneratorNavigation(e) {
    return r
      ._(function* () {
        const t = this._getContentGenerateConfig();
        if (t) {
          const i =
            yield this._contentGeneratorFeatureLoaderService.getInstance();
          const { generateType, modelKey } = t;
          i.contentGeneratorManager.setContentGeneratorType(generateType);
          const a = i.getSpecificGeneratorManager(generateType);
          if (modelKey && "switchModel" in a) {
            a.switchModel(modelKey);
            a.reportManager.setResourceReportParams({
              enterFrom: "new_feature_intro_popup",
            });
          }
        }
        const { routeConfig } = e;
        const s = routeConfig == null ? undefined : routeConfig.routeId;
        if (s && Object.hasOwn(v.ph, s)) {
          this._dreaminaUiConfigurationService.navigate(s, {
            params: routeConfig.params,
            query: routeConfig.queryEntries
              ? Object.fromEntries(
                  routeConfig.queryEntries.map((e) => {
                    var { key, value } = e;
                    return [key, value];
                  }),
                )
              : undefined,
          });
        } else if (t) {
          this._dreaminaUiConfigurationService.navigate(_.Du.AIGeneratedRecord);
        }
      })
      .call(this);
  }
  _onSecondaryButtonClick() {
    let e;
    this._reportNewFeatureIntroPopup("click_secondary");
    if ((e = this._introConfig) == null ? undefined : e.secondaryLink) {
      global.open(this._introConfig.secondaryLink);
    }
    this._close();
  }
  _getContentGenerateConfig() {
    if (
      (t = this._introConfig) == null || (e = t.primaryConfig) == null
        ? undefined
        : e.generateType
    ) {
      var e;
      var t;
      const { generateType, modelKey } = this._introConfig.primaryConfig;
      let modelKey_1 = modelKey;
      if (generateType === "digitalHuman" && modelKey) {
        modelKey_1 = Number(modelKey);
      }
      return {
        generateType,
        modelKey: modelKey_1,
      };
    }
  }
  _close() {
    try {
      let e;
      if ((e = this._modal) != null) {
        e.close();
      }
      if (this._introConfig) {
        this._trySetHasShown(this._introConfig);
      }
    } finally {
      this.close();
    }
  }
  _reportNewFeatureIntroPopup(e) {
    let t;
    this._containerService
      .createInstance(j, {
        action: e,
        title: (t = this._IntroModalProps) == null ? undefined : t.title,
      })
      .report();
  }
  constructor(e, t, i, r, n, a, o, s) {
    super(i, e, t);
    this._containerService = i;
    this._accountService = r;
    this._dreaminaUiConfigurationService = n;
    this._introDialogConfigDataService = a;
    this._contentGeneratorFeatureLoaderService = o;
    this._dreaminaCommerceStartupDataService = s;
    this._modal = null;
  }
}
ey = D.Cg(
  [
    D.Qj(2, k._),
    D.Qj(3, s.c),
    D.Qj(4, c.K),
    D.Qj(5, f_1),
    D.Qj(6, J.O),
    D.Qj(7, K.e),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      String,
      Number,
      k._ === undefined ? Object : k._,
      s.c === undefined ? Object : s.c,
      c.K === undefined ? Object : c.K,
      f_1 === undefined ? Object : f_1,
      J.O === undefined ? Object : J.O,
      K.e === undefined ? Object : K.e,
    ]),
  ],
  ey,
);
const eT = "model_promotion_dialog";
const eR = ["https:", "http:"];
function ek(e) {
  let t = false;
  return (i, r) => {
    if (t) {
      if (r != null) {
        r();
      }
      return;
    }
    t = true;
    if (r != null) {
      r();
    }
    e(i);
  };
}
function eN(e, t) {
  return new Promise((resolve) => {
    var r = new Image();
    var n = ek(resolve);
    var a = () => {
      window.clearTimeout(s);
    };
    var o = () => {
      r.onload = null;
      r.onerror = null;
      a();
    };
    var s = window.setTimeout(
      () =>
        n(
          {
            status: "timeout",
            url: e,
          },
          a,
        ),
      t,
    );
    r.onload = () =>
      n(
        {
          status: "ready",
          url: e,
        },
        o,
      );
    r.onerror = () =>
      n(
        {
          status: "failed",
          url: e,
          reason: "image_error",
        },
        o,
      );
    r.crossOrigin = "anonymous";
    r.decoding = "async";
    r.src = $.m(e, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4yWkZo%2NHSkl%WFpp$jFacllWZEZkR05J%214a$J6b*9Xa00xT%dNe$Jub*FNM$o2",
    });
  });
}
const ex = "modal-root-ssYERy";
const eP = "media-image-a44XGE";
const eM = "media-video-aOdBe8";
function eE(e) {
  const { show, previousDisabled, nextDisabled, onPrevious, onNext } = e;
  if (show) {
    return C.jsxs("div", {
      className: "arrow-controls-Grs8Uz",
      children: [
        C.jsx("button", {
          type: "button",
          className: "arrow-button-left-MXlowV",
          "aria-label": [
            R.Ay.t(
              "octo_generation_history_locate_previous_label",
              {},
              "上一个",
            ),
            R.Ay.t("octo_director_stage_model", {}, "模型"),
          ].join(" · "),
          disabled: previousDisabled,
          onClick: onPrevious,
          children: C.jsx(A.gu7, {
            size: 20,
          }),
        }),
        C.jsx("button", {
          type: "button",
          className: "arrow-button-right-dWQyGy",
          "aria-label": [
            R.Ay.t("octo_generation_history_locate_next_label", {}, "下一个"),
            R.Ay.t("octo_director_stage_model", {}, "模型"),
          ].join(" · "),
          disabled: nextDisabled,
          onClick: onNext,
          children: C.jsx(A.Vjx, {
            size: 20,
          }),
        }),
      ],
    });
  }
  return null;
}
function eF(e) {
  const { text, loading, onClick } = e;
  return C.jsx("button", {
    type: "button",
    className: "cta-button-eihyr5",
    disabled: loading,
    onClick: (e) => {
      e.stopPropagation();
      onClick();
    },
    children: C.jsx("span", {
      className: "cta-button-text-oDzob0",
      children: text,
    }),
  });
}
const playOptions = {
  autoplay: true,
  muted: true,
  crossOrigin: "anonymous",
};
const eW = q.forwardRef(function (e, t) {
  let i;
  const {
    tab,
    muted,
    currentTime,
    onMutedChange,
    onPlay,
    onPause,
    onTimeChange,
    onPlayEnd,
  } = e;
  const { media } = tab;
  const gRef = q.useRef(false);
  const vRef = q.useRef(false);
  const _Ref = q.useRef(false);
  const pRef = q.useRef(null);
  const videoIdentity = media.type === "video" ? media.videoUrl : tab.id;
  const b =
    media.type === "video"
      ? ""
          .concat(media.videoUrl, "|")
          .concat((i = media.coverUrl) != null ? i : "")
      : media.imageUrl;
  const yRef = q.useRef({
    videoIdentity,
    currentTime,
  });
  const [S, setS] = q.useState(null);
  const DRef = q.useRef(null);
  const T = S === b;
  if (yRef.current.videoIdentity !== videoIdentity) {
    yRef.current = {
      videoIdentity,
      currentTime,
    };
  }
  const currentTime_1 = yRef.current.currentTime;
  q.useEffect(() => {
    gRef.current = false;
    vRef.current = false;
    _Ref.current = false;
  }, [videoIdentity]);
  const N = q.useCallback(() => {
    if (DRef.current !== b) {
      DRef.current = b;
      u.V.warn(
        "[ModelPromotionDialog] media runtime load failed",
        n._(
          {
            mediaType: media.type,
            url: media.type === "video" ? media.videoUrl : media.imageUrl,
          },
          media.type === "video" && media.coverUrl
            ? {
                coverUrl: media.coverUrl,
              }
            : {},
        ),
      );
    }
    setS(b);
  }, [media, b]);
  const onVideoPlay = q.useCallback(() => {
    vRef.current = true;
    onPlay();
  }, [onPlay]);
  const onVideoCurrentTimeChanged = q.useCallback(
    (e) => {
      if (typeof e === "number" && Number.isFinite(e)) {
        onTimeChange(e);
        if (e > 0.1) {
          _Ref.current = true;
        }
      }
    },
    [onTimeChange],
  );
  const M = q.useCallback(() => {
    if (vRef.current && _Ref.current) {
      if (!gRef.current) {
        gRef.current = true;
        onPlayEnd();
      }
    }
  }, [onPlayEnd]);
  const callbackMap = q.useMemo(
    () => ({
      onPlayEnded: M,
    }),
    [M],
  );
  const stop = q.useCallback(() => {
    var e;
    if ((e = pRef.current) != null) {
      e.pause();
    }
  }, []);
  q.useImperativeHandle(
    t,
    () => ({
      stop,
    }),
    [stop],
  );
  q.useEffect(() => {
    var e;
    if (media.type === "video") {
      if ((e = pRef.current) != null) {
        e.play(muted);
      }
    }
  }, [media.type, muted, videoIdentity]);
  const j = q.useCallback(() => {
    onMutedChange(!muted);
  }, [muted, onMutedChange]);
  if (media.type === "image") {
    if (T) {
      return C.jsx(eI, {});
    }
    return C.jsx("img", {
      className: eP,
      src: $.m(media.imageUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4y$1RJNWRHTkhPWFZh$np$d1kzaz$kRnB-$W5CWl$6RjZaRWRH-mxw$E5%QmpNMmhvWTIxa01XTjNQ$DA9",
      }),
      alt: "",
      crossOrigin: "anonymous",
      onError: N,
    });
  }
  if (T) {
    return C.jsx(eI, {});
  }
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(
        Y.L,
        {
          ref: pRef,
          wrapperClassName: "media-video-player-xkyRRv",
          containerWidth: "100%",
          containerHeight: "100%",
          videoElementClassName: eM,
          url: media.videoUrl,
          loop: false,
          currentTime: currentTime_1,
          controlsDisplayMode: "never",
          playOptions,
          containerClickTogglesPlay: false,
          renderLoading: () => {
            if (currentTime_1 > 0.1) {
              return C.jsx(e$, {});
            }
            return C.jsx(eA, {
              media,
              onError: N,
            });
          },
          onVideoPlay,
          onVideoPause: onPause,
          onVideoCurrentTimeChanged,
          onVideoPlayEnd: M,
          onVideoError: N,
          callbackMap,
          enablePauseWhenOutView: true,
        },
        videoIdentity,
      ),
      C.jsx("button", {
        type: "button",
        className: "sound-toggle-vIPAF0",
        "aria-label": muted
          ? R.Ay.t(
              "octo_canvas_timeline_preview_mute_control_label",
              {},
              "开启原声",
            )
          : R.Ay.t(
              "octo_canvas_timeline_all_tracks_mute_control_label",
              {},
              "静音",
            ),
        onClick: j,
        children: muted
          ? C.jsx(A.J8v, {
              size: 16,
            })
          : C.jsx(A.aDK, {
              size: 16,
            }),
      }),
    ],
  });
});
function e$() {
  return C.jsx("div", {
    className: "media-video-loading-placeholder-zqsfa0",
  });
}
function eI() {
  const children = R.Ay.t("web_canva_loading_failed", {}, "Load failed");
  return C.jsx("div", {
    className: "media-fallback-D0EXwV",
    role: "img",
    "aria-label": children,
    children,
  });
}
function eA(e) {
  const { media, onError } = e;
  if (media.coverUrl) {
    return C.jsx("img", {
      className: eP,
      src: $.m(media.coverUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4y$1RJNWRHTkhPWFZh$np$d1kzaz$kRnB-$W5CWl$6RjZaRWRH-mxw$E5%QmpNMmhvWTIxa01XTjNQ$DA9",
      }),
      alt: "",
      crossOrigin: "anonymous",
      onError,
    });
  }
  return C.jsx("video", {
    className: eM,
    src: $.m(media.videoUrl, null, {
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
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4y$1RJNWRHTkhPWFZh$np$d1kzaz$kRnB-$W5CWl$6RjZaRWRH-mxw$E5%QmpNMmhvWTIxa01XTjNQ$DA9",
    }),
    preload: "metadata",
    muted: true,
    playsInline: true,
    crossOrigin: "anonymous",
    onError,
  });
}
function eL(e) {
  const { tabs, activeIndex, onSwitch } = e;
  const n = tabs.length > 3;
  if (tabs.length <= 1) {
    return null;
  }
  return C.jsx("div", {
    className: ee("switcher-LNeAYj", n && "switcher-multiline-YAsS6T"),
    role: "tablist",
    "aria-label": R.Ay.t("octo_director_stage_model", {}, "模型"),
    children: tabs.map((e, t) =>
      C.jsxs(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": activeIndex === t,
          className: ee(
            "switcher-item-pP1IC6",
            activeIndex === t && "switcher-item-active-qtWvB9",
          ),
          onClick: () => onSwitch(t),
          children: [
            C.jsx("span", {
              className: "switcher-text-En00u0",
              children: e.modelTitle,
            }),
            e.modelBadge
              ? C.jsx("span", {
                  className: "switcher-badge-e5hR0J",
                  children: e.modelBadge,
                })
              : null,
          ],
        },
        e.id,
      ),
    ),
  });
}
function useEO(e) {
  let t;
  let i;
  let a;
  const {
    activity,
    onCtaClick,
    onSlide,
    onFeatureIntroSwitch,
    onActiveModelTitleChange,
  } = e;
  const [h, setH] = q.useState(activity.tabs);
  const [g, setG] = q.useState(0);
  const [_, set_] = q.useState(false);
  const [muted, setMuted] = q.useState(true);
  const [y, setY] = q.useState(false);
  const wRef = q.useRef(null);
  const DRef = q.useRef(new Set());
  const T = (() => {
    const [e, setE] = q.useState(() => document.visibilityState === "hidden");
    q.useEffect(() => {
      var e = () => {
        setE(document.visibilityState === "hidden");
      };
      document.addEventListener("visibilitychange", e);
      return () => document.removeEventListener("visibilitychange", e);
    }, []);
    return e;
  })();
  const R = h.length > 1;
  const tab = (a = h[g]) != null ? a : h[0];
  const N = Math.max(h.length - 1, 0);
  const x = g > 0;
  const P = g < N;
  const M = R || !!(tab == null ? undefined : tab.cta);
  const E = tab
    ? (t = tab.media).type === "image"
      ? "image:".concat(t.imageUrl)
      : "video:"
          .concat(t.videoUrl, ":")
          .concat((i = t.coverUrl) != null ? i : "")
    : "";
  const F = q.useCallback(
    (e, t) => {
      if (h.length) {
        var i;
        var r = (t == null ? undefined : t.loop)
          ? (e + h.length) % h.length
          : Math.min(Math.max(e, 0), h.length - 1);
        if (r !== g) {
          var n = h[g];
          var a = h[r];
          if (n && a) {
            if ((t == null ? undefined : t.source) === "slide") {
              onSlide(n.modelTitle, a.modelTitle);
            } else if (
              (t == null ? undefined : t.source) === "feature-intro-switch"
            ) {
              onFeatureIntroSwitch(n.modelTitle, a.modelTitle);
            }
            onActiveModelTitleChange(a.modelTitle);
            if ((i = wRef.current) != null) {
              i.stop();
            }
            setG(r);
            set_(false);
          }
        }
      }
    },
    [g, onActiveModelTitleChange, onFeatureIntroSwitch, onSlide, h],
  );
  const j = q.useCallback(() => F(g - 1), [g, F]);
  const W = q.useCallback(() => F(g + 1), [g, F]);
  const I = q.useCallback(
    () =>
      F(g - 1, {
        source: "slide",
      }),
    [g, F],
  );
  const A = q.useCallback(
    () =>
      F(g + 1, {
        source: "slide",
      }),
    [g, F],
  );
  const onSwitch = q.useCallback(
    (e) =>
      F(e, {
        source: "feature-intro-switch",
      }),
    [F],
  );
  const O = q.useCallback(
    () =>
      F(g + 1, {
        loop: true,
      }),
    [g, F],
  );
  ((e) => {
    const { enabled, intervalMs, paused, onNext } = e;
    const aRef = q.useRef(onNext);
    q.useEffect(() => {
      aRef.current = onNext;
    }, [onNext]);
    q.useEffect(() => {
      if (enabled && !paused) {
        var e = window.setInterval(() => {
          aRef.current();
        }, intervalMs);
        return () => window.clearInterval(e);
      }
    }, [enabled, intervalMs, paused]);
  })({
    enabled: R,
    intervalMs: activity.carouselIntervalMs,
    paused: _ || T,
    onNext: O,
  });
  ((e) => {
    const { enabled, onPrevious, onNext } = e;
    q.useEffect(() => {
      if (enabled) {
        var e = (e) => {
          var t;
          if (
            !(
              (t = e.target) instanceof HTMLElement &&
              (t.isContentEditable ||
                t.tagName === "INPUT" ||
                t.tagName === "TEXTAREA" ||
                t.tagName === "SELECT")
            )
          ) {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              onPrevious();
            }
            if (e.key === "ArrowRight") {
              e.preventDefault();
              onNext();
            }
          }
        };
        window.addEventListener("keydown", e);
        return () => window.removeEventListener("keydown", e);
      }
    }, [enabled, onNext, onPrevious]);
  })({
    enabled: R,
    onPrevious: j,
    onNext: W,
  });
  q.useEffect(() => {
    if (!(!tab || !E || DRef.current.has(E))) {
      var e = false;
      DRef.current.add(E);
      ((e) => {
        let t;
        if (e.type === "image") {
          if (e.imageUrl) {
            return eN(e.imageUrl, 1000);
          }
          return Promise.resolve({
            status: "failed",
            url: "",
            reason: "image_url_empty",
          });
        }
        if (e.coverUrl) {
          return eN(e.coverUrl, 1000);
        }
        if (e.videoUrl) {
          t = e.videoUrl;
          return new Promise((resolve) => {
            var i = document.createElement("video");
            var r = ek(resolve);
            var n = () => {
              window.clearTimeout(o);
            };
            var a = () => {
              i.onloadeddata = null;
              i.onerror = null;
              i.removeAttribute("src");
              i.load();
              n();
            };
            var o = window.setTimeout(
              () =>
                r(
                  {
                    status: "timeout",
                    url: t,
                  },
                  n,
                ),
              1000,
            );
            i.onloadeddata = () =>
              r(
                {
                  status: "ready",
                  url: t,
                },
                a,
              );
            i.onerror = () =>
              r(
                {
                  status: "failed",
                  url: t,
                  reason: "video_error",
                },
                a,
              );
            i.preload = "metadata";
            i.crossOrigin = "anonymous";
            i.muted = true;
            i.src = $.m(t, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4yWkZo%2NHSkl%WFpp$jFacllWZEZkR05J%214a$J6b*9Xa00xT%dNe$Jub*FNM$o2",
            });
          });
        }
        return Promise.resolve({
          status: "failed",
          url: "",
          reason: "video_url_empty",
        });
      })(tab.media).then((t) => {
        if (!e) {
          var i;
          var r;
          i = tab.media;
          r = n._(
            {
              status: t.status,
              url: t.url,
              mediaType: i.type,
            },
            t.reason
              ? {
                  reason: t.reason,
                }
              : {},
          );
          if (t.status === "ready") {
            u.V.info("[ModelPromotionDialog] media preload ready", r);
          } else {
            u.V.warn("[ModelPromotionDialog] media preload not ready", r);
          }
        }
      });
      return () => {
        e = true;
      };
    }
  }, [E, tab]);
  const z = q.useCallback(
    () =>
      r._(function* () {
        if ((tab == null ? undefined : tab.cta) && !y) {
          setY(true);
          try {
            yield onCtaClick(tab.cta, tab.modelTitle);
          } finally {
            setY(false);
          }
        }
      })(),
    [tab, y, onCtaClick],
  );
  const onTimeChange = q.useCallback(() => undefined, []);
  const onPlayEnd = q.useCallback(() => {
    set_(false);
    O();
  }, [O]);
  const B = q.useMemo(
    () => "model-promotion-title-".concat(activity.id),
    [activity.id],
  );
  if (tab) {
    return C.jsxs("div", {
      className: ex,
      "aria-labelledby": B,
      children: [
        C.jsxs("div", {
          className: "media-card-w2CH3w",
          children: [
            C.jsx(eW, {
              ref: wRef,
              tab,
              muted,
              currentTime: 0,
              onMutedChange: setMuted,
              onPlay: () => set_(true),
              onPause: () => set_(false),
              onTimeChange,
              onPlayEnd,
            }),
            C.jsx("div", {
              className: "media-shade-wzF8x2",
            }),
            C.jsxs("div", {
              className: "content-bar-xE53gM",
              children: [
                C.jsxs("div", {
                  className: "copy-lyZPUr",
                  children: [
                    C.jsx("h2", {
                      id: B,
                      className: "title-yZcVdU",
                      children: tab.title,
                    }),
                    tab.subtitle
                      ? C.jsx("p", {
                          className: "subtitle-OBxEU3",
                          children: tab.subtitle,
                        })
                      : null,
                  ],
                }),
                M
                  ? C.jsxs("div", {
                      className: "content-actions-VhJPOd",
                      children: [
                        C.jsx(eE, {
                          show: R,
                          previousDisabled: !x,
                          nextDisabled: !P,
                          onPrevious: I,
                          onNext: A,
                        }),
                        tab.cta
                          ? C.jsx(eF, {
                              text: tab.cta.text,
                              loading: y,
                              onClick: z,
                            })
                          : null,
                      ],
                    })
                  : null,
              ],
            }),
          ],
        }),
        C.jsx(eL, {
          tabs: h,
          activeIndex: g,
          onSwitch,
        }),
      ],
    });
  }
  return C.jsx("div", {
    className: ex,
  });
}
const maskStyle = {
  background: "var(--bg-mask-80, rgba(0, 0, 0, 0.8))",
  backdropFilter: "blur(30px)",
  WebkitBackdropFilter: "blur(30px)",
};
class eH extends eg.O {
  _registerDynamicSharedServices() {
    this._dynamicDependencyService.register(ev.B, e_.i);
  }
  _registerChildLevelServices() {
    return Promise.resolve();
  }
}
function eB(generatorTarget) {
  if (generatorTarget != null) {
    if (typeof generatorTarget !== "object" || Array.isArray(generatorTarget)) {
      return generatorTarget;
    }
    if (
      Object.values(generatorTarget).every(
        (e) => e == null || (typeof e === "string" && !e.trim()),
      )
    ) {
      return undefined;
    }
    return generatorTarget;
  }
}
function eV(e) {
  if (e === undefined) {
    return {};
  }
  if (Array.isArray(e)) {
    const t = [];
    const i = new Set();
    for (const r of e) {
      if (
        r === null ||
        typeof r !== "object" ||
        Array.isArray(r) ||
        !Object.hasOwn(r, "key") ||
        !Object.hasOwn(r, "value") ||
        typeof r.key !== "string" ||
        typeof r.value !== "string" ||
        r.key.length === 0 ||
        i.has(r.key)
      ) {
        return;
      }
      i.add(r.key);
      t.push([r.key, r.value]);
    }
    return Object.fromEntries(t);
  }
  if (e !== null && typeof e === "object") {
    const n = Object.entries(e);
    if (
      !n.some((e) => {
        var [, t] = e;
        return typeof t !== "string";
      })
    ) {
      return Object.fromEntries(n);
    }
  }
}
function eK(e, t, query, r) {
  const page =
    (s = Object.values(_.Du).find((t) => t === e)) &&
    Object.hasOwn(v.ph, s) &&
    s !== _.Du.FallBack
      ? s
      : undefined;
  if (page) {
    const params = eV(t);
    const o = eV(query);
    if (params && o) {
      try {
        var s;
        let l;
        const path = eU.wE(v.ph[page])(params);
        if (((l = r(path)) == null ? undefined : l.id) !== page) {
          return;
        }
        return {
          page,
          path,
          params,
          query: o,
          supportsGeneratorTarget:
            page === _.Du.Home || page === _.Du.AIGeneratedRecord,
        };
      } catch (e) {
        return;
      }
    }
  }
}
const eJ = {
  shouldCloseDialog: true,
};
const eQ = {
  shouldCloseDialog: false,
};
class eq {
  execute(e) {
    return r
      ._(function* () {
        if (this._isOperating) {
          return eQ;
        }
        this._isOperating = true;
        try {
          let t;
          t = e;
          const i =
            "action" in t
              ? {
                  action: t.action,
                  vipCheck: t.vipCheck,
                }
              : {
                  action: t,
                };
          const { action, vipCheck } = this._resolveExecutionInput(i);
          if (yield this._redirectToSubscriptionIfNeeded(vipCheck)) {
            return eQ;
          }
          if (action.type === "external") {
            window.open(
              $.m(action.href, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4yWWxkR2RWbFhaR3hq-msxMld%TlNhRXh-%m1wa1IyeDJZbWt4ZEZsWE5Xa*FNbFo1$Ec1%2$sbFlTbT$r$0%wOQ",
              }),
              "_blank",
              "noopener,noreferrer",
            );
            return eJ;
          }
          if (yield this._executeInternalAction(action)) {
            return eJ;
          }
          return eQ;
        } finally {
          this._isOperating = false;
        }
      })
      .call(this);
  }
  _resolveExecutionInput(e) {
    if (
      this._options.isLoggedIn() ||
      e.action.type !== "internal" ||
      String(e.action.page) !== _.Du.AIGeneratedRecord
    ) {
      return e;
    }
    return {
      action: {
        type: "internal",
        page: _.Du.Home,
        query: e.action.query,
        openInNewTab: e.action.openInNewTab,
      },
    };
  }
  _redirectToSubscriptionIfNeeded(e) {
    return r
      ._(function* () {
        if (e !== true) {
          return false;
        }
        const t =
          yield this._options.commercialFeatureLoaderService.getInstance();
        return (
          !t.vipService.isVip &&
          (t.showVIPSubscribeModal({
            sceneOptions: undefined,
            source: eT,
          }),
          true)
        );
      })
      .call(this);
  }
  _executeInternalAction(e) {
    return r
      ._(function* () {
        const t = eB(e.generatorTarget);
        const i = eK(e.page, e.params, e.query, (e) =>
          this._options.dreaminaUiConfigurationService.getRouteConfigByPath(e),
        );
        if (!i || (t && !i.supportsGeneratorTarget)) {
          return false;
        }
        const r = new URLSearchParams(
          a._(n._({}, i.query), {
            enter_from: eT,
          }),
        ).toString();
        if (e.openInNewTab) {
          const o = "".concat(v.Js).concat(i.path, "?").concat(r);
          window.open(
            $.m(o, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4yWWxkR2RWbFhaR3hq-msxMld%TlNhRXh-%m1wa1IyeDJZbWt4ZEZsWE5Xa*FNbFo1$Ec1%2$sbFlTbT$r$0%wOQ",
            }),
            "_blank",
            "noopener,noreferrer",
          );
          return true;
        }
        if (t) {
          yield this._applyGeneratorTarget(t);
        }
        this._options.dreaminaUiConfigurationService.navigate(
          i.page,
          a._(
            n._(
              {},
              e.params === undefined
                ? {}
                : {
                    params: i.params,
                  },
            ),
            {
              query: r,
            },
          ),
        );
        return true;
      })
      .call(this);
  }
  _applyGeneratorTarget(e) {
    return r
      ._(function* () {
        let t;
        const i =
          yield this._options.contentGeneratorFeatureLoaderService.getInstance();
        yield eZ.W(
          i,
          (t = e).contentGeneratorType !== "video"
            ? t
            : {
                contentGeneratorType: "video",
                modelKey: t.modelKey,
                featureType: eZ.d(t.featureType) ? t.featureType : undefined,
              },
        );
        i.contentGeneratorReportManager.setCommonParams({
          enterFrom: eT,
          aiFeatureName: e.contentGeneratorType,
        });
      })
      .call(this);
  }
  constructor(e) {
    this._options = e;
    this._isOperating = false;
  }
}
class eG {
  resolveFirstShowableActivity() {
    return r
      ._(function* () {
        const e = yield this._configManager.fetchConfigs();
        for (const t of this._configManager.normalizeActivities(e)) {
          const tabs = yield this._tabAvailabilityManager.filterTabs(t.tabs);
          if (tabs.length > 0) {
            return a._(n._({}, t), {
              tabs,
            });
          }
        }
        return null;
      })
      .call(this);
  }
  constructor(e, t) {
    this._configManager = e;
    this._tabAvailabilityManager = t;
  }
}
function eY(e) {
  if (typeof e === "number") {
    if (Number.isFinite(e)) {
      return e;
    }
    return undefined;
  }
  if (typeof e === "string" && e.trim()) {
    const t = Number(e);
    if (Number.isFinite(t)) {
      return t;
    }
    const i = new Date(e).getTime();
    if (Number.isFinite(i)) {
      return i;
    }
    return undefined;
  }
}
function e0(e) {
  return `dreamina_model_promotion_dialog_viewed_`.concat(e);
}
function e1(e) {
  try {
    let t;
    return !!((t = global.localStorage) == null ? undefined : t.getItem(e0(e)));
  } catch (error) {
    u.V.warn("[ModelPromotionDialog] read viewed storage failed", error);
    return false;
  }
}
class e4 {
  fetchConfigs() {
    return r
      ._(function* () {
        let e;
        if (!this._imcConfigService) {
          return [];
        }
        try {
          e = yield this._imcConfigService.getImcConfigByKey(
            Z.r1.ModelPromotionDialogConfigs,
          );
        } catch (error) {
          this._warn("[ModelPromotionDialog] fetch config failed", error);
          return [];
        }
        if (Array.isArray(e)) {
          return e;
        }
        return [];
      })
      .call(this);
  }
  normalizeActivities(e) {
    if (!Array.isArray(e)) {
      return [];
    }
    const t = this._now();
    const region = this._getRegion();
    return ((e) => {
      const t = [];
      for (const i of e) {
        const r = ((e) => {
          if (e && typeof e === "object") {
            const t = Array.isArray(e.modelPromotionDialogConfigs)
              ? e.modelPromotionDialogConfigs
              : e.modelPromotionDialogConfigsTtp;
            if (Array.isArray(t)) {
              const i = e9(e.id);
              if (i) {
                return t.map((e) => {
                  if (e && typeof e === "object") {
                    return a._(n._({}, e), {
                      id: i,
                    });
                  }
                  return e;
                });
              }
              return t;
            }
          }
        })(i);
        if (r) {
          t.push(...r);
          continue;
        }
        t.push(i);
      }
      return t;
    })(e)
      .map((e, r) => {
        var o;
        var s;
        var l;
        var c;
        var d;
        var u;
        var h = ((e, t) => {
          let i;
          let r;
          const n = e9(e.id);
          if (n) {
            return n;
          }
          const a = JSON.stringify({
            startTime: (i = e.startTime) != null ? i : "",
            endTime: (r = e.endTime) != null ? r : "",
            tabs: Array.isArray(e.tabs)
              ? e.tabs.map((e) => ({
                  id: e.id,
                  titleText: e.titleText,
                }))
              : [],
          });
          return "auto-".concat(e3(a), "-").concat(t);
        })(e, r);
        if (!this._shouldIncludeActivity(h)) {
          return void this._warn(
            "[ModelPromotionDialog] filter activity by audience",
            h,
          );
        }
        if (e6(e.status) !== true) {
          return void this._warn(
            "[ModelPromotionDialog] filter disabled activity",
            h,
          );
        }
        if (e.startTime === undefined || e.endTime === undefined) {
          return void this._warn(
            "[ModelPromotionDialog] filter activity without time window",
            h,
          );
        }
        l = e.startTime;
        c = e.endTime;
        d = eY(l);
        u = eY(c);
        if (
          typeof d === "number" &&
          typeof u === "number" &&
          d <= t &&
          t <= u
        ) {
          if (
            ((s = e.regionWhiteList) == null ? undefined : s.length) &&
            !e.regionWhiteList.includes(region)
          ) {
            return void this._warn(
              "[ModelPromotionDialog] filter activity by region",
              {
                id: h,
                region,
              },
            );
          }
          if (!this._isForceShow() && this._isViewed(h)) {
            return void this._warn(
              "[ModelPromotionDialog] filter viewed activity",
              h,
            );
          }
          if (Array.isArray(e.tabs) && e.tabs.length !== 0) {
            return {
              id: h,
              carouselIntervalMs:
                (o = e.carouselIntervalMs) && Number.isFinite(o)
                  ? Math.max(o, 3000)
                  : 5000,
              tabs: e.tabs.map((e, t) => {
                var i;
                var r;
                var o;
                i = e;
                r = t;
                o = i.cta
                  ? ((e) => {
                      const { vipCheck } = e;
                      const i = eX._(e, ["vipCheck"]);
                      const vipCheck_1 = e6(vipCheck);
                      return n._(
                        a._(n._({}, i), {
                          text: e8(e.text, e.starlingKey),
                        }),
                        typeof vipCheck_1 === "boolean"
                          ? {
                              vipCheck: vipCheck_1,
                            }
                          : {},
                      );
                    })(i.cta)
                  : undefined;
                return a._(n._({}, i), {
                  id: ((e, t) => {
                    let i;
                    const r = e9(e.id);
                    if (r) {
                      return r;
                    }
                    const n = JSON.stringify({
                      titleText: e.titleText,
                      modelTitleText: (i = e.modelTitleText) != null ? i : "",
                      media: e.media,
                    });
                    return "auto-tab-".concat(e3(n), "-").concat(t);
                  })(i, r),
                  titleText: e8(i.titleText, i.titleStarlingKey),
                  modelTitleText: e7(i.modelTitleText, i.modelTitleStarlingKey),
                  modelBadgeText: e7(i.modelBadgeText, i.modelBadgeStarlingKey),
                  subtitleText: e7(i.subtitleText, i.subtitleStarlingKey),
                  cta: o,
                });
              }),
            };
          }
          return void this._warn(
            "[ModelPromotionDialog] filter activity without tabs",
            h,
          );
        }
        this._warn(
          "[ModelPromotionDialog] filter activity outside time window",
          h,
        );
      })
      .filter((e) => !!e);
  }
  constructor(e, t = {}) {
    var i;
    var r;
    var n;
    var a;
    var o;
    var s;
    var l = e2(e) ? t : e != null ? e : t;
    this._imcConfigService = e2(e) ? e : undefined;
    this._now = (i = l.now) != null ? i : Date.now;
    this._isViewed = (r = l.isViewed) != null ? r : e1;
    this._isForceShow = (n = l.isForceShow) != null ? n : e5;
    this._shouldIncludeActivity =
      (a = l.shouldIncludeActivity) != null ? a : () => true;
    this._getRegion = (o = l.getRegion) != null ? o : tt;
    this._warn = (s = l.warn) != null ? s : (e, t) => u.V.warn(e, t);
  }
}
function e2(e) {
  return !!(e && typeof e.getImcConfigByKey === "function");
}
function e5() {
  try {
    let e;
    let t;
    return new URLSearchParams(
      (e = (t = globalThis.location) == null ? undefined : t.search) != null
        ? e
        : "",
    ).has("__debug_model_promotion_dialog_force_show__");
  } catch (e) {
    return false;
  }
}
function e3(e) {
  let t = 0;
  for (let i = 0; i < e.length; i += 1) {
    t = (31 * t + e.charCodeAt(i)) | 0;
  }
  return Math.abs(t).toString(36);
}
function e9(e) {
  if (typeof e === "string") {
    return e.trim() || undefined;
  }
  if (typeof e === "number" && Number.isFinite(e)) {
    return String(e);
  }
}
function e6(e) {
  if (typeof e === "boolean") {
    return e;
  }
  if (typeof e === "string") {
    const t = e.trim().toLowerCase();
    if (t === "true") {
      return true;
    }
    if (t === "false") {
      return false;
    }
  }
}
function e8(e, t) {
  let i;
  let r;
  const n = (i = te(e)) != null ? i : "";
  if ((r = te(t ? R.Ay.t(t, {}, n) : n)) != null) {
    return r;
  }
  return "";
}
function e7(e, t) {
  const i = te(e);
  return te(t ? R.Ay.t(t, {}, i) : i);
}
function te(e) {
  if (typeof e === "string") {
    const t = e.trim();
    if (t && t.toLowerCase() !== "null") {
      return e;
    }
  }
}
function tt() {
  return "cn";
}
class tn {
  filterTabs(e) {
    return r
      ._(function* () {
        return (yield Promise.all(
          e.map((e, t) => this._resolveTab(e, t)),
        )).filter((e) => !!e);
      })
      .call(this);
  }
  _resolveTab(e, t) {
    return r
      ._(function* () {
        let i;
        let r;
        let o;
        let s;
        let l;
        r = e.id;
        o = t;
        const c =
          typeof r === "string" && r.trim()
            ? r.trim()
            : typeof r === "number" && Number.isFinite(r)
              ? String(r)
              : "auto-tab-".concat(o);
        if (!e.titleText || !e.media) {
          return void this._warn(
            "[ModelPromotionDialog] filter invalid tab base fields",
            e,
          );
        }
        if (!((i = e.media).type === "image" ? !!i.imageUrl : !!i.videoUrl)) {
          return void this._warn(
            "[ModelPromotionDialog] filter tab without media url",
            c,
          );
        }
        const d = yield this._resolveCta(e.cta, c);
        return n._(
          a._(
            n._(
              {
                id: c,
                title: e.titleText,
                modelTitle:
                  ((s = e.modelTitleText) == null ? undefined : s.trim()) ||
                  e.titleText,
              },
              ((l = e.modelBadgeText) == null ? undefined : l.trim())
                ? {
                    modelBadge: e.modelBadgeText,
                  }
                : {},
              e.subtitleText
                ? {
                    subtitle: e.subtitleText,
                  }
                : {},
            ),
            {
              media: a._(n._({}, e.media), {
                preloadStatus: "idle",
              }),
            },
          ),
          d
            ? {
                cta: d,
              }
            : {},
        );
      })
      .call(this);
  }
  _resolveCta(e, t) {
    return r
      ._(function* () {
        if (e) {
          if (!e.text.trim()) {
            return void this._warn(
              "[ModelPromotionDialog] drop tab cta without text",
              t,
            );
          }
          const i = n._(
            {
              text: e.text,
            },
            typeof e.vipCheck === "boolean"
              ? {
                  vipCheck: e.vipCheck,
                }
              : {},
          );
          if (!e.action) {
            return i;
          }
          const r = yield this._resolveAction(e.action, t);
          if (r) {
            return a._(n._({}, i), {
              action: r,
            });
          }
          return undefined;
        }
      })
      .call(this);
  }
  _resolveAction(e, t) {
    return r
      ._(function* () {
        if (e) {
          if (e.type === "external") {
            if (
              e.href &&
              ((e) => {
                try {
                  const t = new URL(e);
                  return eR.includes(t.protocol);
                } catch (e) {
                  return false;
                }
              })(e.href)
            ) {
              return e;
            }
            return void this._warn(
              "[ModelPromotionDialog] filter tab by unsafe external href",
              {
                tabId: t,
                href: $.m(e.href, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3lNWFph%jFaelR*aENl$0l5T$haa1IyeDJZbWt4-TJ*WFJuTmlNb%4yWWxkR2RWbFhaR3hq-msxMlpFZEdh$Xh-%mpKWl-yeHpX$mRL-0dKS*JEQmx$ek-w$1ZjMWF*b3lWbmxN-mxKNldWaEtib$JZ$FQwPQ",
                }),
              },
            );
          }
          if (e.type === "noAction") {
            return e;
          }
          const i = eB(e.generatorTarget);
          const r = eK(e.page, e.params, e.query, this._getRouteConfigByPath);
          if (!r) {
            return void this._warn(
              "[ModelPromotionDialog] filter tab by unsupported internal page",
              {
                tabId: t,
                page: e.page,
              },
            );
          }
          if (e.openInNewTab && i) {
            return void this._warn(
              "[ModelPromotionDialog] filter tab by openInNewTab with generatorTarget",
              t,
            );
          }
          if (i && !r.supportsGeneratorTarget) {
            return void this._warn(
              "[ModelPromotionDialog] filter tab by unsupported generator target page",
              {
                tabId: t,
                page: e.page,
              },
            );
          }
          if (!i) {
            return a._(n._({}, e), {
              generatorTarget: i,
            });
          }
          const o = ((e) => {
            if (
              !("featureType" in e) ||
              !(
                typeof (t = e.featureType) === "string" &&
                (!t.trim() || t.trim().toLowerCase() === "null")
              )
            ) {
              return e;
            }
            var t;
            const { featureType } = e;
            return eX._(e, ["featureType"]);
          })(i);
          const s = yield this._resolveGeneratorTarget(o, t);
          if (s) {
            return a._(n._({}, e), {
              generatorTarget: s,
            });
          }
          return undefined;
        }
      })
      .call(this);
  }
  _resolveGeneratorTarget(target, tabId) {
    return r
      ._(function* () {
        if (
          !this._isContentGeneratorTypeAvailable(target.contentGeneratorType)
        ) {
          return void this._warn(
            "[ModelPromotionDialog] filter tab by unavailable generator type",
            {
              tabId,
              type: target.contentGeneratorType,
            },
          );
        }
        if (
          target.contentGeneratorType === "agentic" ||
          target.contentGeneratorType === "audio"
        ) {
          if ("modelKey" in target || "featureType" in target) {
            return void this._warn(
              "[ModelPromotionDialog] filter tab by unsupported model target",
              {
                tabId,
                target,
              },
            );
          }
          return target;
        }
        if (
          "featureType" in target &&
          target.featureType &&
          target.contentGeneratorType !== "video"
        ) {
          return void this._warn(
            "[ModelPromotionDialog] filter tab by featureType on non-video target",
            {
              tabId,
              target,
            },
          );
        }
        if (
          "modelKey" in target &&
          target.modelKey &&
          !(yield this._checkModelAvailability(
            target.contentGeneratorType,
            target.modelKey,
          ))
        ) {
          this._warn("[ModelPromotionDialog] ignore unavailable model target", {
            tabId,
            target,
          });
          return {
            contentGeneratorType: target.contentGeneratorType,
          };
        }
        if (target.contentGeneratorType === "video" && target.featureType) {
          if (!Object.prototype.hasOwnProperty.call(ti.L, target.featureType)) {
            return void this._warn(
              "[ModelPromotionDialog] filter tab by unknown video feature",
              {
                tabId,
                target,
              },
            );
          }
          if (
            !(yield this._checkVideoFeatureAvailability(
              target.featureType,
              target.modelKey,
            ))
          ) {
            return void this._warn(
              "[ModelPromotionDialog] filter tab by unavailable video feature",
              {
                tabId,
                target,
              },
            );
          }
        }
        return target;
      })
      .call(this);
  }
  constructor(e) {
    var t;
    var i;
    var n;
    var a;
    this._getRouteConfigByPath = e.getRouteConfigByPath;
    this._isContentGeneratorTypeAvailable =
      (t = e.isContentGeneratorTypeAvailable) != null ? t : ta;
    this._checkModelAvailability =
      (i = e.checkModelAvailability) != null
        ? i
        : () =>
            r._(function* () {
              return true;
            })();
    this._checkVideoFeatureAvailability =
      (n = e.checkVideoFeatureAvailability) != null
        ? n
        : () =>
            r._(function* () {
              return true;
            })();
    this._warn = (a = e.warn) != null ? a : () => undefined;
  }
}
function ta(e) {
  const t = tr.QV.find((t) => t.value === e);
  return !!(t && !t.disabled);
}
class to extends P.v {
  constructor(...e) {
    super(...e);
    this.eventName = "new_feature_intro_popup";
  }
}
class ts extends E.N {
  _validateParams(e) {
    M.F4(e.action, "[NewFeatureIntroPopupReporter] action is required");
    M.F4(e.title, "[NewFeatureIntroPopupReporter] title is required");
    if (e.action === "slide" || e.action === "switch_feature_intro") {
      M.F4(
        e.switched_title,
        "[NewFeatureIntroPopupReporter] switched_title is required for ".concat(
          e.action,
        ),
      );
    }
  }
  _getCollectorClass() {
    return to;
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
ts = D.Cg(
  [
    D.Qj(1, k._),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      k._ === undefined ? Object : k._,
    ]),
  ],
  ts,
);
function tc(fields, t) {
  let i;
  let r;
  const n = new Set(
    (i =
      (r = fields.find((e) => e.type === tl.pH.InputMediaType)) == null
        ? undefined
        : r.values) != null
      ? i
      : [],
  );
  return t.every((e) => n.has(e));
}
class td extends x {
  shouldShow() {
    return r
      ._(function* () {
        this._resolvedActivity = null;
        this._hasClosed = false;
        try {
          const e = yield this._activityManager.resolveFirstShowableActivity();
          if (!e) {
            return false;
          }
          this._resolvedActivity = e;
          return true;
        } catch (error) {
          u.V.error("[ModelPromotionDialog] resolve activity failed", error);
          return false;
        }
      })
      .call(this);
  }
  createModal() {
    return r
      ._(function* () {
        if (this._resolvedActivity) {
          const e = yield this._containerService
            .createInstance(eH)
            .createChild();
          this._modal = ((e) => {
            let t;
            const {
              containerService,
              activity,
              onClose,
              onCtaClick,
              onReport,
            } = e;
            const l = (t = activity.tabs[0]) == null ? undefined : t.modelTitle;
            let c = l;
            const d = T.A.info({
              wrapClassName: "modal-wrapper-fMyp2f",
              maskStyle,
              style: {
                width: "min(900px, calc(100vw - 80px))",
                maxWidth: "calc(100vw - 80px)",
                background: "transparent",
                boxShadow: "none",
              },
              icon: null,
              closeIcon: C.jsx("span", {
                className: "close-icon-inner-U8gcxe",
                children: C.jsx(A.gzW, {
                  role: "button",
                  tabIndex: 0,
                  "aria-label": R.Ay.t("dreamina_web_common_close"),
                  onKeyDown: I.q,
                  size: 16,
                  color: "var(--onmedia-text-primary, #fff)",
                }),
              }),
              footer: null,
              autoFocus: false,
              focusLock: false,
              maskClosable: false,
              onCancel: () => {
                if (c) {
                  onReport({
                    action: "close",
                    title: c,
                  });
                }
                onClose();
              },
              content: C.jsx(Q.Z, {
                instantiationService: containerService,
                children: C.jsx(useEO, {
                  activity,
                  onCtaClick: (e, t) =>
                    r._(function* () {
                      onReport({
                        action: "click_primary",
                        title: t,
                      });
                      yield onCtaClick(e);
                    })(),
                  onSlide: (e, t) => {
                    onReport({
                      action: "slide",
                      title: e,
                      switchedTitle: t,
                    });
                  },
                  onFeatureIntroSwitch: (e, t) => {
                    onReport({
                      action: "switch_feature_intro",
                      title: e,
                      switchedTitle: t,
                    });
                  },
                  onActiveModelTitleChange: (e) => {
                    c = e;
                  },
                }),
              }),
            });
            if (l) {
              onReport({
                action: "show",
                title: l,
              });
            }
            return d;
          })({
            containerService: e,
            activity: this._resolvedActivity,
            onClose: this._closeWithViewed,
            onCtaClick: this._handleCtaClick,
            onReport: this._reportNewFeatureIntroPopup,
          });
        }
      })
      .call(this);
  }
  constructor(e, t, o, s, l, c, d, h, m) {
    var g;
    super(o, e, t);
    g = this;
    this._containerService = o;
    this._accountService = s;
    this._dreaminaImcConfigService = l;
    this._dreaminaUiConfigurationService = c;
    this._contentGeneratorFeatureLoaderService = d;
    this._dreaminaCommercialFeatureLoaderService = h;
    this._dreaminaModelConfigFeatureLoaderService = m;
    this._modal = null;
    this._resolvedActivity = null;
    this._hasClosed = false;
    this._reportNewFeatureIntroPopup = (e) => {
      this._containerService.createInstance(ts, e).report();
    };
    this._handleCtaClick = (e) =>
      r._(function* () {
        let t;
        let i;
        yield (
          ((t = (e) => g._ctaActionManager.execute(e)),
          (i = g._closeWithViewed),
          r._(function* () {
            let r;
            let o = true;
            if (!((r = e.action) && r.type !== "noAction")) {
              return void i();
            }
            try {
              const s = yield t(
                a._(n._({}, e), {
                  action: e.action,
                }),
              );
              o = (s == null ? undefined : s.shouldCloseDialog) !== false;
            } catch (error) {
              u.V.error("[ModelPromotionDialog] execute CTA failed", error);
            } finally {
              if (o) {
                i();
              }
            }
          })())
        );
      })();
    this._closeWithViewed = () => {
      var e;
      if (!this._hasClosed) {
        this._hasClosed = true;
        if (this._resolvedActivity) {
          ((e) => {
            try {
              let t;
              if ((t = global.localStorage) != null) {
                t.setItem(e0(e), "1");
              }
            } catch (error) {
              u.V.warn(
                "[ModelPromotionDialog] write viewed storage failed",
                error,
              );
            }
          })(this._resolvedActivity.id);
        }
        if ((e = this._modal) != null) {
          e.close();
        }
        this.close();
      }
    };
    this._activityManager = new eG(
      new e4(this._dreaminaImcConfigService),
      new tn({
        getRouteConfigByPath: (e) =>
          this._dreaminaUiConfigurationService.getRouteConfigByPath(e),
        checkModelAvailability: (e, t) =>
          r._(function* () {
            return eD.P(
              yield g._dreaminaModelConfigFeatureLoaderService.getInstance(),
              e,
              t,
            );
          })(),
        checkVideoFeatureAvailability: (e, t) =>
          r._(function* () {
            let i;
            i = yield g._dreaminaModelConfigFeatureLoaderService.getInstance();
            return r._(function* () {
              if (!Object.prototype.hasOwnProperty.call(ti.L, e)) {
                return false;
              }
              const n = yield r._(function* () {
                const data = i.videoModelConfigData.data;
                return (
                  data ||
                  new Promise((resolve) => {
                    var t = i.onVideoConfigUpdated((i) => {
                      t.dispose();
                      resolve(i.data);
                    });
                  })
                );
              })();
              if (!(n == null ? undefined : n.ok)) {
                return false;
              }
              const a = ti.L[e];
              if (!a.length) {
                return false;
              }
              if (t) {
                const o = n.value.modelList.find((e) => e.key === t);
                return !!(o && tc(o.fields, a));
              }
              return n.value.modelList.some((e) => tc(e.fields, a));
            })();
          })(),
        warn: (e, t) => u.V.warn(e, t),
      }),
    );
    this._ctaActionManager = new eq({
      dreaminaUiConfigurationService: this._dreaminaUiConfigurationService,
      contentGeneratorFeatureLoaderService:
        this._contentGeneratorFeatureLoaderService,
      commercialFeatureLoaderService:
        this._dreaminaCommercialFeatureLoaderService,
      isLoggedIn: () => this._accountService.hasLogin,
    });
  }
}
td = D.Cg(
  [
    D.Qj(2, k._),
    D.Qj(3, s.c),
    D.Qj(4, eS.R),
    D.Qj(5, c.K),
    D.Qj(6, J.O),
    D.Qj(7, ew.jV),
    D.Qj(8, eC.S),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      String,
      Number,
      typeof IContainerService === "undefined" ? Object : IContainerService,
      s.c === undefined ? Object : s.c,
      eS.R === undefined ? Object : eS.R,
      c.K === undefined ? Object : c.K,
      J.O === undefined ? Object : J.O,
      ew.jV === undefined ? Object : ew.jV,
      eC.S === undefined ? Object : eC.S,
    ]),
  ],
  td,
);
class th extends x {
  shouldShow() {
    const e = new URL(global.location.href).searchParams.get("uid");
    if (
      this._getPublishVid() &&
      this._accountService.hasLogin &&
      (!e || e === this._accountService.userProfile.uid)
    ) {
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
  createModal() {
    return r
      ._(function* () {
        (yield this._publishFeatureLoaderService.getInstance()).createPublishArtworkModal(
          {
            publishVid: this._getPublishVid(),
            onClose: this.close.bind(this),
          },
        );
      })
      .call(this);
  }
  _getPublishVid() {
    let e;
    if (
      (e = new URL(global.location.href).searchParams.get(
        "story_publish_vid",
      )) != null
    ) {
      return e;
    }
    return "";
  }
  constructor(e, t, i, r, n) {
    super(i, e, t, false);
    this._containerService = i;
    this._accountService = r;
    this._publishFeatureLoaderService = n;
  }
}
th = D.Cg(
  [
    D.Qj(2, k._),
    D.Qj(3, s.c),
    D.Qj(4, tu.b),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      String,
      Number,
      k._ === undefined ? Object : k._,
      s.c === undefined ? Object : s.c,
      tu.b === undefined ? Object : tu.b,
    ]),
  ],
  th,
);
const ty = q.memo(function (e) {
  const { option, isSelected, onClick } = e;
  return C.jsxs("div", {
    className: ee("question-option-WWbGy9", {
      "active-uC80nU": isSelected,
    }),
    role: "button",
    tabIndex: 0,
    onKeyDown: I.q,
    "aria-pressed": isSelected,
    onClick: () => onClick(option),
    children: [
      C.jsx(tb.sg, {
        src: $.m(option.img, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3pWbnBh$0$sMFkw-z$l$1JJ%21oaFd*RjBXa2Rz-%dKSE9XN%1Naz%yWWxoQ2RtSnRWblZr%0%xMll6SnNk$m95Z%d4T$dFNXNZa2RX-W1SRE1-a*tWM$o2Wk$kc2RtSnBPWHBo$npWd$lrZFZkR015$m5O-$-wNHd%RmhHT$ZwW$RqQmhWemwx$EZkc01*cFhNSFZr%0%0MFdWaEtib$JZ$FQwPQ",
        }),
        layoutClassName: "image-LvHBEu",
        crossOrigin: "anonymous",
        fetchPriority: "high",
        rawMode: true,
        imageStyle: {
          width: option.imgSize ? "".concat(option.imgSize, "px") : "24px",
          height: option.imgSize ? "".concat(option.imgSize, "px") : "24px",
        },
      }),
      C.jsx("div", {
        className: "option-text-keicic",
        children: R.Ay.t(option.content),
      }),
      isSelected
        ? C.jsx(A.iWP, {
            className: "check-icon-rjshlB",
            size: 16,
          })
        : null,
    ],
  });
});
const tS = q.memo(function (e) {
  const { options, value, onChange } = e;
  const [n, setN] = q.useState(value == null ? undefined : value[0]);
  const o = t_.A((e) => {
    if (e.key !== (n == null ? undefined : n.key)) {
      setN(e);
      if (onChange != null) {
        onChange(e);
      }
    }
  });
  return C.jsx("div", {
    className: "option-wrap-ZPudDE",
    children: options.map((e) =>
      C.jsx(
        ty,
        {
          option: e,
          isSelected: (n == null ? undefined : n.key) === e.key,
          onClick: o,
        },
        e.key,
      ),
    ),
  });
});
const tw = q.memo(function (e) {
  const { questionItem, defaultSelected, onChange } = e;
  const n = t_.A((e) => {
    if (onChange != null) {
      onChange([e]);
    }
  });
  return C.jsxs("div", {
    className: "survey-Nz1Kp5",
    children: [
      C.jsxs("div", {
        className: "header-vYTarx",
        children: [
          C.jsx("div", {
            className: "title-tFK2hk",
            style: {
              marginTop: questionItem.titleDescription ? 0 : "5px",
            },
            children: R.Ay.t(questionItem.title),
          }),
          C.jsx("div", {
            className: "desc-OMQdiw",
            children: R.Ay.t(questionItem.titleDescription),
          }),
        ],
      }),
      C.jsx("div", {
        className: "body-F02lrI",
        children:
          questionItem.type === 2
            ? C.jsx(
                tS,
                {
                  value: defaultSelected,
                  onChange: n,
                  options: questionItem.options,
                },
                questionItem.id,
              )
            : null,
      }),
    ],
  });
});
const tD = q.memo(function (e) {
  const { question, onSubmit, onClose, onSelect } = e;
  const [loading, setLoading] = q.useState(false);
  const [l, setL] = q.useState([]);
  const d = t_.A((e) => {
    if (onSelect != null) {
      onSelect(e);
    }
    setL(e);
  });
  const u = t_.A(() =>
    r._(function* () {
      if (onSubmit && l.length !== 0) {
        let e = false;
        try {
          setLoading(true);
          e = yield onSubmit(l);
        } finally {
          setLoading(false);
        }
        if (e) {
          tf.l.success(R.Ay.t("mreport_submittoast", {}, "提交成功"));
          if (onClose != null) {
            onClose(l);
          }
        } else {
          tf.l.warning(
            R.Ay.t("mreport_networkerrortoast", {}, "当前网络不稳定，请重试"),
          );
        }
      }
    })(),
  );
  const h = t_.A(() => {
    if (onClose != null) {
      onClose(l);
    }
  });
  return C.jsxs("div", {
    className: "user-portrait-NF225n",
    children: [
      C.jsx("div", {
        className: "close-btn-LBJkLf",
        role: "button",
        tabIndex: 0,
        onKeyDown: I.q,
        "aria-label": R.Ay.t("dreamina_web_common_close", {}, "关闭"),
        onClick: h,
        children: C.jsx(A.gzW, {
          size: 16,
        }),
      }),
      C.jsx(tw, {
        questionItem: question,
        defaultSelected: l,
        onChange: d,
      }),
      C.jsx("div", {
        className: "footer-ER3kkN",
        children: C.jsx(tp.K, {
          type: "primary",
          loading,
          disabled: l.length === 0,
          className: "submit-sNFNBd",
          onClick: u,
          children: R.Ay.t("web_survey_btn", {}, "开启即梦"),
        }),
      }),
    ],
  });
});
class tC {
  hasSurveyData() {
    return r
      ._(function* () {
        return !!(yield this.getSurveyData()).length;
      })
      .call(this);
  }
  getSurveyData() {
    return r
      ._(function* () {
        if (this._hasFetchedSurveysData) {
          return this._surveysData;
        }
        const user = this._getUser();
        const t = ["image"].map((type) =>
          this._mwebFeelGoodService.aggregate.getUserPortraitTaskSetting({
            user,
            type,
          }),
        );
        try {
          const i = (yield Promise.all(t))
            .filter((e) => e.ok)
            .filter((e) => e.value.taskId)
            .map((e) => e.value);
          const r = !!i.length;
          this._surveysData = r ? i : [];
          this._hasFetchedSurveysData = true;
          return this._surveysData;
        } catch (error) {
          u.V.error("[SurveyDataManager] getSurveyData error", error);
          return [];
        }
      })
      .call(this);
  }
  getQuestionData() {
    return r
      ._(function* () {
        if (this._questionData) {
          return this._questionData;
        }
        const e = yield this.getQuestionListData();
        this._questionData = e[0][0];
        return this._questionData;
      })
      .call(this);
  }
  getQuestionListData() {
    return r
      ._(function* () {
        if (this._questionListData) {
          return this._questionListData;
        }
        const e = (yield this.getSurveyData()).map((e) => [
          e.questionMap[e.firstQuestionKey],
        ]);
        this._questionListData = e;
        return e;
      })
      .call(this);
  }
  postSurveysSubmit(e) {
    return r
      ._(function* () {
        const t = this._getUser();
        const i = yield this._mwebFeelGoodService.aggregate.postSurveysSubmit(
          e,
          t,
        );
        const isSubmitSuccess = i.every((e) => e.ok);
        return {
          isSubmitSuccess,
          code: i.map((e) => e.code).join(","),
          msg: i.map((e) => e.msg).join(","),
        };
      })
      .call(this);
  }
  _getUser() {
    const { userProfile } = this._accountService;
    const { name = "", uid = "" } = userProfile;
    return {
      userId: uid,
      userName: name,
      webId: uid,
    };
  }
  constructor(e, t) {
    this._mwebFeelGoodService = e;
    this._accountService = t;
    this._hasFetchedSurveysData = false;
    this._surveysData = [];
    this._questionData = null;
    this._questionListData = null;
  }
}
tC = D.Cg(
  [
    D.Qj(0, tg.z),
    D.Qj(1, s.c),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      tg.z === undefined ? Object : tg.z,
      s.c === undefined ? Object : s.c,
    ]),
  ],
  tC,
);
const tT = [
  "student",
  "art_professional",
  "designer",
  "tv_film_professional",
  "digital_marketing",
  "social_media",
  "tech_professional",
  "other",
];
class tR extends x {
  shouldShow() {
    return r
      ._(function* () {
        if (location.search.includes("show_survey_next")) {
          yield this._dreaminaSettingsDataService.updateSettings({
            occupationalQuestionnaire: false,
          });
        }
        let e;
        const t = yield this._dreaminaSettingsDataService.getSettings();
        return (
          !!t.ok &&
          ((e = t.value) == null || !e.occupationalQuestionnaire) &&
          this._surveyDataManager.hasSurveyData()
        );
      })
      .call(this);
  }
  createModal() {
    return r
      ._(function* () {
        const question = yield this._surveyDataManager.getQuestionData();
        this._modal = T.A.confirm({
          wrapClassName: "user-portrait-dialog-VBhRrV",
          footer: null,
          escToExit: false,
          icon: null,
          closeIcon: null,
          closable: false,
          focusLock: false,
          maskClosable: false,
          autoFocus: false,
          afterOpen: this._handleAfterModalOpen,
          content: C.jsx(tD, {
            question,
            onClose: this._handleModalClose,
            onSelect: this._handleSelect,
            onSubmit: this._handleSubmit,
          }),
        });
      })
      .call(this);
  }
  _getQuestionReportContent(e) {
    return r
      ._(function* () {
        const t = yield this._surveyDataManager.getQuestionData();
        return {
          question_id: t.id || "",
          question_rank: 0,
          question_title: t.title || "",
          option: e.map((e) => e.content).join(","),
        };
      })
      .call(this);
  }
  constructor(e, t, i, o, s, l, c) {
    var d;
    super(i, e, t);
    d = this;
    this._containerService = i;
    this._dreaminaUiConfigurationService = o;
    this._reportService = s;
    this._mwebFeelGoodService = l;
    this._dreaminaSettingsDataService = c;
    this._surveyDataManager = this._containerService.createInstance(tC);
    this._handleAfterModalOpen = () =>
      r._(function* () {
        d._dreaminaSettingsDataService.updateSettings({
          occupationalQuestionnaire: true,
        });
        const e = yield d._getQuestionReportContent([]);
        d._reportService.reportBusinessEvent("questionnaire_show", e);
      })();
    this._handleModalClose = (e) =>
      r._(function* () {
        let t;
        const i = yield d._getQuestionReportContent(e);
        d._reportService.reportBusinessEvent("questionnaire_close", i);
        if ((t = d._modal) != null) {
          t.close();
        }
        d.close();
      })();
    this._handleSelect = (e) =>
      r._(function* () {
        const option = e.map((e) => e.content).join(",");
        const i = yield d._getQuestionReportContent(e);
        d._reportService.reportBusinessEvent(
          "questionnaire_click_option",
          a._(n._({}, i), {
            option,
          }),
        );
      })();
    this._handleSubmit = (val) =>
      r._(function* () {
        const t = {};
        const i = yield d._surveyDataManager.getSurveyData();
        const r = yield d._surveyDataManager.getQuestionListData();
        const n = i.map((i, n) => {
          var a = r[n].map((e) => ({
            id: e.id,
            type: e.type,
          }));
          var o = {};
          a.forEach((t) => {
            o[t.id] = {
              type: t.type,
              val,
            };
          });
          r[n].forEach((e, r) => {
            var n =
              (c = o[e.id]) == null || (l = c.val) == null || (s = l[0]) == null
                ? undefined
                : s.id;
            var a = e.options.findIndex((e) => e.id === n);
            if (a !== -1) {
              var s;
              var l;
              var c;
              var d;
              var u = tT[a];
              t[(d = i.questionReportName[r]) != null ? d : e.id] = u;
            }
          });
          return {
            taskVersion: i.taskVersion,
            taskId: i.taskId,
            submitId: i.submitId,
            data: o,
            timeCost: 0,
            type: i.type,
          };
        });
        d._reportService.reportBusinessEvent("questionnaire_submmit", t);
        const { isSubmitSuccess, code, msg } =
          yield d._surveyDataManager.postSurveysSubmit(n);
        if (!isSubmitSuccess) {
          d._reportService.reportDevEvent("feelGoodSubmitFail", {
            code,
            err_msg: msg,
          });
        }
        return isSubmitSuccess;
      })();
  }
}
tR = D.Cg(
  [
    D.Qj(2, k._),
    D.Qj(3, c.K),
    D.Qj(4, tm.l),
    D.Qj(5, tg.z),
    D.Qj(6, tv.y),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      String,
      Number,
      k._ === undefined ? Object : k._,
      c.K === undefined ? Object : c.K,
      tm.l === undefined ? Object : tm.l,
      tg.z === undefined ? Object : tg.z,
      tv.y === undefined ? Object : tv.y,
    ]),
  ],
  tR,
);
function tE() {
  try {
    const e = global.localStorage.getItem(tM.o.shortDramaOnboardingAudience);
    if (e === "eligible" || e === "ineligible") {
      return e;
    }
    return undefined;
  } catch (e) {
    return;
  }
}
function tF() {
  try {
    return (
      global.localStorage.getItem(tM.o.shortDramaOnboardingGuideSeen) === "1"
    );
  } catch (e) {
    return true;
  }
}
function tW(e) {
  const {
    left,
    top,
    arrowTop,
    onElement,
    onDismiss,
    onHoverChange,
    onFocusChange,
  } = e;
  return C.jsxs("div", {
    ref: onElement,
    "data-short-drama-onboarding-guide-card": true,
    className: "positioned-card-YTgeaf",
    style: {
      left,
      top,
    },
    role: "note",
    "aria-labelledby": "short-drama-onboarding-title",
    onMouseEnter: () => onHoverChange(true),
    onMouseLeave: () => onHoverChange(false),
    onFocusCapture: () => onFocusChange(true),
    onBlurCapture: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        onFocusChange(false);
      }
    },
    children: [
      C.jsx("img", {
        src: $.m(
          "data:image/svg+xml;base64,PHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgc3R5bGU9ImRpc3BsYXk6IGJsb2NrOyIgd2lkdGg9Ijc0IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCA3NCA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBpZD0iYXJyb3ciPgo8Zm9yZWlnbk9iamVjdCB4PSI1IiB5PSItMjAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI0OCI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImJhY2tkcm9wLWZpbHRlcjpibHVyKDEwcHgpO2NsaXAtcGF0aDp1cmwoI2JnYmx1cl8wXzBfMTNfY2xpcF9wYXRoKTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlIj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHBhdGggaWQ9IlBvbHlnb24gMSIgZGF0YS1maWdtYS1iZy1ibHVyLXJhZGl1cz0iMjAiIGQ9Ik0zOC40OTQ4IDcuMzI3ODZDMzcuNjk5MiA4LjIyNDA1IDM2LjMwMDggOC4yMjQwNSAzNS41MDUyIDcuMzI3ODZMMzAuNTQwNiAyLjMxMTc3QzI5LjA3NjQgMC44MzIzOTggMjcuMDgxNCAyLjg3NDI3ZS0wNiAyNSAzLjE0NzIyZS0wNkw0OSAwQzQ2LjkxODYgMi43Mjk0OGUtMDcgNDQuOTIzNiAwLjgzMjM5NSA0My40NTk0IDIuMzExNzdMMzguNDk0OCA3LjMyNzg2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJiZ2JsdXJfMF8wXzEzX2NsaXBfcGF0aCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUgMjApIj48cGF0aCBkPSJNMzguNDk0OCA3LjMyNzg2QzM3LjY5OTIgOC4yMjQwNSAzNi4zMDA4IDguMjI0MDUgMzUuNTA1MiA3LjMyNzg2TDMwLjU0MDYgMi4zMTE3N0MyOS4wNzY0IDAuODMyMzk4IDI3LjA4MTQgMi44NzQyN2UtMDYgMjUgMy4xNDcyMmUtMDZMNDkgMEM0Ni45MTg2IDIuNzI5NDhlLTA3IDQ0LjkyMzYgMC44MzIzOTUgNDMuNDU5NCAyLjMxMTc3TDM4LjQ5NDggNy4zMjc4NloiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K",
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emx4WWpKSmRscHRiS*xqTTF*MFl6Sk9l$nB-$m5WT$-xSndX$mQ0Z*xwN%9Xd*hWMFp6WWpKa2$rd3p%bTlpTTBvd1R*ZFNl$mx-T$doT$Z6bDFX$zA1-%dOdF$uQmli$04w$2pO$2N*cEhWWFJh%jJ4b1lr-z$ia3d6$*05a%0wb3d%RmRTZ$ZsWE1XaE1Wemwx$1cwNWFHTnR$bkJp-ldOMFdqTldjRnBI$lhWa1NFNDBX$mhL-m1SW$R%MD0",
          },
        ),
        alt: "",
        className: "arrow-aXRRnC",
        style: {
          top: arrowTop,
        },
      }),
      C.jsx("div", {
        className: "card-hQ5jJF",
        children: C.jsxs("div", {
          className: "content-AMyRgB",
          children: [
            C.jsxs("div", {
              className: "copy-xfem5x",
              children: [
                C.jsx("div", {
                  id: "short-drama-onboarding-title",
                  className: "title-hxe75S",
                  children: tj.f(
                    "web_revamp_onboarding_popup_story_title",
                    "短剧工作室全新上线",
                  ),
                }),
                C.jsx("div", {
                  className: "description-hUw8SU",
                  children: tj.f(
                    "web_revamp_onboarding_popup_story_desc",
                    "针对短剧行业，提供更专业的剧本创作、分镜预演、转绘出海等能力",
                  ),
                }),
              ],
            }),
            C.jsx("div", {
              className: "footer-w_LIpg",
              children: C.jsx("button", {
                type: "button",
                className: "primary-button-K3bTZg",
                onClick: onDismiss,
                children: tj.f("web_revamp_onboarding_btn_done", "知道了"),
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function t$(e) {
  if (
    !e.getClientRects().length ||
    e.closest('[hidden], [inert], [aria-hidden="true"]')
  ) {
    return false;
  }
  const t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) {
    return false;
  }
  for (let i = e; i; i = i.parentElement) {
    const r = window.getComputedStyle(i);
    if (
      r.display === "none" ||
      r.visibility !== "visible" ||
      r.opacity === "0"
    ) {
      return false;
    }
  }
  return true;
}
function tI() {
  return Array.from(
    document.querySelectorAll(
      '[role="dialog"], [role="alertdialog"], dialog[open]',
    ),
  ).some(t$);
}
function tA() {
  return Array.from(
    document.querySelectorAll("[data-main-frame-2026-onboarding-short-drama]"),
  ).find((e) => {
    if (e.closest('aside[data-collapsed="true"]') || !t$(e)) {
      return false;
    }
    var t = e.getBoundingClientRect();
    return (
      t.left >= 0 &&
      t.top >= 0 &&
      t.right <= window.innerWidth &&
      t.bottom <= window.innerHeight
    );
  });
}
function tL(e) {
  if (!t$(e)) {
    return false;
  }
  const t = e.getBoundingClientRect();
  if (
    t.left < 0 ||
    t.top < 0 ||
    t.right > window.innerWidth ||
    t.bottom > window.innerHeight
  ) {
    return false;
  }
  const i = Math.min(20, 0.25 * t.width, 0.25 * t.height);
  return [
    [t.left + 0.5 * t.width, t.top + 0.5 * t.height],
    [t.left + i, t.top + i],
    [t.right - i, t.bottom - i],
  ].every((t) => {
    var [i, r] = t;
    return e.contains(document.elementFromPoint(i, r));
  });
}
function tO(e) {
  const { left, top, right, width, height } = e.getBoundingClientRect();
  return {
    left,
    top,
    right,
    width,
    height,
  };
}
class tz extends q.Component {
  static getDerivedStateFromError() {
    return {
      failed: true,
    };
  }
  componentDidCatch(e, t) {
    Promise.resolve().then(() => this.props.onError(e, t));
  }
  render() {
    if (this.state.failed) {
      return null;
    }
    return this.props.children;
  }
  constructor(...e) {
    super(...e);
    this.state = {
      failed: false,
    };
  }
}
class tH extends x {
  shouldShow() {
    const e = !this._settled && this._canShow();
    if (!e) {
      this._settle("unavailable");
    }
    return Promise.resolve(e);
  }
  show() {
    const e = this;
    const t = () => super.close;
    const i = () => super.show;
    return r
      ._(function* () {
        if (this._settled || !this._canShow()) {
          t().call(e);
          this._settle("unavailable");
          return;
        }
        try {
          yield i().call(e);
          if (this._pendingDismiss) {
            this.dismiss(this._pendingDismiss);
          }
        } catch (error) {
          this.dismiss("failed");
          throw error;
        }
      })
      .call(this);
  }
  createModal() {
    this._render();
    return Promise.resolve();
  }
  updateAnchor(e) {
    this._anchorRect = e;
    this._render();
  }
  setPageVisible(e) {
    this._setPaused("hidden", !e);
  }
  close() {
    this.dismiss();
  }
  dismiss() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "unavailable";
    if (!this._settled) {
      if (this._isOperating) {
        this._pendingDismiss = e;
        return;
      }
      this._clearResources();
      try {
        super.close();
      } finally {
        this._contextView = undefined;
        this._settle(this._presented ? "presented" : e);
      }
    }
  }
  _confirmPresented() {
    if (!this._settled) {
      if (
        !this._card ||
        document.hidden ||
        !this._canShow() ||
        !tL(this._card)
      ) {
        return void this.dismiss("unavailable");
      }
      if (
        !(() => {
          try {
            global.localStorage.setItem(
              tM.o.shortDramaOnboardingGuideSeen,
              "1",
            );
            return true;
          } catch (e) {
            return false;
          }
        })()
      ) {
        return void this.dismiss("failed");
      }
      this._presented = true;
      this._setPaused("hover", this._card.matches(":hover"));
      this._setPaused("focus", this._card.contains(document.activeElement));
      this._resumeTimer();
    }
  }
  _setPaused(e, t) {
    if (t) {
      this._pauseReasons.add(e);
      if (this._startedAt !== undefined) {
        this._remainingMs = Math.max(
          0,
          this._remainingMs - (performance.now() - this._startedAt),
        );
      }
      this._clearTimer();
    } else {
      this._pauseReasons.delete(e);
      this._resumeTimer();
    }
  }
  _resumeTimer() {
    if (
      !(
        this._settled ||
        !this._presented ||
        this._pauseReasons.size ||
        this._timer !== undefined
      )
    ) {
      this._startedAt = performance.now();
      this._timer = window.setTimeout(this._handleDismiss, this._remainingMs);
    }
  }
  _clearTimer() {
    if (this._timer !== undefined) {
      window.clearTimeout(this._timer);
    }
    this._timer = undefined;
    this._startedAt = undefined;
  }
  _clearResources() {
    this._clearTimer();
    if (this._presentationFrame) {
      window.cancelAnimationFrame(this._presentationFrame);
      this._presentationFrame = 0;
    }
  }
  _render() {
    if (!this._settled) {
      let e;
      let t;
      const i =
        ((e = this._card) == null
          ? undefined
          : e.getBoundingClientRect().height) || 146;
      const left = Math.max(
        12,
        Math.min(this._anchorRect.right + 24, window.innerWidth - 300 - 12),
      );
      const top = Math.max(
        12,
        Math.min(this._anchorRect.top - 4, window.innerHeight - i - 12),
      );
      const arrowTop =
        Math.max(16, Math.min(this._anchorRect.top - top + 33, i - 16)) - 4;
      if ((t = this._contextView) != null) {
        t.root.render(
          C.jsx(tz, {
            onError: this._handleRenderError,
            children: C.jsx(tW, {
              left,
              top,
              arrowTop,
              onElement: this._handleElement,
              onDismiss: this._handleDismiss,
              onHoverChange: this._handleHover,
              onFocusChange: this._handleFocus,
            }),
          }),
        );
      }
    }
  }
  _settle(e) {
    if (!this._settled) {
      this._settled = true;
      this._clearResources();
      this._onSettled(e);
    }
  }
  constructor(e, t, i, r, n, a) {
    super(a, e, t, false);
    this._anchorRect = i;
    this._canShow = r;
    this._onSettled = n;
    this._containerService = a;
    this._settled = false;
    this._presented = false;
    this._card = null;
    this._presentationFrame = 0;
    this._remainingMs = 5000;
    this._pauseReasons = new Set();
    this._handleElement = (e) => {
      this._card = e;
      if (
        !(!e || this._settled || this._presented || this._presentationFrame)
      ) {
        this._presentationFrame = window.requestAnimationFrame(() => {
          this._render();
          this._presentationFrame = window.requestAnimationFrame(() => {
            this._presentationFrame = 0;
            this._confirmPresented();
          });
        });
      }
    };
    this._handleDismiss = () => this.dismiss();
    this._handleHover = (e) => this._setPaused("hover", e);
    this._handleFocus = (e) => this._setPaused("focus", e);
    this._handleRenderError = (e, t) => {
      try {
        V.cQ(this._containerService, tP.F).captureException(
          "short_drama_onboarding_guide_error",
          e,
          {
            componentStack: t.componentStack,
          },
        );
      } catch (e) {}
      this.dismiss("failed");
    };
  }
}
tH = D.Cg(
  [
    D.Qj(5, k._),
    D.Sn("design:type", Function),
    D.Sn("design:paramtypes", [
      String,
      Number,
      typeof GuideAnchorRect === "undefined" ? Object : GuideAnchorRect,
      Function,
      Function,
      k._ === undefined ? Object : k._,
    ]),
  ],
  tH,
);
class tZ {
  start() {
    if (!this._started && !this._disposed) {
      this._started = true;
      this._disposables.add(tx.u(this._schedule));
      this._disposables.add(
        this._uiConfigurationService.onKeepAliveChange(this._schedule),
      );
      const e = new MutationObserver((e) => {
        if (e.some((e) => !this._isOwnMutation(e))) {
          this._schedule();
        }
      });
      e.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
          "data-collapsed",
          "data-main-frame-2026-onboarding-short-drama",
          "style",
          "class",
          "hidden",
          "inert",
          "aria-hidden",
          "role",
          "aria-modal",
          "open",
        ],
      });
      this._resizeObserver = new ResizeObserver(this._schedule);
      document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      );
      document.addEventListener("transitionend", this._schedule, true);
      document.addEventListener("animationend", this._schedule, true);
      window.addEventListener("resize", this._schedule);
      window.addEventListener("scroll", this._schedule, true);
      window.addEventListener("storage", this._schedule);
      this._disposables.add({
        dispose: () => {
          var t;
          e.disconnect();
          if ((t = this._resizeObserver) != null) {
            t.disconnect();
          }
          document.removeEventListener(
            "visibilitychange",
            this._handleVisibilityChange,
          );
          document.removeEventListener("transitionend", this._schedule, true);
          document.removeEventListener("animationend", this._schedule, true);
          window.removeEventListener("resize", this._schedule);
          window.removeEventListener("scroll", this._schedule, true);
          window.removeEventListener("storage", this._schedule);
        },
      });
      this._schedule();
    }
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._disposables.dispose();
      if (this._frame) {
        window.cancelAnimationFrame(this._frame);
        this._frame = 0;
      }
      const e = this._dialog;
      this._dialog = undefined;
      if (e != null) {
        e.dismiss();
      }
      if (
        e &&
        this._dialogManager.getDialog(e.id) === e &&
        this._dialogManager.currentDialogId !== e.id
      ) {
        this._dialogManager.unregister(e.id);
      }
    }
  }
  _sync() {
    if (!this._disposed) {
      let e;
      let t;
      let i;
      const r = tA();
      if (r !== this._anchor) {
        if ((e = this._resizeObserver) != null) {
          e.disconnect();
        }
        this._anchor = r;
        if (r) {
          if ((t = this._resizeObserver) != null) {
            t.observe(r);
          }
        }
      }
      if (!this._isEligible() || !r || tI()) {
        if ((i = this._dialog) != null) {
          i.dismiss();
        }
        return;
      }
      if (this._dialog) {
        this._dialog.setPageVisible(!document.hidden);
        this._dialog.updateAnchor(tO(r));
        return;
      }
      if (tF()) {
        this.dispose();
      } else if (this._canPresent() && !this._idlePending) {
        this._idlePending = true;
        this._dialogManager.runWhenIdle(() => {
          this._idlePending = false;
          if (!this._disposed && !this._dialog && this._canPresent()) {
            var e = tA();
            if (e) {
              try {
                var t = this._containerService.createInstance(
                  tH,
                  l.WU.ShortDramaOnboardingGuide,
                  l.r5[l.WU.ShortDramaOnboardingGuide],
                  tO(e),
                  () => !this._disposed && this._canPresent(),
                  (e) => {
                    if (this._dialog === t) {
                      this._dialog = undefined;
                    }
                    if (e === "failed" || e === "presented") {
                      this.dispose();
                    }
                  },
                );
                this._dialog = t;
                this._dialogManager.register(t, {
                  requiresLogin: false,
                });
                this._dialogManager.showNext().catch(this._handleFailure);
              } catch (error) {
                this._handleFailure(error);
              }
            }
          }
        });
      }
    }
  }
  _isEligible() {
    return (
      this._uiConfigurationService.hasCustomSideMenuRenderer &&
      window.location.pathname === "".concat(v.Js).concat(v.ph[_.Du.Home]) &&
      tE() === "eligible"
    );
  }
  _canPresent() {
    const e = tA();
    return (
      this._isEligible() && !document.hidden && !tF() && !!(e && tL(e)) && !tI()
    );
  }
  _isOwnMutation(e) {
    const t = (e) =>
      e instanceof Element &&
      !!e.closest("#".concat(l.WU.ShortDramaOnboardingGuide));
    if (t(e.target)) {
      return true;
    }
    const i = [...e.addedNodes, ...e.removedNodes];
    return e.type === "childList" && i.length > 0 && i.every(t);
  }
  constructor(e, t, i) {
    this._containerService = e;
    this._dialogManager = t;
    this._uiConfigurationService = i;
    this._disposables = new tN.C();
    this._frame = 0;
    this._idlePending = false;
    this._started = false;
    this._disposed = false;
    this._schedule = () => {
      if (!(this._frame || this._disposed)) {
        this._frame = window.requestAnimationFrame(() => {
          this._frame = 0;
          this._sync();
        });
      }
    };
    this._handleVisibilityChange = () => {
      var e;
      if ((e = this._dialog) != null) {
        e.setPageVisible(!document.hidden);
      }
      this._schedule();
    };
    this._handleFailure = (e) => {
      u.V.warn("[ShortDramaOnboardingController] failed to show guide", e);
      this.dispose();
    };
  }
}
class tB extends d.G {
  _prepareOnboardingSchedule() {
    return r
      ._(function* () {
        const _userPortraitDialog = this._userPortraitDialog;
        const t = this._containerService.invokeFunction(
          (e) => e.get(s.c).hasLogin,
        );
        if (_userPortraitDialog && t) {
          this._holdScheduledFlow();
          const i = this._containerService.invokeFunction((e) => e.get(o.Y));
          yield i.waitForRollout(tk.l);
          _userPortraitDialog.priority = i.enabled
            ? 8
            : l.r5[l.WU.UserPortrait];
        }
      })
      .call(this);
  }
  _holdScheduledFlow() {
    if (!this._scheduledFlowHold) {
      const e = h.Y(this._containerService, l.WU.MainFrameOnboardingFlow);
      this._scheduledFlowHold = e;
      this._dialogManager.runWhenIdle(() => {
        if (this._scheduledFlowHold === e) {
          this._scheduledFlowHold = undefined;
        }
        e.unmount();
      });
    }
  }
  _executePhase(e, t) {
    if (t === "Completed") {
      const i = this._registerDialogs();
      if (!i) {
        const r = this._containerService.invokeFunction((e) => e.get(o.Y));
        r.settleStage("model-promotion", "cancelled");
        r.settleStage("questionnaire", "cancelled");
        r.settleStage("commercial", "cancelled");
      }
      Promise.resolve(i)
        .catch((e) => {
          u.V.warn(
            "[FirstScreenDialogJob] failed to resolve first-screen dialogs",
            e,
          );
        })
        .then(() => {
          if (
            this._containerService.invokeFunction((e) => e.get(s.c).hasLogin) ||
            this._dialogManager.currentDialogId !== l.WU.ModelPromotion
          ) {
            return b.o(this._containerService);
          }
        })
        .catch((e) => {
          u.V.warn(
            "[FirstScreenDialogJob] failed to trigger login from URL parameter",
            e,
          );
        });
    }
  }
  _marketingOptions() {
    const e = this._containerService.invokeFunction((e) => e.get(o.Y));
    return {
      requiresLogin: true,
      shouldSkip: () => e.enabled && e.registrationVisit,
    };
  }
  _stageOptions(e, requiresLogin) {
    const i = this._containerService.invokeFunction((e) => e.get(o.Y));
    return {
      requiresLogin,
      shouldSkip:
        e === "model-promotion"
          ? () =>
              i.enabled &&
              this._containerService.invokeFunction((e) => e.get(s.c).hasLogin)
          : undefined,
      onSelected: () => i.beginStage(e),
      onSettled: (t) => i.settleStage(e, t),
    };
  }
  _registerDialogs() {
    const e = m.DW();
    if (e) {
      return void this._registerMarketingToolsHandoffDialogs(e);
    }
    if (!f.c8()) {
      const t = this._containerService.invokeFunction((e) => e.get(c.K));
      if (
        t.currentRoutePath !== v.ph[_.Du.ThirdPartyCallback] &&
        t.currentRoutePath !== v.ph[_.Du.CliAuth] &&
        t.currentRoutePath !== v.ph[_.Du.CliAuthOS] &&
        t.currentRoutePath !== v.ph[_.Du.DesktopDownload] &&
        !(
          global.localStorage.getItem(p.z) ||
          global.localStorage.getItem(p.C) ||
          new URL(global.location.href).searchParams.has(p.C)
        )
      ) {
        const r = this._containerService.createInstance(
          tR,
          l.WU.UserPortrait,
          l.r5[l.WU.UserPortrait],
        );
        this._userPortraitDialog = r;
        this._dialogManager.register(
          r,
          this._stageOptions("questionnaire", true),
        );
        const s = this._containerService.createInstance(
          th,
          l.WU.PublishStory,
          l.r5[l.WU.PublishStory],
        );
        this._dialogManager.register(s, this._marketingOptions());
        const d = this._containerService.createInstance(
          z,
          l.WU.BindCapCut,
          l.r5[l.WU.BindCapCut],
        );
        this._dialogManager.register(d, {
          requiresLogin: true,
        });
        const u = this._containerService.createInstance(
          td,
          l.WU.ModelPromotion,
          l.r5[l.WU.ModelPromotion],
        );
        this._dialogManager.register(
          u,
          this._stageOptions("model-promotion", false),
        );
        const h = this._containerService.createInstance(
          ey,
          l.WU.Intro,
          l.r5[l.WU.Intro],
        );
        this._dialogManager.register(
          h,
          a._(n._({}, this._stageOptions("commercial", true)), {
            shouldSkip: () =>
              this._containerService.invokeFunction((e) => {
                var t = e.get(o.Y);
                return t.enabled && t.registrationVisit;
              }),
          }),
        );
        if (
          ((e) => {
            if (e) {
              const t = tE();
              if (t) {
                return t;
              }
              try {
                let r;
                let n;
                const a =
                  (r =
                    (n = (() => {
                      try {
                        const e = global.localStorage.getItem(
                          tM.o.mainFrame2026Onboarding,
                        );
                        if (!e) {
                          return;
                        }
                        const t = JSON.parse(e);
                        if (
                          t &&
                          typeof t === "object" &&
                          (t.audience === "eligible" ||
                            t.audience === "ineligible") &&
                          typeof t.guideConsumed === "boolean"
                        ) {
                          return t;
                        }
                        return undefined;
                      } catch (e) {
                        return;
                      }
                    })()) == null
                      ? undefined
                      : n.audience) != null
                    ? r
                    : global.localStorage.getItem(tM.o.dreaminaEverLoggedIn) ===
                        "1"
                      ? "eligible"
                      : "ineligible";
                global.localStorage.setItem(
                  tM.o.shortDramaOnboardingAudience,
                  a,
                );
                return a;
              } catch (e) {
                return "ineligible";
              }
            }
          })(t.hasCustomSideMenuRenderer) === "eligible"
        ) {
          this._ensureShortDramaOnboardingController(t);
        }
        return this._dialogManager.showNext();
      }
    }
  }
  _registerMarketingToolsHandoffDialogs(e) {
    this._dialogManager
      .showNext()
      .then(() => this._dialogManager.whenIdle())
      .then(() => g.cQ(e))
      .catch(() => g.KH(e));
  }
  _ensureShortDramaOnboardingController(e) {
    if (!this._shortDramaOnboardingController) {
      const t = new tZ(this._containerService, this._dialogManager, e);
      this._shortDramaOnboardingController = t;
      this._register(t);
      t.start();
    }
  }
  constructor(e) {
    super();
    this._containerService = e;
    this._name = "first-screen-dialog";
    var t = this._containerService.invokeFunction((e) => e.get(s.c));
    this._dialogManager = new w(t, undefined, () =>
      this._prepareOnboardingSchedule(),
    );
  }
}
export { tB as c };
