import n from "z8";
import o from "bT";
import i from "L8J";
import l from "TLa";
import s from "VNX";
import a from "kvU";
import { A as A_1 } from "./module-Y8.js";
import d from "./module-b4f.js";
import { A as A_2 } from "./module-G2.js";
import h from "Gr7";
import { A as A_3 } from "./module-ab_2.js";
import { UT, ci, mZ, vS, xL } from "./module-zu_2.js";
import { A as A_4 } from "./module-JVJ.js";
let CContext = o.createContext(null);
let f = {
  Document: null,
  DocumentFragment: null,
  Part: "group",
  Sect: "group",
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  P: null,
  H: "heading",
  Title: null,
  FENote: "note",
  Sub: "group",
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  L: "list",
  LI: "listitem",
  LBody: null,
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  Caption: null,
  Figure: "figure",
  Formula: null,
  Artifact: null,
};
let m = /^H(\d+)$/;
function g(e) {
  return "children" in e;
}
function b(e) {
  return (
    !!g(e) &&
    e.children.length === 1 &&
    0 in e.children &&
    "id" in e.children[0]
  );
}
function useK({ className, node }) {
  let r = o.useMemo(() => {
    if (node) {
      return {
        ...((e) => {
          let t = {};
          if (g(e)) {
            let { role } = e;
            let n = role.match(m);
            if (n) {
              t.role = "heading";
              t["aria-level"] = Number(n[1]);
            } else if (role in f) {
              let e = f[role];
              if (e) {
                t.role = e;
              }
            }
          }
          return t;
        })(node),
        ...(function e(t) {
          let r = {};
          if (g(t)) {
            if (t.alt !== undefined) {
              r["aria-label"] = t.alt;
            }
            if (t.lang !== undefined) {
              r.lang = t.lang;
            }
            if (b(t)) {
              let [n] = t.children;
              if (n) {
                let t = e(n);
                return {
                  ...r,
                  ...t,
                };
              }
            }
          } else {
            if ("id" in t) {
              r["aria-owns"] = t.id;
            }
          }
          return r;
        })(node),
      };
    }
    return null;
  }, [node]);
  let children = o.useMemo(() => {
    if (!g(node) || b(node)) {
      return null;
    }
    return node.children.map((node_1, t) =>
      n.jsx(
        useK,
        {
          node: node_1,
        },
        t,
      ),
    );
  }, [node]);
  return n.jsx("span", {
    className,
    ...r,
    children,
  });
}
function useA() {
  return o.useContext(CContext);
}
function useY() {
  let e = useA();
  A_1(e, "Unable to find Page context.");
  let { onGetStructTreeError, onGetStructTreeSuccess } = e;
  let [l, s] = A_3();
  let { value, error } = l;
  let { customTextRenderer, page } = e;
  o.useEffect(
    function () {
      s({
        type: "RESET",
      });
    },
    [s, page],
  );
  o.useEffect(
    function () {
      if (customTextRenderer || !page) {
        return;
      }
      let e = i.A(page.getStructTree());
      e.promise
        .then((e) => {
          s({
            type: "RESOLVE",
            value: e,
          });
        })
        .catch((e) => {
          s({
            type: "REJECT",
            error: e,
          });
        });
      return () => xL(e);
    },
    [customTextRenderer, page, s],
  );
  o.useEffect(() => {
    if (value !== undefined) {
      if (value === false) {
        return void (
          error &&
          (d(false, error.toString()),
          onGetStructTreeError && onGetStructTreeError(error))
        );
      }
      if (value && onGetStructTreeSuccess) {
        onGetStructTreeSuccess(value);
      }
    }
  }, [value]);
  if (value) {
    return n.jsx(useK, {
      className: "react-pdf__Page__structTree structTree",
      node: value,
    });
  }
  return null;
}
let C = h.ng;
function useV(e) {
  let t = useA();
  A_1(t, "Unable to find Page context.");
  let {
    _className,
    canvasBackground,
    devicePixelRatio = mZ(),
    onRenderError,
    onRenderSuccess,
    page,
    renderForms,
    renderTextLayer,
    rotate,
    scale,
  } = {
    ...t,
    ...e,
  };
  let { canvasRef } = e;
  A_1(page, "Attempted to render page canvas, but no page was specified.");
  let kRef = o.useRef(null);
  function w(e) {
    if (!UT(e)) {
      d(false, e.toString());
      if (onRenderError) {
        onRenderError(e);
      }
    }
  }
  let v = o.useMemo(
    () =>
      page.getViewport({
        scale: scale * devicePixelRatio,
        rotation: rotate,
      }),
    [devicePixelRatio, page, rotate, scale],
  );
  let F = o.useMemo(
    () =>
      page.getViewport({
        scale,
        rotation: rotate,
      }),
    [page, rotate, scale],
  );
  o.useEffect(
    function () {
      if (!page) {
        return;
      }
      page.cleanup();
      let { current } = kRef;
      if (!current) {
        return;
      }
      current.width = v.width;
      current.height = v.height;
      current.style.width = `${Math.floor(F.width)}px`;
      current.style.height = `${Math.floor(F.height)}px`;
      current.style.visibility = "hidden";
      let t = {
        annotationMode: renderForms ? C.ENABLE_FORMS : C.ENABLE,
        canvasContext: current.getContext("2d", {
          alpha: false,
        }),
        viewport: v,
      };
      if (canvasBackground) {
        t.background = canvasBackground;
      }
      let r = page.render(t);
      r.promise
        .then(() => {
          current.style.visibility = "";
          if (page && onRenderSuccess) {
            onRenderSuccess(vS(page, scale));
          }
        })
        .catch(w);
      return () => xL(r);
    },
    [canvasBackground, page, renderForms, v, F],
  );
  let E = o.useCallback(() => {
    let { current } = kRef;
    if (current) {
      current.width = 0;
      current.height = 0;
    }
  }, []);
  o.useEffect(() => E, [E]);
  return n.jsx("canvas", {
    className: `${_className}__canvas`,
    dir: "ltr",
    ref: a.A(canvasRef, kRef),
    style: {
      display: "block",
      userSelect: "none",
    },
    children: renderTextLayer ? n.jsx(useY, {}) : null,
  });
}
function useF() {
  let e = useA();
  A_1(e, "Unable to find Page context.");
  let {
    customTextRenderer,
    onGetTextError,
    onGetTextSuccess,
    onRenderTextLayerError,
    onRenderTextLayerSuccess,
    page,
    pageIndex,
    pageNumber,
    rotate,
    scale,
  } = e;
  A_1(page, "Attempted to load page text content, but no page was specified.");
  let [k, y] = A_3();
  let { value, error } = k;
  let FRef = o.useRef(null);
  d(
    Number.parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue("--react-pdf-text-layer"),
      10,
    ) === 1,
    "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer",
  );
  o.useEffect(
    function () {
      y({
        type: "RESET",
      });
    },
    [page, y],
  );
  o.useEffect(
    function () {
      if (!page) {
        return;
      }
      let e = i.A(page.getTextContent());
      e.promise
        .then((e) => {
          y({
            type: "RESOLVE",
            value: e,
          });
        })
        .catch((e) => {
          y({
            type: "REJECT",
            error: e,
          });
        });
      return () => xL(e);
    },
    [page, y],
  );
  o.useEffect(() => {
    if (value !== undefined) {
      if (value === false) {
        return void (
          error &&
          (d(false, error.toString()), onGetTextError && onGetTextError(error))
        );
      }
      if (value && onGetTextSuccess) {
        onGetTextSuccess(value);
      }
    }
  }, [value]);
  let E = o.useCallback(() => {
    if (onRenderTextLayerSuccess) {
      onRenderTextLayerSuccess();
    }
  }, [onRenderTextLayerSuccess]);
  let x = o.useCallback(
    (e) => {
      d(false, e.toString());
      if (onRenderTextLayerError) {
        onRenderTextLayerError(e);
      }
    },
    [onRenderTextLayerError],
  );
  let M = o.useMemo(
    () =>
      page.getViewport({
        scale,
        rotation: rotate,
      }),
    [page, rotate, scale],
  );
  o.useLayoutEffect(
    function () {
      if (!page || !value) {
        return;
      }
      let { current } = FRef;
      if (!current) {
        return;
      }
      current.innerHTML = "";
      let textContentSource = page.streamTextContent({
        includeMarkedContent: true,
      });
      let n = new h.D6({
        container: current,
        textContentSource,
        viewport: M,
      });
      n.render()
        .then(() => {
          let r = document.createElement("div");
          r.className = "endOfContent";
          current.append(r);
          let n = current.querySelectorAll('[role="presentation"]');
          if (customTextRenderer) {
            let e = 0;
            value.items.forEach((r, itemIndex) => {
              if (!("str" in r)) {
                return;
              }
              let i = n[e];
              if (i) {
                i.innerHTML = customTextRenderer({
                  pageIndex,
                  pageNumber,
                  itemIndex,
                  ...r,
                });
                e += r.str && r.hasEOL ? 2 : 1;
              }
            });
          }
          E();
        })
        .catch(x);
      return () => xL(n);
    },
    [customTextRenderer, x, E, page, pageIndex, pageNumber, value, M],
  );
  return n.jsx("div", {
    className: s.A("react-pdf__Page__textContent", "textLayer"),
    onMouseUp: function () {
      let FRef_current = FRef.current;
      if (FRef_current) {
        FRef_current.classList.remove("selecting");
      }
    },
    onMouseDown: function () {
      let FRef_current = FRef.current;
      if (FRef_current) {
        FRef_current.classList.add("selecting");
      }
    },
    ref: FRef,
  });
}
function useX() {
  return o.useContext(A_4);
}
function useM() {
  let e = useX();
  let t = useA();
  A_1(t, "Unable to find Page context.");
  let {
    imageResourcesPath,
    linkService,
    onGetAnnotationsError,
    onGetAnnotationsSuccess,
    onRenderAnnotationLayerError,
    onRenderAnnotationLayerSuccess,
    page,
    pdf,
    renderForms,
    rotate,
    scale = 1,
  } = {
    ...e,
    ...t,
  };
  A_1(
    pdf,
    "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.",
  );
  A_1(page, "Attempted to load page annotations, but no page was specified.");
  A_1(
    linkService,
    "Attempted to load page annotations, but no linkService was specified.",
  );
  let [C, v] = A_3();
  let { value, error } = C;
  let MRef = o.useRef(null);
  d(
    Number.parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue("--react-pdf-annotation-layer"),
      10,
    ) === 1,
    "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations",
  );
  o.useEffect(
    function () {
      v({
        type: "RESET",
      });
    },
    [v, page],
  );
  o.useEffect(
    function () {
      if (!page) {
        return;
      }
      let e = i.A(page.getAnnotations());
      e.promise
        .then((e) => {
          v({
            type: "RESOLVE",
            value: e,
          });
        })
        .catch((e) => {
          v({
            type: "REJECT",
            error: e,
          });
        });
      return () => {
        xL(e);
      };
    },
    [v, page],
  );
  o.useEffect(() => {
    if (value !== undefined) {
      if (value === false) {
        return void (
          error &&
          (d(false, error.toString()),
          onGetAnnotationsError && onGetAnnotationsError(error))
        );
      }
      if (value && onGetAnnotationsSuccess) {
        onGetAnnotationsSuccess(value);
      }
    }
  }, [value]);
  let T = o.useMemo(
    () =>
      page.getViewport({
        scale,
        rotation: rotate,
      }),
    [page, rotate, scale],
  );
  o.useEffect(
    function () {
      if (!pdf || !page || !linkService || !value) {
        return;
      }
      let { current } = MRef;
      if (!current) {
        return;
      }
      let viewport = T.clone({
        dontFlip: true,
      });
      let n = {
        annotations: value,
        annotationStorage: pdf.annotationStorage,
        div: current,
        imageResourcesPath,
        linkService,
        page,
        renderForms,
        viewport,
      };
      current.innerHTML = "";
      try {
        new h.dU({
          accessibilityManager: null,
          annotationCanvasMap: null,
          annotationEditorUIManager: null,
          div: current,
          l10n: null,
          page,
          structTreeLayer: null,
          viewport,
        }).render(n);
        if (onRenderAnnotationLayerSuccess) {
          onRenderAnnotationLayerSuccess();
        }
      } catch (err) {
        d(false, `${err}`);
        if (onRenderAnnotationLayerError) {
          onRenderAnnotationLayerError(err);
        }
      }
      return () => {};
    },
    [value, imageResourcesPath, linkService, page, pdf, renderForms, T],
  );
  return n.jsx("div", {
    className: s.A("react-pdf__Page__annotations", "annotationLayer"),
    ref: MRef,
  });
}
function useL(e) {
  let t = {
    ...useX(),
    ...e,
  };
  let {
    _className = "react-pdf__Page",
    _enableRegisterUnregisterPage = true,
    canvasBackground,
    canvasRef,
    children,
    className,
    customRenderer,
    customTextRenderer,
    devicePixelRatio,
    error = "Failed to load the page.",
    height,
    inputRef,
    loading = "Loading page…",
    noData = "No page specified.",
    onGetAnnotationsError,
    onGetAnnotationsSuccess,
    onGetStructTreeError,
    onGetStructTreeSuccess,
    onGetTextError,
    onGetTextSuccess,
    onLoadError,
    onLoadSuccess,
    onRenderAnnotationLayerError,
    onRenderAnnotationLayerSuccess,
    onRenderError,
    onRenderSuccess,
    onRenderTextLayerError,
    onRenderTextLayerSuccess,
    pageIndex,
    pageNumber,
    pdf,
    registerPage,
    renderAnnotationLayer = true,
    renderForms = false,
    renderMode = "canvas",
    renderTextLayer = true,
    rotate,
    scale = 1,
    unregisterPage,
    width,
    ...rest
  } = t;
  let [el, es] = A_3();
  let { value, error: error_1 } = el;
  let edRef = o.useRef(null);
  A_1(
    pdf,
    "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.",
  );
  let pageIndex_1 = ci(pageNumber)
    ? pageNumber - 1
    : pageIndex != null
      ? pageIndex
      : null;
  let pageNumber_1 =
    pageNumber != null ? pageNumber : ci(pageIndex) ? pageIndex + 1 : null;
  let eh = rotate != null ? rotate : value ? value.rotate : null;
  let scale_1 = o.useMemo(() => {
    if (!value) {
      return null;
    }
    let e = 1;
    let t = scale != null ? scale : 1;
    if (width || height) {
      let t = value.getViewport({
        scale: 1,
        rotation: eh,
      });
      if (width) {
        e = width / t.width;
      } else if (height) {
        e = height / t.height;
      }
    }
    return t * e;
  }, [height, value, eh, scale, width]);
  o.useEffect(
    function () {
      return () => {
        if (
          ci(pageIndex_1) &&
          _enableRegisterUnregisterPage &&
          unregisterPage
        ) {
          unregisterPage(pageIndex_1);
        }
      };
    },
    [_enableRegisterUnregisterPage, pdf, pageIndex_1, unregisterPage],
  );
  o.useEffect(
    function () {
      es({
        type: "RESET",
      });
    },
    [es, pdf, pageIndex_1],
  );
  o.useEffect(
    function () {
      if (!pdf || !pageNumber_1) {
        return;
      }
      let e = i.A(pdf.getPage(pageNumber_1));
      e.promise
        .then((e) => {
          es({
            type: "RESOLVE",
            value: e,
          });
        })
        .catch((e) => {
          es({
            type: "REJECT",
            error: e,
          });
        });
      return () => xL(e);
    },
    [es, pdf, pageNumber_1],
  );
  o.useEffect(() => {
    if (value !== undefined) {
      if (value === false) {
        return void (
          error_1 &&
          (d(false, error_1.toString()), onLoadError && onLoadError(error_1))
        );
      }
      (() => {
        if (onLoadSuccess) {
          if (!value || !scale_1) {
            return;
          }
          onLoadSuccess(vS(value, scale_1));
        }
        if (_enableRegisterUnregisterPage && registerPage) {
          if (!ci(pageIndex_1) || !edRef.current) {
            return;
          }
          registerPage(pageIndex_1, edRef.current);
        }
      })();
    }
  }, [value, scale_1]);
  let em = o.useMemo(() => {
    if (value && ci(pageIndex_1) && pageNumber_1 && ci(eh) && ci(scale_1)) {
      return {
        _className,
        canvasBackground,
        customTextRenderer,
        devicePixelRatio,
        onGetAnnotationsError,
        onGetAnnotationsSuccess,
        onGetStructTreeError,
        onGetStructTreeSuccess,
        onGetTextError,
        onGetTextSuccess,
        onRenderAnnotationLayerError,
        onRenderAnnotationLayerSuccess,
        onRenderError,
        onRenderSuccess,
        onRenderTextLayerError,
        onRenderTextLayerSuccess,
        page: value,
        pageIndex: pageIndex_1,
        pageNumber: pageNumber_1,
        renderForms,
        renderTextLayer,
        rotate: eh,
        scale: scale_1,
      };
    }
    return null;
  }, [
    _className,
    canvasBackground,
    customTextRenderer,
    devicePixelRatio,
    onGetAnnotationsError,
    onGetAnnotationsSuccess,
    onGetStructTreeError,
    onGetStructTreeSuccess,
    onGetTextError,
    onGetTextSuccess,
    onRenderAnnotationLayerError,
    onRenderAnnotationLayerSuccess,
    onRenderError,
    onRenderSuccess,
    onRenderTextLayerError,
    onRenderTextLayerSuccess,
    value,
    pageIndex_1,
    pageNumber_1,
    renderForms,
    renderTextLayer,
    eh,
    scale_1,
  ]);
  let eg = o.useMemo(
    () =>
      l.Ay(rest, () => {
        if (value) {
          if (scale_1) {
            return vS(value, scale_1);
          }
          return undefined;
        }
        return value;
      }),
    [rest, value, scale_1],
  );
  let eb = `${pageIndex_1}@${scale_1}/${eh}`;
  return n.jsx("div", {
    className: s.A(_className, className),
    "data-page-number": pageNumber_1,
    ref: a.A(inputRef, edRef),
    style: {
      "--scale-factor": `${scale_1}`,
      backgroundColor: canvasBackground || "white",
      position: "relative",
      minWidth: "min-content",
      minHeight: "min-content",
    },
    ...eg,
    children: pageNumber_1
      ? pdf === null || value == null
        ? n.jsx(A_2, {
            type: "loading",
            children: typeof loading === "function" ? loading() : loading,
          })
        : pdf === false || value === false
          ? n.jsx(A_2, {
              type: "error",
              children: typeof error === "function" ? error() : error,
            })
          : n.jsxs(CContext.Provider, {
              value: em,
              children: [
                (() => {
                  switch (renderMode) {
                    case "custom":
                      A_1(
                        customRenderer,
                        'renderMode was set to "custom", but no customRenderer was passed.',
                      );
                      return n.jsx(customRenderer, {}, `${eb}_custom`);
                    case "none":
                      return null;
                    default:
                      return n.jsx(
                        useV,
                        {
                          canvasRef,
                        },
                        `${eb}_canvas`,
                      );
                  }
                })(),
                renderTextLayer ? n.jsx(useF, {}, `${eb}_text`) : null,
                renderAnnotationLayer
                  ? n.jsx(useM, {}, `${eb}_annotations`)
                  : null,
                children,
              ],
            })
      : n.jsx(A_2, {
          type: "no-data",
          children: typeof noData === "function" ? noData() : noData,
        }),
  });
}
export { useL as A };
