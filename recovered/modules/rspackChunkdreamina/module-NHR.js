import n from "NY";
import s from "QWK";
import a from "mN";
import o from "Kt";
import r from "D5";
import l from "krt";
import c from "oF8";
import u from "oa";
import h from "bk";
import m from "z8";
import p from "dw4";
import g from "yw";
import b from "Kpt";
import _ from "lj";
import v from "wF";
import y from "o7";
import f from "YC";
import "uw5";
import "ho";
import k from "VAR";
import S from "tpI";
import C from "bT";
import T from "ED";
import w from "xb";
import j from "of9";
import N from "jxe";
import "Vx";
import R from "Ix";
import A from "Qey";
import M from "HmG";
import L from "cO";
import "rQ6";
import Q from "RwR";
import U from "xQ9";
import eo from "oD";
import el from "qN4";
import eh from "tl5";
import em from "fHC";
import ep from "z7R";
import eg from "xi";
import eb from "cY";
import e_ from "nN";
import ev from "vpF";
import eR from "RII";
import eA from "HX";
import eM from "c5";
import e$ from "rt";
import eK from "nO";
import eD from "FV";
class d extends r.O {
  _registerDynamicSharedServices() {}
  _registerChildLevelServices(e) {
    const { registry } = e;
    registry.register(l.H, c.y);
    return Promise.resolve();
  }
}
const $ = 1000 / 60;
const W = {
  particleCount: 100,
  angle: 110,
  spread: 63,
  startVelocity: 45,
  decay: 0.9,
  gravity: 3,
  particleSize: 5,
  colors: ["#00CAE0", "#009EFA", "#5264FF", "#A227FF", "#FF871A", "#FFD600"],
  durationMs: 2800,
};
const E = typeof window === "undefined" ? C.useEffect : C.useLayoutEffect;
const F = "highlighted-text-O87IET";
const P = "task-action-label-snhSUj";
function Z(subtitle) {
  return A.Ay.t(
    subtitle.starlingKey || subtitle.textFallback,
    h._(u._({}, subtitle.interpolation), {
      strong: (e) =>
        m.jsx("span", {
          className: F,
          children: e,
        }),
    }),
    subtitle.textFallback,
  );
}
const K = T.PA(function (e) {
  const { manager, panelData } = e;
  const { pointsProgress } = panelData;
  const onComplete = C.useCallback(
    (e) => manager.handlePointsAnimationComplete(e),
    [manager],
  );
  const { displayedPoints, progressPercent } = ((e) => {
    let t;
    const { pointsAnimationQueue, finalPoints, totalPoints, onComplete } = e;
    const [o, setO] = C.useState(finalPoints);
    const l = C.useCallback(() => {
      setO(finalPoints);
      onComplete(pointsAnimationQueue.map((e) => e.taskKey));
    }, [pointsAnimationQueue, finalPoints, onComplete]);
    E(() => {
      if (pointsAnimationQueue.length === 0) {
        return void setO(finalPoints);
      }
      var e;
      var t;
      var s;
      var a;
      var o = false;
      setO(pointsAnimationQueue[0].fromPoints);
      var c = (e) => {
        var t = pointsAnimationQueue[e];
        if (t && !o) {
          var n = performance.now();
          setO(t.fromPoints);
          var d = (u) => {
            if (!o) {
              var h = Math.min((u - n) / 600, 1);
              var m = 1 - (1 - h) ** 3;
              setO(t.fromPoints + (t.toPoints - t.fromPoints) * m);
              if (h < 1) {
                s = requestAnimationFrame(d);
                return;
              }
              var p = e + 1;
              if (p < pointsAnimationQueue.length) {
                a = setTimeout(() => c(p), 120);
                return;
              }
              l();
            }
          };
          s = requestAnimationFrame(d);
        }
      };
      a =
        ((e = (t = window).matchMedia) == null
          ? undefined
          : e.call(t, "(prefers-reduced-motion: reduce)").matches) === true
          ? setTimeout(l, 500)
          : setTimeout(() => {
              s = requestAnimationFrame(() => c(0));
            }, 500);
      return () => {
        o = true;
        if (s !== undefined) {
          cancelAnimationFrame(s);
        }
        if (a !== undefined) {
          clearTimeout(a);
        }
      };
    }, [pointsAnimationQueue, l, finalPoints]);
    return {
      displayedPoints: Math.round(o),
      progressPercent: Number.isFinite(
        (t = (o / Math.max(totalPoints, 1)) * 100),
      )
        ? Math.max(0, Math.min(t, 100))
        : 0,
    };
  })({
    pointsAnimationQueue: manager.store.pointsAnimationQueue,
    finalPoints: pointsProgress.earnedPoints,
    totalPoints: pointsProgress.totalPoints,
    onComplete,
  });
  return m.jsxs("div", {
    className: "package-header-xWpolJ",
    children: [
      m.jsxs("div", {
        className: "package-header-top-EW7stM",
        children: [
          m.jsx(R.A, {
            content: panelData.title,
            position: "top",
            checkOverflow: true,
            className: "package-title-tooltip-Hx6Fk9",
            getPopupContainer: () => document.body,
            children: m.jsx("div", {
              className: "package-title-aDvN5d",
              children: panelData.title,
            }),
          }),
          m.jsx(R.A, {
            content: Z(panelData.subtitle),
            position: "top",
            checkOverflow: true,
            className: "package-description-tooltip-yimcyO",
            getPopupContainer: () => document.body,
            children: m.jsx("div", {
              className: "package-description-mIZ4dH",
              children: Z(panelData.subtitle),
            }),
          }),
          pointsProgress.visible || panelData.tooltip
            ? m.jsxs("div", {
                className: "package-reward-A8NyjS",
                children: [
                  pointsProgress.visible
                    ? m.jsxs(m.Fragment, {
                        children: [
                          m.jsx("span", {
                            className: "credit-icon-ssbWZQ",
                            children: "✦",
                          }),
                          m.jsx("span", {
                            className: "package-reward-value-hpt1jC",
                            children: ""
                              .concat(displayedPoints, " / ")
                              .concat(pointsProgress.totalPoints),
                          }),
                        ],
                      })
                    : null,
                  panelData.tooltip
                    ? m.jsx(R.A, {
                        content: panelData.tooltip,
                        position: "top",
                        className: "package-reward-tooltip-bpkn33",
                        getPopupContainer: () => document.body,
                        triggerProps: {
                          popupAlign: {
                            top: 8,
                          },
                        },
                        children: m.jsx(g.G_L, {
                          size: 10,
                          className: "package-reward-info-icon-IFFhaQ",
                        }),
                      })
                    : null,
                ],
              })
            : null,
        ],
      }),
      pointsProgress.visible
        ? m.jsx("div", {
            className: "progress-track-h5PEhj",
            children: m.jsx("div", {
              className: "progress-fill-V9p9xW",
              style: {
                width: "".concat(progressPercent, "%"),
              },
            }),
          })
        : null,
    ],
  });
});
function useO(e) {
  const { value } = e;
  const [i, setI] = C.useState(value);
  const [s, setS] = C.useState(null);
  C.useEffect(() => {
    if (value !== i) {
      setS(i);
      var e = window.setTimeout(() => {
        setI(value);
        setS(null);
      }, 300);
      return () => window.clearTimeout(e);
    }
  }, [i, value]);
  return m.jsx("span", {
    className: "countdown-digit-DGbdbY",
    children:
      s === null
        ? i
        : m.jsxs(m.Fragment, {
            children: [
              m.jsx("span", {
                className: "countdown-digit-outgoing-Ihhj81",
                children: s,
              }),
              m.jsx("span", {
                className: "countdown-digit-incoming-miQR1t",
                children: value,
              }),
            ],
          }),
  });
}
function J(e) {
  const { seconds } = e;
  const i = [
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ]
    .map((e) => e.toString().padStart(2, "0"))
    .join(":");
  return m.jsxs("span", {
    role: "timer",
    "aria-live": "off",
    "aria-label": i,
    className: "task-countdown-y2Csvf",
    children: [
      m.jsx(g._Ll, {
        className: "countdown-icon-VOy_tR",
        "aria-hidden": true,
      }),
      m.jsx("span", {
        className: "countdown-digits-T8Ir_M",
        "aria-hidden": true,
        children: [...i].map((e, t) => {
          if (e === ":") {
            return m.jsx(
              "span",
              {
                className: "countdown-colon-m5kZRP",
                children: ":",
              },
              t,
            );
          }
          return m.jsx(
            useO,
            {
              value: e,
            },
            t,
          );
        }),
      }),
    ],
  });
}
const D = "media-placeholder-CcnzbX";
const H = C.memo(function (e) {
  const { manager, popup } = e;
  const [n, setN] = C.useState();
  const [a, setA] = C.useState(false);
  const mediaType = popup.media.mediaType;
  const l = mediaType === "image" ? popup.media.imageUri : popup.media.videoVid;
  C.useEffect(() => {
    var e = false;
    setN(undefined);
    setA(true);
    var i =
      mediaType === "image"
        ? {
            mediaType: "image",
            imageUri: l,
          }
        : {
            mediaType: "video",
            videoVid: l,
          };
    manager
      .resolveGuideMedia(i)
      .then((t) => {
        if (!e) {
          setN(t);
        }
      })
      .finally(() => {
        if (!e) {
          setA(false);
        }
      });
    return () => {
      e = true;
    };
  }, [manager, mediaType, l]);
  return m.jsxs("div", {
    className: "card-ph0uo0",
    children: [
      m.jsxs("div", {
        className: "media-Arq2pr",
        children: [
          a
            ? m.jsx("div", {
                className: D,
              })
            : null,
          a || (n == null ? undefined : n.mediaType) !== "image"
            ? null
            : m.jsx("img", {
                className: "image-gLUvvD",
                src: L.m(n.url, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJaRWRHZW1*N%1Xc*FWel$3$2xoSmRsa3lPWFJq%npsM$ds-zFNR041T1RCWldFNXl%RmRrT$d*WF$teE1XR%oyWTBo$2QweH$$bnBs%jBaN$dqTldlZz09",
                }),
                alt: popup.title,
                crossOrigin: "anonymous",
              }),
          a || (n == null ? undefined : n.mediaType) !== "video"
            ? null
            : m.jsx("video", {
                className: "video-hvV9z9",
                src: L.m(n.url, null, {
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
                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJaRWRHZW1*N%1Xc*FWel$3$2xoSmRsa3lPWFJq%npsM$ds-zFNR041T1RCWldFNXl%RmRrT$d*WF$teE1XR%oyWTBo$2QweH$$bnBs%jBaN$dqTldlZz09",
                }),
                poster: n.coverUrl,
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                crossOrigin: "anonymous",
              }),
          a || n
            ? null
            : m.jsx("div", {
                className: D,
              }),
        ],
      }),
      m.jsx("div", {
        className: "description-MagRXw",
        children: popup.description,
      }),
    ],
  });
});
const I = {
  "--completion-icon-transition-duration": `${450}ms`,
  "--completion-icon-exit-delay": `${5000}ms`,
};
function V(e) {
  return A.Ay.t(
    e.starlingKey || e.textFallback,
    h._(u._({}, e.interpolation), {
      strong: (e) =>
        m.jsx("span", {
          className: F,
          children: e,
        }),
    }),
    e.textFallback,
  );
}
function X(e) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const i = e.action.type === "disabled";
  const n = e.taskStatus === "success" && !!e.benefitReward;
  return w("task-action-DPlAcc", {
    "task-action-primary-hrT0Pc": n && !i,
    "task-action-secondary-icfLej": !n && !i,
    "task-action-disabled-YJjZmH": i,
    "task-action-hover-only-TaIOR9": e.action.type === "hover",
    "task-action-celebrating-eQfUUm": t,
  });
}
function B(e) {
  return e.taskStatus === "success" && e.action.type !== "execute";
}
const z = T.PA(function (e) {
  let t;
  let i;
  const { manager } = e;
  const {
    panelData,
    panelVisible,
    enhancementEnabled,
    completedGroupExpanded,
    celebrationTaskKey,
  } = manager.store;
  const c = manager.store.celebrationActive && completedGroupExpanded;
  const panelPresentationVersion = manager.store.panelPresentationVersion;
  const id = C.useId();
  const bRef = C.useRef(null);
  C.useEffect(() => {
    if (panelVisible) {
      manager.handlePanelShown();
    }
  }, [manager, panelData, panelVisible, panelPresentationVersion]);
  C.useEffect(() => {
    if (c) {
      var e;
      var t = window.setTimeout(() => {
        var t;
        var i =
          (t = bRef.current) == null
            ? undefined
            : t.querySelector('[data-task-center-celebrating="true"]');
        e = i
          ? (function (e) {
              const t =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};
              if (
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                return () => undefined;
              }
              const i = document.createElement("canvas");
              const n = i.getContext("2d");
              if (!n) {
                return () => undefined;
              }
              const s = u._({}, W, t);
              const a = window.devicePixelRatio || 1;
              const window_innerWidth = window.innerWidth;
              const window_innerHeight = window.innerHeight;
              i.width = window_innerWidth * a;
              i.height = window_innerHeight * a;
              i.style.cssText = "position:fixed;top:0;left:0;width:"
                .concat(window_innerWidth, "px;height:")
                .concat(
                  window_innerHeight,
                  "px;pointer-events:none;z-index:9999",
                );
              n.scale(a, a);
              document.body.appendChild(i);
              const l = e.getBoundingClientRect();
              const c = Array.from(
                {
                  length: s.particleCount,
                },
                () => ({
                  x: l.left + l.width / 2,
                  y: l.top + l.height / 2,
                  angle:
                    ((s.angle + (Math.random() - 0.5) * s.spread) * Math.PI) /
                    180,
                  velocity: s.startVelocity * (0.5 + Math.random()),
                  wobble: Math.random() * Math.PI * 2,
                  tilt: Math.random() * Math.PI,
                  round: Math.random() < 0.5,
                  color: s.colors[Math.floor(Math.random() * s.colors.length)],
                }),
              );
              const s_particleSize = s.particleSize;
              const h = {
                id: 0,
              };
              const m = (e) => {
                if (h.startedAt == null) {
                  h.startedAt = e;
                }
                var t;
                var a = e - h.startedAt;
                var l = Math.min(
                  (e - ((t = h.previousAt) != null ? t : e - $)) / $,
                  2,
                );
                h.previousAt = e;
                n.clearRect(0, 0, window_innerWidth, window_innerHeight);
                n.globalAlpha = Math.max(0, 1 - a / s.durationMs);
                c.forEach((e) => {
                  e.x += Math.cos(e.angle) * e.velocity * l;
                  e.y += (s.gravity - Math.sin(e.angle) * e.velocity) * l;
                  e.velocity *= s.decay ** l;
                  e.wobble += 0.1 * l;
                  e.tilt += 0.1 * l;
                  n.save();
                  n.translate(
                    e.x + 10 * Math.cos(e.wobble),
                    e.y + 10 * Math.sin(e.wobble),
                  );
                  n.rotate(e.tilt);
                  n.fillStyle = e.color;
                  if (e.round) {
                    n.beginPath();
                    n.ellipse(
                      0,
                      0,
                      0.6 * s_particleSize,
                      s_particleSize,
                      0,
                      0,
                      2 * Math.PI,
                    );
                    n.fill();
                  } else {
                    n.fillRect(
                      -s_particleSize,
                      -(0.5 * s_particleSize),
                      2 * s_particleSize,
                      s_particleSize,
                    );
                  }
                  n.restore();
                });
                if (a < s.durationMs) {
                  h.id = requestAnimationFrame(m);
                } else {
                  i.remove();
                }
              };
              h.id = requestAnimationFrame(m);
              return () => {
                cancelAnimationFrame(h.id);
                i.remove();
              };
            })(i)
          : undefined;
      }, 200);
      return () => {
        window.clearTimeout(t);
        if (e != null) {
          e();
        }
      };
    }
  }, [c, celebrationTaskKey]);
  if (!panelData) {
    return null;
  }
  const _ = enhancementEnabled
    ? panelData.tasks.filter((e) => !B(e))
    : panelData.tasks;
  const v = enhancementEnabled
    ? ((t = panelData.tasks.filter(B)),
      [
        ...(i = t.every((e) => e.completedAtMs !== undefined)
          ? [...t].sort((e, t) => {
              var i;
              var n;
              return (
                ((i = e.completedAtMs) != null ? i : 0) -
                ((n = t.completedAtMs) != null ? n : 0)
              );
            })
          : t).filter((e) => e.taskKey !== celebrationTaskKey),
        ...i.filter((e) => e.taskKey === celebrationTaskKey),
      ])
    : [];
  const y = (e, t) => {
    var seconds = t ? undefined : manager.store.remainingSeconds.get(e.taskKey);
    var s = t && c && e.taskKey === celebrationTaskKey;
    var a = m.jsx("span", {
      className: "task-title-fonS96",
      children: V(e.title),
    });
    var o =
      e.popup || e.tooltip
        ? a
        : m.jsx(R.A, {
            content: V(e.title),
            position: "top",
            checkOverflow: true,
            className: "task-title-tooltip-KSPyBD",
            getPopupContainer: () => document.body,
            children: a,
          });
    var r = m.jsx("div", {
      className: "task-description-zpCT6g",
      children: V(e.subtitle),
    });
    var d =
      e.popup || e.tooltip
        ? r
        : m.jsx(R.A, {
            content: V(e.subtitle),
            position: "top",
            checkOverflow: true,
            className: "task-description-tooltip-EBy4HD",
            getPopupContainer: () => document.body,
            children: r,
          });
    var p = m.jsxs(
      "div",
      {
        className: "task-row-xDA0YH",
        children: [
          m.jsxs("div", {
            className: "task-info-zbx_Rh",
            children: [o, d],
          }),
          seconds !== undefined
            ? m.jsx(J, {
                seconds,
              })
            : e.action.type === "hover"
              ? m.jsx(
                  "span",
                  h._(u._({}, M.m), {
                    className: X(e),
                    children: m.jsx(M.P, {
                      className: P,
                      label: e.action.label,
                    }),
                  }),
                )
              : m.jsxs(
                  "button",
                  h._(u._({}, M.m), {
                    type: "button",
                    "data-task-center-celebrating": s || undefined,
                    className: X(e, s),
                    style: s ? I : undefined,
                    disabled: e.action.type === "disabled",
                    onClick:
                      e.action.type === "execute"
                        ? () => void manager.handleTaskAction(e)
                        : undefined,
                    children: [
                      s
                        ? m.jsx("span", {
                            className: "completion-check-IcUZZ5",
                            "aria-hidden": true,
                            children: m.jsx(g.nmw, {
                              size: 16,
                              color: "var(--brand-main-default)",
                            }),
                          })
                        : null,
                      m.jsx(M.P, {
                        className: P,
                        label: e.action.label,
                      }),
                    ],
                  }),
                ),
        ],
      },
      e.taskKey,
    );
    if (e.popup) {
      return m.jsx(
        k.A,
        {
          content: m.jsx(H, {
            manager,
            popup: e.popup,
          }),
          trigger: "hover",
          blurToHide: true,
          position: "top",
          showArrow: false,
          className: "task-guide-popover-JzY8mt",
          triggerProps: {
            updateOnScroll: true,
            popupAlign: {
              top: 8,
              bottom: 8,
            },
            style: {
              maxWidth: "unset",
            },
          },
          children: p,
        },
        e.taskKey,
      );
    }
    if (e.tooltip) {
      return m.jsx(
        R.A,
        {
          content: e.tooltip,
          position: "top",
          className: "task-reward-tooltip-ZQq0Lq",
          getPopupContainer: () => document.body,
          children: p,
        },
        e.taskKey,
      );
    }
    return p;
  };
  return m.jsxs("div", {
    ref: bRef,
    className: w("task-center-panel-J_KVHj", {
      "task-center-panel-enhanced-gNcgHr": enhancementEnabled,
    }),
    onClick: (e) => e.stopPropagation(),
    children: [
      m.jsx(K, {
        manager,
        panelData,
      }),
      m.jsxs("div", {
        className: "task-list-dnFq33",
        children: [
          _.map((e) => y(e, false)),
          v.length > 0
            ? m.jsxs("div", {
                className: "completed-group-dx3xVF",
                children: [
                  m.jsx("div", {
                    className: "completed-group-divider-VO3e21",
                    "aria-hidden": true,
                  }),
                  m.jsxs("button", {
                    type: "button",
                    className: "completed-group-toggle-ph5hIF",
                    "aria-expanded": completedGroupExpanded,
                    "aria-controls": id,
                    onClick: () => manager.toggleCompletedGroup(),
                    children: [
                      A.Ay.t("web_agent_task_finish", {}, "已完成"),
                      m.jsx(g.ghC, {
                        size: 14,
                        className: w("completed-group-chevron-GrgHwi", {
                          "completed-group-chevron-expanded-z9zdGS":
                            completedGroupExpanded,
                        }),
                        "aria-hidden": true,
                      }),
                    ],
                  }),
                  m.jsx(
                    "div",
                    h._(
                      u._(
                        {
                          id,
                          className: w("completed-group-content-go0UXF", {
                            "completed-group-content-collapsed-GV02cg":
                              !completedGroupExpanded,
                          }),
                          "aria-hidden": !completedGroupExpanded,
                        },
                        completedGroupExpanded
                          ? {}
                          : {
                              inert: "",
                            },
                      ),
                      {
                        children: m.jsx("div", {
                          className: "completed-group-rows-LG_G5J",
                          children: v.map((e) => y(e, true)),
                        }),
                      },
                    ),
                  ),
                ],
              })
            : null,
        ],
      }),
    ],
  });
});
const q = T.PA(function (e) {
  let t;
  const { manager, className } = e;
  const currentCompletionToast = manager.store.currentCompletionToast;
  C.useEffect(() => {
    if (currentCompletionToast) {
      manager.handleCompletionToastShown();
      var e = setTimeout(() => manager.handleCompletionToastExpired(), 5000);
      return () => clearTimeout(e);
    }
  }, [manager, currentCompletionToast]);
  if (currentCompletionToast) {
    return m.jsx("div", {
      className: w("task-completion-toast-Vm_p1f", className),
      role: "status",
      children:
        ((t = currentCompletionToast.content),
        A.Ay.t(
          t.starlingKey || t.textFallback,
          h._(u._({}, t.interpolation), {
            strong: (e) =>
              m.jsx("span", {
                className: "highlighted-text-wccDTS",
                children: e,
              }),
          }),
          t.textFallback,
        )),
    });
  }
  return null;
});
const G = T.PA(function (e) {
  const { manager, menuWrapperPlacement } = e;
  const n = U.Z();
  if (!manager.store.currentCompletionToast || n) {
    return null;
  }
  if (manager.store.enhancementEnabled) {
    return m.jsx(Q.A, {
      popupVisible: true,
      trigger: [],
      popup: () =>
        m.jsx(q, {
          manager,
        }),
      getPopupContainer: () => document.body,
      className: "task-completion-toast-layer-S2Kv4U",
      position: menuWrapperPlacement === "top-actions" ? "br" : "right",
      popupAlign: {
        bottom: 8,
        right: 8,
      },
      boundaryOffset: {
        left: 8,
        top: 8,
      },
      duration: 0,
      children: m.jsx("span", {
        className: "task-completion-toast-anchor-SHT1AU",
        "aria-hidden": "true",
      }),
    });
  }
  return m.jsx(q, {
    manager,
    className: w("task-completion-toast-inline-Vye5KZ", {
      "task-completion-toast-top-actions-fkgiXd":
        menuWrapperPlacement === "top-actions",
    }),
  });
});
const Y = {
  clickToClose: false,
  popupAlign: {
    right: 26,
  },
  boundaryOffset: {
    top: 8,
  },
};
const boundaryOffset = {
  left: 8,
  top: 8,
};
const style = {
  maxWidth: "none",
};
const offset = [-6, 6];
const dotStyle = {
  width: 6,
  minWidth: 6,
  height: 6,
  padding: 0,
  background: "var(--brand-main-default)",
  border: 0,
  borderRadius: "50%",
};
const es = T.PA(function (e) {
  const { children, manager, menuWrapperPlacement } = e;
  const enabled = menuWrapperPlacement === "top-actions";
  const {
    entryVisible,
    panelVisible,
    bubbleVisible,
    panelData,
    enhancementEnabled,
  } = manager.store;
  const d =
    bubbleVisible && !!(panelData == null ? undefined : panelData.bubbleText);
  const uRef = C.useRef(null);
  const hRef = C.useRef(null);
  const [p, g] = j.BJ({
    anchorRef: uRef,
    enabled,
  });
  const bottom = [p, 8];
  C.useLayoutEffect(() => {
    if (enabled && entryVisible && enhancementEnabled) {
      g();
      window.addEventListener("resize", g);
      var e;
      var t = new ResizeObserver(g);
      if ((e = uRef.current) == null ? undefined : e.parentElement) {
        t.observe(uRef.current.parentElement);
      }
      return () => {
        window.removeEventListener("resize", g);
        t.disconnect();
      };
    }
  }, [enabled, entryVisible, enhancementEnabled, panelVisible, g]);
  C.useLayoutEffect(() => {
    if (panelVisible && enhancementEnabled) {
      var e;
      if ((e = hRef.current) != null) {
        e.updatePopupPosition();
      }
    }
  }, [panelVisible, enhancementEnabled, p]);
  const onVisibleChange = C.useCallback(
    (e) => {
      if (e) {
        g();
      }
      manager.handlePanelVisibleChange(e);
    },
    [manager, g],
  );
  if (!entryVisible) {
    return null;
  }
  const v = m.jsxs("div", {
    ref: uRef,
    className: w("task-center-entry-Gjw2G5", {
      "task-center-entry-top-actions-al78By": enabled,
    }),
    onFocus: () => {
      g();
      manager.handlePanelHover(true);
    },
    onMouseEnter: () => {
      g();
      manager.handlePanelHover(true);
    },
    onBlur: () => manager.handlePanelHover(false),
    onMouseLeave: () => manager.handlePanelHover(false),
    onClickCapture: () => {
      if (manager.store.enhancementEnabled) {
        manager.handlePanelVisibleChange(true);
      }
    },
    onKeyDown: (e) => {
      if (e.key === "Escape" && manager.store.enhancementEnabled) {
        manager.handlePanelVisibleChange(false);
      }
    },
    children: [
      enabled
        ? m.jsx(S.A, {
            dot: true,
            count: +!!d,
            offset,
            dotStyle,
            className: "task-center-badge-atCCjp",
            children,
          })
        : children,
      d && !enabled && (panelData == null ? undefined : panelData.bubbleText)
        ? m.jsx(N.u, {
            className: "task-center-bubble-bV1fXz",
            text: panelData.bubbleText,
          })
        : null,
      m.jsx(G, {
        manager,
        menuWrapperPlacement,
      }),
    ],
  });
  if (panelData) {
    return m.jsx(k.A, {
      ref: hRef,
      content: m.jsx("div", {
        onFocus: () => manager.handlePanelHover(true),
        onBlur: () => manager.handlePanelHover(false),
        onKeyDown: (e) => {
          if (e.key === "Escape" && manager.store.enhancementEnabled) {
            var t;
            var n;
            if (
              !(
                (n = uRef.current) == null ||
                (t = n.querySelector('button, [role="button"]')) == null
              )
            ) {
              t.focus();
            }
            manager.handlePanelVisibleChange(false);
          }
        },
        onMouseEnter: () => manager.handlePanelHover(true),
        onMouseLeave: () => manager.handlePanelHover(false),
        children: m.jsx(z, {
          manager,
        }),
      }),
      trigger: "click",
      popupVisible: panelVisible,
      onVisibleChange,
      position: enabled ? "br" : "right",
      showArrow: false,
      style,
      className: "task-center-popover-YJfNFc",
      triggerProps: enabled
        ? {
            clickToClose: !manager.store.enhancementEnabled,
            classNames: "task-center-panel",
            duration: 160,
            popupAlign: {
              bottom,
            },
            boundaryOffset,
          }
        : Y,
      children: v,
    });
  }
  return v;
});
class ea {
  present(e, t, i, s, a) {
    return n
      ._(function* () {
        try {
          yield this._exclusively(
            "dreamina_onboarding_notice:".concat(e, ":").concat(t),
            () =>
              n
                ._(function* () {
                  if (!s.aborted) {
                    const n = window.localStorage;
                    this._uiState.syncFromStorage();
                    const o = (taskKey) =>
                      "dreamina_onboarding_notice_receipt:".concat(
                        JSON.stringify([e, t, taskKey]),
                      );
                    const r = i.filter((e) => {
                      if (n.getItem(o(e.taskKey)) === e.completionId) {
                        return false;
                      }
                      var i;
                      var s =
                        ((i = this._uiState.getTaskState(t, e.taskKey)) == null
                          ? undefined
                          : i.completionNoticeId) === e.completionId;
                      if (s) {
                        n.setItem(o(e.taskKey), e.completionId);
                      }
                      return !s;
                    });
                    if (r.length !== 0) {
                      yield new Promise((resolve) => {
                        var i = new Set(r.map((e) => this._key(t, e.taskKey)));
                        var l = () => {
                          s.removeEventListener("abort", l);
                          i.forEach((e) => this._acknowledgements.delete(e));
                          resolve();
                        };
                        s.addEventListener("abort", l, {
                          once: true,
                        });
                        r.forEach((e) => {
                          var s = this._key(t, e.taskKey);
                          this._acknowledgements.set(s, () => {
                            try {
                              n.setItem(o(e.taskKey), e.completionId);
                              this._uiState.markCompletionNoticeSeen(
                                t,
                                e.taskKey,
                                e.completionId,
                              );
                            } catch (e) {
                              l();
                              return;
                            }
                            this._acknowledgements.delete(s);
                            i.delete(s);
                            if (i.size === 0) {
                              l();
                            }
                          });
                        });
                        try {
                          a(r);
                        } catch (e) {
                          l();
                        }
                      });
                    }
                  }
                })
                .call(this),
            s,
          );
        } catch (e) {}
      })
      .call(this);
  }
  acknowledge(e, t) {
    let i;
    if ((i = this._acknowledgements.get(this._key(e, t))) != null) {
      i();
    }
  }
  _key(e, t) {
    return JSON.stringify([e, t]);
  }
  constructor(
    e,
    t = (e, t, signal) => {
      if (navigator.locks) {
        return navigator.locks.request(
          e,
          {
            signal,
          },
          t,
        );
      }
      return Promise.resolve();
    },
  ) {
    this._uiState = e;
    this._exclusively = t;
    this._acknowledgements = new Map();
  }
}
class er {
  update(e, t) {
    this._expiresAtMs = t;
    this._tasks = e;
    if (this._timer !== undefined) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
    if (
      Number.isFinite(t) ||
      [...e.values()].some((e) => Number.isFinite(e.availableAtMs))
    ) {
      this._timer = setInterval(() => this.tick(), 1000);
    }
    this.tick();
  }
  tick() {
    const requestedAt = this._options.now();
    if (this._expiresAtMs !== undefined && requestedAt >= this._expiresAtMs) {
      this.dispose();
      if ((r = (l = this._options).onExpire) != null) {
        r.call(l);
      }
      return;
    }
    if (
      ((a = (o = this._options).active) == null ? undefined : a.call(o)) !==
      false
    ) {
      const t = new Map();
      let i = false;
      for (const [n, s] of this._tasks) {
        var a;
        var o;
        var r;
        var l;
        let c;
        const deadline = s.availableAtMs;
        if (
          deadline !== undefined &&
          Number.isFinite(deadline) &&
          !(deadline <= 0)
        ) {
          const u = Math.max(0, Math.ceil((deadline - requestedAt) / 1000));
          t.set(n, u);
          const h = this._requestedDeadlines.get(n);
          const m =
            (h == null ? undefined : h.deadline) === deadline ? h : undefined;
          const p = [0, 2000, 5000, 10000];
          const g = (c = m == null ? undefined : m.attempts) != null ? c : 0;
          if (
            u === 0 &&
            g < p.length &&
            (!m || requestedAt - m.requestedAt >= p[g])
          ) {
            this._requestedDeadlines.set(n, {
              deadline,
              attempts: g + 1,
              requestedAt,
            });
            i = true;
          }
        }
      }
      this._options.onTick(t);
      if (i) {
        this._options.refresh();
      }
    }
  }
  dispose() {
    if (this._timer !== undefined) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
    this._expiresAtMs = undefined;
    this._tasks = new Map();
    this._requestedDeadlines.clear();
    this._options.onTick(new Map());
  }
  constructor(e) {
    this._options = e;
    this._tasks = new Map();
    this._requestedDeadlines = new Map();
  }
}
function ec(e) {
  if (
    e &&
    typeof e === "object" &&
    "visible" in e &&
    "updatedAt" in e &&
    typeof e.visible === "boolean" &&
    typeof e.updatedAt === "number" &&
    Number.isFinite(e.updatedAt)
  ) {
    return {
      visible: e.visible,
      updatedAt: e.updatedAt,
    };
  }
}
function ed(e) {
  if (
    e &&
    typeof e === "object" &&
    "startedAt" in e &&
    "eligible" in e &&
    "exposedAt" in e &&
    "count" in e &&
    typeof e.startedAt === "number" &&
    typeof e.exposedAt === "number" &&
    typeof e.count === "number" &&
    typeof e.eligible === "boolean" &&
    Number.isFinite(e.startedAt) &&
    Number.isFinite(e.exposedAt) &&
    Number.isInteger(e.count) &&
    e.count >= 0
  ) {
    return {
      startedAt: e.startedAt,
      eligible: e.eligible,
      exposedAt: e.exposedAt,
      count: e.count,
    };
  }
}
class eu {
  start() {
    return n
      ._(function* () {
        yield this.recordPresence();
        if (!this._disposed) {
          this._heartbeat = setInterval(
            () => void this.recordPresence(),
            30000,
          );
        }
      })
      .call(this);
  }
  recordPresence() {
    return n
      ._(function* () {
        yield this._safelyExclusive(() => {
          var startedAt = this._environment.now();
          var t = this._environment.visible();
          var i = 0;
          var n = false;
          for (
            var { storage } = this._environment, a = 0;
            a < storage.length;
            a += 1
          ) {
            var o;
            var r;
            var l = storage.key(a);
            if (
              l == null
                ? undefined
                : l.startsWith("".concat(this._prefix, ":tab:"))
            ) {
              var c = ec(
                JSON.parse((r = storage.getItem(l)) != null ? r : "null"),
              );
              if (c) {
                var d = c.updatedAt + 90000 * !!c.visible;
                i = Math.max(i, d);
                if (!n) {
                  n = c.visible && d > startedAt;
                }
              }
            }
          }
          var u = ed(
            JSON.parse(
              (o = storage.getItem(this._prefix)) != null ? o : "null",
            ),
          );
          if (
            !u ||
            (t &&
              !n &&
              i > 0 &&
              startedAt - i >= this._revisitDelayMs &&
              u.startedAt < i)
          ) {
            var h;
            var m = {
              startedAt,
              eligible: !!u,
              exposedAt: 0,
              count: (h = u == null ? undefined : u.count) != null ? h : 0,
            };
            storage.setItem(this._prefix, JSON.stringify(m));
          }
          this._writePresence(t);
        });
      })
      .call(this);
  }
  showRevisit(e) {
    return n
      ._(function* () {
        yield this._safelyExclusive(() => {
          if (this._environment.visible()) {
            var t;
            var { storage } = this._environment;
            var n = ed(
              JSON.parse(
                (t = storage.getItem(this._prefix)) != null ? t : "null",
              ),
            );
            if (
              (n == null ? undefined : n.eligible) &&
              !n.exposedAt &&
              !(n.count >= 3)
            ) {
              storage.setItem(
                this._prefix,
                JSON.stringify(
                  h._(u._({}, n), {
                    count: n.count + 1,
                    exposedAt: this._environment.now(),
                  }),
                ),
              );
              if (!e()) {
                storage.setItem(this._prefix, JSON.stringify(n));
              }
            }
          }
        });
      })
      .call(this);
  }
  leave() {
    try {
      this._writePresence(false);
    } catch (e) {}
  }
  dispose() {
    this._disposed = true;
    this.leave();
    if (this._heartbeat !== undefined) {
      clearInterval(this._heartbeat);
    }
  }
  _writePresence(visible) {
    let t;
    const i = ec(
      JSON.parse(
        (t = this._environment.storage.getItem(this._presenceKey)) != null
          ? t
          : "null",
      ),
    );
    if (visible || (i == null ? undefined : i.visible) !== false) {
      this._environment.storage.setItem(
        this._presenceKey,
        JSON.stringify({
          visible,
          updatedAt: this._environment.now(),
        }),
      );
    }
  }
  _safelyExclusive(e) {
    return n
      ._(function* () {
        try {
          yield this._environment.exclusively(this._prefix, () => {
            if (!this._disposed) {
              e();
            }
          });
        } catch (e) {}
      })
      .call(this);
  }
  constructor(e, t, i) {
    this._environment = i;
    this._disposed = false;
    this._revisitDelayMs =
      typeof i.revisitDelayMs === "number" &&
      Number.isFinite(i.revisitDelayMs) &&
      i.revisitDelayMs > 0
        ? i.revisitDelayMs
        : 3600000;
    this._prefix = "dreamina_onboarding_visit:"
      .concat(encodeURIComponent(e), ":")
      .concat(encodeURIComponent(t));
    this._presenceKey = "".concat(this._prefix, ":tab:").concat(i.tabId);
  }
}
const ef = new Set([
  "video",
  "image",
  "audio",
  "agentic",
  "digitalHuman",
  "actionCopy",
]);
function ek(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) {
    return "";
  }
  const i = typeof e.textFallback === "string" ? e.textFallback : "";
  const n =
    typeof e.starlingKey === "string" && e.starlingKey ? e.starlingKey : i;
  if (n) {
    return A.Ay.t(n, t, i);
  }
  return "";
}
function eS(e) {
  const interpolation =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const textFallback =
    typeof (e == null ? undefined : e.textFallback) === "string"
      ? e.textFallback
      : "";
  return {
    starlingKey:
      typeof (e == null ? undefined : e.starlingKey) === "string" &&
      e.starlingKey
        ? e.starlingKey
        : undefined,
    textFallback,
    interpolation,
  };
}
function eC(e) {
  let t;
  return !!(
    e &&
    ((t = e.rewardType) === "points" || t === "benefit") &&
    typeof e.amount === "number" &&
    Number.isFinite(e.amount)
  );
}
function eT(e) {
  let t;
  if (
    typeof (e == null ? undefined : e.taskKey) === "string" &&
    e.taskKey &&
    ((t = e.status) === "in_progress" || t === "success") &&
    Array.isArray(e.rewards)
  ) {
    const i = e.rewards.filter(eC);
    if (i.length > 0) {
      return h._(u._({}, e), {
        taskKey: e.taskKey,
        status: e.status,
        rewards: i,
      });
    }
    return undefined;
  }
}
function ew(e) {
  return {
    rewardType: e.rewardType,
    amount: Math.max(e.amount, 0),
    remainingCount:
      typeof e.remainingCount === "number" && Number.isFinite(e.remainingCount)
        ? Math.max(e.remainingCount, 0)
        : undefined,
    modelKey:
      typeof e.modelKey === "string" && e.modelKey ? e.modelKey : undefined,
    validDays:
      typeof e.validDays === "number" && Number.isFinite(e.validDays)
        ? Math.max(e.validDays, 0)
        : 0,
  };
}
function ex(e) {
  let t;
  let i;
  let n;
  let s;
  let a;
  let o;
  let r;
  let l;
  const c = e.rewards.map(ew);
  const pointsReward = c.find((e) => e.rewardType === "points");
  const benefitReward = c.find((e) => e.rewardType === "benefit");
  const h =
    (i = pointsReward == null ? undefined : pointsReward.amount) != null
      ? i
      : 0;
  const m =
    (n = benefitReward == null ? undefined : benefitReward.amount) != null
      ? n
      : 0;
  const validDays1 =
    (s = pointsReward == null ? undefined : pointsReward.validDays) != null
      ? s
      : 0;
  const g =
    (a = benefitReward == null ? undefined : benefitReward.validDays) != null
      ? a
      : 0;
  const b = {
    num: pointsReward ? h : m,
    signuptrialcount: m,
    tasktrialcount: m,
    validDays1,
    validDays2: g,
  };
  const _ =
    typeof e.availableAtMs === "number" &&
    Number.isFinite(e.availableAtMs) &&
    e.availableAtMs > 0
      ? undefined
      : ((e, t) => {
          if (e) {
            switch (e.jumpType) {
              case "generator":
                const { generatorType } = e;
                if (
                  typeof generatorType === "string" &&
                  ef.has(generatorType)
                ) {
                  return {
                    type: "execute",
                    config: {
                      jumpType: "generator",
                      generatorType,
                      modelKey: e.modelKey,
                    },
                  };
                }
                return undefined;
              case "guide_popup":
                const popup = ((e) => {
                  let media;
                  if (e) {
                    switch (e.mediaType) {
                      case "image":
                        if (typeof e.imageUri === "string" && e.imageUri) {
                          media = {
                            mediaType: "image",
                            imageUri: e.imageUri,
                          };
                        }
                        break;
                      case "video":
                        if (typeof e.videoVid === "string" && e.videoVid) {
                          media = {
                            mediaType: "video",
                            videoVid: e.videoVid,
                          };
                        }
                    }
                    if (media) {
                      return {
                        title: ek(e.title),
                        description: ek(e.description),
                        media,
                      };
                    }
                  }
                })(t);
                if (popup) {
                  return {
                    type: "hover",
                    popup,
                  };
                }
                return undefined;
              case "route":
                if (typeof e.routeValue === "string" && e.routeValue) {
                  return {
                    type: "execute",
                    config: {
                      jumpType: "route",
                      routeValue: e.routeValue,
                    },
                  };
                }
                return undefined;
              case "link":
                if (typeof e.linkUrl === "string" && e.linkUrl) {
                  return {
                    type: "execute",
                    config: {
                      jumpType: "link",
                      linkUrl: e.linkUrl,
                    },
                  };
                }
                return undefined;
              default:
                return;
            }
          }
        })((o = e.button) == null ? undefined : o.action, e.popup);
  const label = ek((r = e.button) == null ? undefined : r.text);
  t = ((l = e.button) == null ? undefined : l.disabled) === true;
  const action =
    t || !_
      ? {
          type: "disabled",
          label,
        }
      : _.type === "hover"
        ? {
            type: "hover",
            label,
          }
        : {
            type: "execute",
            label,
            config: _.config,
          };
  return {
    taskKey: e.taskKey,
    taskType: e.taskType === "registration" ? "registration" : "normal",
    title: eS(e.title, b),
    subtitle: eS(e.subtitle, b),
    tooltip: ek(e.tooltip, {
      num: g,
      validDays1,
      validDays2: g,
    }),
    popup: (_ == null ? undefined : _.type) === "hover" ? _.popup : undefined,
    rewards: c,
    pointsReward,
    benefitReward,
    taskStatus: e.status,
    completedAtMs:
      typeof e.completedAtMs === "number" &&
      Number.isFinite(e.completedAtMs) &&
      e.completedAtMs > 0
        ? e.completedAtMs
        : undefined,
    action,
  };
}
function ej(e) {
  return "".concat(e.panelKey, ":").concat(e.taskKey);
}
class eN {
  get currentCompletionToast() {
    return this.completionToastQueue[0];
  }
  get entryVisible() {
    return this.panelData !== null;
  }
  setEnhancementEnabled(e) {
    this.enhancementEnabled = e;
  }
  setRemainingSeconds(e) {
    this.remainingSeconds = new Map(e);
  }
  setPanelMode(e) {
    this.panelMode = e;
  }
  setPanelVisible(e) {
    this.panelVisible = e;
    if (e) {
      this.panelPresentationVersion += 1;
    } else {
      this.completedGroupExpanded = false;
      this.celebrationTaskKey = null;
      this.celebrationActive = false;
    }
    this.panelMode = e ? "pinned" : "closed";
  }
  setCompletedGroupExpanded(e) {
    this.completedGroupExpanded = e;
  }
  setCelebration(e, t) {
    this.celebrationTaskKey = e;
    this.celebrationActive = e !== null && t;
  }
  setBubbleVisible(e) {
    this.bubbleVisible = e;
  }
  setHasLogin(e) {
    this.hasLogin = e;
  }
  setPanelData(e) {
    this.panelData = e;
  }
  setPointsAnimationQueue(e) {
    this.pointsAnimationQueue = e;
  }
  enqueueCompletionToasts(e) {
    const t = new Set(this.completionToastQueue.map(ej));
    this.completionToastQueue = [
      ...this.completionToastQueue,
      ...e.filter((e) => !t.has(ej(e))),
    ];
  }
  removeCurrentCompletionToast() {
    this.completionToastQueue = this.completionToastQueue.slice(1);
  }
  clearCompletionToasts() {
    this.completionToastQueue = [];
  }
  resetTaskState() {
    this.enhancementEnabled = false;
    this.panelMode = "closed";
    this.remainingSeconds.clear();
    this.panelVisible = false;
    this.completedGroupExpanded = false;
    this.celebrationTaskKey = null;
    this.celebrationActive = false;
    this.bubbleVisible = false;
    this.panelData = null;
    this.pointsAnimationQueue = [];
    this.completionToastQueue = [];
  }
  constructor() {
    this.enhancementEnabled = false;
    this.panelMode = "closed";
    this.remainingSeconds = new Map();
    this.panelPresentationVersion = 0;
    this.panelVisible = false;
    this.completedGroupExpanded = false;
    this.celebrationTaskKey = null;
    this.celebrationActive = false;
    this.bubbleVisible = false;
    this.hasLogin = false;
    this.panelData = null;
    this.pointsAnimationQueue = [];
    this.completionToastQueue = [];
    p.l_(this);
  }
}
class eW {
  execute(e, enter_from) {
    return n
      ._(function* () {
        if (!this._isOperating) {
          this._isOperating = true;
          try {
            switch (e.jumpType) {
              case "generator":
                yield this._executeGeneratorAction(e, enter_from);
                break;
              case "route":
                this._uiConfigurationService.navigate(e.routeValue, {
                  query: {
                    enter_from,
                  },
                });
                break;
              case "link":
                window.open(
                  L.m(e.linkUrl, null, {
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
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJaRWRHZW1*N%1Xc*FWel$3$2xoSmRtSlhSblZa$jJSc1kyN%5kb$JI%m5wa*$%Rm9X$E5T-0dJe%5I%mlWMFox$1Zka2JHTnBO$EJqTWtaN$dqTldlZz09",
                  }),
                  "_blank",
                  "noopener,noreferrer",
                );
            }
          } catch (error) {
            this._reportService.reportDevError(
              "dreamina_task_center_action_error",
              error instanceof Error ? error : Error(String(error)),
              {
                jump_type: e.jumpType,
              },
            );
          } finally {
            this._isOperating = false;
          }
        }
      })
      .call(this);
  }
  _executeGeneratorAction(e, t) {
    return n
      ._(function* () {
        const i =
          yield this._contentGeneratorFeatureLoaderService.getInstance();
        yield e$.W(
          i,
          ((e) => {
            switch (e.generatorType) {
              case "video":
                return {
                  contentGeneratorType: "video",
                  modelKey: e.modelKey,
                };
              case "image":
              case "digitalHuman":
              case "actionCopy":
                return {
                  contentGeneratorType: e.generatorType,
                  modelKey: e.modelKey,
                };
              case "agentic":
              case "audio":
                return {
                  contentGeneratorType: e.generatorType,
                };
            }
          })(e),
        );
        i.getSpecificGeneratorManager(
          e.generatorType,
        ).reportManager.setResourceReportParams({
          enterFrom: t,
        });
        this._uiConfigurationService.navigate(eA.Du.AIGeneratedRecord, {
          query: {
            enter_from: t,
          },
        });
      })
      .call(this);
  }
  constructor(e, t, i) {
    this._uiConfigurationService = e;
    this._contentGeneratorFeatureLoaderService = t;
    this._reportService = i;
    this._isOperating = false;
  }
}
eW = s.Cg(
  [
    s.Qj(0, _.K),
    s.Qj(1, eM.O),
    s.Qj(2, eR.l),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      _.K === undefined ? Object : _.K,
      eM.O === undefined ? Object : eM.O,
      eR.l === undefined ? Object : eR.l,
    ]),
  ],
  eW,
);
const eE = "activity_task_panel";
class eF {
  reportPanelShow(e) {
    this._reportService.reportBusinessEvent(eE, {
      action: "show",
      activity_id: e.panelKey,
      credit_now: e.pointsProgress.earnedPoints,
    });
  }
  reportTaskAction(e, t) {
    const i = t.taskStatus === "success";
    this._reportService.reportBusinessEvent(eE, {
      action: i ? "use" : "go_finish_work",
      task_id: i ? undefined : t.taskKey,
      activity_id: e.panelKey,
      credit_now: e.pointsProgress.earnedPoints,
    });
    if (i) {
      return "activity_task_panel_use";
    }
    return "activity_task_panel_work";
  }
  reportTaskCompleted(e, t) {
    this._reportService.reportBusinessEvent("activity_task_completed", {
      task_id: t.taskKey,
      activity_id: e.panelKey,
      url_path:
        typeof window === "undefined" ? undefined : window.location.pathname,
    });
  }
  constructor(e) {
    this._reportService = e;
  }
}
function eP(e) {
  return e.taskStatus === "success";
}
eF = s.Cg(
  [
    s.Qj(0, eR.l),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [eR.l === undefined ? Object : eR.l]),
  ],
  eF,
);
class eZ {
  reconcile(e, t) {
    this._uiStateManager.syncFromStorage();
    const i = this._taskStatusSnapshots.get(e.panelKey);
    const n = this._getPendingCompletionEffects(e, i, t);
    this._taskStatusSnapshots.set(
      e.panelKey,
      new Map(e.tasks.map((e) => [e.taskKey, e.taskStatus])),
    );
    this._uiStateManager.updatePanelSnapshot(e);
    return n;
  }
  reset() {
    this._queuedCompletionIds.clear();
    this._taskStatusSnapshots.clear();
    this._pointsAnimationSeenTaskKeys.clear();
  }
  getPendingPointsAnimationTasks(e) {
    this._uiStateManager.syncFromStorage();
    return e.tasks.filter((t) => {
      var i;
      var n;
      var s = this._uiStateManager.getTaskState(e.panelKey, t.taskKey);
      return (
        eP(t) &&
        ((i = (n = t.pointsReward) == null ? undefined : n.amount) != null
          ? i
          : 0) > 0 &&
        !(s == null ? undefined : s.pointsAnimationSeenAt) &&
        !this._hasSeenPointsAnimation(e.panelKey, t.taskKey)
      );
    });
  }
  markPointsAnimationSeen(e, t) {
    let i;
    const n =
      (i = this._pointsAnimationSeenTaskKeys.get(e)) != null ? i : new Set();
    t.forEach((e) => n.add(e));
    this._pointsAnimationSeenTaskKeys.set(e, n);
    this._uiStateManager.markPointsAnimationSeen(e, t);
  }
  _getPendingCompletionEffects(e, t, i) {
    const newlyCompletedTasks = [];
    const completionToasts = [];
    const pointsAnimationTasks = [];
    e.tasks.forEach((o) => {
      if (eP(o)) {
        var r;
        var l;
        var c;
        var d = this._uiStateManager.getTaskState(e.panelKey, o.taskKey);
        var u =
          i == null || (l = i.get(o.taskKey)) == null
            ? undefined
            : l.creditedCompletionId;
        var h = JSON.stringify([e.panelKey, o.taskKey, u]);
        if (
          i
            ? !!(
                u &&
                (d == null ? undefined : d.completionNoticeId) !== u &&
                !this._queuedCompletionIds.has(h)
              )
            : (t == null ? undefined : t.get(o.taskKey)) === "in_progress"
        ) {
          newlyCompletedTasks.push(o);
          if (u) {
            this._queuedCompletionIds.add(h);
          }
          var content = ((e) => {
            if (e.taskType !== "registration") {
              let t;
              let i;
              let n;
              let s;
              const a =
                (t = (n = e.pointsReward) == null ? undefined : n.amount) !=
                null
                  ? t
                  : 0;
              const o =
                (i = (s = e.benefitReward) == null ? undefined : s.amount) !=
                null
                  ? i
                  : 0;
              if (e.pointsReward && e.benefitReward) {
                return {
                  starlingKey: "onboarding_toast_reward_trials_done2",
                  textFallback: "任务完成，奖励已下发",
                  interpolation: {},
                };
              }
              if (a > 0) {
                return {
                  starlingKey: "onboarding_toast_done",
                  textFallback: "任务完成,获得<strong>{num}</strong>积分",
                  interpolation: {
                    num: a,
                  },
                };
              }
              if (o > 0) {
                return {
                  starlingKey: "onboarding_toast_reward_trials_done",
                  textFallback:
                    "任务完成，获得 <strong>{num}</strong> 次模型使用资格",
                  interpolation: {
                    num: o,
                  },
                };
              }
            }
          })(o);
          if (content) {
            completionToasts.push({
              completionId: u,
              panelKey: e.panelKey,
              taskKey: o.taskKey,
              content,
            });
          }
        }
        if (
          !(
            !(
              ((r = (c = o.pointsReward) == null ? undefined : c.amount) != null
                ? r
                : 0) > 0
            ) ||
            (d == null ? undefined : d.pointsAnimationSeenAt) ||
            this._hasSeenPointsAnimation(e.panelKey, o.taskKey)
          )
        ) {
          pointsAnimationTasks.push(o);
        }
      }
    });
    return {
      newlyCompletedTasks,
      completionToasts,
      pointsAnimationTasks,
    };
  }
  _hasSeenPointsAnimation(e, t) {
    let i;
    return (
      ((i = this._pointsAnimationSeenTaskKeys.get(e)) == null
        ? undefined
        : i.has(t)) === true
    );
  }
  constructor(e) {
    this._uiStateManager = e;
    this._queuedCompletionIds = new Set();
    this._taskStatusSnapshots = new Map();
    this._pointsAnimationSeenTaskKeys = new Map();
  }
}
const TaskCenterChanged = em.NY.TaskCenterChanged;
class eJ {
  start(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : TaskCenterChanged;
    this.stop();
    if (t !== undefined) {
      this._disposables.add(this._websocketService.registerEventHandler(t, e));
      this._disposables.add(this._websocketService.onOpen(e));
    }
  }
  stop() {
    this._disposables.clear();
  }
  constructor(e) {
    this._websocketService = e;
    this._disposables = new eK.C();
  }
}
class eL {
  resolve(e) {
    const t =
      e.mediaType === "image"
        ? "image:".concat(e.imageUri)
        : "video:".concat(e.videoVid);
    const i = this._mediaCache.get(t);
    if (i) {
      return i;
    }
    const n = this._resolve(e)
      .catch(() => undefined)
      .then((e) => {
        if (!e) {
          this._mediaCache.delete(t);
        }
        return e;
      });
    this._mediaCache.set(t, n);
    return n;
  }
  _resolve(e) {
    return n
      ._(function* () {
        if (e.mediaType === "image") {
          var t;
          var i;
          var n;
          let s;
          const a = yield this._materialDataService.getUrlByUris({
            uris: [e.imageUri],
          });
          const o = a.ok
            ? (s = a.value.uri2Image[e.imageUri]) == null
              ? undefined
              : s.imageUrl
            : undefined;
          if (o) {
            return {
              mediaType: "image",
              url: o,
            };
          }
          return undefined;
        }
        const r = yield this._materialDataService.getVideoByVids({
          vids: [e.videoVid],
        });
        const l = r.ok
          ? (i = r.value.vid2Video[e.videoVid]) == null
            ? undefined
            : i.originVideo
          : undefined;
        const c =
          (t = l == null ? undefined : l.videoUrl) != null
            ? t
            : l == null || (n = l.sceneVideoUrls) == null
              ? undefined
              : n.downloadUrl;
        if (c) {
          return {
            mediaType: "video",
            url: c,
            coverUrl: l == null ? undefined : l.coverUrl,
          };
        }
      })
      .call(this);
  }
  constructor(e) {
    this._materialDataService = e;
    this._mediaCache = new Map();
  }
}
eL = s.Cg(
  [
    s.Qj(0, l.H),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [l.H === undefined ? Object : l.H]),
  ],
  eL,
);
function eH() {
  return {
    version: 1,
    panels: {},
  };
}
function eI() {
  if (typeof window !== "undefined") {
    try {
      return window.localStorage;
    } catch (e) {
      return;
    }
  }
}
function eV(e) {
  return !!(e && typeof e === "object" && !Array.isArray(e));
}
function eX(e) {
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
}
class eB {
  activateUser(e) {
    this._storageKey = "".concat(eD.o.taskCenterUiStatePrefix).concat(e);
    this._hasUnpersistedChanges = false;
    this._state = this._readState();
    this._pruneAndPersist();
  }
  deactivateUser() {
    this._storageKey = undefined;
    this._state = eH();
    this._hasUnpersistedChanges = false;
  }
  syncFromStorage() {
    if (this._storageKey && !this._hasUnpersistedChanges) {
      this._state = this._readState();
    }
  }
  getTaskState(e, t) {
    let i;
    if ((i = this._state.panels[e]) == null) {
      return undefined;
    }
    return i.tasks[t];
  }
  updatePanelSnapshot(e) {
    const updatedAt = this._now();
    const i = this._state.panels[e.panelKey];
    const n = {};
    const bubbleSuppressedByCompletion =
      (i == null ? undefined : i.bubbleSuppressedByCompletion) === true ||
      e.tasks.filter((e) => e.taskStatus === "success").length >= 3;
    e.tasks.forEach((e) => {
      var t = i == null ? undefined : i.tasks[e.taskKey];
      n[e.taskKey] = t ? u._({}, t) : {};
    });
    this._state.panels[e.panelKey] = {
      panelOpenedDate: i == null ? undefined : i.panelOpenedDate,
      bubbleSuppressedByCompletion,
      expiresAt: e.expiresAt,
      updatedAt,
      tasks: n,
    };
    this._pruneAndPersist();
  }
  getPanelOpenedDate(e) {
    let t;
    if ((t = this._state.panels[e]) == null) {
      return undefined;
    }
    return t.panelOpenedDate;
  }
  isBubbleSuppressedByCompletion(e) {
    let t;
    return (
      ((t = this._state.panels[e]) == null
        ? undefined
        : t.bubbleSuppressedByCompletion) === true
    );
  }
  markPanelOpened(e, t) {
    this.syncFromStorage();
    const i = this._state.panels[e];
    if (i) {
      i.panelOpenedDate = t;
      i.updatedAt = this._now();
      this._persist();
    }
  }
  markPointsAnimationSeen(e, t) {
    this.syncFromStorage();
    const i = this._state.panels[e];
    if (i) {
      const n = this._now();
      t.forEach((e) => {
        var t = i.tasks[e];
        if (t) {
          t.pointsAnimationSeenAt = n;
        }
      });
      i.updatedAt = n;
      this._persist();
    }
  }
  markCompletionNoticeSeen(e, t, i) {
    this.syncFromStorage();
    let n;
    const s = (n = this._state.panels[e]) == null ? undefined : n.tasks[t];
    if (s) {
      s.completionNoticeId = i;
      this._persist();
    }
  }
  _readState() {
    const e = eI();
    if (!e || !this._storageKey) {
      return eH();
    }
    try {
      const t = e.getItem(this._storageKey);
      if (!t) {
        return eH();
      }
      const i = JSON.parse(t);
      if (!eV(i) || i.version !== 1 || !eV(i.panels)) {
        return eH();
      }
      const panels = Object.fromEntries(
        Object.entries(i.panels).flatMap((e) => {
          var [t, i] = e;
          var n = ((e) => {
            if (eV(e) && eV(e.tasks)) {
              let t;
              const tasks = Object.fromEntries(
                Object.entries(e.tasks).flatMap((e) => {
                  var [t, i] = e;
                  var n = ((e) => {
                    let t;
                    if (eV(e)) {
                      return {
                        completionNoticeId:
                          typeof e.completionNoticeId === "string"
                            ? e.completionNoticeId
                            : undefined,
                        pointsAnimationSeenAt:
                          (t = eX(e.pointsAnimationSeenAt)) != null
                            ? t
                            : eX(e.panelAnimationSeenAt),
                      };
                    }
                  })(i);
                  if (n) {
                    return [[t, n]];
                  }
                  return [];
                }),
              );
              return {
                panelOpenedDate:
                  typeof e.panelOpenedDate === "string"
                    ? e.panelOpenedDate
                    : typeof e.bubbleOpenedDate === "string"
                      ? e.bubbleOpenedDate
                      : undefined,
                bubbleSuppressedByCompletion:
                  typeof e.bubbleSuppressedByCompletion === "boolean"
                    ? e.bubbleSuppressedByCompletion
                    : undefined,
                expiresAt: eX(e.expiresAt),
                updatedAt: (t = eX(e.updatedAt)) != null ? t : 0,
                tasks,
              };
            }
          })(i);
          if (n) {
            return [[t, n]];
          }
          return [];
        }),
      );
      return {
        version: 1,
        panels,
      };
    } catch (e) {
      return eH();
    }
  }
  _pruneAndPersist() {
    const e = this._now();
    const t = Object.entries(this._state.panels)
      .filter((t) => {
        var [, i] = t;
        return !i.expiresAt || i.expiresAt > e;
      })
      .sort((e, t) => {
        var [, i] = e;
        var [, n] = t;
        return n.updatedAt - i.updatedAt;
      })
      .slice(0, 20);
    this._state.panels = Object.fromEntries(t);
    this._persist();
  }
  _persist() {
    const e = eI();
    if (!e || !this._storageKey) {
      this._hasUnpersistedChanges = true;
      return;
    }
    try {
      e.setItem(this._storageKey, JSON.stringify(this._state));
      this._hasUnpersistedChanges = false;
    } catch (e) {
      this._hasUnpersistedChanges = true;
    }
  }
  constructor(e = Date.now) {
    this._now = e;
    this._state = eH();
    this._hasUnpersistedChanges = false;
  }
}
const ez = "[TaskCenter][Benefit]";
function eQ() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : new Date();
  const t = e.getFullYear();
  const i = `${e.getMonth() + 1}`.padStart(2, "0");
  const n = "".concat(e.getDate()).padStart(2, "0");
  return "".concat(t, "-").concat(i, "-").concat(n);
}
class eU extends y.jG {
  init() {
    if (!this._initialized) {
      this._initialized = true;
      this.store.setHasLogin(this._accountService.hasLogin);
      this._bindAccountEvents();
      this._register(
        this._presentation.onDidCancel(() => {
          if (this.store.enhancementEnabled) {
            this._presentationAbort.abort();
            this._presentationAbort = new AbortController();
            this.handlePanelVisibleChange(false);
            this.store.clearCompletionToasts();
            this._completionManager.reset();
          }
        }),
      );
      document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      );
      window.addEventListener("online", this._handleResume);
      window.addEventListener("pagehide", this._handlePageHide);
      this._syncTaskCenterLifecycle();
    }
  }
  handlePanelVisibleChange(e) {
    if (this.store.entryVisible) {
      const t = e && !this.store.panelVisible;
      this.store.setPanelVisible(e);
      this._uiConfigurationService.setSideMenuSelected(
        "SiderMenuTaskCenter",
        e,
      );
      if (!e) {
        this._clearCelebration();
      }
      if (e) {
        if (t && this.store.panelData) {
          this._reportManager.reportPanelShow(this.store.panelData);
        }
        this._markPanelOpenedToday();
        this._syncBubbleVisible();
        this._preparePointsAnimation(this.store.panelData);
      }
    }
  }
  handlePanelHover(e) {
    clearTimeout(this._hoverCloseTimer);
    if (this.store.enhancementEnabled && this.store.panelMode !== "pinned") {
      if (!e) {
        this._hoverCloseTimer = setTimeout(() => {
          if (this.store.panelMode === "hover") {
            this.handlePanelVisibleChange(false);
          }
        }, 150);
        return;
      }
      this.handlePanelVisibleChange(true);
      this.store.setPanelMode("hover");
    }
  }
  handlePanelShown() {
    const panelData = this.store.panelData;
    if (panelData && this.store.panelVisible) {
      this._pendingPanelNoticeTaskKeys.forEach((t) =>
        this._noticeManager.acknowledge(panelData.panelKey, t),
      );
      this._pendingPanelNoticeTaskKeys = [];
    }
  }
  handleCompletionToastShown() {
    const currentCompletionToast = this.store.currentCompletionToast;
    if (
      currentCompletionToast == null
        ? undefined
        : currentCompletionToast.completionId
    ) {
      this._noticeManager.acknowledge(
        currentCompletionToast.panelKey,
        currentCompletionToast.taskKey,
      );
    }
  }
  handlePointsAnimationComplete(e) {
    let t;
    const i = (t = this.store.panelData) == null ? undefined : t.panelKey;
    if (i) {
      this._completionManager.markPointsAnimationSeen(i, e);
    }
    this.store.setPointsAnimationQueue([]);
    this._preparePointsAnimation(this.store.panelData);
  }
  toggleCompletedGroup() {
    this.store.setCompletedGroupExpanded(!this.store.completedGroupExpanded);
  }
  handleCompletionToastExpired() {
    this.store.removeCurrentCompletionToast();
  }
  handleTaskAction(e) {
    return n
      ._(function* () {
        const panelData = this.store.panelData;
        if (e.action.type === "execute" && panelData) {
          const i = this._reportManager.reportTaskAction(panelData, e);
          this.handlePanelVisibleChange(false);
          yield this._taskActionManager.execute(e.action.config, i);
        }
      })
      .call(this);
  }
  resolveGuideMedia(e) {
    return this._guideMediaManager.resolve(e);
  }
  dispose() {
    this._disposed = true;
    document.removeEventListener(
      "visibilitychange",
      this._handleVisibilityChange,
    );
    window.removeEventListener("online", this._handleResume);
    window.removeEventListener("pagehide", this._handlePageHide);
    this._deactivateTaskCenter();
    super.dispose();
  }
  _bindAccountEvents() {
    this._register(
      this._accountService.onDidLogin(() => {
        this.store.setHasLogin(true);
        this._deactivateTaskCenter();
        this._syncTaskCenterLifecycle();
      }),
    );
    this._register(
      this._accountService.onDidLogout(() => {
        this.store.setHasLogin(false);
        this._deactivateTaskCenter();
      }),
    );
    this._register(
      this._accountService.onDidChangeProfile(() => {
        if (this._canRequestTaskCenter()) {
          var e = this._getCurrentUserId();
          if (e && e !== this._activeUserId) {
            this._deactivateTaskCenter();
            this._syncTaskCenterLifecycle();
            return;
          }
          this._syncBubbleVisible();
        }
      }),
    );
  }
  _syncTaskCenterLifecycle() {
    if (this._canRequestTaskCenter()) {
      this._activateCurrentUser();
      this._frontierManager.start(() => this._scheduleFrontierRefresh());
      this._refreshTaskCenter();
    } else {
      this._deactivateTaskCenter();
    }
  }
  _canRequestTaskCenter() {
    return this.store.hasLogin;
  }
  _activateCurrentUser() {
    const e = this._getCurrentUserId();
    if (e && e !== this._activeUserId) {
      this._activeUserId = e;
      this._uiStateManager.activateUser(e);
    }
  }
  _getCurrentUserId() {
    let e;
    let t;
    let i;
    let n;
    const s =
      (t = this._accountService.userProfile) == null || (e = t.uid) == null
        ? undefined
        : e.trim();
    if (s) {
      return "uid_".concat(s);
    }
    const a =
      (n = this._accountService.userProfile) == null || (i = n.webId) == null
        ? undefined
        : i.trim();
    if (a) {
      return "web_".concat(a);
    }
  }
  _scheduleFrontierRefresh() {
    if (this._canRequestTaskCenter()) {
      if (this._frontierRefreshTimer) {
        clearTimeout(this._frontierRefreshTimer);
      }
      this._frontierRefreshTimer = setTimeout(() => {
        this._frontierRefreshTimer = undefined;
        this._refreshTaskCenter();
      }, 300);
    }
  }
  _refreshTaskCenter() {
    if (!this._canRequestTaskCenter()) {
      return Promise.resolve();
    }
    if (this._activeRefreshPromise) {
      this._refreshRequested = true;
      return this._activeRefreshPromise;
    }
    const _runtimeGeneration = this._runtimeGeneration;
    var t = this._doRefreshTaskCenter(_runtimeGeneration).finally(() => {
      if (this._activeRefreshPromise === t) {
        this._activeRefreshPromise = undefined;
        if (this._refreshRequested && this._canRequestTaskCenter()) {
          this._refreshRequested = false;
          this._refreshTaskCenter();
        }
      }
    });
    this._activeRefreshPromise = t;
    return t;
  }
  _doRefreshTaskCenter(e) {
    return n
      ._(function* () {
        let t;
        let i;
        const n = yield this._fetchTaskPanelWithRetry(e);
        if (
          n &&
          !this._disposed &&
          this._canRequestTaskCenter() &&
          e === this._runtimeGeneration &&
          n.ok
        ) {
          this._applySnapshot(
            {
              panel: (i = Array.isArray(
                (t = n.value) == null ? undefined : t.panels,
              )
                ? t.panels[0]
                : undefined)
                ? ((e) => {
                    if (
                      typeof (e == null ? undefined : e.panelKey) !==
                        "string" ||
                      !e.panelKey
                    ) {
                      return null;
                    }
                    let t;
                    let i;
                    let n;
                    const s = (Array.isArray(e.tasks) ? e.tasks : [])
                      .map(eT)
                      .filter((e) => !!e)
                      .map(ex);
                    const a =
                      s.some((e) => !!e.pointsReward) &&
                      Number.isFinite(e.earnedPoints) &&
                      Number.isFinite(e.totalPoints);
                    const o = a
                      ? Math.max((t = e.totalPoints) != null ? t : 0, 0)
                      : 0;
                    const earnedPoints = a
                      ? Math.min(
                          Math.max((i = e.earnedPoints) != null ? i : 0, 0),
                          o,
                        )
                      : 0;
                    const expiresAt = Number.isFinite(e.endTime)
                      ? e.endTime
                      : undefined;
                    const c = Number.isFinite(e.totalBenefits)
                      ? Math.max((n = e.totalBenefits) != null ? n : 0, 0)
                      : 0;
                    return {
                      panelKey: e.panelKey,
                      title: ek(e.title),
                      subtitle: eS(e.subtitle, {
                        num: c,
                        num1: o,
                        num2: c,
                      }),
                      bubbleText: ek(e.tag),
                      tooltip: ((e, t) => {
                        if (
                          !e.tooltip ||
                          typeof t !== "number" ||
                          !Number.isFinite(t)
                        ) {
                          return "";
                        }
                        const i =
                          typeof e.tooltip.textFallback === "string"
                            ? e.tooltip.textFallback
                            : "";
                        return A.Ay.t(
                          e.tooltip.starlingKey || i,
                          {
                            taskDays: ev(t).format("YYYY.MM.DD"),
                          },
                          i,
                        );
                      })(e, expiresAt),
                      expiresAt,
                      pointsProgress: {
                        visible: a && o > 0,
                        earnedPoints,
                        totalPoints: o,
                      },
                      tasks: s,
                    };
                  })(i)
                : null,
            },
            this._presentation.readTaskMetadata(n.value),
          );
        }
      })
      .call(this);
  }
  _fetchTaskPanelWithRetry(e) {
    return n
      ._(function* () {
        for (
          let t = 0;
          t <= 3 &&
          !this._disposed &&
          this._canRequestTaskCenter() &&
          e === this._runtimeGeneration;
          t += 1
        ) {
          const i = yield this._taskCenterDataService.fetchTaskPanel();
          if (i.ok || t === 3) {
            return i;
          }
          yield new Promise((resolve) => setTimeout(resolve, 200));
        }
      })
      .call(this);
  }
  _applySnapshot(e, t) {
    let i;
    let n;
    const { panel } = e;
    if (
      ((i = this.store.panelData) == null ? undefined : i.panelKey) !==
      (panel == null ? undefined : panel.panelKey)
    ) {
      this._availability.dispose();
      if ((n = this._visitManager) != null) {
        n.dispose();
      }
      this._visitManager = undefined;
      this._presentationAbort.abort();
      this._presentationAbort = new AbortController();
      this._completionManager.reset();
      this.store.setPointsAnimationQueue([]);
      this.store.clearCompletionToasts();
    }
    this.store.setPanelData(panel);
    this.store.setEnhancementEnabled(!!(panel && this._presentation.enabled));
    if (!panel) {
      this.store.setBubbleVisible(false);
      this.store.setPanelVisible(false);
      this.store.clearCompletionToasts();
      this._uiConfigurationService.setSideMenuSelected(
        "SiderMenuTaskCenter",
        false,
      );
      this._syncEntryVisibilitySideEffects();
      return;
    }
    const enhancementEnabled = this.store.enhancementEnabled;
    const o = this._completionManager.reconcile(
      panel,
      enhancementEnabled ? t : undefined,
    );
    o.newlyCompletedTasks.forEach((e) =>
      this._reportManager.reportTaskCompleted(panel, e),
    );
    this._refreshBenefitStrategyAfterTaskCompletion(o.newlyCompletedTasks);
    if (enhancementEnabled) {
      const r = new Map(
        [...t].filter((e) => {
          var [t] = e;
          return panel.tasks.some(
            (e) => e.taskKey === t && e.taskStatus !== "success",
          );
        }),
      );
      this._availability.update(r, panel.expiresAt || undefined);
      if (!this.store.entryVisible) {
        return;
      }
      this._startVisitTracking(panel);
      if (o.newlyCompletedTasks.length > 0) {
        this._showCompletion(panel, o, t);
      }
    } else {
      this.store.enqueueCompletionToasts(o.completionToasts);
    }
    this._syncBubbleVisible();
    this._scheduleDateRefresh();
    this._syncEntryVisibilitySideEffects();
    if (this.store.panelVisible && o.pointsAnimationTasks.length > 0) {
      this._preparePointsAnimation(panel, o.pointsAnimationTasks);
    }
  }
  _showCompletion(e, t, i) {
    return n
      ._(function* () {
        let n;
        const { signal } = this._presentationAbort;
        if (
          (yield this._presentation.waitForTaskPresentation(signal)) ===
            "cancelled" ||
          signal.aborted ||
          ((n = this.store.panelData) == null ? undefined : n.panelKey) !==
            e.panelKey ||
          !this._canPresentEnhancedPanel()
        ) {
          return void this._completionManager.reset();
        }
        if (this._activeUserId) {
          const a = t.newlyCompletedTasks.flatMap((e) => {
            var t;
            var n =
              (t = i.get(e.taskKey)) == null
                ? undefined
                : t.creditedCompletionId;
            if (n) {
              return [
                {
                  taskKey: e.taskKey,
                  completionId: n,
                },
              ];
            }
            return [];
          });
          yield this._noticeManager.present(
            this._activeUserId,
            e.panelKey,
            a,
            signal,
            (e) => {
              var i;
              var n = new Set(e.map((e) => e.taskKey));
              var s = t.completionToasts.filter((e) => n.has(e.taskKey));
              this._pendingPanelNoticeTaskKeys = e
                .filter((e) => !s.some((t) => t.taskKey === e.taskKey))
                .map((e) => e.taskKey);
              this.handlePanelVisibleChange(true);
              this.store.setCompletedGroupExpanded(this.store.panelVisible);
              var a = (i = e[e.length - 1]) == null ? undefined : i.taskKey;
              if (this.store.panelVisible && a) {
                this._celebrate(a);
              }
              this.store.enqueueCompletionToasts(s);
            },
          );
        }
      })
      .call(this);
  }
  _celebrate(e) {
    this._clearCelebration();
    this.store.setCelebration(e, false);
    this._celebrationTimers.push(
      setTimeout(() => this.store.setCelebration(e, true), 200),
      setTimeout(() => this.store.setCelebration(e, false), 5650),
    );
  }
  _clearCelebration() {
    this._celebrationTimers.forEach(clearTimeout);
    this._celebrationTimers = [];
  }
  _canPresentEnhancedPanel() {
    const panelData = this.store.panelData;
    return (
      this.store.enhancementEnabled &&
      !!panelData &&
      document.visibilityState === "visible" &&
      (!(panelData == null ? undefined : panelData.expiresAt) ||
        panelData.expiresAt > this._now())
    );
  }
  _hasPendingTask() {
    let e;
    return !!((e = this.store.panelData) == null
      ? undefined
      : e.tasks.some((e) => e.taskStatus !== "success"));
  }
  _startVisitTracking(e) {
    if (!this._visitManager && this._activeUserId && navigator.locks) {
      try {
        const t = new eu(this._activeUserId, e.panelKey, {
          storage: window.localStorage,
          now: this._now,
          visible: () => document.visibilityState === "visible",
          exclusively: (e, t) => navigator.locks.request(e, t),
          tabId: crypto.randomUUID(),
          revisitDelayMs: (() => {
            if (el.M()) {
              try {
                const e = Number(
                  new URLSearchParams(globalThis.location.search).get(
                    "__debug_onboarding_revisit_delay_seconds__",
                  ),
                );
                if (Number.isFinite(e) && e > 0) {
                  return 1000 * e;
                }
                return undefined;
              } catch (e) {
                return;
              }
            }
          })(),
        });
        this._visitManager = t;
        t.start().then(() => this._showRevisit());
      } catch (e) {}
    }
  }
  _showRevisit() {
    return n
      ._(function* () {
        let e;
        const { signal } = this._presentationAbort;
        if (
          !(
            (yield this._presentation.waitForStage("commercial", signal)) ===
              "cancelled" || signal.aborted
          )
        ) {
          yield (e = this._visitManager) == null
            ? undefined
            : e.showRevisit(
                () =>
                  !signal.aborted &&
                  !!this._canPresentEnhancedPanel() &&
                  !this.store.panelVisible &&
                  !!this._hasPendingTask() &&
                  (this.handlePanelVisibleChange(true),
                  this.store.panelVisible),
              );
        }
      })
      .call(this);
  }
  _refreshBenefitStrategyAfterTaskCompletion(e) {
    if (e.some((e) => !!(e.benefitReward || e.pointsReward))) {
      const t = this._runtimeGeneration;
      this._commercialFeatureLoaderService
        .getInstance()
        .then((i) =>
          n
            ._(function* () {
              if (
                !this._disposed &&
                this._canRequestTaskCenter() &&
                t === this._runtimeGeneration &&
                (e.some((e) => !!e.pointsReward) &&
                  i.commercialCreditService.getCurrentAccount().accountType ===
                    "personal" &&
                  i.commercialCreditService.syncRemoteCreditHistory(),
                e.some((e) => !!e.benefitReward))
              ) {
                const n =
                  yield i.commercialStrategyService.forceUpdateBenefitStrategy();
                if (!n.ok) {
                  eg.V.warn(ez, "Failed to refresh benefit strategy", n);
                }
              }
            })
            .call(this),
        )
        .catch((e) => {
          eg.V.warn(ez, "Failed to load commercial feature", e);
        });
    }
  }
  _preparePointsAnimation(e, t) {
    if (
      e &&
      this.store.panelVisible &&
      !(this.store.pointsAnimationQueue.length > 0)
    ) {
      const i =
        t != null
          ? t
          : this._completionManager.getPendingPointsAnimationTasks(e);
      if (i.length !== 0) {
        const n = i.reduce((acc, item) => {
          var i;
          var n;
          return (
            acc +
            ((i = (n = item.pointsReward) == null ? undefined : n.amount) !=
            null
              ? i
              : 0)
          );
        }, 0);
        let fromPoints = Math.max(e.pointsProgress.earnedPoints - n, 0);
        const a = i.map((t) => {
          var i;
          var n;
          var toPoints = Math.min(
            fromPoints +
              ((i = (n = t.pointsReward) == null ? undefined : n.amount) != null
                ? i
                : 0),
            e.pointsProgress.earnedPoints,
          );
          var o = {
            taskKey: t.taskKey,
            fromPoints,
            toPoints,
          };
          fromPoints = toPoints;
          return o;
        });
        this.store.setPointsAnimationQueue(a);
      }
    }
  }
  _syncEntryVisibilitySideEffects() {
    if (!this.store.entryVisible && this.store.panelVisible) {
      this.store.setPanelVisible(false);
      this._uiConfigurationService.setSideMenuSelected(
        "SiderMenuTaskCenter",
        false,
      );
    }
  }
  _syncBubbleVisible() {
    this._uiStateManager.syncFromStorage();
    const panelData = this.store.panelData;
    if (
      !(panelData == null ? undefined : panelData.bubbleText) ||
      this._uiStateManager.isBubbleSuppressedByCompletion(panelData.panelKey)
    ) {
      this.store.setBubbleVisible(false);
    } else {
      this.store.setBubbleVisible(
        this._uiStateManager.getPanelOpenedDate(panelData.panelKey) !== eQ(),
      );
    }
  }
  _markPanelOpenedToday() {
    let e;
    const t = (e = this.store.panelData) == null ? undefined : e.panelKey;
    if (t) {
      this._uiStateManager.markPanelOpened(t, eQ());
    }
  }
  _scheduleDateRefresh() {
    let e;
    let t;
    let i;
    this._clearDateRefreshTimer();
    if ((e = this.store.panelData) == null ? undefined : e.bubbleText) {
      this._dateRefreshTimer = setTimeout(
        () => {
          this._syncBubbleVisible();
          this._scheduleDateRefresh();
        },
        ((i = new Date((t = new Date()))).setHours(24, 0, 1, 0),
        i.getTime() - t.getTime()),
      );
    }
  }
  _deactivateTaskCenter() {
    this._stopRuntime();
    this.store.resetTaskState();
    this._uiConfigurationService.setSideMenuSelected(
      "SiderMenuTaskCenter",
      false,
    );
  }
  _stopRuntime() {
    let e;
    clearTimeout(this._hoverCloseTimer);
    this._clearCelebration();
    this._pendingPanelNoticeTaskKeys = [];
    this._availability.dispose();
    if ((e = this._visitManager) != null) {
      e.dispose();
    }
    this._visitManager = undefined;
    this._presentationAbort.abort();
    this._presentationAbort = new AbortController();
    this._runtimeGeneration += 1;
    this._completionManager.reset();
    this._frontierManager.stop();
    if (this._frontierRefreshTimer) {
      clearTimeout(this._frontierRefreshTimer);
      this._frontierRefreshTimer = undefined;
    }
    this._clearDateRefreshTimer();
    this._activeUserId = undefined;
    this._uiStateManager.deactivateUser();
    this._refreshRequested = false;
    this._activeRefreshPromise = undefined;
  }
  _clearDateRefreshTimer() {
    if (this._dateRefreshTimer) {
      clearTimeout(this._dateRefreshTimer);
      this._dateRefreshTimer = undefined;
    }
  }
  constructor(e, t, i, s, a, o, r) {
    var l;
    super();
    l = this;
    this._accountService = e;
    this._uiConfigurationService = t;
    this._taskCenterDataService = i;
    this._commercialFeatureLoaderService = a;
    this._presentation = r;
    this.store = new eN();
    this._now = eh.Jv;
    this._uiStateManager = new eB(() => {
      if (this._presentation.enabled) {
        return this._now();
      }
      return Date.now();
    });
    this._noticeManager = new ea(this._uiStateManager);
    this._pendingPanelNoticeTaskKeys = [];
    this._completionManager = new eZ(this._uiStateManager);
    this._availability = new er({
      now: this._now,
      active: () => document.visibilityState === "visible",
      onTick: (e) => this.store.setRemainingSeconds(e),
      refresh: () => this._scheduleFrontierRefresh(),
      onExpire: () =>
        this._applySnapshot(
          {
            panel: null,
          },
          new Map(),
        ),
    });
    this._celebrationTimers = [];
    this._presentationAbort = new AbortController();
    this._initialized = false;
    this._disposed = false;
    this._refreshRequested = false;
    this._runtimeGeneration = 0;
    this._handlePageHide = () => {
      var e;
      if ((e = this._visitManager) == null) {
        return undefined;
      }
      return e.leave();
    };
    this._handleVisibilityChange = () => {
      if (this.store.enhancementEnabled) {
        if (document.visibilityState === "visible") {
          this._handleResume();
        } else {
          var e;
          if ((e = this._visitManager) != null) {
            e.leave();
          }
          this._presentationAbort.abort();
          this._presentationAbort = new AbortController();
          this.store.clearCompletionToasts();
          this._completionManager.reset();
        }
      }
    };
    this._handleResume = () => {
      if (this.store.enhancementEnabled) {
        var { signal } = this._presentationAbort;
        this._refreshTaskCenter().then(() =>
          n._(function* () {
            if (!signal.aborted && l.store.enhancementEnabled) {
              let t;
              yield (t = l._visitManager) == null
                ? undefined
                : t.recordPresence();
              yield l._showRevisit();
            }
          })(),
        );
      }
    };
    this._frontierManager = new eJ(s);
    this._taskActionManager = o.createInstance(eW);
    this._reportManager = o.createInstance(eF);
    this._guideMediaManager = o.createInstance(eL);
  }
}
eU = s.Cg(
  [
    s.Qj(0, eb.i),
    s.Qj(1, _.K),
    s.Qj(2, e_.D),
    s.Qj(3, em.dE),
    s.Qj(4, ep.jV),
    s.Qj(5, o._),
    s.Qj(6, eo.Y),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      eb.i === undefined ? Object : eb.i,
      _.K === undefined ? Object : _.K,
      e_.D === undefined ? Object : e_.D,
      em.dE === undefined ? Object : em.dE,
      ep.jV === undefined ? Object : ep.jV,
      o._ === undefined ? Object : o._,
      eo.Y === undefined ? Object : eo.Y,
    ]),
  ],
  eU,
);
class eq extends y.jG {
  dispose() {
    this._unregisterSideMenuConfig();
    this._taskCenterManager.dispose();
    super.dispose();
  }
  content(e) {
    return m.jsx(v.Z, {
      instantiationService: this._containerService,
      children: m.jsx(f.t, {
        fallback: m.jsx("div", {}),
        children: m.jsx(es, {
          manager: this._taskCenterManager,
          menuWrapperPlacement: e.menuWrapperPlacement,
          children: e.children,
        }),
      }),
    });
  }
  _syncSideMenuConfig(e) {
    if (e) {
      this._registerSideMenuConfig();
    } else {
      this._unregisterSideMenuConfig();
    }
  }
  _registerSideMenuConfig() {
    this._uiConfigurationService.registerConfig({
      [b.N.SideMenu]: [
        h._(u._({}, this._getSideMenuConfig()), {
          MenuWrapper: (e) => this.content(e),
        }),
      ],
    });
    this._sideMenuRegistered = true;
  }
  _unregisterSideMenuConfig() {
    if (this._sideMenuRegistered) {
      this._uiConfigurationService.unRegisterConfig("SiderMenuTaskCenter");
      this._sideMenuRegistered = false;
    }
  }
  _getSideMenuConfig() {
    return {
      id: "SiderMenuTaskCenter",
      type: "icon",
      icon: () => m.jsx(g.zfN, {}),
      order: 1009,
      position: "bottom",
      onClick: () => undefined,
    };
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._uiConfigurationService = t;
    this._sideMenuRegistered = false;
    this._taskCenterManager = this._containerService.createInstance(eU);
    this._taskCenterManager.init();
    this._register({
      dispose: p.mJ(
        () => this._taskCenterManager.store.entryVisible,
        (e) => this._syncSideMenuConfig(e),
        {
          fireImmediately: true,
        },
      ),
    });
  }
}
eq = s.Cg(
  [
    s.Qj(0, o._),
    s.Qj(1, _.K),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      _.K === undefined ? Object : _.K,
    ]),
  ],
  eq,
);
class eG {
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
    return n
      ._(function* () {
        this._childContainerService =
          yield this._pageContainerServiceFactory.createChild();
        this._instance = this._childContainerService.createInstance(eq);
      })
      .call(this);
  }
  constructor(e) {
    this._pageContainerServiceFactory = e.createInstance(d);
    this._bootstrap();
  }
}
export var contribution = {
  id: "SiderMenuTaskCenter",
  ctor: (eG = s.Cg(
    [
      s.Qj(0, o._),
      s.Sn("design:type", Function),
      s.Sn("design:paramtypes", [o._ === undefined ? Object : o._]),
    ],
    eG,
  )),
  instantiationPhase: a.J.Eager,
  registerWhenLogin: false,
};
export var UiStaticConfig = {
  [b.N.SideMenu]: [],
};
