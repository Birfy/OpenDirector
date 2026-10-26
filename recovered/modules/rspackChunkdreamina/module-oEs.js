import a from "NY";
import n from "z8";
import o from "bT";
import l from "Qey";
import i from "xi";
import * as s from "./module-kW5.js";
export var MarkdownViewer = o.memo(function (e) {
  const { url, className, showSourceToggle = false, onLoaded } = e;
  const [u, setU] = o.useState(undefined);
  const [m, setM] = o.useState(false);
  const pRef = o.useRef(onLoaded);
  pRef.current = onLoaded;
  o.useEffect(() => {
    var signal;
    var r = new AbortController();
    setM(false);
    setU(undefined);
    ((signal = r.signal),
    a._(function* () {
      const r = yield fetch(url, {
        signal,
      });
      if (!r.ok) {
        throw Error("HTTP ".concat(r.status));
      }
      return r.text();
    })())
      .then((e) => {
        if (!r.signal.aborted) {
          setU(e);
        }
      })
      .catch((e) => {
        if (!r.signal.aborted) {
          i.V.warn("[MarkdownViewer] markdown 内容 fetch 失败", e);
          setM(true);
        }
      })
      .finally(() => {
        if (!r.signal.aborted) {
          var e;
          if ((e = pRef.current) != null) {
            e.call(pRef);
          }
        }
      });
    return () => {
      r.abort();
    };
  }, [url]);
  if (m) {
    return n.jsx("div", {
      className: "error-container-Ct8IEh",
      children: l.Ay.t(
        "reference_markdown_preview_unavailable",
        {},
        "Markdown preview unavailable",
      ),
    });
  }
  if (u === undefined) {
    return n.jsx("div", {
      className: "loading-placeholder-qhpySZ",
    });
  }
  return n.jsx(s.n, {
    value: u,
    className,
    showSourceToggle,
  });
});
