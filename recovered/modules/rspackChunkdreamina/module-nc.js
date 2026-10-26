import a from "oa";
import r from "bk";
import * as i from "./module-qg_2.js";
function o(e) {
  let t;
  let n;
  let a;
  let r;
  let i;
  let o;
  let l;
  let p;
  let h;
  return (
    !!d(e) &&
    !!(
      d((t = e)) &&
      typeof t.id === "string" &&
      v(t.z_index) &&
      v(t.created_at) &&
      v(t.updated_at)
    ) &&
    typeof e.type === "string" &&
    (e.type === "marker"
      ? !!d((n = e)) &&
        n.type === "marker" &&
        v(n.marker_index) &&
        ((a = n.mode) === "point" || a === "box") &&
        c(n.bounds) &&
        d((r = n.recognition)) &&
        ((i = r.status) === "idle" ||
          i === "pending" ||
          i === "success" ||
          i === "failed") &&
        m(r.label) &&
        ((o = r.thumbnail) === undefined || (d(o) && m(o.uri) && m(o.url)))
      : e.type === "brush"
        ? !!d((l = e)) &&
          l.type === "brush" &&
          Array.isArray(l.points) &&
          l.points.every(s) &&
          d(l.style) &&
          typeof l.style.color === "string" &&
          v(l.style.opacity)
        : e.type === "arrow"
          ? !!d((p = e)) &&
            p.type === "arrow" &&
            s(p.start) &&
            s(p.end) &&
            d(p.style) &&
            typeof p.style.color === "string" &&
            u(p.style.variant)
          : e.type === "text" &&
            !!d((h = e)) &&
            h.type === "text" &&
            typeof h.text === "string" &&
            c(h.bounds) &&
            d(h.style) &&
            typeof h.style.color === "string" &&
            v(h.style.font_size))
  );
}
function l(e) {
  return (
    !!d(e) &&
    (e.type === "text"
      ? typeof e.text === "string"
      : e.type === "marker" && typeof e.marker_id === "string")
  );
}
function s(e) {
  return d(e) && v(e.x) && v(e.y);
}
function c(bounds) {
  return s(bounds) && d(bounds) && v(bounds.width) && v(bounds.height);
}
function u(variant) {
  return variant === "arrow" || variant === "line";
}
function d(e) {
  return typeof e === "object" && e !== null;
}
function m(e) {
  return e === undefined || typeof e === "string";
}
function p(e) {
  return e === undefined || v(e);
}
function v(e) {
  return typeof e === "number" && Number.isFinite(e);
}
export function qd(e) {
  return JSON.stringify(iH(e));
}
export function zB(e) {
  if (e) {
    try {
      let t;
      let n;
      let a;
      let r;
      let s;
      let c;
      const h = JSON.parse(e);
      if (
        d(h) &&
        h.schema === i.Ff &&
        h.version === i.sb &&
        ((t = h.restore_data),
        d(t) &&
          t.version === 1 &&
          ((n = t.source_image),
          d(n) &&
            typeof n.url === "string" &&
            v(n.width) &&
            v(n.height) &&
            m(n.item_id) &&
            m(n.uri)) &&
          Array.isArray(t.elements) &&
          t.elements.every(o) &&
          Array.isArray(t.prompt_contents) &&
          t.prompt_contents.every(l) &&
          ((a = t.tool_options),
          d(a) &&
            d(a.marker) &&
            d(a.brush) &&
            typeof a.brush.color === "string" &&
            v(a.brush.opacity) &&
            d(a.arrow) &&
            typeof a.arrow.color === "string" &&
            u(a.arrow.variant) &&
            d(a.text) &&
            typeof a.text.color === "string" &&
            v(a.text.font_size) &&
            d(a.eraser) &&
            v(a.eraser.size))) &&
        ((r = h.submit),
        d(r) &&
          typeof r.prompt === "string" &&
          typeof r.plain_prompt === "string" &&
          ((s = r.output_resolution),
          s === undefined ||
            s === "1k" ||
            s === "1.5k" ||
            s === "2k" ||
            s === "4k") &&
          ((c = r.submitted_image),
          c === undefined ||
            (d(c) && m(c.uri) && m(c.url) && p(c.width) && p(c.height))))
      ) {
        return pL(h);
      }
      return undefined;
    } catch (e) {
      return;
    }
  }
}
export function iH(e) {
  let t;
  let n;
  let a;
  let r;
  return {
    schema: e.schema,
    version: e.version,
    restore_data: {
      version: (t = e.restoreData).version,
      source_image: {
        item_id: (n = t.sourceImage).itemId,
        uri: n.uri,
        url: n.url,
        width: n.width,
        height: n.height,
      },
      elements: t.elements.map(_),
      prompt_contents: t.promptContents.map(x),
      tool_options: {
        marker: (a = t.toolOptions).marker,
        brush: a.brush,
        arrow: a.arrow,
        text: {
          color: a.text.color,
          font_size: a.text.fontSize,
        },
        eraser: a.eraser,
      },
    },
    submit: {
      prompt: (r = e.submit).prompt,
      plain_prompt: r.plainPrompt,
      output_resolution: r.outputResolution,
      submitted_image: r.submittedImage,
    },
  };
}
export function pL(e) {
  let t;
  let n;
  let a;
  let r;
  return {
    schema: e.schema,
    version: e.version,
    restoreData: {
      version: (t = e.restore_data).version,
      sourceImage: {
        itemId: (n = t.source_image).item_id,
        uri: n.uri,
        url: n.url,
        width: n.width,
        height: n.height,
      },
      elements: t.elements.map(y),
      promptContents: t.prompt_contents.map(k),
      toolOptions: {
        marker: (a = t.tool_options).marker,
        brush: a.brush,
        arrow: a.arrow,
        text: {
          color: a.text.color,
          fontSize: a.text.font_size,
        },
        eraser: a.eraser,
      },
    },
    submit: {
      prompt: (r = e.submit).prompt,
      plainPrompt: r.plain_prompt,
      outputResolution: r.output_resolution,
      submittedImage: r.submitted_image,
    },
  };
}
function _(e) {
  let t;
  const n = {
    id: (t = e).id,
    z_index: t.zIndex,
    created_at: C(t.createdAt),
    updated_at: C(t.updatedAt),
  };
  if (e.type === "marker") {
    return r._(a._({}, n), {
      type: "marker",
      marker_index: e.markerIndex,
      mode: e.mode,
      bounds: e.bounds,
      recognition: e.recognition,
    });
  }
  if (e.type === "brush") {
    return r._(a._({}, n), {
      type: "brush",
      points: e.points,
      style: e.style,
    });
  }
  if (e.type === "arrow") {
    return r._(a._({}, n), {
      type: "arrow",
      start: e.start,
      end: e.end,
      style: e.style,
    });
  }
  return r._(a._({}, n), {
    type: "text",
    text: e.text,
    bounds: e.bounds,
    style: {
      color: e.style.color,
      font_size: e.style.fontSize,
    },
  });
}
function y(e) {
  let t;
  const n = {
    id: (t = e).id,
    zIndex: t.z_index,
    createdAt: ((e) => 1000 * e)(t.created_at),
    updatedAt: ((e) => 1000 * e)(t.updated_at),
  };
  if (e.type === "marker") {
    return r._(a._({}, n), {
      type: "marker",
      markerIndex: e.marker_index,
      mode: e.mode,
      bounds: e.bounds,
      recognition: e.recognition,
    });
  }
  if (e.type === "brush") {
    return r._(a._({}, n), {
      type: "brush",
      points: e.points,
      style: e.style,
    });
  }
  if (e.type === "arrow") {
    return r._(a._({}, n), {
      type: "arrow",
      start: e.start,
      end: e.end,
      style: e.style,
    });
  }
  return r._(a._({}, n), {
    type: "text",
    text: e.text,
    bounds: e.bounds,
    style: {
      color: e.style.color,
      fontSize: e.style.font_size,
    },
  });
}
function x(e) {
  if (e.type === "marker") {
    return {
      type: "marker",
      marker_id: e.markerId,
    };
  }
  return e;
}
function k(e) {
  if (e.type === "marker") {
    return {
      type: "marker",
      markerId: e.marker_id,
    };
  }
  return e;
}
function C(e) {
  return Math.floor(e / 1000);
}
