import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import l from "bT";
import s from "ED";
import _c from "xb";
import d from "Du8";
import m from "lj";
import p from "wF";
import v from "Kt";
import h from "HX";
import g from "DNJ";
import f from "U7";
import b from "rr";
import _ from "O28";
import y from "Qey";
import x from "yw";
import k from "CkM";
import j from "pVF";
import w from "yMd";
import T from "cO";
import N from "hUS";
const C = l.memo(function (e) {
  const { children } = e;
  const n = i._(e, ["children"]);
  const s = l.useMemo(
    () => [
      o.jsx(
        "span",
        {
          children: y.Ay.t(
            "web_new_generate_notice_go_and_check",
            {},
            "去查看",
          ),
        },
        "text",
      ),
      o.jsx(x.Vjx, {}, "icon"),
    ],
    [],
  );
  return o.jsx(
    k.M,
    r._(
      a._(
        {
          size: "mini",
        },
        n,
      ),
      {
        children: children != null ? children : s,
      },
    ),
  );
});
const M = l.memo(function () {
  const e = p.h(f.P);
  const [t, setT] = l.useState(undefined);
  l.useLayoutEffect(() => {
    var a = e.onBeforeAigcDataTaskCreated((e) => {
      if (!(j.Q(e) || t)) {
        setT(e.generateType === w.ce.CreationAgent ? "agentic" : "default");
      }
    });
    return () => {
      a.dispose();
    };
  }, [e, t]);
  const a = l.useCallback(
    (e) => {
      if (e.animationName.includes("card-exit")) {
        setT(undefined);
      }
    },
    [setT],
  );
  const children = l.useMemo(() => {
    if (t === "agentic") {
      return o.jsx(x.j$8, {});
    }
    return o.jsx(x.gAj, {});
  }, [t]);
  return o.jsx("div", {
    className: _c("card-NQAR8y", {
      "animate-RaWLRv": t,
      "agentic-yy_I7z": t === "agentic",
    }),
    onAnimationEnd: a,
    children: o.jsx("div", {
      className: "card-background-YlYSNC",
      children: o.jsx("div", {
        className: "card-gradient-OlNeeL",
        children: o.jsx("div", {
          className: "card-content-nr666o",
          children,
        }),
      }),
    }),
  });
});
const R = l.memo(function (e) {
  const { coverUrl, successTask, processingTask } = e;
  if (coverUrl) {
    return o.jsx("img", {
      src: T.m(coverUrl, null, {
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
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-W1Je%5%QlpWMngx$2xoSmR*a3lPWFJq%npsM$ds-zFNR041T1dwa%1q$XdXb*MxT%$4WFpHe*li$lo1$1Zo%2RtTnBN$EJa$0%1e$R*ZHNk$nBI-kdwWld*SjJZMms1-W1Je%5%QmFWel$3$EZka2JHSnRWbmxa$0ZKMlkya3hNRmxZ$*5KT$-yeDFXa2Rz-WxsW$$uWmph$EZxWWpO-WJHTnBN$3BpTWp$d1ds-zFNRXh1$W5wbFIwWj$Xak5XZWc9PQ",
      }),
      alt: "cover",
      className: "cover-Px4BFO",
      crossOrigin: "anonymous",
      draggable: false,
    });
  }
  if (successTask > 0 && processingTask === 0) {
    return o.jsx(x.UFF, {
      size: 20,
    });
  }
  return o.jsx(N.w, {
    className: "spin-S3x3JH",
  });
});
const A = s.PA(function (e) {
  const { indicator, previewContainerClassName } = e;
  const { successTask, failedTask, processingTask, totalTask, coverUrl } =
    indicator;
  const { insideContentGenerator } = l.useContext(d.R);
  const [p, setP] = l.useState(false);
  l.useEffect(() => {
    setP(totalTask > 1);
  }, [totalTask]);
  const h = l.useCallback(() => {
    setP(false);
  }, []);
  if (insideContentGenerator || totalTask) {
    return o.jsxs("div", {
      className: _c("status-l8rYHs", {
        "inside-content-generator-ZVflBa": insideContentGenerator,
        "no-task-sToncH": !totalTask,
        "all-task-failed-G1OYOx": totalTask && failedTask === totalTask,
      }),
      children: [
        insideContentGenerator
          ? o.jsx(x.iQw, {
              className: "icon-j0Uj0t",
            })
          : null,
        insideContentGenerator || (successTask > 0 && !processingTask)
          ? o.jsxs("div", {
              className: _c(
                "preview-container-gRcNZE",
                previewContainerClassName,
                {
                  "pulse-CLayWl": p,
                },
              ),
              onAnimationEnd: h,
              children: [
                o.jsx("div", {
                  className: "brand-gradient-uShPnd",
                }),
                o.jsx(R, {
                  coverUrl,
                  successTask,
                  processingTask,
                }),
                o.jsx("div", {
                  className: "border-Qpx7rQ",
                }),
              ],
            })
          : null,
      ],
    });
  }
  return null;
});
const S = s.PA(function (e) {
  const { indicator } = e;
  const { visible, totalTask, processingTask, successTask, failedTask } =
    indicator;
  const { insideContentGenerator } = l.useContext(d.R);
  const m = l.useMemo(
    () =>
      [
        y.Ay.t("web_new_task_generate_finish", {}, "生成完成"),
        y.Ay.t(
          "web_new_dre_m10n_aggregated_display_generation_complete",
          {},
          "生成完成，",
        ),
        y.Ay.t("web_new_task_is_generating", {}, "生成中..."),
        y.Ay.t("web_new_generating", {}, "生成中，"),
      ][(Math.min(processingTask, 1) << 1) | Math.min(failedTask, 1)],
    [processingTask, failedTask],
  );
  const p = l.useMemo(
    () =>
      y.Ay.t(
        "web_new_x_task_generate_fail",
        {
          num: failedTask,
        },
        "{num} 项失败",
      ),
    [failedTask],
  );
  const v = l.useCallback(
    (e) =>
      o.jsx("span", {
        style: {
          width: `${8 * e.toString().length}px`,
        },
        className: "num-uOtUWw",
        children: e,
      }),
    [],
  );
  if (visible) {
    return o.jsxs("div", {
      className: _c("text-r2N0MJ", {
        "inside-content-generator-TqDIvh": insideContentGenerator,
      }),
      children: [
        o.jsxs("span", {
          className: "progress-VRInh0",
          children: [v(successTask), "/", v(totalTask)],
        }),
        m,
        failedTask > 0 && p,
      ],
    });
  }
  return null;
});
var F = s.PA(function (e) {
  let t;
  const { className } = e;
  const s = i._(e, ["className"]);
  const c = p.h(v._);
  const y = p.h(m.K);
  const x = p.h(f.P);
  const k = p.h(b.D);
  const {
    insideContentGenerator,
    variant,
    taskIndicator = {},
  } = l.useContext(d.R);
  const indicator = insideContentGenerator
    ? x.getTaskSummaryByWorkspace(
        (t = k.data.selectedWorkspaceId) != null ? t : _.A,
      )
    : x.observableStore;
  const { totalTask, failedTask } = indicator;
  const {
    visible = indicator.visible,
    buttonProps,
    onClick,
  } = typeof taskIndicator === "function" ? {} : taskIndicator;
  const L = l.useCallback(() => {
    var e = c.createInstance(g.r, {});
    if (insideContentGenerator) {
      e.reportClickGeneration();
    } else {
      e.reportClickSideBar();
    }
  }, [c, insideContentGenerator]);
  const onClick_1 = l.useCallback(
    (e) => {
      e.stopPropagation();
      L();
      if (!onClick) {
        y.navigate(h.Du.AIGeneratedRecord);
        x.consumeUnreadTasks();
        return;
      }
      onClick(e);
    },
    [L, onClick, y, x],
  );
  if (
    variant !== "canvas" &&
    typeof taskIndicator !== "function" &&
    (insideContentGenerator || visible)
  ) {
    return o.jsxs(
      "div",
      r._(
        a._(
          {
            "data-task-indicator": true,
          },
          s,
        ),
        {
          className: _c("task-indicator-icvJiZ", className, {
            "inside-content-generator-uIZb92": insideContentGenerator,
            "no-task-R_p1Hz": !totalTask,
            "hidden-Dlrbga": !visible,
            "all-task-failed-CRCodq": totalTask && failedTask === totalTask,
          }),
          onClick: onClick_1,
          children: [
            o.jsx(A, {
              indicator,
              previewContainerClassName: "preview-container-eOMY_t",
            }),
            o.jsx(S, {
              indicator,
            }),
            o.jsx(C, a._({}, buttonProps)),
            o.jsx(M, {}),
          ],
        },
      ),
    );
  }
  return null;
});
export { F as R };
