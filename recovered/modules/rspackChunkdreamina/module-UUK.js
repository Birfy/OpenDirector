import i from "NY";
import a from "QWK";
import o from "Qey";
import n from "o7";
import s from "Kt";
import l from "Hr";
import c from "Idr";
import d from "c5";
export class h extends n.jG {
  open(e, scene, source, n, s) {
    return i
      ._(function* () {
        if (this._isActive(scene)) {
          const c =
            typeof document !== "undefined" &&
            document.activeElement instanceof HTMLElement &&
            document.activeElement !== document.body
              ? document.activeElement
              : undefined;
          this._resetPreview();
          const d = this._previewGeneration;
          const u = () =>
            d === this._previewGeneration && this._isActive(scene);
          try {
            let useSkill;
            const { SkillPreviewDetailCoordinator } = yield Promise.all([
              require.e("9ed"),
              require.e("mo4"),
              require.e("46qd"),
              require.e("1sx"),
              require.e("uyh"),
              require.e("rle"),
              require.e("z9t"),
              require.e("dmi"),
              require.e("tj5a"),
              require.e("lsa"),
              require.e("uoi"),
              require.e("e7a"),
              require.e("72p"),
              require.e("weo"),
              require.e("p1"),
              require.e("o5"),
              require.e("m0y"),
              require.e("p0z"),
              require.e("1mk"),
              require.e("af4"),
              require.e("8iv"),
            ]).then(require.bind(require, "e28"));
            if (!u()) {
              return;
            }
            const p = this._containerService.createInstance(
              SkillPreviewDetailCoordinator,
            );
            this._previewCoordinator = p;
            if (n) {
              useSkill = (e, t) => u() && n(e, t);
            } else if (scene === "canvas" && source === "capsule") {
              useSkill = (e, t) =>
                i
                  ._(function* () {
                    const r =
                      yield this._aiCanvasContentGeneratorFeatureLoaderService.getInstance();
                    return !!u() && (r.selectExternalSkill(e, t), true);
                  })
                  .call(this);
            }
            yield p.open(e, {
              scene,
              source,
              useSkill,
              onAfterClose: () => {
                if (u()) {
                  this._resetPreview();
                  this._restoreFocus(scene, c, s);
                }
              },
            });
          } catch (e) {
            if (u()) {
              this._resetPreview();
              this._restoreFocus(scene, c, s);
              l.l.warning(
                o.Ay.t(
                  "skill_publish_msg_button_view_failed",
                  {},
                  "Couldn't view skill details. Please try again.",
                ),
              );
            }
          }
        }
      })
      .call(this);
  }
  applySkill(e, t) {
    return i
      ._(function* () {
        const { signal } = this._lifecycle;
        const i = () => !signal.aborted && this._isActive(t);
        if (i()) {
          try {
            if (t === "canvas") {
              const a =
                yield this._aiCanvasContentGeneratorFeatureLoaderService.getInstance();
              if (!i()) {
                return;
              }
              a.selectExternalSkill(e);
            } else {
              const n =
                yield this._contentGeneratorFeatureLoaderService.getInstance();
              if (!i()) {
                return;
              }
              yield n.agenticGeneratorManager.skillManager.applySkillToPrompt(
                e,
                {
                  signal,
                  reportParams: {
                    actionMethod: "click",
                    enterFrom: "ai_feature",
                    aiFeatureName: e.id,
                  },
                },
              );
            }
          } catch (e) {
            if (i()) {
              l.l.warning(
                t === "canvas"
                  ? o.Ay.t("fail_retry", {}, "操作失败，请重试")
                  : o.Ay.t(
                      "skillmarket_button_added_failed",
                      {},
                      "Couldn't add skill. Please try again.",
                    ),
              );
            }
          }
        }
      })
      .call(this);
  }
  invalidate() {
    this._lifecycle.abort();
    if (!this._disposed) {
      this._lifecycle = new AbortController();
    }
    this._resetPreview();
  }
  dispose() {
    this._disposed = true;
    this.invalidate();
    super.dispose();
  }
  _isActive(e) {
    return !this._disposed && this._options.isActive(e);
  }
  _resetPreview() {
    let e;
    this._previewGeneration += 1;
    if ((e = this._previewCoordinator) != null) {
      e.dispose();
    }
    this._previewCoordinator = undefined;
  }
  _restoreFocus(e, t, r) {
    if (typeof window !== "undefined") {
      const i = this._previewGeneration;
      queueMicrotask(() => {
        window.setTimeout(() => {
          if (
            !(typeof document === "undefined") &&
            i === this._previewGeneration &&
            this._isActive(e)
          ) {
            var a;
            var o;
            var n;
            var { activeElement } = document;
            if (
              !activeElement ||
              activeElement === document.body ||
              !activeElement.isConnected
            ) {
              if (
                (t == null ? undefined : t.isConnected) &&
                (t.focus(), document.activeElement === t)
              ) {
                return;
              }
              if (r) {
                r();
              } else if (
                !(
                  (o = (n = this._options).getFocusFallback) == null ||
                  (a = o.call(n, e)) == null
                )
              ) {
                a.focus();
              }
            }
          }
        }, 0);
      });
    }
  }
  constructor(e, t, r, i) {
    super();
    this._options = e;
    this._containerService = t;
    this._contentGeneratorFeatureLoaderService = r;
    this._aiCanvasContentGeneratorFeatureLoaderService = i;
    this._previewGeneration = 0;
    this._lifecycle = new AbortController();
    this._disposed = false;
  }
}
h = a.Cg(
  [
    a.Qj(1, s._),
    a.Qj(2, d.O),
    a.Qj(3, c.a),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof GenerationSkillInteractionOptions === "undefined"
        ? Object
        : GenerationSkillInteractionOptions,
      s._ === undefined ? Object : s._,
      d.O === undefined ? Object : d.O,
      c.a === undefined ? Object : c.a,
    ]),
  ],
  h,
);
