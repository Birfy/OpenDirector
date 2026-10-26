import r from "NY";
import o from "oa";
import n from "QWK";
import a from "dw4";
import s from "yI";
import c from "dm";
import l from "o7";
import u from "Kt";
import d from "k4";
import h from "H26";
import v from "Oqj";
import _ from "sf1";
import p from "zCX";
import m from "nLI";
import g from "vUt";
class f {
  get contentGeneratorVisible() {
    return !!this.visibleContentGeneratorInstanceId;
  }
  setContentGeneratorType(e) {
    this.contentGeneratorType = e;
  }
  setVisibleContentGeneratorInstanceId(e) {
    this.visibleContentGeneratorInstanceId = e;
  }
  setMentionButtonBadgeDismissed(e) {
    this.isMentionButtonBadgeDismissed = e;
  }
  constructor() {
    this.contentGeneratorType = _.h();
    this.visibleContentGeneratorInstanceId = null;
    this.isMentionButtonBadgeDismissed = d.b.getItem(p.x) === "true";
    a.l_(this);
  }
}
export class I extends l.jG {
  get data() {
    return this._contentGeneratorStore;
  }
  get visibleContentGeneratorVariant() {
    let e;
    if ((e = this.visibleContentGeneratorInstance) == null) {
      return undefined;
    }
    return e.environment.variant;
  }
  get visibleContentGeneratorInstance() {
    let e;
    const { visibleContentGeneratorInstanceId } = this._contentGeneratorStore;
    if (
      visibleContentGeneratorInstanceId &&
      (e = this._contentGeneratorInstances.get(
        visibleContentGeneratorInstanceId,
      )) != null
    ) {
      return e;
    }
    return null;
  }
  dispose() {
    for (const e of this._contentGeneratorInstances.values()) {
      let t;
      const i =
        (t = e.elements.contentGeneratorRef) == null ? undefined : t.current;
      if (i) {
        this._disposeContentGeneratorInteractionListener(i);
      }
    }
    this._contentGeneratorInstances.clear();
    this.updateVisibleContentGeneratorInstance(null);
    this._intersectionObserver.disconnect();
    super.dispose();
  }
  _initializeDefaultContentGeneratorType(e) {
    if (
      !this._contentGeneratorTypeTouched &&
      this._canAutoUpdateContentGeneratorType(e)
    ) {
      let t;
      let i;
      const r = this._getSupportedContentGeneratorTypes();
      const o = (e == null ? undefined : e.restoreLastType)
        ? g.h(r)
        : undefined;
      this.initializeContentGeneratorType(
        (t = (i = e == null ? undefined : e.initialType) != null ? i : o) !=
          null
          ? t
          : this._getSupportedInitialContentGeneratorType(r),
      );
    }
  }
  _setContentGeneratorType(e, t) {
    const i = this._contentGeneratorService.getSpecificGeneratorManager(e);
    if ("cleanupSideEffects" in i) {
      i.cleanupSideEffects();
    }
    if (t.touched) {
      this._contentGeneratorTypeTouched = true;
      this._contentGeneratorInteractionTouched = true;
    }
    this._contentGeneratorStore.setContentGeneratorType(e);
    if (t.remember) {
      g.Q(e);
    }
  }
  _getSupportedContentGeneratorTypes() {
    let e;
    const t =
      (e = this.visibleContentGeneratorInstance) == null
        ? undefined
        : e.environment.contentGeneratorTypes;
    if (t == null ? undefined : t.length) {
      return t;
    }
    return m.G;
  }
  _getSupportedInitialContentGeneratorType(e) {
    let t;
    const i = _.h();
    if (e.includes(i)) {
      return i;
    }
    if ((t = e[0]) != null) {
      return t;
    }
    return i;
  }
  _ensureClientSideRendering() {
    return r._(function* () {
      const e = document.getElementById("root");
      if (e) {
        const { promise, resolve } = Promise.withResolvers();
        var r = new MutationObserver((t) => {
          for (var o of t) {
            if (o.type === "childList") {
              for (var n of o.removedNodes) {
                if (n === e) {
                  r.disconnect();
                  resolve();
                  return;
                }
              }
            }
          }
        });
        r.observe(document.body, {
          childList: true,
        });
        return promise;
      }
    })();
  }
  _calculateVisibleArea(e) {
    const t = e.getBoundingClientRect();
    const i = Math.min(t.right, innerWidth) - Math.max(t.left, 0);
    const r = Math.min(t.bottom, innerHeight) - Math.max(t.top, 0);
    if (i <= 0 || r <= 0 || !this._isContentGeneratorVisible(e)) {
      return 0;
    }
    return i * r;
  }
  _isContentGeneratorVisible(e) {
    const t = e.getBoundingClientRect();
    const i = getComputedStyle(e);
    if (
      i.display === "none" ||
      i.visibility !== "visible" ||
      !parseFloat(i.opacity)
    ) {
      return false;
    }
    const r = parseFloat(i.borderRadius);
    const o = t.left + r + 1;
    const n = t.top + t.height - 1;
    return e.contains(document.elementFromPoint(o, n));
  }
  _expandContentGenerator() {
    if (this.visibleContentGeneratorInstance) {
      const {
        environment: { onCollapsedChange },
      } = this.visibleContentGeneratorInstance;
      if (onCollapsedChange != null) {
        onCollapsedChange(false);
      }
    }
  }
  _focusPromptControl(e) {
    return r
      ._(function* () {
        yield a.z7(() => this._contentGeneratorStore.contentGeneratorVisible);
        if (this.visibleContentGeneratorInstance) {
          let t;
          const {
            elements: { contentGeneratorRef, promptInputRef, promptEditorRef },
          } = this.visibleContentGeneratorInstance;
          if (
            !(
              contentGeneratorRef == null ||
              (t = contentGeneratorRef.current) == null
            )
          ) {
            t.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }
          yield c.y(100);
          const n = promptInputRef == null ? undefined : promptInputRef.current;
          const s =
            promptEditorRef == null ? undefined : promptEditorRef.current;
          if (s) {
            s.commands.focus(e);
          } else if (n) {
            n.focus({
              preventScroll: true,
            });
            n.setSelectionRange(n.value.length, n.value.length);
          }
        }
      })
      .call(this);
  }
  _blurPromptInput() {
    if (this.visibleContentGeneratorInstance) {
      const {
        elements: { promptInputRef },
      } = this.visibleContentGeneratorInstance;
      const t = promptInputRef == null ? undefined : promptInputRef.current;
      if (t) {
        t.blur();
      }
    }
  }
  _canAutoUpdateContentGeneratorType(e) {
    return (
      !this._contentGeneratorTypeTouched &&
      ((e != null && !!e.ignoreGeneratorState) ||
        (!this._contentGeneratorInteractionTouched &&
          this._isAllContentGeneratorDataPristine() &&
          !this._isVisibleContentGeneratorFocused()))
    );
  }
  _registerContentGeneratorInteractionListener(e) {
    if (!this._contentGeneratorInteractionCleanup.has(e)) {
      for (const t of this._contentGeneratorInteractionEvents) {
        e.addEventListener(t, this._markContentGeneratorInteracted, true);
      }
      this._contentGeneratorInteractionCleanup.set(e, () => {
        for (var t of this._contentGeneratorInteractionEvents) {
          e.removeEventListener(t, this._markContentGeneratorInteracted, true);
        }
      });
    }
  }
  _disposeContentGeneratorInteractionListener(e) {
    const t = this._contentGeneratorInteractionCleanup.get(e);
    if (t) {
      t();
      this._contentGeneratorInteractionCleanup.delete(e);
    }
  }
  _isAllContentGeneratorDataPristine() {
    const {
      actionCopyGeneratorManager,
      agenticGeneratorManager,
      audioGeneratorManager,
      digitalHumanGeneratorManager,
      imageGeneratorManager,
      musicGeneratorManager,
      videoGeneratorManager,
    } = this._contentGeneratorService;
    return [
      actionCopyGeneratorManager,
      agenticGeneratorManager,
      audioGeneratorManager,
      digitalHumanGeneratorManager,
      imageGeneratorManager,
      musicGeneratorManager,
      videoGeneratorManager,
    ].every((e) => e.data.isPristine);
  }
  _isVisibleContentGeneratorFocused() {
    let e;
    let t;
    const i =
      (t = this.visibleContentGeneratorInstance) == null ||
      (e = t.elements.contentGeneratorRef) == null
        ? undefined
        : e.current;
    const { activeElement } = document;
    return !!i && activeElement instanceof Node && i.contains(activeElement);
  }
  _switchContentGenerator(e, t) {
    this._contentGeneratorService.contentGeneratorReportManager.reportClickModalSwitch(
      e,
      t,
    );
    let i;
    const r =
      ((i = this.visibleContentGeneratorInstance) == null
        ? undefined
        : i.environment.variant) === "canvas";
    this._setContentGeneratorType(e, {
      remember: !r,
      touched: true,
    });
  }
  constructor(e, t) {
    var i;
    var n;
    super();
    i = this;
    n = this;
    this._contentGeneratorService = e;
    this._containerService = t;
    this._contentGeneratorStore = new f();
    this._contentGeneratorInstances = new Map();
    this._contentGeneratorToId = new WeakMap();
    this._contentGeneratorInteractionCleanup = new WeakMap();
    this._contentGeneratorInteractionEvents = [
      "input",
      "keydown",
      "pointerdown",
      "focusin",
    ];
    this._contentGeneratorTypeTouched = false;
    this._contentGeneratorInteractionTouched = false;
    this.switchContentGenerator = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : "input_box";
      i._switchContentGenerator(e, t);
    };
    this.dismissMentionButtonBadge = () => {
      this._contentGeneratorStore.setMentionButtonBadgeDismissed(true);
      d.b.setItem(p.x, JSON.stringify(true));
    };
    this.setContentGeneratorType = (e) => {
      this._setContentGeneratorType(e, {
        touched: true,
      });
    };
    this.initializeContentGeneratorType = (e) => {
      if (!this._contentGeneratorTypeTouched) {
        this._setContentGeneratorType(e, {
          touched: false,
        });
      }
    };
    this.initializeDefaultContentGeneratorType = (initialType) => {
      this._initializeDefaultContentGeneratorType({
        restoreLastType: initialType === undefined,
        initialType,
      });
    };
    this.resetContentGeneratorType = () => {
      this._contentGeneratorTypeTouched = false;
      this._contentGeneratorInteractionTouched = false;
      this._initializeDefaultContentGeneratorType({
        ignoreGeneratorState: true,
      });
    };
    this.activateContentGenerator = (e) => {
      this._expandContentGenerator();
      this._focusPromptControl(e == null ? undefined : e.promptFocusPosition);
    };
    this.dropReferenceResources = (e) =>
      r._(function* () {
        const { contentGeneratorType } = n._contentGeneratorStore;
        const { dataAdapter } =
          n._contentGeneratorService.getSpecificGeneratorManager(
            contentGeneratorType,
          );
        const r = e.map((e) => v.f(n._containerService, e)).filter((e) => !!e);
        if ((yield dataAdapter.importReferenceResources(r)).ok) {
          n.activateContentGenerator();
        }
      })();
    this.registerContentGeneratorInstance = (e) =>
      r._(function* () {
        if (!n._contentGeneratorInstances.has(e.id)) {
          n._contentGeneratorInstances.set(e.id, e);
          let t;
          const i =
            (t = e.elements.contentGeneratorRef) == null
              ? undefined
              : t.current;
          if (i) {
            n._contentGeneratorToId.set(i, e.id);
            n._registerContentGeneratorInteractionListener(i);
            yield n._ensureClientSideRendering();
            requestAnimationFrame(() =>
              r._(function* () {
                if (n._contentGeneratorInstances.has(e.id)) {
                  n._intersectionObserver.observe(i);
                  yield c.y(h.K);
                  n.refreshVisibleContentGeneratorInstance();
                }
              })(),
            );
          }
        }
      })();
    this.updateContentGeneratorInstance = (e) => {
      var { id } = e;
      var i = this._contentGeneratorInstances.get(id);
      if (i) {
        this._contentGeneratorInstances.set(id, o._({}, i, e));
      }
    };
    this.disposeContentGeneratorInstance = (e) => {
      var t;
      var i = this._contentGeneratorInstances.get(e);
      if (i) {
        this._contentGeneratorInstances.delete(e);
        if (
          this._contentGeneratorStore.visibleContentGeneratorInstanceId === e
        ) {
          this.refreshVisibleContentGeneratorInstance();
        }
        var r =
          (t = i.elements.contentGeneratorRef) == null ? undefined : t.current;
        if (r) {
          this._contentGeneratorToId.delete(r);
          this._disposeContentGeneratorInteractionListener(r);
          this._intersectionObserver.unobserve(r);
        }
      }
    };
    this.refreshVisibleContentGeneratorInstance = () => {
      var e = this._contentGeneratorInstances.values();
      var t = 0;
      var i = null;
      for (var r of e) {
        var o;
        var { id, elements } = r;
        var s =
          (o = elements.contentGeneratorRef) == null ? undefined : o.current;
        if (s) {
          var c = this._calculateVisibleArea(s);
          if (c > t) {
            t = c;
            i = id;
          }
        }
      }
      this.updateVisibleContentGeneratorInstance(i);
    };
    this.updateVisibleContentGeneratorInstance = (e) => {
      if (this._contentGeneratorStore.visibleContentGeneratorInstanceId !== e) {
        this._blurPromptInput();
        this._contentGeneratorStore.setVisibleContentGeneratorInstanceId(e);
      }
    };
    this._markContentGeneratorInteracted = () => {
      this._contentGeneratorInteractionTouched = true;
    };
    this.refreshVisibleContentGeneratorInstance = s.A(
      this.refreshVisibleContentGeneratorInstance,
      100,
    );
    this._intersectionObserver = new IntersectionObserver(
      this.refreshVisibleContentGeneratorInstance,
      {
        threshold: [0, 1],
      },
    );
  }
}
I = n.Cg(
  [
    n.Qj(1, u._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Omit === "undefined" ? Object : Omit,
      u._ === undefined ? Object : u._,
    ]),
  ],
  I,
);
