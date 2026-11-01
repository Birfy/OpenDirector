import a from "NY";
import r from "oa";
import i from "qa";
import o from "z8";
import l from "oQo";
import s from "TSq";
import c from "EXw";
import u from "Du8";
import d from "M8X";
import m from "wF";
import p from "OPt";
import v from "bk";
import h from "bT";
import g from "ED";
import f from "xm3";
import b from "qO";
import _ from "eVT";
import y from "Gvb";
import { R as R_1 } from "./module-stU.js";
import k from "m88";
import C from "n6n";
import j from "zX";
import w from "n3";
import M from "iXp";
import T from "nT";
import N from "GzQ";
import R from "xb";
import S from "B3";
import { z as z_1 } from "./module-cEF.js";
import E from "ye";
import I from "Lt";
import L from "gg";
import D from "I9";
import Z from "JSz";
import O from "wXm";
import V from "c0h";
import H from "E6X";
import $ from "Uty";
import J from "eC0";
import U from "vgS";
import K from "fh5";
import Q from "iuK";
function W(e) {
  const { active } = e;
  const { themeMode, motionSupported, MeshGradient, ready, motionConfig } =
    z_1(active);
  const c = active && motionSupported && ready;
  return o.jsx("div", {
    "data-content-generator-motion-background": true,
    "aria-hidden": true,
    className: R("motion-background-j_6hOi", {
      "light-fqTSRO": themeMode === S.l.Light,
      "visible-aUMwzA": c,
    }),
    children: MeshGradient
      ? o.jsx(
          MeshGradient,
          v._(
            r._(
              {
                className: "shader-PnmPZ8",
              },
              motionConfig,
            ),
            {
              grainMixer: 0,
              grainOverlay: 0,
              speed: active && motionSupported ? motionConfig.speed : 0,
            },
          ),
        )
      : null,
  });
}
const P = g.PA(function (e) {
  let t;
  let n;
  const { contentGeneratorManager } = m.h(f.V);
  const { switchContentGenerator } = contentGeneratorManager;
  const value = N.o();
  const options = D.w();
  const c = h.useContext(u.R);
  const { collapsed, modeTabs, modeTabsAppearance, modeTabsCollapsible } = c;
  const [_, set_] = h.useState(false);
  const expanded = (t = e.expanded) != null ? t : _;
  if (I.G(c)) {
    return o.jsx(L.a, {
      className: e.className,
      options,
      value,
      onChange: (e) => switchContentGenerator(e, "tab"),
    });
  }
  return o.jsx(
    E.H,
    v._(r._({}, e), {
      options,
      value,
      onChange: (e) => switchContentGenerator(e, "input_box"),
      collapsed,
      modeTabs,
      wide: false,
      expanded,
      onExpandedChange: (n = e.onExpandedChange) != null ? n : set_,
      showExpandToggle: false,
      outlineEnabled: !!(modeTabs && modeTabsAppearance === "browser"),
    }),
  );
});
const z = g.PA(function (e) {
  const { className, renderGeneratorFloatingPanel } = e;
  const a = m.h(f.V);
  const { contentGeneratorManager } = a;
  const { dropReferenceResources, updateVisibleContentGeneratorInstance } =
    contentGeneratorManager;
  const c = h.useContext(u.R);
  const {
    animatedBackground,
    variant,
    collapsed,
    taskIndicator,
    modeTabs,
    onContentGeneratorTypeChange,
  } = c;
  const F = I.G(c) ? O.i : k.w;
  const E = N.o();
  h.useLayoutEffect(() => {
    if (onContentGeneratorTypeChange != null) {
      onContentGeneratorTypeChange(E);
    }
  }, [E, onContentGeneratorTypeChange]);
  const data = a.getSpecificGeneratorManager(E).data;
  const [D, setD] = h.useState(false);
  const [V, setV] = h.useState(false);
  const [$, set$] = h.useState(false);
  const active = !!(
    animatedBackground &&
    variant !== "canvas" &&
    data.isPristine &&
    !D &&
    !V
  );
  const { id, elements } = (() => {
    var { contentGeneratorManager } = m.h(f.V);
    var {
      registerContentGeneratorInstance,
      updateContentGeneratorInstance,
      disposeContentGeneratorInstance,
    } = contentGeneratorManager;
    var environment = h.useContext(u.R);
    var iRef = h.useRef(Z.uR());
    var oRef = h.useRef(null);
    var lRef = h.useRef(null);
    var sRef = h.useRef(null);
    var cRef = h.useRef(null);
    var elements_1 = h.useMemo(
      () => ({
        id: iRef.current,
        contentGeneratorRef: oRef,
        promptInputRef: lRef,
        promptEditorRef: sRef,
        submitButtonRef: cRef,
      }),
      [],
    );
    var pRef = h.useRef(elements_1);
    var vRef = h.useRef(environment);
    h.useLayoutEffect(() => {
      var iRef_current = iRef.current;
      registerContentGeneratorInstance({
        id: iRef_current,
        elements: pRef.current,
        environment: vRef.current,
      });
      return () => {
        disposeContentGeneratorInstance(iRef_current);
      };
    }, [registerContentGeneratorInstance, disposeContentGeneratorInstance]);
    h.useLayoutEffect(() => {
      updateContentGeneratorInstance({
        id: iRef.current,
        elements: elements_1,
        environment,
      });
    }, [elements_1, environment, updateContentGeneratorInstance]);
    return {
      id: iRef.current,
      environment,
      elements: elements_1,
    };
  })();
  h.useEffect(() => {
    if (!(animatedBackground && variant !== "canvas")) {
      setD(false);
      setV(false);
    }
  }, [animatedBackground, variant]);
  const q = _.L({
    source: w.HH.Upload,
  });
  const onChange = h.useCallback(
    (e) => {
      if (!(E === "music" || q())) {
        dropReferenceResources(e);
      }
    },
    [E, dropReferenceResources, q],
  );
  const {
    setNodeRef,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = y.t({
    droppableId: "content-generator-".concat(id),
    multiple: true,
    onChange,
  });
  const onMouseDown = h.useCallback(() => {
    updateVisibleContentGeneratorInstance(id);
  }, [id, updateVisibleContentGeneratorInstance]);
  const ea = h.useCallback(() => {
    setV(true);
  }, []);
  const er = h.useCallback(() => {
    setV(false);
  }, []);
  const onFocusCapture = h.useCallback(() => {
    setD(true);
  }, []);
  const onBlurCapture = h.useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setD(false);
    }
  }, []);
  const renderGeneratorTypeTabs = h.useCallback(
    (e) => {
      if (modeTabs) {
        return o.jsx(
          P,
          v._(r._({}, e), {
            expanded: $,
            onExpandedChange: set$,
          }),
        );
      }
      return null;
    },
    [modeTabs, $],
  );
  const es = h.useMemo(() => T.T[E], [E]);
  const renderGeneratorFloatingPanel_1 =
    E === "agentic" ? renderGeneratorFloatingPanel : undefined;
  const { mainContent, references, submitButton, toolbar } = es;
  const renderGeneratorMainContent = h.useCallback(
    (e) => o.jsx(mainContent, r._({}, e)),
    [mainContent],
  );
  const renderGeneratorReferences = h.useCallback(
    (e) => o.jsx(references, r._({}, e)),
    [references],
  );
  const renderGeneratorSubmitButton = h.useCallback(
    (e) => o.jsx(submitButton, r._({}, e)),
    [submitButton],
  );
  const renderGeneratorTaskIndicator = h.useCallback(
    (e) => {
      if (typeof taskIndicator === "function") {
        return taskIndicator(e);
      }
      return o.jsx(R_1, r._({}, e));
    },
    [taskIndicator],
  );
  const renderGeneratorToolbar = h.useCallback(
    (e) => o.jsx(toolbar, r._({}, e)),
    [toolbar],
  );
  const children = h.useCallback(
    (e) =>
      o.jsx(
        C.l,
        v._(
          r._(
            {
              ref: setNodeRef,
              onBlurCapture,
              onFocusCapture,
              onMouseDown,
              onDragEnter: handleDragEnter,
              onDragLeave: handleDragLeave,
              onDragOver: handleDragOver,
              onDrop: handleDrop,
            },
            e,
          ),
          {
            "data-interactive": "true",
            "data-generator-type": E,
          },
        ),
      ),
    [
      E,
      setNodeRef,
      onBlurCapture,
      onMouseDown,
      onFocusCapture,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
    ],
  );
  const ey = h.useCallback(() => {
    if (variant === "canvas") {
      return o.jsx(j.L, {
        className,
        renderGeneratorMainContent,
        renderGeneratorReferences,
        renderGeneratorSubmitButton,
        renderGeneratorTaskIndicator,
        renderGeneratorFloatingPanel: renderGeneratorFloatingPanel_1,
        renderGeneratorToolbar,
        renderGeneratorTypeTabs,
        children,
      });
    }
    return o.jsx(F, {
      animatedBackground: animatedBackground
        ? o.jsx(W, {
            active,
          })
        : null,
      className,
      onMouseEnter: animatedBackground ? ea : undefined,
      onMouseLeave: animatedBackground ? er : undefined,
      renderGeneratorFloatingPanel: renderGeneratorFloatingPanel_1,
      renderGeneratorMainContent,
      renderGeneratorReferences,
      renderGeneratorSubmitButton,
      renderGeneratorTaskIndicator,
      renderGeneratorToolbar,
      renderGeneratorTypeTabs,
      children,
    });
  }, [
    F,
    variant,
    animatedBackground,
    active,
    className,
    ea,
    er,
    children,
    renderGeneratorMainContent,
    renderGeneratorReferences,
    renderGeneratorSubmitButton,
    renderGeneratorTaskIndicator,
    renderGeneratorToolbar,
    renderGeneratorTypeTabs,
    renderGeneratorFloatingPanel_1,
  ]);
  return o.jsx(b.b.Provider, {
    value: elements,
    children: o.jsx(M.S, {
      isAgent: E === "agentic",
      children: ey(),
    }),
  });
});
class q extends l.h {
  createFeatureService() {
    return this._parentContainerService
      .createInstance(s.N)
      .setOptions({
        flow: this._flow,
      })
      .getInstance();
  }
  _registerDynamicSharedServices() {}
  _registerChildLevelServices() {
    return Promise.resolve();
  }
  _execFlow() {
    return Promise.resolve();
  }
  constructor(...e) {
    var t;
    super(...e);
    t = this;
    this._serviceId = c.b;
    this._flow = (containerService) =>
      a._(function* () {
        const n = d.cQ(containerService, c.b);
        n.render = (n) => t._render(containerService, n);
        n.imageGeneratorManager.setInlinePromptLengthFeedbackEnabled(true);
        n.preloadMetadata();
        n.imageGeneratorManager.requestPasteReplaceConfirmation = K.e;
        n.imageGeneratorManager.blendManager.createReferenceImageModal = U.E;
        n.videoGeneratorManager.taskSubmissionManager.requestAigcComplianceConfirmation =
          Q.i;
        n.audioGeneratorManager.taskSubmissionManager.requestAigcComplianceConfirmation =
          Q.i;
        n.digitalHumanGeneratorManager.taskSubmissionManager.requestAudioTrim =
          J.o;
        n.audioGeneratorManager.omniDubbingManager.requestReferenceAudioTrim =
          $.e;
        n.agenticGeneratorManager.skillEditorManager.presentSkillEditor = (t) =>
          V.q(
            r._(
              {
                containerService,
              },
              t,
            ),
          );
        n.agenticGeneratorManager.skillManager.requestSkillOverwriteConfirmation =
          H.l;
        const a = d.cQ(t._parentContainerService, p.V);
        (yield a.getInstance()).onAigcComplianceError(() => {
          Q.i({
            containerService,
          });
        });
      })();
    this._render = (instantiationService, t) => {
      var { environment } = t;
      var a = i._(t, ["environment"]);
      return o.jsx(m.Z, {
        instantiationService,
        children: o.jsx(u.R.Provider, {
          value: environment,
          children: o.jsx(z, r._({}, a)),
        }),
      });
    };
  }
}
export { q };
