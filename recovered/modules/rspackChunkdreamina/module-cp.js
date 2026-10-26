import r from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import { k } from "./module-ai0.js";
import d from "xi";
import c from "Kt";
import { q } from "./module-IZ_2.js";
import { B } from "./module-Vck.js";
export class Q {
  get isSelectionCountValid() {
    const { selection } = this;
    return !!(
      selection &&
      selection.media.length >= selection.minCount &&
      selection.media.length <= selection.maxCount
    );
  }
  dispose() {
    this._disposed = true;
    this.cancel();
  }
  _canStartSelection(e) {
    if (
      this._disposed ||
      e.signal.aborted ||
      e.policy.allowedMediaTypes.length === 0
    ) {
      return false;
    }
    if (this._selectionSession) {
      throw Error("已有工具正在选择素材");
    }
    return true;
  }
  _startSelection(e, t) {
    const { minCount = 0, maxCount = 1 } = e;
    if (
      !Number.isSafeInteger(minCount) ||
      !Number.isSafeInteger(maxCount) ||
      minCount < 0 ||
      maxCount < 0 ||
      minCount > maxCount
    ) {
      throw Error("素材数量范围必须为非负整数，且最小数量不能超过最大数量");
    }
    if (t.mode === "single" && maxCount > 1) {
      throw Error("单素材入口不支持多选");
    }
    const policy = a._(n._({}, e.policy), {
      allowedMediaTypes: [...e.policy.allowedMediaTypes],
      acceptedFormats: e.policy.acceptedFormats
        ? n._({}, e.policy.acceptedFormats)
        : undefined,
    });
    const fileAccept = this._preparer.getFileAccept(policy);
    var l = a._(n._({}, e, t), {
      policy,
      onAbort: () => this._finishSelection(l),
    });
    this._selectionSession = l;
    l.signal.addEventListener("abort", l.onAbort, {
      once: true,
    });
    this._setSelection({
      selectionId: l.selectionId,
      mode: l.mode,
      media: [],
      minCount,
      maxCount,
      mediaTypes: policy.allowedMediaTypes,
      fileAccept,
      assetSelectorOpen: false,
      assetSelectorVersion: this._assetSelectorVersion,
      preparing: false,
    });
  }
  _getAssetInput(e, t) {
    const i = q(e);
    if (i.selectable) {
      const { source } = i;
      if (
        (source.kind === "image" || source.kind === "video") &&
        t.allowedMediaTypes.includes(source.kind)
      ) {
        const { kind, storageKey, title, aigcItemId, historyId, format } =
          source;
        const h = n._(
          {},
          title
            ? {
                title,
              }
            : {},
          aigcItemId
            ? {
                sourceItemId: aigcItemId,
              }
            : {},
          historyId
            ? {
                historyId,
              }
            : {},
        );
        return {
          origin: "asset",
          ref:
            kind === "image"
              ? n._(
                  {
                    type: kind,
                    uri: storageKey,
                  },
                  h,
                )
              : n._(
                  {
                    type: kind,
                    vid: storageKey,
                  },
                  h,
                ),
          format,
        };
      }
    }
  }
  _prepareMedia(session, t) {
    return r
      ._(function* () {
        if (
          !this.selection ||
          t.length === 0 ||
          (session.mode === "batch" && this.selection.preparing)
        ) {
          return false;
        }
        const { maxCount, media } = this.selection;
        if (media.length + t.length > maxCount) {
          this._setSelection(
            a._(n._({}, this.selection), {
              error: Error("最多选择 ".concat(maxCount, " 个素材")),
            }),
          );
          return false;
        }
        const _preparationTask = this._preparationTask;
        this._finishPreparation(_preparationTask, "cancel");
        const s = {
          session,
          controller: new AbortController(),
          startedAt: Date.now(),
          startedInputs: [],
        };
        this._preparationTask = s;
        if (_preparationTask != null) {
          _preparationTask.controller.abort();
        }
        if (
          !this._isCurrentPreparation(s) ||
          !this.selection ||
          (this._setSelection(
            a._(n._({}, this.selection), {
              assetSelectorOpen: t[0].origin === "asset",
              preparing: true,
              error: undefined,
            }),
          ),
          !this._isCurrentPreparation(s))
        ) {
          return false;
        }
        try {
          const l = {
            policy: session.policy,
            signal: s.controller.signal,
          };
          const d = [];
          for (const c of t) {
            s.startedInputs.push(c);
            const u = yield c.origin === "file"
              ? this._preparer.prepareFile(c.file, l)
              : this._preparer.prepareAsset(c.ref, l);
            if (!this._isCurrentPreparation(s)) {
              return false;
            }
            d.push(u);
          }
          this._finishPreparation(s, "success");
          if (session.mode === "single") {
            this._finishSelection(session, d[0]);
          } else {
            this._setSelection(
              a._(n._({}, this.selection), {
                media: [...media, ...d],
                preparing: false,
              }),
            );
          }
          s.controller.abort();
          return true;
        } catch (error) {
          if (this._isCurrentPreparation(s) && this.selection) {
            this._finishPreparation(s, "fail", error);
            this._setSelection(
              a._(n._({}, this.selection), {
                preparing: false,
                error,
              }),
            );
            s.controller.abort();
          }
          return false;
        }
      })
      .call(this);
  }
  _finishPreparation(e, t, i) {
    if (e && this._preparationTask === e) {
      this._preparationTask = undefined;
      const r = Date.now() - e.startedAt;
      for (const n of e.startedInputs) {
        this._reportImportMaterial(n, t, r, i);
      }
    }
  }
  _reportImportMaterial(e, status, duration, r) {
    let format;
    let s;
    const materialType = e.origin === "file" ? e.type : e.ref.type;
    if (this._reportContext && materialType) {
      format =
        e.origin === "asset"
          ? e.format
          : e.file.name.includes(".")
            ? (s = e.file.name.split(".").pop()) == null
              ? undefined
              : s.toLowerCase()
            : e.file.type.split("/")[1];
      try {
        const u = this._containerService.createInstance(k);
        u.setParams(
          n._(
            a._(n._({}, this._reportContext), {
              actionType: "click",
              materialSource: e.origin === "file" ? "local" : "assets",
              materialType,
              format,
              status,
              duration,
            }),
            status === "fail"
              ? {
                  failReason: r instanceof Error ? r.message : String(r),
                }
              : {},
          ),
        );
        u.report();
      } catch (error) {
        d.V.error(
          "[HomeToolSourceManager] import material report failed",
          error,
        );
      }
    }
  }
  _getSelectionSession(e) {
    const _selectionSession = this._selectionSession;
    if (
      (_selectionSession == null
        ? undefined
        : _selectionSession.selectionId) !== e ||
      _selectionSession.signal.aborted
    ) {
      return undefined;
    }
    return _selectionSession;
  }
  _isCurrentPreparation(e) {
    return (
      this._preparationTask === e &&
      this._selectionSession === e.session &&
      !e.controller.signal.aborted &&
      !e.session.signal.aborted
    );
  }
  _finishSelection(e, t) {
    if (this._selectionSession === e) {
      const i = this._preparationTask;
      this._finishPreparation(i, "cancel");
      this._selectionSession = undefined;
      e.signal.removeEventListener("abort", e.onAbort);
      this._setSelection(undefined);
      if (i != null) {
        i.controller.abort();
      }
      if (e.mode === "single") {
        e.resolve(t);
      }
    }
  }
  _setSelection(e) {
    s.h5(() => {
      this.selection = e;
    });
  }
  constructor(e, t, i) {
    this._preparer = e;
    this._reportContext = t;
    this._containerService = i;
    this.selection = undefined;
    this._assetSelectorVersion = 0;
    this._disposed = false;
    this.startSelection = (e) => {
      if (this._canStartSelection(e)) {
        return new Promise((resolve) =>
          this._startSelection(e, {
            mode: "single",
            resolve,
          }),
        );
      }
      return Promise.resolve(undefined);
    };
    this.startBatchSelection = (e) => {
      if (this._canStartSelection(e)) {
        this._startSelection(e, {
          mode: "batch",
        });
      }
    };
    this.selectFile = (e, t) => this.selectFiles([e], t);
    this.selectFiles = (e, t) => {
      var i = this._getSelectionSession(t);
      if (i) {
        return this._prepareMedia(
          i,
          e.map((e) =>
            n._(
              {
                origin: "file",
              },
              B(e),
            ),
          ),
        );
      }
      return Promise.resolve(false);
    };
    this.openAssetSelector = (e) => {
      if (
        this._getSelectionSession(e) &&
        this.selection &&
        !this.selection.preparing &&
        this.selection.media.length < this.selection.maxCount
      ) {
        this._setSelection(
          a._(n._({}, this.selection), {
            assetSelectorOpen: true,
            assetSelectorVersion: ++this._assetSelectorVersion,
            error: undefined,
          }),
        );
      }
    };
    this.closeAssetSelector = (e, t) => {
      var i;
      if (
        this._getSelectionSession(e) &&
        ((i = this.selection) == null ? undefined : i.assetSelectorOpen) &&
        (t === undefined || t === this.selection.assetSelectorVersion)
      ) {
        var r = this._preparationTask;
        this._finishPreparation(r, "cancel");
        this._setSelection(
          a._(n._({}, this.selection), {
            assetSelectorOpen: false,
            preparing: false,
            error: undefined,
          }),
        );
        if (r != null) {
          r.controller.abort();
        }
      }
    };
    this.canSelectAsset = (e, t) => {
      var i = this._getSelectionSession(t);
      return !!(i && this._getAssetInput(e, i.policy));
    };
    this.selectAsset = (e, t) => this.selectAssets([e], t);
    this.selectAssets = (e, t, i) => {
      var r;
      var o = this._getSelectionSession(t);
      if (
        !o ||
        !((r = this.selection) == null ? undefined : r.assetSelectorOpen) ||
        this.selection.preparing ||
        (i !== undefined && i !== this.selection.assetSelectorVersion)
      ) {
        return Promise.resolve(false);
      }
      var s = [];
      for (var l of e) {
        var d = this._getAssetInput(l, o.policy);
        if (!d) {
          this._setSelection(
            a._(n._({}, this.selection), {
              error: Error("所选资产不符合素材要求"),
            }),
          );
          return Promise.resolve(false);
        }
        s.push(d);
      }
      return this._prepareMedia(o, s);
    };
    this.removeMedia = (e, t) => {
      var i = this._getSelectionSession(t);
      if (
        (i == null ? undefined : i.mode) === "batch" &&
        this.selection &&
        !this.selection.preparing &&
        Number.isInteger(e) &&
        !(e < 0) &&
        !(e >= this.selection.media.length)
      ) {
        this._setSelection(
          a._(n._({}, this.selection), {
            media: this.selection.media.filter((t, i) => i !== e),
            error: undefined,
          }),
        );
      }
    };
    this.cancel = (e) => {
      var _selectionSession = this._selectionSession;
      if (
        _selectionSession &&
        (e === undefined || _selectionSession.selectionId === e)
      ) {
        this._finishSelection(_selectionSession);
      }
    };
    s.Gn(this, {
      selection: s.sH.ref,
    });
  }
}
Q = o.Cg(
  [
    o.Qj(2, c._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Pick === "undefined" ? Object : Pick,
      Object,
      c._ === undefined ? Object : c._,
    ]),
  ],
  Q,
);
