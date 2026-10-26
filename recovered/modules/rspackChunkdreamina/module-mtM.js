import t from "z8";
import "Vx";
import "wy";
import n from "Ix";
import i from "h7y";
import r from "bT";
import o from "Qey";
import l from "yw";
import s from "bCt";
import d from "Gn4";
const c = [20, -4];
function m(e) {
  return e.scrollWidth > e.clientWidth;
}
function p(e) {
  return e.scrollHeight > e.clientHeight;
}
function v(e, className, a) {
  return t.jsx(n.A, {
    content: e,
    checkOverflow: a,
    children: t.jsx("span", {
      className,
      children: e,
    }),
  });
}
function F(e) {
  if (!(e <= 0)) {
    const u = new Date(e < 1000000000000 ? 1000 * e : e);
    if (!Number.isNaN(u.getTime())) {
      const a = (e) => String(e).padStart(2, "0");
      return ""
        .concat(u.getFullYear(), "-")
        .concat(a(u.getMonth() + 1), "-")
        .concat(a(u.getDate()));
    }
  }
}
function A(e, u, a) {
  const t = o.Ay.t(e, u, a);
  if ((t == null ? undefined : t.trim()) && t !== e) {
    return t;
  }
  return a;
}
function onMouseDown(e) {
  e.preventDefault();
  e.stopPropagation();
}
export var K = r.memo(function (e) {
  const {
    models,
    promotions,
    value,
    onChange,
    showCreationModeSwitch = false,
    creationMode = s.a.Standard,
    onCreationModeChange,
  } = e;
  const trigger = r.useMemo(() => ["hover", "focus"], []);
  const arrowIcon = r.useMemo(() => t.jsx(l.rIS, {}), []);
  const triggerProps = r.useMemo(
    () => ({
      position: "bottom",
      className: "dropdown-dLsY5w",
    }),
    [],
  );
  const options = r.useMemo(
    () =>
      models.map((e) => {
        var u;
        var i;
        var r;
        var o;
        return {
          value: e.modelId,
          label: v(e.displayName, "option-label-FsyrA0", m),
          icon: ((e) => {
            if (e) {
              return t.jsx("span", {
                className: "icon-mask-K6t38r",
                style: {
                  "--agent-model-icon-url": 'url("'.concat(e, '")'),
                },
                "aria-hidden": true,
              });
            }
          })(e.iconUrlSvg),
          extra: {
            tooltipProps: {
              position: "lt",
              triggerProps: {
                popupAlign: {
                  left: c,
                  right: c,
                },
              },
              trigger,
              className: "tooltip-rU0mIM",
              popupHoverStay: true,
              escToClose: true,
              content:
                ((u = promotions == null ? undefined : promotions[e.modelId]),
                (r = e.modelDescription),
                (o = (i = e.modelResumeName) == null ? undefined : i.trim()),
                t.jsx("div", {
                  className: "card-wr2NOM",
                  children: t.jsxs("div", {
                    className: "header-JQKZCs",
                    children: [
                      t.jsxs("div", {
                        className: "title-row-IQJEPn",
                        children: [
                          t.jsx("span", {
                            className: "title-TeCVUL",
                            children: e.displayName,
                          }),
                          u
                            ? ((e) => {
                                const { text, info } = ((e) => {
                                  if (e.type === "display-resource") {
                                    return e;
                                  }
                                  if (e.type === "limited-count") {
                                    const u = Math.max(0, e.remainingCount);
                                    return {
                                      text: A(
                                        "web_m10n_model_tag_free_uses",
                                        {
                                          num: u,
                                          n: u,
                                        },
                                        "限免".concat(u, "次"),
                                      ),
                                      info: A(
                                        "web_m10n_model_hover_free_uses",
                                        {
                                          num: u,
                                          n: u,
                                        },
                                        "限免次数：剩余".concat(u, "次"),
                                      ),
                                    };
                                  }
                                  const date1 =
                                    e.startTime === undefined
                                      ? undefined
                                      : F(e.startTime);
                                  const date2 =
                                    e.endTime === undefined
                                      ? undefined
                                      : F(e.endTime);
                                  return {
                                    text: A(
                                      "web_m10n_model_tag_free_now",
                                      {},
                                      "限免",
                                    ),
                                    info:
                                      date1 && date2
                                        ? A(
                                            "web_m10n_model_hover_free_now",
                                            {
                                              date1,
                                              date2,
                                            },
                                            "积分消耗限免时间："
                                              .concat(date1, " - ")
                                              .concat(date2),
                                          )
                                        : undefined,
                                  };
                                })(e);
                                return t.jsxs("span", {
                                  className: "promotion-f_uu7X",
                                  children: [
                                    info
                                      ? t.jsx(n.A, {
                                          content: info,
                                          children: t.jsx(l.G_L, {
                                            className: "promotion-info-qpTvZL",
                                            size: 14,
                                            "aria-label": info,
                                          }),
                                        })
                                      : null,
                                    v(text, "promotion-badge-pIkUkA", m),
                                  ],
                                });
                              })(u)
                            : null,
                          o
                            ? t.jsx("span", {
                                className: "inline-tag-tHu3lj",
                                children: v(o, "consume-tag-YFdkaS", m),
                              })
                            : null,
                        ],
                      }),
                      r
                        ? t.jsx(n.A, {
                            content: r,
                            checkOverflow: p,
                            children: t.jsx("p", {
                              className: "description-op0PZ0",
                              children: r,
                            }),
                          })
                        : null,
                    ],
                  }),
                })),
            },
          },
        };
      }),
    [trigger, models, promotions],
  );
  const y = models.find((e) => e.modelId === value);
  const onChange_1 = r.useCallback(
    (e) => {
      if (onCreationModeChange != null) {
        onCreationModeChange(e ? s.a.Ultra : s.a.Standard);
      }
    },
    [onCreationModeChange],
  );
  const dropdownRender = r.useCallback(
    (e) => {
      var u;
      var a;
      return t.jsxs(t.Fragment, {
        children: [
          e,
          showCreationModeSwitch && onCreationModeChange
            ? ((u = o.Ay.t("agent_model_deep_creation_title", {}, "深度创作")),
              (a = o.Ay.t(
                "agent_model_deep_creation_description",
                {},
                "适合复杂任务",
              )),
              t.jsxs("div", {
                className: "creation-mode-YEhUfD",
                onMouseDown,
                children: [
                  t.jsxs("div", {
                    className: "creation-mode-text-w4Mp1d",
                    children: [
                      t.jsx(n.A, {
                        content: u,
                        checkOverflow: true,
                        children: t.jsx("span", {
                          className: "creation-mode-title-dOl15W",
                          children: u,
                        }),
                      }),
                      t.jsx(n.A, {
                        content: a,
                        checkOverflow: true,
                        children: t.jsx("span", {
                          className: "creation-mode-description-kIcuWu",
                          children: a,
                        }),
                      }),
                    ],
                  }),
                  t.jsx("span", {
                    className: "creation-mode-switch-KWnGfZ",
                    children: t.jsx(i.A, {
                      size: "small",
                      checked: creationMode === s.a.Ultra,
                      onChange: onChange_1,
                    }),
                  }),
                ],
              }))
            : null,
        ],
      });
    },
    [creationMode, onChange_1, onCreationModeChange, showCreationModeSwitch],
  );
  const renderFormat = r.useCallback(
    () =>
      t.jsx("span", {
        className: "label-vC9Eb6",
        title: y == null ? undefined : y.displayName,
        children: y == null ? undefined : y.displayName,
      }),
    [y == null ? undefined : y.displayName],
  );
  return t.jsx(d.V, {
    className: "select-Pw_JzD",
    options,
    value,
    arrowIcon,
    renderFormat,
    dropdownRender,
    onChange,
    triggerProps,
  });
});
