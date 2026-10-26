const t = ["all", "image", "video", "audio", "document"];
const n = {
  image: "image",
  video: "video",
  audio: "audio",
  markdown: "document",
  pdf: "document",
  docx: "document",
};
export function zh(e) {
  if (e.width >= 512) {
    return 512;
  }
  return 460 * (e.width >= 460);
}
function r(e, u) {
  if (u === "all") {
    return e.slice();
  }
  return e.filter((e) => n[e.type] === u);
}
function o(e) {
  return e.filter((e) => e !== "all");
}
function l(e, u) {
  let a;
  return ((a = u.canAddByTab) == null ? undefined : a[e]) !== false;
}
export function W8(e) {
  let u;
  let a;
  let t;
  const n =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  typeof (u =
    (a = n.referenceGroupWidthBreakpoint) != null
      ? a
      : n.referenceGroupWidth) !== "number" || u >= 512;
  const i = 2;
  const hasHiddenReferences = e.length > i;
  const o = hasHiddenReferences ? e.slice(0, i - 1) : e.slice(0, i);
  const moreEntryReference =
    hasHiddenReferences && (t = e.at(-1)) != null ? t : null;
  const hiddenReferenceCount = Math.max(e.length - i, 0);
  const d = !!n.morePanelVisible;
  return {
    visibleReferences: o,
    sortableReferences: o,
    moreEntryReference,
    hiddenReferenceCount,
    hasHiddenReferences,
    panelVisible: d,
    contentLayoutStacked: d,
    referenceGroupVisible: !d,
    moreEntryVisible: hasHiddenReferences && !n.morePanelVisible,
  };
}
export function Au(e, u) {
  let a;
  let i;
  let s;
  const d =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const c = (i = d.panelTabs) != null ? i : t;
  const activeTab = c.includes(u)
    ? u
    : c.includes("all")
      ? "all"
      : (a = c[0]) != null
        ? a
        : "all";
  const p = {
    all: e.length,
    image: 0,
    video: 0,
    audio: 0,
    document: 0,
  };
  e.forEach((e) => {
    p[n[e.type]] += 1;
  });
  const references = r(e, activeTab);
  const acceptedFileTypes =
    activeTab === "all"
      ? d.acceptedFileTypes
      : (s = d.acceptedFileTypesByTab) == null
        ? undefined
        : s[activeTab];
  const uploadAcceptedFileTypes =
    activeTab === "all"
      ? ((e, u) => {
          if (!u.acceptedFileTypes) {
            return u.acceptedFileTypes;
          }
          const a = o(e).map((tab) => {
            var a;
            return {
              tab,
              acceptedFileTypes:
                (a = u.acceptedFileTypesByTab) == null ? undefined : a[tab],
            };
          });
          if (
            !a.some((e) => {
              var { acceptedFileTypes } = e;
              return acceptedFileTypes !== undefined;
            })
          ) {
            return u.acceptedFileTypes;
          }
          const t = a
            .filter((e) => {
              var { tab } = e;
              return l(tab, u);
            })
            .map((e) => {
              var { acceptedFileTypes } = e;
              return acceptedFileTypes;
            })
            .filter((e) => e !== undefined);
          if (t.length > 0) {
            return Object.assign({}, ...t);
          }
        })(c, d)
      : acceptedFileTypes;
  const h =
    d.acceptedFileTypes === undefined || uploadAcceptedFileTypes !== undefined;
  const E = o(c);
  const f =
    activeTab === "all"
      ? E.length === 0 || E.some((e) => l(e, d))
      : l(activeTab, d);
  const uploadSlotVisible = h && !d.uploadDisabled && f;
  return {
    activeTab,
    tabs: c.map((e) => ({
      value: e,
      count: p[e],
    })),
    references,
    maxHeight: 200,
    uploadSlotVisible,
    empty: references.length === 0,
    acceptedFileTypes,
    uploadAcceptedFileTypes,
  };
}
export function rb(e, u) {
  const a = r(e, u);
  return {
    referenceIds: a.map((e) => e.id),
    disabled: a.length === 0,
  };
}
export function $M(e, u, a, t) {
  if (a === t) {
    return null;
  }
  const n = r(e, u);
  const i = n[a];
  const o = n[t];
  if (!i || !o) {
    return null;
  }
  const fromIndex = e.findIndex((e) => e.id === i.id);
  const toIndex = e.findIndex((e) => e.id === o.id);
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) {
    return null;
  }
  return {
    fromIndex,
    toIndex,
  };
}
