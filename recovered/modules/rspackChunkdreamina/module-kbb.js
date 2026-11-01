import a from "oa";
import i from "bk";
import n from "SR";
import o from "e3";
import s from "aS";
import l from "sV8";
import c from "AI";
import d from "ojp";
import u from "Jz";
import h from "LLl";
import g from "YNr";
import { V } from "./module-bpp.js";
import p from "MFv";
import _ from "OGw";
import v from "xXi";
import f from "SdE";
import S from "rv6";
import { V as V_1 } from "./module-sWx_3.js";
import { Y as Y_1 } from "./module-Tod.js";
import { U } from "./module-J9z.js";
import R from "A8W";
import I from "jRK";
import b from "xN";
import C from "Y0";
import P from "cks";
import A from "Pu";
import T from "xNV";
function G(e) {
  if (e) {
    let t;
    let r;
    let a;
    let i;
    const resourceId =
      e.id || ((t = e.resource) == null ? undefined : t.llm_key);
    if (resourceId) {
      return {
        resourceId,
        uri: (r = e.resource) == null ? undefined : r.uri,
        url: (a = e.resource) == null ? undefined : a.url,
        mimeType: (i = e.resource) == null ? undefined : i.mimeType,
      };
    }
  }
}
function w(toolResult) {
  const t = ((e) => {
    if (!e) {
      return null;
    }
    try {
      let t;
      const r = JSON.parse(e);
      if (typeof r.data !== "string") {
        return null;
      }
      const a = (t = JSON.parse(r.data).data) == null ? undefined : t.contents;
      if (!Array.isArray(a)) {
        return null;
      }
      return a;
    } catch (e) {
      return null;
    }
  })(toolResult);
  if (t) {
    return t.map(G);
  }
  return [];
}
function j(toolResult) {
  if (toolResult) {
    try {
      let t;
      if ((t = JSON.parse(toolResult)) == null) {
        return undefined;
      }
      return t.submit_id;
    } catch (e) {
      return;
    }
  }
}
function D(e, t) {
  const r = Y_1(e);
  if (t) {
    r.id = t;
  }
  const a = new n.RefContent();
  a.file = r;
  return a;
}
function F(e, t) {
  const r = U(e);
  if (t) {
    r.id = t;
  }
  const a = new n.RefContent();
  a.file = r;
  return a;
}
function L(e, submitIdDataMap, itemInfoDataMap) {
  const { toolName, toolResult, toolArgs } = e;
  if (
    [
      c.i.GetPlan,
      c.i.GeneratePrompts,
      c.i.PointsConsumptionReminder,
      c.i.GenerateFormForInfoCollection,
      c.i.GetImageInfo,
    ].includes(toolName)
  ) {
    let L = "";
    switch (toolName) {
      case c.i.GeneratePrompts:
        L = f.k(toolArgs).join("\n");
        break;
      case c.i.PointsConsumptionReminder:
        L = S.$();
        break;
      case c.i.GenerateFormForInfoCollection:
        L = V(toolArgs);
        break;
      default:
        L = toolResult || "";
    }
    return [new n.RefContent(L)];
  }
  if (I.Lk(e)) {
    let x;
    const E = (x = p.o(e)) == null ? undefined : x.submitId;
    if (!E) {
      return [];
    }
    const O = submitIdDataMap[E];
    if (!O || !o.A(O)) {
      return [];
    }
    const U = w(e.toolResult);
    return O.itemList.map((e, t) => {
      var r;
      var n;
      var o = i._(
        a._({}, (n = e.image.largeImages) == null ? undefined : n[0]),
        {
          prompt:
            (r = e.text2imageParams.modelRewrittenPrompt) != null
              ? r
              : O.prompt,
          aigcImage: {
            itemId: e.id,
          },
        },
      );
      var s = U[t];
      return D(o, s == null ? undefined : s.resourceId);
    });
  }
  if (P.NO(e) || C.A(e)) {
    return ((e, t) => {
      let r;
      const a = (r = v.I(e)) == null ? undefined : r.submitId;
      if (!a) {
        return [];
      }
      const i = t[a];
      if (!i || !s.g(i)) {
        return [];
      }
      const n = w(e.toolResult);
      if (i.itemList.length > 0) {
        return i.itemList.map((e, t) => {
          var r;
          return F(
            ((e, t) => {
              let r;
              let a;
              let i;
              const { video } = e;
              return {
                vid:
                  ((i = video.originVideo) == null ? undefined : i.vid) ||
                  video.vid ||
                  video.videoId ||
                  "",
                coverUrl: (r = video.coverUrl) != null ? r : "",
                videoUrl: ((e) => {
                  let t;
                  let r;
                  let a;
                  let i;
                  let n;
                  let o;
                  let s;
                  const { video } = e;
                  return (
                    ((r = video.transcodedVideo) == null ||
                    (t = r["720p"]) == null
                      ? undefined
                      : t.videoUrl) ||
                    ((i = video.transcodedVideo) == null ||
                    (a = i["360p"]) == null
                      ? undefined
                      : a.videoUrl) ||
                    ((o = video.transcodedVideo) == null ||
                    (n = o.origin) == null
                      ? undefined
                      : n.videoUrl) ||
                    ((s = video.originVideo) == null
                      ? undefined
                      : s.videoUrl) ||
                    ""
                  );
                })(e),
                duration:
                  (a = video.duration) != null
                    ? a
                    : video.durationMs !== null &&
                        video.durationMs !== undefined
                      ? video.durationMs / 1000
                      : t,
              };
            })(e, i.videoDuration),
            (r = n[t]) == null ? undefined : r.resourceId,
          );
        });
      }
      const o = g.G5(i);
      const l = n[0];
      return [F(o, l == null ? undefined : l.resourceId)];
    })(e, submitIdDataMap);
  }
  if (b.d(e)) {
    let V;
    const N = (V = _.u(e)) == null ? undefined : V.submitId;
    if (!N) {
      return [];
    }
    const K = submitIdDataMap[N];
    if (!K || !l.n(K)) {
      return [];
    }
    const z = w(e.toolResult);
    return K.itemList.flatMap((e, t) => {
      var r = ((e, t) => {
        let r;
        let a;
        let i;
        let o;
        const { audio } = e;
        const l = audio == null ? undefined : audio.originAudio;
        const vid =
          (audio == null ? undefined : audio.vid) ||
          (l == null ? undefined : l.vid) ||
          (t == null ? undefined : t.uri);
        const audioUrl =
          (l == null ? undefined : l.audioUrl) ||
          (l == null ? undefined : l.url) ||
          (t == null ? undefined : t.url);
        if ((t == null ? undefined : t.resourceId) || vid || audioUrl) {
          const u = V_1({
            id: t == null ? undefined : t.resourceId,
            vid,
            audioUrl,
            duration:
              (r = l == null ? undefined : l.duration) != null
                ? r
                : (l == null ? undefined : l.durationMs) !== undefined
                  ? l.durationMs / 1000
                  : undefined,
            title:
              ((a = e.audioTitle) == null ? undefined : a.trim()) ||
              (audio == null || (i = audio.title) == null
                ? undefined
                : i.trim()) ||
              (l == null || (o = l.title) == null ? undefined : o.trim()),
          });
          const h = new n.RefContent();
          h.file = u;
          return h;
        }
      })(e, z[t]);
      if (r) {
        return [r];
      }
      return [];
    });
  }
  if (d.j(toolName)) {
    const W = j(toolResult);
    if (W && submitIdDataMap[W]) {
      const B = submitIdDataMap[W];
      if (o.A(B)) {
        return B.itemList
          .map((e) => {
            var t;
            var r;
            return i._(
              a._({}, (r = e.image.largeImages) == null ? undefined : r[0]),
              {
                prompt:
                  (t = e.text2imageParams.modelRewrittenPrompt) != null
                    ? t
                    : B.prompt,
                aigcImage: {
                  itemId: e.id,
                },
              },
            );
          })
          .filter(Boolean)
          .map((e) => D(e));
      }
    }
  }
  if (u.H(toolName)) {
    const Q = j(toolResult);
    if (Q && submitIdDataMap[Q]) {
      const q = submitIdDataMap[Q];
      if (s.g(q)) {
        return [F(g.G5(q))];
      }
    }
  }
  if (R.x(e)) {
    return ((e) => {
      const t = ((e) => {
        if (!e) {
          return null;
        }
        try {
          const t = JSON.parse(e);
          if (Array.isArray(t == null ? undefined : t.contents)) {
            return t;
          }
          if (typeof (t == null ? undefined : t.data) === "string") {
            var r;
            let a;
            const i = JSON.parse(t.data);
            if (Array.isArray(i == null ? undefined : i.contents)) {
              return i;
            }
            if (
              Array.isArray(
                i == null || (a = i.data) == null ? undefined : a.contents,
              )
            ) {
              return i.data;
            }
          }
          if (
            Array.isArray(
              t == null || (r = t.data) == null ? undefined : r.contents,
            )
          ) {
            return t.data;
          }
          return null;
        } catch (e) {
          return null;
        }
      })(e.toolResult);
      if (!t || !Array.isArray(t.contents)) {
        return [];
      }
      const r = [];
      for (const a of t.contents) {
        let i;
        let n;
        const o = a == null ? undefined : a.resource;
        if (o && (o.url || o.uri)) {
          const s = a.id || o.llm_key;
          if (s) {
            const l = {
              imageUri: o.uri,
              imageUrl: o.url,
              width: (i = o.resolution) == null ? undefined : i.width,
              height: (n = o.resolution) == null ? undefined : n.height,
            };
            r.push(D(l, s));
          }
        }
      }
      return r;
    })(e);
  }
  if (T.E(e)) {
    const H = ((e) => {
      if (!e) {
        return [];
      }
      try {
        let t;
        return ((t = JSON.parse(e)) == null ? undefined : t.item_id_list) || [];
      } catch (e) {
        return [];
      }
    })(toolResult);
    const J = [];
    for (const Z of H) {
      const $ = itemInfoDataMap[Z];
      if ($ && h.Y($)) {
        let Y;
        const X = a._({}, (Y = $.image.largeImages) == null ? undefined : Y[0]);
        J.push(D(X));
      }
    }
    return J;
  }
  if (A._(e)) {
    return ((e) => {
      if (!e.toolResult) {
        return [];
      }
      try {
        t = JSON.parse(e.toolResult);
      } catch (e) {
        return [];
      }
      if (!(t == null ? undefined : t.success) || !Array.isArray(t.files)) {
        return [];
      }
      var t;
      const r = [];
      for (const a of t.files) {
        const i =
          (a == null ? undefined : a.resource_id) != null
            ? String(a.resource_id)
            : "";
        if (i) {
          const o = a.mime_type != null ? String(a.mime_type) : undefined;
          const s = a.file_name != null ? String(a.file_name) : undefined;
          const l = ((e, t) => {
            const r = (e != null ? e : "").toLowerCase();
            const a = (t != null ? t : "").toLowerCase();
            if (r.includes("markdown") || a.endsWith(".md")) {
              return n.NuroFileType.markdown;
            }
            if (r.includes("pdf") || a.endsWith(".pdf")) {
              return n.NuroFileType.pdf;
            }
            if (a.endsWith(".docx")) {
              return n.NuroFileType.docx;
            }
            if (r.includes("msword") || a.endsWith(".doc")) {
              return n.NuroFileType.doc;
            }
            return null;
          })(o, s);
          if (l) {
            const c = new n.NuroFile(l);
            c.uri = a.tos_uri != null ? String(a.tos_uri) : undefined;
            c.url = a.url != null ? String(a.url) : undefined;
            c.id = i;
            if (s) {
              c.fileName = s;
            }
            const d = new n.RefContent();
            d.file = c;
            r.push(d);
          }
        }
      }
      return r;
    })(e);
  }
  return [];
}
export function Y(e) {
  const t = [];
  const { replyMessages } = e.taskData;
  let a = -1;
  replyMessages.forEach((e, t) => {
    if (e instanceof n.NuroAssistantMessage && e.text && e.text.length > 0) {
      a = t;
    }
  });
  replyMessages.forEach((r, i) => {
    var o;
    if (!(r instanceof n.NuroReasoningMessage)) {
      if (r instanceof n.NuroAssistantMessage) {
        if (i === a && r.text) {
          t.push(
            new n.RefContent(
              r.text,
              undefined,
              JSON.stringify({
                ref_src_msg_id: r.id,
              }),
            ),
          );
        }
        return;
      }
      if (r instanceof n.NuroToolCallMessage) {
        return void t.push(...L(r, e.submitIdDataMap, e.itemInfoDataMap));
      }
      if (
        r instanceof n.NuroCanvasMessage &&
        ((o = r.nodes) == null ? undefined : o.length)
      ) {
        for (var s of r.nodes) {
          if (s instanceof n.NuroToolCallMessage) {
            t.push(...L(s, e.submitIdDataMap, e.itemInfoDataMap));
          }
        }
      }
    }
  });
  return t;
}
