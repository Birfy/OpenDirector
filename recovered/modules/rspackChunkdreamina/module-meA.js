import i from "SR";
const r = {
  markdown: "text/markdown",
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
const a = {
  "text/markdown": "markdown",
  "application/pdf": "pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "docx",
};
const o = {
  markdown: "md",
  pdf: "pdf",
  docx: "docx",
};
const l = {
  md: "markdown",
  markdown: "markdown",
  pdf: "pdf",
  docx: "docx",
};
const u = {
  markdown: i.NuroFileType.markdown,
  pdf: i.NuroFileType.pdf,
  docx: i.NuroFileType.docx,
};
const s = {
  [i.NuroFileType.markdown]: "markdown",
  [i.NuroFileType.pdf]: "pdf",
  [i.NuroFileType.docx]: "docx",
};
export function Sd(e) {
  const t = String(e != null ? e : "").toLowerCase();
  if (t === "markdown" || t === "pdf" || t === "docx") {
    return t;
  }
}
export function b2(e) {
  return !!Sd(e);
}
export function a9(e) {
  return Sd(e) === "markdown";
}
export function X2(e) {
  return Sd(e) === "pdf";
}
export function Zy(e) {
  return Sd(e) === "docx";
}
export function YZ(e) {
  return e !== undefined && s[e] !== undefined;
}
export function WM(e) {
  const t = String(e != null ? e : "")
    .toLowerCase()
    .match(/\.([a-z0-9]+)$/);
  if (t) {
    return l[t[1]];
  }
}
export function g3(e) {
  if (e) {
    try {
      const { pathname } = new URL(e);
      const n = pathname.split("/").pop();
      if (n == null ? undefined : n.includes(".")) {
        return decodeURIComponent(n);
      }
      return undefined;
    } catch (e) {
      return;
    }
  }
}
export function zf(e) {
  if (e !== undefined) {
    return s[e];
  }
}
export function jV(e) {
  let t;
  let n;
  let i;
  let r;
  const { format, mimeType, fileName, url, nuroFileType } = e;
  if (
    (t =
      (n =
        (i =
          (r = Sd(format)) != null
            ? r
            : a[String(mimeType != null ? mimeType : "").toLowerCase()]) != null
          ? i
          : WM(fileName)) != null
        ? n
        : WM(g3(url))) != null
  ) {
    return t;
  }
  return zf(nuroFileType);
}
export function ed(e) {
  const t = Sd(e);
  if (t) {
    return r[t];
  }
}
export function Nw(e) {
  const t = Sd(e);
  if (t) {
    return o[t];
  }
}
export function S3(e) {
  return u[e];
}
export function A8(e) {
  return ed(zf(e));
}
