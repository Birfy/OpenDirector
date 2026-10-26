import a from "z8";
import t from "bT";
import i from "ED";
import o from "Qey";
import r from "hUS";
import s from "NY";
import "Vx";
import "xj";
import c from "Ix";
import d from "R8";
import u from "yw";
import m from "f3";
import p from "Rrw";
import v from "dRT";
import h from "kW5";
import * as b from "./module-JON.js";
import k from "Pp";
import * as g from "./module-tja.js";
import f from "oa";
import x from "bk";
import w from "qa";
import _j from "xb";
import y from "TFO";
const C = t.memo(
  t.forwardRef(function (e, ref) {
    const { className } = e;
    const t = w._(e, ["className"]);
    return a.jsx(
      k.b,
      x._(
        f._(
          {
            ref,
          },
          t,
        ),
        {
          className: _j("button-NJZ464", className),
        },
      ),
    );
  }),
);
y.W(C);
const N = require("vpF");
const T = require("jkF");
const S = "time-fafpUT";
function R(e) {
  if (e) {
    return N(e).format("YYYY.MM.DD");
  }
  return "";
}
const F = t.memo(function (e) {
  const { skill } = e;
  const n = t.useMemo(
    () =>
      ((e) => {
        switch (e.source) {
          case m.fc.Platform:
            const date = R(e.updateTime);
            const n = [
              {
                key: "source",
                text: o.Ay.t(
                  "skill_dialog_manage_preview_official_label",
                  {},
                  "Dreamina",
                ),
              },
            ];
            if (date) {
              n.push({
                key: "updated-at",
                text: o.Ay.t(
                  "skill_dialog_manage_preview_updated_suffix",
                  {
                    date,
                  },
                  "Updated on {date}",
                ),
              });
            }
            return n;
          case m.fc.User:
            return ((e) => {
              if (T.tE(e)) {
                let l;
                let n;
                let a;
                let t;
                n =
                  ((l = e.author) == null ? undefined : l.name) ||
                  o.Ay.t("dreamina_web_mini_unknown_username", {}, "unknown");
                a = R(e.createTime);
                t = [
                  {
                    key: "author",
                    text: ""
                      .concat(o.Ay.t("skillmarket_author_from", {}, "By"))
                      .concat(n),
                    className: "author-oGOoea",
                  },
                ];
                if (a) {
                  t.push({
                    key: "created-at",
                    text: ""
                      .concat(
                        o.Ay.t(
                          "skillmarket_detail_label_publishtime",
                          {},
                          "Posted on",
                        ),
                        " ",
                      )
                      .concat(a),
                    className: S,
                  });
                }
                return t;
              }
              const i = R(e.updateTime);
              if (i) {
                return [
                  {
                    key: "modified-at",
                    text: ""
                      .concat(
                        o.Ay.t(
                          "skillmarket_manage_modifytime",
                          {},
                          "Edited on",
                        ),
                        " ",
                      )
                      .concat(i),
                    className: S,
                  },
                ];
              }
              return [];
            })(e);
          default:
            return [];
        }
      })(skill),
    [skill],
  );
  const i = t.useMemo(() => {
    if (n.length) {
      return n.map((e, l) =>
        a.jsxs(
          "span",
          {
            className: e.className,
            children: [
              l > 0 &&
                a.jsx("span", {
                  className: "divider-EV2KdK",
                  "aria-hidden": true,
                }),
              e.text,
            ],
          },
          e.key,
        ),
      );
    }
    return null;
  }, [n]);
  if (i) {
    return a.jsx("div", {
      className: "attribution-aGFifj",
      children: i,
    });
  }
  return null;
});
require("uw5");
const M = require("VAR");
const E = require("Si");
const DContext = t.createContext(undefined);
function W(e) {
  const { host, children } = e;
  return a.jsx(DContext.Provider, {
    value: host,
    children,
  });
}
function useI() {
  const e = t.useContext(DContext);
  if (!e) {
    throw Error(
      "SkillManagementModal must be rendered inside SkillManagementModalProvider",
    );
  }
  return e;
}
const z = require("./module-FGG.js");
const $ = require("./module-Ob9.js");
function useP(e) {
  const { skill, className, label, disabled = false } = e;
  const s = useI();
  const d = p.F();
  const [m, setM] = t.useState(false);
  const hRef = t.useRef(null);
  const bRef = t.useRef(null);
  const kRef = t.useRef(null);
  const g = t.useId();
  const f = t.useId();
  const xRef = t.useRef(false);
  const w = skill.isSkillPackage === true;
  const j = o.Ay.t(
    "skill_package_tooltip_edit_unsupported",
    {},
    "This isn't available with skill packages",
  );
  const y = o.Ay.t("skill_package_menu_reupload", {}, "Replace");
  const C = t.useCallback(() => {
    setM(false);
    if (!disabled) {
      var e;
      if ((e = hRef.current) != null) {
        e.focus();
      }
    }
  }, [disabled]);
  const onVisibleChange = t.useCallback(
    (e) => setM(e && !disabled),
    [disabled],
  );
  t.useEffect(() => {
    if (disabled) {
      setM(false);
    }
  }, [disabled]);
  t.useEffect(() => {
    var kRef_current = kRef.current;
    if (kRef_current != null) {
      kRef_current.addEventListener("cancel", C);
    }
    return () => {
      if (kRef_current == null) {
        return undefined;
      }
      return kRef_current.removeEventListener("cancel", C);
    };
  }, [C]);
  t.useEffect(() => {
    if (m && xRef.current) {
      var e;
      var l;
      if (
        !((l = bRef.current) == null || (e = l.querySelector("button")) == null)
      ) {
        e.focus();
      }
      xRef.current = false;
    }
  }, [m]);
  const A = [
    {
      visible: w || !!s.editSkillWithAgent,
      icon: a.jsx(u.cbs, {
        size: 16,
        "aria-hidden": "true",
      }),
      label: o.Ay.t(
        "skill_publish_manage_edit_skill_with_agent",
        {},
        "Edit in chat",
      ),
      onClick: () => {
        var e;
        if (!(w || disabled)) {
          C();
          if ((e = s.editSkillWithAgent) != null) {
            e.call(s, skill);
          }
        }
      },
    },
    {
      visible: true,
      icon: a.jsx(u.GI1, {
        size: 16,
        "aria-hidden": "true",
      }),
      label: o.Ay.t("skill_publish_manage_edit", {}, "Edit instructions"),
      onClick: () => {
        if (!(w || disabled)) {
          C();
          s.editorManager.enterEditMode(skill.id);
        }
      },
    },
  ];
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(M.A, {
        className: $.A.popover,
        trigger: "click",
        position: "br",
        showArrow: false,
        popupVisible: m && !disabled,
        onVisibleChange,
        content: a.jsxs("div", {
          ref: bRef,
          id: g,
          role: "menu",
          "aria-label": label,
          className: _j($.A.menu, {
            [$.A.menuCn]: true,
          }),
          onKeyDown: (e) => {
            e.stopPropagation();
            if (e.key === "Escape" || e.key === "ArrowLeft") {
              e.preventDefault();
              C();
            } else if (e.key === "Tab") {
              C();
            } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
              var l;
              var n = Array.from(e.currentTarget.querySelectorAll("button"));
              var a = n.indexOf(document.activeElement);
              if (
                (l =
                  n[
                    (a + (e.key === "ArrowDown" ? 1 : -1) + n.length) % n.length
                  ]) != null
              ) {
                l.focus();
              }
            }
          },
          children: [
            A.filter((e) => e.visible).map((e) =>
              a.jsx(
                c.A,
                {
                  content: j,
                  disabled: !w,
                  position: "top",
                  children: a.jsxs("button", {
                    type: "button",
                    role: "menuitem",
                    "aria-disabled": w || disabled,
                    disabled,
                    "aria-describedby": w ? f : undefined,
                    onClick: e.onClick,
                    children: [
                      e.icon,
                      a.jsx(c.A, {
                        content: e.label,
                        checkOverflow: true,
                        disabled: w,
                        children: a.jsx("span", {
                          className: $.A.menuLabel,
                          children: e.label,
                        }),
                      }),
                    ],
                  }),
                },
                e.label,
              ),
            ),
            d &&
              a.jsx(z.f, {
                label: y,
                menuVisible: m,
                menuRef: bRef,
                disabled,
                onClick: () => {
                  if (!disabled) {
                    var e;
                    if (p.F() && s.onUploadClick(skill)) {
                      setM(false);
                      if ((e = kRef.current) != null) {
                        e.click();
                      }
                    }
                  }
                },
              }),
            w &&
              a.jsx("span", {
                id: f,
                hidden: true,
                children: j,
              }),
          ],
        }),
        children: a.jsx(c.A, {
          content: label,
          disabled: m,
          position: "bottom",
          children: a.jsx("button", {
            ref: hRef,
            type: "button",
            className,
            "aria-label": label,
            disabled,
            "aria-disabled": disabled,
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": m ? g : undefined,
            onClick: (e) => {
              e.stopPropagation();
              xRef.current = e.detail === 0;
            },
            onKeyDown: (e) => {
              if (!disabled) {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  xRef.current = true;
                  setM(true);
                }
              }
            },
            children: a.jsx(u.GI1, {
              size: 20,
              "aria-hidden": "true",
            }),
          }),
        }),
      }),
      a.jsx("input", {
        ref: kRef,
        type: "file",
        hidden: true,
        accept: w ? E.MY.join(",") : E.Uf,
        onChange: (e) => {
          var n;
          var a = (n = e.currentTarget.files) == null ? undefined : n[0];
          e.currentTarget.value = "";
          C();
          if (a !== undefined && !disabled && p.F()) {
            s.uploadSkill(a, skill);
          }
        },
      }),
    ],
  });
}
const V = "content-section-RmbzW6";
const O = "section-label-ycY0c_";
function Z() {
  return document.body;
}
const K = i.PA(function (e) {
  const { skill, onClose } = e;
  const i = useI();
  const { editorManager, updatingSkillStatusIds } = i;
  const { id, name, description, instruction, source, status } = skill;
  const A = status === m.Ir.Active;
  const T = updatingSkillStatusIds.includes(id);
  const S = i.reuploadingSkillIds.includes(id);
  const R = source === m.fc.Market;
  const M = skill.isSkillPackage === true;
  const E = p.F();
  const D = v.P(skill);
  const W = i.canPublishSkill(skill);
  const z = D && source !== m.fc.Platform;
  const $ = skill.source === m.fc.User && D;
  const K = skill.source === m.fc.User;
  const U = t.useCallback(
    () =>
      s._(function* () {
        if (!i.reuploadingSkillIds.includes(id)) {
          if (yield i.useSkill(skill)) {
            editorManager.leaveFormView({
              kind: "close-modal",
            });
          }
        }
      })(),
    [id, skill, i, editorManager],
  );
  const B = t.useCallback(() => {
    editorManager.setSkillActive(id, true);
  }, [id, editorManager]);
  const L = t.useCallback(
    (e) => {
      e.stopPropagation();
      if (!i.reuploadingSkillIds.includes(id)) {
        editorManager.downloadCurrentSkill();
      }
    },
    [editorManager, i, id],
  );
  const J = t.useCallback(
    (e) =>
      s._(function* () {
        e.stopPropagation();
        if (!i.reuploadingSkillIds.includes(id)) {
          yield i.requestDeleteSkill(skill);
        }
      })(),
    [i, id, skill],
  );
  const q = t.useCallback(
    (e) => {
      var n;
      e.stopPropagation();
      if (
        !(
          !W ||
          i.reuploadingSkillIds.includes(id) ||
          (n = i.publishSkill) == null
        )
      ) {
        n.call(i, skill);
      }
    },
    [W, i, id, skill],
  );
  const H = o.Ay.t("skill_dialog_manage_button_activate", {}, "Activate");
  const X =
    source === m.fc.Market
      ? o.Ay.t("skillmarket_detail_button_use", {}, "Use in chat")
      : o.Ay.t("skill_dialog_manage_button_use", {}, "Try in chat");
  const G = o.Ay.t("skill_publish_button_publish", {}, "Post");
  const Q = o.Ay.t("skill_dialog_manage_button_edit", {}, "Edit");
  const Y = o.Ay.t(
    "skill_publish_manage_tooltip_protected",
    {},
    "Can't edit this skill because it contains third party content",
  );
  const ee = o.Ay.t("skill_dialog_manage_more_download", {}, "Download");
  const el = o.Ay.t("skill_dialog_manage_more_delete", {}, "Delete");
  const en = o.Ay.t("skill_publish_manage_more", {}, "More");
  const ea = o.Ay.t(
    "skill_dialog_manage_preview_desc_title",
    {},
    "Description",
  );
  const et = o.Ay.t(
    "skill_dialog_manage_preview_content_title",
    {},
    "Instructions",
  );
  const ei = o.Ay.t("skill_dialog_manage_tag_skill_package", {}, "Package");
  const eo = A ? X : H;
  const actions = t.useMemo(() => {
    var e = [];
    if ($) {
      e.push({
        key: "download",
        icon: a.jsx(u.i8u, {
          size: 16,
        }),
        label: ee,
        disabled: S,
        onClick: L,
      });
    }
    if (K) {
      e.push({
        key: "delete",
        icon: a.jsx(u.xV8, {
          size: 16,
        }),
        label: el,
        disabled: S,
        onClick: J,
      });
    }
    return e;
  }, [el, ee, J, L, K, $, S]);
  const es = t.useMemo(
    () =>
      a.jsx(u.gzW, {
        "aria-hidden": "true",
        size: 20,
      }),
    [],
  );
  const ec = t.useMemo(() => {
    if (z) {
      if (instruction) {
        return a.jsx(h.n, {
          className: "instruction-editor-oZCYIp",
          editorContentClassName: "instruction-editor-content-BJdrVS",
          value: instruction,
        });
      }
      return null;
    }
    return a.jsx(b.m, {
      label: o.Ay.t(
        "skill_publish_manage_placeholder_not_public",
        {},
        "The creator chose not to share these instructions",
      ),
    });
  }, [instruction, z]);
  const ed = t.useMemo(
    () =>
      a.jsx(F, {
        skill,
      }),
    [skill],
  );
  const eu = t.useMemo(() => {
    if (M && !E) {
      return null;
    }
    if (skill.source === m.fc.User && D) {
      return a.jsx(useP, {
        skill,
        className: "edit-skill-button-BJjr1n",
        label: Q,
        disabled: S,
      });
    }
    if (R) {
      return a.jsx(c.A, {
        content: Y,
        position: "bottom",
        getPopupContainer: Z,
        children: a.jsx(C, {
          icon: a.jsx(u.GI1, {
            size: 20,
          }),
          disabled: true,
          "aria-label": Q,
        }),
      });
    }
    return null;
  }, [E, Y, Q, R, D, M, S, skill]);
  const em = t.useMemo(() => {
    if (W && i.publishSkill) {
      return a.jsx(c.A, {
        content: G,
        position: "bottom",
        getPopupContainer: Z,
        children: a.jsx(C, {
          icon: a.jsx(u.tTg, {
            size: 20,
          }),
          onClick: q,
          disabled: S,
          "aria-label": G,
        }),
      });
    }
    return null;
  }, [W, q, i.publishSkill, S, G]);
  const ep = t.useMemo(() => {
    if (actions.length === 0) {
      return null;
    }
    return a.jsx(g.k, {
      actions,
      disabled: S,
      position: "br",
      triggerClassName: "more-button-mNPoGk",
      triggerAriaLabel: en,
      triggerTooltipContent: en,
      triggerTooltipProps: {
        position: "bottom",
        getPopupContainer: Z,
      },
    });
  }, [actions, S, en]);
  const ev = t.useMemo(() => {
    if (ec) {
      return a.jsxs("div", {
        className: V,
        children: [
          a.jsx("div", {
            className: O,
            children: et,
          }),
          ec,
        ],
      });
    }
    return null;
  }, [ec, et]);
  const eh = t.useMemo(() => {
    if (ed) {
      return a.jsx("div", {
        className: V,
        children: ed,
      });
    }
    return null;
  }, [ed]);
  return a.jsxs("div", {
    className: "detail-DJ_cDi",
    children: [
      a.jsxs("div", {
        className: "header-y9BiNG",
        children: [
          a.jsxs("div", {
            className: "header-left-NL1EBJ",
            children: [
              a.jsx("div", {
                className: "header-title-BD05nG",
                children: a.jsx(c.A, {
                  content: name,
                  checkOverflow: true,
                  getPopupContainer: Z,
                  children: a.jsx("span", {
                    className: "title-4pHFL8",
                    children: name,
                  }),
                }),
              }),
              M
                ? a.jsx("span", {
                    className: "skill-package-tag-krQKFf",
                    children: ei,
                  })
                : null,
            ],
          }),
          a.jsxs("div", {
            className: "header-actions-RsG1zv",
            children: [
              a.jsx(c.A, {
                content: eo,
                checkOverflow: true,
                position: "bottom",
                getPopupContainer: Z,
                children: a.jsx(d.A, {
                  className: "use-skill-button-dpY4CE",
                  type: "primary",
                  disabled: T || S,
                  onClick: A ? U : B,
                  children: a.jsx("span", {
                    className: "button-text-VT6UoU",
                    children: eo,
                  }),
                }),
              }),
              eu,
              em,
              ep,
              a.jsx(k.b, {
                "aria-label": o.Ay.t("dreamina_web_common_close"),
                className: "close-button-ZWRIPh",
                icon: es,
                onClick: onClose,
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "body-BhYAEz",
        children: a.jsxs("div", {
          className: "body-content-bK1KOK",
          children: [
            a.jsxs("div", {
              className: V,
              children: [
                a.jsx("div", {
                  className: O,
                  children: ea,
                }),
                a.jsx("div", {
                  className: "description-content-l50p5n",
                  children: description,
                }),
              ],
            }),
            ev,
            eh,
          ],
        }),
      }),
    ],
  });
});
const U = require("c8J");
const B = require("Hr");
const L = require("ltb");
const J = require("O6V");
const q = require("dC");
const H = require("Fkh");
const X = require("EGk");
const G = require("OK4");
const Q = require("oxX");
const Y = require("Vf");
const ee = require("XQ");
const el = require("z7v");
const en = require("Dmc");
const ea = require("RY");
const et = require("xz3");
const ei = "toolbar-group-O8xVdm";
const eo = t.memo(function (e) {
  const {
    editor,
    readOnly = false,
    isSourceMode,
    onToggleSourceMode,
    onExpandClick,
  } = e;
  t.useEffect(() => {
    editor.setEditable(!readOnly);
  }, [editor, readOnly]);
  const s = t.useMemo(() => a.jsx(u.L9n, {}), []);
  return a.jsx("div", {
    className: "toolbar-hXmJNz",
    children: a.jsxs("div", {
      className: "toolbar-inner-Cqgzqr",
      children: [
        a.jsxs("div", {
          className: ei,
          children: [
            a.jsx(H.X, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(X.r, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(G.c, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(Q.s, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(Y.O, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(ee.b, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(el.b, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(en.b, {
              editor,
              disabled: isSourceMode,
            }),
            a.jsx(ea.V, {
              isSourceMode,
              onToggle: onToggleSourceMode,
            }),
          ],
        }),
        a.jsx("div", {
          className: ei,
          children: onExpandClick
            ? a.jsx(et.K, {
                icon: s,
                onClick: onExpandClick,
              })
            : null,
        }),
      ],
    }),
  });
});
const er = require("./module-T59.js");
const es = require("QmW");
const ec = require("qsz");
const ed = require("t4");
const eu = require("Dl");
const em = require("DXQ");
const ep = require("IYU");
function useEv(e) {
  const lRef = t.useRef(e);
  lRef.current = e;
  return lRef;
}
const eh = t.memo(function (e) {
  let l;
  const {
    className,
    editorContentClassName,
    style,
    editable = false,
    value,
    defaultValue,
    toolbar,
    onChange,
    onInstructionCanonicalized,
    showSourceToggle = false,
    showSourceLineNumbers = true,
  } = e;
  const b = w._(e, [
    "className",
    "editorContentClassName",
    "style",
    "editable",
    "value",
    "defaultValue",
    "toolbar",
    "onChange",
    "onInstructionCanonicalized",
    "showSourceToggle",
    "showSourceLineNumbers",
  ]);
  const k = useEv(onChange);
  const g = useEv(onInstructionCanonicalized);
  const f = useEv(b);
  const x = t.useMemo(
    () =>
      o.Ay.t(
        "skill_form_content_placeholder",
        {},
        "Add instructions for how this skill should work",
      ),
    [],
  );
  const onUpdate = t.useCallback(
    (e) => {
      var l;
      var { editor } = e;
      if ((l = k.current) != null) {
        l.call(k, editor.storage.markdown.getMarkdown());
      }
    },
    [k],
  );
  const extensions = t.useMemo(
    () => [
      ...ec.k(editable, f),
      er.A.configure({
        placeholder: x,
      }),
    ],
    [editable, f, x],
  );
  const C = es.hG(
    {
      extensions,
      editable,
      content: value != null ? value : defaultValue,
      onUpdate,
    },
    [extensions, editable],
  );
  const getMarkdown = t.useCallback(() => {
    if (C) {
      return C.storage.markdown.getMarkdown();
    }
    return "";
  }, [C]);
  const applyMarkdown = t.useCallback(
    (e) => {
      var l;
      if (C) {
        C.commands.setContent(e, {
          emitUpdate: false,
        });
        if ((l = k.current) != null) {
          l.call(k, e);
        }
      }
    },
    [C, k],
  );
  const T = t.useCallback(
    (e) => {
      var l;
      if ((l = k.current) != null) {
        l.call(k, e);
      }
    },
    [k],
  );
  const {
    isSourceMode,
    sourceValue,
    handleToggleSourceMode,
    handleSourceChange,
  } = em.v({
    getMarkdown,
    applyMarkdown,
    onChange: T,
  });
  t.useEffect(() => {
    if (
      C &&
      value !== undefined &&
      !isSourceMode &&
      C.storage.markdown.getMarkdown() !== value
    ) {
      var e;
      var { from, to } = C.state.selection;
      C.commands.setContent(value, {
        emitUpdate: false,
      });
      C.commands.setTextSelection({
        from,
        to,
      });
      var a = C.storage.markdown.getMarkdown();
      if (a !== value) {
        if ((e = g.current) != null) {
          e.call(g, a);
        }
      }
    }
  }, [C, isSourceMode, g, value]);
  const E = t.useMemo(
    () => ({
      isSourceMode,
      onToggleSourceMode: handleToggleSourceMode,
    }),
    [isSourceMode, handleToggleSourceMode],
  );
  if (!C) {
    return null;
  }
  const D = editable
    ? (l = toolbar == null ? undefined : toolbar(C, E)) != null
      ? l
      : a.jsx(ep.M, {
          editor: C,
          isSourceMode: showSourceToggle ? isSourceMode : undefined,
          onToggleSourceMode: showSourceToggle
            ? handleToggleSourceMode
            : undefined,
        })
    : null;
  return a.jsx(eu.I, {
    value: C,
    children: a.jsxs("div", {
      className: _j(
        ed.A.markdownEditor,
        "skill-modal-markdown-editor-RitzgG",
        className,
      ),
      style,
      children: [
        D,
        isSourceMode
          ? a.jsx(em.P, {
              className: editorContentClassName,
              value: sourceValue,
              readOnly: !editable,
              showLineNumbers: showSourceLineNumbers,
              onChange: handleSourceChange,
            })
          : a.jsx(es.$Z, {
              className: _j(ed.A.editorContent, editorContentClassName),
              editor: C,
            }),
      ],
    }),
  });
});
const eb = t.memo(function (e) {
  const {
    className,
    instruction,
    readOnly = false,
    onInstructionChange,
    onInstructionCanonicalized,
    onExpandClick,
  } = e;
  const c = w._(e, [
    "className",
    "instruction",
    "readOnly",
    "onInstructionChange",
    "onInstructionCanonicalized",
    "onExpandClick",
  ]);
  const d = t.useCallback(
    (e) => {
      if (!readOnly) {
        onInstructionChange(e);
      }
    },
    [onInstructionChange, readOnly],
  );
  const toolbar = t.useCallback(
    (editor, l) =>
      a.jsx(
        eo,
        f._(
          {
            editor,
            readOnly,
            onExpandClick,
          },
          l,
        ),
      ),
    [onExpandClick, readOnly],
  );
  return a.jsx("div", {
    className: _j(
      "editor-root-twXsnN",
      className,
      readOnly && "read-only-JiJXwP",
    ),
    children: a.jsxs("div", {
      className: "editor-surface-Sp6eWl",
      children: [
        a.jsx(
          eh,
          f._(
            {
              className: "markdown-editor-NGxovH",
              editorContentClassName: "editor-content-da_QPw",
              editable: true,
              showSourceToggle: true,
              showSourceLineNumbers: false,
              value: instruction,
              toolbar,
              onChange: d,
              onInstructionCanonicalized,
            },
            c,
          ),
        ),
        readOnly
          ? a.jsx("div", {
              className: "disabled-overlay-QJYZ5Q",
              "aria-hidden": true,
            })
          : null,
      ],
    }),
  });
});
const ek = require("cO");
const eg = t.memo(function (e) {
  const { toolsetUrl, onCheckDreaminaTools } = e;
  const t = o.Ay.t(
    "skill_form_content_tooltip_tools",
    {},
    "Use tools in your instructions to build custom skills that fit your workflow.",
  );
  const i = o.Ay.t("skill_form_content_link_tools", {}, "View available tools");
  return a.jsxs(a.Fragment, {
    children: [
      t,
      "\xa0",
      a.jsx("a", {
        className: "tooltip-link-caHIvM",
        href: ek.m(toolsetUrl != null ? toolsetUrl : "", null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6SjBjR0pIZDNaWk1qbDBZM*M1ZFZwWE5%Qmpl$*w2W$RKc2MySkRNWFJa$npWb1dqSldkRnB-TlRCT$Z6RjJXa2RH-zB3e$JtNWFWel$3W$ZkTmR*b3lWblZh$0$wb1pF-z$l$XhZ$*5KaF-zaHp%RmN4Z*xwSFJuTk1WMD%yWW01%2JHSn$$WFJr%npsMllraFNjR05ETlRCak0ya*9ZMjFrT$dOM1B%MD0",
        }),
        target: "_blank",
        rel: "noreferrer",
        onClick: onCheckDreaminaTools,
        children: i,
      }),
    ],
  });
});
const ef = "field-group-B7JhDy";
const ex = "field-label-fJ_x6r";
const ew = "required-ehJWwG";
const ej = t.memo(function (e) {
  const {
    name,
    description,
    instruction,
    readOnly = false,
    toolsetUrl,
    onExpandInstructionClick,
    onNameChange,
    onNameCompositionStart,
    onNameCompositionEnd,
    onDescriptionChange,
    onInstructionChange,
    onInstructionCanonicalized,
    onCheckDreaminaTools,
  } = e;
  const x = w._(e, [
    "name",
    "description",
    "instruction",
    "readOnly",
    "toolsetUrl",
    "onExpandInstructionClick",
    "onNameChange",
    "onNameCompositionStart",
    "onNameCompositionEnd",
    "onDescriptionChange",
    "onInstructionChange",
    "onInstructionCanonicalized",
    "onCheckDreaminaTools",
  ]);
  const j = o.Ay.t("skill_form_name_label", {}, "Skill name");
  const _ = o.Ay.t(
    "skill_form_name_placeholder",
    {},
    "Use only English letters (A–Z), numbers, and “-”",
  );
  const y = o.Ay.t("skill_form_desc_label", {}, "Description");
  const C = o.Ay.t(
    "skill_form_desc_placeholder",
    {},
    "What can this skill help with?",
  );
  const N = o.Ay.t("skill_form_content_label", {}, "Instructions");
  const content = t.useMemo(
    () =>
      a.jsx(eg, {
        toolsetUrl,
        onCheckDreaminaTools,
      }),
    [toolsetUrl, onCheckDreaminaTools],
  );
  return a.jsxs("div", {
    className: "body-WyTRo9",
    children: [
      a.jsxs("div", {
        className: ef,
        children: [
          a.jsxs("label", {
            className: ex,
            children: [
              j,
              a.jsx("span", {
                className: ew,
                children: "*",
              }),
            ],
          }),
          a.jsx("div", {
            className: "name-input-Lxjos5",
            children: a.jsx(J.X, {
              value: name,
              placeholder: _,
              maxLength: L.q,
              showWordLimit: true,
              disabled: readOnly,
              onChange: onNameChange,
              onCompositionStart: onNameCompositionStart,
              onCompositionEnd: onNameCompositionEnd,
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: ef,
        children: [
          a.jsxs("label", {
            className: ex,
            children: [
              y,
              a.jsx("span", {
                className: ew,
                children: "*",
              }),
            ],
          }),
          a.jsx("div", {
            className: "description-input-sKs30y",
            children: a.jsx(q.X, {
              className: "description-textarea-udcvdD",
              value: description,
              placeholder: C,
              maxLength: L.t,
              disabled: readOnly,
              showWordLimit: true,
              onChange: onDescriptionChange,
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "field-group-grow-AYF3Pb",
        children: [
          a.jsxs("label", {
            className: ex,
            children: [
              N,
              a.jsx("span", {
                className: ew,
                children: "*",
              }),
              a.jsx(c.A, {
                content,
                children: a.jsx("span", {
                  className: "info-icon-oSvEZ9",
                  children: a.jsx(u.G_L, {
                    size: 14,
                  }),
                }),
              }),
            ],
          }),
          a.jsx("div", {
            className: "editor-wrapper-T1JCuZ",
            children: a.jsx(
              eb,
              f._(
                {
                  className: "skill-editor-G5HCNT",
                  instruction,
                  readOnly,
                  onInstructionChange,
                  onInstructionCanonicalized,
                  onExpandClick: onExpandInstructionClick,
                },
                x,
              ),
            ),
          }),
        ],
      }),
    ],
  });
});
const e_ = require("SU");
const ey = t.memo(function (e) {
  const { mode, disabled, loading, onSubmit } = e;
  const r = o.Ay.t("skill_button_create", {}, "Create");
  const s = o.Ay.t("skill_button_save", {}, "Save");
  return a.jsx("div", {
    className: "footer-JfRN21",
    children: a.jsx(e_.K, {
      className: "submit-button-pBt1LW",
      type: "primary",
      disabled,
      loading,
      onClick: onSubmit,
      children: mode === "create" ? r : s,
    }),
  });
});
const eC = t.memo(function (e) {
  const { mode, onBack, onClose } = e;
  const i = o.Ay.t("skill_dialog_create_title", {}, "Write skill instructions");
  const r = o.Ay.t("skill_dialog_edit_title", {}, "Edit skill");
  return a.jsxs("div", {
    className: "header-NLuaFj",
    children: [
      a.jsxs("div", {
        className: "title-group-rJ6ICm",
        children: [
          mode === "edit"
            ? a.jsx("button", {
                type: "button",
                className: "back-button-Ogaenx",
                "aria-label": o.Ay.t("canvas_tool_returns", {}, "返回"),
                onClick: onBack,
                children: a.jsx(u.gu7, {
                  size: 20,
                }),
              })
            : null,
          a.jsx("span", {
            className: "title-Vjw67k",
            children: mode === "create" ? i : r,
          }),
        ],
      }),
      a.jsx("button", {
        type: "button",
        className: "close-button-B6uaPf",
        "aria-label": o.Ay.t("dreamina_web_common_close", {}, "关闭"),
        onClick: onClose,
        children: a.jsx(u.gzW, {
          size: 20,
        }),
      }),
    ],
  });
});
require("tS2");
const eN = require("mY");
const eA = require("PC");
const eT = require("PVu");
function eS() {
  return document.body;
}
const eR = t.memo(function (e) {
  const {
    visible,
    skillName,
    instruction,
    readOnly = false,
    toolsetUrl,
    onInstructionChange,
    onInstructionCanonicalized,
    onClose,
    onCheckDreaminaTools,
  } = e;
  const v = w._(e, [
    "visible",
    "skillName",
    "instruction",
    "readOnly",
    "toolsetUrl",
    "onInstructionChange",
    "onInstructionCanonicalized",
    "onClose",
    "onCheckDreaminaTools",
  ]);
  const { useUpdatedSkillIcon } = useI();
  const b = t.useMemo(
    () => ({
      getPopupContainer: eS,
      zIndex: Number(eT.A["modal-z-index"]) + 1,
    }),
    [],
  );
  if (!visible) {
    return null;
  }
  const k = o.Ay.t("skill_expand_breadcrumb_content", {}, "Instructions");
  const g = o.Ay.t("skill_expand_link_tools", {}, "View available tools");
  const j = skillName ? "".concat(skillName, " / ").concat(k) : k;
  return eA.createPortal(
    a.jsx(
      eN.Ay,
      x._(f._({}, b), {
        children: a.jsxs("div", {
          className: "fullscreen-editor-Td0V3c",
          children: [
            a.jsxs("div", {
              className: "header-qGnbdf",
              children: [
                a.jsxs("div", {
                  className: "header-left-_gHkP0",
                  children: [
                    a.jsx("span", {
                      className: "skill-icon-nJRReg",
                      children: useUpdatedSkillIcon
                        ? a.jsx(u.VKR, {
                            size: 20,
                          })
                        : a.jsx(u.ThK, {
                            size: 20,
                          }),
                    }),
                    a.jsx("div", {
                      className: "title-group-VBhg_p",
                      children: a.jsx("span", {
                        className: "title-K986A_",
                        children: j,
                      }),
                    }),
                    a.jsx("span", {
                      className: "divider-cY6C22",
                    }),
                    a.jsxs("a", {
                      className: "toolset-link-zs_Jtg",
                      href: ek.m(toolsetUrl != null ? toolsetUrl : "", null, {
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
                          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMll6SjBjR0pIZDNaWk1qbDBZM*M1ZFZwWE5%Qmpl$*w2W$RKc2MySkRNWFJa$npWb1dqSldkRnB-TlRCT$Z6RjJXa2RH-zB3e$JtNWFWel$3W$ZkTmR*b3lWblZh$0$wb1pF-z$l$XhZ$*5KaF-zaHp%RmN4Z*xwSFJuTk1WMW94WWtkN*$sa3pTbXhh$npSMFdsZFNjR1JIT1hsTWJsSjZa$WRHZ$ZvelZubz0",
                      }),
                      target: "_blank",
                      rel: "noreferrer",
                      onClick: onCheckDreaminaTools,
                      children: [
                        a.jsx(u.G_L, {
                          size: 16,
                        }),
                        g,
                      ],
                    }),
                  ],
                }),
                a.jsx("button", {
                  type: "button",
                  className: "close-button-LTS9ja",
                  "aria-label": o.Ay.t("dreamina_web_common_close", {}, "关闭"),
                  onClick: onClose,
                  children: a.jsx(u.gzW, {
                    size: 20,
                  }),
                }),
              ],
            }),
            a.jsx("div", {
              className: "editor-container-xTDwSY",
              children: a.jsx(
                eh,
                f._(
                  {
                    className: "editor-nj_zoi",
                    editable: !readOnly,
                    showSourceToggle: true,
                    value: instruction,
                    onChange: onInstructionChange,
                    onInstructionCanonicalized,
                  },
                  v,
                ),
              ),
            }),
          ],
        }),
      }),
    ),
    document.body,
  );
});
const eF = i.PA(function (e) {
  const { mode, onClose } = e;
  const i = useI();
  const { editorManager, markdownReportCallbacks } = i;
  const editorManager_currentSkill = editorManager.currentSkill;
  const { data, metadata } = editorManager;
  const { name, description, instruction } = data;
  const { canSubmitForm } = editorManager;
  const { isSubmitting, isFormFieldsLocked, toolsetGuideDocUrl } = metadata;
  const [visible, setX] = t.useState(false);
  const jRef = t.useRef(false);
  const _ = mode === "create" ? "skill_create" : "skill_edit";
  t.useEffect(() => {
    var e;
    i.setMarkdownContext(
      _,
      (e =
        editorManager_currentSkill == null
          ? undefined
          : editorManager_currentSkill.id) != null
        ? e
        : "",
    );
    return () => {
      i.clearMarkdownContext();
    };
  }, [
    i,
    editorManager_currentSkill == null
      ? undefined
      : editorManager_currentSkill.id,
    _,
  ]);
  const invalid_character = t.useMemo(
    () =>
      U.A(
        () =>
          B.l.warning(
            o.Ay.t(
              "skill_toast_name_invalid",
              {},
              "Use only English letters (A–Z), numbers, and “-” in the skill name",
            ),
          ),
        3000,
        {
          trailing: false,
        },
      ),
    [],
  );
  const duplicate = t.useMemo(
    () =>
      U.A(
        () =>
          B.l.warning(
            o.Ay.t(
              "skill_form_name_duplicate",
              {},
              "A skill with this name already exists. Choose a different name.",
            ),
          ),
        3000,
        {
          trailing: false,
        },
      ),
    [],
  );
  t.useEffect(
    () => () => {
      invalid_character.cancel();
      duplicate.cancel();
    },
    [invalid_character, duplicate],
  );
  const N = t.useMemo(
    () => ({
      invalid_character,
      duplicate,
    }),
    [invalid_character, duplicate],
  );
  const A = t.useCallback(
    (e, l) => {
      var n;
      var a = editorManager.applyFormName(e);
      if ((l == null ? undefined : l.showToast) && a !== "valid") {
        if ((n = N[a]) != null) {
          n.call(N);
        }
      }
    },
    [editorManager, N],
  );
  const onNameChange = t.useCallback(
    (e, l) => {
      var n =
        "isComposing" in l.nativeEvent && l.nativeEvent.isComposing === true;
      if (jRef.current || n) {
        editorManager.setFormNameRaw(e);
      } else {
        A(e, {
          showToast: true,
        });
      }
    },
    [editorManager, A],
  );
  const onNameCompositionStart = t.useCallback(() => {
    jRef.current = true;
  }, []);
  const onNameCompositionEnd = t.useCallback(
    (e) => {
      jRef.current = false;
      A(e.currentTarget.value, {
        showToast: true,
      });
    },
    [A],
  );
  const onDescriptionChange = t.useCallback(
    (e) => {
      editorManager.setFormDescription(e);
    },
    [editorManager],
  );
  const onInstructionChange = t.useCallback(
    (e) => {
      editorManager.setFormInstruction(e);
    },
    [editorManager],
  );
  const onInstructionCanonicalized = t.useCallback(
    (e) => {
      editorManager.applyInstructionCanonicalValue(e);
    },
    [editorManager],
  );
  const onSubmit = t.useCallback(() => {
    editorManager.submitForm();
  }, [editorManager]);
  const W = t.useCallback(() => {
    if (editorManager_currentSkill) {
      editorManager.leaveFormView({
        kind: "detail",
        skillId: editorManager_currentSkill.id,
      });
    }
  }, [editorManager_currentSkill, editorManager]);
  const onBack = t.useMemo(() => {
    if (mode === "edit") {
      return W;
    }
  }, [mode, W]);
  const onExpandInstructionClick = t.useCallback(() => {
    if (!isFormFieldsLocked) {
      setX(true);
    }
  }, [isFormFieldsLocked]);
  const P = t.useCallback(() => {
    setX(false);
  }, []);
  const onCheckDreaminaTools = t.useCallback(() => {
    i.reportCheckDreaminaTools();
  }, [i]);
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: "form-qC7eBQ",
        children: [
          a.jsx(eC, {
            mode,
            onBack,
            onClose,
          }),
          a.jsx(
            ej,
            f._(
              {
                name,
                description,
                instruction,
                readOnly: isFormFieldsLocked,
                toolsetUrl: toolsetGuideDocUrl,
                onExpandInstructionClick,
                onNameChange,
                onNameCompositionStart,
                onNameCompositionEnd,
                onDescriptionChange,
                onInstructionChange,
                onInstructionCanonicalized,
                onCheckDreaminaTools,
              },
              markdownReportCallbacks,
            ),
          ),
          a.jsx(ey, {
            mode,
            disabled: !canSubmitForm || isSubmitting,
            loading: isSubmitting,
            onSubmit,
          }),
        ],
      }),
      a.jsx(
        eR,
        f._(
          {
            visible,
            skillName: name,
            instruction,
            readOnly: isFormFieldsLocked,
            toolsetUrl: toolsetGuideDocUrl,
            onInstructionChange,
            onInstructionCanonicalized,
            onClose: P,
            onCheckDreaminaTools,
          },
          markdownReportCallbacks,
        ),
      ),
    ],
  });
});
const eM = i.PA(function (e) {
  const { onClose } = e;
  const { editorManager } = useI();
  const {
    metadata: { viewMode },
  } = editorManager;
  const { currentSkill } = editorManager;
  return a.jsx(a.Fragment, {
    children: ((e, l, n) => {
      switch (e) {
        case "wait":
          const t = o.Ay.t("skill_menu_search_loading", {}, "Loading...");
          return a.jsxs("div", {
            className: "wait-placeholder-ebMLUo",
            children: [
              a.jsx(r.w, {
                size: 16,
                className: "wait-placeholder-icon-qW9MZ8",
              }),
              a.jsx("span", {
                children: t,
              }),
            ],
          });
        case "detail":
          if (n) {
            return a.jsx(K, {
              skill: n,
              onClose: l,
            });
          }
          return null;
        case "create":
          return a.jsx(
            eF,
            {
              mode: "create",
              onClose: l,
            },
            "create",
          );
        case "edit":
          if (n) {
            return a.jsx(
              eF,
              {
                mode: "edit",
                onClose: l,
              },
              "edit-".concat(n.id),
            );
          }
          return null;
      }
    })(viewMode, onClose, currentSkill),
  });
});
const eE = require("./module-Io_3.js");
const eD = require("pr");
const eW = t.memo(function (e) {
  const { checked, disabled = false } = e;
  return a.jsx("span", {
    className: _j("mini-switch-ZJItNw", {
      "checked-T6sru0": checked,
      "disabled-tpNPnv": disabled,
    }),
    "aria-hidden": true,
    children: a.jsx("span", {
      className: "handler-I75ycQ",
    }),
  });
});
function eI(e) {
  const l = o.Ay.t("skill_package_list_uploading", {}, "Uploading...");
  const n = a.jsxs("span", {
    className: "label-HWCLFr",
    children: [
      a.jsx("span", {
        className: "text-ff1rUc",
        children: l.replace(/\.{3}$/, ""),
      }),
      a.jsxs("span", {
        className: "dots-zt1o9E",
        "aria-hidden": "true",
        children: [
          a.jsx("span", {
            children: ".",
          }),
          a.jsx("span", {
            children: ".",
          }),
          a.jsx("span", {
            children: ".",
          }),
        ],
      }),
    ],
  });
  if (e.labelOnly) {
    return n;
  }
  return a.jsxs("div", {
    className: "row-c_3afx",
    role: "status",
    "aria-busy": "true",
    children: [
      a.jsx(u.VKR, {
        size: 16,
        "aria-hidden": "true",
      }),
      n,
    ],
  });
}
const ez = t.memo(function (e) {
  const {
    skill,
    selected,
    autoScrollIntoView = false,
    switchVisible = true,
    isStatusUpdating = false,
    isUploading = false,
    onSelectSkill,
    onToggleSkill,
  } = e;
  const { useUpdatedSkillIcon } = useI();
  const { id, name, status } = skill;
  const checked = status === m.Ir.Active;
  const f = isStatusUpdating || isUploading;
  const xRef = t.useRef(null);
  t.useLayoutEffect(() => {
    var e;
    if (selected && autoScrollIntoView) {
      if ((e = xRef.current) != null) {
        e.scrollIntoView({
          block: "nearest",
        });
      }
    }
  }, [selected, autoScrollIntoView]);
  const w = t.useCallback(() => {
    onSelectSkill(id);
  }, [id, onSelectSkill]);
  const j = t.useCallback(
    (e) => {
      e.stopPropagation();
      onToggleSkill(id, {
        isActive: !checked,
      });
    },
    [id, checked, onToggleSkill],
  );
  const onKeyDown = t.useCallback(
    (e) => {
      if (["Enter", " "].includes(e.key)) {
        e.preventDefault();
        onSelectSkill(id);
      }
    },
    [id, onSelectSkill],
  );
  return a.jsxs("div", {
    ref: xRef,
    className: _j("skill-item-GjlWhw", {
      "selected-UJjwtF": selected,
    }),
    onClick: w,
    "aria-busy": isUploading,
    children: [
      a.jsx("span", {
        className: "skill-item-icon-tlOgWa",
        children: useUpdatedSkillIcon
          ? a.jsx(u.VKR, {
              size: 16,
            })
          : a.jsx(u.ThK, {
              size: 16,
            }),
      }),
      a.jsx(c.A, {
        content: name,
        checkOverflow: true,
        children: a.jsx("span", {
          role: "button",
          tabIndex: 0,
          "aria-pressed": selected,
          onKeyDown,
          className: "skill-item-name-v8rO1q",
          children: isUploading
            ? a.jsx(eI, {
                labelOnly: true,
              })
            : name,
        }),
      }),
      switchVisible
        ? a.jsx("span", {
            role: "switch",
            tabIndex: f ? -1 : 0,
            "aria-label": name,
            "aria-checked": checked,
            "aria-disabled": f,
            onKeyDown: eD.q,
            className: "skill-item-trailing-FtlF8G",
            onClick: f ? undefined : j,
            children: a.jsx(eW, {
              checked,
              disabled: f,
            }),
          })
        : null,
    ],
  });
});
const e$ = "collapsed-WX6CwH";
const eP = t.memo(function (e) {
  const {
    title,
    skills,
    viewMode,
    currentSkillId,
    extraContent,
    footerContent,
    collapsed = false,
    switchVisible,
    autoScrollSelectedSkillIntoView,
    sectionTitleClassName,
    onCollapseToggle,
    onSelectSkill,
    onToggleSkill,
    updatingSkillStatusIds = [],
    reuploadingSkillIds = [],
  } = e;
  const x = t.useCallback(() => {
    if (onCollapseToggle != null) {
      onCollapseToggle(!collapsed);
    }
  }, [collapsed, onCollapseToggle]);
  return a.jsxs("div", {
    className: "section-epQR05",
    children: [
      a.jsxs("button", {
        type: "button",
        className: _j("section-title-bD3yTo", sectionTitleClassName),
        onClick: x,
        "aria-expanded": !collapsed,
        children: [
          a.jsx(c.A, {
            content: title,
            checkOverflow: true,
            children: a.jsx("span", {
              className: "section-title-text-BIPIG6",
              children: title,
            }),
          }),
          a.jsx(u.rIS, {
            size: 12,
            className: _j("section-toggle-icon-AD61A0", {
              [e$]: collapsed,
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: _j("section-content-BZuG5S", {
          [e$]: collapsed,
        }),
        children: [
          extraContent,
          skills.map((e) => {
            var { id } = e;
            var selected = currentSkillId === id && viewMode !== "create";
            var isStatusUpdating = updatingSkillStatusIds.includes(id);
            return a.jsx(
              ez,
              {
                skill: e,
                selected,
                autoScrollIntoView: autoScrollSelectedSkillIntoView,
                switchVisible,
                isStatusUpdating,
                isUploading: reuploadingSkillIds.includes(id),
                onSelectSkill,
                onToggleSkill,
              },
              id,
            );
          }),
          footerContent,
        ],
      }),
    ],
  });
});
const eV = t.memo(function (e) {
  const {
    skills,
    uploadingContent,
    viewMode,
    currentSkillId,
    collapsed = false,
    onCollapseToggle,
    onSelectSkill,
    onToggleSkill,
    updatingSkillStatusIds,
    reuploadingSkillIds,
  } = e;
  if (
    skills.length === 0 &&
    !(uploadingContent == null ? undefined : uploadingContent.length)
  ) {
    return null;
  }
  const p = o.Ay.t("skill_dialog_manage_section_custom", {}, "My skills");
  return a.jsx("div", {
    className: "section-NjGZ2z",
    children: a.jsx(eP, {
      title: p,
      extraContent: uploadingContent,
      skills,
      viewMode,
      currentSkillId,
      collapsed,
      autoScrollSelectedSkillIntoView: true,
      onCollapseToggle,
      onSelectSkill,
      onToggleSkill,
      updatingSkillStatusIds,
      reuploadingSkillIds,
    }),
  });
});
const eO = t.memo(function (e) {
  const {
    skills,
    viewMode,
    currentSkillId,
    collapsed,
    onCollapseToggle,
    onSelectSkill,
    onToggleSkill,
  } = e;
  if (skills.length === 0) {
    return null;
  }
  const d = o.Ay.t("skill_dialog_manage_section_official", {}, "Dreamina");
  return a.jsx("div", {
    className: "section-VvtYcQ",
    children: a.jsx(eP, {
      title: d,
      sectionTitleClassName: "platform-section-title-WK0DdB",
      skills,
      viewMode,
      currentSkillId,
      collapsed,
      switchVisible: false,
      autoScrollSelectedSkillIntoView: true,
      onCollapseToggle,
      onSelectSkill,
      onToggleSkill,
    }),
  });
});
const eZ = t.memo(function (e) {
  const {
    inputRef,
    value,
    onChange,
    readOnly = false,
    tabIndex,
    onSearchFocus,
    onSearchPointerDownCapture,
  } = e;
  const m = o.Ay.t("skill_menu_search_placeholder", {}, "Search skills");
  const prefix = t.useMemo(
    () =>
      a.jsx(u.C0l, {
        size: 16,
      }),
    [],
  );
  return a.jsx("div", {
    className: "search-input-container-pq4got",
    onPointerDownCapture: onSearchPointerDownCapture,
    children: a.jsx(J.X, {
      ref: inputRef,
      prefix,
      placeholder: m,
      allowClear: true,
      autoFocus: false,
      readOnly,
      tabIndex,
      value,
      onChange,
      onFocus: onSearchFocus,
    }),
  });
});
const eK = i.PA(function (e) {
  const l = useI();
  const {
    editorManager,
    userSkills,
    platformSkills,
    searchKeyword,
    isEmptySearchResult,
    updatingSkillStatusIds,
    canViewMoreSkills,
  } = l;
  const {
    metadata: { viewMode, currentSkillId, isUnsavedDialogVisible },
  } = editorManager;
  const editorManager_isFormBlockingSearch = editorManager.isFormBlockingSearch;
  const [k, setK] = t.useState(false);
  const [f, setF] = t.useState(false);
  const wRef = t.useRef(null);
  const j = t.useCallback(() => {
    editorManager.leaveFormView({
      kind: "sidebar-search",
      onReady: () => {
        var e;
        if ((e = wRef.current) != null) {
          e.focus();
        }
      },
    });
  }, [editorManager]);
  const y = t.useCallback(
    (e) => {
      l.setSearchKeyword(e);
    },
    [l],
  );
  const onSelectSkill = t.useCallback(
    (skillId) => {
      editorManager.leaveFormView({
        kind: "detail",
        skillId,
      });
    },
    [editorManager],
  );
  const onCreateManually = t.useCallback(() => {
    editorManager.leaveFormView({
      kind: "create",
    });
  }, [editorManager]);
  const onUpload = t.useCallback(
    (e) => {
      setK(false);
      l.uploadSkill(e);
    },
    [l],
  );
  const onSearchPointerDownCapture = t.useCallback(
    (e) => {
      if (editorManager_isFormBlockingSearch) {
        e.preventDefault();
        j();
      }
    },
    [editorManager_isFormBlockingSearch, j],
  );
  const onSearchFocus = t.useCallback(() => {
    var e;
    if (editorManager_isFormBlockingSearch && !isUnsavedDialogVisible) {
      if ((e = wRef.current) != null) {
        e.blur();
      }
      j();
    }
  }, [editorManager_isFormBlockingSearch, isUnsavedDialogVisible, j]);
  const onToggleSkill = t.useCallback(
    (e, l) => {
      editorManager.setSkillActive(e, l.isActive);
    },
    [editorManager],
  );
  const tabIndex = editorManager_isFormBlockingSearch ? -1 : undefined;
  const M = viewMode === "create" || l.newUploadTaskIds.length > 0;
  const E = o.Ay.t("skill_dialog_manage_list_new", {}, "Create skill");
  const D = t.useCallback(() => {
    if (canViewMoreSkills && l.viewMoreSkills) {
      l.viewMoreSkills();
    }
  }, [canViewMoreSkills, l]);
  const W = t.useMemo(
    () =>
      a.jsx("div", {
        className: "search-empty-state-YsVxCX",
        children: canViewMoreSkills
          ? a.jsxs(a.Fragment, {
              children: [
                a.jsx("span", {
                  children: o.Ay.t(
                    "skill_search_empty_noresult",
                    {},
                    "No skills matching your search. ",
                  ),
                }),
                a.jsx(d.A, {
                  type: "secondary",
                  size: "mini",
                  className: "view-more-action-YBZJYB",
                  onClick: D,
                  children: o.Ay.t(
                    "skill_search_empty_viewmore",
                    {},
                    "Explore skills.",
                  ),
                }),
              ],
            })
          : a.jsx("span", {
              children: o.Ay.t(
                "skill_search_empty_noresult",
                {},
                "No skills matching your search.",
              ),
            }),
      }),
    [canViewMoreSkills, D],
  );
  return a.jsxs("div", {
    className: "sidebar-hWAW28",
    children: [
      a.jsx(eZ, {
        inputRef: wRef,
        value: searchKeyword,
        readOnly: editorManager_isFormBlockingSearch,
        tabIndex,
        onChange: y,
        onSearchFocus,
        onSearchPointerDownCapture,
      }),
      a.jsx(eE.x, {
        label: E,
        className: _j("create-skill-button-Bslgbl", {
          "selected-Up7ww4": M,
        }),
        onCreateManually,
        onCreateWithAgent: l.createSkillWithAgent,
        onUpload,
        onUploadClick: l.onUploadClick,
      }),
      a.jsxs("div", {
        className: "list-container-ibJefr",
        children: [
          isEmptySearchResult ? W : null,
          a.jsx(eV, {
            skills: userSkills,
            uploadingContent: l.newUploadTaskIds.map((e) => a.jsx(eI, {}, e)),
            reuploadingSkillIds: l.reuploadingSkillIds,
            viewMode,
            currentSkillId,
            collapsed: k,
            onCollapseToggle: setK,
            onSelectSkill,
            onToggleSkill,
            updatingSkillStatusIds,
          }),
          a.jsx(eO, {
            skills: platformSkills,
            viewMode,
            currentSkillId,
            collapsed: f,
            onCollapseToggle: setF,
            onSelectSkill,
            onToggleSkill,
          }),
        ],
      }),
    ],
  });
});
require("yS");
const eU = require("gL");
const eB = t.memo(function (e) {
  const { visible, onConfirm, onCancel } = e;
  const i = o.Ay.t("skill_dialog_unsaved_title", {}, "Discard changes?");
  const r = o.Ay.t(
    "skill_dialog_unsaved_desc",
    {},
    "Your edits to the skill won't be saved.",
  );
  const cancelText = o.Ay.t("skill_dialog_unsaved_cancel", {}, "Cancel");
  const okText = o.Ay.t("skill_dialog_unsaved_confirm", {}, "Discard");
  return a.jsx(eU.A, {
    visible,
    title: i,
    okText,
    cancelText,
    onOk: onConfirm,
    onCancel,
    closable: true,
    closeIcon: a.jsx(u.gzW, {
      role: "button",
      tabIndex: 0,
      "aria-label": o.Ay.t("dreamina_web_common_close"),
      onKeyDown: eD.q,
      size: 20,
    }),
    maskClosable: false,
    simple: true,
    autoFocus: true,
    className: "unsaved-dialog-aradt1",
    children: r,
  });
});
const eL = require("./module-GSun.js");
const eJ = i.PA(function (e) {
  const { onClose } = e;
  const { editorManager } = useI();
  const i = t.useCallback(() => {
    onClose();
  }, [onClose]);
  const onConfirm = t.useCallback(
    () => editorManager.confirmUnsavedChanges(),
    [editorManager],
  );
  const onCancel = t.useCallback(
    () => editorManager.cancelUnsavedChanges(),
    [editorManager],
  );
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: eL.A.modal,
        children: [
          a.jsx("div", {
            className: eL.A.sidebar,
            children: a.jsx(eK, {
              onClose: i,
            }),
          }),
          a.jsx("div", {
            className: eL.A.mainPanel,
            children: a.jsx(eM, {
              onClose: i,
            }),
          }),
        ],
      }),
      a.jsx(eB, {
        visible: editorManager.metadata.isUnsavedDialogVisible,
        onConfirm,
        onCancel,
      }),
    ],
  });
});
function eq(e) {
  const { host, onClose } = e;
  return a.jsx(W, {
    host,
    children: a.jsx(eJ, {
      onClose,
    }),
  });
}
export { eq as I };
