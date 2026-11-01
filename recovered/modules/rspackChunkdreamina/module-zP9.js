import n from "oa";
import i from "bk";
import a from "z8";
import "WJ";
import s from "gei";
import o from "cO";
import c from "bT";
import l from "yw";
import d from "wF";
import { V } from "./module-Kox.js";
import p from "fGo";
import m from "Mw";
import h from "r6K";
const className = "primaryButton-GaAohG";
const v = /\*\*([\s\S]*?)\*\*/g;
function useB(e) {
  let r;
  let totalSeconds;
  const { endTime } = e;
  const [, setI] = c.useState(Date.now());
  c.useEffect(() => {
    if (endTime) {
      var e = window.setInterval(() => {
        setI(Date.now());
      }, 1000);
      return () => {
        window.clearInterval(e);
      };
    }
  }, [endTime]);
  const s = {
    days: Math.floor(
      (totalSeconds = (r = ((e) => {
        if (e) {
          if (e > 100000000000) {
            return e;
          }
          return 1000 * e;
        }
      })(endTime))
        ? Math.max(Math.floor((r - Date.now()) / 1000), 0)
        : 0) / 86400,
    ),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    totalSeconds,
  };
  if (!endTime || s.totalSeconds <= 0) {
    return null;
  }
  const o = [s.days, s.hours, s.minutes, s.seconds].map((e) =>
    String(e).padStart(2, "0"),
  );
  return a.jsx("div", {
    className: "countdown-NSq9bm",
    children: o.map((children, r) =>
      a.jsxs(
        "span",
        {
          className: "countdownItemWrap-Z7hGXB",
          children: [
            a.jsx("span", {
              className: "countdownItem-FBxhNW",
              children,
            }),
            r < o.length - 1
              ? a.jsx("span", {
                  className: "countdownSeparator-R7DHjz",
                  children: ":",
                })
              : null,
          ],
        },
        "".concat(children, "-").concat(r),
      ),
    ),
  });
}
function _(e) {
  const { material } = e;
  const { textRef, style } = ((e, r) => {
    const tRef = c.useRef(null);
    const n = c.useMemo(() => m.B(r), [r]);
    const [i, setI] = c.useState(false);
    c.useEffect(() => {
      setI(false);
    }, [n, e]);
    c.useEffect(() => {
      if (e && !n && !i) {
        var r = window.requestAnimationFrame(() => {
          var tRef_current = tRef.current;
          if (
            tRef_current &&
            h.J(tRef_current, 4, {
              buffer: 1,
            })
          ) {
            setI(true);
          }
        });
        return () => {
          window.cancelAnimationFrame(r);
        };
      }
    }, [i, n, e]);
    c.useEffect(() => {
      var e = () => {
        setI(false);
      };
      window.addEventListener("resize", e);
      return () => {
        window.removeEventListener("resize", e);
      };
    }, []);
    const s = n ? 3 : i ? 6 : 4;
    return {
      textRef: tRef,
      style: {
        "--hero-text-font-size": `${!n && i ? 28 : 34}px`,
        "--hero-text-line-clamp": String(s),
      },
    };
  })(material.heroText, m.k());
  const style_1 = i._(n._({}, style), {
    color: material.heroTextColor,
  });
  return a.jsxs("div", {
    className: "hero-Rx6W9o",
    children: [
      material.heroImage
        ? a.jsx(V, {
            className: "heroImage-C1RCRl",
            src: o.m(material.heroImage, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1NMEpvWlZje*JHSn$$WFJq-lZZd1ds-zFNR0Z-T1hWT$Z6RjJXa2RH-zB3eWJI$mFSM$kw$Ec1%2$t$khSbmxhTTFaNg",
            }),
            alt: "payment_retention_cover",
            crossOrigin: "anonymous",
          })
        : null,
      material.heroText
        ? a.jsx("div", {
            className: "heroText-bkzTb5",
            ref: textRef,
            style: style_1,
            children: ((e, color) => {
              const t = [];
              let n = 0;
              v.lastIndex = 0;
              for (let i = v.exec(e); i;) {
                const s = i.index;
                if (s > n) {
                  t.push(e.slice(n, s));
                }
                t.push(
                  a.jsx(
                    "span",
                    {
                      className: "heroTextHighlight-NsQi53",
                      style: color
                        ? {
                            color,
                          }
                        : undefined,
                      children: i[1],
                    },
                    "highlight-".concat(s),
                  ),
                );
                n = s + i[0].length;
                i = v.exec(e);
              }
              if (n < e.length) {
                t.push(e.slice(n));
              }
              return t;
            })(material.heroText, material.heroHighlightColor),
          })
        : null,
    ],
  });
}
function y(e) {
  const { material, onContinueCancel, onContinuePay } = e;
  return a.jsxs("div", {
    className: "modal-vzCeAD",
    children: [
      a.jsxs("div", {
        className: "heroWrap-kAx4jZ",
        children: [
          a.jsx(_, {
            material,
          }),
          a.jsx("button", {
            className: "closeBtn-I5RL_j",
            type: "button",
            onClick: onContinueCancel,
            children: a.jsx(l.gzW, {
              className: "closeIcon-QMGjie",
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "body-pjB5ay",
        children: [
          material.title
            ? a.jsx("div", {
                className: "title-gXj4rt",
                children: material.title,
              })
            : null,
          material.subtitle
            ? a.jsx("div", {
                className: "subtitle-Yn6MYd",
                children: material.subtitle,
              })
            : null,
          a.jsx(useB, {
            endTime: material.countdownEndTime,
          }),
          material.secondaryButtonText
            ? a.jsxs("div", {
                className: "buttonGroup-kV6Bb3",
                children: [
                  a.jsx("button", {
                    className: "secondaryButton-YjXBhj",
                    type: "button",
                    onClick: onContinueCancel,
                    children: material.secondaryButtonText,
                  }),
                  material.buttonText
                    ? a.jsx("button", {
                        className,
                        type: "button",
                        onClick: onContinuePay,
                        children: material.buttonText,
                      })
                    : null,
                ],
              })
            : material.buttonText
              ? a.jsx("button", {
                  className,
                  type: "button",
                  onClick: onContinuePay,
                  children: material.buttonText,
                })
              : null,
        ],
      }),
    ],
  });
}
export function t(e) {
  const { containerService, material, onShow, onClick } = e;
  return new Promise((resolve) => {
    var o;
    var c = false;
    var l = {};
    var u = (e, r) => {
      var t;
      if (!c) {
        c = true;
        o = e;
        if (onClick != null) {
          onClick(r);
        }
        if ((t = l.current) != null) {
          t.close();
        }
      }
    };
    l.current = s.A.confirm({
      wrapClassName: `paymentRetentionModalWrapper paymentRetentionModalWrapper-lhxvQz`,
      className: "paymentRetentionModalInner-gqMYos",
      maskStyle: {
        background: p.g,
      },
      title: null,
      footer: null,
      simple: false,
      escToExit: false,
      icon: null,
      closable: false,
      maskClosable: false,
      afterClose: () => {
        if (o) {
          resolve(o);
        }
      },
      content: a.jsx(d.Z, {
        instantiationService: containerService,
        children: a.jsx(y, {
          material,
          onContinueCancel: () => u("continueCancel", "secondary"),
          onContinuePay: () => u("continuePay", "main"),
        }),
      }),
    });
    if (onShow != null) {
      onShow();
    }
  });
}
