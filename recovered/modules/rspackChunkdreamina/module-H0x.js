import a from "NY";
import n from "z8";
import o from "bT";
import l from "Qey";
export var DocxViewer = o.memo(function (e) {
  const { url, compact = false, onLoaded } = e;
  const [c, setC] = o.useState(true);
  const [u, setU] = o.useState(false);
  const mRef = o.useRef(null);
  const hRef = o.useRef(null);
  const pRef = o.useRef(onLoaded);
  pRef.current = onLoaded;
  o.useEffect(() => {
    var e = new AbortController();
    var mRef_current = mRef.current;
    var hRef_current = hRef.current;
    a._(function* () {
      setC(true);
      setU(false);
      try {
        if (!mRef_current || !hRef_current) {
          return;
        }
        mRef_current.innerHTML = "";
        hRef_current.innerHTML = "";
        var a;
        const [l, s] = yield Promise.all([
          fetch(url, {
            signal: e.signal,
          }),
          Promise.all([require.e("qa0"), require.e("qss")]).then(
            require.bind(require, "zGH"),
          ),
        ]);
        if (!l.ok) {
          throw Error("Failed to fetch docx preview: ".concat(l.status));
        }
        if (e.signal.aborted) {
          return;
        }
        const c = yield l.arrayBuffer();
        if (
          e.signal.aborted ||
          (yield s.renderAsync(c, mRef_current, hRef_current, {
            className: compact ? "dreamina-docx-compact" : "dreamina-docx",
            inWrapper: true,
            breakPages: true,
            ignoreWidth: compact,
            ignoreHeight: compact,
            useBase64URL: true,
            renderHeaders: false,
            renderFooters: false,
            renderFootnotes: !compact,
            renderEndnotes: !compact,
            ignoreLastRenderedPageBreak: false,
          }),
          e.signal.aborted)
        ) {
          return;
        }
        if (compact) {
          const u = mRef_current.querySelectorAll("section");
          for (let m = u.length - 1; m >= 1; m--) {
            u[m].remove();
          }
        }
      } catch (error) {
        if (e.signal.aborted) {
          return;
        }
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setU(true);
        }
      } finally {
        if (!e.signal.aborted) {
          setC(false);
          if ((a = pRef.current) != null) {
            a.call(pRef);
          }
        }
      }
    })();
    return () => {
      e.abort();
      if (mRef_current) {
        mRef_current.innerHTML = "";
      }
      if (hRef_current) {
        hRef_current.innerHTML = "";
      }
    };
  }, [url, compact]);
  return n.jsxs("div", {
    className: compact
      ? "docx-viewer-compact-tAXqCq"
      : "docx-viewer-container-tZ9LRU",
    children: [
      n.jsx("div", {
        ref: hRef,
        className: "style-container-Gcs8e2",
      }),
      c
        ? n.jsx("div", {
            className: "loading-container-LEl5k0",
          })
        : null,
      u
        ? n.jsx("div", {
            className: "error-container-kh1bXy",
            children: l.Ay.t(
              "reference_docx_preview_unavailable",
              {},
              "DOCX preview unavailable",
            ),
          })
        : null,
      n.jsx("div", {
        ref: mRef,
        className: compact
          ? "docx-viewer-compact-content-FxEZE4"
          : "docx-viewer-content-Lecz2M",
        style:
          c || u
            ? {
                display: "none",
              }
            : undefined,
      }),
    ],
  });
});
