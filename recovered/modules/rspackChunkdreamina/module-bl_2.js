import n from "z8";
import o from "bT";
import i from "TLa";
import l from "L8J";
import s from "VNX";
import { A as A_1 } from "./module-Y8.js";
import u from "./module-b4f.js";
import d from "LmZ";
import c from "Gr7";
import { A as A_2 } from "./module-JVJ.js";
import { A as A_3 } from "./module-G2.js";
import { Bd, h1, jA, mw, qC, qf, xL, zL } from "./module-zu_2.js";
import { A as A_4 } from "./module-ab_2.js";
class f {
  constructor() {
    this.externalLinkEnabled = true;
    this.externalLinkRel = undefined;
    this.externalLinkTarget = undefined;
    this.isInPresentationMode = false;
    this.pdfDocument = undefined;
    this.pdfViewer = undefined;
  }
  setDocument(e) {
    this.pdfDocument = e;
  }
  setViewer(e) {
    this.pdfViewer = e;
  }
  setExternalLinkRel(e) {
    this.externalLinkRel = e;
  }
  setExternalLinkTarget(e) {
    this.externalLinkTarget = e;
  }
  setHistory() {}
  get pagesCount() {
    if (this.pdfDocument) {
      return this.pdfDocument.numPages;
    }
    return 0;
  }
  get page() {
    A_1(this.pdfViewer, "PDF viewer is not initialized.");
    return this.pdfViewer.currentPageNumber || 0;
  }
  set page(e) {
    A_1(this.pdfViewer, "PDF viewer is not initialized.");
    this.pdfViewer.currentPageNumber = e;
  }
  get rotation() {
    return 0;
  }
  set rotation(e) {}
  goToDestination(e) {
    return new Promise((resolve) => {
      A_1(this.pdfDocument, "PDF document not loaded.");
      A_1(e, "Destination is not specified.");
      if (typeof e === "string") {
        this.pdfDocument.getDestination(e).then(resolve);
      } else if (Array.isArray(e)) {
        resolve(e);
      } else {
        e.then(resolve);
      }
    }).then((dest) => {
      A_1(Array.isArray(dest), `"${dest}" is not a valid destination array.`);
      let t = dest[0];
      new Promise((resolve) => {
        A_1(this.pdfDocument, "PDF document not loaded.");
        if (t instanceof Object) {
          this.pdfDocument
            .getPageIndex(t)
            .then((t) => {
              resolve(t);
            })
            .catch(() => {
              A_1(false, `"${t}" is not a valid page reference.`);
            });
        } else if (typeof t === "number") {
          resolve(t);
        } else {
          A_1(false, `"${t}" is not a valid destination reference.`);
        }
      }).then((pageIndex) => {
        let r = pageIndex + 1;
        A_1(this.pdfViewer, "PDF viewer is not initialized.");
        A_1(
          r >= 1 && r <= this.pagesCount,
          `"${r}" is not a valid page number.`,
        );
        this.pdfViewer.scrollPageIntoView({
          dest,
          pageIndex,
          pageNumber: r,
        });
      });
    });
  }
  navigateTo(e) {
    this.goToDestination(e);
  }
  goToPage(e) {
    A_1(this.pdfViewer, "PDF viewer is not initialized.");
    A_1(e >= 1 && e <= this.pagesCount, `"${e}" is not a valid page number.`);
    this.pdfViewer.scrollPageIntoView({
      pageIndex: e - 1,
      pageNumber: e,
    });
  }
  addLinkAttributes(e, t, r) {
    e.href = t;
    e.rel = this.externalLinkRel || "noopener noreferrer nofollow";
    e.target = r ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {}
  executeNamedAction() {}
  cachePageRef() {}
  isPageVisible() {
    return true;
  }
  isPageCached() {
    return true;
  }
  executeSetOCGState() {}
}
let { Tm } = c;
let A = (e, t) => {
  switch (t) {
    case 1:
      e(prompt("Enter the password to open this PDF file."));
      break;
    case 2:
      e(prompt("Invalid password. Please try again."));
  }
};
function w(file) {
  return (
    typeof file === "object" &&
    file !== null &&
    ("data" in file || "range" in file || "url" in file)
  );
}
var D = o.forwardRef(function (e, t) {
  const {
    children,
    className,
    error = "Failed to load PDF file.",
    externalLinkRel,
    externalLinkTarget,
    file,
    inputRef,
    imageResourcesPath,
    loading = "Loading PDF…",
    noData = "No PDF file specified.",
    onItemClick,
    onLoadError,
    onLoadProgress,
    onLoadSuccess,
    onPassword = A,
    onSourceError,
    onSourceSuccess,
    options,
    renderMode,
    rotate,
    ...rest
  } = e;
  let [I, j] = A_4();
  let { value, error: error_1 } = I;
  let [U, W] = A_4();
  let { value: value_1, error: error_2 } = U;
  let qRef = o.useRef(new f());
  let YRef = o.useRef([]);
  let ZRef = o.useRef(undefined);
  let XRef = o.useRef(undefined);
  if (file && file !== ZRef.current && w(file)) {
    u(
      !d.j(file, ZRef.current),
      'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.',
    );
    ZRef.current = file;
  }
  if (options && options !== XRef.current) {
    u(
      !d.j(options, XRef.current),
      'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.',
    );
    XRef.current = options;
  }
  let QRef = o.useRef({
    scrollPageIntoView: (e) => {
      let { dest, pageNumber, pageIndex = pageNumber - 1 } = e;
      if (onItemClick) {
        return void onItemClick({
          dest,
          pageIndex,
          pageNumber,
        });
      }
      let o = YRef.current[pageIndex];
      if (o) {
        o.scrollIntoView();
      } else {
        u(
          false,
          `An internal link leading to page ${pageNumber} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`,
        );
      }
    },
  });
  o.useImperativeHandle(
    t,
    () => ({
      linkService: qRef,
      pages: YRef,
      viewer: QRef,
    }),
    [],
  );
  o.useEffect(
    function () {
      j({
        type: "RESET",
      });
    },
    [file, j],
  );
  let ee = o.useCallback(() => {
    var e;
    var t;
    var r;
    var n;
    e = this;
    t = undefined;
    r = undefined;
    n = function* () {
      if (!file) {
        return null;
      }
      if (typeof file === "string") {
        if (zL(file)) {
          return {
            data: jA(file),
          };
        }
        qC();
        return {
          url: file,
        };
      }
      if (file instanceof Tm) {
        return {
          range: file,
        };
      }
      if (mw(file)) {
        return {
          data: file,
        };
      }
      if (Bd && qf(file)) {
        return {
          data: yield h1(file),
        };
      }
      A_1(
        typeof file === "object",
        "Invalid parameter in file, need either Uint8Array, string or a parameter object",
      );
      A_1(
        w(file),
        "Invalid parameter object: need either .data, .range or .url",
      );
      if ("url" in file && typeof file.url === "string") {
        if (zL(file.url)) {
          let { url, ...rest } = file;
          return {
            data: jA(url),
            ...rest,
          };
        }
        qC();
      }
      return file;
    };
    return new (r || (r = Promise))(function (o, i) {
      function l(e) {
        try {
          a(n.next(e));
        } catch (err) {
          i(err);
        }
      }
      function s(e) {
        try {
          a(n.throw(e));
        } catch (err) {
          i(err);
        }
      }
      function a(e) {
        let t;
        if (e.done) {
          o(e.value);
        } else {
          ((t = e.value) instanceof r
            ? t
            : new r(function (e) {
                e(t);
              })
          ).then(l, s);
        }
      }
      a((n = n.apply(e, t || [])).next());
    });
  }, [file]);
  o.useEffect(() => {
    let e = l.A(ee());
    e.promise
      .then((e) => {
        j({
          type: "RESOLVE",
          value: e,
        });
      })
      .catch((e) => {
        j({
          type: "REJECT",
          error: e,
        });
      });
    return () => {
      xL(e);
    };
  }, [ee, j]);
  o.useEffect(() => {
    if (value !== undefined) {
      if (value === false) {
        return void (
          error_1 &&
          (u(false, error_1.toString()),
          onSourceError && onSourceError(error_1))
        );
      }
      if (onSourceSuccess) {
        onSourceSuccess();
      }
    }
  }, [value]);
  o.useEffect(
    function () {
      W({
        type: "RESET",
      });
    },
    [W, value],
  );
  o.useEffect(
    function () {
      if (!value) {
        return;
      }
      let e = options
        ? {
            ...value,
            ...options,
          }
        : value;
      let t = c.YE(e);
      if (onLoadProgress) {
        t.onProgress = onLoadProgress;
      }
      if (onPassword) {
        t.onPassword = onPassword;
      }
      let r = t.promise
        .then((e) => {
          W({
            type: "RESOLVE",
            value: e,
          });
        })
        .catch((e) => {
          if (!t.destroyed) {
            W({
              type: "REJECT",
              error: e,
            });
          }
        });
      return () => {
        r.finally(() => t.destroy());
      };
    },
    [options, W, value],
  );
  o.useEffect(() => {
    if (value_1 !== undefined) {
      if (value_1 === false) {
        return void (
          error_2 &&
          (u(false, error_2.toString()), onLoadError && onLoadError(error_2))
        );
      }
      if (value_1) {
        if (onLoadSuccess) {
          onLoadSuccess(value_1);
        }
        YRef.current = Array(value_1.numPages);
        qRef.current.setDocument(value_1);
      }
    }
  }, [value_1]);
  o.useEffect(
    function () {
      qRef.current.setViewer(QRef.current);
      qRef.current.setExternalLinkRel(externalLinkRel);
      qRef.current.setExternalLinkTarget(externalLinkTarget);
    },
    [externalLinkRel, externalLinkTarget],
  );
  let registerPage = o.useCallback((e, t) => {
    YRef.current[e] = t;
  }, []);
  let unregisterPage = o.useCallback((e) => {
    delete YRef.current[e];
  }, []);
  let en = o.useMemo(
    () => ({
      imageResourcesPath,
      linkService: qRef.current,
      onItemClick,
      pdf: value_1,
      registerPage,
      renderMode,
      rotate,
      unregisterPage,
    }),
    [
      imageResourcesPath,
      onItemClick,
      value_1,
      registerPage,
      renderMode,
      rotate,
      unregisterPage,
    ],
  );
  let eo = o.useMemo(() => i.Ay(rest, () => value_1), [rest, value_1]);
  return n.jsx("div", {
    className: s.A("react-pdf__Document", className),
    ref: inputRef,
    style: {
      "--scale-factor": "1",
    },
    ...eo,
    children: file
      ? value_1 == null
        ? n.jsx(A_3, {
            type: "loading",
            children: typeof loading === "function" ? loading() : loading,
          })
        : value_1 === false
          ? n.jsx(A_3, {
              type: "error",
              children: typeof error === "function" ? error() : error,
            })
          : n.jsx(A_2.Provider, {
              value: en,
              children,
            })
      : n.jsx(A_3, {
          type: "no-data",
          children: typeof noData === "function" ? noData() : noData,
        }),
  });
});
export { D as A };
