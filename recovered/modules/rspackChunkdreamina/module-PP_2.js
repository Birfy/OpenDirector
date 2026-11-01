import a from "z8";
import n from "bT";
import o from "Gr7";
import l from "bl";
import i from "cDJ";
import s from "Qey";
import "fj";
import "PWW";
import c from "n5f";
o.EA.workerSrc = new URL(require("Ktu"), require.b).toString();
const loading = a.jsx("div", {
  className: "loading-container-f0Rv5g",
});
const u = (e) => e.width;
export var PdfViewer = n.memo(function (e) {
  const { url, compact = false, pageLimit, onLoaded } = e;
  const [m, setM] = n.useState(0);
  const [p, setP] = n.useState(false);
  const gRef = n.useRef(null);
  const bRef = n.useRef(onLoaded);
  bRef.current = onLoaded;
  const w = c.w(gRef, u, 0);
  const error = a.jsx("div", {
    className: "error-container-rXyAG6",
    children: s.Ay.t(
      "reference_pdf_preview_unavailable",
      {},
      "PDF preview unavailable",
    ),
  });
  const onLoadSuccess = n.useCallback((e) => {
    var t;
    var { numPages } = e;
    setM(numPages);
    setP(false);
    if ((t = bRef.current) != null) {
      t.call(bRef);
    }
  }, []);
  const onLoadError = n.useCallback(() => {
    var e;
    setM(0);
    setP(true);
    if ((e = bRef.current) != null) {
      e.call(bRef);
    }
  }, []);
  const _ = pageLimit ? Math.min(m, pageLimit) : m;
  const width = w > 0 ? w : undefined;
  const children = a.jsx("div", {
    ref: gRef,
    className: compact
      ? "pdf-viewer-container-compact-r8ucDZ"
      : "pdf-viewer-container-FnDpma",
    children: a.jsx(
      l.A,
      {
        file: url,
        onLoadSuccess,
        onLoadError,
        loading,
        error,
        children:
          !p && w > 0
            ? Array.from(Array(_), (e, t) =>
                a.jsx(
                  i.A,
                  {
                    pageNumber: t + 1,
                    width,
                    renderAnnotationLayer: false,
                    className: compact
                      ? "pdf-page-compact-O7JbqQ"
                      : "pdf-page-JW7wq9",
                  },
                  `page_${t + 1}`,
                ),
              )
            : null,
      },
      url,
    ),
  });
  if (compact) {
    return a.jsx("div", {
      className: "compact-wrapper-VUpUye",
      children,
    });
  }
  return children;
});
