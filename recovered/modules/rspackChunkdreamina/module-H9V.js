import r from "NY";
import n from "oa";
import a from "bk";
import o from "z8";
import s from "bT";
import l from "PC";
import d from "ED";
import c from "Qey";
import u from "lj";
import h from "VB";
import v from "wF";
import p from "aEB";
import m from "qa";
import "yS";
import g from "gL";
import _ from "yw";
import f from "hUS";
import * as y from "./module-Vu_2.js";
import { A as A_1 } from "./module-z7V.js";
import C from "n3";
import A from "cY";
import { I as I_1 } from "./module-cRR.js";
import { S as S_1 } from "./module-oXy.js";
import { h as h_1 } from "./module-Z59.js";
import { m as m_1 } from "./module-UU.js";
const maskStyle = {
  position: "absolute",
  inset: 0,
  backgroundColor: "var(--bg-mask-gray)",
  backdropFilter: "blur(20px)",
  transition: "none",
};
const I = new WeakMap();
function w(e, t) {
  arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const i = c.Ay.t(e, {}, t);
  if (i && i !== e && i !== "[none]") {
    return i;
  }
  return t;
}
function useT(e) {
  let t;
  const {
    open,
    mode = "modal",
    canSelect,
    closeButtonRef,
    getPopupContainer,
    inactive = false,
    focusLock,
    ariaModal,
    escToExit,
    onFilesDrop,
    onClose,
  } = e;
  const A = m._(e, [
    "open",
    "mode",
    "canSelect",
    "closeButtonRef",
    "getPopupContainer",
    "inactive",
    "focusLock",
    "ariaModal",
    "escToExit",
    "onFilesDrop",
    "onClose",
  ]);
  const [dragging, setDragging] = s.useState(false);
  const [j, setJ] = s.useState();
  const ERef = s.useRef(0);
  const MRef = s.useRef(null);
  const F = canSelect && !A.preparing && !inactive;
  s.useEffect(() => {
    if (open && typeof document !== "undefined") {
      var e = (e) => {
        var t;
        var i;
        if (
          Array.from(
            (t = (i = e.dataTransfer) == null ? undefined : i.types) != null
              ? t
              : [],
          ).includes("Files")
        ) {
          e.preventDefault();
        }
      };
      document.addEventListener("dragover", e, true);
      document.addEventListener("drop", e, true);
      return () => {
        document.removeEventListener("dragover", e, true);
        document.removeEventListener("drop", e, true);
      };
    }
  }, [open]);
  s.useEffect(() => {
    if (
      open &&
      mode === "modal" &&
      getPopupContainer &&
      !(typeof document === "undefined")
    ) {
      var e;
      var t;
      var n = getPopupContainer();
      if (n !== document.body) {
        if ((t = (e = I.get(n)) != null ? e : 0) === 0) {
          n.classList.add(A_1.portalHostActive);
        }
        I.set(n, t + 1);
        return () => {
          var e;
          var t = ((e = I.get(n)) != null ? e : 1) - 1;
          if (t <= 0) {
            I.delete(n);
            n.classList.remove(A_1.portalHostActive);
            return;
          }
          I.set(n, t);
        };
      }
    }
  }, [getPopupContainer, mode, open]);
  s.useEffect(() => {
    if (!(open && F)) {
      ERef.current = 0;
      setDragging(false);
    }
    if (!open) {
      setJ(undefined);
    }
  }, [open, F]);
  if (!open) {
    return null;
  }
  const P = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const children = o.jsx("div", {
    onDragOver: P,
    onDrop: P,
    children: o.jsx(
      y.m,
      a._(n._({}, A), {
        mode,
        canSelect: F,
        dragging,
        dropLabel: w(
          "octo_canvas_timeline_imported_assets_drop_hint",
          "将文件拖至此处添加",
          "Drag and drop files here",
        ),
        statusMessage:
          (t = A.statusMessage) != null
            ? t
            : A.preparing
              ? w(
                  "octo_common_upload_processing_label",
                  "正在处理上传内容…",
                  "Processing upload",
                )
              : undefined,
        showCover: !!(A.coverUrl && j !== A.coverUrl),
        onCoverError: () => setJ(A.coverUrl),
        actions: {
          localUpload: w(
            "octo_director_stage_assets_upload_local",
            "从本地上传",
            "Upload from device",
          ),
          assetSelect: w(
            "web_character_button_upload_from_assets",
            "从资产选取",
            "Select from Assets",
          ),
        },
        preparingIndicator: o.jsx(f.w, {
          size: 16,
        }),
        uploadAreaProps: {
          onDragEnter: (e) => {
            P(e);
            if (F) {
              ERef.current += 1;
              setDragging(true);
            }
          },
          onDragOver: (e) => {
            P(e);
            if (F) {
              e.dataTransfer.dropEffect = "copy";
            }
          },
          onDragLeave: (e) => {
            P(e);
            ERef.current = Math.max(0, ERef.current - 1);
            if (ERef.current === 0) {
              setDragging(false);
            }
          },
          onDrop: (e) => {
            P(e);
            ERef.current = 0;
            setDragging(false);
            if (F && e.dataTransfer.files.length > 0) {
              onFilesDrop(Array.from(e.dataTransfer.files));
            }
          },
        },
      }),
    ),
  });
  const N = o.jsx("button", {
    ref: closeButtonRef != null ? closeButtonRef : MRef,
    className: A_1.closeButton,
    type: "button",
    "aria-label": w("dreamina_web_common_close", "关闭", "Close"),
    onClick: mode === "page" ? onClose : undefined,
    children: o.jsx(_.gzW, {
      size: 16,
    }),
  });
  if (mode === "page") {
    return o.jsxs(
      "div",
      a._(
        n._(
          {
            className: A_1.page,
            "data-tool-entry-ready": inactive ? undefined : "true",
            "aria-hidden": inactive || undefined,
          },
          inactive
            ? {
                inert: "",
              }
            : {},
        ),
        {
          children: [
            o.jsx("div", {
              className: A_1.pageClose,
              children: N,
            }),
            children,
          ],
        },
      ),
    );
  }
  return o.jsx(g.A, {
    visible: true,
    unmountOnExit: true,
    duration: 0,
    alignCenter: false,
    className: A_1.dialog,
    wrapClassName: A_1.wrapper,
    getPopupContainer,
    title: o.jsx("span", {
      className: A_1.assistiveTitle,
      children: A.title,
    }),
    footer: null,
    closable: true,
    closeIcon: N,
    maskClosable: false,
    maskStyle,
    modalRender: (e) => {
      if (inactive && s.isValidElement(e)) {
        return s.cloneElement(e, {
          "aria-hidden": true,
          inert: "",
        });
      }
      return e;
    },
    focusLock,
    ariaModal,
    escToExit,
    backspaceToExit: false,
    onCancel: onClose,
    children,
  });
}
function j(e, t) {
  arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const i =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const r = c.Ay.t(e, i, t);
  if (r && r !== e && r !== "[none]") {
    return r;
  }
  return t;
}
function R(e) {
  if (e) {
    if (e instanceof S_1) {
      switch (e.code) {
        case "validation-failed":
          return e.message;
        case "unsupported-media":
          return j(
            "reference_validation_error_material_invalid",
            "素材已损坏或格式不受支持，请更换素材后重试。",
            "The file is damaged or can't be used. Try another one.",
          );
        case "invalid-metadata":
          return j(
            "octo_canvas_generator_upload_metadata_unreadable_label",
            "无法读取文件信息，请更换文件后重试",
            "Could not read file information. Try another file.",
          );
        case "upload-failed":
          return j(
            "upload_material_error",
            "素材上传失败，请重试",
            "Couldn't upload files. Try again.",
          );
        case "source-unavailable":
          return j(
            "reference_validation_error_material_resource_unavailable",
            "素材暂时无法读取，请重新上传后重试。",
            "Couldn't access the file. Try uploading it again.",
          );
      }
    }
    if (e instanceof Error) {
      return e.message;
    }
    return j(
      "fail_retry",
      "操作失败，请重试",
      "Something went wrong. Try again.",
    );
  }
}
export var P = d.PA(function (e) {
  let t;
  let i;
  let d;
  let m;
  let g;
  let _;
  const {
    session,
    entry,
    mode = "modal",
    globalHost = false,
    onClose,
    getAssetBrowserService,
    onUploadAction,
  } = e;
  const { canvas, tool, source, hostRoute, reportPage } = session;
  const W = v.h(p.Ot);
  const D = v.h(A.i);
  const H = v.h(u.K);
  const [z, setZ] = s.useState(globalHost);
  const [K, setK] = s.useState();
  const [V, setV] = s.useState();
  const [Z, setZ_1] = s.useState(false);
  const qRef = s.useRef();
  const JRef = s.useRef(null);
  const XRef = s.useRef(null);
  const GRef = s.useRef();
  const YRef = s.useRef();
  const eeRef = s.useRef(entry);
  eeRef.current = entry;
  const getPopupContainer = s.useCallback(() => {
    var e;
    if ((e = H.getRenderRootWrapper()) != null) {
      return e;
    }
    return document.body;
  }, [H]);
  const ei = s.useCallback(
    function () {
      let e;
      let t;
      let i;
      let r;
      const n =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : "dismiss";
      if ((r = qRef.current) != null) {
        r.abort();
      }
      qRef.current = undefined;
      setZ_1(false);
      const a =
        (e =
          (t = (i = eeRef.current) != null ? i : canvas.selectedTool) != null
            ? t
            : tool.activeEntry) != null
          ? e
          : source.selection;
      if (a) {
        setK(a);
      }
      if (n === "close") {
        session.close();
      } else {
        session.cancel();
      }
    },
    [canvas, source, tool, session],
  );
  s.useEffect(() => {
    setK(undefined);
    setV(undefined);
    setZ_1(false);
    GRef.current = undefined;
    YRef.current = undefined;
    return () => {
      var e;
      if ((e = qRef.current) != null) {
        e.abort();
      }
      qRef.current = undefined;
    };
  }, [entry]);
  h.f(() => {
    if (!globalHost) {
      setZ(true);
      return () => {
        ei();
        setZ(false);
      };
    }
  });
  const er = s.useCallback(() => {
    l.flushSync(() => {
      ei();
    });
  }, [ei]);
  s.useEffect(() => {
    var e = tool.onDidCreateTask(er);
    var t = H.onWouldRouteChange(er);
    var i = H.onSideMenuItemClick((e) => {
      if (e !== hostRoute) {
        er();
      }
    });
    return () => {
      e.dispose();
      t.dispose();
      i.dispose();
    };
  }, [er, hostRoute, tool, H]);
  const { selectedTool } = canvas;
  const ea =
    selectedTool != null ? selectedTool : entry ? h_1(entry) : undefined;
  const { selection } = source;
  const es =
    (t = selection == null ? undefined : selection.media) != null ? t : [];
  const el = entry != null ? entry : selectedTool;
  const session_1 =
    (i =
      (d = entry != null ? entry : selectedTool) != null
        ? d
        : tool.activeEntry) != null
      ? i
      : selection;
  const ec = !!(tool.createdTask && tool.lastError);
  const eu = !!(tool.createdTask && !tool.lastError);
  const eh = !!(tool.activeEntry || selection) && tool.state !== "idle";
  const ev =
    ((_ = tool.activeEntry) == null ? undefined : _.toolId) ===
      "video_extend" &&
    (tool.state === "opening" || (tool.state === "preparing" && !selection));
  const ep =
    (tool.state === "opening" && !ev) ||
    tool.state === "editing" ||
    tool.state === "submitting" ||
    tool.state === "closing";
  const open =
    z &&
    (ec ||
      (mode === "page" && eu) ||
      (!eu &&
        (!!(entry || selectedTool) || eh) &&
        (!session_1 || session_1 !== K)));
  const eg = (selection == null ? undefined : selection.error) || canvas.error;
  const e_ =
    (m = R(selection == null ? undefined : selection.error)) != null
      ? m
      : canvas.error;
  const ef = ec
    ? j("fail_retry", "操作失败，请重试", "Something went wrong. Try again.")
    : tool.lastError instanceof Error
      ? tool.lastError.message
      : R(tool.lastError);
  const ey = !!(selection == null ? undefined : selection.preparing);
  const eb = !!(open && !eg && (ev || ey || (session_1 && V === session_1)));
  s.useEffect(() => {
    if (!open || eg || !session_1) {
      return void setV(undefined);
    }
    if (ey) {
      return void setV(session_1);
    }
    if (V !== session_1) {
      return void setV(undefined);
    }
    var e = window.setTimeout(() => setV(undefined), 3000);
    return () => window.clearTimeout(e);
  }, [session_1, ey, V, eg, open]);
  s.useEffect(() => {
    if (!open) {
      GRef.current = undefined;
      return;
    }
    if (el && session_1 && GRef.current !== session_1) {
      GRef.current = session_1;
      onUploadAction(el, "show");
    }
  }, [session_1, onUploadAction, el, open]);
  s.useEffect(() => {
    if (!open) {
      YRef.current = undefined;
      return;
    }
    var e;
    var t;
    var source_selection = source.selection;
    var r =
      (e =
        (t = entry != null ? entry : canvas.selectedTool) != null
          ? t
          : tool.activeEntry) != null
        ? e
        : source_selection;
    if (
      session_1 &&
      eg &&
      e_ &&
      r === session_1 &&
      ((source_selection == null ? undefined : source_selection.error) ||
        canvas.error) === eg &&
      (source_selection == null || !source_selection.preparing) &&
      (source_selection == null || !source_selection.assetSelectorOpen)
    ) {
      var n = YRef.current;
      if (!(n && n.session === session_1)) {
        YRef.current = n = {
          session: session_1,
          errors: new Set(),
        };
      }
      if (!n.errors.has(eg)) {
        n.errors.add(eg);
        W.warning(e_);
      }
    }
  }, [session_1, canvas, e_, entry, W, selection, source, tool, eg, open]);
  if (!z) {
    return null;
  }
  const maxSelectedCount = selection
    ? Math.max(0, selection.maxCount - es.length)
    : 0;
  const eI = !!(
    entry &&
    !tool.createdTask &&
    !selection &&
    !selectedTool &&
    !tool.activeEntry &&
    tool.state === "idle"
  );
  const ew = !!(
    !Z &&
    !tool.createdTask &&
    (eI ||
      (selection &&
        !selection.preparing &&
        !selection.assetSelectorOpen &&
        maxSelectedCount > 0))
  );
  const eT =
    (g = selection == null ? undefined : selection.mediaTypes) != null
      ? g
      : ea
        ? [ea.mediaType]
        : [];
  const eC = m_1(
    el,
    eT,
    (ea == null ? undefined : ea.mediaType) === "video"
      ? ea.inputRules
      : undefined,
    (e, t, i) => c.Ay.t(e, t, i),
    false,
  );
  const statusMessage = eu
    ? undefined
    : ef != null
      ? ef
      : selection || e_ || eI || (eh && tool.state !== "waiting-login")
        ? undefined
        : j(
            "web_mainframe_not_signin_tip",
            "请完成登录后继续",
            "Sign in to continue",
          );
  const escToExit = !!(
    open &&
    !Z &&
    (selection || eI || ev || e_ || ec || eu) &&
    !(selection == null ? undefined : selection.assetSelectorOpen) &&
    !ep
  );
  const ex = (e) => {
    session.releaseCanvasTarget(e);
  };
  const ej = (e, t) => {
    if (canvas.selectedTool) {
      if (t && canvas.canConfirm) {
        canvas.confirm(e, t);
        var i;
        var r = source.selection;
        if (canvas.error && (r == null ? undefined : r.selectionId) === e) {
          if ((i = YRef.current) != null) {
            i.errors.delete(canvas.error);
          }
          for (var n = r.media.length - 1; n >= 0; n--) {
            source.removeMedia(n, e);
          }
        }
        return;
      }
      ex(t);
    }
  };
  const eR = (e, t, i) =>
    r._(function* () {
      try {
        const r = yield source.selectFiles(e, t);
        if (r) {
          ej(t, i);
        } else {
          ex(i);
        }
        return r;
      } catch (error) {
        ex(i);
        throw error;
      }
    })();
  const eE = function (e) {
    const t =
      !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
    if (ew && !qRef.current) {
      if (D.hasLogin && selection) {
        return void e(selection.selectionId);
      }
      if (entry) {
        const i = new AbortController();
        qRef.current = i;
        setZ_1(true);
        session
          .prepareSelection(entry)
          .then((r) => {
            var n;
            if (
              !i.signal.aborted &&
              D.hasLogin &&
              r &&
              ((n = source.selection) == null ? undefined : n.selectionId) ===
                r &&
              t
            ) {
              e(r);
            }
          })
          .catch(() => {
            if (!i.signal.aborted) {
              W.warning(
                j(
                  "fail_retry",
                  "操作失败，请重试",
                  "Something went wrong. Try again.",
                ),
              );
            }
          })
          .finally(() => {
            if (qRef.current === i) {
              qRef.current = undefined;
              setZ_1(false);
            }
          });
      }
    }
  };
  return o.jsxs(o.Fragment, {
    children: [
      selection && maxSelectedCount > 0
        ? o.jsx(
            "input",
            {
              ref: JRef,
              hidden: true,
              type: "file",
              "aria-label": j(
                "octo_director_stage_assets_upload_local",
                "从本地上传",
                "Upload from device",
              ),
              accept: selection.fileAccept,
              multiple: maxSelectedCount > 1,
              onChange: (e) => {
                var t;
                var i = Array.from(
                  (t = e.currentTarget.files) != null ? t : [],
                );
                e.currentTarget.value = "";
                if (i.length) {
                  eE((e) => {
                    var t = session.reserveCanvasTarget(e);
                    eR(i, e, t);
                  });
                }
              },
            },
            selection.selectionId,
          )
        : null,
      o.jsx(
        useT,
        a._(
          n._(
            {
              mode,
              open,
              closeButtonRef: XRef,
              getPopupContainer,
            },
            eC,
          ),
          {
            preparing: eb || eu,
            statusMessage,
            recoveryAction: ec
              ? {
                  label: j("dre_app_popup_fail_retry", "重试", "Retry"),
                  onClick: () => {
                    tool.openCreatedTask();
                  },
                }
              : undefined,
            canSelect: ew,
            inactive: open && !escToExit,
            focusLock: escToExit && !globalHost,
            ariaModal: escToExit && !globalHost,
            escToExit,
            onLocalUpload: () => {
              if (ew) {
                if (el) {
                  onUploadAction(el, "upload");
                }
                eE(() => {
                  var e;
                  if ((e = JRef.current) == null) {
                    return undefined;
                  }
                  return e.click();
                }, false);
              }
            },
            onAssetSelect: () => {
              if (ew) {
                if (el) {
                  onUploadAction(el, "asset_select");
                }
                eE((e) => source.openAssetSelector(e));
              }
            },
            onFilesDrop: (e) => {
              if (ew) {
                if (el) {
                  onUploadAction(el, "upload");
                }
                eE((t) => {
                  var i = session.reserveCanvasTarget(t);
                  eR(e, t, i);
                });
              }
            },
            onClose: () => {
              ei("close");
              if (onClose != null) {
                onClose();
              }
            },
          },
        ),
      ),
      open && (selection == null ? undefined : selection.assetSelectorOpen)
        ? o.jsx(
            I_1,
            {
              browserService: getAssetBrowserService(),
              open: true,
              allowedAssetTypes: selection.mediaTypes,
              maxSelectedCount,
              initialAssetType: selection.mediaTypes[0],
              scope: "global",
              restoreFocusRef: XRef,
              reportContext: {
                eventName: "asset_select_popup",
                params: {
                  page: reportPage === "all_tools" ? C.W.AllTools : C.W.Create,
                  source: "ai_function",
                },
              },
              getSelectionState: (e) => {
                if (source.canSelectAsset(e, selection.selectionId)) {
                  return {
                    selectable: true,
                  };
                }
                return {
                  selectable: false,
                  reason: j(
                    "web_mainframe_canvas_upload_notsupport_tooltip",
                    "所选素材不符合使用条件，请更换其他素材",
                    "Couldn't import selected assets. Try selecting different ones.",
                  ),
                };
              },
              onValidationWarning: (e) => {
                var source_selection = source.selection;
                if (
                  (source_selection == null
                    ? undefined
                    : source_selection.selectionId) === selection.selectionId &&
                  source_selection.assetSelectorVersion ===
                    selection.assetSelectorVersion &&
                  source_selection.assetSelectorOpen
                ) {
                  W.warning(e);
                }
              },
              onCommit: (e) =>
                r._(function* () {
                  let t;
                  let i;
                  t = selection.selectionId;
                  const r = session.reserveCanvasTarget(t);
                  let n = false;
                  try {
                    n = yield source.selectAssets(
                      e,
                      selection.selectionId,
                      selection.assetSelectorVersion,
                    );
                  } catch (error) {
                    ex(r);
                    throw error;
                  }
                  if (n) {
                    ej(selection.selectionId, r);
                    return {
                      ok: true,
                    };
                  }
                  ex(r);
                  const source_selection = source.selection;
                  if (
                    (source_selection == null
                      ? undefined
                      : source_selection.selectionId) !==
                      selection.selectionId ||
                    source_selection.assetSelectorVersion !==
                      selection.assetSelectorVersion
                  ) {
                    return {
                      ok: false,
                      message: j(
                        "octo_common_request_fail_toast",
                        "出错了，请重试。",
                        "Something went wrong. Please try again.",
                      ),
                    };
                  }
                  return {
                    ok: false,
                    message:
                      (i = R(source_selection.error)) != null
                        ? i
                        : j(
                            "octo_canvas_generator_upload_processing_failed_label",
                            "素材处理失败，请重新上传",
                            "Couldn't process files. Try uploading again.",
                          ),
                  };
                })(),
              onClose: () =>
                source.closeAssetSelector(
                  selection.selectionId,
                  selection.assetSelectorVersion,
                ),
            },
            ""
              .concat(selection.selectionId, ":")
              .concat(selection.assetSelectorVersion),
          )
        : null,
    ],
  });
});
