import a from "bT";
const o = "style_spin__5uCiL";
const i = "style_rtl__vYVyg";
((t, e = {}) => {
  const e_insertAt = e.insertAt;
  if (t && typeof document !== "undefined") {
    const a = document.head || document.getElementsByTagName("head")[0];
    const r = document.createElement("style");
    r.type = "text/css";
    if (e_insertAt === "top" && a.firstChild) {
      a.insertBefore(r, a.firstChild);
    } else {
      a.appendChild(r);
    }
    if (r.styleSheet) {
      r.styleSheet.cssText = t;
    } else {
      r.appendChild(document.createTextNode(t));
    }
  }
})(
  ".style_spin__5uCiL,.style_spin__5uCiL svg {animation: style_iconpark-spin__mGDV3 1s infinite linear;}\n.style_rtl__vYVyg,.style_rtl__vYVyg svg {transform: scaleX(-1);}\n.style_spin__5uCiL.style_rtl__vYVyg,.style_spin__5uCiL.style_rtl__vYVyg svg {animation: style_iconpark-spin-rtl__ZyqaE 1s infinite linear;}\n@keyframes style_iconpark-spin__mGDV3 {\n  0% { -webkit-transform: rotate(0); transform: rotate(0);} 100% {-webkit-transform: rotate(360deg); transform: rotate(360deg);}\n}\n@keyframes style_iconpark-spin-rtl__ZyqaE {\n  0% {-webkit-transform: scaleX(-1) rotate(0); transform: scaleX(-1) rotate(0);} 100% {-webkit-transform: scaleX(-1) rotate(360deg); transform: scaleX(-1) rotate(360deg);}\n}",
);
export function mNo(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const A = width || size;
  const p = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: A,
      height: p,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20.749 2a1 1 0 1 0-2 0v1.786h-1.786a1 1 0 1 0 0 2h1.786V7.57a1 1 0 1 0 2 0V5.786h1.786a1 1 0 0 0 0-2h-1.786V2Zm-6.723 2.786a1 1 0 0 0-1-1H7a4.5 4.5 0 0 0-4.5 4.5v7.856a4.5 4.5 0 0 0 4.5 4.5h9.25a4.5 4.5 0 0 0 4.5-4.5v-4.7a1 1 0 1 0-2 0v4.7a2.5 2.5 0 0 1-2.5 2.5H7a2.5 2.5 0 0 1-2.5-2.5V8.286a2.5 2.5 0 0 1 2.5-2.5h6.025a1 1 0 0 0 1-1Zm-2.098 7.727V9.089a1 1 0 1 0-2 0v4.178a1 1 0 0 0 .725.962l3.25.928a1 1 0 1 0 .55-1.923l-2.525-.721Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: k,
      }),
    ),
  );
}
export function gu7(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const A = width || size;
  const p = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: A,
      height: p,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.26 12.844a1.2 1.2 0 0 1 0-1.688L14.321 3a1.2 1.2 0 0 1 1.707 1.687L8.801 12l7.227 7.313A1.2 1.2 0 0 1 14.321 21l-8.06-8.156Z",
        fill: k,
      }),
    ),
  );
}
export function rIS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const A = width || size;
  const p = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: A,
      height: p,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.01 7.982A1.2 1.2 0 0 1 21 9.679l-8.156 8.06a1.2 1.2 0 0 1-1.688 0L3 9.68a1.2 1.2 0 0 1 1.687-1.707L12 15.199l7.313-7.227a1.2 1.2 0 0 1 1.697.01Z",
        fill: k,
      }),
    ),
  );
}
export function owb(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const A = width || size;
  const p = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: A,
      height: p,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.01 16.018a1.2 1.2 0 0 0-.01-1.697l-8.156-8.06a1.2 1.2 0 0 0-1.688 0L3 14.32a1.2 1.2 0 0 0 1.687 1.707L12 8.801l7.313 7.227a1.2 1.2 0 0 0 1.697-.01Z",
        fill: k,
      }),
    ),
  );
}
export function xZp(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const A = width || size;
  const p = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: A,
      height: p,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.8 20a1.2 1.2 0 0 0 2.4 0v-6.8H20a1.2 1.2 0 1 0 0-2.4h-6.8V4a1.2 1.2 0 0 0-2.4 0v6.8H4a1.2 1.2 0 0 0 0 2.4h6.8V20Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: k,
      }),
    ),
  );
}
export function Da7(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const A = width || size;
  const p = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: A,
      height: p,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.047 4.1a1 1 0 1 0-2 0v2.8a1 1 0 1 0 2 0v-.447h3.103a1 1 0 1 0 0-2h-3.103V4.1Zm-4 2.353H2.85a1 1 0 0 1 0-2h11.197v2Zm-7 3.247a1 1 0 0 0-1 1v.4H2.85a1 1 0 1 0 0 2h3.197v.4a1 1 0 1 0 2 0v-2.8a1 1 0 0 0-1-1Zm14.103 3.4H10.047v-2H21.15a1 1 0 1 1 0 2Zm-10.103 3a1 1 0 0 0-1 1v2.8a1 1 0 1 0 2 0v-2.8a1 1 0 0 0-1-1ZM2.85 17.497h5.197v2H2.85a1 1 0 1 1 0-2Zm18.3 2h-9.103v-2h9.103a1 1 0 1 1 0 2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: k,
      }),
    ),
  );
}
export function Vjx(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const E = stroke || color;
  const k = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(k || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(E || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.74 12.844a1.2 1.2 0 0 0 0-1.688L9.678 3A1.2 1.2 0 1 0 7.97 4.687L15.2 12l-7.23 7.313A1.2 1.2 0 1 0 9.68 21l8.06-8.156Z",
        fill: k,
      }),
    ),
  );
}
export function iWP(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M21.849 5.151a1.2 1.2 0 0 1 0 1.698l-12 12a1.2 1.2 0 0 1-1.697 0l-6-6a1.2 1.2 0 1 1 1.697-1.697L9 16.302l11.152-11.15a1.2 1.2 0 0 1 1.697 0Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function bWN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.533 12.844a1.2 1.2 0 0 1 0-1.687l7.655-7.747a1.2 1.2 0 0 1 1.708 1.687l-6.822 6.904 6.822 6.903a1.2 1.2 0 1 1-1.708 1.686l-7.655-7.746Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function _vE(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.5 1.5a1 1 0 0 1 1 1V3h5v-.5a1 1 0 1 1 2 0V3h1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1v-.5a1 1 0 0 1 1-1Zm6 3.5v.5a1 1 0 1 0 2 0V5h1a2 2 0 0 1 2 2v2h-15V7a2 2 0 0 1 2-2h1v.5a1 1 0 0 0 2 0V5h5Zm5 6h-15v6a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6ZM14 15a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2H14Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function PEB(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9 3.002a2 2 0 0 0-2 2 1 1 0 0 1-1 1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-1a1 1 0 0 1-1-1 2 2 0 0 0-2-2H9Zm0 2h6a3 3 0 0 0 3 3h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1a3 3 0 0 0 3-3Zm3.94 3.859a.8.8 0 0 1 .494.74v.333H14a2.796 2.796 0 0 1 2.8 2.8c0 .882-.409 1.67-1.045 2.181a.8.8 0 1 1-1.003-1.246c.275-.221.448-.558.448-.935a1.196 1.196 0 0 0-1.2-1.2h-2.5a.8.8 0 0 1-.566-1.366l.756-.756.378-.378a.8.8 0 0 1 .872-.173Zm-3.57 1.812a.8.8 0 0 1-.121 1.125 1.196 1.196 0 0 0-.449.936 1.196 1.196 0 0 0 1.2 1.2h2.5a.8.8 0 0 1 .566 1.365l-.747.747-.373.373a.8.8 0 0 1-1.365-.566v-.32H10a2.796 2.796 0 0 1-2.8-2.8c0-.882.408-1.67 1.044-2.181a.8.8 0 0 1 1.125.121Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Tf3(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.28 7.502a1.25 1.25 0 0 1 0 1.768l-7.2 7.2a1.25 1.25 0 0 1-1.767 0l-3.6-3.6a1.25 1.25 0 1 1 1.767-1.768l2.716 2.717 6.317-6.317a1.25 1.25 0 0 1 1.767 0Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Ej4(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M6.938 3.125a1 1 0 0 1 1 1v1.813h8.125V4.125a1 1 0 1 1 2 0v1.813h1.812a1 1 0 1 1 0 2h-1.813v2.937a1 1 0 1 1-2 0V7.937H7.938v8.125h2.938a1 1 0 1 1 0 2H7.937v1.813a1 1 0 1 1-2 0v-1.813H4.125a1 1 0 1 1 0-2h1.813V7.938H4.125a1 1 0 0 1 0-2h1.813V4.125a1 1 0 0 1 1-1Zm10.518 17.363.208-.477a3.68 3.68 0 0 1 1.871-1.898l.641-.285a.447.447 0 0 0 0-.812l-.605-.27a3.682 3.682 0 0 1-1.898-1.961l-.213-.515a.427.427 0 0 0-.794 0l-.214.515a3.682 3.682 0 0 1-1.898 1.962l-.605.269a.447.447 0 0 0 0 .812l.64.285a3.675 3.675 0 0 1 1.872 1.898l.208.477c.152.35.635.35.787 0Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function r7P(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.906 18.32A8 8 0 0 1 5.68 7.094l.02.021.05.05.05.051.05.05.05.05.05.05.05.05.05.05.05.049.049.05.05.048.048.05.05.048.048.05.049.048.048.048.049.049.048.048.048.048.048.048.048.048.048.048.047.048.048.047.047.047.047.048.048.047.046.047.047.047.047.046.047.047.046.046.046.047.047.046.046.046.046.046.045.046.046.045.046.046.045.045.045.045.045.046.045.045.045.045.045.044.045.045.044.044.045.045.044.044.044.044.044.044.044.044.044.044.043.044.044.043.043.043.043.044.044.043.043.043.042.043.043.042.043.043.042.042.043.043.042.042.042.042.042.042.042.042.042.042.041.041.042.042.041.041.041.042.041.04.041.042.041.04.041.041.04.04.041.041.04.04.04.041.041.04.04.04.04.04.04.04.04.04.039.039.04.04.039.039.039.039.039.039.039.039.038.039.04.038.038.039.038.038.038.039.039.038.038.038.038.038.038.038.037.037.038.038.037.038.038.037.037.037.037.037.037.037.037.037.037.037.036.037.037.036.036.037.037.036.036.036.036.036.036.036.036.036.035.036.036.035.036.036.035.035.035.035.035.036.035.035.035.034.035.035.035.035.034.034.035.035.034.034.034.034.034.034.034.034.034.034.034.034.034.034.033.033.034.034.033.033.033.033.033.033.033.033.033.033.033.033.032.032.033.033.032.032.032.033.033.032.032.032.031.032.032.032.032.031.032.032.031.031.032.032.03.031.032.031.031.031.031.031.03.031.032.03.03.031.03.031.031.03.03.03.03.03.03.03.03.03.03.03.03.03.03.03.03.03.029.029.03.03.028.028.03.03.028.029.03.028.028.03.029.028.028.028.029.029.028.028.028.029.028.028.028.028.028.028.028.027.028.028.027.028.028.027.027.028.028.027.027.027.027.027.027.027.027.027.026.027.027.026.027.027.026.026.026.027.027.026.026.026.026.026.026.026.026.026.025.026.026.025.025.026.026.025.025.025.026.026.025.025.025.025.024.025.025.024.025.025.025.025.024.024.024.025.025.024.024.024.024.024.024.024.024.024.024.024.024.024.023.023.024.024.023.023.023.023.023.024.024.023.023.023.022.023.023.022.023.023.023.023.022.022.022.023.023.022.022.022.022.022.022.022.022.022.022.022.022.022.021.021.022.022.021.021.022.022.02.021.022.021.021.021.021.021.02.021.022.02.02.022.02.02.021.02.02.021.021.02.02.02.02.02.02.02.02.02.02.02.02.02.02.02.019.02.02.019.019.019.02.02.018.018.02.02.018.018.02.02.018.018.019.019.018.018.019.02.018.018.019.018.018.018.018.018.018.018.018.018.018.018.018.018.018.018.017.017.018.018.017.017.017.018.018.017.017.017.017.017.017.017.017.017.017.017.016.017.017.016.017.017.016.016.016.017.017.016.016.016.016.016.016.016.016.016.016.016.015.016.016.015.016.016.015.015.016.016.015.015.015.015.015.016.015.015.015.015.015.014.015.015.015.015.014.015.015.014.014.015.015.014.014.014.014.015.014.014.014.014.014.014.014.014.014.013.014.014.014.014.013.013.014.014.013.013.013.013.013.014.014.013.013.013.013.013.012.013.013.012.013.013.013.013.012.012.013.013.012.012.012.013.013.012.012.012.012.012.012.012.012.012.012.012.011.012.012.011.012.012.011.011.012.012.011.011.011.012.012.01.01.012.012.01.01.012.012.01.01.012.011.01.01.011.011.01.01.011.011.01.01.01.01.011.011.01.01.01.01.01.01.01.01.01.01.01.01.01.01.01.009.01.01.009.009.01.01.009.009.009.009.009.009.01.009.008.009.01.009.008.009.009.008.009.01.008.008.009.008.009.009.008.008.008.009.009.008.008.008.008.008.008.008.008.008.008.008.008.008.008.008.008.007.008.008.007.007.008.008.007.004.004Zm1.414-1.414-.004-.004-.007-.008-.008-.007-.007-.008-.008-.007-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.008-.009-.009-.008-.008-.008-.009-.009-.008-.009-.009-.008-.009-.01-.008-.008-.01-.009-.008-.009-.009-.009-.01-.009-.008-.01-.01-.008-.009-.01-.01-.01-.009-.009-.01-.01-.009-.01-.01-.009-.01-.01-.009-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.01-.011-.011-.01-.011-.011-.01-.01-.011-.012-.011-.01-.011-.011-.011-.011-.011-.011-.011-.011-.012-.012-.01-.011-.012-.011-.012-.012-.011-.011-.012-.012-.011-.012-.012-.011-.012-.012-.012-.012-.012-.012-.012-.012-.012-.012-.012-.013-.013-.012-.012-.012-.013-.013-.012-.012-.013-.013-.013-.013-.012-.013-.013-.012-.013-.013-.013-.013-.013-.014-.014-.013-.013-.013-.013-.014-.014-.013-.013-.014-.014-.013-.014-.014-.013-.014-.014-.014-.014-.014-.014-.013-.014-.015-.015-.014-.014-.014-.014-.014-.015-.015-.014-.015-.015-.014-.015-.015-.015-.015-.014-.015-.015-.015-.015-.015-.016-.015-.015-.015-.015-.015-.016-.016-.015-.015-.016-.016-.015-.016-.016-.015-.016-.016-.016-.016-.016-.016-.016-.016-.016-.016-.017-.017-.016-.016-.016-.017-.017-.016-.017-.017-.016-.016-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.017-.018-.018-.017-.017-.017-.018-.018-.017-.018-.018-.017-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.018-.019-.019-.018-.018-.019-.02-.018-.018-.019-.019-.019-.018-.019-.02-.019-.019-.019-.019-.019-.019-.02-.02-.019-.019-.019-.02-.02-.019-.02-.02-.019-.02-.02-.02-.02-.02-.02-.02-.02-.02-.02-.02-.02-.02-.02-.02-.021-.021-.02-.021-.021-.02-.021-.022-.021-.02-.021-.022-.021-.021-.021-.021-.021-.022-.022-.021-.021-.021-.022-.022-.021-.022-.022-.022-.022-.022-.022-.022-.022-.022-.022-.022-.022-.022-.023-.023-.022-.022-.022-.023-.023-.023-.023-.022-.023-.023-.022-.023-.023-.023-.024-.024-.023-.023-.023-.023-.023-.024-.024-.023-.024-.024-.023-.024-.024-.024-.024-.024-.024-.024-.024-.024-.024-.024-.025-.025-.024-.024-.024-.025-.025-.024-.025-.025-.024-.025-.025-.025-.025-.025-.025-.026-.026-.025-.025-.025-.025-.026-.026-.025-.026-.026-.025-.026-.026-.026-.026-.026-.026-.026-.026-.026-.027-.027-.026-.026-.026-.027-.027-.026-.027-.027-.026-.027-.027-.027-.027-.027-.027-.027-.027-.027-.028-.028-.027-.027-.027-.028-.028-.028-.028-.027-.028-.028-.027-.028-.029-.028-.028-.029-.028-.028-.028-.029-.029-.028-.028-.029-.029-.029-.029-.028-.029-.03-.029-.029-.029-.029-.029-.029-.03-.03-.029-.029-.03-.03-.029-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.03-.031-.031-.03-.031-.032-.03-.03-.032-.032-.031-.03-.031-.032-.031-.032-.032-.031-.031-.032-.032-.031-.032-.032-.031-.032-.032-.032-.033-.032-.032-.033-.032-.032-.032-.033-.033-.032-.032-.033-.033-.033-.033-.033-.033-.033-.033-.033-.033-.033-.034-.034-.033-.033-.034-.034-.033-.034-.034-.034-.034-.034-.034-.034-.034-.034-.034-.034-.034-.035-.035-.034-.034-.035-.035-.035-.035-.034-.035-.035-.035-.036-.035-.035-.035-.035-.035-.036-.036-.035-.036-.036-.035-.036-.036-.036-.036-.036-.036-.036-.036-.036-.037-.037-.036-.036-.037-.037-.036-.037-.037-.037-.037-.037-.037-.037-.037-.037-.037-.037-.038-.038-.037-.037-.038-.038-.037-.038-.038-.038-.038-.038-.038-.038-.039-.039-.038-.038-.038-.039-.039-.038-.039-.04-.038-.038-.04-.04-.038-.038-.04-.04-.039-.039-.04-.04-.039-.04-.04-.039-.04-.04-.039-.04-.04-.04-.04-.04-.04-.04-.04-.041-.041-.04-.041-.041-.04-.041-.042-.041-.04-.041-.042-.042-.041-.041-.041-.042-.042-.041-.041-.042-.042-.042-.042-.042-.042-.042-.042-.042-.042-.043-.043-.042-.042-.043-.043-.042-.043-.043-.042-.043-.043-.043-.044-.044-.043-.043-.043-.043-.044-.044-.043-.044-.044-.044-.044-.044-.044-.044-.044-.044-.044-.045-.045-.044-.044-.045-.045-.044-.045-.045-.045-.045-.045-.046-.045-.045-.045-.045-.045-.046-.046-.045-.046-.046-.045-.046-.046-.046-.046-.046-.047-.047-.046-.046-.046-.047-.047-.046-.047-.047-.047-.047-.046-.047-.048-.048-.047-.047-.047-.047-.048-.048-.047-.048-.048-.048-.048-.048-.048-.048-.048-.048-.048-.049-.049-.048-.048-.049-.049-.049-.049-.049-.049-.049-.049-.049-.049-.05-.05-.049-.049-.05-.05-.049-.05-.05-.05-.05-.05-.05-.05-.05-.05-.05-.05-.022-.02A8 8 0 0 1 18.32 16.905ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function pYb(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.865 9.264v3.085c0 1.38.671 2.634 1.737 3.409a30.66 30.66 0 0 1-13.203 0 4.213 4.213 0 0 0 1.737-3.409V9.264a4.865 4.865 0 0 1 9.73 0Zm-11.73 0a6.865 6.865 0 1 1 13.73 0v3.085c0 1.021.699 1.91 1.691 2.15.62.151 1.055.706 1.055 1.343v.075c0 .666-.454 1.252-1.096 1.427a32.572 32.572 0 0 1-17.028 0 1.488 1.488 0 0 1-1.097-1.427v-.075A1.38 1.38 0 0 1 3.445 14.5a2.213 2.213 0 0 0 1.69-2.151V9.264Zm6.867 12.357a4.564 4.564 0 0 1-3.348-1.456c2.219.334 4.477.334 6.696 0a4.564 4.564 0 0 1-3.348 1.456Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function kmM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.662 2.262c.556-1.095 2.12-1.095 2.676 0l.945 1.864a12.727 12.727 0 0 0 5.591 5.59l1.864.946c1.095.556 1.095 2.12 0 2.676l-1.864.945a12.727 12.727 0 0 0-5.59 5.591l-.946 1.864c-.556 1.095-2.12 1.095-2.676 0l-.945-1.864a12.727 12.727 0 0 0-5.591-5.59l-1.864-.946c-1.095-.556-1.095-2.12 0-2.676l1.864-.945a12.727 12.727 0 0 0 5.59-5.591l.946-1.864Z",
        fill: E,
      }),
    ),
  );
}
export function gzW(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.579 6.119a1.2 1.2 0 0 0-1.697-1.698L12 10.303 6.12 4.422a1.2 1.2 0 1 0-1.697 1.697L10.303 12l-5.881 5.882a1.2 1.2 0 0 0 1.697 1.697L12 13.698l5.882 5.882a1.2 1.2 0 1 0 1.697-1.697L13.697 12l5.882-5.882Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Bfx(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.15 1.366a1 1 0 0 1 1.7 0l2.956 4.755a1 1 0 0 0 .61.443l5.435 1.342a1 1 0 0 1 .525 1.616l-3.609 4.28a1 1 0 0 0-.232.717l.403 5.585a1 1 0 0 1-1.374.998l-5.187-2.109a1 1 0 0 0-.754 0l-5.187 2.11a1 1 0 0 1-1.374-.999l.404-5.585a1 1 0 0 0-.233-.716l-3.61-4.281a1 1 0 0 1 .526-1.616l5.436-1.342a1 1 0 0 0 .61-.443l2.956-4.755Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function _Ll(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.5 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-8h3a1 1 0 1 1 0 2h-3.588c-.78 0-1.412-.632-1.412-1.412V8a1 1 0 1 1 2 0v4Z",
        fill: E,
      }),
    ),
  );
}
export function Ybi(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5 6.5a2 2 0 0 1 2-2h.25a1 1 0 1 0 0-2H7a4 4 0 0 0-4 4v.25a1 1 0 0 0 2 0V6.5Zm6.438-4a1 1 0 1 0 0 2h2.125a1 1 0 1 0 0-2h-2.126Zm6.312 0a1 1 0 1 0 0 2H18a2 2 0 0 1 2 2v1.25a1 1 0 1 0 2 0V6.5a4 4 0 0 0-4-4h-.25ZM5 10.938a1 1 0 1 0-2 0v2.125a1 1 0 1 0 2 0v-2.126Zm0 6.312a1 1 0 1 0-2 0v.25a4 4 0 0 0 4 4h1.25a1 1 0 1 0 0-2H7a2 2 0 0 1-2-2v-.25Zm5.427-7.165a.114.114 0 0 1-.005-.068.134.134 0 0 1 .035-.06.134.134 0 0 1 .06-.035.115.115 0 0 1 .068.005l8.572 2.857c.029.01.044.02.05.025a.07.07 0 0 1 .017.018c.01.014.02.042.019.08a.142.142 0 0 1-.024.08.071.071 0 0 1-.018.016.168.168 0 0 1-.052.021l-3.468.906a1.75 1.75 0 0 0-1.25 1.25l-.907 3.47a.17.17 0 0 1-.021.051.07.07 0 0 1-.017.018.142.142 0 0 1-.079.024.143.143 0 0 1-.08-.019.07.07 0 0 1-.018-.016.169.169 0 0 1-.025-.05l-2.857-8.573Zm.79-2.055c-1.66-.554-3.241 1.026-2.687 2.688l2.857 8.572c.669 2.006 3.538 1.91 4.072-.135l.87-3.327 3.326-.869c2.046-.534 2.14-3.403.135-4.072L11.218 8.03Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function M1e(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9.893 7.177 12 3.787l2.107 3.39a3 3 0 0 0 1.829 1.329l3.874.956-2.572 3.052a3 3 0 0 0-.698 2.15l.287 3.98-3.697-1.503a3 3 0 0 0-2.26 0l-3.697 1.503.287-3.98a3 3 0 0 0-.698-2.15L4.19 9.462l3.874-.956a3 3 0 0 0 1.829-1.329Zm1.258-5.811a1 1 0 0 1 1.698 0l2.957 4.755a1 1 0 0 0 .61.443l5.435 1.342a1 1 0 0 1 .525 1.616l-3.609 4.28a1 1 0 0 0-.232.717l.403 5.585a1 1 0 0 1-1.374.998l-5.187-2.109a1 1 0 0 0-.754 0l-5.187 2.11a1 1 0 0 1-1.374-.999l.404-5.585a1 1 0 0 0-.233-.716l-3.61-4.281a1 1 0 0 1 .526-1.616l5.436-1.342a1 1 0 0 0 .61-.443l2.956-4.755Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function aIh(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "m12 4.046-.5.985a14.727 14.727 0 0 1-6.47 6.47L4.047 12l.985.5a14.728 14.728 0 0 1 6.47 6.47l.5.984.499-.985a14.727 14.727 0 0 1 6.47-6.47l.984-.499-.985-.5a14.727 14.727 0 0 1-6.47-6.47l-.5-.983Zm1.338-1.784c-.556-1.095-2.12-1.095-2.676 0l-.945 1.864a12.727 12.727 0 0 1-5.591 5.59l-1.864.946c-1.095.556-1.095 2.12 0 2.676l1.864.945a12.727 12.727 0 0 1 5.59 5.591l.946 1.864c.556 1.095 2.12 1.095 2.676 0l.945-1.864a12.728 12.728 0 0 1 5.591-5.59l1.864-.946c1.095-.556 1.095-2.12 0-2.676l-1.864-.945a12.728 12.728 0 0 1-5.59-5.591l-.946-1.864Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function i8u(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2a1 1 0 0 1 1 1v10.312l4.023-4.021a1 1 0 0 1 1.414 1.414l-5.73 5.728a1 1 0 0 1-1.414 0l-5.73-5.728A1 1 0 1 1 6.977 9.29L11 13.312V3a1 1 0 0 1 1-1ZM3 20.002a1 1 0 0 1 1-1L20 19a1 1 0 0 1 0 2l-16 .002a1 1 0 0 1-1-1Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Ulv(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M2.837 5.77v10.884a4 4 0 0 0 4 4h10.326a4 4 0 0 0 4-4v-8.5a3 3 0 0 0-3-3h-5.737a1 1 0 0 1-.721-.306l-1.11-1.156A3 3 0 0 0 8.43 2.77H5.837a3 3 0 0 0-3 3ZM6 10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function iWI(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7.5 10a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4ZM3 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5v1a1 1 0 0 1-2 0v-2Zm1 18a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2H4Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M3.293 2.793a1 1 0 0 1 1.414 0l2.701 2.701a1 1 0 0 1-1.414 1.414l-2.701-2.7a1 1 0 0 1 0-1.415Zm0 18.414a1 1 0 0 1 0-1.414l2.701-2.701a1 1 0 0 1 1.414 1.414l-2.7 2.701a1 1 0 0 1-1.415 0ZM22 3.5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-2Zm-1 18a1 1 0 0 0 1-1v-2a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M21.707 2.793a1 1 0 0 0-1.414 0l-2.701 2.701a1 1 0 0 0 1.414 1.414l2.701-2.7a1 1 0 0 0 0-1.415Zm0 18.414a1 1 0 0 0 0-1.414l-2.701-2.701a1 1 0 0 0-1.414 1.414l2.7 2.701a1 1 0 0 0 1.415 0Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function g6N(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.837 9.65V5.77a1 1 0 0 1 1-1h2.594a1 1 0 0 1 .721.308l1.443-1.386-1.443 1.385 1.11 1.156a3 3 0 0 0 2.164.922h5.737a1 1 0 0 1 1 1V9.65H4.837Zm0 2v5.004a2 2 0 0 0 2 2h10.326a2 2 0 0 0 2-2V11.65H4.837Zm6.868-6.802-1.11-1.156A3 3 0 0 0 8.43 2.77H5.837a3 3 0 0 0-3 3v10.884a4 4 0 0 0 4 4h10.326a4 4 0 0 0 4-4v-8.5a3 3 0 0 0-3-3h-5.737a1 1 0 0 1-.721-.306Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function xV8(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.5 2.277a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3ZM3.572 5.27a1 1 0 1 0 0 2H4.86v10a4 4 0 0 0 4 4h6.336a4 4 0 0 0 4-4v-10h1.231a1 1 0 1 0 0-2H3.571Zm3.289 12v-10h10.336v10a2 2 0 0 1-2 2H8.86a2 2 0 0 1-2-2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function uJ7(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 16 16",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M13.264 1.488c.515 0 .933.419.933.934v1.677c0 .377-.15.739-.417 1.005l-3.365 3.367a.533.533 0 0 0-.158.379v4.776a.69.69 0 0 1-1.043.59L6.15 12.378a.934.934 0 0 1-.453-.8V8.85a.538.538 0 0 0-.157-.38L2.172 5.105A1.424 1.424 0 0 1 1.755 4.1V2.422c0-.516.419-.934.934-.934h10.575ZM2.69 2.375a.047.047 0 0 0-.047.047v1.677a.54.54 0 0 0 .157.379l3.367 3.366c.266.267.416.629.417 1.006v2.727c0 .016.008.032.022.04l2.766 1.658V8.85c0-.378.15-.74.417-1.006l3.365-3.366c.1-.1.157-.237.157-.38V2.423a.047.047 0 0 0-.046-.047H2.69Z",
        "data-follow-fill": "currentColor",
        fill: E,
      }),
      a.createElement("path", {
        d: "M13.019 1.266a1.4 1.4 0 0 1 1.399 1.4v1.229c0 .566-.225 1.109-.625 1.51l-3.08 3.077a.806.806 0 0 0-.234.57v4.357c0 .803-.877 1.299-1.565.886l-2.76-1.657a1.4 1.4 0 0 1-.68-1.2V9.052a.807.807 0 0 0-.237-.57L2.158 5.404c-.4-.4-.625-.943-.625-1.51V2.667a1.4 1.4 0 0 1 1.4-1.4H13.02ZM2.934 2.596a.07.07 0 0 0-.07.07v1.229c0 .213.084.418.235.569l3.079 3.078c.4.4.626.944.626 1.51v2.386a.07.07 0 0 0 .033.06l2.311 1.386V9.052c0-.566.225-1.11.625-1.51l3.08-3.078a.806.806 0 0 0 .235-.57V2.667a.07.07 0 0 0-.07-.07H2.935Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        "data-follow-fill": "currentColor",
        fill: E,
      }),
    ),
  );
}
export function dpS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.822 12.633a7.5 7.5 0 0 1-9.82-6.96A7.002 7.002 0 0 0 12 19a7 7 0 0 0 6.975-6.402.95.95 0 0 0-.153.035Zm.526-.018h-.002.002Zm-1.145-1.884C19.407 10.34 21 10.734 21 12A9 9 0 1 1 9.064 3.49C10.155 3.113 11 4.345 11 5.5a5.5 5.5 0 0 0 7.203 5.231Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function en5(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm8.825 4.897a1.175 1.175 0 1 1 2.35 0 1.175 1.175 0 0 1-2.35 0ZM12 6.11c-.477 0-.95.09-1.395.263-.443.173-.85.43-1.195.755a3.538 3.538 0 0 0-.813 1.15c-.205.468-.289 1.049-.289 1.481a1 1 0 0 0 2 0c0-.235.055-.527.12-.677.081-.184.2-.354.355-.5a1.72 1.72 0 0 1 .551-.347 1.83 1.83 0 0 1 1.332 0c.21.082.396.2.55.347.155.146.275.316.355.5.08.183.12.377.12.571 0 .439-.108.662-.22.811-.139.185-.339.336-.686.572l-.066.044c-.302.204-.736.496-1.074.912-.403.495-.645 1.12-.645 1.923a1 1 0 0 0 2 0c0-.362.095-.536.196-.66.141-.174.34-.313.711-.564l.008-.005c.325-.22.793-.538 1.156-1.022.393-.524.62-1.178.62-2.01 0-.474-.098-.941-.288-1.375a3.538 3.538 0 0 0-.813-1.15 3.708 3.708 0 0 0-1.195-.756A3.829 3.829 0 0 0 12 6.11Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Fbw(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.538 3.513a6.077 6.077 0 0 0-6.085 6.07c0 2.819 1.639 5.278 3.37 7.025 1.75 1.764 3.914 3.13 5.588 3.685a1.87 1.87 0 0 0 1.174 0c1.675-.556 3.84-1.92 5.588-3.685 1.732-1.747 3.37-4.206 3.37-7.025a6.077 6.077 0 0 0-6.084-6.07c-1.381 0-2.572.717-3.46 1.432-.89-.715-2.08-1.432-3.461-1.432Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function jIr(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.291 2.388a1 1 0 1 0-1.582 1.223l5.537 7.166a2 2 0 0 1 0 2.446l-5.537 7.165a1 1 0 1 0 1.582 1.223l5.537-7.166a4 4 0 0 0 0-4.891l-5.537-7.166ZM10 4.271l5.5 7.118a1 1 0 0 1 0 1.222L10 19.73l-5.5-7.118a1 1 0 0 1 0-1.223L10 4.272ZM8.417 3.048a2 2 0 0 1 3.165 0l5.5 7.118a3 3 0 0 1 0 3.668l-5.5 7.118a2 2 0 0 1-3.165 0l-5.5-7.118a3 3 0 0 1 0-3.668l5.5-7.118Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function gLe(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.538 3.513a6.077 6.077 0 0 0-6.085 6.07c0 2.819 1.639 5.278 3.37 7.025 1.75 1.764 3.914 3.13 5.588 3.685a1.87 1.87 0 0 0 1.174 0c1.675-.556 3.84-1.92 5.588-3.685 1.732-1.747 3.37-4.206 3.37-7.025a6.077 6.077 0 0 0-6.084-6.07c-1.381 0-2.572.717-3.46 1.432-.889-.715-2.08-1.432-3.461-1.432Zm0 2a4.077 4.077 0 0 0-4.085 4.07c0 2.05 1.215 4.028 2.79 5.617 1.557 1.57 3.436 2.73 4.755 3.18 1.32-.45 3.2-1.61 4.755-3.18 1.575-1.59 2.79-3.568 2.79-5.617 0-2.24-1.82-4.07-4.084-4.07-.929 0-1.877.652-2.78 1.49a1 1 0 0 1-1.36 0c-.904-.838-1.853-1.49-2.781-1.49Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function C2I(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5 4a.997.997 0 0 0-.705.29l-.004.005A.99.99 0 0 0 4 5v4a1 1 0 1 0 2 0V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414L7.414 6H9a1 1 0 0 0 0-2H5ZM4 19v-4a1 1 0 1 1 2 0v1.586l2.293-2.293a1 1 0 0 1 1.414 1.414L7.414 18H9a1 1 0 1 1 0 2H4.997a.997.997 0 0 1-.702-.29l-.004-.005A.997.997 0 0 1 4 19ZM20 5v4a1 1 0 1 1-2 0V7.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L16.586 6H15a1 1 0 1 1 0-2h4a.997.997 0 0 1 .7.286l.014.013a1 1 0 0 1 .286.698V5Zm-1 15h-4a1 1 0 1 1 0-2h1.586l-2.293-2.293a1 1 0 0 1 1.414-1.414L18 16.586V15a1 1 0 1 1 2 0v4.003a.997.997 0 0 1-.997.997H19Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function L9n(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.72 4a1 1 0 0 1 1-1l6.276.001a1 1 0 0 1 1 1v6.279a1 1 0 1 1-2 0V6.415l-3.658 3.66a1 1 0 1 1-1.414-1.415L17.583 5H13.72a1 1 0 0 1-1-1Zm-1.44 16a1 1 0 0 1-1 1H4.004a1 1 0 0 1-1-1v-6.28a1 1 0 1 1 2 .001v3.863l3.658-3.66a1 1 0 1 1 1.414 1.415L6.417 19l3.863.001a1 1 0 0 1 1 1Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function pj_(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 18.3a1.2 1.2 0 0 1 1.2 1.2v2a1.2 1.2 0 0 1-2.4 0v-2a1.2 1.2 0 0 1 1.2-1.2Zm-6.152-1.845a1.201 1.201 0 0 1 1.698 1.697L6.13 19.566a1.2 1.2 0 0 1-1.697-1.697l1.414-1.414Zm10.606 0a1.2 1.2 0 0 1 1.697 0l1.415 1.413a1.2 1.2 0 0 1-1.698 1.697l-1.414-1.414a1.2 1.2 0 0 1 0-1.697ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-7.5 1.8a1.2 1.2 0 0 1 0 2.4h-2a1.2 1.2 0 0 1 0-2.4h2Zm17 0a1.2 1.2 0 0 1 0 2.4h-2a1.2 1.2 0 0 1 0-2.4h2ZM4.434 4.434a1.2 1.2 0 0 1 1.697 0l1.414 1.414a1.201 1.201 0 0 1-1.697 1.698L4.434 6.13a1.2 1.2 0 0 1 0-1.697Zm13.434 0a1.201 1.201 0 0 1 1.698 1.697l-1.415 1.414a1.2 1.2 0 0 1-1.697-1.697l1.414-1.414ZM12 1.3a1.2 1.2 0 0 1 1.2 1.2v2a1.2 1.2 0 0 1-2.4 0v-2A1.2 1.2 0 0 1 12 1.3Z",
        fill: E,
      }),
    ),
  );
}
export function AXG(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9.675 8.13a1 1 0 0 1 0-1.414l2.609-2.609a5.38 5.38 0 0 1 7.609 7.61l-2.609 2.608a1 1 0 0 1-1.414-1.415l2.609-2.608a3.38 3.38 0 0 0-4.78-4.78l-2.61 2.608a1 1 0 0 1-1.414 0ZM4.107 19.893a5.38 5.38 0 0 1 0-7.61l2.609-2.608A1 1 0 0 1 8.13 11.09l-2.61 2.608a3.38 3.38 0 1 0 4.78 4.78l2.61-2.608a1 1 0 0 1 1.414 1.414l-2.609 2.609a5.38 5.38 0 0 1-7.609 0ZM8.42 15.58a1 1 0 0 1 0-1.414l5.748-5.748a1 1 0 1 1 1.414 1.414L9.833 15.58a1 1 0 0 1-1.414 0Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9.675 8.13a1 1 0 0 1 0-1.414l2.609-2.609a5.38 5.38 0 1 1 7.609 7.61l-2.609 2.608a1 1 0 0 1-1.414-1.415l2.609-2.608a3.38 3.38 0 0 0-4.78-4.78l-2.61 2.608a1 1 0 0 1-1.414 0ZM4.107 19.893a5.38 5.38 0 0 1 0-7.61l2.609-2.608A1 1 0 0 1 8.13 11.09l-2.61 2.608a3.38 3.38 0 1 0 4.78 4.78l2.61-2.608a1 1 0 0 1 1.414 1.414l-2.609 2.609a5.38 5.38 0 0 1-7.609 0ZM8.42 15.58a1 1 0 0 1 0-1.414l5.748-5.748a1 1 0 1 1 1.414 1.414L9.833 15.58a1 1 0 0 1-1.414 0Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function mC1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M22.044 12.695a.77.77 0 0 0-.596-.734c-4.688-1.152-7.18-3.92-7.986-9.924a.358.358 0 0 0-.006-.033.573.573 0 0 0-1.137 0l-.007.033c-.805 6.004-3.298 8.772-7.986 9.924a.77.77 0 0 0-.596.734v.033a.82.82 0 0 0 .625.796c3.3.859 6.851 2.872 7.9 6.022.086.26.332.443.613.454h.037a.673.673 0 0 0 .614-.454c1.048-3.15 4.598-5.163 7.9-6.021a.82.82 0 0 0 .625-.797v-.033Z",
        fill: E,
      }),
    ),
  );
}
export function KW9(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 20c-.123 0-.245-.003-.367-.008a1.993 1.993 0 0 1-.172-.194c-.28-.356-.568-.92-.823-1.687-.453-1.357-.763-3.214-.826-5.311h4.376c-.064 2.097-.373 3.954-.826 5.311-.255.768-.543 1.331-.823 1.687-.062.079-.12.142-.172.194A8.254 8.254 0 0 1 12 20Zm2.188-8.8H9.812c.063-2.097.373-3.954.826-5.311.255-.768.543-1.331.823-1.687.062-.079.12-.142.172-.194a8.134 8.134 0 0 1 .734 0c.052.052.11.115.172.194.28.356.568.92.823 1.687.453 1.357.762 3.214.826 5.311Zm1.6 1.6c-.063 2.235-.392 4.27-.908 5.817-.116.348-.244.679-.384.986A8.007 8.007 0 0 0 19.96 12.8h-4.17Zm4.172-1.6h-4.17c-.064-2.235-.393-4.27-.909-5.817a10.03 10.03 0 0 0-.384-.986A8.007 8.007 0 0 1 19.96 11.2Zm-11.749 0c.064-2.235.393-4.27.909-5.817.116-.348.244-.679.384-.986A8.007 8.007 0 0 0 4.04 11.2h4.17ZM4.04 12.8a8.007 8.007 0 0 0 5.464 6.803c-.14-.307-.268-.638-.384-.986-.516-1.547-.845-3.582-.909-5.817H4.04ZM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function AQQ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M6.5 7a5 5 0 0 0 0 10h3a1 1 0 1 0 0-2h-3a3 3 0 0 1 0-6h3a1 1 0 0 0 0-2h-3Zm11 0a5 5 0 0 1 0 10h-3a1 1 0 1 1 0-2h3a3 3 0 0 0 0-6h-3a1 1 0 1 1 0-2h3ZM14 13a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2h4Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function xcf(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function xqN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.25 2.682a2.5 2.5 0 0 0-2.5 0L4.556 6.258a2.5 2.5 0 0 0-1.25 2.165v7.153a2.5 2.5 0 0 0 1.25 2.165l6.194 3.576a2.5 2.5 0 0 0 2.5 0l6.194-3.576a2.5 2.5 0 0 0 1.25-2.165V8.423a2.5 2.5 0 0 0-1.25-2.165L13.25 2.682Zm-1.6 1.559a.7.7 0 0 1 .7 0L17.995 7.5 12 10.96 6.005 7.5l5.645-3.26Zm1.25 8.279v6.92l5.644-3.258a.7.7 0 0 0 .35-.606V9.059l-5.994 3.46ZM5.106 9.059l5.994 3.46v6.922l-5.644-3.259a.7.7 0 0 1-.35-.606V9.059Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function izE(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.5 2A4.5 4.5 0 0 0 4 6.5v11A4.5 4.5 0 0 0 8.5 22h7a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 15.5 2h-7ZM6 6.5A2.5 2.5 0 0 1 8.5 4h7A2.5 2.5 0 0 1 18 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 17.5v-11ZM12 18a1.444 1.444 0 1 0 0-2.889A1.444 1.444 0 0 0 12 18Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function dd8(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5 6.3a1.2 1.2 0 0 0 0 2.4h14a1.2 1.2 0 1 0 0-2.4H5Zm0 9a1.2 1.2 0 0 0 0 2.4h8a1.2 1.2 0 1 0 0-2.4H5Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function EwR(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4 6a4.5 4.5 0 0 1 4.5-4.5h7A4.5 4.5 0 0 1 20 6v10.379h-1.135A2.987 2.987 0 0 0 18 15.024V6a2.5 2.5 0 0 0-2.5-2.5h-7A2.5 2.5 0 0 0 6 6v11a2.5 2.5 0 0 0 2.5 2.5h2.377a3.004 3.004 0 0 0 .877 2H8.5A4.5 4.5 0 0 1 4 17V6Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.168 18.672a1 1 0 0 0 0 1.414l2.121 2.121a1 1 0 0 0 1.414-1.414l-.414-.414H20.5a1 1 0 1 0 0-2h-4.21l.413-.415a1 1 0 1 0-1.414-1.414l-2.121 2.122Z",
        fill: E,
      }),
    ),
  );
}
export function e38(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4 6.5A4.5 4.5 0 0 1 8.5 2h7A4.5 4.5 0 0 1 20 6.5v11a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 17.5v-11ZM8.5 4A2.5 2.5 0 0 0 6 6.5v11A2.5 2.5 0 0 0 8.5 20h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 4h-7ZM9 9.5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function t55(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5.75 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4.5a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-4.5Zm-2 4a2 2 0 0 1 2-2h4.5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2V6Zm11 15.97a4 4 0 0 0 3.5-3.97V6a4 4 0 0 0-3.5-3.97A5.977 5.977 0 0 1 16.25 6v12a5.978 5.978 0 0 1-1.5 3.97Zm4 0a4 4 0 0 0 3.5-3.97V6a4 4 0 0 0-3.5-3.97A5.977 5.977 0 0 1 20.25 6v12a5.978 5.978 0 0 1-1.5 3.97Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function _Zj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5.4 4A1.4 1.4 0 0 0 4 5.4v13.2A1.4 1.4 0 0 0 5.4 20h1.2A1.4 1.4 0 0 0 8 18.6V5.4A1.4 1.4 0 0 0 6.6 4H5.4Zm12 0A1.4 1.4 0 0 0 16 5.4v13.2a1.4 1.4 0 0 0 1.4 1.4h1.2a1.4 1.4 0 0 0 1.4-1.4V5.4A1.4 1.4 0 0 0 18.6 4h-1.2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function ruL(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.25 17.25V6.75a2 2 0 0 0-2-2H6.75a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2Zm2-10.5a4 4 0 0 0-4-4H6.75a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h10.5a4 4 0 0 0 4-4V6.75Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function AYg(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19 10.268c1.333.77 1.333 2.694 0 3.464L8.5 19.794c-1.333.77-3-.192-3-1.732V5.938c0-1.54 1.667-2.502 3-1.732L19 10.268Z",
        fill: E,
      }),
    ),
  );
}
export function RBG(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M1.924 9.706a4 4 0 0 1 4-4h12.15a4 4 0 0 1 4 4v4.588a4 4 0 0 1-4 4H5.924a4 4 0 0 1-4-4V9.706Zm4-2a2 2 0 0 0-2 2v4.588a2 2 0 0 0 2 2h12.15a2 2 0 0 0 2-2V9.706a2 2 0 0 0-2-2H5.924Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function fTS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "m8.56 5.726 3.948-2.776a.5.5 0 0 1 .788.41v2.23h2.72v2H9.187a.996.996 0 0 1-.631-.225c-.518-.367-.61-1.208.003-1.64Zm10.775 9.213a1 1 0 1 0 1.5 1.323 6.403 6.403 0 0 0 1.605-4.249 6.403 6.403 0 0 0-1.606-4.249 6.41 6.41 0 0 0-4.817-2.174v2a4.41 4.41 0 0 1 3.318 1.498 4.403 4.403 0 0 1 1.105 2.925 4.403 4.403 0 0 1-1.105 2.926Zm-14.67-5.88a1 1 0 1 0-1.5-1.323 6.403 6.403 0 0 0-1.605 4.249c0 1.628.607 3.117 1.606 4.25a6.41 6.41 0 0 0 4.817 2.174v-2a4.41 4.41 0 0 1-3.318-1.498 4.403 4.403 0 0 1-1.105-2.926c0-1.123.416-2.145 1.105-2.926Zm3.318 9.35h2.404v2.232a.5.5 0 0 0 .788.409l3.962-2.785a.816.816 0 0 0 .066-.05.999.999 0 0 0-.591-1.806H7.983v2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function PI1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5.707 5.325a3.4 3.4 0 0 1 3.4-3.4h5.787a3.4 3.4 0 0 1 3.4 3.4v13.35a3.4 3.4 0 0 1-3.4 3.4H9.107a3.4 3.4 0 0 1-3.4-3.4V5.325Zm3.4-1.4a1.4 1.4 0 0 0-1.4 1.4v13.35a1.4 1.4 0 0 0 1.4 1.4h5.787a1.4 1.4 0 0 0 1.4-1.4V5.325a1.4 1.4 0 0 0-1.4-1.4H9.107Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Vic(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.4 4A1.2 1.2 0 0 0 8 4l.001 16a1.2 1.2 0 0 0 2.4 0V4ZM4.8 9a1.2 1.2 0 0 0-2.4 0v6a1.2 1.2 0 0 0 2.4 0V9Zm10-3.2A1.2 1.2 0 0 1 16 7v5.874a6.472 6.472 0 0 0-2.4 1.125V7a1.2 1.2 0 0 1 1.2-1.2Zm4.4 6.9h2.4v-2.2a1.2 1.2 0 0 0-2.4 0v2.2Zm-1.567 2.534a.405.405 0 0 1 .734 0l.486 1.042a2.84 2.84 0 0 0 1.371 1.37l1.042.487a.405.405 0 0 1 0 .734l-1.041.486a2.837 2.837 0 0 0-1.372 1.371l-.486 1.042a.405.405 0 0 1-.734 0l-.486-1.041a2.837 2.837 0 0 0-1.371-1.372l-1.042-.486a.405.405 0 0 1 0-.734l1.041-.486a2.837 2.837 0 0 0 1.372-1.371l.486-1.042Z",
        fill: E,
      }),
    ),
  );
}
export function dU7(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M3.764 8.02a2.5 2.5 0 0 1 2.5-2.5H17.03a2.5 2.5 0 0 1 2.5 2.5V9.8a3.25 3.25 0 0 1 2-.082V8.019a4.5 4.5 0 0 0-4.5-4.5H6.264a4.5 4.5 0 0 0-4.5 4.5v7.932a4.5 4.5 0 0 0 4.5 4.5h5.837a2.436 2.436 0 0 1-.05-.57v-1.43H6.263a2.5 2.5 0 0 1-2.5-2.5V8.019Zm17.67 3.964a1 1 0 0 0-1.41-.004l-5.773 5.707a.25.25 0 0 0-.074.178v2.366c0 .138.112.25.25.25h2.347a.25.25 0 0 0 .178-.075l5.71-5.791a1 1 0 0 0-.006-1.41l-1.221-1.22Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function nPU(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M.956 10.095a3.4 3.4 0 0 1 3.4-3.4h15.288a3.4 3.4 0 0 1 3.4 3.4v3.81a3.4 3.4 0 0 1-3.4 3.4H4.356a3.4 3.4 0 0 1-3.4-3.4v-3.81Zm3.4-1.4a1.4 1.4 0 0 0-1.4 1.4v3.81a1.4 1.4 0 0 0 1.4 1.4h15.288a1.4 1.4 0 0 0 1.4-1.4v-3.81a1.4 1.4 0 0 0-1.4-1.4H4.356Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        opacity: ".9",
        fill: E,
      }),
    ),
  );
}
export function xNX(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.149 4.293a1 1 0 0 0-1.414 1.414l.442.442.884.884a1 1 0 0 0 1.414 0l2.828-2.829A1 1 0 1 0 6.89 2.79L4.768 4.912l-.177-.177-.442-.442ZM12 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm0 7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Zm-1 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Zm-8.265-7.707a1 1 0 0 1 1.414 0l.442.442.177.177L6.889 9.79a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.414 0l-.884-.884-.442-.442a1 1 0 0 1 0-1.414Zm1.414 7a1 1 0 1 0-1.414 1.414l.442.442.884.884a1 1 0 0 0 1.414 0l2.828-2.829A1 1 0 1 0 6.89 16.79l-2.121 2.122-.177-.177-.442-.442Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function UQv(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7 4.5a2 2 0 0 0-2 2v6.563a1 1 0 1 1-2 0V6.5a4 4 0 0 1 4-4h6.563a1 1 0 1 1 0 2H7Zm9.75-1a1 1 0 0 1 1-1H18a4 4 0 0 1 4 4v.25a1 1 0 1 1-2 0V6.5a2 2 0 0 0-2-2h-.25a1 1 0 0 1-1-1ZM21 9.938a1 1 0 0 1 1 1v2.125a1 1 0 1 1-2 0v-2.126a1 1 0 0 1 1-1ZM4 16.25a1 1 0 0 1 1 1v.25a2 2 0 0 0 2 2h.25a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4v-.25a1 1 0 0 1 1-1Zm17 0a1 1 0 0 1 1 1v.25a4 4 0 0 1-4 4h-.25a1 1 0 1 1 0-2H18a2 2 0 0 0 2-2v-.25a1 1 0 0 1 1-1ZM10.437 20.5a1 1 0 0 1 1-1h2.126a1 1 0 1 1 0 2h-2.126a1 1 0 0 1-1-1Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7 4.5a2 2 0 0 0-2 2v6.563a1 1 0 1 1-2 0V6.5a4 4 0 0 1 4-4h6.563a1 1 0 1 1 0 2H7Zm9.75-1a1 1 0 0 1 1-1H18a4 4 0 0 1 4 4v.25a1 1 0 1 1-2 0V6.5a2 2 0 0 0-2-2h-.25a1 1 0 0 1-1-1ZM21 9.938a1 1 0 0 1 1 1v2.125a1 1 0 1 1-2 0v-2.126a1 1 0 0 1 1-1ZM4 16.25a1 1 0 0 1 1 1v.25a2 2 0 0 0 2 2h.25a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4v-.25a1 1 0 0 1 1-1Zm17 0a1 1 0 0 1 1 1v.25a4 4 0 0 1-4 4h-.25a1 1 0 1 1 0-2H18a2 2 0 0 0 2-2v-.25a1 1 0 0 1 1-1ZM10.437 20.5a1 1 0 0 1 1-1h2.126a1 1 0 1 1 0 2h-2.126a1 1 0 0 1-1-1Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Z1Z(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.78 4.534a.942.942 0 0 1 1.572-.7l7.852 7.067a.895.895 0 0 1 0 1.33l-7.852 7.067a.942.942 0 0 1-1.572-.7v-3.173a9.328 9.328 0 0 0-7.384 3.115c-.519.581-1.555.27-1.562-.586v-.097c0-5.286 3.879-9.666 8.946-10.449V4.534Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function $Ul(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.537 4.875c0-1.62 1.92-2.475 3.124-1.391l7.493 6.744c.806.725.806 1.99 0 2.715l-7.493 6.743c-1.205 1.084-3.123.23-3.123-1.39v-2.04a8.023 8.023 0 0 0-5.349 2.633 1.833 1.833 0 0 1-1.971.505A1.794 1.794 0 0 1 2 17.69v-.101c0-5.242 3.644-9.63 8.537-10.773V4.875Zm2.28.467a.2.2 0 0 0-.334.148v1.96a1.17 1.17 0 0 1-.973 1.153 9.12 9.12 0 0 0-7.562 8.762 9.969 9.969 0 0 1 7.397-3.076 1.164 1.164 0 0 1 1.138 1.165v2.226a.2.2 0 0 0 .334.149l6.937-6.244-6.937-6.243Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function C0l(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.563 10.75a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Zm6.5-8.5a8.5 8.5 0 1 0 5.261 15.176l3.406 3.406a1 1 0 0 0 1.415-1.414l-3.407-3.406A8.5 8.5 0 0 0 11.062 2.25Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function KN6(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "m10.79 4.453.324-.637.323.637a14.488 14.488 0 0 0 6.365 6.365l.636.323-.636.323a14.488 14.488 0 0 0-6.365 6.364l-.323.637-.323-.637a14.488 14.488 0 0 0-6.365-6.364l-.637-.323.637-.323a14.489 14.489 0 0 0 6.365-6.365ZM9.645 2.017c.61-1.203 2.33-1.203 2.94 0l.748 1.474a12.364 12.364 0 0 0 5.431 5.432l1.474.747c1.204.611 1.204 2.33 0 2.94l-1.474.749a12.363 12.363 0 0 0-5.431 5.43l-.748 1.475c-.61 1.204-2.33 1.204-2.94 0l-.748-1.474a12.363 12.363 0 0 0-5.431-5.431L1.99 12.61c-1.203-.61-1.203-2.33 0-2.94l1.475-.748a12.364 12.364 0 0 0 5.43-5.432l.749-1.474Zm10.35 14.335a.562.562 0 0 0-1.004 0l-.255.503a4.218 4.218 0 0 1-1.853 1.853l-.503.255a.562.562 0 0 0 0 1.003l.503.255a4.218 4.218 0 0 1 1.853 1.853l.255.503c.209.41.795.41 1.003 0l.256-.503a4.218 4.218 0 0 1 1.853-1.853l.503-.255a.562.562 0 0 0 0-1.003l-.503-.255a4.218 4.218 0 0 1-1.853-1.853l-.256-.503Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Dvw(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7.6 4.6h8.8a3 3 0 0 1 3 3v8.8a3 3 0 0 1-3 3H7.6a3 3 0 0 1-3-3V7.6a3 3 0 0 1 3-3Zm-5 3a5 5 0 0 1 5-5h8.8a5 5 0 0 1 5 5v8.8a5 5 0 0 1-5 5H7.6a5 5 0 0 1-5-5V7.6Zm12.6 1.7h-2.4v5.4H14a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1 0-1.6h1.2V9.3H8.8v.7a.8.8 0 0 1-1.6 0V8.5a.8.8 0 0 1 .8-.8h8a.8.8 0 0 1 .8.8V10a.8.8 0 0 1-1.6 0v-.7Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function hRh(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.5 5.5a1 1 0 0 0-1.707-.707l-3 3A1 1 0 0 0 4.5 9.5h15a1 1 0 0 0 0-2h-11v-2Zm7 13a1 1 0 0 0 1.707.707l3-3A1 1 0 0 0 19.5 14.5h-15a1 1 0 1 0 0 2h11v2Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function g8k(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.59 8.266A4.592 4.592 0 0 0 8.694 4.31l-.56.042a5.19 5.19 0 0 0-4.771 5.704l.036.354a5.536 5.536 0 0 0 1.596 3.353l.044.044A7.71 7.71 0 0 1 7.3 19.263v.081h3.503v-1.107c0-.975.73-1.795 1.699-1.908l1.284-.15v-1.63c0-1.085.627-2.07 1.601-2.532l-.456-.582a6.592 6.592 0 0 1-1.342-3.17Zm-5.047-5.95a6.592 6.592 0 0 1 7.029 5.678c.11.806.433 1.568.935 2.208l.63.805a1.78 1.78 0 0 1-.712 2.741l-.146.061a.803.803 0 0 0-.492.74v1.7a1.92 1.92 0 0 1-1.699 1.908l-1.284.15v2.037a1 1 0 0 1-1 1H6.301a1 1 0 0 1-1-1v-1.08c0-1.517-.603-2.97-1.675-4.04l-.044-.044a7.536 7.536 0 0 1-2.172-4.566l-.037-.354a7.19 7.19 0 0 1 6.609-7.9l.56-.043ZM20.318 13.26a1 1 0 1 0-1.999-.07 5.871 5.871 0 0 1-.642 2.476 1 1 0 0 0 1.78.912 7.87 7.87 0 0 0 .86-3.318Zm2.322-1.914a1 1 0 0 1 1.06.937c.014.23.02.461.02.695 0 1.902-.477 3.696-1.32 5.264a1 1 0 0 1-1.762-.947 9.086 9.086 0 0 0 1.065-4.89 1 1 0 0 1 .937-1.059Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function Nv9(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M1.5 12a5 5 0 0 1 5-5h3a1 1 0 1 1 0 2h-3a3 3 0 1 0 0 6h3a1 1 0 1 1 0 2h-3a5 5 0 0 1-5-5Zm21 0a5 5 0 0 0-5-5h-3a1 1 0 1 0 0 2h3a3 3 0 1 1 0 6h-3a1 1 0 1 0 0 2h3a5 5 0 0 0 5-5Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function nre(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.437 8.128a1 1 0 1 1-1.414 1.414L13 5.52v10.316a1 1 0 1 1-2 0V5.521L6.977 9.54a1 1 0 0 1-1.414-1.413l5.73-5.728a1 1 0 0 1 1.414 0l5.73 5.728ZM3 20.002a1 1 0 0 1 1-1L20 19a1 1 0 0 1 0 2l-16 .002a1 1 0 0 1-1-1Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function XIc(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 12a1 1 0 0 1 1-1h10.312L14.29 6.977a1 1 0 0 1 1.414-1.414l5.728 5.73a1 1 0 0 1 0 1.414l-5.728 5.73a1 1 0 1 1-1.414-1.414L18.31 13H8a1 1 0 0 1-1-1Zm-2.998 9a1 1 0 0 1-1-1L3 4a1 1 0 1 1 2 0l.002 16a1 1 0 0 1-1 1Z",
        fill: E,
      }),
    ),
  );
}
export function nmw(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.57 12.99 4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0l-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25Z",
        fill: E,
      }),
    ),
  );
}
export function cOJ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm3.01 13a.868.868 0 0 0 0-1.229l-1.78-1.78 1.78-1.78a.88.88 0 0 0 0-1.24.88.88 0 0 0-1.24 0L12 10.751l-1.78-1.78a.88.88 0 0 0-1.24 0 .88.88 0 0 0 0 1.24l1.78 1.78-1.78 1.77a.88.88 0 0 0 .62 1.5c.23 0 .45-.09.62-.26L12 13.23 13.78 15c.17.18.39.26.61.26.23 0 .45-.09.62-.26Z",
        fill: E,
      }),
    ),
  );
}
export function UPF(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.92 10.421a1.2 1.2 0 1 1-1.697 1.697L13.2 7.097V21a1.2 1.2 0 1 1-2.4 0V7.095l-5.024 5.023a1.2 1.2 0 0 1-1.697-1.697l7.072-7.07a1.2 1.2 0 0 1 1.697 0l7.072 7.07Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.92 10.421a1.2 1.2 0 1 1-1.697 1.697L13.2 7.097V21a1.2 1.2 0 1 1-2.4 0V7.095l-5.024 5.023a1.2 1.2 0 0 1-1.697-1.697l7.072-7.07a1.2 1.2 0 0 1 1.697 0l7.072 7.07Z",
        fill: E,
      }),
    ),
  );
}
export function tTg(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.523 8.332a1 1 0 0 1-1.415 0L13 5.223v9.357a1 1 0 1 1-2 0V5.223L7.892 8.332a1 1 0 1 1-1.415-1.415l4.816-4.815a1 1 0 0 1 1.414 0l4.816 4.816a1 1 0 0 1 0 1.414ZM4.439 14.58a1 1 0 1 0-2 0v2.35a4 4 0 0 0 4 4h11.122a4 4 0 0 0 4-4v-2.35a1 1 0 0 0-2 0v2.35a2 2 0 0 1-2 2H6.439a2 2 0 0 1-2-2v-2.35Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function XJG(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.617 9.924A.997.997 0 0 0 15 10h4a1 1 0 1 0 0-2h-1.586l2.293-2.293a1 1 0 0 0-1.414-1.414L16 6.586V5a1 1 0 1 0-2 0v4.003c0 .272.11.518.286.698l.014.013a.996.996 0 0 0 .317.21Zm-.541 4.693a.996.996 0 0 0-.076.38V19a1 1 0 1 0 2 0v-1.586l2.293 2.293a1 1 0 0 0 1.414-1.414L17.414 16H19a1 1 0 1 0 0-2h-4.003a.997.997 0 0 0-.697.286l-.014.014a.996.996 0 0 0-.21.317Zm-4.152 0A.997.997 0 0 1 10 15v4a1 1 0 1 1-2 0v-1.586l-2.293 2.293a1 1 0 0 1-1.414-1.414L6.586 16H5a1 1 0 1 1 0-2h4.003c.272 0 .518.11.698.286l.013.014a.996.996 0 0 1 .21.317Zm0-5.234A.997.997 0 0 0 10 9V5a1 1 0 0 0-2 0v1.586L5.707 4.293a1 1 0 0 0-1.414 1.414L6.586 8H5a1 1 0 0 0 0 2h4a.997.997 0 0 0 .924-.617Z",
        fill: E,
      }),
    ),
  );
}
export function J8v(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.003 2.406a1 1 0 0 0-1.189 1.608L20.01 15.991a1 1 0 1 0 1.19-1.609l-4.955-3.663V4.282a1 1 0 0 0-1.607-.796l-4.023 3.07-5.612-4.15Zm-.758 6.855c0-.715.375-1.342.939-1.695l11.06 8.209v4.466a1 1 0 0 1-1.605.795l-4.95-3.775H6.245a2 2 0 0 1-2-2v-6Z",
        fill: E,
      }),
    ),
  );
}
export function aDK(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.393 20.775 7.444 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3.444l4.95-3.775A1 1 0 0 1 14 4.02v15.96a1 1 0 0 1-1.607.795ZM16 18.355c0 .31.279.546.578.469a7.046 7.046 0 0 0 0-13.648.47.47 0 0 0-.578.469v1.054c0 .232.16.43.38.502a5.046 5.046 0 0 1 0 9.599.536.536 0 0 0-.38.501v1.054Zm-.001-5.115c0 .345.345.581.62.372a2.273 2.273 0 0 0 .897-1.812c0-.74-.352-1.396-.898-1.812-.274-.21-.62.027-.62.372v2.88Z",
        fill: E,
      }),
    ),
  );
}
export function KKy(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.136 4.364a4.5 4.5 0 0 0-4.5 4.5v6.272a4.5 4.5 0 0 0 4.5 4.5h11.728a4.5 4.5 0 0 0 4.5-4.5V8.864a4.5 4.5 0 0 0-4.5-4.5H6.136Zm3.535 4.928a.5.5 0 0 1 .5-.5h.815a.5.5 0 0 1 .5.5v5.416a.5.5 0 0 1-.5.5h-.815a.5.5 0 0 1-.5-.5v-2.002H7.196v2.002a.5.5 0 0 1-.5.5H5.88a.5.5 0 0 1-.5-.5V9.292a.5.5 0 0 1 .5-.5h.815a.5.5 0 0 1 .5.5v1.91H9.67v-1.91Zm3.595 5.916a.5.5 0 0 1-.5-.5V9.292a.5.5 0 0 1 .5-.5H15.8c.71 0 1.332.131 1.87.394a3 3 0 0 1 1.256 1.109c.306.477.458 1.045.458 1.705 0 .654-.152 1.222-.458 1.705a3 3 0 0 1-1.256 1.11c-.538.262-1.16.393-1.87.393h-2.534Zm1.315-1.448h1.146c.367 0 .684-.067.953-.202.275-.14.49-.342.642-.605.153-.268.23-.586.23-.953 0-.373-.077-.69-.23-.953a1.474 1.474 0 0 0-.642-.596 2.031 2.031 0 0 0-.953-.211H14.58v3.52Z",
        fill: E,
      }),
    ),
  );
}
export function hOF(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.689 2.667a2.563 2.563 0 0 1 4.934.11 2.563 2.563 0 0 1 3.343 1.868 2.562 2.562 0 0 1 3.383 2.427v7.264a7.964 7.964 0 0 1-14.386 4.56l-3.73-4.773a2.746 2.746 0 0 1 3.022-4.299V5.077a2.562 2.562 0 0 1 3.434-2.41Zm-.11 2.41a.762.762 0 0 0-1.524 0v6.608a.9.9 0 0 1-1.609.554l-.303-.388a.946.946 0 1 0-1.49 1.164L8.39 17.8l.01.013.007.01a6.164 6.164 0 0 0 11.142-3.545V7.071a.762.762 0 0 0-1.516-.107v3.155a.9.9 0 0 1-1.8 0V7.188a.906.906 0 0 1-.007-.116V5.197a.762.762 0 0 0-1.517-.104v.06a.69.69 0 0 1 0 .025v4.942a.9.9 0 1 1-1.8 0V5.31a.922.922 0 0 1-.007-.113V3.41a.762.762 0 1 0-1.523 0v.225a.902.902 0 0 1 .007.113v6.37a.9.9 0 0 1-1.8 0V5.19a.908.908 0 0 1-.007-.113Z",
        fill: E,
      }),
    ),
  );
}
export function ffy(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Zm8 10C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-.866-10.5a1 1 0 1 0 1.732 1l2-3.464a1 1 0 1 0-1.732-1l-2 3.464Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function YPw(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.8 12A1.2 1.2 0 0 1 4 10.8h16a1.2 1.2 0 1 1 0 2.4H4A1.2 1.2 0 0 1 2.8 12Z",
        fill: E,
      }),
    ),
  );
}
export function IuU(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.701 19.704a1 1 0 0 1-1.403 0l-7.786-7.669a1 1 0 0 1 1.403-1.425l7.084 6.978 7.085-6.978a1 1 0 1 1 1.403 1.425l-7.786 7.67Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.701 13.1a1 1 0 0 1-1.403 0L3.532 5.45a1 1 0 1 1 1.403-1.424L12 10.983l7.064-6.957a1 1 0 1 1 1.404 1.424L12.7 13.1Z",
        fill: E,
      }),
    ),
  );
}
export function jQO(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.667 5.731a.8.8 0 0 1 1.016.77v5.304a3.75 3.75 0 1 0 1.999 3.216V6.503a2.8 2.8 0 0 0-3.554-2.697l-6.783 1.9A2.8 2.8 0 0 0 7.3 8.4v5.281a3.75 3.75 0 1 0 2 3.353V8.402a.8.8 0 0 1 .584-.77l6.783-1.9ZM7.3 16.992v.016a1.75 1.75 0 1 1 0-.016Zm8.633-3.62a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z",
        fill: E,
      }),
    ),
  );
}
export function kTu(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.26 6.362H5.604v1.595a.871.871 0 1 1-1.743 0V5.491c0-.482.39-.872.871-.872h14.801c.482 0 .872.39.872.872v2.466a.871.871 0 0 1-1.743 0V6.362h-5.658v13.113c0 .481-.39.872-.871.872h-2.63a.871.871 0 0 1 0-1.743h1.757V6.362Zm5.058 11.202c-.776-.05-1.39-.708-1.39-1.513 0-.836.664-1.515 1.483-1.515.655 0 1.211.434 1.408 1.035.151.42.234.873.234 1.345a3.911 3.911 0 0 1-1.844 3.337c-.504.31-1.069-.123-1.069-.715 0-.351.214-.66.481-.888.324-.277.572-.652.697-1.086Zm2.557-1.512c0 .804.614 1.462 1.39 1.512a2.245 2.245 0 0 1-.697 1.086c-.267.229-.48.537-.48.889 0 .591.565 1.025 1.068.714A3.911 3.911 0 0 0 22 16.916c0-.47-.081-.92-.23-1.337a1.488 1.488 0 0 0-1.411-1.043c-.82 0-1.484.679-1.484 1.516Z",
        fill: E,
      }),
    ),
  );
}
export function XEb(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2a6 6 0 0 0-6 6v1.29A4.001 4.001 0 0 0 3.5 13v5a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-5A4.001 4.001 0 0 0 18 9.29V8a6 6 0 0 0-6-6Zm4 6v1H8V8a4 4 0 1 1 8 0Zm-8.5 3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-9Zm4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
        fill: E,
      }),
    ),
  );
}
export function $_L(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.92 3.537a4 4 0 0 0-2.83 4.899l2.585 9.645a4 4 0 0 0 4.899 2.829l2.737-.733a3.403 3.403 0 0 1-.874-1.837l-2.381.638a2 2 0 0 1-2.45-1.414L4.023 7.918a2 2 0 0 1 1.414-2.45l3.288-.88a2 2 0 0 1 2.45 1.414l2.318 8.654.553-.246a.683.683 0 0 0 .345-.368l.214-.516a3.56 3.56 0 0 1 .445-.784l-1.944-7.257a4 4 0 0 0-4.899-2.829l-3.287.881ZM21.6 9.766l-.885 3.303a3.332 3.332 0 0 0-1.687-1.433l.64-2.388a1.5 1.5 0 0 0-1.061-1.837l-2.437-.653a1.492 1.492 0 0 0-.659-.026l-.473-1.765c-.01-.039-.022-.077-.034-.115l-.016-.055a3.485 3.485 0 0 1 1.7.03l2.436.652A3.5 3.5 0 0 1 21.6 9.766Zm-3.433 11.127.208-.477a3.68 3.68 0 0 1 1.871-1.899l.64-.285a.447.447 0 0 0 0-.812l-.604-.269a3.682 3.682 0 0 1-1.898-1.961l-.214-.516a.427.427 0 0 0-.794 0l-.213.516a3.681 3.681 0 0 1-1.898 1.961l-.605.27a.447.447 0 0 0 0 .811l.64.285a3.68 3.68 0 0 1 1.872 1.899l.207.477a.427.427 0 0 0 .788 0Z",
        fill: E,
      }),
    ),
  );
}
export function ECq(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m5.492 4.97 2.521 13.867 3.34-5.195a2.32 2.32 0 0 1 1.665-1.049l5.191-.649L5.492 4.971Zm-2.345.083c-.326-1.79 1.57-3.156 3.165-2.282l13.45 7.377c1.839 1.007 1.31 3.78-.77 4.04l-5.685.71-3.561 5.538c-1.06 1.65-3.594 1.148-3.945-.782l-2.654-14.6Z",
        fill: E,
      }),
    ),
  );
}
export function xtK(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.326 4.72H7.674A2.954 2.954 0 0 0 4.72 7.674v8.652c0 .054.001.108.004.162l3.509-3.508a2.954 2.954 0 0 1 4.03-.138l6.262 5.457c.47-.523.755-1.215.755-1.973V7.674a2.954 2.954 0 0 0-2.954-2.954Zm2.798 15.658a4.919 4.919 0 0 0 2.126-4.052V7.674a4.924 4.924 0 0 0-4.924-4.924H7.674A4.924 4.924 0 0 0 2.75 7.674v8.652a4.924 4.924 0 0 0 4.924 4.924h8.652a4.901 4.901 0 0 0 2.798-.872Zm-2.489-1.114-5.666-4.937a.985.985 0 0 0-1.344.046l-4.041 4.04a2.945 2.945 0 0 0 2.09.867h8.652c.104 0 .208-.005.31-.016ZM14.078 8.401a1.532 1.532 0 1 1 3.064 0 1.532 1.532 0 0 1-3.064 0Z",
        fill: E,
      }),
    ),
  );
}
export function X$o(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.25 4.75a2 2 0 0 1 2 2v10.5a2 2 0 0 1-2 2H6.75a2 2 0 0 1-2-2V6.75a2 2 0 0 1 2-2h10.5Zm0-2a4 4 0 0 1 4 4v10.5a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4V6.75a4 4 0 0 1 4-4h10.5ZM17 8a1 1 0 0 0-1-1h-3a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8Zm-6 9a1 1 0 1 0 0-2H9v-2a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h3Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function WN2(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M3.25 15.375a1 1 0 0 1 1 1v2.43c0 .522.423.945.944.945h2.431a1 1 0 1 1 0 2h-2.43a2.945 2.945 0 0 1-2.945-2.944v-2.431a1 1 0 0 1 1-1Zm17.5 0a1 1 0 0 1 1 1v2.43a2.945 2.945 0 0 1-2.944 2.945h-2.431a1 1 0 0 1 0-2h2.43a.945.945 0 0 0 .945-.944v-2.431a1 1 0 0 1 1-1ZM14 13.5a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1H7a3 3 0 0 1 3-3h4Zm-2-6.8a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Zm0 1.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM7.625 2.25a1 1 0 0 1 0 2h-2.43a.944.944 0 0 0-.945.944v2.431a1 1 0 0 1-2 0v-2.43A2.944 2.944 0 0 1 5.194 2.25h2.431Zm11.18 0a2.944 2.944 0 0 1 2.945 2.944v2.431a1 1 0 0 1-2 0v-2.43a.944.944 0 0 0-.944-.945h-2.431a1 1 0 0 1 0-2h2.43Z",
        fill: E,
      }),
    ),
  );
}
export function BnN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.889 2.112A4.889 4.889 0 0 0 1 7v10a4.89 4.89 0 0 0 4.889 4.89H18.11A4.89 4.89 0 0 0 23 17V7c0-2.7-2.189-4.888-4.889-4.888H5.89ZM3 7a2.889 2.889 0 0 1 2.889-2.888H18.11A2.889 2.889 0 0 1 21 7v10a2.889 2.889 0 0 1-2.889 2.89H5.89A2.889 2.889 0 0 1 3 17V7Zm12.405 4.4c-.175-.386-.7-.68-1.75-1.269l-1.14-.638c-1.01-.565-1.515-.848-1.928-.8a1.29 1.29 0 0 0-.9.527c-.243.337-.243.916-.243 2.073v1.277c0 1.156 0 1.735.243 2.073.213.294.539.485.9.527.413.047.918-.236 1.927-.8l1.14-.64c1.051-.587 1.576-.882 1.751-1.268a1.289 1.289 0 0 0 0-1.061Z",
        fill: E,
      }),
    ),
  );
}
export function MLU(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.836 2.883A9.37 9.37 0 0 1 21.32 12.962a1 1 0 1 1-1.99-.205 7.37 7.37 0 1 0-5.37 6.347 1 1 0 1 1 .533 1.928A9.37 9.37 0 1 1 9.836 2.883Z",
        fill: E,
      }),
    ),
  );
}
export function Pwl(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.3 3.436a9.37 9.37 0 1 1-5.093 11.509 1 1 0 0 1 1.898-.629 7.37 7.37 0 1 0 1.252-6.932H8.18a1 1 0 1 1 0 2H4.09a1 1 0 0 1-1-1V4.293a1 1 0 0 1 2 0v1.491A9.37 9.37 0 0 1 8.3 3.436Z",
        fill: E,
      }),
    ),
  );
}
export function GI1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.024 20.055a1 1 0 0 0 .465-.263L19.906 9.375a3.735 3.735 0 1 0-5.282-5.281L4.207 14.51a1 1 0 0 0-.263.464l-1.289 5.157a1 1 0 0 0 1.213 1.212l5.156-1.289Zm7.014-14.547L5.818 15.73 5 19l3.27-.818 10.222-10.22a1.733 1.733 0 0 0-.563-2.83 1.735 1.735 0 0 0-1.89.376Zm3.878 15.242a1.083 1.083 0 0 0 0-2.167h-5.342a.17.17 0 0 0-.124.055l-1.623 1.758a.211.211 0 0 0 .155.354h6.934Z",
        fill: E,
      }),
    ),
  );
}
export function hIg(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.578 19.92a1.2 1.2 0 1 1-1.696-1.697l5.02-5.023H3a1.2 1.2 0 0 1 0-2.4h13.904l-5.022-5.024a1.2 1.2 0 0 1 1.696-1.697l7.07 7.072a1.2 1.2 0 0 1 0 1.697l-7.07 7.072Z",
        fill: E,
      }),
    ),
  );
}
export function Gk(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.42 19.92a1.2 1.2 0 1 0 1.697-1.697L7.098 13.2H21a1.2 1.2 0 1 0 0-2.4H7.096l5.022-5.024a1.2 1.2 0 0 0-1.696-1.697L3.35 11.15a1.2 1.2 0 0 0 0 1.697l7.07 7.072Z",
        fill: E,
      }),
    ),
  );
}
export function G_L(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-10.3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm0 7.2a1.2 1.2 0 0 0 1.2-1.2v-3.6a1.2 1.2 0 0 0-2.4 0v3.6a1.2 1.2 0 0 0 1.2 1.2Z",
        fill: E,
      }),
    ),
  );
}
export function qm1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.002 7.646V4.61l-3.749 1.917v-.115c0-1.21-.892-1.94-2.181-1.94H4.183c-1.36 0-2.181.73-2.181 1.94v3.066l5.252 2.642-5.252 2.67v3.059c0 1.186.825 1.917 2.181 1.917H16.07c1.29 0 2.182-.73 2.182-1.917v-.16L22 19.63v-3.081l-8.72-4.429 8.722-4.474Zm-11.747 5.98 6.448 3.287H3.784l6.47-3.286Zm6.4-6.3-6.4 3.265-6.47-3.265h12.87Z",
        fill: E,
      }),
    ),
  );
}
export function i6x(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z",
        fill: E,
      }),
    ),
  );
}
export function k8x(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.022 4.872a26.38 26.38 0 0 1 6.178 6.985l1.62-1.538a8.027 8.027 0 0 1 2.69-1.666c-.455-1.479-1.074-2.707-2.088-3.923a.635.635 0 0 0-.503-.23H6.16a.224.224 0 0 0-.126.038.212.212 0 0 0-.08.101.2.2 0 0 0-.005.127.21.21 0 0 0 .072.106Zm4.591 9.41Zm0 0c.806-.493 1.546-1.009 2.225-1.654l1.926-1.826c.93-.876 2.1-1.48 3.375-1.743a7.168 7.168 0 0 1 3.823.257 7.347 7.347 0 0 0-1.069 1.633l-1.26 2.41c-1.042 1.91-3.151 2.74-5.374 2.163-1.247-.323-2.458-.755-3.645-1.24ZM2.66 9.512a.224.224 0 0 1 .112.056c3.412 3.166 6.261 5.624 10.943 6.84 1.11.287 2.158.37 3.303.074-.102.094-.19.178-.272.255-.415.392-.62.586-1.243.958A12.811 12.811 0 0 1 8.756 19.5c-2.382-.032-4.088-.722-6.073-1.986a.598.598 0 0 1-.283-.51V9.718c0-.041.013-.081.037-.116a.217.217 0 0 1 .098-.077.23.23 0 0 1 .125-.013Z",
        fill: E,
      }),
    ),
  );
}
export function bzS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 4.02h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm-4 2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4v-8Zm8 14H9a5 5 0 0 1-5-5v-5a1 1 0 0 0-2 0v5a7 7 0 0 0 7 7h5a1 1 0 1 0 0-2Z",
        fill: E,
      }),
    ),
  );
}
export function ZSY(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.837 6.043a3.352 3.352 0 0 1 3.352-3.352h7.622c1.851 0 3.352 1.5 3.352 3.352v4.588a7.164 7.164 0 0 1-6.136 7.09v1.784h4.136a1 1 0 0 1 1 1v.054a1 1 0 0 1-1 1H6.837a1 1 0 0 1-1-1v-.054a1 1 0 0 1 1-1h4.136V17.72a7.164 7.164 0 0 1-6.136-7.09V6.044ZM8.19 4.69c-.746 0-1.352.605-1.352 1.352v4.588a5.163 5.163 0 1 0 10.326 0V6.043c0-.747-.606-1.352-1.352-1.352H8.189Zm12.72 1.835h1.032c.465 0 .842.378.842.843v2.005c0 1.094-.802 2.23-2.407 3.406a.21.21 0 0 1-.327-.226c.293-1.075.439-1.928.439-2.558V6.947a.422.422 0 0 1 .421-.422Zm-17.82 0a.422.422 0 0 1 .421.422v3.048c0 .63.146 1.483.44 2.559a.21.21 0 0 1-.328.225c-1.605-1.177-2.408-2.312-2.408-3.407V7.367c0-.465.378-.842.843-.842H3.09Z",
        fill: E,
      }),
    ),
  );
}
export function I_J(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.61 3C5.17 3 4 4.185 4 5.647v12.706C4 19.815 5.169 21 6.61 21h7.16c1.442 0 2.61-1.185 2.61-2.647V5.647C16.38 4.185 15.213 3 13.77 3H6.61Zm10.304 17.242h.605c1.923 0 3.481-1.58 3.481-3.53V7.288c0-1.95-1.558-3.53-3.48-3.53h-.606c.323.553.51 1.2.51 1.89v12.705c0 .69-.186 1.336-.51 1.889Z",
        fill: E,
      }),
    ),
  );
}
export function tuV(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.856 4.58a1 1 0 0 1 1.519 1.3l-4.4 5.134a2.5 2.5 0 0 1-3.7.106l-.096-.106-1.63-1.902-.064-.08a1 1 0 0 1 1.511-1.296l.07.074 1.631 1.903.082.076a.5.5 0 0 0 .677-.076l4.4-5.133Z",
        fill: E,
      }),
    ),
  );
}
export function UVZ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.636 4.496a1 1 0 0 1 .897.995v2.467a1 1 0 0 1-2 0V6.49h-5.401v11.985H14.5l.102.005a1 1 0 0 1 0 1.99l-.102.005H9.503a1 1 0 0 1 0-2h1.629V6.491h-5.4v1.467a1 1 0 0 1-2 0V5.49l.004-.103a1 1 0 0 1 .995-.897h14.802l.102.005Z",
        fill: E,
      }),
    ),
  );
}
export function p1s(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.3 4a1.1 1.1 0 0 0-2.2 0v16a1.1 1.1 0 0 0 2.2 0V4ZM4.698 9.001a1.1 1.1 0 0 0-2.2 0v6a1.1 1.1 0 0 0 2.2 0v-6Zm10.1-3.1A1.1 1.1 0 0 1 15.9 7v5.52a6.983 6.983 0 0 0-2.2 1.156V7a1.1 1.1 0 0 1 1.1-1.1Zm4.5 6.42c.788.148 1.53.428 2.2.816V10.5a1.1 1.1 0 0 0-2.2 0v1.821ZM17 16a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2Z",
        fill: E,
      }),
    ),
  );
}
export function s9I(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.04 15.15a.427.427 0 0 1 .794 0l.212.515a3.683 3.683 0 0 0 1.899 1.962l.604.268a.448.448 0 0 1 0 .813l-.64.285a3.679 3.679 0 0 0-1.871 1.898l-.208.477a.427.427 0 0 1-.787 0l-.209-.477a3.679 3.679 0 0 0-1.87-1.898l-.641-.285a.448.448 0 0 1 0-.813l.604-.268a3.682 3.682 0 0 0 1.899-1.962l.214-.516Zm-1.107-12.9a4 4 0 0 1 4 4v5.25a1 1 0 1 1-2 0V6.25a2 2 0 0 0-2-2h-10.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h5.25a1 1 0 1 1 0 2h-5.25a4 4 0 0 1-4-4V6.25a4 4 0 0 1 4-4h10.5ZM8.683 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1Zm4.5 0a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function csv(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.4 4A1.2 1.2 0 0 0 8 4v16a1.2 1.2 0 0 0 2.4 0V4ZM4.8 9a1.2 1.2 0 0 0-2.4 0v6a1.2 1.2 0 0 0 2.4 0V9Zm10-3.2A1.2 1.2 0 0 1 16 7v10a1.2 1.2 0 0 1-2.4 0V7a1.2 1.2 0 0 1 1.2-1.2Zm6.8 4.7a1.2 1.2 0 0 0-2.4 0v3a1.2 1.2 0 0 0 2.4 0v-3Z",
        fill: E,
      }),
    ),
  );
}
export function emq(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.85 9.45a4.5 4.5 0 0 1 4.5-4.5H18.5a4.5 4.5 0 0 1 4.5 4.5v5.1a4.5 4.5 0 0 1-4.5 4.5H7.35a4.5 4.5 0 0 1-4.5-4.5v-5.1Zm4.5-2.5a2.5 2.5 0 0 0-2.5 2.5v5.1a2.5 2.5 0 0 0 2.5 2.5H18.5a2.5 2.5 0 0 0 2.5-2.5v-5.1a2.5 2.5 0 0 0-2.5-2.5H7.35Z",
        fill: E,
      }),
    ),
  );
}
export function uz9(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.144 6.425a4.5 4.5 0 0 1 4.5-4.5h6.612a4.5 4.5 0 0 1 4.5 4.5v11.15a4.5 4.5 0 0 1-4.5 4.5H9.644a4.5 4.5 0 0 1-4.5-4.5V6.425Zm4.5-2.5a2.5 2.5 0 0 0-2.5 2.5v11.15a2.5 2.5 0 0 0 2.5 2.5h6.612a2.5 2.5 0 0 0 2.5-2.5V6.425a2.5 2.5 0 0 0-2.5-2.5H9.644Z",
        fill: E,
      }),
    ),
  );
}
export function cAz(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.922 8.693a4.5 4.5 0 0 1 4.5-4.5h11.15a4.5 4.5 0 0 1 4.5 4.5v6.613a4.5 4.5 0 0 1-4.5 4.5H6.422a4.5 4.5 0 0 1-4.5-4.5V8.693Zm4.5-2.5a2.5 2.5 0 0 0-2.5 2.5v6.613a2.5 2.5 0 0 0 2.5 2.5h11.15a2.5 2.5 0 0 0 2.5-2.5V8.693a2.5 2.5 0 0 0-2.5-2.5H6.422Z",
        fill: E,
      }),
    ),
  );
}
export function iI4(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.244 5.925a4 4 0 0 1 4-4h6.1a4 4 0 0 1 4 4v12.15a4 4 0 0 1-4 4h-6.1a4 4 0 0 1-4-4V5.925Zm4-2a2 2 0 0 0-2 2v12.15a2 2 0 0 0 2 2h6.1a2 2 0 0 0 2-2V5.925a2 2 0 0 0-2-2h-6.1Z",
        fill: E,
      }),
    ),
  );
}
export function nad(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.028 2.856a10.005 10.005 0 0 1 13.816 6.922 1 1 0 1 1-1.95.444A8.006 8.006 0 0 0 4.936 8.405a.999.999 0 0 1-.2.27A1 1 0 0 1 3 8V4.001a1 1 0 0 1 2 0v.939a9.993 9.993 0 0 1 3.03-2.083ZM19.097 15.57a8.006 8.006 0 0 1-14.949-1.836 1 1 0 0 0-1.95.444A10.005 10.005 0 0 0 19 19.06V20a1 1 0 1 0 2 0v-3.977a1.003 1.003 0 0 0-.787-1 1.002 1.002 0 0 0-1.116.548Z",
        fill: E,
      }),
    ),
  );
}
export function CxE(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20.75 17a1 1 0 0 1 1 1v.806a2.945 2.945 0 0 1-2.944 2.944H5.194a2.945 2.945 0 0 1-2.94-2.793l-.004-.151V18a1 1 0 0 1 1.995-.102L4.25 18v.806l.005.096c.048.476.45.848.94.848h13.61a.945.945 0 0 0 .945-.944V18a1 1 0 0 1 1-1ZM5.077 9a.5.5 0 0 1 .5.5v1.595h2.15V9.5a.5.5 0 0 1 .5-.5h.577a.5.5 0 0 1 .5.5v4.574a.5.5 0 0 1-.5.5h-.577a.5.5 0 0 1-.5-.5V12.4h-2.15v1.674a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5V9.5a.5.5 0 0 1 .5-.5h.577Zm8.004 0c.616 0 1.157.115 1.624.343.467.228.83.549 1.09.963.266.414.4.908.4 1.481 0 .568-.134 1.062-.4 1.482-.26.413-.623.734-1.09.962-.467.229-1.008.343-1.624.343h-2.136a.5.5 0 0 1-.5-.5V9.5a.5.5 0 0 1 .5-.5h2.136Zm6.203.787a.5.5 0 0 1 .5.5V11h.712a.5.5 0 0 1 .5.5v.576a.5.5 0 0 1-.5.5h-.712v.712a.5.5 0 0 1-.5.5h-.576a.5.5 0 0 1-.5-.5v-.712h-.712a.5.5 0 0 1-.5-.5V11.5a.5.5 0 0 1 .5-.5h.712v-.712a.5.5 0 0 1 .499-.5h.577Zm-7.262 3.53h.996c.318 0 .594-.06.828-.176a1.34 1.34 0 0 0 .557-.526 1.65 1.65 0 0 0 .199-.828c0-.324-.066-.6-.199-.828a1.284 1.284 0 0 0-.557-.518 1.767 1.767 0 0 0-.828-.183h-.997v3.058ZM18.805 2.25a2.944 2.944 0 0 1 2.944 2.944V6a1 1 0 0 1-2 0v-.806a.944.944 0 0 0-.944-.944H5.194a.944.944 0 0 0-.944.944V6a1 1 0 0 1-2 0v-.806A2.944 2.944 0 0 1 5.194 2.25h13.612Z",
        fill: E,
      }),
    ),
  );
}
export function uYA(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 3a1 1 0 0 1 1 1v1h4.5A4.5 4.5 0 0 1 22 9.5v5a4.5 4.5 0 0 1-4.5 4.5H13v1a1 1 0 1 1-2 0v-1H6.5A4.5 4.5 0 0 1 2 14.5v-5A4.5 4.5 0 0 1 6.5 5H11V4a1 1 0 0 1 1-1Zm1 14h4.5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 17.5 7H13v10Z",
        fill: E,
      }),
    ),
  );
}
export function mDt(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.002 3c.424 0 .806.177 1.079.46l5.98 5.98.103.114a1.5 1.5 0 0 1-2.225 2.006l-3.437-3.436V19.5l-.008.153a1.5 1.5 0 0 1-2.985 0l-.007-.153V8.122l-3.44 3.438a1.5 1.5 0 0 1-2.225-2.006l.103-.115 6-5.999.025-.025.059-.052.044-.037c.029-.023.06-.044.09-.065l.014-.01a1.43 1.43 0 0 1 .101-.062l.03-.017c.209-.11.447-.172.699-.172Z",
        fill: E,
      }),
    ),
  );
}
export function uUv(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.5 10.9c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.54 4.5 8.66 4.5 10.9 4.5h2.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v2.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-2.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4.5 16.46 4.5 15.34 4.5 13.1v-2.2Z",
        fill: E,
      }),
    ),
  );
}
export function CGh(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7.06 10.154c-.2 0-.392.03-.583.059.062-.209.126-.42.228-.61.102-.277.262-.517.42-.758.134-.261.368-.438.54-.661.18-.217.426-.362.621-.542.191-.189.442-.283.64-.416.209-.12.39-.251.584-.314l.484-.199a.535.535 0 0 0 .313-.624l-.19-.757a.556.556 0 0 0-.669-.406l-.618.154c-.243.045-.503.168-.792.28-.285.127-.615.213-.922.418-.309.196-.665.359-.979.62-.304.271-.671.505-.942.849-.296.321-.589.659-.816 1.043-.263.366-.441.768-.63 1.165-.17.398-.308.804-.42 1.199a10.833 10.833 0 0 0-.344 2.187c-.03.644-.013 1.18.025 1.568.013.182.038.36.056.483l.023.15.023-.005a4.038 4.038 0 1 0 3.948-4.883Zm9.871 0c-.2 0-.392.03-.583.059.062-.209.125-.42.228-.61.102-.277.262-.517.42-.758.133-.261.367-.438.54-.661.18-.217.426-.362.62-.542.192-.189.442-.283.641-.416.209-.12.39-.251.584-.314l.483-.199a.535.535 0 0 0 .314-.624l-.19-.757a.556.556 0 0 0-.67-.406l-.617.154c-.244.045-.503.168-.792.28-.284.128-.615.213-.922.419-.31.195-.665.359-.98.62-.304.27-.67.505-.942.848-.296.321-.588.659-.815 1.043-.263.366-.442.768-.63 1.165-.17.398-.308.804-.42 1.199a10.832 10.832 0 0 0-.345 2.187c-.03.644-.012 1.18.025 1.568.014.182.039.36.057.483l.022.15.024-.005a4.038 4.038 0 1 0 3.948-4.883Z",
        fill: E,
      }),
    ),
  );
}
export function j$8(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.805 5.786c1.25-.926 2.193-1.373 2.471-1.096.489.488-1.261 3.03-3.909 5.677-4.33 4.331-6.715 8.968-5.326 10.358.29.29.723.416 1.264.394.421.017.92-.07 1.48-.249-2.117.9-3.859 1.005-4.76.104-1.874-1.874.61-7.402 5.553-12.353l.022-.02c.03-.032.062-.063.093-.094l.065-.064.11-.108c.97-.95 1.96-1.804 2.937-2.549Zm5.55 11.57c1.532-1.531 3.2-2.347 3.725-1.822.525.525-.29 2.192-1.822 3.724-1.532 1.531-3.2 2.347-3.725 1.822-.524-.525.291-2.192 1.822-3.724ZM16.217 3.13c2.116-.9 3.858-1.005 4.759-.105 1.874 1.875-.612 7.402-5.554 12.353l-.022.021c-.03.032-.062.062-.093.093l-.064.065-.11.108c-.97.949-1.96 1.803-2.938 2.548-1.25.926-2.193 1.374-2.471 1.096-.489-.487 1.262-3.029 3.91-5.676 4.331-4.332 6.715-8.97 5.325-10.36-.29-.29-.722-.414-1.263-.392-.421-.017-.92.069-1.48.249ZM4.742 4.74C6.274 3.21 7.94 2.394 8.466 2.92c.525.525-.29 2.193-1.822 3.724C5.112 8.175 3.445 8.99 2.92 8.466c-.525-.525.29-2.193 1.822-3.725Z",
        fill: E,
      }),
    ),
  );
}
export function Ot6(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.599 3.5a4.9 4.9 0 0 1 4.899 4.9v7.2a4.9 4.9 0 0 1-4.9 4.9H6.403a4.9 4.9 0 0 1-4.9-4.9V8.4a4.9 4.9 0 0 1 4.9-4.9H17.6ZM4.002 9.213a.5.5 0 0 0-.5.5v4.574a.5.5 0 0 0 .5.5h.577a.5.5 0 0 0 .5-.5v-1.674h2.15v1.674a.5.5 0 0 0 .5.5h.577a.5.5 0 0 0 .5-.5V9.713a.5.5 0 0 0-.5-.5h-.577a.5.5 0 0 0-.5.5v1.595h-2.15V9.713a.5.5 0 0 0-.5-.5h-.577Zm6.445 0a.5.5 0 0 0-.5.5v4.574a.5.5 0 0 0 .5.5h2.136c.616 0 1.157-.115 1.624-.343.467-.228.83-.549 1.09-.963.266-.419.4-.913.4-1.481 0-.573-.134-1.067-.4-1.481a2.608 2.608 0 0 0-1.09-.963c-.467-.229-1.008-.343-1.624-.343h-2.136ZM18.21 10a.5.5 0 0 0-.499.5v.712h-.712a.5.5 0 0 0-.5.5v.576a.5.5 0 0 0 .5.5h.712v.712a.5.5 0 0 0 .5.5h.576a.5.5 0 0 0 .5-.5v-.712h.712a.5.5 0 0 0 .5-.5v-.576a.5.5 0 0 0-.5-.5h-.712V10.5a.5.5 0 0 0-.5-.5h-.577Zm-5.69.47c.319 0 .595.062.829.184.238.117.425.29.557.518.133.228.199.504.199.828 0 .318-.066.595-.199.828a1.334 1.334 0 0 1-.557.526c-.234.116-.51.175-.829.175h-.996v-3.058h.997Z",
        fill: E,
      }),
    ),
  );
}
export function vES(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.092 5.86c1.905.08 3.113 1.362 3.96 2.47.225.293.437.592.634.87.2.282.383.54.565.779.377.492.674.793.941.946a1 1 0 0 1 .408 1.294c-.684 1.448-1.687 3.317-3.349 4.82-1.69 1.528-4.017 2.639-7.25 2.639-6.143 0-9.079-3.976-10.386-6.944l-.24-.579a1 1 0 0 1 .271-1.114l.262-.249c.267-.272.553-.612.874-1.01.41-.509.878-1.115 1.363-1.665.937-1.059 2.233-2.26 3.939-2.26l.3.004c1.47.05 2.55.48 3.418 1.24l.053.037a.391.391 0 0 0 .189.054.295.295 0 0 0 .202-.064l.172-.143c.875-.693 1.96-1.129 3.487-1.129l.187.004Zm-.398 2c-.889.033-1.469.272-1.937.619l-.21.167c-.845.725-2.057.702-2.899.09l-.163-.13c-.44-.386-1.01-.67-1.966-.736l-.435-.014c-.747 0-1.515.54-2.44 1.586-.446.503-.858 1.04-1.304 1.594-.27.334-.556.675-.85.99 1.148 2.559 3.547 5.652 8.511 5.652 2.722 0 4.574-.916 5.908-2.122 1.132-1.024 1.92-2.286 2.53-3.478a7.654 7.654 0 0 1-.776-.884 28.48 28.48 0 0 1-.61-.838c-.198-.28-.39-.55-.588-.81-.816-1.067-1.554-1.69-2.56-1.69l-.21.004ZM7.51 12.114a.9.9 0 0 1 1.228-.333l.144.077c.746.377 1.888.602 3.111.606 1.305.003 2.514-.246 3.247-.663l.082-.042a.899.899 0 0 1 .807 1.605l-.214.115c-1.094.552-2.554.79-3.93.786-1.47-.005-3.031-.284-4.144-.922l-.077-.05a.9.9 0 0 1-.254-1.179Z",
        fill: E,
      }),
    ),
  );
}
export function KPZ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.092 5.86c1.905.08 3.113 1.362 3.96 2.47.225.293.437.592.634.87.2.282.383.54.565.779.377.492.674.793.941.946a1 1 0 0 1 .408 1.294c-.684 1.448-1.687 3.317-3.349 4.82-1.69 1.528-4.017 2.639-7.25 2.639-6.143 0-9.079-3.976-10.386-6.944l-.24-.579a1 1 0 0 1 .271-1.114l.262-.249c.267-.272.553-.612.874-1.01.41-.509.878-1.115 1.363-1.665.937-1.059 2.233-2.26 3.939-2.26l.3.004c1.47.05 2.55.48 3.418 1.24l.053.037a.391.391 0 0 0 .189.054.295.295 0 0 0 .202-.064l.172-.143c.875-.693 1.96-1.129 3.487-1.129l.187.004Zm-.398 2c-.889.033-1.469.272-1.937.619l-.21.167c-.845.725-2.057.702-2.899.09l-.163-.13c-.44-.386-1.01-.67-1.966-.736l-.435-.014c-.747 0-1.515.54-2.44 1.586-.446.503-.858 1.04-1.304 1.594-.27.334-.556.675-.85.99 1.148 2.559 3.547 5.652 8.511 5.652 2.722 0 4.574-.916 5.908-2.122 1.132-1.024 1.92-2.286 2.53-3.478a7.654 7.654 0 0 1-.776-.884 28.48 28.48 0 0 1-.61-.838c-.198-.28-.39-.55-.588-.81-.816-1.067-1.554-1.69-2.56-1.69l-.21.004ZM7.51 12.114a.9.9 0 0 1 1.228-.333l.144.077c.746.377 1.888.602 3.111.606 1.305.003 2.514-.246 3.247-.663l.082-.042a.899.899 0 0 1 .807 1.605l-.214.115c-1.094.552-2.554.79-3.93.786-1.47-.005-3.031-.284-4.144-.922l-.077-.05a.9.9 0 0 1-.254-1.179Z",
        fill: E,
      }),
    ),
  );
}
export function YhM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.45 5.698a1.371 1.371 0 1 1 0-2.742 1.371 1.371 0 0 1 0 2.742Zm0 1.837a3.208 3.208 0 1 1 0-6.416 3.208 3.208 0 0 1 0 6.416Zm7.068 13.633-.226.518a.464.464 0 0 1-.855 0l-.226-.518a3.998 3.998 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.882l.657-.293a4.001 4.001 0 0 0 2.063-2.132l.232-.56a.464.464 0 0 1 .863 0l.232.56a4.001 4.001 0 0 0 2.063 2.132l.657.293a.486.486 0 0 1 0 .882l-.696.31a3.998 3.998 0 0 0-2.034 2.063ZM6.062 7.006c-1.061-.801-2.583-.69-3.457.399-.737.918-.781 2.323.163 3.22a13.578 13.578 0 0 0 3.09 2.216c.585.3.89.849.836 1.335l-.754 6.926a.918.918 0 1 0 1.826.198l.754-6.925c.153-1.403-.717-2.599-1.823-3.168a11.745 11.745 0 0 1-2.664-1.913c-.163-.155-.215-.466.004-.74.211-.262.596-.326.918-.082 1.323.999 3.415 2.235 6.515 2.235 3.131 0 5.187-1.086 6.56-2.086.34-.248.738-.172.936.073.194.24.142.473.046.576a9.124 9.124 0 0 1-4.108 2.499.918.918 0 1 0 .504 1.766 10.958 10.958 0 0 0 4.95-3.016c.827-.89.696-2.163.038-2.979-.878-1.087-2.402-1.165-3.447-.404-1.143.833-2.828 1.734-5.48 1.734-2.559 0-4.27-1.004-5.407-1.864Z",
        fill: E,
      }),
    ),
  );
}
export function ACu(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 10 10",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-stroke": "currentColor",
        "data-follow-fill": "currentColor",
        d: "M3.253 1.172a.604.604 0 0 1 .854.005l3.359 3.398a.604.604 0 0 1 0 .85L4.107 8.823a.604.604 0 0 1-.859-.85L6.187 5 3.248 2.026a.604.604 0 0 1 .005-.854Z",
        strokeWidth: ".208",
        fill: E,
        stroke: p,
      }),
    ),
  );
}
export function p0W(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.176 15.77a.427.427 0 0 1 .794 0l.214.515a3.683 3.683 0 0 0 1.898 1.962l.604.269a.448.448 0 0 1 0 .812l-.64.284a3.68 3.68 0 0 0-1.871 1.899l-.208.477a.427.427 0 0 1-.787 0l-.208-.477a3.68 3.68 0 0 0-1.871-1.899l-.641-.284a.448.448 0 0 1 0-.812l.604-.269a3.683 3.683 0 0 0 1.899-1.962l.213-.515ZM15.5 2a1 1 0 0 1 1 1v.5h1a4 4 0 0 1 4 4V13h-2v-1.5h-15v6a2 2 0 0 0 2 2h6v2h-6a4 4 0 0 1-4-4v-10a4 4 0 0 1 4-4h1V3a1 1 0 0 1 2 0v.5h5V3a1 1 0 0 1 1-1Zm-9 3.5a2 2 0 0 0-2 2v2h15v-2a2 2 0 0 0-2-2h-1V6a1 1 0 1 1-2 0v-.5h-5V6a1 1 0 0 1-2 0v-.5h-1Z",
        fill: E,
      }),
    ),
  );
}
export function bWW(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.362 18a5.515 5.515 0 0 0-.112.889c-.02.346-.026 1.28-.028 2.11a1 1 0 0 0 1 1H6L4 22a2 2 0 0 1-2-2v-2h2.362Zm9.639 4h-4v-.001h4V22Zm8-2a2 2 0 0 1-2 2l-2-.001h.776a1 1 0 0 0 1-1 58.815 58.815 0 0 0-.029-2.11 5.508 5.508 0 0 0-.112-.889H22v2Zm-4-4.63a4.933 4.933 0 0 0-1.821-.963c-.524-.147-1.14-.177-2.18-.183V14h4v1.37Zm-8-1.146c-1.042.006-1.658.036-2.182.183a4.933 4.933 0 0 0-1.819.96V14h4v.224ZM6 14H2v-4h4v4Zm8 0h-4v-1.365c.6.303 1.279.475 1.998.475.72 0 1.4-.171 2.001-.475V14Zm8 0h-4v-4h4v4ZM8.442 6a4.444 4.444 0 0 0-.685 4H6V6h2.443ZM18 10h-1.76c.133-.421.203-.87.203-1.334 0-1-.33-1.923-.888-2.666H18v4ZM6 6H2V4a2 2 0 0 1 2-2h2v4Zm14-4a2 2 0 0 1 2 2v2h-4V2h2Zm-5.999 2.698a4.426 4.426 0 0 0-2.002-.476c-.72 0-1.398.172-1.999.475V2h4.001v2.698Z",
        fillOpacity: ".35",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.43 14.222c1.772 0 2.659 0 3.372.25a4.446 4.446 0 0 1 2.727 2.727c.25.712.25 1.6.25 3.372l-.008.469c-.007.12-.02.21-.049.29a1 1 0 0 1-.613.614l-.13.032c-.048.008-.1.013-.16.017L18.35 22H5.651l-.469-.007a1.523 1.523 0 0 1-.16-.017l-.13-.032a1.003 1.003 0 0 1-.614-.614c-.056-.16-.056-.36-.056-.76 0-1.772 0-2.659.25-3.371a4.445 4.445 0 0 1 2.727-2.728c.713-.25 1.6-.249 3.372-.249h2.858Zm-2.859 2c-1.94 0-2.4.028-2.712.137a2.446 2.446 0 0 0-1.5 1.5c-.097.278-.128.676-.134 2.14h11.551c-.006-1.464-.038-1.862-.135-2.14a2.446 2.446 0 0 0-1.5-1.5c-.31-.109-.771-.137-2.712-.137h-2.858Zm1.429-12a4.445 4.445 0 0 1 4.445 4.445l-.006.228A4.445 4.445 0 0 1 12 13.111l-.228-.006a4.445 4.445 0 0 1-4.21-4.21l-.006-.228A4.445 4.445 0 0 1 12 4.222Zm0 2a2.445 2.445 0 1 0 0 4.89 2.445 2.445 0 0 0 0-4.89Z",
        fill: E,
      }),
    ),
  );
}
export function GFc(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7.606 3.58a.5.5 0 0 1 .787.408v1.927h6.332a6.854 6.854 0 0 1 0 13.708H4.77a1 1 0 1 1 0-2h9.955a4.854 4.854 0 1 0 0-9.708H4.597c-.977 0-1.374-1.255-.575-1.817L7.606 3.58Z",
        fill: E,
      }),
    ),
  );
}
export function cHj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.517 3.575a.5.5 0 0 0-.787.409v1.931H9.399a6.855 6.855 0 0 0 0 13.708h9.955a1 1 0 0 0 0-2H9.399a4.854 4.854 0 1 1 0-9.708h9.955v-.004h.172c.977 0 1.374-1.255.575-1.817l-3.584-2.519Z",
        fill: E,
      }),
    ),
  );
}
export function xDj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.947 3a5 5 0 0 1 5 5v7a5 5 0 0 1-5 5h-1.51a1 1 0 0 0-.768.36l-1.133 1.359a2 2 0 0 1-3.072 0L9.03 20H7.053a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h9.894ZM7.053 5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3H9.03a2 2 0 0 1 1.537.72L12 20.438l1.132-1.359A3 3 0 0 1 15.437 18h1.51a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H7.053Zm5.029 9.14c.307 0 .563.106.77.318.207.213.31.476.311.79 0 .312-.101.574-.31.786-.208.213-.464.32-.771.32a1.02 1.02 0 0 1-.77-.319 1.09 1.09 0 0 1-.312-.788 1.092 1.092 0 0 1 .664-1.03c.133-.054.275-.08.418-.076Zm0-6.64c.306.001.562.108.77.32.208.212.311.474.311.787v3.32c0 .313-.101.576-.31.788a1.037 1.037 0 0 1-.771.318 1.025 1.025 0 0 1-.77-.317 1.072 1.072 0 0 1-.312-.79V8.608c0-.311.104-.574.312-.788.208-.213.464-.319.77-.319Z",
        fill: E,
      }),
    ),
  );
}
export function gAj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.104 14.462c-1.359 2.008-2.203 4.3-1.87 6.566a.723.723 0 0 1-.397.76.747.747 0 0 1-.852-.162c-1.603-1.683-3.903-2.463-6.301-2.643a26.536 26.536 0 0 0 5.107-1.877 26.004 26.004 0 0 0 4.316-2.647l-.003.003ZM6.339 2.258a.575.575 0 0 1 .732.202c3.953 5.991 8.172 7.646 13.622 6.642a.931.931 0 0 1 .997.496c.415.832-.438 1.344-.964 1.832-1.485 1.198-4.25 2.932-7.573 4.553-3.326 1.621-6.397 2.734-8.251 3.166-.402.063-.808.188-1.216.202-.81-.054-1.2-1.119-.583-1.669C7.235 14.016 8.323 9.77 6.047 2.96a.574.574 0 0 1 .292-.701Z",
        fill: E,
      }),
    ),
  );
}
export function qRB(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillOpacity: ".48",
        d: "M2 17.5A3.5 3.5 0 0 0 5.5 21H6a1 1 0 1 0 0-2h-.5A1.5 1.5 0 0 1 4 17.5v-1H2v1Zm0-3h2v-2H2v2Zm0-6v2h2v-2H2ZM5.5 2A3.5 3.5 0 0 0 2 5.5v1h2v-1A1.5 1.5 0 0 1 5.5 4H6a1 1 0 0 0 0-2h-.5ZM22 5.5A3.5 3.5 0 0 0 18.5 2H18a1 1 0 1 0 0 2h.5A1.5 1.5 0 0 1 20 5.5v1h2v-1Zm0 3h-2v2h2v-2Zm0 6v-2h-2v2h2ZM18.5 21a3.5 3.5 0 0 0 3.5-3.5v-1h-2v1a1.5 1.5 0 0 1-1.5 1.5H18a1 1 0 1 0 0 2h.5Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13 19v2h-2v-2h2Zm2-2V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2v2l-.206-.005a4 4 0 0 1-3.79-3.789L7 17V6a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v11a4 4 0 0 1-3.794 3.995L13 21v-2a2 2 0 0 0 2-2Z",
        fill: E,
      }),
    ),
  );
}
export function yv4(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15 3.002a2 2 0 0 1 1.99 1.803l.015.296A1 1 0 0 0 18 6h1a3 3 0 0 1 3 3.001v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h1a1 1 0 0 0 .995-.901l.015-.296A2 2 0 0 1 9 3.002h6Zm-6 2a3 3 0 0 1-3 3H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1a3 3 0 0 1-3-3H9Zm6.35 4.304a.9.9 0 0 1 .901.9v1.023a.9.9 0 0 1-1.8 0v-.123h-1.267v3.995h.08l.092.004a.9.9 0 0 1-.091 1.795h-2.07a.9.9 0 0 1 0-1.8h.189v-3.994h-1.266v.123a.9.9 0 0 1-1.8 0v-1.023a.9.9 0 0 1 .9-.9h6.133Z",
        fill: E,
      }),
    ),
  );
}
export function UFF(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 18a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1Zm8-6a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1Z",
        fill: E,
      }),
    ),
  );
}
export function zxk(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15 20a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-1H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-5v1h2ZM6 6a2 2 0 0 0-2 2v7l.01.204A2 2 0 0 0 6 17h12a2 2 0 0 0 1.99-1.796L20 15V8a2 2 0 0 0-2-2H6Z",
        fill: E,
      }),
    ),
  );
}
export function INp(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.718 7.585c2.256-2.34 6.374-5.086 10.849-5.982a1.8 1.8 0 0 1 .707 3.53c-3.443.69-6.762 2.806-8.67 4.657 3.17-.758 6.073-1.138 7.908-.905.535.068 1.171.209 1.72.546.625.384 1.225 1.1 1.206 2.129-.016.842-.456 1.515-.82 1.954-.398.48-.935.954-1.564 1.424-1.017.761-1.546 1.395-1.782 1.818.285-.013.705-.091 1.254-.317a1.8 1.8 0 0 1 1.368 3.331c-1.159.476-2.331.692-3.39.544-1.067-.148-2.196-.716-2.72-1.923-.504-1.164-.209-2.395.343-3.385.485-.87 1.25-1.727 2.264-2.554-1.56.114-3.755.498-6.305 1.182-.822.22-1.71.356-2.509.169a2.555 2.555 0 0 1-1.321-.755 2.398 2.398 0 0 1-.614-1.473c-.056-.862.32-1.648.643-2.183.361-.6.86-1.213 1.433-1.807Z",
        fill: E,
      }),
    ),
  );
}
export function kDS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.326 2.75a4.924 4.924 0 0 1 4.924 4.924v3.44a6.114 6.114 0 0 0-1.97-.387V7.674a2.954 2.954 0 0 0-2.954-2.954H7.674A2.954 2.954 0 0 0 4.72 7.674v8.652c0 .055 0 .109.004.162l3.508-3.508a2.955 2.955 0 0 1 4.03-.138l1.375 1.197a6.096 6.096 0 0 0-.638 2.057l-2.03-1.77a.986.986 0 0 0-1.344.047l-4.041 4.041a2.946 2.946 0 0 0 2.09.866h5.772c.32.744.782 1.412 1.353 1.97H7.674a4.924 4.924 0 0 1-4.924-4.924V7.674A4.924 4.924 0 0 1 7.674 2.75h8.652Zm2.762 10.36a1 1 0 0 1 1 1v1.75h1.75a1 1 0 1 1 0 2h-1.75v1.75a1 1 0 0 1-2 0v-1.75h-1.75a1 1 0 0 1 0-2h1.75v-1.75a1 1 0 0 1 1-1ZM15.61 6.87a1.533 1.533 0 1 1 0 3.064 1.533 1.533 0 0 1 0-3.065Z",
        fill: E,
      }),
    ),
  );
}
export function QyI(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13 3a5 5 0 0 1 3.743 8.313A5.002 5.002 0 0 1 15 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6ZM7 19h8a3 3 0 1 0 0-6H7v6Zm0-8h6a3 3 0 1 0 0-6H7v6Z",
        fill: E,
      }),
    ),
  );
}
export function uG2(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.5 18a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1Zm4-6a1 1 0 0 1-1 1h-14a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1Z",
        fill: E,
      }),
    ),
  );
}
export function H5E(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20 18a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm0-6a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h14a1 1 0 0 1 1 1Z",
        fill: E,
      }),
    ),
  );
}
export function tYj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.5 5h-2.306l-3.74 14H14.5v2h-8v-2h2.87l3.742-14H10.5V3h8v2Z",
        fill: E,
      }),
    ),
  );
}
export function PA8(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillOpacity: ".48",
        d: "M13 4.806c3.102 0 5.73 1.994 6.716 4.768a4.924 4.924 0 0 0-1.878.682c-.71-2.015-2.613-3.45-4.838-3.45-2.42 0-4.46 1.697-4.998 3.992a1 1 0 0 1-.973.773h-.164c-1.524 0-2.775 1.25-2.776 2.811 0 1.562 1.252 2.812 2.776 2.812h9.851v2H6.865c-2.646 0-4.776-2.163-4.776-4.812 0-2.446 1.818-4.478 4.181-4.773.976-2.793 3.616-4.803 6.73-4.803Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M22.91 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z",
        fill: E,
      }),
    ),
  );
}
export function NZJ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.475 7.686c2.493-2.584 7.083-5.64 12.015-6.627a.9.9 0 0 1 .353 1.765c-4.508.902-8.784 3.739-11.073 6.112-.567.588-.99 1.125-1.26 1.573-.199.33-.279.555-.308.685.22.031.657.012 1.395-.186 4.32-1.157 8.233-1.73 10.443-1.45.556.071 1.1.206 1.529.469.466.286.847.768.835 1.437-.011.576-.317 1.098-.68 1.536-.38.458-.924.945-1.619 1.465-1.27.95-2.022 1.809-2.405 2.497-.388.696-.347 1.108-.266 1.293.07.165.277.388.83.465.56.078 1.377-.02 2.399-.44a.9.9 0 0 1 .683 1.666c-1.219.5-2.366.69-3.33.556-.968-.134-1.84-.622-2.234-1.531-.385-.89-.196-1.915.345-2.886.546-.98 1.506-2.018 2.9-3.061.636-.476 1.056-.867 1.31-1.173.12-.146.186-.253.222-.323-.132-.062-.368-.136-.746-.184-1.835-.233-5.454.251-9.75 1.403-.903.242-1.705.337-2.34.188a1.782 1.782 0 0 1-.928-.52 1.596 1.596 0 0 1-.406-.987c-.04-.63.239-1.283.58-1.849.36-.598.878-1.242 1.506-1.893Z",
        fill: E,
      }),
    ),
  );
}
export function AWy(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.75 14a1 1 0 0 1 1 1v1.75h1.75a1 1 0 1 1 0 2h-1.75v1.75a1 1 0 1 1-2 0v-1.75H17a1 1 0 1 1 0-2h1.75V15a1 1 0 0 1 1-1ZM8.43 2.77a3 3 0 0 1 2.164.922l1.11 1.156c.165.171.386.278.62.302l.102.005h5.737a3 3 0 0 1 3 3v3.495H4.837v5.004a2 2 0 0 0 2 2H14v2H6.837a4 4 0 0 1-4-4V5.771a3 3 0 0 1 3-3H8.43Zm-2.593 2a1 1 0 0 0-1 1v3.88h14.326V8.155a1 1 0 0 0-1-1h-5.737a3.003 3.003 0 0 1-2.164-.922l-1.11-1.155a1.002 1.002 0 0 0-.721-.307H5.837Z",
        fill: E,
      }),
    ),
  );
}
export function jHH(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.81 2.1c1.31 0 2.514.205 3.61.616l.412.157c.941.387 1.769.92 2.48 1.598l.301.293a7.576 7.576 0 0 1 1.603 2.48l.161.414c.35.983.523 2.07.523 3.26 0 .757-.094 1.496-.279 2.22h.001a6.49 6.49 0 0 1-.815 1.989l-.001.002a4.872 4.872 0 0 1-1.388 1.428l-.003.002c-.559.357-1.22.533-1.974.533-.792 0-1.438-.22-1.92-.672l-.004-.004a2.986 2.986 0 0 1-.786-1.327 4.166 4.166 0 0 1-1.263 1.369c-.612.426-1.375.634-2.278.634-1.297 0-2.322-.427-3.052-1.292l-.002-.001c-.708-.86-1.055-1.99-1.055-3.374 0-1.089.22-2.053.664-2.887a4.982 4.982 0 0 1 1.874-2l.001-.002c.824-.485 1.79-.724 2.89-.724.738 0 1.46.064 2.165.195 1.096.174 1.763 1.176 1.709 2.258l-.162 3.216c-.017.291-.025.499-.025.623v.244c0 .413.037.75.107 1.011.07.261.17.44.29.551.288.252.618.376.997.376.469 0 .86-.181 1.181-.555.347-.4.613-.929.792-1.592v-.002a8.16 8.16 0 0 0 .292-2.242c0-1.484-.31-2.727-.923-3.735l-.002-.002a5.905 5.905 0 0 0-2.503-2.346c-1.056-.538-2.26-.809-3.618-.81-1.396 0-2.63.217-3.706.645-1.076.43-1.98 1.032-2.71 1.808v.001a7.899 7.899 0 0 0-1.636 2.765h-.001c-.375 1.05-.564 2.216-.564 3.496 0 1.568.288 2.894.855 3.985l.108.198a5.746 5.746 0 0 0 2.366 2.263l.21.1c1.064.487 2.347.734 3.857.734 1.001 0 1.952-.111 2.852-.335h.004c.494-.113.957-.232 1.389-.357.614-.178 1.26.268 1.26.92 0 .38-.23.73-.595.858-.592.209-1.239.382-1.94.522-.892.197-1.882.295-2.97.295-1.977 0-3.678-.36-5.099-1.085-1.42-.725-2.513-1.766-3.275-3.12l-.001-.002C2.469 16.323 2.1 14.686 2.1 12.79c0-1.522.244-2.932.732-4.23a9.637 9.637 0 0 1 2.125-3.403c.929-.97 2.05-1.719 3.363-2.244l.507-.19c1.202-.415 2.53-.622 3.983-.622ZM7.89 19.496l.088.035a6.872 6.872 0 0 1-.308-.13l.22.095Zm-2.744-2.323a6.2 6.2 0 0 1-.12-.197l.12.197Zm7.39-8.532c-.79 0-1.41.189-1.876.551-.474.37-.815.848-1.021 1.437a5.403 5.403 0 0 0-.316 1.845c0 1.02.205 1.728.583 2.157l.156.152c.38.334.86.503 1.453.503.887 0 1.496-.32 1.862-.945l.002-.003c.398-.653.635-1.51.7-2.578l.108-2.195c.022-.427-.251-.794-.652-.853a6.908 6.908 0 0 0-1-.071Zm7.234 4.304.008-.03.028-.127-.037.157Z",
        fill: E,
      }),
    ),
  );
}
export function O2p(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 7.5A2.5 2.5 0 0 1 7.5 5h1.095a1 1 0 1 0 0-2H7.5A4.5 4.5 0 0 0 3 7.5v1.095a1 1 0 1 0 2 0V7.5ZM15.405 3a1 1 0 1 0 0 2H16.5A2.5 2.5 0 0 1 19 7.5v1.095a1 1 0 1 0 2 0V7.5A4.5 4.5 0 0 0 16.5 3h-1.095ZM5 15.405a1 1 0 1 0-2 0V16.5A4.5 4.5 0 0 0 7.5 21h1.095a1 1 0 1 0 0-2H7.5A2.5 2.5 0 0 1 5 16.5v-1.095Zm16 0a1 1 0 1 0-2 0V16.5a2.5 2.5 0 0 1-2.5 2.5h-1.095a1 1 0 1 0 0 2H16.5a4.5 4.5 0 0 0 4.5-4.5v-1.095Zm-9.453-7.434a.5.5 0 0 1 .906 0l.6 1.285a3.5 3.5 0 0 0 1.691 1.692l1.285.6a.5.5 0 0 1 0 .906l-1.285.6a3.499 3.499 0 0 0-1.691 1.69l-.6 1.286a.5.5 0 0 1-.906 0l-.6-1.285a3.5 3.5 0 0 0-1.691-1.692l-1.285-.6a.5.5 0 0 1 0-.906l1.285-.6a3.5 3.5 0 0 0 1.691-1.69l.6-1.286Z",
        fill: E,
      }),
    ),
  );
}
export function YxV(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 25 25",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "m15.72 9.028-7.388-.013C7.044 9.012 6.352 10.529 7.2 11.5l3.687 4.228a1.5 1.5 0 0 0 2.258.004l3.701-4.215c.85-.969.165-2.488-1.124-2.49Z",
        fill: E,
      }),
    ),
  );
}
export function xoh(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 1a1 1 0 0 1 1 1v1.057A9 9 0 0 1 20.943 11h1.053a1 1 0 0 1 0 2h-1.053A9 9 0 0 1 13 20.942v1.054a1 1 0 0 1-2 0v-1.054A9 9 0 0 1 3.057 13H2a1 1 0 1 1 0-2h1.057A9 9 0 0 1 11 3.057V2a1 1 0 0 1 1-1Zm1 6.127a1 1 0 1 1-2 0V5.072A7.002 7.002 0 0 0 5.072 11h2.055a1 1 0 1 1 0 2H5.072A7.001 7.001 0 0 0 11 18.927v-2.058a1 1 0 0 1 2 0v2.058A7.001 7.001 0 0 0 18.928 13h-2.059a1 1 0 0 1 0-2h2.059A7.002 7.002 0 0 0 13 5.072v2.055Z",
        fill: E,
      }),
    ),
  );
}
export function MPN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.092 13.102a1 1 0 0 1 1 1v1.75h1.75a1 1 0 0 1 0 2h-1.75v1.75a1 1 0 1 1-2 0v-1.75h-1.75a1 1 0 1 1 0-2h1.75v-1.75a1 1 0 0 1 1-1Zm.543-8.606a1 1 0 0 1 .897.995v2.467a1 1 0 0 1-2 0V6.491h-5.401v11.986h1.368l.103.004a1 1 0 0 1 0 1.99l-.103.006H9.502a1.001 1.001 0 0 1 0-2h1.629V6.49h-5.4v1.467a1 1 0 0 1-2 0V5.491l.004-.102c.052-.504.478-.899.995-.899h14.802l.103.006Z",
        fill: E,
      }),
    ),
  );
}
export function reb(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.145 2.492a4.481 4.481 0 0 1 3.137 1.316c.805.8 1.323 1.91 1.329 3.133.006 1.237-.512 2.503-1.617 3.608l-6.24 6.24c-.611.611-1.358.884-2.101.839a2.85 2.85 0 0 1-1.826-.844 2.849 2.849 0 0 1-.842-1.824c-.046-.744.226-1.491.837-2.102L13.03 7.65a1 1 0 0 1 1.414 1.415l-5.21 5.207c-.224.225-.263.42-.254.566.01.17.097.366.261.53a.853.853 0 0 0 .533.263c.145.008.34-.031.564-.255l6.241-6.241c.773-.773 1.034-1.542 1.03-2.184a2.456 2.456 0 0 0-.739-1.725 2.482 2.482 0 0 0-1.734-.734c-.645-.002-1.412.258-2.177 1.022l-6.241 6.24c-1.163 1.164-1.571 2.38-1.54 3.458.032 1.095.52 2.136 1.303 2.916.782.78 1.826 1.266 2.925 1.298 1.079.03 2.294-.377 3.45-1.533l6.462-6.462a1 1 0 0 1 1.414 1.416l-6.462 6.46c-1.512 1.512-3.247 2.166-4.921 2.119-1.656-.047-3.172-.776-4.28-1.881-1.109-1.105-1.842-2.62-1.89-4.276-.048-1.675.608-3.411 2.125-4.928l6.241-6.242c1.1-1.099 2.364-1.612 3.599-1.607Z",
        fill: E,
      }),
    ),
  );
}
export function AGM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.398 13.11a1 1 0 0 1 1 1v1.75h1.75a1 1 0 1 1 0 2h-1.75v1.75a1 1 0 0 1-2 0v-1.75h-1.75a1 1 0 0 1 0-2h1.75v-1.75a1 1 0 0 1 1-1ZM17.611 3.5A4.89 4.89 0 0 1 22.5 8.389v3.366a6.105 6.105 0 0 0-2-.868V8.389A2.889 2.889 0 0 0 17.611 5.5H6.39A2.889 2.889 0 0 0 3.5 8.389v7.222l.015.295A2.89 2.89 0 0 0 6.389 18.5h6.788c.202.73.534 1.406.972 2H6.39a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V8.388A4.89 4.89 0 0 1 6.39 3.499h11.22Zm-6.857 5.697c.32-.036.712.183 1.495.621l1.28.717c.815.456 1.222.684 1.358.985a1 1 0 0 1 0 .823.64.64 0 0 1-.064.107 6.22 6.22 0 0 0-.21.216c-.225.18-.575.376-1.084.661l-1.28.717c-.783.438-1.175.657-1.495.621a1.002 1.002 0 0 1-.698-.41c-.189-.261-.189-.71-.189-1.607v-1.434c0-.897 0-1.346.189-1.608a1 1 0 0 1 .698-.409Z",
        fill: E,
      }),
    ),
  );
}
export function Z7g(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.894 4v.001a3.079 3.079 0 0 1 3.088 2.665c.006.044.009.09.009.135v6.3c0 .044-.003.09-.01.133-.199 1.475-1.47 2.784-3.087 2.765V16h-1.798l-3.292 7.406a1 1 0 0 1-.913.594 3.7 3.7 0 0 1-3.7-3.7v-2.6h-4.4A2.8 2.8 0 0 1 2 14.48l.001-.002L3.243 6.38A2.8 2.8 0 0 1 6.033 4h12.86ZM6.02 6a.8.8 0 0 0-.8.68v.002l-1.242 8.1a.8.8 0 0 0 .8.918h5.412a1 1 0 0 1 1 1v3.6a1.7 1.7 0 0 0 1.098 1.589l3.202-7.201V6H6.02Zm11.47 8h1.403l.017.001c.47.008.977-.403 1.08-.987v-6.13A1.079 1.079 0 0 0 18.91 6h-1.42v8Z",
        fill: E,
      }),
    ),
  );
}
export function TYA(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.1 0a3.7 3.7 0 0 1 3.7 3.7v2.6h4.4a2.8 2.8 0 0 1 2.788 3.22v.001l-1.242 8.098A2.8 2.8 0 0 1 17.958 20H5.097v-.001a3.078 3.078 0 0 1-3.088-2.665A1 1 0 0 1 2 17.2v-6.3l.009-.134C2.209 9.29 3.479 7.982 5.097 8h1.797L10.187.594l.068-.13A1 1 0 0 1 11.1 0ZM5.08 10c-.47-.008-.977.402-1.08.985v6.13c.094.517.549.894 1.08.885H6.5v-8H5.08Zm3.42-.688V18h9.47a.8.8 0 0 0 .8-.68v-.002l1.242-8.1a.8.8 0 0 0-.801-.918H13.8a1 1 0 0 1-1-1V3.7a1.7 1.7 0 0 0-1.1-1.59L8.5 9.312Z",
        fill: E,
      }),
    ),
  );
}
export function qVh(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10.921 1.666a.9.9 0 0 1 1.1-.398A2.6 2.6 0 0 1 13.704 3.7v3.6a.1.1 0 0 0 .1.1h5.411c.495-.003.967.211 1.292.584l.001.001a1.7 1.7 0 0 1 .397 1.367v.003l-1.242 8.1a1.7 1.7 0 0 1-1.69 1.444v.001H8.504a.9.9 0 0 1-.9-.9V9.31c0-.125.027-.25.078-.365l3.2-7.201.04-.08ZM5.266 9.282a.72.72 0 0 1 .72.72v8a.72.72 0 0 1-.72.72H3.845v-.001a1.798 1.798 0 0 1-1.787-1.475.72.72 0 0 1-.012-.129v-6.13a.72.72 0 0 1 .01-.125c.157-.886.93-1.587 1.789-1.579h1.42Z",
        fill: E,
      }),
    ),
  );
}
export function Che(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.079 22.334a.9.9 0 0 1-1.1.398 2.6 2.6 0 0 1-1.682-2.432v-3.6a.1.1 0 0 0-.1-.1H4.786a1.702 1.702 0 0 1-1.292-.584l-.001-.001a1.7 1.7 0 0 1-.397-1.367v-.003l1.242-8.1a1.7 1.7 0 0 1 1.69-1.444V5.1h9.469a.9.9 0 0 1 .9.9v8.689c0 .125-.027.25-.078.365l-3.2 7.201-.04.08Zm5.655-7.615a.72.72 0 0 1-.72-.72V6a.72.72 0 0 1 .72-.72h1.421v.001c.88-.009 1.63.618 1.787 1.475a.724.724 0 0 1 .012.129v6.13a.727.727 0 0 1-.01.125c-.157.886-.93 1.587-1.789 1.579h-1.42Z",
        fill: E,
      }),
    ),
  );
}
export function iQw(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.48 6.48 2 12 2c5.53 0 10 4.48 10 10s-4.47 10-10 10C6.48 22 2 17.52 2 12Zm9.12-3.79c0-.48.4-.88.88-.88s.87.4.87.88v4.42a.87.87 0 0 1-.87.87.879.879 0 0 1-.88-.87V8.21Zm.89 8.47c-.49 0-.88-.4-.88-.88s.39-.87.87-.87c.49 0 .88.39.88.87s-.39.88-.87.88Z",
        fill: E,
      }),
    ),
  );
}
export function cz0(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.001 4.806c3.061 0 5.66 1.943 6.676 4.66a4.938 4.938 0 0 0-1.8.906c-.676-2.076-2.609-3.566-4.876-3.566-2.42 0-4.46 1.697-4.998 3.992a1 1 0 0 1-.974.773h-.164c-1.523 0-2.775 1.25-2.775 2.811 0 1.562 1.251 2.812 2.775 2.812h6.526v2H6.865c-2.646 0-4.775-2.163-4.775-4.812 0-2.446 1.817-4.478 4.18-4.773.977-2.793 3.616-4.803 6.731-4.803Z",
        fillOpacity: ".48",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M21.305 13.305a.969.969 0 0 1 1.367 1.37L19 18.371a.97.97 0 0 1-1.37-.002l-1.991-2a.968.968 0 0 1 1.371-1.366l1.307 1.312 2.987-3.01h.001Z",
        fill: E,
      }),
    ),
  );
}
export function k3W(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.297 1.855a2 2 0 0 0-2.594 0l-1.654 1.41a2 2 0 0 1-1.139.472l-2.166.172a2 2 0 0 0-1.835 1.835L3.737 7.91a2 2 0 0 1-.472 1.139l-1.41 1.654a2 2 0 0 0 0 2.594l1.41 1.654a2 2 0 0 1 .472 1.139l.172 2.166a2 2 0 0 0 1.835 1.834l2.166.173a2 2 0 0 1 1.139.472l1.654 1.41a2 2 0 0 0 2.594 0l1.654-1.41a2 2 0 0 1 1.139-.472l2.166-.173a2 2 0 0 0 1.834-1.834l.173-2.166a2 2 0 0 1 .472-1.139l1.41-1.654a2 2 0 0 0 0-2.594l-1.41-1.654a2 2 0 0 1-.472-1.139l-.173-2.166a2 2 0 0 0-1.834-1.835l-2.166-.172a2 2 0 0 1-1.139-.472l-1.654-1.41ZM12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
        fill: E,
      }),
    ),
  );
}
export function Wqf(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.501 4.795a1 1 0 0 1-1 1h-6a2.5 2.5 0 0 0-2.5 2.5v6.245a2.5 2.5 0 0 0 2.5 2.5h.736a1 1 0 0 1 1 1v1.163l2.609-1.683a3.003 3.003 0 0 1 1.627-.48h3.277a2.5 2.5 0 0 0 2.5-2.5v-3.1a1 1 0 1 1 2 0v3.1a4.5 4.5 0 0 1-4.5 4.5h-3.277c-.193 0-.38.056-.542.16l-4.152 2.68a1 1 0 0 1-1.542-.84v-2.009A4.5 4.5 0 0 1 2 14.54V8.295a4.5 4.5 0 0 1 4.501-4.5h6a1 1 0 0 1 1 1ZM19.25 1.04a1 1 0 0 1 1 1v1.75H22l.102.005a1 1 0 0 1 0 1.99L22 5.79h-1.75v1.75a1 1 0 1 1-2 0V5.79H16.5a1 1 0 1 1 0-2h1.75V2.04a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function nJB(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.5 2.5A4.5 4.5 0 0 1 22 6.998l.004 7.5a4.5 4.5 0 0 1-4.5 4.503h-5.027a1 1 0 0 0-.542.16l-4.15 2.68A1 1 0 0 1 6.241 21v-2.009a4.5 4.5 0 0 1-4.238-4.49L2 7.003A4.5 4.5 0 0 1 6.5 2.5h11Zm-11 2A2.5 2.5 0 0 0 4 7.001l.004 7.501a2.5 2.5 0 0 0 2.5 2.499h.738a1 1 0 0 1 1 1v1.163l2.609-1.684a2.999 2.999 0 0 1 1.626-.479h5.027a2.5 2.5 0 0 0 2.5-2.502L20 6.999A2.5 2.5 0 0 0 17.5 4.5h-11ZM12 7.2a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H13v1.5a1 1 0 1 1-2 0v-1.5H9.5a1 1 0 1 1 0-2H11V8.2a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function QBz(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3.5A4.89 4.89 0 0 1 22.5 8.389v7.222a4.89 4.89 0 0 1-4.889 4.889H6.39a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V8.388A4.89 4.89 0 0 1 6.39 3.499h11.22ZM6.39 5.5A2.889 2.889 0 0 0 3.5 8.389v7.222l.015.295A2.89 2.89 0 0 0 6.389 18.5H17.61a2.889 2.889 0 0 0 2.889-2.889V8.39a2.889 2.889 0 0 0-2.888-2.89H6.39Zm.89 3.713a.5.5 0 0 1 .5.5v1.595h2.149V9.713a.5.5 0 0 1 .5-.5h.577a.5.5 0 0 1 .5.5v4.574a.5.5 0 0 1-.5.5h-.577a.5.5 0 0 1-.5-.5v-1.674h-2.15v1.674a.5.5 0 0 1-.5.5h-.577a.5.5 0 0 1-.5-.5V9.713a.5.5 0 0 1 .5-.5h.577Zm7.974 0c.616 0 1.157.114 1.624.343.467.228.832.549 1.092.963.265.414.397.908.397 1.481 0 .568-.132 1.062-.397 1.481a2.6 2.6 0 0 1-1.092.963c-.467.228-1.008.343-1.624.343h-2.136a.5.5 0 0 1-.5-.5V9.713a.5.5 0 0 1 .5-.5h2.136Zm-1.059 4.316h.995c.319 0 .595-.059.829-.175.238-.123.424-.298.557-.526a1.65 1.65 0 0 0 .198-.828c0-.324-.065-.6-.198-.828a1.283 1.283 0 0 0-.557-.518 1.765 1.765 0 0 0-.829-.183h-.995v3.058Z",
        fill: E,
      }),
    ),
  );
}
export function R6A(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 3a1 1 0 1 1 2 0v.01h8.66V3h3.519A3.82 3.82 0 0 1 21 6.821V17.18A3.82 3.82 0 0 1 17.179 21H13.66v-.01H5V21a1 1 0 1 1-2 0V3Zm16 14.22a1.982 1.982 0 0 1-1.972 1.79H15.66v-3.33H19v1.54ZM17.22 5c.941.091 1.69.84 1.78 1.78v1.56h-3.34V5h1.56Zm-3.56-.01v14.02H5V4.99h8.66ZM19 10.34h-3.34v3.34H19v-3.34Z",
        fill: E,
      }),
    ),
  );
}
export function zsB(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.5 3A4.5 4.5 0 0 1 22 7.5v7a4.5 4.5 0 0 1-4.5 4.5h-5.028a1 1 0 0 0-.542.16l-4.152 2.68A1 1 0 0 1 6.236 21v-2.009A4.5 4.5 0 0 1 2 14.5v-7A4.5 4.5 0 0 1 6.5 3h11Zm-11 2A2.5 2.5 0 0 0 4 7.5v7A2.5 2.5 0 0 0 6.5 17h.736a1 1 0 0 1 1 1v1.163l2.609-1.683a3 3 0 0 1 1.627-.48H17.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 17.5 5h-11Z",
        fill: E,
      }),
    ),
  );
}
export function R_x(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.544 16.152a.25.25 0 0 1 .474 0l.525 1.587c.15.449.502.8.95.95l1.588.526a.25.25 0 0 1 0 .473l-1.587.526a1.498 1.498 0 0 0-.95.95l-.526 1.586a.25.25 0 0 1-.474 0l-.526-1.586a1.496 1.496 0 0 0-.95-.95l-1.586-.526a.25.25 0 0 1 0-.473l1.587-.527c.448-.148.8-.5.949-.949l.526-1.587ZM8.204 5.09c.197-.596 1.04-.596 1.238 0l1.047 3.16a4.692 4.692 0 0 0 2.977 2.977l3.16 1.047c.596.198.596 1.04 0 1.239l-3.16 1.046a4.692 4.692 0 0 0-2.977 2.978l-1.047 3.16c-.198.595-1.04.595-1.238 0l-1.047-3.16a4.692 4.692 0 0 0-2.978-2.977L1.02 13.512c-.596-.198-.596-1.041 0-1.239l3.16-1.047A4.692 4.692 0 0 0 7.156 8.25l1.047-3.16Zm10.02-3.785a.289.289 0 0 1 .548 0l.792 2.391c.172.519.58.926 1.099 1.098l2.39.793a.288.288 0 0 1 0 .547l-2.39.792c-.52.172-.927.58-1.1 1.098l-.791 2.39a.289.289 0 0 1-.548 0l-.792-2.39a1.731 1.731 0 0 0-1.098-1.098l-2.391-.792a.288.288 0 0 1 0-.547l2.391-.793a1.73 1.73 0 0 0 1.098-1.098l.792-2.391Z",
        fill: E,
      }),
    ),
  );
}
export function LAi(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.324 3.488c.216-.65 1.136-.65 1.352 0l1.275 3.85a4.27 4.27 0 0 0 2.711 2.71l3.85 1.276c.65.216.65 1.136 0 1.352l-3.85 1.275a4.27 4.27 0 0 0-2.71 2.711l-1.276 3.85c-.216.65-1.136.65-1.352 0l-1.275-3.85a4.27 4.27 0 0 0-2.711-2.71l-3.85-1.276c-.65-.216-.65-1.136 0-1.352l3.85-1.275a4.271 4.271 0 0 0 2.71-2.711l1.276-3.85Z",
        fill: E,
      }),
    ),
  );
}
export function Q_P(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.2 4.807c.198-.597 1.042-.597 1.24 0l1.046 3.159a4.692 4.692 0 0 0 2.978 2.977l3.159 1.047c.596.198.596 1.04 0 1.239l-3.16 1.046a4.692 4.692 0 0 0-2.977 2.978l-1.047 3.16c-.197.595-1.041.596-1.239 0l-1.047-3.16a4.69 4.69 0 0 0-2.976-2.978l-3.16-1.046c-.596-.198-.596-1.041 0-1.239l3.16-1.047a4.69 4.69 0 0 0 2.976-2.977L8.2 4.806Zm9.308-3.502a.288.288 0 0 1 .547 0l.792 2.391c.172.52.58.926 1.098 1.098l2.39.793a.288.288 0 0 1 0 .547l-2.39.792c-.518.172-.926.58-1.098 1.098l-.792 2.391a.288.288 0 0 1-.547 0l-.793-2.39a1.73 1.73 0 0 0-1.098-1.1l-2.391-.791a.288.288 0 0 1 0-.547l2.391-.793a1.73 1.73 0 0 0 1.098-1.098l.793-2.391Z",
        fill: E,
      }),
    ),
  );
}
export function E7c(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3A4.89 4.89 0 0 1 22.5 7.889v7.222A4.89 4.89 0 0 1 17.611 20H6.39a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V7.888A4.887 4.887 0 0 1 6.389 3H17.61ZM6.39 5A2.889 2.889 0 0 0 3.5 7.889v7.222l.015.295A2.89 2.89 0 0 0 6.389 18H17.61a2.889 2.889 0 0 0 2.889-2.889V7.89A2.889 2.889 0 0 0 17.611 5H6.39Zm.579 3.027a.5.5 0 0 1 .5.5v2.971h1.735v-2.97a.5.5 0 0 1 .5-.5h.736a.5.5 0 0 1 .5.5v2.97h.657a.5.5 0 0 1 .5.5v.735a.5.5 0 0 1-.5.5h-.658v1.236a.5.5 0 0 1-.5.5h-.735a.5.5 0 0 1-.5-.5v-1.236h-2.97a.5.5 0 0 1-.5-.5V8.527a.5.5 0 0 1 .5-.5h.735Zm6.913 0a.5.5 0 0 1 .5.5v2.104l1.858-2.484a.301.301 0 0 1 .24-.12h1.212a.3.3 0 0 1 .244.476l-2.162 2.995 2.162 2.995a.3.3 0 0 1-.244.476H16.48a.302.302 0 0 1-.24-.12l-1.86-2.483v2.103a.5.5 0 0 1-.5.5h-.67a.5.5 0 0 1-.5-.5V8.527a.5.5 0 0 1 .5-.5h.67Z",
        fill: E,
      }),
    ),
  );
}
export function s2u(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3A4.89 4.89 0 0 1 22.5 7.889v7.222A4.89 4.89 0 0 1 17.611 20H6.39a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V7.888A4.887 4.887 0 0 1 6.389 3H17.61ZM6.39 5A2.889 2.889 0 0 0 3.5 7.889v7.222l.015.295A2.89 2.89 0 0 0 6.389 18H17.61a2.889 2.889 0 0 0 2.889-2.889V7.89A2.889 2.889 0 0 0 17.611 5H6.39Zm3.893 3.027c.315.001.579.112.792.333.214.222.322.497.322.825v1.735c0 .327-.106.601-.32.823a1.059 1.059 0 0 1-.794.333H8.055v1.366h2.84a.5.5 0 0 1 .5.5v.527a.5.5 0 0 1-.5.5h-4.01a.5.5 0 0 1-.5-.5v-2.393c0-.327.107-.601.32-.823.213-.222.478-.333.793-.333h2.228V9.598H6.885a.5.5 0 0 1-.5-.5v-.57a.5.5 0 0 1 .5-.5h3.397Zm3.585 0a.5.5 0 0 1 .5.5v2.104l1.859-2.484a.3.3 0 0 1 .24-.12h1.212a.3.3 0 0 1 .243.476l-2.162 2.995 2.162 2.995a.3.3 0 0 1-.243.476h-1.212a.3.3 0 0 1-.24-.12l-1.859-2.483v2.103a.5.5 0 0 1-.5.5h-.67a.5.5 0 0 1-.5-.5V8.527a.5.5 0 0 1 .5-.5h.67Z",
        fill: E,
      }),
    ),
  );
}
export function Z2o(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3A4.89 4.89 0 0 1 22.5 7.889v7.222A4.89 4.89 0 0 1 17.611 20H6.39a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V7.888A4.887 4.887 0 0 1 6.389 3H17.61ZM6.39 5A2.889 2.889 0 0 0 3.5 7.889v7.222l.015.295A2.89 2.89 0 0 0 6.389 18H17.61a2.889 2.889 0 0 0 2.889-2.889V7.89A2.889 2.889 0 0 0 17.611 5H6.39Zm3.185 3.027a.5.5 0 0 1 .5.5v5.942a.5.5 0 0 1-.5.5h-.67a.5.5 0 0 1-.5-.5v-4.303l-.604.35a.5.5 0 0 1-.683-.184l-.335-.58a.501.501 0 0 1 .183-.684l1.665-.96c.007-.005.016-.008.023-.011a.498.498 0 0 1 .251-.07h.67Zm3.596 0a.5.5 0 0 1 .5.5v2.104l1.858-2.484a.3.3 0 0 1 .24-.12h1.212a.3.3 0 0 1 .244.476l-2.162 2.995 2.162 2.995a.3.3 0 0 1-.244.476H15.77a.3.3 0 0 1-.24-.12l-1.86-2.483v2.103a.5.5 0 0 1-.5.5h-.67a.5.5 0 0 1-.5-.5V8.527a.5.5 0 0 1 .5-.5h.67Z",
        fill: E,
      }),
    ),
  );
}
export function iHo(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.393 2.607a5 5 0 0 1 5 5v4.265A6 6 0 0 0 19.6 11.6c-.07 0-.139.002-.207.004V7.607a3 3 0 0 0-3-3H7.607a3 3 0 0 0-3 3v7.728l3.559-3.69a3.161 3.161 0 0 1 4.357-.184l2.536 2.219a5.992 5.992 0 0 0-1.05 1.74l-2.804-2.454a1.161 1.161 0 0 0-1.6.067l-4.628 4.8a2.998 2.998 0 0 0 2.63 1.56h6.265c.23.738.601 1.414 1.08 2H7.606l-.256-.007a5 5 0 0 1-4.634-3.956l-.068-.064.044-.047a5.01 5.01 0 0 1-.079-.67l-.007-.257V7.607a5 5 0 0 1 5-5h8.786Zm-.704 4.23a1.556 1.556 0 1 1 0 3.112 1.556 1.556 0 0 1 0-3.112Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.96 14.577a.727.727 0 0 1 1.34 0 4.577 4.577 0 0 0 2.395 2.413.737.737 0 0 1 0 1.352 4.577 4.577 0 0 0-2.395 2.413.727.727 0 0 1-1.34 0 4.578 4.578 0 0 0-2.395-2.413.738.738 0 0 1 0-1.352 4.577 4.577 0 0 0 2.394-2.413Z",
        fill: E,
      }),
    ),
  );
}
export function _MP(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.534 1.626c5.489.278 9.854 4.817 9.854 10.374l-.001.023a6.098 6.098 0 0 0-2.04-.836 8.388 8.388 0 1 0-6.613 9.02 6.184 6.184 0 0 0 1.41 1.693c-.992.314-2.048.488-3.144.488l-.535-.014c-5.311-.27-9.57-4.528-9.839-9.84L1.612 12C1.612 6.263 6.263 1.613 12 1.613l.534.013Zm6.425 12.95a.728.728 0 0 1 1.342 0 4.579 4.579 0 0 0 2.394 2.415.737.737 0 0 1 0 1.35 4.578 4.578 0 0 0-2.394 2.414.728.728 0 0 1-1.342 0 4.578 4.578 0 0 0-2.394-2.414.737.737 0 0 1 0-1.35 4.579 4.579 0 0 0 2.394-2.415Zm-8.325-6.06c.444-.047.986.266 2.07.891l1.19.688c1.082.625 1.623.938 1.805 1.346a1.37 1.37 0 0 1 0 1.118c-.181.408-.722.721-1.805 1.347l-1.19.687c-1.084.625-1.626.937-2.07.89a1.375 1.375 0 0 1-.969-.558c-.262-.361-.262-.987-.262-2.237v-1.375c0-1.25 0-1.876.262-2.238.23-.315.582-.518.969-.56Z",
        fill: E,
      }),
    ),
  );
}
export function UqS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3.5A4.89 4.89 0 0 1 22.5 8.389v7.222a4.89 4.89 0 0 1-4.889 4.889H6.39a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V8.388A4.89 4.89 0 0 1 6.39 3.499h11.22ZM6.39 5.5A2.889 2.889 0 0 0 3.5 8.389v7.222l.015.295A2.89 2.89 0 0 0 6.389 18.5H17.61a2.889 2.889 0 0 0 2.889-2.889V8.39a2.889 2.889 0 0 0-2.888-2.89H6.39Zm9.772 2.957a.54.54 0 0 1 .538.54v6.007c0 .297-.24.538-.538.538h-.623a.538.538 0 0 1-.538-.538V8.996c0-.297.24-.539.538-.539h.623Zm-5.749.022a.5.5 0 0 1 .453.29l2.862 6.188a.4.4 0 0 1-.364.568h-.971a.3.3 0 0 1-.272-.174l-.521-1.125H8.39l-.52 1.125a.3.3 0 0 1-.271.174h-.972a.4.4 0 0 1-.363-.568l2.86-6.188a.5.5 0 0 1 .453-.29h.836Zm-1.329 4.247h1.822l-.91-1.971-.912 1.97Z",
        fill: E,
      }),
    ),
  );
}
export function fcI(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.402 20.598c.289 0 .53.239.453.516a1.904 1.904 0 0 1-3.724-.322.185.185 0 0 1 .184-.194h3.087ZM11.988 1.499a7.953 7.953 0 0 1 7.951 7.952 7.943 7.943 0 0 1-3.758 6.752 2.952 2.952 0 0 1-2.943 2.75h-2.237s-.87.003-.87-.953.87-.95.87-.95h2.237l.108-.006c.528-.054.94-.5.941-1.043v-.352a.95.95 0 0 1 .509-.841A6.048 6.048 0 0 0 12.3 3.41l-.312-.008A6.05 6.05 0 0 0 6.143 11s.257.749-.743 1c-.937.251-1.213-1-1.213-1a7.953 7.953 0 0 1 7.8-9.501Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.706 7.7a.316.316 0 0 1 .588 0l.158.381c.27.651.774 1.172 1.407 1.453l.449.2a.332.332 0 0 1 0 .602l-.475.21a2.725 2.725 0 0 0-1.387 1.406l-.154.354a.317.317 0 0 1-.584 0l-.154-.354A2.761 2.761 0 0 0 11 11.13l-.137-.13a2.682 2.682 0 0 0-.696-.453l-.475-.211a.332.332 0 0 1 0-.603l.449-.199a2.729 2.729 0 0 0 1.407-1.453l.158-.382Z",
        fill: E,
      }),
      a.createElement("path", {
        fill: "#00CAE0",
        d: "M8.078 12.57a.944.944 0 0 1 1.347-.002.98.98 0 0 1 .002 1.37L5.43 18.001a.947.947 0 0 1-1.35 0l-2.296-2.339a.978.978 0 0 1 .003-1.369.944.944 0 0 1 1.347.003l1.621 1.65 3.324-3.378Z",
      }),
    ),
  );
}
export function nIM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m8.792 6.807.154-.353a2.73 2.73 0 0 1 1.386-1.407l.475-.211a.331.331 0 0 0 0-.602l-.448-.2a2.729 2.729 0 0 1-1.407-1.453l-.158-.383a.316.316 0 0 0-.588 0l-.159.383a2.729 2.729 0 0 1-1.406 1.453l-.449.2a.332.332 0 0 0 0 .602l.475.21a2.727 2.727 0 0 1 1.387 1.408l.154.353c.113.26.47.26.584 0Zm5.398.832L17 4.829l2.121 2.12-2.824 2.825-2.107-2.135Zm-1.415 1.414-7.442 7.443a1.5 1.5 0 1 0 2.121 2.121l7.43-7.43-2.109-2.134Zm3.219-6.047a1.423 1.423 0 0 1 2.012 0l2.938 2.938a1.423 1.423 0 0 1 0 2.012L8.868 20.03a3.5 3.5 0 1 1-4.95-4.95L15.994 3.007Zm3.108 17.13-.208.477a.427.427 0 0 1-.788 0l-.208-.477a3.68 3.68 0 0 0-1.87-1.898l-.641-.285a.447.447 0 0 1 0-.812l.604-.27a3.682 3.682 0 0 0 1.899-1.96l.213-.516a.427.427 0 0 1 .794 0l.213.515a3.682 3.682 0 0 0 1.899 1.962l.604.269a.447.447 0 0 1 0 .812l-.64.285a3.68 3.68 0 0 0-1.871 1.898Z",
        fill: E,
      }),
    ),
  );
}
export function g7x(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.606 2.25a8.5 8.5 0 0 1 6.676 13.762l3.406 3.406a1 1 0 1 1-1.414 1.414l-3.406-3.406a8.464 8.464 0 0 1-6.666 1.706v-2.036a6.5 6.5 0 1 0-5.096-6.346c0 .084.004.167.007.25H3.112a8.5 8.5 0 0 1 8.494-8.75Z",
        fill: E,
      }),
      a.createElement("path", {
        d: "M7.772 12.57a.944.944 0 0 1 1.348-.002.98.98 0 0 1 .002 1.37l-3.999 4.064a.947.947 0 0 1-1.35 0l-2.295-2.339a.978.978 0 0 1 .002-1.369.944.944 0 0 1 1.348.003l1.621 1.65 3.323-3.378Z",
        fill: "#00CAE0",
      }),
    ),
  );
}
export function wOm(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.61 2.25a8.5 8.5 0 0 1 6.676 13.762l3.406 3.406a1 1 0 0 1-1.414 1.414l-3.406-3.406A8.5 8.5 0 1 1 11.61 2.25Zm0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z",
        fill: E,
      }),
    ),
  );
}
export function Vvj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.509 20.608c.238.05.414.263.345.506a1.904 1.904 0 0 1-3.723-.322.185.185 0 0 1 .184-.194h3.088l.106.01ZM11.989 1.5c4.39 0 7.95 3.56 7.95 7.951a7.943 7.943 0 0 1-3.758 6.752 2.952 2.952 0 0 1-2.943 2.75h-2.5a2.952 2.952 0 0 1-2.943-2.748A7.952 7.952 0 0 1 11.988 1.5Zm0 1.902A6.05 6.05 0 0 0 9.18 14.81a.952.952 0 0 1 .508.841v.351l.006.107c.055.529.5.942 1.043.942h2.5l.108-.006c.528-.054.94-.5.941-1.043v-.352a.95.95 0 0 1 .509-.841A6.048 6.048 0 0 0 12.3 3.41l-.312-.008ZM11.705 7.7a.316.316 0 0 1 .588 0l.158.382c.27.651.774 1.172 1.407 1.453l.449.2a.332.332 0 0 1 0 .602l-.475.21a2.725 2.725 0 0 0-1.387 1.406l-.154.354a.317.317 0 0 1-.584 0l-.154-.354a2.725 2.725 0 0 0-1.387-1.405l-.475-.211a.332.332 0 0 1 0-.603l.449-.199a2.729 2.729 0 0 0 1.407-1.453l.158-.382Z",
        fill: E,
      }),
    ),
  );
}
export function jwT(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2a6 6 0 0 1 6 6v1.292A4 4 0 0 1 20.5 13v5a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-5A4 4 0 0 1 6 9.292V8a6 6 0 0 1 6-6Zm0 11.753a1.747 1.747 0 1 0 0 3.495 1.747 1.747 0 0 0 0-3.495ZM12 4a4 4 0 0 0-4 4v1h8V8a4 4 0 0 0-4-4Z",
        fill: E,
      }),
    ),
  );
}
export function wD9(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2c1.963 0 3.707.944 4.8 2.398A5.979 5.979 0 0 1 18 8v1.292A4 4 0 0 1 20.5 13v5a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4H16V8c0-.902-.298-1.73-.8-2.4A3.992 3.992 0 0 0 12 4a3.992 3.992 0 0 0-3.2 1.6 1 1 0 0 1-1.6-1.202A5.993 5.993 0 0 1 12 2Zm-4.5 9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-9Z",
        fill: E,
      }),
    ),
  );
}
export function c0Z(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.063 2.875c.69 0 1.25.56 1.25 1.25v1.563h1.562a1.25 1.25 0 1 1 0 2.5h-1.563v1.57a1 1 0 0 1-.293.708l-7.553 7.554a1 1 0 0 1-.707.293H8.187v1.562a1.25 1.25 0 1 1-2.5 0v-1.563H4.125a1.25 1.25 0 1 1 0-2.5h1.563V8.189H4.125a1.25 1.25 0 1 1 0-2.5h1.563V4.125a1.25 1.25 0 1 1 2.5 0v1.563h7.624V4.125c0-.69.56-1.25 1.25-1.25Zm-.397 11.395a.427.427 0 0 1 .794 0l.213.515a3.683 3.683 0 0 0 1.898 1.962l.605.269a.448.448 0 0 1 0 .812l-.64.284a3.68 3.68 0 0 0-1.872 1.899l-.208.477a.427.427 0 0 1-.787 0l-.208-.477a3.68 3.68 0 0 0-1.871-1.899l-.64-.284a.448.448 0 0 1 0-.812l.604-.269a3.683 3.683 0 0 0 1.898-1.962l.214-.515Z",
        fill: E,
      }),
    ),
  );
}
export function Nnz(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20.024 11.504a1 1 0 0 1 1.41.004l1.222 1.222a1 1 0 0 1 .005 1.409l-5.709 5.79a.25.25 0 0 1-.178.076h-2.347a.25.25 0 0 1-.25-.25v-2.366a.25.25 0 0 1 .074-.178l5.773-5.707ZM6.94 3.1c.433 0 .813 0 1.124.025.323.026.652.085.971.247a2.5 2.5 0 0 1 1.093 1.093c.162.319.22.648.247.97.025.312.025.692.025 1.125v9.88c0 .433 0 .813-.025 1.124-.026.323-.085.652-.247.971a2.5 2.5 0 0 1-1.093 1.093c-.319.163-.648.22-.97.247-.312.026-.692.025-1.125.025H5.56c-.433 0-.813 0-1.124-.025-.323-.026-.652-.084-.971-.247a2.501 2.501 0 0 1-1.093-1.093c-.162-.319-.22-.648-.247-.97-.025-.312-.025-.692-.025-1.125V6.56c0-.433 0-.813.025-1.124.026-.323.085-.652.247-.971.24-.47.622-.853 1.093-1.093.319-.162.648-.22.97-.247.312-.025.692-.025 1.125-.025h1.38ZM5.56 4.9c-.463 0-.756 0-.978.019-.21.017-.277.046-.3.058a.7.7 0 0 0-.305.305c-.012.023-.04.09-.058.3a13.59 13.59 0 0 0-.019.978v9.88c0 .463 0 .756.019.978.017.21.046.277.058.3a.7.7 0 0 0 .305.305c.023.012.09.04.3.058.222.018.515.019.978.019h1.38c.463 0 .756 0 .978-.019.21-.017.277-.046.3-.058a.7.7 0 0 0 .305-.305c.012-.023.04-.09.058-.3.018-.222.019-.515.019-.978V6.56c0-.463 0-.756-.019-.978-.017-.21-.046-.277-.058-.3a.7.7 0 0 0-.305-.305c-.023-.012-.09-.04-.3-.058A13.574 13.574 0 0 0 6.94 4.9H5.56Zm11.884-1.8c.431 0 .809 0 1.12.025.322.026.651.085.97.247.47.24.853.622 1.093 1.093.163.319.22.648.247.97.025.311.025.689.025 1.12v2.578a3.238 3.238 0 0 0-1.8.388V6.56c0-.463 0-.756-.019-.978-.017-.21-.046-.277-.057-.3a.7.7 0 0 0-.306-.305c-.023-.012-.09-.04-.3-.058a13.588 13.588 0 0 0-.978-.019h-1.38c-.463 0-.756 0-.978.019-.21.017-.277.046-.3.058a.7.7 0 0 0-.305.305c-.012.024-.04.09-.058.3a13.59 13.59 0 0 0-.019.978v7.477l-1.58 1.58a2.951 2.951 0 0 0-.22.251V6.555c0-.431 0-.809.025-1.12.026-.322.085-.651.247-.97a2.51 2.51 0 0 1 1.093-1.093c.319-.162.648-.22.97-.247.311-.025.69-.025 1.12-.025h1.39Z",
        fill: E,
      }),
    ),
  );
}
export function uqE(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function nNz(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.756 15.013A2.5 2.5 0 0 1 11 17.5v2l-.013.256a2.501 2.501 0 0 1-2.231 2.231L8.5 22h-4a2.5 2.5 0 0 1-2.487-2.244L2 19.5v-2A2.5 2.5 0 0 1 4.5 15h4l.256.013Zm11-4A2.5 2.5 0 0 1 22 13.5v6l-.013.256a2.501 2.501 0 0 1-2.231 2.231L19.5 22h-4a2.5 2.5 0 0 1-2.487-2.244L13 19.5v-6a2.5 2.5 0 0 1 2.5-2.5h4l.256.013ZM15.5 13a.5.5 0 0 0-.49.4l-.01.1v6a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-4Zm-11 4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-4ZM8.756 2.013A2.5 2.5 0 0 1 11 4.5v6l-.013.256a2.501 2.501 0 0 1-2.231 2.231L8.5 13h-4a2.5 2.5 0 0 1-2.487-2.244L2 10.5v-6A2.5 2.5 0 0 1 4.5 2h4l.256.013ZM4.5 4a.5.5 0 0 0-.49.4L4 4.5v6a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-4Zm15.256-1.987A2.5 2.5 0 0 1 22 4.5v2l-.013.256a2.501 2.501 0 0 1-2.231 2.231L19.5 9h-4a2.5 2.5 0 0 1-2.487-2.244L13 6.5v-2A2.5 2.5 0 0 1 15.5 2h4l.256.013ZM15.5 4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-4Z",
        fill: E,
      }),
    ),
  );
}
export function SkP(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.75 2.937a.937.937 0 1 0-1.875 0v.313h-10v-.313a.937.937 0 0 0-1.875 0v2.5a.937.937 0 1 0 1.875 0v-.312h10v.312a.937.937 0 1 0 1.875 0v-2.5Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.25 8.25a2.5 2.5 0 0 1 2.5 2.5v8.75a2.5 2.5 0 0 1-2.5 2.5H4.5A2.5 2.5 0 0 1 2 19.5v-8.75a2.5 2.5 0 0 1 2.5-2.5h8.75ZM4.5 10.125h8.75c.345 0 .625.28.625.625v8.75c0 .345-.28.625-.625.625H4.5a.625.625 0 0 1-.625-.625v-8.75c0-.345.28-.625.625-.625Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.625 9.188c0-.518.42-.938.938-.938h2.5a.937.937 0 1 1 0 1.875h-.313v10h.313a.937.937 0 1 1 0 1.875h-2.5a.937.937 0 1 1 0-1.875h.312v-10h-.313a.937.937 0 0 1-.937-.937Z",
        fill: E,
      }),
    ),
  );
}
export function pmH(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.058 3.125a1 1 0 0 1 1 1v1.813h1.816a1 1 0 0 1 0 2h-1.815v8.125h1.814a1 1 0 0 1 0 2H18.06v1.813a1.002 1.002 0 0 1-2.001 0v-1.813h-8.12v1.813a1.001 1.001 0 0 1-2.001 0v-1.813H4.124a1.001 1.001 0 0 1 0-2.001h1.813V7.938H4.124a1.001 1.001 0 0 1 0-2.001h1.813V4.125a1.001 1.001 0 0 1 2.001 0v1.813h8.12V4.125a1 1 0 0 1 1-1Zm-9.12 12.938h8.12V7.938h-8.12v8.125Z",
        fill: E,
      }),
    ),
  );
}
export function n1J(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4 20h3a1 1 0 1 1 0 2H4a2 2 0 0 1-1.99-1.796L2 20v-3a1 1 0 1 1 2 0v3Zm18 0-.01.204a2 2 0 0 1-1.786 1.785l-.204.01h-3a1 1 0 1 1 0-2h3v-3a1 1 0 1 1 2 0v3Zm0-9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h20ZM8 3a1 1 0 0 1-1 1H4v3a1 1 0 1 1-2 0V4a2 2 0 0 1 2-2h3a1 1 0 0 1 1 1Zm12.204-.99A2 2 0 0 1 22 4v3a1 1 0 1 1-2 0V4h-3a1 1 0 1 1 0-2h3l.204.01Z",
        fill: E,
      }),
    ),
  );
}
export function YE5(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3A4.89 4.89 0 0 1 22.5 7.889v8.222A4.89 4.89 0 0 1 17.611 21H6.39a4.889 4.889 0 0 1-4.89-4.889V7.89A4.89 4.89 0 0 1 6.389 3H17.61ZM6.39 5A2.889 2.889 0 0 0 3.5 7.889v8.222A2.889 2.889 0 0 0 6.389 19H17.61a2.889 2.889 0 0 0 2.889-2.889V7.89A2.889 2.889 0 0 0 17.611 5H6.39ZM7 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function zgT(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.898 2.106a1 1 0 0 1 1.155.187L21.71 7.95a1 1 0 0 1-.849 1.696l-1.793-.258-2.957 5.323c.353.82.573 1.651.536 2.483-.047 1.038-.484 1.959-1.295 2.77a1 1 0 0 1-1.414 0l-.096-.094-.265-.266-.925-.924-1.996-1.996-6.167 4.56c-1.143.846-2.578-.585-1.736-1.73l4.548-6.185-1.987-1.988-.918-.918-.264-.263-.094-.094a1.001 1.001 0 0 1 0-1.415c.816-.815 1.765-1.258 2.808-1.31.837-.043 1.666.17 2.465.539l5.306-2.942-.26-1.795a1 1 0 0 1 .54-1.037Zm1.772 3.632a.997.997 0 0 1-.479.615l-6.37 3.531a1 1 0 0 1-.966.002c-.753-.412-1.385-.575-1.909-.548a1.94 1.94 0 0 0-.659.149l.44.44 2.596 2.595a1 1 0 0 1 .098 1.3l-3.53 4.285 4.27-3.542.076-.052a1 1 0 0 1 1.225.149l2.604 2.604.45.449c.082-.205.123-.406.133-.61.022-.515-.142-1.157-.554-1.998a1 1 0 0 1 .023-.926l3.537-6.365.085-.128a.997.997 0 0 1 .53-.35l-1.6-1.6Z",
        fill: E,
      }),
    ),
  );
}
export function yax(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 16 16",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "#F5FBFF",
        opacity: ".6",
        d: "M2.666 12.667c0 .368.299.667.667.667h1.296v1.333H3.333l-.103-.003a2 2 0 0 1-1.895-1.894l-.002-.103V11.37h1.333v1.296Zm0-3.37H1.333V6.703h1.333v2.592Zm1.963-6.63H3.333a.667.667 0 0 0-.667.667V4.63H1.333V3.334a2 2 0 0 1 2-2h1.296v1.333Zm8.037-1.333a2 2 0 0 1 2 2V4.63h-1.333V3.334a.667.667 0 0 0-.667-.667H11.37V1.334h1.296Zm-3.37 1.333H6.703V1.334h2.593v1.333Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "#F5FBFF",
        d: "M12.665 5.333a2 2 0 0 1 2 2v5.333a2 2 0 0 1-2 2H7.332l-.204-.01a2 2 0 0 1-1.796-1.99V7.333a2 2 0 0 1 1.796-1.99l.204-.01h5.333ZM7.332 6.666a.667.667 0 0 0-.667.667v5.333c0 .368.299.667.667.667h5.333a.667.667 0 0 0 .667-.667V7.333a.667.667 0 0 0-.667-.667H7.332Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "#F5FBFF",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m10.341 8.655-.208-.563a.142.142 0 0 0-.266 0l-.208.563a1.7 1.7 0 0 1-1.004 1.004l-.562.208a.142.142 0 0 0 0 .266l.562.208a1.7 1.7 0 0 1 1.004 1.004l.208.563c.046.123.22.123.266 0l.208-.563a1.7 1.7 0 0 1 1.005-1.004l.562-.208a.142.142 0 0 0 0-.266l-.563-.208a1.7 1.7 0 0 1-1.004-1.004Z",
        fill: E,
      }),
    ),
  );
}
export function ifr(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 16 16",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "#F5FBFF",
        d: "M2.666 12.667c0 .368.299.667.667.667h1.296v1.333H3.333l-.103-.003a2 2 0 0 1-1.895-1.894l-.002-.103V11.37h1.333v1.296Zm0-3.37H1.333V6.703h1.333v2.592Zm1.963-6.63H3.333a.667.667 0 0 0-.667.667V4.63H1.333V3.334a2 2 0 0 1 2-2h1.296v1.333Zm4.667 0H6.703V1.334h2.593v1.333Z",
        opacity: ".6",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "#F5FBFF",
        d: "M12.768 5.336a2 2 0 0 1 1.897 1.997v5.334l-.002.103a2 2 0 0 1-1.895 1.894l-.103.003H7.332a2 2 0 0 1-1.997-1.897l-.003-.103V7.334a2 2 0 0 1 2-2h5.333l.103.002Zm-5.436 1.33a.667.667 0 0 0-.667.667v5.334c0 .368.299.667.667.667h5.333a.667.667 0 0 0 .667-.667V7.334a.667.667 0 0 0-.667-.667H7.332Zm2.535 1.427a.142.142 0 0 1 .266 0l.208.562a1.7 1.7 0 0 0 1.004 1.004l.563.208a.142.142 0 0 1 0 .266l-.563.208a1.7 1.7 0 0 0-1.004 1.004l-.208.563a.142.142 0 0 1-.266 0l-.208-.563a1.7 1.7 0 0 0-1.004-1.004l-.563-.208a.142.142 0 0 1 0-.266l.563-.208a1.7 1.7 0 0 0 1.004-1.004l.208-.562Z",
        fill: E,
      }),
      a.createElement("circle", {
        fill: "#00CAE0",
        r: "2",
        cy: "2",
        cx: "14",
      }),
    ),
  );
}
export function tlL(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9.275 13.722a1 1 0 0 1 1 1L10.276 21a1 1 0 1 1-2 0v-3.864l-3.659 3.66a1 1 0 1 1-1.414-1.414l3.658-3.661H3a1 1 0 0 1 0-2h6.275ZM14.724 2a1 1 0 0 1 1 1v3.863l3.659-3.66a1 1 0 1 1 1.414 1.415l-3.66 3.66L21 8.28a1 1 0 0 1 0 2h-6.275a1 1 0 0 1-1-1L13.724 3a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function o2d(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.789 13.926c.393.521.817 1.043 1.272 1.557l-.245.246L4.998 19l3.271-.817.245-.246a26.13 26.13 0 0 0 1.556 1.272l-.583.584a1 1 0 0 1-.464.263l-5.157 1.29a1 1 0 0 1-1.212-1.213l1.289-5.157a.998.998 0 0 1 .263-.465l.583-.584ZM17.263 3a3.738 3.738 0 0 1 3.45 2.305 3.736 3.736 0 0 1-.81 4.07l-7.474 7.472c1.047.755 2.052 1.33 2.945 1.705.85.357 1.503.494 1.939.501.23.004.348-.028.397-.047.02-.05.052-.167.048-.398-.007-.436-.145-1.09-.5-1.938a13.93 13.93 0 0 0-1.136-2.113c.051-.042.102-.085.149-.133l1.302-1.301c2.107 3.131 2.824 6.036 1.557 7.303-1.757 1.757-6.665-.302-10.96-4.597-4.296-4.296-6.354-9.203-4.596-10.96.269-.27.612-.45 1.015-.545-.509 1.776.427 4.553 2.442 7.36l7.592-7.59c.7-.7 1.65-1.094 2.64-1.094Zm0 2c-.46 0-.901.182-1.226.507L8.28 13.263a24.021 24.021 0 0 0 2.452 2.454l7.758-7.756a1.737 1.737 0 0 0 0-2.454A1.737 1.737 0 0 0 17.263 5ZM8.312 2.063a.484.484 0 0 1 .876 0l.468 1.003c.16.343.435.618.778.778l1.003.468a.484.484 0 0 1 0 .876l-1.003.468c-.343.16-.618.435-.778.778l-.468 1.002a.483.483 0 0 1-.876 0l-.468-1.002a1.611 1.611 0 0 0-.778-.778l-1.002-.468a.483.483 0 0 1 0-.876l1.002-.468c.343-.16.618-.435.778-.778l.468-1.003Z",
        fill: E,
      }),
    ),
  );
}
export function W45(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.626 12.314c1.58-1.775 4.308-1.69 5.99-.01 1.741 1.742 2.005 4.83.133 6.433l-.205.169c-.971.77-2.175 1.3-3.996 1.328l-.4-.002c-1.233-.03-2.18-.131-2.904-.263l-.297-.059c-1.184-.249-1.684-.573-1.862-.724A.576.576 0 0 1 4 19.102c.714-.727 1.105-1.562 1.414-2.42l.29-.86c.307-.942.61-1.875 1.225-2.685l.127-.16c.183-.222.375-.444.57-.663Zm4.575 1.404c-.973-.972-2.36-.883-3.08-.074-.183.204-.36.409-.526.61-.42.505-.645 1.128-.99 2.187-.152.469-.33 1.03-.586 1.626.556.079 1.27.143 2.175.165 1.69.04 2.553-.415 3.254-1.015.386-.33.62-.865.591-1.561a2.977 2.977 0 0 0-.838-1.938Zm5.674-10.352c.781-.78 2.116-.23 2.12.875l.015 5.838a1.968 1.968 0 0 1-.576 1.396l-3.184 3.184-.57-1.39a5.274 5.274 0 0 0-1.157-1.719 5.27 5.27 0 0 0-1.716-1.155l-1.39-.57 6.458-6.459ZM14.84 9.23a7.477 7.477 0 0 1 2.005 2.006l1.164-1.164-.011-4L14.84 9.23Z",
        fill: E,
      }),
    ),
  );
}
export function xBM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M3.167 19.667A1.167 1.167 0 1 1 3.166 22a1.167 1.167 0 0 1 .001-2.333ZM7.833 18.5a1.167 1.167 0 1 1 0 2.334 1.167 1.167 0 0 1 0-2.334Zm5.23-15.505a3.4 3.4 0 0 1 4.806 0l3.135 3.136a3.399 3.399 0 0 1 0 4.806l-7.067 7.068a3.4 3.4 0 0 1-4.806 0l-3.136-3.136a3.4 3.4 0 0 1 .001-4.808l7.066-7.066ZM3.166 15a1.167 1.167 0 1 1-.001 2.333A1.167 1.167 0 0 1 3.167 15Zm4.243-3.524a1.4 1.4 0 0 0 0 1.979l3.135 3.135a1.4 1.4 0 0 0 1.978 0l1.827-1.826L9.236 9.65 7.41 11.476Zm9.045-7.066a1.4 1.4 0 0 0-1.978 0L10.65 8.236l5.114 5.113 3.826-3.826a1.399 1.399 0 0 0 0-1.978L16.455 4.41Z",
        fill: E,
      }),
    ),
  );
}
export function hvN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20.186 7.249c.664-.67 1.799-.196 1.801.75l.013 5a1.69 1.69 0 0 1-.49 1.196l-3.744 3.965c-.063.857-.41 1.671-1.087 2.255l-.174.144c-.826.661-1.849 1.114-3.396 1.138h-.34c-1.198-.03-2.079-.14-2.721-.276-1.006-.214-1.431-.492-1.583-.621l-.072-.072c.607-.622.94-1.338 1.202-2.072l.246-.737c.278-.86.552-1.713 1.148-2.438l.486-.567a3.282 3.282 0 0 1 2.606-1.112l6.105-6.553Zm-15.52 6.98a.427.427 0 0 1 .793 0l.214.516a3.683 3.683 0 0 0 1.898 1.962l.605.268a.448.448 0 0 1 0 .813l-.64.284a3.68 3.68 0 0 0-1.872 1.899l-.208.477a.427.427 0 0 1-.787 0l-.208-.477a3.68 3.68 0 0 0-1.871-1.899l-.64-.284a.448.448 0 0 1 0-.813l.604-.268a3.682 3.682 0 0 0 1.898-1.962l.213-.516ZM14.8 15.807c-.71-.377-1.517-.22-1.976.298-.154.175-.303.349-.444.52-.344.419-.533.937-.826 1.846-.121.375-.264.822-.461 1.3.45.059 1.014.109 1.718.125 1.407.033 2.114-.346 2.692-.844.303-.261.496-.693.473-1.273a2.478 2.478 0 0 0-.144-.719 5.797 5.797 0 0 0-.158-.285l-.174-.274a2.242 2.242 0 0 0-.7-.694Zm1.462-1.412c.32.258.627.583.902.995.066.1.127.2.186.296L20 12.882l-.007-2.492-3.731 4.005ZM2.17 10.198a1.004 1.004 0 0 1 1.2-.752.998.998 0 0 1 .743 1.201c-.065.28-.114.565-.15.85a.998.998 0 1 1-1.982-.24c.044-.356.108-.71.189-1.059Zm2.458-4.624a.998.998 0 0 1 1.412-.052c.402.377.422 1.01.046 1.415-.196.21-.38.433-.552.662a1 1 0 0 1-1.4.204A1.004 1.004 0 0 1 3.94 6.4c.214-.286.444-.563.689-.826Zm12.025-.942a1 1 0 0 1 1.4-.192c.284.216.555.45.815.697.4.379.416 1.012.036 1.415a.997.997 0 0 1-1.41.042 8.1 8.1 0 0 0-.656-.559 1.004 1.004 0 0 1-.185-1.403ZM9.071 2.805a.994.994 0 0 1 1.243.666 1.008 1.008 0 0 1-.67 1.25 8.236 8.236 0 0 0-.81.294.997.997 0 0 1-1.309-.533 1.006 1.006 0 0 1 .538-1.311 10.218 10.218 0 0 1 1.008-.366Zm4.164-.351c.356.046.71.111 1.056.194a1.004 1.004 0 0 1-.473 1.948 8.017 8.017 0 0 0-.844-.156.997.997 0 0 1-.859-1.12 1.005 1.005 0 0 1 1.12-.866Z",
        fill: E,
      }),
    ),
  );
}
export function TcU(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.67 16.55a1 1 0 0 1 1.414 0l2.122 2.122a.996.996 0 0 1 .124.151l.02.033a.952.952 0 0 1 .116.273l.014.055a1 1 0 0 1 .015.134c.001.02.004.04.004.06 0 .013-.002.025-.003.037 0 .022 0 .044-.003.066a.996.996 0 0 1-.14.413l-.025.042-.015.021a1.001 1.001 0 0 1-.107.129l-2.122 2.121a1 1 0 0 1-1.414-1.414l.414-.414h-4.211a1 1 0 0 1 .001-2h4.21l-.414-.414a1.001 1.001 0 0 1 0-1.415ZM17.61 3.5a4.89 4.89 0 0 1 4.889 4.889v7.222c0 .465-.066.914-.188 1.34L20.5 15.14V8.39a2.889 2.889 0 0 0-2.889-2.89H6.39A2.89 2.89 0 0 0 3.5 8.389v7.222l.015.295A2.89 2.89 0 0 0 6.389 18.5h4.616a2.998 2.998 0 0 0 .087 2H6.389a4.889 4.889 0 0 1-4.882-4.638l-.007-.25V8.388A4.89 4.89 0 0 1 6.389 3.5H17.61Zm-6.857 5.697c.32-.036.712.183 1.495.621l1.28.717c.815.456 1.222.684 1.358.985a1 1 0 0 1 0 .823c-.136.3-.543.528-1.358.984l-1.28.717c-.783.438-1.175.657-1.495.621a1.002 1.002 0 0 1-.698-.41c-.189-.261-.189-.71-.189-1.607v-1.434c0-.897 0-1.346.189-1.608a1 1 0 0 1 .698-.409Z",
        fill: E,
      }),
    ),
  );
}
export function gK1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.67 16.55a1 1 0 0 1 1.414 0l2.122 2.12c.046.047.088.099.124.153l.004.005.044.073.004.01c.037.069.064.143.084.218l.014.054c.01.052.014.105.016.157 0 .012.003.025.003.038 0 .012-.002.024-.003.035 0 .022 0 .045-.003.067a.997.997 0 0 1-.14.413l-.025.043a1.007 1.007 0 0 1-.122.149l-2.122 2.122a1 1 0 0 1-1.414-1.414l.415-.415h-4.212a1 1 0 0 1 .001-2h4.21l-.414-.414a1 1 0 0 1 0-1.414Zm.813-14.18A2 2 0 0 1 21 4.301v11.336l-.501-.501A2.985 2.985 0 0 0 19 14.324V9.631l-10 2.5V18a4 4 0 1 1-2-3.464V6.584a1.5 1.5 0 0 1 1.113-1.45l10.37-2.764ZM5 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4-9.031v3.1l10-2.5V4.302L9 6.969Z",
        fill: E,
      }),
    ),
  );
}
export function KD9(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.5 2A4.5 4.5 0 0 1 20 6.5v11a4.5 4.5 0 0 1-4.5 4.5H9a1 1 0 0 1 0-2h6.5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 4h-7A2.5 2.5 0 0 0 6 6.5V13a1 1 0 0 1-2 0V6.5A4.5 4.5 0 0 1 8.5 2h7ZM14 11a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2Zm0-4a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2h4Z",
        fill: E,
      }),
      a.createElement("path", {
        fill: "#00CAE0",
        d: "M8.078 14.57a.944.944 0 0 1 1.347-.002.98.98 0 0 1 .002 1.37L5.43 20.001a.947.947 0 0 1-1.35 0l-2.296-2.339a.978.978 0 0 1 .003-1.369.944.944 0 0 1 1.347.003l1.621 1.65 3.324-3.378Z",
      }),
    ),
  );
}
export function zLd(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 11a1 1 0 1 1 0 2h-2a1 1 0 0 1 0-2h2Zm2-4a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2h4Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.5 2A4.5 4.5 0 0 1 20 6.5v11a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 17.5v-11A4.5 4.5 0 0 1 8.5 2h7Zm-7 2A2.5 2.5 0 0 0 6 6.5v11A2.5 2.5 0 0 0 8.5 20h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 15.5 4h-7Z",
        fill: E,
      }),
    ),
  );
}
export function cmu(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20 9.791a1 1 0 0 1 1 1 8.45 8.45 0 0 1-.69 3.342 8.69 8.69 0 0 1-1.96 2.823 9.031 9.031 0 0 1-2.918 1.878 9.25 9.25 0 0 1-2.432.6V21h3.571a1 1 0 0 1 0 2H7.43a1 1 0 0 1 0-2H11v-1.565a9.25 9.25 0 0 1-2.432-.601 9.031 9.031 0 0 1-2.919-1.878 8.69 8.69 0 0 1-1.959-2.823A8.45 8.45 0 0 1 3 10.79a1 1 0 1 1 2 0c0 .874.179 1.742.527 2.552a6.69 6.69 0 0 0 1.51 2.173 7.028 7.028 0 0 0 2.272 1.46 7.274 7.274 0 0 0 5.382 0 7.029 7.029 0 0 0 2.273-1.46 6.691 6.691 0 0 0 1.509-2.173c.348-.81.527-1.678.527-2.552a1 1 0 0 1 1-1Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.481c2.612 0 5 1.844 5 4.43v5.142c0 2.585-2.388 4.428-5 4.428s-5-1.843-5-4.428V5.91c0-2.585 2.388-4.429 5-4.429Zm0 2c-1.807 0-3 1.226-3 2.43v5.142c0 1.202 1.193 2.428 3 2.428s3-1.226 3-2.428V5.91c0-1.203-1.193-2.429-3-2.429Z",
        fill: E,
      }),
    ),
  );
}
export function DRY(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("circle", {
        cx: "21",
        cy: "3",
        r: "3",
        fill: "#00CAE0",
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.015 2.6a6.003 6.003 0 0 0 .202 2H7.6a3 3 0 0 0-3 3v8.8a3 3 0 0 0 3 3h8.8a3 3 0 0 0 3-3V8.782a6.003 6.003 0 0 0 2 .202V16.4a5 5 0 0 1-5 5H7.6a5 5 0 0 1-5-5V7.6a5 5 0 0 1 5-5h7.415ZM16.3 7.4a.8.8 0 0 1 .8.8v1.5a.8.8 0 0 1-1.6 0V9h-2.7v6.74H14a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1 0-1.6h1.2V9H8.5v.7a.8.8 0 0 1-1.6 0V8.2a.8.8 0 0 1 .8-.8h8.6Z",
        fill: E,
      }),
    ),
  );
}
export function ThK(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "m20.498 8.652-.09.091a3.377 3.377 0 0 1-4.754 0 3.336 3.336 0 0 1 0-4.74l.435-.432a5.367 5.367 0 0 0-.868-.071c-2.923 0-5.28 2.35-5.28 5.234 0 .754.161 1.469.449 2.114a1 1 0 0 1-.21 1.117l-6.284 6.238a1.335 1.335 0 0 0 0 1.9c.534.529 1.4.529 1.934 0l6.34-6.294.112-.096a1 1 0 0 1 .964-.123 5.302 5.302 0 0 0 1.975.379c2.922 0 5.279-2.35 5.279-5.235l-.002-.082Zm2.002.082c0 4.002-3.266 7.235-7.28 7.235a7.323 7.323 0 0 1-2.083-.302l-5.898 5.856a3.376 3.376 0 0 1-4.752 0 3.336 3.336 0 0 1 0-4.739l5.82-5.78a7.187 7.187 0 0 1-.366-2.27c0-4.002 3.266-7.234 7.28-7.234 1.135 0 2.213.26 3.174.723a1 1 0 0 1 .27 1.61l-1.601 1.59a1.335 1.335 0 0 0 0 1.9c.533.53 1.4.53 1.934 0l1.426-1.416.096-.084a1 1 0 0 1 1.548.452c.28.77.432 1.598.432 2.46Z",
        fill: E,
      }),
    ),
  );
}
export function cbs(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M11 3a1 1 0 1 1 0 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a1 1 0 1 1 2 0v4a4 4 0 0 1-3.794 3.995L17 21H7l-.206-.005a4.001 4.001 0 0 1-3.79-3.789L3 17V7a4 4 0 0 1 4-4h4Zm7.21 0A2.79 2.79 0 0 1 21 5.79a2.787 2.787 0 0 1-.816 1.97l-7.73 7.73a1.01 1.01 0 0 1-.465.263l-3.372.843a1 1 0 0 1-1.213-1.213l.843-3.372c.044-.176.136-.337.264-.465l7.728-7.73A2.789 2.789 0 0 1 18.211 3Zm0 2a.79.79 0 0 0-.557.231l-7.533 7.533-.372 1.487 1.487-.372 7.534-7.532a.791.791 0 0 0 .171-.86.791.791 0 0 0-.73-.487Z",
        "data-follow-fill": "currentColor",
        fill: E,
      }),
    ),
  );
}
export function _Ep(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.5 19a1 1 0 1 1 0 2h-15a1 1 0 1 1 0-2h15ZM9.5 4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1Zm6 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1Z",
        fill: E,
      }),
    ),
  );
}
export function j8g(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5.8 17A1.2 1.2 0 0 1 7 18.2v1.6A1.2 1.2 0 0 1 5.8 21H4.2A1.2 1.2 0 0 1 3 19.8v-1.6A1.2 1.2 0 0 1 4.2 17h1.6Zm7 0a1.2 1.2 0 0 1 1.2 1.2v1.6a1.2 1.2 0 0 1-1.2 1.2h-1.6a1.2 1.2 0 0 1-1.2-1.2v-1.6a1.2 1.2 0 0 1 1.2-1.2h1.6Zm7 0a1.2 1.2 0 0 1 1.2 1.2v1.6a1.2 1.2 0 0 1-1.2 1.2h-1.6a1.2 1.2 0 0 1-1.2-1.2v-1.6a1.2 1.2 0 0 1 1.2-1.2h1.6Zm-14-7A1.2 1.2 0 0 1 7 11.2v1.6A1.2 1.2 0 0 1 5.8 14H4.2A1.2 1.2 0 0 1 3 12.8v-1.6A1.2 1.2 0 0 1 4.2 10h1.6Zm7 0a1.2 1.2 0 0 1 1.2 1.2v1.6a1.2 1.2 0 0 1-1.2 1.2h-1.6a1.2 1.2 0 0 1-1.2-1.2v-1.6a1.2 1.2 0 0 1 1.2-1.2h1.6Zm7 0a1.2 1.2 0 0 1 1.2 1.2v1.6a1.2 1.2 0 0 1-1.2 1.2h-1.6a1.2 1.2 0 0 1-1.2-1.2v-1.6a1.2 1.2 0 0 1 1.2-1.2h1.6Zm-14-7A1.2 1.2 0 0 1 7 4.2v1.6A1.2 1.2 0 0 1 5.8 7H4.2A1.2 1.2 0 0 1 3 5.8V4.2A1.2 1.2 0 0 1 4.2 3h1.6Zm7 0A1.2 1.2 0 0 1 14 4.2v1.6A1.2 1.2 0 0 1 12.8 7h-1.6A1.2 1.2 0 0 1 10 5.8V4.2A1.2 1.2 0 0 1 11.2 3h1.6Zm7 0A1.2 1.2 0 0 1 21 4.2v1.6A1.2 1.2 0 0 1 19.8 7h-1.6A1.2 1.2 0 0 1 17 5.8V4.2A1.2 1.2 0 0 1 18.2 3h1.6Z",
        fill: E,
      }),
    ),
  );
}
export function cSG(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5 4a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm10 9.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h5Zm5-6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h10Z",
        fill: E,
      }),
    ),
  );
}
export function LU1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19 4a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm-5 9.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h5Zm0-6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h10Z",
        fill: E,
      }),
    ),
  );
}
export function tWV(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 4a1 1 0 0 1 1 1v2.5h5a1 1 0 0 1 1.001 1v1a1 1 0 0 1-1.001 1h-5v3h2.621a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H13V20a1 1 0 1 1-2 0v-3.5H8.621a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H11v-3H6.001a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1H11V5a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function AWf(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.5 18a1 1 0 1 1 0 2h-15a1 1 0 1 1 0-2h15Zm-4-7.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h7Zm4-6.5a1 1 0 1 1 0 2h-15a1 1 0 0 1 0-2h15Z",
        fill: E,
      }),
    ),
  );
}
export function ry2(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.501 5a1 1 0 0 1 .999 1v5h3a1 1 0 1 1 0 2h-3v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-.999-1v-5H10.5v2.618a1 1 0 0 1-1 1h-.999a1 1 0 0 1-1-1V13H4.5a1 1 0 1 1 0-2h3.001V8.618a1 1 0 0 1 1-1h1a1 1 0 0 1 .999 1V11h3.001V6a1 1 0 0 1 1-1h1Z",
        fill: E,
      }),
    ),
  );
}
export function k52(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M5 3.5a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0v-15a1 1 0 0 1 1-1Zm14 0a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0v-15a1 1 0 0 1 1-1Zm-6.5 4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1Z",
        fill: E,
      }),
    ),
  );
}
export function gYA(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9.5 9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h1Zm6 0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1ZM20 4a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2h15Z",
        fill: E,
      }),
    ),
  );
}
export function j35(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.56 1a3 3 0 0 1 2.097.855l4.44 4.342A3 3 0 0 1 21 8.342V20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h7.56ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-3a3 3 0 0 1-3-3V3H6Zm9.161 7.768a.75.75 0 0 1 .589.732V18a.75.75 0 0 1-1.5 0v-3.086l-1.57 3.4a.75.75 0 0 1-1.36 0l-1.57-3.4V18a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 1.43-.315L12 16.21l2.32-5.025a.75.75 0 0 1 .841-.417ZM15 6a1 1 0 0 0 1 1h2.058L15 4.01V6Z",
        fill: E,
      }),
    ),
  );
}
export function Aiu(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M13.56 1a3 3 0 0 1 2.097.855l4.44 4.342A3 3 0 0 1 21 8.342V20a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h7.56ZM6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-3a3 3 0 0 1-3-3V3H6Zm5.55 6.904h.02v.002c.368.013.724.172.978.438l.106.125.007.008c.278.386.352.898.331 1.421-.019.477-.124 1.033-.3 1.66a6.951 6.951 0 0 0 1.102 1.438 8.26 8.26 0 0 1 1.379-.13h.012c.67.014 1.18.179 1.518.506.33.32.407.708.395.995 0 .313-.078.599-.244.837a1.329 1.329 0 0 1-.593.464c-.387.159-.822.151-1.013.151h-.022l-.022-.002a3.809 3.809 0 0 1-1.948-.7c-.824.198-1.62.465-2.422.786-.366.626-.734 1.137-1.11 1.503-.404.395-.884.694-1.424.694-.726 0-1.4-.587-1.4-1.377 0-.095.007-.26.086-.463.077-.197.209-.396.409-.598.367-.372 1.003-.794 2.095-1.282a17.19 17.19 0 0 0 1.112-2.605 7.816 7.816 0 0 1-.463-1.245 3.874 3.874 0 0 1-.144-.946c-.003-.31.048-.657.227-.967l.054-.092c.278-.428.76-.643 1.248-.62v-.003l.027.002Zm-2.4 8.143c-.376.15-1.113.516-.9.726.213.21.7-.402.9-.726Zm2.599-3.158c-.318.159-.627 1.383-.8 1.73.049-.119 1.4-.302 1.8-.503a7.679 7.679 0 0 1-1-1.227Zm3.4 1.328c-.225 0-.426 0-.651.05.25.125.5.176.75.2.175.026.413.027.5-.05.087-.077-.1-.2-.6-.2Zm.42-.719a2.394 2.394 0 0 0-.187-.022l.186.022Zm-3.995-4.243c-.074-.168-.12-.125-.175.024-.054.15-.025.878.15 1.279.15-.426.1-1.134.025-1.303ZM15 6a1 1 0 0 0 1 1h2.058L15 4.01V6Z",
        fill: E,
      }),
    ),
  );
}
export function lP$(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.306 19.758Zm-.234-15.086c.608 0 1.103.172 1.443.467.336.292.539.721.539 1.273v.442l.29-.149 3.458-1.77v2.588L12.84 12.12l.349.178 8.612 4.372v2.63l-3.46-1.788-.291-.152v.489c0 .539-.2.961-.537 1.252-.34.293-.837.464-1.445.464H4.184c-.644 0-1.137-.172-1.467-.463-.327-.287-.515-.71-.515-1.253v-2.937l5.144-2.614.352-.18-5.496-2.764V6.412c0-.557.188-.984.514-1.274.329-.293.822-.466 1.468-.466h11.888Zm1.932 14.147Zm-7.839-5.37-6.47 3.285.09.378h12.918l.09-.378-6.447-3.286-.091-.046-.09.046Zm6.538 3.463h-.002l-6.446-3.285-6.47 3.285 6.47-3.286 6.448 3.286Zm-9.45-4.793h.002-.001ZM3.786 7.126l-.09.379 6.56 3.31 6.492-3.311-.09-.378H3.784ZM17.782 5.12v.001Zm-1.212-.608Z",
        fill: E,
      }),
    ),
  );
}
export function vW(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.012 20a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2h4ZM12 1.451a8 8 0 0 1 8 8 7.99 7.99 0 0 1-3.76 6.781 2.999 2.999 0 0 1-2.99 2.769h-2.5a3 3 0 0 1-2.99-2.769A7.99 7.99 0 0 1 4 9.452a8 8 0 0 1 8-8Zm0 2a6 6 0 0 0-2.785 11.314 1 1 0 0 1 .535.885v.351a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-.35a1 1 0 0 1 .535-.886A6 6 0 0 0 12 3.452Z",
        fill: E,
      }),
    ),
  );
}
export function GUE(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.685 2a2.5 2.5 0 0 1 2.5 2.5v2.99a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H4.5a.5.5 0 0 0-.5.5v6.48h3.618l-.638-.636A1 1 0 0 1 8.395 8.93l2.386 2.385a1 1 0 0 1 0 1.415l-2.386 2.386a1 1 0 0 1-1.415-1.414l.722-.722H4v6.482a.5.5 0 0 0 .5.5h4.185a.5.5 0 0 0 .5-.5V16.47a1 1 0 0 1 2 0v2.99a2.5 2.5 0 0 1-2.5 2.5H4.5a2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 4.5 2h4.185Zm10.777 0a2.5 2.5 0 0 1 2.5 2.5v14.962a2.5 2.5 0 0 1-2.5 2.5h-4.185a2.5 2.5 0 0 1-2.5-2.5V16.47a1 1 0 0 1 2 0v2.99a.5.5 0 0 0 .5.5h4.185a.5.5 0 0 0 .5-.5v-6.48h-3.603l.722.721a1 1 0 0 1-1.413 1.415L13.28 12.73a1 1 0 0 1 .001-1.414l2.386-2.385a1 1 0 1 1 1.414 1.414l-.637.636h3.518V4.5a.5.5 0 0 0-.5-.5h-4.185a.5.5 0 0 0-.5.5v2.99a1 1 0 0 1-2 0V4.5a2.5 2.5 0 0 1 2.5-2.5h4.185Z",
        fill: E,
      }),
    ),
  );
}
export function pm_(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.67 17.893a1 1 0 0 1 1.414 0l2.121 2.12a1.01 1.01 0 0 1 .248 1.002.987.987 0 0 1-.126.263.996.996 0 0 1-.122.15l-2.121 2.122a1 1 0 0 1-1.414-1.415l.414-.414h-4.211a1 1 0 0 1 0-2h4.211l-.414-.414a1 1 0 0 1 0-1.414ZM13.56.8c.836 0 1.64.328 2.237.912l4.44 4.342a3.202 3.202 0 0 1 .963 2.288v7.99l-.28-.28a3.586 3.586 0 0 0-2.12-1.029V9.201H16a3.2 3.2 0 0 1-3.2-3.2v-2.8H6a.8.8 0 0 0-.8.8v16a.8.8 0 0 0 .8.8h4.274c.02.93.394 1.772.992 2.4H6a3.201 3.201 0 0 1-3.2-3.2v-16A3.2 3.2 0 0 1 6 .801h7.56ZM12 15.8a1.2 1.2 0 0 1 1.184 1.386 3.59 3.59 0 0 0-1.881 1.014H9a1.2 1.2 0 0 1 0-2.4h3Zm3-4a1.2 1.2 0 0 1 0 2.4H9a1.2 1.2 0 0 1 0-2.4h6Zm.2-5.8a.8.8 0 0 0 .8.8h1.567L15.2 4.484V6Z",
        fill: E,
      }),
    ),
  );
}
export function obj(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.9 19.3a1.1 1.1 0 0 1 0 2.2H5.1a1.1 1.1 0 0 1 0-2.2h13.8ZM17 2.898a1.1 1.1 0 0 1 1.1 1.1v7a6.1 6.1 0 1 1-12.2 0v-7a1.1 1.1 0 1 1 2.2 0v7a3.9 3.9 0 0 0 7.8 0v-7a1.1 1.1 0 0 1 1.1-1.1Z",
        fill: E,
      }),
    ),
  );
}
export function TNc(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20 11a1 1 0 1 1 0 2h-2.398c.567.87.898 1.889.898 3 0 3.439-3.151 6-6.74 6-2.688 0-5.08-1.41-6.154-3.55a1.001 1.001 0 0 1 1.788-.897C8.092 18.943 9.744 20 11.76 20c2.751 0 4.739-1.916 4.739-4 0-1.15-.605-2.246-1.608-3H4a1 1 0 1 1 0-2h16Zm-7.854-9c2.53 0 4.857 1.257 5.764 3.253a1 1 0 0 1-1.82.828C15.584 4.97 14.098 4.001 12.146 4 9.608 4 8 5.563 8 7c0 .702.385 1.435 1.074 2H6.498A4.23 4.23 0 0 1 6 7c0-2.981 3.001-5 6.146-5Z",
        fill: E,
      }),
    ),
  );
}
export function J1S(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-7H4v7a1 1 0 1 1-2 0V4a1 1 0 0 1 2 0v7h9V4a1 1 0 0 1 1-1Zm7.68 16.964a1.036 1.036 0 0 1-2.07 0V13.97c-.24.162-.737.373-1.211.556-.546.212-1.119-.2-1.119-.785 0-.403.283-.746.666-.87.306-.1.605-.222.897-.365a6.81 6.81 0 0 0 .974-.63 1.24 1.24 0 0 1 .758-.276h.099c.556 0 1.007.45 1.007 1.007v7.357Z",
        fill: E,
      }),
    ),
  );
}
export function QJ_(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-7H4v7a1 1 0 1 1-2 0V4a1 1 0 0 1 2 0v7h9V4a1 1 0 0 1 1-1Zm7.668 14.499h.346a.786.786 0 0 1 0 1.572h-.346v1.136a.792.792 0 1 1-1.585 0v-1.136h-2.41a1.274 1.274 0 0 1-1.06-1.98c1.118-1.682 2.22-3.376 3.326-5.066a.941.941 0 0 1 1.729.516V17.5Zm-3.685 0h2.1v-3.213l-2.1 3.213Z",
        fill: E,
      }),
    ),
  );
}
export function Xlm(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-7H4v7a1 1 0 1 1-2 0V4a1 1 0 0 1 2 0v7h9V4a1 1 0 0 1 1-1Zm5.98 8.6c.754 0 1.407.164 1.928.515l.216.162.002.001c.545.468.818 1.11.818 1.912 0 .506-.124.943-.383 1.3-.172.237-.4.43-.677.582.305.15.563.342.759.584.312.37.462.844.462 1.39 0 .85-.284 1.559-.856 2.11l-.001.001c-.596.562-1.374.843-2.314.843-.89 0-1.632-.242-2.195-.742-.48-.425-.746-.97-.894-1.557-.136-.543.322-1.024.882-1.024.414 0 .735.334.863.728.187.573.598.994 1.333.994.476 0 .835-.144 1.09-.402.226-.24.344-.53.344-.89 0-.457-.135-.756-.353-.938L21 17.166c-.224-.197-.57-.303-1.077-.303h-.043a.733.733 0 1 1 0-1.466h.043c.456 0 .77-.104.975-.28.186-.17.298-.436.298-.818 0-.756-.482-1.086-1.205-1.086-.45 0-.761.113-.977.32-.216.208-.004.003-.004.003a1.21 1.21 0 0 0-.335.576c-.1.353-.383.64-.75.64-.58 0-1.057-.501-.893-1.056.135-.455.354-.877.715-1.23l.108-.1c.562-.524 1.281-.766 2.125-.766Z",
        fill: E,
      }),
    ),
  );
}
export function QoY(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-7H4v7a1 1 0 1 1-2 0V4a1 1 0 0 1 2 0v7h9V4a1 1 0 0 1 1-1Zm5.709 8.6c.838 0 1.52.205 2.022.64.371.322.595.742.736 1.196.155.495-.268.954-.786.943-.398-.008-.705-.31-.907-.653a1.175 1.175 0 0 0-.257-.308c-.195-.163-.463-.254-.82-.254-.467 0-.845.229-1.138.748l-.003.005c-.243.402-.384.895-.428 1.484.18-.184.385-.33.612-.443.359-.189.762-.266 1.2-.266.855 0 1.557.287 2.083.881.522.589.777 1.342.777 2.23 0 .922-.306 1.69-.899 2.289-.59.596-1.333.908-2.204.908-1.072 0-1.908-.416-2.478-1.238-.562-.799-.82-1.876-.82-3.22 0-1.443.282-2.625.873-3.541.587-.925 1.407-1.401 2.437-1.401Zm-.058 4.645c-.461 0-.79.142-1.021.414l-.005.006c-.243.267-.374.66-.374 1.188 0 .508.138.89.393 1.16.26.272.586.41 1.007.41.43 0 .754-.147 1.014-.442.261-.296.399-.683.399-1.177 0-.495-.138-.87-.377-1.142-.255-.278-.59-.417-1.036-.417Z",
        fill: E,
      }),
    ),
  );
}
export function X2$(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15 4a1 1 0 1 0-2 0v7H4V4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0v-7h9v7a1 1 0 1 0 2 0V4Zm3.41 9.273h2.985a.837.837 0 0 0 0-1.673h-3.587a.886.886 0 0 0-.882.809c-.103 1.19-.21 2.38-.314 3.57a.912.912 0 0 0 .909.99c.345 0 .636-.214.873-.466.087-.092.187-.172.307-.236l.003-.002c.207-.115.473-.173.796-.173.469 0 .803.145 1.023.43l.003.001c.232.289.369.71.369 1.273 0 .499-.152.878-.421 1.156a1.434 1.434 0 0 1-1.052.424c-.665 0-1.046-.317-1.235-.827-.113-.307-.373-.558-.7-.558-.595 0-1.092.516-.9 1.08.141.42.367.803.719 1.127l.114.1c.551.465 1.222.702 1.99.702a3.17 3.17 0 0 0 2.186-.83l.003-.003c.668-.622 1-1.418 1-2.384 0-.986-.254-1.791-.762-2.38-.509-.59-1.178-.885-1.98-.885-.378 0-.726.064-1.043.198a2.28 2.28 0 0 0-.566.316l.162-1.759Z",
        fill: E,
      }),
    ),
  );
}
export function QiU(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0v-7H4v7a1 1 0 1 1-2 0V4a1 1 0 0 1 2 0v7h9V4a1 1 0 0 1 1-1Zm5.924 8.6c.822 0 1.515.264 2.062.798l.002.002c.537.537.801 1.22.801 2.058 0 .818-.29 1.554-.833 2.216l-.002.003c-.331.39-.911.872-1.698 1.453h-.001c-.634.46-1.048.859-1.275 1.196h2.983a.837.837 0 0 1 0 1.674h-4.52a.621.621 0 0 1-.63-.643c.047-.931.222-1.157.63-1.761l.2-.27c.31-.394.948-.95 1.88-1.654.506-.388.853-.71 1.066-.955.324-.403.484-.83.484-1.272 0-.447-.114-.748-.29-.933l-.074-.066c-.185-.143-.453-.222-.83-.222-.791 0-1.112.62-1.241 1.292-.089.459-.455.834-.922.834-.481 0-.88-.395-.812-.87.095-.671.317-1.31.776-1.846.568-.69 1.322-1.034 2.244-1.034Z",
        fill: E,
      }),
    ),
  );
}
export function rv2(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20 18a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h11ZM4.297 12.5c.574 0 1.071.16 1.48.484l.17.15h.001c.431.427.643.971.643 1.634 0 .648-.232 1.23-.664 1.752l-.002.003c-.264.307-.723.685-1.342 1.137l-.002.001c-.453.324-.758.608-.94.849h2.263a.695.695 0 0 1 .001 1.39h-3.67a.413.413 0 0 1-.42-.436c.053-.756.26-1.23.658-1.717.248-.31.753-.747 1.484-1.294.396-.3.666-.549.831-.736.249-.306.37-.628.37-.96 0-.587-.308-.905-.896-.905-.606 0-.84.452-.935.957-.072.384-.375.697-.765.697-.401 0-.735-.33-.678-.727.076-.53.25-1.034.618-1.46.455-.546 1.06-.819 1.795-.819ZM20 11a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h11ZM5.4 9.774a.827.827 0 1 1-1.653 0V5.178a4.355 4.355 0 0 1-.808.417C2.476 5.78 2 5.408 2 4.91a.79.79 0 0 1 .544-.743 5.32 5.32 0 0 0 .658-.259c.267-.15.52-.318.754-.512a.818.818 0 0 1 .518-.196h.254c.371 0 .672.301.672.673v5.9ZM20 4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h11Z",
        fill: E,
      }),
    ),
  );
}
export function y_z(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.5 17.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 18a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h11ZM4.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 11a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h11ZM4.5 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM20 4a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2h11Z",
        fill: E,
      }),
    ),
  );
}
export function woK(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 10.124a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Zm0-7.2a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-2.4 0v-3.6a1.2 1.2 0 0 1 1.2-1.2Z",
        fill: E,
      }),
    ),
  );
}
export function Z4h(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("circle", {
        cx: "21",
        cy: "3",
        r: "3",
        fill: "#00CAE0",
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.172 4.546a6.97 6.97 0 0 0 .806 2.022l-9.16 9.162L5.001 19l3.27-.817 9.16-9.162c.62.368 1.3.642 2.024.805L9.49 19.792c-.128.128-.29.22-.465.264L3.87 21.345a1 1 0 0 1-1.213-1.213l1.289-5.156c.044-.176.136-.337.264-.465l9.963-9.965Zm5.063 9.747c.162-.39.7-.39.862 0l.233.56a4.002 4.002 0 0 0 2.062 2.132l.657.292a.486.486 0 0 1 0 .883l-.696.31a4 4 0 0 0-2.033 2.063l-.226.519a.465.465 0 0 1-.856 0l-.226-.519a4 4 0 0 0-2.033-2.063l-.696-.31a.486.486 0 0 1 0-.883l.657-.292a4.002 4.002 0 0 0 2.063-2.131l.232-.561Z",
        fill: E,
      }),
    ),
  );
}
export function ZcK(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.265 3A3.737 3.737 0 0 1 21 6.734a3.737 3.737 0 0 1-1.094 2.641L9.49 19.792c-.128.128-.289.22-.465.264l-5.156 1.289a1 1 0 0 1-1.213-1.213l1.29-5.157a.995.995 0 0 1 .263-.464L14.625 4.094c.7-.7 1.65-1.094 2.64-1.094Zm1.97 11.293c.161-.39.7-.39.862 0l.232.56a4.002 4.002 0 0 0 2.063 2.132l.657.292a.486.486 0 0 1 0 .883l-.697.31a4 4 0 0 0-2.033 2.063l-.225.519a.465.465 0 0 1-.857 0l-.225-.519a4 4 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.883l.657-.292a4.002 4.002 0 0 0 2.063-2.131l.232-.561ZM17.264 5c-.46 0-.9.183-1.226.508L5.817 15.729 5 19l3.27-.816L18.492 7.96a1.738 1.738 0 0 0 .376-1.89A1.736 1.736 0 0 0 17.266 5Z",
        fill: E,
      }),
    ),
  );
}
export function LnB(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.003 4.5c3.804 0 6.527 1.795 8.27 3.545.87.874 1.506 1.746 1.925 2.4a12.449 12.449 0 0 1 .63 1.104l.009.02.003.007v.003l.002.001.035.086c.072.203.077.425.013.632L21.935 12l.954.298-.001.004-.003.007-.007.023-.024.072a9.529 9.529 0 0 1-.469 1.068 11.25 11.25 0 0 1-1.714 2.455c-1.66 1.804-4.4 3.573-8.668 3.573-4.269 0-7.009-1.769-8.668-3.573a11.25 11.25 0 0 1-1.714-2.454 9.517 9.517 0 0 1-.469-1.069l-.024-.072-.008-.023-.002-.007v-.004c.004-.002.067-.022.953-.298l-.955.297a1.002 1.002 0 0 1 .048-.718h.001l.001-.004.003-.007.01-.02a5.82 5.82 0 0 1 .155-.302c.106-.197.263-.474.474-.802a14.586 14.586 0 0 1 1.924-2.4C5.475 6.295 8.198 4.5 12.003 4.5Zm0 2c-3.117 0-5.36 1.456-6.853 2.956a12.585 12.585 0 0 0-1.658 2.068c-.135.212-.242.395-.324.54.058.136.134.304.232.496a9.245 9.245 0 0 0 1.407 2.014c1.329 1.446 3.555 2.927 7.196 2.927 3.641 0 5.867-1.481 7.196-2.927a9.244 9.244 0 0 0 1.406-2.014c.099-.192.174-.36.232-.495a10.35 10.35 0 0 0-.323-.54 12.58 12.58 0 0 0-1.659-2.069C17.363 7.956 15.12 6.5 12.003 6.5Zm0 1.5c2.268 0 4 1.733 4 4s-1.732 4-4 4c-2.266 0-4-1.733-4-4 .001-2.267 1.734-4 4-4Zm0 1.8c-1.272 0-2.2.927-2.2 2.2 0 1.273.928 2.2 2.2 2.2 1.274 0 2.201-.927 2.201-2.2 0-1.273-.928-2.2-2.2-2.2Z",
        fill: E,
      }),
    ),
  );
}
export function K7e(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M9.071 13.338a1 1 0 0 1-1.414 0l-1.394-1.394a.5.5 0 0 1 .354-.853h.838C7.682 5.99 9.627 2 12 2c1.818 0 3.427 2.4 4.136 5.863C19.6 8.573 22 10.182 22 12c0 1.663-1.972 3.118-4.908 3.909l.263-1.846c1.736-.5 2.827-1.236 2.827-2.063 0-.964-1.5-1.818-3.754-2.273.073.718.118 1.482.118 2.273 0 5.527-2.036 10-4.545 10-1.664 0-3.118-1.973-3.909-4.91l1.845.264c.5 1.736 1.237 2.827 2.064 2.827 1.509 0 2.727-3.663 2.727-8.181 0-.91-.045-1.773-.136-2.59A23.483 23.483 0 0 0 12 9.272l-1.69.054.263-1.827L12 7.455c.79 0 1.555.045 2.273.118-.455-2.255-1.31-3.754-2.273-3.754-1.4 0-2.563 3.181-2.727 7.272h.838a.5.5 0 0 1 .354.853L9.07 13.338Zm4.267 1.59a1 1 0 0 1 0 1.415l-1.393 1.394a.5.5 0 0 1-.854-.354v-.838c-5.1-.227-9.09-2.173-9.09-4.545 0-1.664 1.972-3.118 4.908-3.909l-.263 1.845c-1.736.5-2.827 1.237-2.827 2.064 0 1.4 3.181 2.563 7.272 2.727v-.838a.5.5 0 0 1 .854-.354l1.393 1.394Z",
        fill: E,
      }),
    ),
  );
}
export function BEH(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.09 15.132a1 1 0 0 1 1.415 1.414l-3.96 3.959a1 1 0 0 1-1.414 0l-1.838-1.838a1 1 0 1 1 1.414-1.414l1.13 1.13 3.254-3.251ZM20 18a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8Zm0-7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8ZM7.604 3.01A2 2 0 0 1 9.4 5v3.4l-.01.204a2 2 0 0 1-1.786 1.786l-.204.01H4l-.204-.01A2 2 0 0 1 2.01 8.604L2 8.4V5a2 2 0 0 1 1.796-1.99L4 3h3.4l.204.01ZM4 8.4h3.4V5H4v3.4ZM20 4a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h8Z",
        fill: E,
      }),
    ),
  );
}
export function xFy(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.942 19.14a1.2 1.2 0 0 1 .31 2.379 9.66 9.66 0 0 1-2.504 0 1.2 1.2 0 0 1 .31-2.38 7.294 7.294 0 0 0 1.884 0Zm-8.338-2.977a1.2 1.2 0 0 1 1.683.22 7.25 7.25 0 0 0 1.33 1.33 1.2 1.2 0 0 1-1.462 1.903 9.649 9.649 0 0 1-1.77-1.77 1.2 1.2 0 0 1 .219-1.683Zm13.11.22a1.2 1.2 0 0 1 1.902 1.462 9.649 9.649 0 0 1-1.77 1.77 1.2 1.2 0 0 1-1.464-1.902c.5-.383.948-.832 1.331-1.33ZM2.4 12c0-.424.027-.843.081-1.253a1.2 1.2 0 0 1 2.38.31 7.287 7.287 0 0 0 0 1.884 1.2 1.2 0 1 1-2.38.31A9.678 9.678 0 0 1 2.4 12Zm16.8 0c0-.32-.02-.635-.06-.943a1.2 1.2 0 0 1 2.379-.31 9.676 9.676 0 0 1 0 2.504 1.2 1.2 0 1 1-2.38-.31c.04-.308.06-.622.06-.941ZM6.155 4.384a1.2 1.2 0 0 1 1.463 1.903c-.5.383-.948.831-1.331 1.33a1.2 1.2 0 0 1-1.903-1.462 9.65 9.65 0 0 1 1.77-1.77Zm10.008.22a1.2 1.2 0 0 1 1.682-.22 9.649 9.649 0 0 1 1.77 1.77 1.2 1.2 0 0 1-1.902 1.464 7.256 7.256 0 0 0-1.33-1.331 1.2 1.2 0 0 1-.22-1.683ZM12 2.4c.423 0 .841.027 1.251.081a1.2 1.2 0 0 1-.31 2.38 7.28 7.28 0 0 0-1.884 0 1.2 1.2 0 1 1-.31-2.38c.41-.054.829-.081 1.253-.081Z",
        fill: E,
      }),
    ),
  );
}
export function AQ4(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.2 12a7.2 7.2 0 1 0-14.4 0 7.2 7.2 0 0 0 14.4 0Zm2.4 0a9.6 9.6 0 0 1-9.6 9.6c-5.301 0-9.6-4.298-9.6-9.6 0-5.3 4.299-9.6 9.6-9.6 5.302 0 9.6 4.299 9.6 9.6Z",
        fill: E,
      }),
    ),
  );
}
export function NQJ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.67 16.55a1 1 0 0 1 1.414 0l2.122 2.122a1.007 1.007 0 0 1 .26.457l.014.055a1.01 1.01 0 0 1-.06.583 1 1 0 0 1-.067.127l-.025.042-.015.021a1.001 1.001 0 0 1-.107.129l-2.122 2.121a1 1 0 0 1-1.414-1.414l.414-.414h-4.21a1 1 0 0 1 0-2h4.211l-.415-.415a1 1 0 0 1 0-1.414ZM16.39 2.607a5 5 0 0 1 5 5v8.422l-.892-.891a2.984 2.984 0 0 0-1.108-.7v-6.83a3 3 0 0 0-3-3H7.604a3 3 0 0 0-3 3v8.785c0 .055.001.11.004.165l3.565-3.563a3 3 0 0 1 4.092-.14l3.455 3.01a2.99 2.99 0 0 0-.211.515h-1.636c-.187 0-.37.017-.549.05l-2.373-2.068a1 1 0 0 0-1.364.047l-4.105 4.104a2.99 2.99 0 0 0 2.122.88h3.269c.003.77.3 1.47.78 2H7.604l-.256-.007a5 5 0 0 1-4.737-4.737l-.007-.256V7.607a5 5 0 0 1 5-5h8.786Zm-.726 4.183a1.556 1.556 0 1 1-.002 3.112 1.556 1.556 0 0 1 .002-3.112Z",
        fill: E,
      }),
    ),
  );
}
export function lwq(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M18.483 2.37A2 2 0 0 1 21 4.302V11.5a1 1 0 0 1-2 0V9.63l-10 2.5V18a4 4 0 1 1-2-3.466v-7.95a1.5 1.5 0 0 1 1.113-1.45l10.37-2.764Zm1.087 11.9a.465.465 0 0 1 .864 0l.231.56a4.002 4.002 0 0 0 2.064 2.133l.657.293a.486.486 0 0 1 0 .881l-.697.311a3.998 3.998 0 0 0-2.034 2.063l-.225.518a.464.464 0 0 1-.856 0l-.226-.518a3.998 3.998 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.882l.657-.293a4.002 4.002 0 0 0 2.064-2.132l.231-.56ZM5 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm4-9.031v3.1l10-2.5V4.302L9 6.969Z",
        "data-follow-fill": "#F5FBFF",
        fill: E,
      }),
    ),
  );
}
export function WH0(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.46 16.55c.63-.369 1.548-.81 2.483-.498.48.16.904.395 1.221.739.33.359.492.778.53 1.198.064.73-.255 1.434-.463 1.866.156-.043.333-.093.528-.154.517-.16 1.154-.374 1.744-.53.576-.151 1.246-.288 1.847-.24.31.025.666.103.993.31.303.19.534.464.677.797l.055.147.029.098a1 1 0 0 1-1.879.645c-.01 0-.023-.003-.035-.004-.241-.02-.631.038-1.177.181-.534.141-1.083.326-1.66.505-.533.166-1.136.343-1.64.387-.348.03-.815.032-1.216-.194a1.286 1.286 0 0 1-.549-.6 1.388 1.388 0 0 1-.107-.677c.027-.331.16-.644.252-.845.093-.205.234-.48.321-.66.23-.473.298-.727.287-.854-.001-.018-.001-.014-.008-.02-.02-.023-.113-.108-.383-.198-.013-.004-.212-.04-.84.327-.606.355-1.197.816-2.048 1.382-1.537 1.022-3.71 2.222-6.156 1.275a1 1 0 1 1 .722-1.865c1.427.552 2.806-.064 4.327-1.075.677-.45 1.49-1.06 2.145-1.442Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.268 2a3.39 3.39 0 0 1 3.127 2.09 3.39 3.39 0 0 1 0 2.592c-.17.41-.42.784-.734 1.098l-8.257 8.258a2.004 2.004 0 0 1-.93.526l-4.23 1.058a1 1 0 0 1-1.213-1.213l1.058-4.23c.088-.352.27-.674.526-.93l8.258-8.257A3.388 3.388 0 0 1 16.268 2Zm0 2c-.368 0-.721.146-.98.406l-8.259 8.258-.653 2.613 2.613-.653 8.258-8.258a1.388 1.388 0 0 0 .3-1.51A1.386 1.386 0 0 0 16.268 4Z",
        fill: E,
      }),
    ),
  );
}
export function Pl9(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M4.757 17.488a1.2 1.2 0 0 0 1.697 1.698l9.83-9.832.001 7.103a1.201 1.201 0 0 0 2.4 0l-.001-10a1.2 1.2 0 0 0-1.2-1.2l-10-.002a1.2 1.2 0 1 0 0 2.4l7.103.001-9.83 9.832Z",
        fill: E,
      }),
    ),
  );
}
export function x6W(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 6a4 4 0 1 1 0 7.999A4 4 0 0 1 12 6Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1a9 9 0 0 1 9 9c0 3.637-2.218 6.877-4.262 9.112a28.141 28.141 0 0 1-3.797 3.44 15.855 15.855 0 0 1-.344.25l-.028.02-.002.001L12 22l.566.824-.566.39-.566-.39L12 22l-.567.823h-.002l-.028-.02a25.157 25.157 0 0 1-1.289-.991 28.138 28.138 0 0 1-2.852-2.7C5.218 16.877 3 13.637 3 10a9 9 0 0 1 9-9Zm0 2a7 7 0 0 0-7 7c0 2.863 1.782 5.623 3.738 7.763A26.143 26.143 0 0 0 12 20.755a26.144 26.144 0 0 0 3.262-2.992C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7Z",
        fill: E,
      }),
    ),
  );
}
export function Mxb(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.304 3.94a3.4 3.4 0 0 1 4.808 0l3.159 3.158a3.4 3.4 0 0 1 0 4.808l-6.037 6.037h4.274a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H11.43a2.494 2.494 0 0 1-.263.012l-1.504-.011h-.191l-.016-.002-2.549-.02a2.5 2.5 0 0 1-1.748-.731l-1.65-1.65a3.4 3.4 0 0 1 0-4.808l8.795-8.793Zm-7.38 10.207a1.401 1.401 0 0 0 0 1.98l1.65 1.65a.5.5 0 0 0 .349.146l2.71.02h1.658a.5.5 0 0 0 .25-.133l2.014-2.016-5.14-5.14-3.491 3.493Zm10.774-8.793a1.4 1.4 0 0 0-1.98 0L9.829 9.24l5.14 5.14 3.888-3.888a1.4 1.4 0 0 0 0-1.98l-3.159-3.158Z",
        fill: E,
      }),
    ),
  );
}
export function R0G(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 9.656a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 2.5a2 2 0 0 1 2 2v1.742h.5a4 4 0 0 1 4 4V17.5l-.005.206a4 4 0 0 1-3.789 3.79l-.206.004h-11l-.206-.005A4 4 0 0 1 2.5 17.5v-7.258a4 4 0 0 1 3.794-3.995l.206-.005H7V4.5a2 2 0 0 1 2-2h6Zm-10.5 15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3.72c-.05.03-.1.06-.153.09-1.488.844-3.825 1.63-7.343 1.63-3.519 0-5.855-.786-7.343-1.63-.055-.031-.108-.064-.161-.096V17.5Zm2-9.258a2 2 0 0 0-2 2v1.052c.23.22.6.525 1.147.836 1.156.656 3.146 1.37 6.357 1.37 3.21 0 5.2-.714 6.356-1.37a5.778 5.778 0 0 0 1.14-.828v-1.06a2 2 0 0 0-2-2H17v.004H7v-.004h-.5Zm2.5-2h6V4.5H9v1.742Z",
        fill: E,
      }),
    ),
  );
}
export function Ki_(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.823 13.287a5.985 5.985 0 0 1 5.985 5.984 1.001 1.001 0 0 1-2 0c0-2.2-1.784-3.984-3.985-3.984h-1.18a3.984 3.984 0 0 0-3.985 3.984 1 1 0 0 1-2 0 5.985 5.985 0 0 1 5.985-5.984h1.18Zm8.347 1.244c.522 0 1.6.05 2.666.671 1.11.647 2.075 1.834 2.485 3.849a1 1 0 1 1-1.959.398c-.308-1.516-.968-2.188-1.534-2.518-.609-.355-1.258-.4-1.658-.4-.32 0-.544.038-.674.068a1.269 1.269 0 0 0-.125.035l-.01.004.008-.004-.078.031a1 1 0 0 1-.743-1.854l.006-.002.006-.003.014-.007.037-.015a3.268 3.268 0 0 1 .433-.133c.272-.063.649-.12 1.126-.12Zm.084-8.13c1.904 0 3.447 1.533 3.447 3.424 0 1.892-1.543 3.425-3.447 3.425-1.904 0-3.447-1.533-3.447-3.425 0-1.891 1.543-3.425 3.447-3.425ZM8.233 3.368c2.347 0 4.25 1.922 4.25 4.292s-1.903 4.292-4.25 4.292c-2.348 0-4.25-1.921-4.25-4.292 0-2.37 1.902-4.292 4.25-4.292ZM17.254 8.4c-.811 0-1.447.65-1.447 1.425s.636 1.425 1.447 1.425 1.447-.65 1.447-1.425c0-.774-.636-1.425-1.447-1.425ZM8.233 5.37c-1.225 0-2.25 1.007-2.25 2.291 0 1.285 1.025 2.292 2.25 2.292 1.224 0 2.25-1.007 2.25-2.292 0-1.284-1.026-2.292-2.25-2.292Z",
        fill: E,
      }),
    ),
  );
}
export function md1(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.494 18.505a1.2 1.2 0 0 1 0-1.697L16.808 5.495a1.2 1.2 0 1 1 1.697 1.697L7.19 18.505a1.2 1.2 0 0 1-1.697 0Z",
        fill: E,
      }),
    ),
  );
}
export function LFN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.781 18.716c-.187-3.116 3.47-4.918 5.826-2.87l.817.71-1.276 1.275-.721-.627c-1.152-1-2.94-.12-2.849 1.402.09 1.488 1.9 2.166 2.946 1.104l1.375-1.398-.001-.002 2.234-2.269c2.139-2.173 5.842-.786 6.026 2.258.188 3.115-3.472 4.917-5.827 2.869l-.812-.707 1.275-1.275.719.624c1.151 1 2.939.12 2.847-1.403-.09-1.488-1.9-2.166-2.945-1.103L17.039 18.7l.002.002-2.234 2.27c-2.14 2.173-5.841.786-6.026-2.257Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17 1.96a4.5 4.5 0 0 1 4.5 4.5v6.906a5.016 5.016 0 0 0-1.13-.129h-.87V6.461a2.5 2.5 0 0 0-2.5-2.5H7a2.5 2.5 0 0 0-2.5 2.5v10.637c0 1.225.882 2.242 2.045 2.456.21.771.599 1.469 1.121 2.044H7a4.5 4.5 0 0 1-4.5-4.5V6.46A4.5 4.5 0 0 1 7 1.96h10Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 7.491a1 1 0 0 1 1 1v2.996a1 1 0 0 1-.758.971l-4.031 1.004a1 1 0 0 1-.482-1.941L11 10.706V8.491a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function jF_(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8.599 18.715c-.188-3.115 3.47-4.917 5.826-2.87l.816.71-1.275 1.275-.722-.627c-1.151-1-2.94-.12-2.848 1.402.09 1.488 1.9 2.166 2.946 1.104l1.375-1.398-.002-.001 2.234-2.27c2.14-2.173 5.842-.786 6.027 2.258.187 3.116-3.472 4.917-5.828 2.869l-.812-.707 1.275-1.275.72.624c1.15 1 2.938.12 2.847-1.403-.09-1.488-1.9-2.166-2.946-1.103L16.856 18.7l.002.002-2.234 2.27c-2.139 2.173-5.84.786-6.025-2.257Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.11 1.96a5.02 5.02 0 0 0-.017 2H6.817a2.5 2.5 0 0 0-2.5 2.5v10.637a2.5 2.5 0 0 0 2.045 2.456c.21.77.6 1.469 1.121 2.044h-.666a4.5 4.5 0 0 1-4.5-4.5V6.46a4.5 4.5 0 0 1 4.5-4.5h9.292Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.817 7.49a1 1 0 0 1 1 1v2.996a1 1 0 0 1-.757.971l-4.032 1.004a1.001 1.001 0 0 1-.482-1.941l3.271-.815V8.49a1 1 0 0 1 1-1Zm7.5.218a4.989 4.989 0 0 0 2 .28v5.377a5.023 5.023 0 0 0-1.13-.129h-.87V7.708Z",
        fill: E,
      }),
      a.createElement("circle", {
        cx: "21",
        cy: "3",
        r: "3",
        fill: "#00CAE0",
      }),
    ),
  );
}
export function C0o(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M22 5a1 1 0 0 1-1 1H7.2c-.593 0-.918.001-1.151.02a.031.031 0 0 0-.028.029C6 6.282 6 6.607 6 7.2V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.2c0-.527-.001-1.043.034-1.476.038-.458.125-.998.402-1.54a4.001 4.001 0 0 1 1.748-1.748c.542-.277 1.082-.364 1.54-.402C6.157 2 6.674 2 7.2 2H21a1 1 0 0 1 1 1z",
        fill: "#00b8cc",
      }),
      a.createElement("path", {
        d: "M5 21.5v.5H3v-.5zm.5-.5V7.2c0-.584.001-.934.022-1.192l.016-.094a.532.532 0 0 1 .47-.392l.214-.012c.234-.01.54-.01.978-.01V6c-.593 0-.918.001-1.151.02a.031.031 0 0 0-.028.029C6 6.282 6 6.607 6 7.2V21l-.005.102A1 1 0 0 1 5 22v-.5a.5.5 0 0 0 .5-.5zM21 5.5V6H7.2v-.5zm.5-.5V3a.5.5 0 0 0-.5-.5H7.2c-.534 0-1.026-.001-1.435.032-.427.035-.894.114-1.355.349a3.502 3.502 0 0 0-1.53 1.53c-.234.46-.313.927-.348 1.354-.033.409-.032.9-.032 1.435V21a.5.5 0 0 0 .5.5v.5a1 1 0 0 1-1-1V7.2c0-.527-.001-1.043.034-1.476.038-.458.125-.998.402-1.54a4.001 4.001 0 0 1 1.748-1.748c.542-.277 1.082-.364 1.54-.402C6.157 2 6.674 2 7.2 2H21l.102.005A1 1 0 0 1 22 3v2l-.005.103A1 1 0 0 1 21 6v-.5a.5.5 0 0 0 .5-.5z",
        fill: "#000",
        fillOpacity: ".2",
      }),
    ),
  );
}
export function xHZ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20.024 11.504a1 1 0 0 1 1.41.004l1.222 1.222a1 1 0 0 1 .005 1.409l-5.709 5.792a.25.25 0 0 1-.178.074h-2.347a.25.25 0 0 1-.25-.25v-2.366a.25.25 0 0 1 .074-.178l5.773-5.707ZM17.03 3.043a4.5 4.5 0 0 1 4.5 4.5v1.698a3.252 3.252 0 0 0-2 .083V7.543a2.5 2.5 0 0 0-2.5-2.5H6.265a2.5 2.5 0 0 0-2.5 2.5v7.932a2.5 2.5 0 0 0 2.5 2.5h5.786v1.576c.005.145.024.286.053.424h-5.84a4.501 4.501 0 0 1-4.5-4.5V7.543a4.5 4.5 0 0 1 4.5-4.5H17.03Zm-6.275 6.154c.32-.036.712.183 1.495.621l1.28.717c.815.456 1.222.685 1.358.985a1 1 0 0 1 0 .823c-.136.3-.543.528-1.358.984l-1.28.717c-.783.438-1.175.657-1.495.621a1.002 1.002 0 0 1-.698-.41c-.189-.26-.189-.71-.189-1.606v-1.435c0-.897 0-1.346.189-1.608a1 1 0 0 1 .698-.409Z",
        fill: E,
      }),
    ),
  );
}
export function Vgl(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.482 13.224a1 1 0 1 1-.002 2.001l-2.777-.002H10.57c-1.94 0-2.4.028-2.712.136a2.446 2.446 0 0 0-1.5 1.5c-.097.278-.128.677-.133 2.141h6a1 1 0 1 1 0 2H5.65l-.468-.007a1.552 1.552 0 0 1-.16-.016l-.13-.033a1.004 1.004 0 0 1-.615-.614c-.056-.16-.055-.36-.055-.759 0-1.772 0-2.66.249-3.372a4.445 4.445 0 0 1 2.727-2.727c.713-.25 1.6-.25 3.372-.25h1.132l2.78.002Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 3.222a4.446 4.446 0 0 1 4.445 4.445l-.006.229A4.446 4.446 0 0 1 12 12.11l-.229-.006a4.446 4.446 0 0 1-4.21-4.21l-.005-.228A4.446 4.446 0 0 1 12 3.222Zm0 2a2.445 2.445 0 1 0 0 4.89 2.445 2.445 0 0 0 0-4.89Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.97 13.84a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 1-1Z",
        fill: E,
      }),
    ),
  );
}
export function LhX(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.831 5.537c.392-.063 1.054-.227 1.805.29.264.182.44.46.54.726.102.264.146.554.113.791v-.002a3 3 0 0 1-.268.973l-.001.005c-.233.516-.514.943-.788 1.342l-.002.002a25.46 25.46 0 0 1-.854 1.146l-.87 1.084c-1.158 1.434-2.342 2.797-3.155 4.26a6.1 6.1 0 0 0-.183.369l-.002.004c-.105.222-.178.47-.208.687-.025.183-.015.312.003.384h.003a.728.728 0 0 0 .079-.028 1.33 1.33 0 0 0 .257-.147c.418-.323.845-.725 1.293-1.16.446-.433.913-.9 1.391-1.328.48-.433.987-.873 1.588-1.262h.003c.298-.188.636-.385 1.073-.508a1.9 1.9 0 0 1 .845-.052c.304.049.63.179.88.443.306.295.403.732.384 1.022a2.116 2.116 0 0 1-.148.665l-.003.005a5.216 5.216 0 0 1-.461.885c-.321.508-.668.973-.99 1.418-.328.451-.64.885-.897 1.32l-.001-.001c-.127.216-.23.422-.286.595l-.003.006-.007.026c.16-.035.372-.124.596-.25.54-.307 1.075-.735 1.576-1.195.063-.058.132-.122.184-.172a.805.805 0 0 1 .562-.223l.155.014a.8.8 0 0 1 .285.12l.123.1a.8.8 0 0 1 0 1.126v.002a7.1 7.1 0 0 1-.222.212l-.001.002c-.56.512-1.157 1.004-1.868 1.415l-.004.003c-.311.173-.663.35-1.12.44h-.001a1.71 1.71 0 0 1-.845-.036c-.3-.087-.616-.266-.815-.576-.4-.59-.242-1.189-.149-1.504l.003-.008c.115-.357.27-.65.42-.917.307-.533.646-1.007.967-1.463l.476-.678c.153-.223.298-.442.43-.66.073-.118.137-.233.191-.34l-.058.029-.322.191c-.451.302-.894.694-1.338 1.11h-.001c-.45.415-.863.848-1.312 1.3-.446.45-.922.911-1.482 1.363l-.015.011c-.339.243-.77.503-1.38.548l.002.001H8.99l-.008.002v-.002c-.347.037-.707-.074-.999-.25-.295-.178-.561-.445-.692-.76l-.078-.2c-.345-.992-.05-1.83.216-2.49l.003-.007c.071-.165.157-.341.237-.495l.001-.005c.952-1.755 2.186-3.172 3.304-4.593v-.001c.57-.716 1.125-1.416 1.61-2.13.215-.32.409-.638.543-.926-3.01 1.146-5.873 3.867-8.297 6.467l.001.002a22.081 22.081 0 0 0-1.454 1.787 1.269 1.269 0 0 1-.85.514 1.309 1.309 0 0 1-.965-.253 1.307 1.307 0 0 1-.51-.858 1.262 1.262 0 0 1 .257-.956 23.593 23.593 0 0 1 1.708-1.933l.006-.006.003-.005C5.854 9.65 8.64 6.978 12.781 5.549l.026-.009.024-.003Zm5.886-3.753a.396.396 0 0 1 .736 0l.198.478a3.416 3.416 0 0 0 1.761 1.82l.562.25a.415.415 0 0 1 0 .753l-.595.265a3.414 3.414 0 0 0-1.736 1.76l-.193.444a.396.396 0 0 1-.73 0l-.194-.443A3.414 3.414 0 0 0 16.79 5.35l-.594-.265a.415.415 0 0 1 0-.754l.56-.249a3.417 3.417 0 0 0 1.763-1.82l.198-.478Z",
        fill: E,
      }),
    ),
  );
}
export function zfN(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.891 1.7c.33 0 1.027.058 1.672.466.717.453 1.246 1.262 1.246 2.477 0 .662-.167 1.285-.528 1.831-.03.045-.061.088-.093.13h1.108a2.442 2.442 0 0 1 2.432 2.453v1.962a2.448 2.448 0 0 1-1.946 2.403v5.935c0 1.625-1.306 2.943-2.918 2.943H7.136c-1.612 0-2.918-1.318-2.918-2.943v-5.935a2.448 2.448 0 0 1-1.946-2.403V9.057a2.442 2.442 0 0 1 2.432-2.452h1.108c-.032-.043-.064-.086-.093-.13a3.27 3.27 0 0 1-.528-1.832c0-1.215.529-2.024 1.246-2.477.645-.408 1.341-.466 1.672-.466 1.92 0 3.16.962 3.891 2.155.73-1.193 1.972-2.155 3.891-2.155ZM6.163 19.357c0 .542.436.981.973.981h3.891v-6.867H6.163v5.886Zm6.81.981h3.89c.538 0 .974-.44.974-.98V13.47h-4.864v6.867ZM4.704 8.567a.488.488 0 0 0-.486.49v1.962l.01.099a.49.49 0 0 0 .378.382l.098.01h6.323V8.566H4.704Zm8.269 2.942h6.323l.098-.01a.49.49 0 0 0 .379-.381l.01-.099V9.057a.49.49 0 0 0-.487-.49h-6.323v2.942ZM8.109 3.662c-.156 0-.432.036-.638.167a.606.606 0 0 0-.218.23c-.055.102-.117.28-.117.584 0 .319.076.554.202.743.129.196.349.4.72.586.615.31 1.556.526 2.878.601-.09-.525-.251-1.086-.522-1.572-.429-.767-1.105-1.34-2.305-1.34Zm7.782 0c-1.2 0-1.876.572-2.305 1.34-.27.485-.433 1.046-.522 1.571 1.322-.075 2.263-.29 2.878-.6.371-.188.591-.391.72-.587.126-.19.202-.424.202-.743 0-.304-.062-.482-.117-.585a.606.606 0 0 0-.218-.23c-.206-.13-.482-.166-.638-.166Z",
        fill: E,
      }),
    ),
  );
}
export function QuO(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.99 13.14a1 1 0 0 1 1.02 0l3.5 2.08a1 1 0 0 1 .49.86v3.992l-.009.135c-.042.31-.23.587-.509.741l-3.5 1.927-.115.055c-.275.108-.587.09-.85-.055l-3.5-1.927a1.002 1.002 0 0 1-.508-.741L14 20.072V16.08a1 1 0 0 1 .49-.86l3.5-2.08ZM16.205 2.006A4 4 0 0 1 20 6v5.084a6.036 6.036 0 0 0-2 0V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4l.008.309c.03.59.146 1.158.335 1.691H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h8l.206.005Zm-.406 14.53V19.6l2.7 1.487 2.7-1.487v-3.065l-2.7-1.604-2.7 1.604Zm2.7.253a1.201 1.201 0 1 1-.002 2.402 1.201 1.201 0 0 1 .002-2.402ZM12 11a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h3Zm3-4a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h6Z",
        fill: E,
      }),
    ),
  );
}
export function aoA(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M10.705 2.336a2.5 2.5 0 0 1 2.5 0l6.495 3.75a2.501 2.501 0 0 1 1.25 2.165v3.08a2.487 2.487 0 0 0-1.8-.01V8.886l-6.293 3.634v7.266l2.532-1.463c.2.195.44.363.723.489l.64.285c.153.068.295.161.422.275l-3.969 2.292a2.5 2.5 0 0 1-2.5 0l-6.494-3.75a2.501 2.501 0 0 1-1.25-2.165V8.251c0-.893.477-1.718 1.25-2.165l6.494-3.75Zm8.935 11.091a.427.427 0 0 1 .794 0l.214.516a3.682 3.682 0 0 0 1.898 1.96l.605.27a.447.447 0 0 1 0 .812l-.641.285a3.68 3.68 0 0 0-1.871 1.898l-.208.478a.427.427 0 0 1-.787 0l-.208-.478a3.68 3.68 0 0 0-1.871-1.898l-.64-.285a.447.447 0 0 1 0-.812l.604-.27a3.682 3.682 0 0 0 1.898-1.96l.213-.516ZM4.76 15.75a.7.7 0 0 0 .35.607l5.945 3.431v-7.267L4.76 8.887v6.863Zm7.545-11.855a.701.701 0 0 0-.7 0L5.659 7.327l6.297 3.634 6.294-3.634-5.944-3.432Z",
        "data-follow-fill": "#F5FBFF",
        fill: E,
      }),
      a.createElement("path", {
        d: "M10.705 2.336a2.5 2.5 0 0 1 2.5 0l6.496 3.75a2.501 2.501 0 0 1 1.25 2.165v3.08a2.487 2.487 0 0 0-1.8-.01V8.885l-6.294 3.634v7.267l2.532-1.463c.2.195.44.363.723.489l.64.285c.153.068.295.162.422.275l-3.969 2.292a2.502 2.502 0 0 1-2.5 0l-6.494-3.75a2.502 2.502 0 0 1-1.25-2.165V8.251c0-.893.477-1.718 1.25-2.165l6.494-3.75Zm8.935 11.091a.427.427 0 0 1 .794 0l.214.516a3.681 3.681 0 0 0 1.898 1.96l.605.27a.447.447 0 0 1 0 .812l-.64.285a3.68 3.68 0 0 0-1.872 1.898l-.208.478a.427.427 0 0 1-.787 0l-.208-.478a3.68 3.68 0 0 0-1.871-1.898l-.64-.285a.447.447 0 0 1 0-.812l.604-.27a3.681 3.681 0 0 0 1.898-1.96l.213-.516ZM4.761 15.75a.7.7 0 0 0 .35.607l5.945 3.431V12.52L4.761 8.886v6.864Zm7.545-11.855a.701.701 0 0 0-.7 0L5.66 7.326l6.295 3.634 6.294-3.634-5.943-3.431Z",
        "data-follow-fill": "#F5FBFF",
        fill: E,
      }),
    ),
  );
}
export function OnV(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.453 1.477a9 9 0 0 1 9 9v4.836c0 .083-.008.165-.017.246-.158 1.799-1.413 4.812-5.21 6.098a5.772 5.772 0 0 1-1.362.273 1.644 1.644 0 0 1-1.264.594h-1.852a1.649 1.649 0 0 1 0-3.297H13.6c.55 0 1.035.27 1.335.683.23-.031.447-.078.65-.147 1.645-.558 2.626-1.517 3.19-2.448l-.525.002a3.5 3.5 0 0 1-3.5-3.5V12.44a3.5 3.5 0 0 1 3.5-3.5l1.03-.003a7 7 0 0 0-6.827-5.461h-.906a7 7 0 0 0-6.82 5.422l.95.004a3.5 3.5 0 0 1 3.5 3.5v1.375a3.5 3.5 0 0 1-3.5 3.5l-1.13-.004a2 2 0 0 1-2-2v-4.797a9 9 0 0 1 9-9h.906Zm5.797 9.464a1.5 1.5 0 0 0-1.5 1.5v1.375a1.5 1.5 0 0 0 1.5 1.5l1.196-.003c.003-.04.007-.078.007-.115v-4.26l-1.203.003ZM4.547 15.274l1.13.004a1.5 1.5 0 0 0 1.5-1.5v-1.375a1.5 1.5 0 0 0-1.5-1.5l-1.13-.004v4.375Z",
        fill: E,
      }),
    ),
  );
}
export function kfu(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17.611 3.5A4.89 4.89 0 0 1 22.5 8.389v7.222a4.89 4.89 0 0 1-4.889 4.889H6.39a4.889 4.889 0 0 1-4.89-4.889V8.39a4.89 4.89 0 0 1 4.889-4.889H17.61ZM6.39 5.5A2.889 2.889 0 0 0 3.5 8.389v7.222A2.889 2.889 0 0 0 6.389 18.5H17.61a2.889 2.889 0 0 0 2.889-2.889V8.39a2.889 2.889 0 0 0-2.888-2.89H6.39Zm2.492 8.58a.32.32 0 0 1 .32.318v.364a.32.32 0 0 1-.32.318H8.52a.319.319 0 0 1-.319-.318v-.364c0-.175.143-.318.319-.318h.362Zm4.495-4.533c.22 0 .398.178.398.398v.42c0 .22-.178.398-.398.398h-2.264v1.089h1.775c.251 0 .462.088.633.265.17.177.255.396.254.656v1.383a.91.91 0 0 1-.255.657.847.847 0 0 1-.632.265H10.18a.398.398 0 0 1-.399-.398v-.454a.4.4 0 0 1 .399-.399h2.263v-1.054H10.67a.84.84 0 0 1-.632-.265.915.915 0 0 1-.256-.656V9.945c0-.22.179-.398.399-.398h3.196ZM7.278 9.5a.4.4 0 0 1 .399.398v4.736a.4.4 0 0 1-.399.398h-.534a.399.399 0 0 1-.398-.398v-3.43l-.482.278a.398.398 0 0 1-.544-.145l-.266-.463a.398.398 0 0 1 .145-.544l1.326-.766.019-.008a.397.397 0 0 1 .2-.056h.534Zm8.217 0c.22 0 .399.178.399.398v1.676l1.481-1.978a.24.24 0 0 1 .191-.096h.966a.24.24 0 0 1 .195.379l-1.724 2.387 1.724 2.387a.24.24 0 0 1-.195.38h-.966a.24.24 0 0 1-.191-.096l-1.481-1.98v1.677c0 .22-.179.398-.399.398h-.534a.4.4 0 0 1-.399-.398V9.898a.4.4 0 0 1 .399-.398h.534Z",
        fill: E,
      }),
    ),
  );
}
export function KX3(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        fill: "#00D6B9",
        d: "m12.696 12.19.049-.049c.031-.031.065-.066.1-.098l.069-.066.203-.2.279-.272.905-.895.299-.293c.056-.057.115-.11.173-.164.108-.098.22-.193.333-.287a7.634 7.634 0 0 1 .797-.55 6.359 6.359 0 0 1 .971-.475 6.51 6.51 0 0 1 .277-.1c.047-.015.093-.032.142-.047a11.727 11.727 0 0 0-2.22-4.452 1.074 1.074 0 0 0-.834-.4H5.665a.161.161 0 0 0-.096.292 25.033 25.033 0 0 1 7.108 8.08l.02-.024Z",
      }),
      a.createElement("path", {
        fill: "#3370FF",
        d: "M9.288 19.738a11.777 11.777 0 0 0 10.504-6.44c-.1.193-.213.38-.338.556-.044.061-.088.122-.135.183a5.602 5.602 0 0 1-.328.382c-.102.108-.21.21-.322.306-.064.053-.125.105-.191.154a3.75 3.75 0 0 1-.233.166c-.048.035-.1.066-.152.098a4.616 4.616 0 0 1-.807.392 4.332 4.332 0 0 1-.868.223 5 5 0 0 1-.39.044 5.026 5.026 0 0 1-1.527-.13c-.053-.012-.104-.027-.158-.041-.147-.04-.294-.081-.44-.123-.074-.021-.147-.041-.218-.063-.11-.032-.218-.066-.325-.1l-.265-.086c-.083-.027-.169-.054-.252-.083l-.171-.06-.209-.073-.146-.053a9.823 9.823 0 0 1-.292-.108l-.168-.064-.226-.088-.237-.095-.154-.064-.191-.079-.147-.061-.152-.066-.132-.059-.12-.053-.122-.057-.125-.059-.159-.073-.166-.078-.176-.086-.15-.073a24.767 24.767 0 0 1-7.019-5.234.162.162 0 0 0-.279.11l.005 8.182c0 .357.176.69.472.888a11.662 11.662 0 0 0 6.509 1.965Z",
      }),
      a.createElement("path", {
        fill: "#133C9A",
        d: "M22.302 9.07a6.77 6.77 0 0 0-5.008-.379c-.047.014-.093.03-.142.046a7.433 7.433 0 0 0-.759.31 8.23 8.23 0 0 0-.49.263 7.605 7.605 0 0 0-.797.55 6.148 6.148 0 0 0-.506.45l-.299.294-1.181 1.17-.204.2-.068.066a3.79 3.79 0 0 1-.1.098l-.05.049-.075.07-.086.079a11.869 11.869 0 0 1-2.441 1.73l.159.073.124.059.123.056.12.054.131.059.152.066.147.06.191.08.155.063.237.096.225.088c.056.022.113.041.17.064.097.036.195.07.29.107l.147.054c.068.025.137.049.208.073l.172.06.252.082c.088.03.175.057.264.086.108.034.218.066.325.1.074.022.147.045.218.064.147.042.294.083.44.122l.16.042c.1.025.2.044.3.064a5.45 5.45 0 0 0 .81.078 4.822 4.822 0 0 0 1.332-.17 4.159 4.159 0 0 0 .648-.234 4.255 4.255 0 0 0 .501-.267c.054-.032.103-.066.152-.098a4.88 4.88 0 0 0 .423-.32 4.691 4.691 0 0 0 .783-.872c.122-.176.235-.36.336-.55l.115-.228 1.022-2.038.012-.025a6.68 6.68 0 0 1 1.362-1.944Z",
      }),
    ),
  );
}
export function ak$(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M10.555 9.883v-.778a6.004 6.004 0 0 0-.814-.058 6.045 6.045 0 0 0-6.038 6.038 6.032 6.032 0 0 0 2.578 4.944 6.015 6.015 0 0 1-1.622-4.111 6.045 6.045 0 0 1 5.896-6.035Z",
        fill: "#00FAF0",
      }),
      a.createElement("path", {
        d: "M10.698 18.675a2.759 2.759 0 0 0 2.753-2.654l.004-13.148h2.403a4.53 4.53 0 0 1-.078-.833H12.5l-.005 13.148a2.76 2.76 0 0 1-2.753 2.655c-.462 0-.896-.115-1.28-.317a2.757 2.757 0 0 0 2.236 1.15Zm9.646-11.34v-.731a4.53 4.53 0 0 1-2.485-.739 4.57 4.57 0 0 0 2.485 1.47Z",
        fill: "#00FAF0",
      }),
      a.createElement("path", {
        d: "M17.859 5.864a4.546 4.546 0 0 1-1.123-2.992h-.878a4.57 4.57 0 0 0 2 2.992Zm-8.117 6.463a2.761 2.761 0 0 0-2.758 2.757c0 1.06.6 1.98 1.479 2.441a2.736 2.736 0 0 1-.522-1.608A2.761 2.761 0 0 1 10.7 13.16c.284 0 .556.047.814.128v-3.35a6.004 6.004 0 0 0-.814-.058c-.048 0-.095.002-.143.003v2.572a2.712 2.712 0 0 0-.814-.127Z",
        fill: "#FF0050",
      }),
      a.createElement("path", {
        d: "M20.344 7.334v2.55a7.804 7.804 0 0 1-4.564-1.467v6.667a6.045 6.045 0 0 1-6.039 6.039 6.002 6.002 0 0 1-3.46-1.095 6.02 6.02 0 0 0 4.417 1.928 6.045 6.045 0 0 0 6.039-6.039V9.25a7.805 7.805 0 0 0 4.564 1.467v-3.28c-.329 0-.649-.036-.957-.103Z",
        fill: "#FF0050",
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.779 15.084V8.417a7.805 7.805 0 0 0 4.564 1.467v-2.55a4.561 4.561 0 0 1-2.485-1.47 4.573 4.573 0 0 1-2.002-2.992h-2.402L13.45 16.02a2.76 2.76 0 0 1-2.753 2.654c-.92 0-1.734-.455-2.235-1.15a2.76 2.76 0 0 1-1.48-2.44 2.761 2.761 0 0 1 2.758-2.758c.284 0 .556.047.814.128V9.882a6.045 6.045 0 0 0-5.896 6.035c0 1.587.617 3.033 1.622 4.111a6.002 6.002 0 0 0 3.46 1.094 6.045 6.045 0 0 0 6.04-6.038Z",
        fill: E,
      }),
    ),
  );
}
export function nM3(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 16 16",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.465 8.924a1.12 1.12 0 0 0-1.58-.004l-3.745 3.7a.522.522 0 0 0-.155.37v1.53c0 .287.234.52.52.52h1.518a.521.521 0 0 0 .37-.154l3.704-3.758a1.12 1.12 0 0 0-.006-1.578l-.627-.627Zm-7.127 4.928h.795v-.875c0-.145.044-.287.125-.406h-.92v1.28Zm-2.375 0h1.28v-1.28h-1.28v1.28ZM1.041 11.65c0 1.172.927 2.122 2.071 2.123h.296a.6.6 0 0 0 .593-.606.601.601 0 0 0-.593-.607h-.296a.9.9 0 0 1-.887-.91v-.278H1.04v.278Zm5.816-5.783a.86.86 0 0 0-.606.35c-.164.226-.164.617-.164 1.4v.86c0 .781 0 1.173.164 1.399a.862.862 0 0 0 .606.35c.278.03.617-.166 1.294-.557l.745-.43c.678-.392 1.017-.587 1.13-.843.1-.222.1-.477 0-.7-.114-.255-.452-.45-1.13-.842l-.745-.43c-.677-.39-1.016-.586-1.294-.557ZM1.041 10.03h1.184V8.684H1.04v1.344Zm0-2.688h1.184V5.997H1.04v1.345Zm12.736-.23c.345-.266.774-.37 1.185-.31v-.787h-1.185v1.097Zm-1.183-4.87a.6.6 0 0 0-.592.607.6.6 0 0 0 .592.606h.296a.9.9 0 0 1 .887.91v.317h1.185v-.318c0-1.171-.928-2.121-2.072-2.122h-.296Zm-9.482.011c-1.144 0-2.071.95-2.071 2.122v.28h1.184v-.28a.9.9 0 0 1 .887-.91h.296a.602.602 0 0 0 .593-.606.601.601 0 0 0-.593-.606h-.296Zm6.651 1.273h1.28V2.247h-1.28v1.28Zm-2.425 0h1.28V2.247h-1.28v1.28Zm-2.375 0h1.28V2.247h-1.28v1.28Z",
        fill: E,
      }),
    ),
  );
}
export function kZs(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.162 1.772a3 3 0 0 1 3.854 1.65l.908 2.195a1 1 0 0 1-1.848.766l-.908-2.195a1 1 0 0 0-1.285-.55L6.36 6.933a1 1 0 0 1-.72-1.866l8.522-3.295ZM12 10a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h3Zm3 4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h6Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19 13a4.99 4.99 0 0 1 1.863-3.892A3 3 0 0 0 18 7H6a2.998 2.998 0 0 0-2.646 1.59 4.996 4.996 0 0 1 0 8.82A3 3 0 0 0 6 19h12a2.999 2.999 0 0 0 2.863-2.11A4.987 4.987 0 0 1 19 13Zm2 0a3 3 0 0 0 1.481 2.587l.558.328-.071.645A5 5 0 0 1 18 21H6a5 5 0 0 1-4.887-3.941l-.198-.918.903-.255a3 3 0 0 0 0-5.773l-.903-.255.198-.918A5.001 5.001 0 0 1 6 5h12a5 5 0 0 1 4.968 4.44l.071.644-.558.328A3 3 0 0 0 21 13Z",
        fill: E,
      }),
    ),
  );
}
export function kET(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4.618 19.764 8.5l-1.192.596a.987.987 0 0 0-.037.019L12 12.382 5.465 9.115a.993.993 0 0 0-.037-.02L4.236 8.5 12 4.618Zm-8 6L1.553 9.394a1 1 0 0 1 0-1.788l9.642-4.822.026-.013c.093-.047.286-.146.502-.186a1.5 1.5 0 0 1 .554 0 1.902 1.902 0 0 1 .528.2l9.642 4.82a1 1 0 0 1 0 1.79L20 10.617v5.47c.001.276.003.623-.11.947a1.99 1.99 0 0 1-.461.747c-.24.245-.551.4-.798.522l-.068.034-5.4 2.7a9.517 9.517 0 0 0-.055.027c-.203.102-.458.23-.74.284a2.001 2.001 0 0 1-.737 0c-.281-.053-.536-.182-.739-.284a9.517 9.517 0 0 0-.055-.027l-5.4-2.7-.068-.034c-.247-.123-.558-.277-.798-.522a2 2 0 0 1-.462-.747c-.112-.324-.11-.671-.11-.947L4 16.01v-5.393Zm2 1v4.393a6.732 6.732 0 0 0 .005.368l.006.003c.061.036.15.08.32.166l5.4 2.7c.141.07.212.105.265.128l.004.002.004-.002c.053-.023.124-.058.264-.128l5.4-2.7a6.734 6.734 0 0 0 .327-.17v-.006c.005-.07.005-.17.005-.36v-4.394l-5.195 2.598-.026.013a1.902 1.902 0 0 1-.502.186 1.5 1.5 0 0 1-.554 0 1.885 1.885 0 0 1-.502-.186l-.026-.013L6 11.617Z",
        fill: E,
      }),
    ),
  );
}
export function wGz(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
        fill: E,
      }),
    ),
  );
}
export function _Qc(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 20 20",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.583 2.083c1.867 0 2.8.001 3.514.364.627.32 1.137.83 1.457 1.456.363.713.363 1.647.363 3.514v5.167c0 1.866 0 2.8-.363 3.513a3.335 3.335 0 0 1-1.457 1.457c-.713.363-1.647.363-3.514.363H7.417c-1.867 0-2.8 0-3.514-.363a3.335 3.335 0 0 1-1.457-1.457c-.363-.713-.363-1.647-.363-3.514V7.417c0-1.867 0-2.8.363-3.514.32-.627.83-1.136 1.457-1.456.713-.363 1.647-.364 3.514-.364h5.166Zm1.348 10.912a10.585 10.585 0 0 0-7.862 0l-.607.243a1 1 0 0 0 .742 1.857l.608-.243a8.585 8.585 0 0 1 6.375 0l.608.243a1 1 0 1 0 .743-1.857l-.607-.243ZM10 5.834A2.083 2.083 0 1 0 10 10a2.083 2.083 0 0 0 0-4.166Z",
        fill: E,
      }),
    ),
  );
}
export function ku5(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 20 20",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10 .833a9.167 9.167 0 1 1 0 18.334A9.167 9.167 0 0 1 10 .833Zm2.816 6.906a.438.438 0 0 0-.553-.554L9.075 8.247c-.391.13-.699.439-.83.83l-1.062 3.188a.438.438 0 0 0 .553.553l3.188-1.062c.391-.13.699-.438.83-.83l1.063-3.187Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function glr(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 20 20",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.583 2.083c1.867 0 2.8 0 3.514.363.627.32 1.137.83 1.457 1.457.363.713.363 1.647.363 3.514v5.166c0 1.867 0 2.801-.363 3.514l-.129.23a3.34 3.34 0 0 1-1.328 1.227l-.137.063c-.697.3-1.627.3-3.377.3H7.417L6.18 17.91c-.993-.016-1.63-.074-2.14-.294l-.137-.063a3.335 3.335 0 0 1-1.328-1.227l-.129-.23c-.363-.713-.363-1.647-.363-3.514V7.417c0-1.867 0-2.8.363-3.514.32-.627.83-1.137 1.457-1.457.535-.272 1.194-.34 2.277-.357l1.237-.006h5.166ZM7.417 3.75c-.961 0-1.582.001-2.054.04-.453.037-.62.1-.703.142-.314.16-.569.414-.729.728-.042.082-.104.25-.141.703-.039.472-.04 1.093-.04 2.054v5.166c0 .961.001 1.582.04 2.054.037.453.1.62.141.703.16.314.415.569.729.729.082.042.25.104.703.141.472.039 1.093.04 2.054.04h5.166c.96 0 1.582-.001 2.054-.04.453-.037.62-.1.703-.141a1.66 1.66 0 0 0 .728-.729c.042-.082.105-.25.142-.703.039-.472.04-1.093.04-2.054V7.417c0-.96-.001-1.582-.04-2.054-.037-.453-.1-.62-.142-.703a1.667 1.667 0 0 0-.728-.728c-.082-.042-.25-.105-.703-.142-.472-.039-1.093-.04-2.054-.04H7.417Zm-1.286 9.4a10.417 10.417 0 0 1 7.738 0l.607.243a.834.834 0 0 1-.619 1.548l-.608-.244a8.75 8.75 0 0 0-6.499 0l-.607.244a.834.834 0 0 1-.619-1.548l.607-.243ZM10 5a2.917 2.917 0 1 1 0 5.834A2.917 2.917 0 0 1 10 5Zm0 1.667a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
        fill: E,
      }),
    ),
  );
}
export function JNH(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 20 20",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.156 7.319a.417.417 0 0 1 .526.527l-1.011 3.036a1.251 1.251 0 0 1-.791.79l-3.036 1.012a.417.417 0 0 1-.527-.526L8.329 9.12a1.25 1.25 0 0 1 .79-.79l3.037-1.012Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10 .833a9.167 9.167 0 1 1 0 18.334A9.167 9.167 0 0 1 10 .833ZM10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        fill: E,
      }),
    ),
  );
}
export function keY(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 2.668c5.403 0 9.782 4.38 9.783 9.783a9.76 9.76 0 0 1-.581 3.317l.141 4.01a1.95 1.95 0 0 1-2.068 2.015l-3.724-.228a9.75 9.75 0 0 1-3.55.668c-5.403 0-9.784-4.38-9.784-9.782 0-1.138.195-2.234.554-3.253a.95.95 0 0 1 1.792.632 7.874 7.874 0 0 0-.445 2.621A7.883 7.883 0 0 0 12 20.333a7.857 7.857 0 0 0 3.035-.605l.203-.085.22.014 3.933.24a.05.05 0 0 0 .053-.052l-.154-4.383.07-.18a7.864 7.864 0 0 0 .522-2.83A7.883 7.883 0 0 0 12 4.567a.95.95 0 0 1 0-1.9Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.006 9.224a.95.95 0 0 1 0 1.9h-2.038v5.096a.95.95 0 0 1-1.9 0v-5.095h-1.95a.95.95 0 0 1 0-1.9h5.888Zm-8.66-7.498a.41.41 0 0 1 .762 0l.205.496a3.533 3.533 0 0 0 1.821 1.881l.58.258a.43.43 0 0 1 0 .78l-.615.273a3.53 3.53 0 0 0-1.795 1.821l-.2.458a.41.41 0 0 1-.755 0l-.2-.458a3.53 3.53 0 0 0-1.794-1.821L3.74 5.14a.43.43 0 0 1 0-.78l.58-.258a3.532 3.532 0 0 0 1.821-1.881l.205-.496Z",
        fill: E,
      }),
    ),
  );
}
export function Tyt(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M10 14a3 3 0 0 1 2.939 2.398h8.164a1 1 0 1 1 0 2h-8.13A3 3 0 0 1 10 21H9a3 3 0 0 1-2.973-2.602H2.803a1 1 0 0 1 0-2h3.258A3.001 3.001 0 0 1 9.001 14h1Zm-1 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm6-13a3 3 0 0 1 2.986 2.706h3.117a1 1 0 0 1 0 2h-3.19A2.999 2.999 0 0 1 15.002 10h-1a2.998 2.998 0 0 1-2.914-2.294H2.803a1 1 0 0 1 0-2h8.212A3 3 0 0 1 14.001 3h1Zm-1 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1Z",
        fill: E,
      }),
    ),
  );
}
export function jtC(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7.091 13.703a26.53 26.53 0 0 0 2.195 1.566l-3.68 5.083a1.563 1.563 0 1 1-2.465-1.92l3.95-4.729ZM6.054 2.34c1.228.026 2.676.391 4.183 1.013a.9.9 0 0 1-.687 1.665c-1.384-.571-2.604-.859-3.535-.879-.96-.02-1.403.237-1.577.486-.128.183-.212.494-.106 1.018.108.527.396 1.187.886 1.936.978 1.496 2.66 3.196 4.827 4.71 2.168 1.512 4.344 2.504 6.085 2.907.873.201 1.59.244 2.122.164.53-.08.792-.266.92-.45.156-.223.247-.647.005-1.393a.9.9 0 0 1 1.712-.556c.326 1.006.373 2.099-.241 2.98-.5.716-1.29 1.071-2.125 1.198-.832.126-1.793.043-2.798-.19-2.016-.465-4.402-1.573-6.71-3.184-2.308-1.611-4.17-3.469-5.303-5.2-.564-.864-.975-1.737-1.143-2.562-.169-.827-.108-1.691.392-2.408.685-.981 1.895-1.282 3.093-1.256Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.105 4.113a5.96 5.96 0 0 0 .787 2.035l-4.254 5.874a22.708 22.708 0 0 1-1.98-1.39l5.447-6.52Zm2.211 3.621A5.973 5.973 0 0 0 21 9l.068-.002c-.315.274-.57.61-.74.993l-.223.503a.351.351 0 0 1-.638 0l-.21-.475a2.892 2.892 0 0 0-1.54-1.491l-.406-.167a.336.336 0 0 1 0-.624l.005-.003Z",
        fill: E,
      }),
      a.createElement("circle", {
        "data-follow-fill": "currentColor",
        r: "3",
        cy: "3",
        cx: "21",
        fill: E,
      }),
    ),
  );
}
export function VKR(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7.091 13.704a26.651 26.651 0 0 0 2.196 1.565l-3.681 5.083a1.563 1.563 0 1 1-2.465-1.919l3.95-4.73ZM6.054 2.339c1.229.027 2.676.392 4.183 1.014a.9.9 0 0 1-.687 1.665c-1.384-.571-2.604-.859-3.535-.879-.96-.02-1.403.237-1.577.487-.128.183-.212.493-.105 1.017.107.527.395 1.187.885 1.937.978 1.495 2.66 3.196 4.828 4.709 2.167 1.513 4.344 2.505 6.084 2.907.873.202 1.59.245 2.123.164.528-.08.792-.266.92-.45.155-.222.246-.647.004-1.393a.9.9 0 0 1 1.712-.556c.327 1.006.374 2.1-.241 2.98-.5.716-1.29 1.071-2.125 1.198-.832.127-1.793.043-2.798-.19-2.016-.465-4.402-1.573-6.71-3.184-2.308-1.61-4.17-3.468-5.303-5.2-.564-.864-.975-1.737-1.143-2.562-.169-.827-.108-1.691.392-2.408.685-.98 1.895-1.282 3.093-1.256Zm9.956.69a.868.868 0 0 1 1.37 1.066l-5.742 7.927a22.638 22.638 0 0 1-1.98-1.39L16.01 3.03Zm3.457 2.574a.351.351 0 0 1 .638 0l.224.503a2.89 2.89 0 0 0 1.49 1.47l.375.164a.335.335 0 0 1 0 .618l-.375.163a2.89 2.89 0 0 0-1.49 1.47l-.224.504a.351.351 0 0 1-.638 0l-.21-.476a2.891 2.891 0 0 0-1.54-1.491l-.406-.167a.336.336 0 0 1 0-.624l.405-.168a2.892 2.892 0 0 0 1.54-1.491l.211-.475Z",
        fill: E,
      }),
    ),
  );
}
export function jsI(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.898 2.106a1 1 0 0 1 1.155.187L21.71 7.95a1 1 0 0 1-.849 1.696l-1.793-.258-2.957 5.322c.353.821.572 1.652.536 2.484-.047 1.037-.484 1.959-1.295 2.77a1 1 0 0 1-1.414 0l-.096-.094-.265-.266-.925-.924-1.996-1.996-6.167 4.56c-1.143.846-2.578-.585-1.736-1.73l4.548-6.185-1.987-1.988-.918-.919-.264-.262-.094-.094a1.001 1.001 0 0 1 0-1.415c.816-.815 1.765-1.258 2.808-1.31.837-.043 1.666.17 2.465.538l5.306-2.94-.26-1.796a1 1 0 0 1 .54-1.037Z",
        fill: E,
      }),
    ),
  );
}
export function P2i(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M9 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z",
        "data-follow-fill": "#fff",
        fill: E,
      }),
      a.createElement("path", {
        d: "M17.5 3A4.5 4.5 0 0 1 22 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 16.5v-9A4.5 4.5 0 0 1 6.5 3h11Zm-11 2A2.5 2.5 0 0 0 4 7.5v9A2.5 2.5 0 0 0 6.5 19h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 17.5 5h-11Z",
        clipRule: "evenodd",
        fillRule: "evenodd",
        "data-follow-fill": "#fff",
        fill: E,
      }),
    ),
  );
}
export function GSD(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.5 3A4.5 4.5 0 0 1 22 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 2 16.5v-9A4.5 4.5 0 0 1 6.5 3h11Zm-11 2A2.5 2.5 0 0 0 4 7.5v9A2.5 2.5 0 0 0 6.5 19h11a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 17.5 5h-11Z",
        fill: E,
      }),
    ),
  );
}
export function tdO(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M15.655 17.545a1.08 1.08 0 0 1 1.384.645l.75 2.058a1.08 1.08 0 0 1-2.03.739l-.75-2.058a1.08 1.08 0 0 1 .646-1.384Zm-9.513-7.382a1.08 1.08 0 0 1 1.516 1.54L5.58 13.748a3.306 3.306 0 1 0 4.658 4.693l2.086-2.086a1.08 1.08 0 0 1 1.527 1.528l-2.086 2.086a5.466 5.466 0 1 1-7.7-7.76l2.077-2.047Zm11.75 5.145a1.08 1.08 0 0 1 1.384-.646l2.058.75a1.08 1.08 0 0 1-.738 2.029l-2.058-.75a1.08 1.08 0 0 1-.646-1.383Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.11 8.375a1.08 1.08 0 1 1 1.528 1.527L9.89 15.651a1.08 1.08 0 0 1-1.528-1.528l5.749-5.748Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.223 4.036a5.471 5.471 0 0 1 7.719 7.757l-1.44 1.44a1.08 1.08 0 1 1-1.528-1.527l1.44-1.44a3.311 3.311 0 0 0-4.67-4.695l-1.464 1.45a1.08 1.08 0 0 1-1.52-1.536l1.463-1.449ZM2.275 6.765a1.08 1.08 0 0 1 1.384-.646l2.058.75a1.08 1.08 0 0 1-.739 2.029l-2.057-.749a1.08 1.08 0 0 1-.646-1.384Zm4.837-4.837a1.08 1.08 0 0 1 1.384.645l.75 2.058a1.08 1.08 0 0 1-2.03.739l-.75-2.058a1.08 1.08 0 0 1 .646-1.384Z",
        fill: E,
      }),
    ),
  );
}
export function X_C(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M17 2.007a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h10Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.998 2A1 1 0 0 1 16 3v4.79l2.866 6.505a1 1 0 1 1-1.83.806l-2.952-6.698A1.001 1.001 0 0 1 14 8V4.001l-4 .004V8a1 1 0 0 1-.085.403l-2.95 6.698a1 1 0 0 1-1.83-.806L8 7.787v-4.78a1 1 0 0 1 .998-1l6-.007Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.12 19.52a.473.473 0 0 0-.048-.204l-1.888-3.914c-.065-.037-.141-.082-.232-.128-.3-.151-.718-.33-1.2-.447-.961-.235-2.088-.216-3.113.64-1.672 1.392-3.521 1.373-4.862 1.045a7.543 7.543 0 0 1-1.278-.441l-1.57 3.245a.471.471 0 0 0 .138.58l.08.05.1.035c.035.008.07.011.106.012h13.295c.26 0 .471-.212.471-.472Zm2 0a2.472 2.472 0 0 1-2.472 2.473H5.353a2.472 2.472 0 0 1-2.225-3.548l2.025-4.183a1 1 0 0 1 1.467-.388l.016.01.08.05a5.67 5.67 0 0 0 1.535.635c.957.235 2.082.216 3.108-.639 1.672-1.393 3.523-1.374 4.866-1.047a7.708 7.708 0 0 1 2.236.951l.04.027.013.008.005.003.002.001s.001.002-.53.77l.532-.769c.142.099.256.233.332.39l2.018 4.184c.162.334.246.701.246 1.073Z",
        fill: E,
      }),
    ),
  );
}
export function ghC(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 12 12",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.997 4.59A.4.4 0 0 0 3 5.157l2.719 2.687a.4.4 0 0 0 .562 0L9 5.156a.4.4 0 0 0-.563-.569L6 6.997l-2.438-2.41a.4.4 0 0 0-.565.004Z",
        fillOpacity: ".6",
        fill: E,
      }),
    ),
  );
}
export function nTQ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M8 3a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v3a1 1 0 1 0 2 0V4h3a1 1 0 0 0 1-1ZM2 20v-3a1 1 0 1 1 2 0v3h3a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2Zm18 0v-3a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2h-3a1 1 0 1 1 0-2h3Zm2-16v3a1 1 0 0 1-2 0V4h-3a1 1 0 1 1 0-2h3a2 2 0 0 1 2 2Z",
        fill: E,
      }),
    ),
  );
}
export function X7o(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.81 2.1c.78 0 1.524.073 2.23.22a6.016 6.016 0 0 0 .106 1.992 8.516 8.516 0 0 0-2.336-.31c-1.396 0-2.63.217-3.706.645-1.076.43-1.98 1.032-2.71 1.808v.001a7.899 7.899 0 0 0-1.636 2.765h-.001c-.375 1.05-.564 2.216-.564 3.496 0 1.568.288 2.894.855 3.985l.108.198a5.746 5.746 0 0 0 2.366 2.263l.21.1c1.064.487 2.347.734 3.857.734 1.001 0 1.952-.111 2.852-.335h.004c.494-.113.957-.232 1.389-.357.614-.178 1.26.268 1.26.92 0 .38-.23.73-.595.858-.592.209-1.239.382-1.94.522-.892.197-1.882.295-2.97.295-1.977 0-3.678-.36-5.099-1.085-1.42-.725-2.513-1.766-3.275-3.12l-.001-.002C2.469 16.323 2.1 14.686 2.1 12.79c0-1.522.244-2.932.732-4.23a9.637 9.637 0 0 1 2.125-3.403c.929-.97 2.05-1.719 3.363-2.244l.507-.19c1.202-.415 2.53-.622 3.983-.622ZM7.89 19.496l.088.035a6.872 6.872 0 0 1-.308-.13l.22.095Zm-2.744-2.323a6.2 6.2 0 0 1-.12-.197l.12.197ZM12.51 6.812c.737 0 1.459.064 2.164.195 1.096.174 1.763 1.176 1.709 2.258l-.162 3.216c-.017.291-.025.499-.025.623v.244c0 .413.037.75.107 1.011.07.261.17.44.29.551.288.252.618.376.997.376.469 0 .86-.181 1.181-.555.347-.4.613-.929.792-1.592v-.002a8.16 8.16 0 0 0 .292-2.242 8.49 8.49 0 0 0-.234-2.056c.443.104.904.161 1.378.161.245 0 .486-.017.723-.046.117.62.177 1.275.177 1.965 0 .756-.094 1.495-.279 2.219h.001a6.49 6.49 0 0 1-.815 1.989l-.001.002a4.872 4.872 0 0 1-1.388 1.428l-.003.002c-.559.357-1.22.533-1.974.533-.792 0-1.438-.22-1.92-.672l-.004-.004a2.986 2.986 0 0 1-.786-1.327 4.166 4.166 0 0 1-1.263 1.369c-.612.426-1.375.634-2.278.634-1.297 0-2.322-.427-3.052-1.292l-.002-.001c-.708-.86-1.055-1.99-1.055-3.374 0-1.089.22-2.053.664-2.887a4.982 4.982 0 0 1 1.874-2l.001-.002c.824-.485 1.79-.724 2.89-.724Zm.024 1.829c-.79 0-1.41.189-1.875.551-.474.37-.815.848-1.021 1.437a5.403 5.403 0 0 0-.316 1.845c0 1.02.205 1.728.583 2.157l.156.152c.38.334.86.503 1.453.503.887 0 1.496-.32 1.862-.945l.002-.003c.398-.653.635-1.51.7-2.578l.108-2.195c.022-.427-.251-.794-.652-.853a6.908 6.908 0 0 0-1-.071Zm7.235 4.304.008-.03.028-.127-.037.157Z",
        fill: E,
      }),
      a.createElement("circle", {
        "data-follow-fill": "currentColor",
        cx: "21",
        cy: "3",
        r: "3",
        fill: E,
      }),
    ),
  );
}
export function kKb(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M20.605 12.835a1 1 0 0 1 .895.995v5.49a1 1 0 0 1-2 0v-1.182a9.67 9.67 0 0 1-7.5 3.554c-4.285 0-7.918-2.78-9.2-6.632a1 1 0 1 1 1.898-.63 7.697 7.697 0 0 0 14.825-.81 1 1 0 0 1 1.082-.785Zm-9.603-4.946c.332-.857 1.49-.91 1.925-.16l.077.162 2.718 7.04a.9.9 0 1 1-1.68.648l-.487-1.262H10.44l-.489 1.264a.9.9 0 1 1-1.678-.65l2.728-7.042Zm.137 4.629h1.721l-.859-2.226-.862 2.226ZM12 2.307c4.285 0 7.918 2.78 9.2 6.631a1 1 0 0 1-1.898.632 7.697 7.697 0 0 0-14.824.809 1 1 0 0 1-1.978-.21V4.68a1 1 0 0 1 2 0v1.18A9.672 9.672 0 0 1 12 2.307Z",
        fill: E,
      }),
    ),
  );
}
export function _9K(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12.002 16a1 1 0 0 1 1 1v1.59l.414-.412a1 1 0 1 1 1.414 1.414l-2.121 2.12a1.01 1.01 0 0 1-.324.217.862.862 0 0 1-.066.023l-.024.009c-.025.008-.05.014-.075.02l-.023.004c-.012.003-.025.004-.038.006a1.008 1.008 0 0 1-.157.015.962.962 0 0 1-.171-.016l-.024-.004-.03-.006a.97.97 0 0 1-.07-.02l-.025-.008a.937.937 0 0 1-.236-.115 1.006 1.006 0 0 1-.152-.124l-2.121-2.121a1 1 0 0 1 1.414-1.414l.415.414V17a1 1 0 0 1 1-1ZM17 12.8a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2H7a2 2 0 0 0-2 2 1 1 0 1 1-2 0 4 4 0 0 1 4-4h10ZM4 6.2a1 1 0 0 1 1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 2-1.999 1 1 0 0 1 2 0 4 4 0 0 1-4 4H7a4 4 0 0 1-4-4 1 1 0 0 1 1-1ZM12 2c.059 0 .116.005.17.015l.025.004.047.011.05.013.059.02.029.011a1.044 1.044 0 0 1 .329.219l2.121 2.121a1 1 0 0 1-1.414 1.414L13 5.413V7a1 1 0 0 1-2 0V5.414l-.414.414a1 1 0 1 1-1.414-1.414l2.12-2.121a1.004 1.004 0 0 1 .329-.219l.03-.01a.991.991 0 0 1 .155-.045l.024-.004A.951.951 0 0 1 12 2Z",
        fill: E,
      }),
    ),
  );
}
export function $tM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M2.92 2.527a1 1 0 0 1 1.414 0l16.97 16.97a1.001 1.001 0 0 1-1.413 1.415l-.683-.683a4.87 4.87 0 0 1-1.597.27H6.39a4.889 4.889 0 0 1-4.89-4.887V8.39c0-1.6.77-3.019 1.957-3.91l-.537-.54a1 1 0 0 1 0-1.414Zm1.975 3.389A2.887 2.887 0 0 0 3.5 8.389v7.222A2.889 2.889 0 0 0 6.389 18.5h11.09L14.9 15.922a3.636 3.636 0 0 1-.407-.124 3.224 3.224 0 0 1-1.577-1.24 3.54 3.54 0 0 1-.476-1.096L8.928 9.949c-.49.248-1.028.856-1.028 2.343 0 .607.142 1.008.316 1.27.173.261.414.44.708.55.383.144.842.16 1.274.074.368-.073.553-.11.646-.093a.4.4 0 0 1 .224.102c.074.06.141.177.276.411l.05.086.05.087c.134.234.2.352.2.488a.561.561 0 0 1-.123.323c-.088.102-.195.138-.408.21-.877.298-1.907.34-2.82-.002a3.224 3.224 0 0 1-1.577-1.24c-.405-.61-.616-1.373-.616-2.266 0-1.715.58-2.94 1.526-3.645L4.895 5.916ZM17.61 3.5a4.89 4.89 0 0 1 4.889 4.889v7.222c0 .76-.174 1.478-.483 2.12l-1.57-1.572a2.9 2.9 0 0 0 .053-.548V8.39A2.889 2.889 0 0 0 17.61 5.5H9.786l-2-2h9.825Zm-3.176 4.786c.938-.43 1.992-.399 2.877-.102.213.072.32.108.409.21a.56.56 0 0 1 .123.324c.001.135-.066.253-.2.487l-.05.087-.05.086c-.132.232-.199.347-.271.406a.394.394 0 0 1-.221.103c-.092.017-.28-.017-.654-.085-.418-.077-.854-.044-1.215.12a1.525 1.525 0 0 0-.548.426L13.357 9.07a3.305 3.305 0 0 1 1.078-.784Z",
        fill: E,
      }),
    ),
  );
}
export function aWw(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7 2a1 1 0 0 1 1 1v.504l.9-.004h6.2c2.24 0 3.36 0 4.216.436a4.001 4.001 0 0 1 1.748 1.748c.436.855.436 1.976.436 4.216v4.2c0 2.24 0 3.36-.436 4.216l-.154.276a4.002 4.002 0 0 1-1.594 1.473l-.164.076c-.836.359-1.952.359-4.052.359H8.9l-.9-.005V21a1 1 0 1 1-2 0v-.583c-.455-.052-.825-.136-1.152-.276l-.164-.076a4.002 4.002 0 0 1-1.594-1.473l-.154-.276C2.5 17.461 2.5 16.34 2.5 14.1V9.9c0-2.24 0-3.36.436-4.216a4.001 4.001 0 0 1 1.748-1.748c.367-.188.783-.292 1.316-.353V3a1 1 0 0 1 1-1Zm1 3.504v12.991c.27.001.568.005.9.005H14v-13H8.9c-.332 0-.63.003-.9.004Zm8 9.996v2.995c.667-.003 1.161-.01 1.564-.043.544-.044.745-.12.844-.17a2 2 0 0 0 .874-.874c.05-.099.126-.3.17-.844.024-.295.035-.639.041-1.064H16ZM6 5.602c-.23.039-.342.082-.408.116a2 2 0 0 0-.874.874c-.05.099-.126.3-.17.844C4.502 8.002 4.5 8.747 4.5 9.9v4.2c0 1.153.002 1.898.048 2.464.044.544.12.745.17.844a2 2 0 0 0 .874.874c.066.034.178.076.408.116V5.602ZM16 13.5h3.5v-3H16v3Zm0-5h3.493a16.185 16.185 0 0 0-.04-1.064c-.045-.544-.12-.745-.17-.844a2 2 0 0 0-.875-.874c-.099-.05-.3-.126-.844-.17A22.06 22.06 0 0 0 16 5.504V8.5Z",
        fill: E,
      }),
    ),
  );
}
export function M5n(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "#FFF",
        d: "M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm4-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm1.97 10.97 7-7a.75.75 0 0 1 1.06 1.06l-7 7a.75.75 0 0 1-1.06-1.06Zm5 1 3-3a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06-1.06Zm-6-6 3-3a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06-1.06Z",
        fill: E,
      }),
    ),
  );
}
export function yrQ(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 48 48",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        strokeLinejoin: "round",
        strokeWidth: "4",
        d: "M24 40.944A11.955 11.955 0 0 0 32 44c6.627 0 12-5.373 12-12 0-5.591-3.824-10.29-9-11.622",
        "data-follow-stroke": "currentColor",
        stroke: p,
      }),
      a.createElement("path", {
        strokeLinejoin: "round",
        strokeWidth: "4",
        d: "M13 20.378C7.824 21.71 4 26.408 4 32c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.55-.294-3.03-.828-4.39",
        "data-follow-stroke": "currentColor",
        stroke: p,
      }),
      a.createElement("path", {
        strokeLinejoin: "round",
        strokeWidth: "4",
        d: "M24 28c6.627 0 12-5.373 12-12S30.627 4 24 4 12 9.373 12 16s5.373 12 12 12Z",
        "data-follow-stroke": "currentColor",
        stroke: p,
      }),
    ),
  );
}
export function O1g(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M18.442 14.168a1 1 0 0 1 1 1v1.75h1.75a1 1 0 0 1 0 2h-1.75v1.75a1 1 0 0 1-2 0v-1.75h-1.75a1 1 0 1 1 0-2h1.75v-1.75a1 1 0 0 1 1-1Zm-11.351-.465a26.59 26.59 0 0 0 2.196 1.566l-3.681 5.083a1.563 1.563 0 1 1-2.465-1.92l3.95-4.729ZM6.054 2.339c1.228.027 2.676.392 4.183 1.014a.901.901 0 0 1-.687 1.665c-1.384-.571-2.604-.859-3.535-.88-.96-.02-1.403.238-1.577.487-.128.183-.212.494-.106 1.018.108.527.396 1.187.886 1.936.978 1.495 2.66 3.196 4.827 4.71 1.502 1.047 3.007 1.845 4.369 2.37a3.508 3.508 0 0 0-1.606 1.279 23.715 23.715 0 0 1-3.793-2.173c-2.308-1.611-4.17-3.469-5.303-5.2-.564-.864-.975-1.737-1.143-2.562-.169-.827-.108-1.692.392-2.408.685-.981 1.895-1.282 3.093-1.256Z",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.01 3.03a.87.87 0 0 1 1.37 1.065l-5.742 7.926a22.64 22.64 0 0 1-1.98-1.39L16.01 3.03Zm3.457 2.573a.351.351 0 0 1 .638 0l.224.503a2.89 2.89 0 0 0 1.49 1.47l.375.163a.335.335 0 0 1 0 .618l-.375.164c-.668.29-1.2.815-1.49 1.47l-.224.503a.351.351 0 0 1-.638 0l-.21-.475a2.893 2.893 0 0 0-1.54-1.492l-.406-.167a.336.336 0 0 1 0-.624l.405-.168a2.893 2.893 0 0 0 1.54-1.49l.211-.475Z",
        fill: E,
      }),
    ),
  );
}
export function nYt(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        clipRule: "evenodd",
        fillRule: "evenodd",
        d: "M16.12 2.745a4.002 4.002 0 0 1 4.518 3.405l.139.99a1 1 0 0 1-.85 1.13L7.58 10.004h2.804L12.731 10l7.27.004a1 1 0 0 1 .999 1V17a4 4 0 0 1-4 4H7a4 4 0 0 1-3.995-3.794L3 17v-6.995h.003l-.19-1.35a4 4 0 0 1 3.404-4.518l9.903-1.392Zm-5.732 9.26H5V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.998L12.733 12l-2.345.005ZM6.496 6.118a2 2 0 0 0-1.702 2.259l2.97-.418.712-2.12-1.98.279Zm3.96-.557-.711 2.12 2.97-.418.712-2.12-2.97.418Zm5.942-.835-.99.139-.712 2.12 3.962-.557a2 2 0 0 0-2.26-1.702Z",
        fill: E,
      }),
    ),
  );
}
export function lii(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7 12.998a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm9.532.32a.506.506 0 0 1 .94 0l.254.61a4.363 4.363 0 0 0 2.25 2.325l.716.32a.53.53 0 0 1 0 .962l-.76.337a4.361 4.361 0 0 0-2.217 2.25l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.361 4.361 0 0 0-2.218-2.25l-.758-.337a.53.53 0 0 1 0-.963l.716-.32a4.362 4.362 0 0 0 2.25-2.323l.253-.612ZM7 14.997a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-12a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-10 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
        fill: E,
      }),
    ),
  );
}
export function Rgk(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M7 12.998a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm9.532.32a.506.506 0 0 1 .94 0l.254.61a4.363 4.363 0 0 0 2.25 2.325l.716.32a.53.53 0 0 1 0 .962l-.76.337a4.361 4.361 0 0 0-2.217 2.25l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.361 4.361 0 0 0-2.218-2.25l-.758-.337a.53.53 0 0 1 0-.963l.716-.32a4.362 4.362 0 0 0 2.25-2.323l.253-.612ZM7 2.997a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",
        fill: E,
      }),
    ),
  );
}
export function meS(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M14.774 3.821c1.566 1.567-2.158 5.688-3.716 7.245C9.5 12.624 7.336 15.34 6.432 17.1c-1.22 2.371-.715 3.766 2.247 3.351-2.52 1.271-4.638 1.55-5.664.524C.767 18.726 4.994 11.95 8.59 8.59s4.647-3.81 6.184-4.77Zm2.583 13.535c1.53-1.532 3.198-2.347 3.723-1.823.525.525-.29 2.193-1.822 3.725-1.531 1.531-3.198 2.347-3.724 1.822-.525-.525.291-2.193 1.822-3.724ZM15.306 3.542c2.519-1.27 4.637-1.55 5.664-.523 2.247 2.247-1.98 9.024-5.575 12.383-3.596 3.358-4.648 3.809-6.185 4.769-1.566-1.566 2.16-5.687 3.717-7.245 1.558-1.558 3.721-4.273 4.626-6.032 1.22-2.372.714-3.766-2.247-3.352Zm-10.564 1.2C6.274 3.21 7.941 2.393 8.466 2.918c.525.525-.29 2.192-1.822 3.724S3.445 8.99 2.92 8.465c-.525-.525.29-2.192 1.822-3.724Z",
        fill: E,
      }),
    ),
  );
}
export function kiM(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M12 1.5c5.799 0 10.5 4.701 10.5 10.5 0 .774-.086 1.528-.245 2.254a2.065 2.065 0 0 1-.078-.166l-.232-.56c-.817-1.974-3.537-2.035-4.473-.185l-.085.184-.232.56c-.203.492-.577.87-1.028 1.071l-.657.292c-1.96.872-1.96 3.666 0 4.537l.696.31c.39.173.721.48.936.879A10.45 10.45 0 0 1 12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5Zm-1.365 7.017c-.388.04-.74.243-.969.558-.263.362-.263.987-.263 2.238v1.374c0 1.251 0 1.876.263 2.238.23.315.581.519.969.56.444.046.986-.267 2.068-.892l1.19-.688c1.083-.625 1.625-.937 1.807-1.345a1.377 1.377 0 0 0 0-1.12c-.182-.408-.724-.72-1.806-1.345l-1.19-.688c-1.083-.625-1.625-.937-2.07-.89Z",
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: E,
      }),
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M19.234 14.293a.465.465 0 0 1 .864 0l.231.56a4.003 4.003 0 0 0 2.064 2.132l.657.292a.486.486 0 0 1 0 .883l-.697.31a3.999 3.999 0 0 0-2.033 2.063l-.226.519a.464.464 0 0 1-.856 0l-.226-.519a3.999 3.999 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.883l.657-.292a4.002 4.002 0 0 0 2.064-2.131l.231-.561Z",
        fill: E,
      }),
    ),
  );
}
export function ix_(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M11.805 5.786c1.25-.926 2.193-1.373 2.471-1.096.489.488-1.261 3.03-3.909 5.677-4.33 4.331-6.715 8.968-5.326 10.359.29.29.723.415 1.264.393.421.017.92-.069 1.48-.249-2.117.9-3.859 1.005-4.76.105-1.874-1.875.61-7.403 5.553-12.354l.022-.02c.03-.032.062-.063.093-.094l.065-.064.11-.108c.97-.95 1.96-1.804 2.937-2.549Zm5.55 11.57c1.532-1.531 3.2-2.347 3.725-1.822.525.526-.29 2.193-1.822 3.724-1.532 1.531-3.2 2.347-3.725 1.822-.524-.525.291-2.192 1.822-3.723ZM16.217 3.13c2.116-.9 3.858-1.005 4.759-.105 1.874 1.876-.612 7.402-5.554 12.353l-.022.021c-.03.032-.062.063-.093.093l-.064.065-.11.108c-.97.95-1.96 1.803-2.938 2.548-1.25.926-2.193 1.374-2.471 1.097-.489-.488 1.262-3.03 3.91-5.677 4.331-4.331 6.715-8.97 5.325-10.36-.29-.29-.722-.414-1.263-.392-.421-.017-.92.07-1.48.249ZM4.742 4.74C6.274 3.211 7.94 2.394 8.466 2.92c.525.525-.29 2.193-1.822 3.725C5.112 8.174 3.445 8.99 2.92 8.466c-.525-.525.29-2.193 1.822-3.725Z",
        fill: E,
      }),
    ),
  );
}
export function umo(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        clipRule: "evenodd",
        fillRule: "evenodd",
        d: "M16.5 2.5a5 5 0 0 1 5 5v5.313c-1.099-1.238-3.223-1.061-4.028.53l-.085.184-.232.56c-.203.492-.577.87-1.028 1.071l-.657.292c-1.96.872-1.96 3.666 0 4.537l.696.31a2 2 0 0 1 1.013 1.035l.05.114a5.042 5.042 0 0 1-.729.054h-9a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h9Zm-3.525 9.06a3.5 3.5 0 0 0-4.95 0L4.5 15.086V16.5c0 .417.085.814.238 1.175l4.701-4.7a1.5 1.5 0 0 1 2.121 0l2.233 2.232a1 1 0 1 0 1.414-1.414l-2.232-2.232Zm2.775-4.81a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
        "data-follow-fill": "#fff",
        fill: E,
      }),
      a.createElement("path", {
        d: "M19.234 14.293a.465.465 0 0 1 .864 0l.231.56a4.003 4.003 0 0 0 2.064 2.132l.657.292a.486.486 0 0 1 0 .883l-.697.31a3.999 3.999 0 0 0-2.033 2.063l-.226.519a.464.464 0 0 1-.856 0l-.226-.519a3.999 3.999 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.883l.657-.292a4.002 4.002 0 0 0 2.064-2.131l.231-.561Z",
        "data-follow-fill": "#fff",
        fill: E,
      }),
    ),
  );
}
export function mUl(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        d: "M8.952 1.952A10.5 10.5 0 0 1 22.5 12a1 1 0 0 1-2 0 8.501 8.501 0 1 0-6.3 8.21 1 1 0 0 1 .518 1.933A10.502 10.502 0 0 1 1.506 11.656a10.5 10.5 0 0 1 7.446-9.704Zm10.282 12.341c.162-.39.7-.39.863 0l.232.56a4.004 4.004 0 0 0 2.063 2.132l.658.292a.486.486 0 0 1 0 .883l-.697.31a3.999 3.999 0 0 0-2.034 2.062l-.225.519a.464.464 0 0 1-.856 0l-.226-.519a3.998 3.998 0 0 0-2.034-2.062l-.696-.31a.486.486 0 0 1 0-.883l.657-.292a4.002 4.002 0 0 0 2.063-2.132l.232-.56Zm-8.6-5.776c.444-.047.986.265 2.069.89l1.19.688c1.083.625 1.624.938 1.806 1.345.159.357.159.764 0 1.12-.182.407-.723.72-1.806 1.345l-1.19.688c-1.083.625-1.625.937-2.07.89a1.376 1.376 0 0 1-.968-.558c-.263-.362-.263-.987-.263-2.238v-1.374c0-1.25 0-1.876.263-2.238.229-.315.581-.518.969-.558Z",
        "data-follow-fill": "#fff",
        fill: E,
      }),
    ),
  );
}
export function QOg(t) {
  const eRef = a.useRef(null);
  const {
    size = "1em",
    width,
    height,
    spin,
    rtl,
    color,
    fill,
    stroke,
    className,
    ...rest
  } = t;
  const g = width || size;
  const A = height || size;
  const p = stroke || color;
  const E = fill || color;
  a.useEffect(
    function () {
      let t;
      let l;
      if (!(E || (t = eRef.current) == null)) {
        t.querySelectorAll("[data-follow-fill]").forEach((t) => {
          t.setAttribute("fill", t.getAttribute("data-follow-fill") || "");
        });
      }
      if (!(p || (l = eRef.current) == null)) {
        l.querySelectorAll("[data-follow-stroke]").forEach((t) => {
          t.setAttribute("stroke", t.getAttribute("data-follow-stroke") || "");
        });
      }
    },
    [stroke, color, fill],
  );
  return a.createElement(
    "svg",
    {
      ref: eRef,
      width: g,
      height: A,
      viewBox: "0 0 24 24",
      preserveAspectRatio: "xMidYMid meet",
      fill: "none",
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      className: ""
        .concat(className || "", " ")
        .concat(spin ? o : "", " ")
        .concat(rtl ? i : "")
        .trim(),
      ...rest,
    },
    a.createElement(
      "g",
      null,
      a.createElement("path", {
        "data-follow-fill": "currentColor",
        d: "M16.5 2.5a5 5 0 0 1 5 5v4a1 1 0 1 1-2 0v-4a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v7.586l3.525-3.526a3.5 3.5 0 0 1 4.95 0l2.232 2.233a1 1 0 1 1-1.414 1.414l-2.232-2.232a1.5 1.5 0 0 0-2.122 0l-4.7 4.7A3.001 3.001 0 0 0 7.5 19.5H15a1 1 0 1 1 0 2H7.5a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5h9Zm2.734 11.793a.465.465 0 0 1 .864 0l.231.56a4.003 4.003 0 0 0 2.064 2.132l.657.292a.486.486 0 0 1 0 .883l-.697.31a3.999 3.999 0 0 0-2.033 2.063l-.226.519a.464.464 0 0 1-.856 0l-.226-.519a3.999 3.999 0 0 0-2.034-2.063l-.696-.31a.486.486 0 0 1 0-.883l.657-.292a4.002 4.002 0 0 0 2.064-2.131l.231-.561ZM15.75 6.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
        fill: E,
      }),
    ),
  );
}
