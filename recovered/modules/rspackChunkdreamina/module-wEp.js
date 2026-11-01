import n from "Qey";
export function q(e) {
  let t;
  let i;
  const { transcodedVideo } = e;
  const a =
    (t =
      (i = transcodedVideo == null ? undefined : transcodedVideo["720p"]) !=
      null
        ? i
        : transcodedVideo == null
          ? undefined
          : transcodedVideo["360p"]) != null
      ? t
      : transcodedVideo == null
        ? undefined
        : transcodedVideo.origin;
  if (a == null) {
    return undefined;
  }
  return a.videoUrl;
}
const o = (definition, t) => {
  var i = {
    "360P": 360,
    "480P": 480,
    "720P": 720,
    "1080P": 1080,
    [t]: Infinity,
  }[definition];
  if (typeof i === "number") {
    return i;
  }
  var n = definition.match(/^(\d+)/);
  if (!n) {
    return Infinity;
  }
  var a = Number(n[1]);
  if (Number.isFinite(a)) {
    return a;
  }
  return Infinity;
};
const r = (e, t) => {
  if (e.toLowerCase() === "origin") {
    return t;
  }
  return e.toUpperCase();
};
export function H(e, t) {
  let i;
  let a;
  let l;
  let d;
  let u;
  let m;
  let s;
  const g =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const p = n.Ay.t("web_new_video_player_quality_original", {}, "原画");
  const definitionList = Object.entries(
    (i = e == null ? undefined : e.transcodedVideo) != null ? i : {},
  ).map((e) => {
    var [t, i] = e;
    return {
      definition: r(t, p),
      url: (i == null ? undefined : i.videoUrl) || "",
    };
  });
  const v = (a = e == null ? undefined : e.originVideo) != null ? a : t;
  if (definitionList.length === 0 && v) {
    definitionList.push({
      definition: r((s = v.definition) != null ? s : "origin", p),
      url: v.videoUrl || "",
    });
  }
  definitionList.sort((e, t) => o(e.definition, p) - o(t.definition, p));
  const f = g.preferOriginAsDefault
    ? [p, "1080P", "720P", "480P", "360P"]
    : ["720P", "360P", p, "1080P", "480P"];
  const I = Object.fromEntries(definitionList.map((e) => [e.definition, e]));
  const defaultDefinition =
    (l =
      (d = f.find((e) => I[e])) != null
        ? d
        : (u = definitionList[0]) == null
          ? undefined
          : u.definition) != null
      ? l
      : "";
  const defaultDefinitionVideoUrl =
    ((m = I[defaultDefinition]) == null ? undefined : m.url) || "";
  return {
    definitionList,
    defaultDefinition,
    defaultDefinitionVideoUrl,
  };
}
