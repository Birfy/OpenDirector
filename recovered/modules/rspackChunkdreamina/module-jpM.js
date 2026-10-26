import r from "oa";
import n from "bk";
import a from "JSz";
import o from "Egb";
import s from "Ge";
import l from "JEZ";
import { U } from "./module-YFT_2.js";
function d(e) {
  return (
    typeof e === "string" &&
    e.trim().length > 0 &&
    e.trim() !== "undefined" &&
    e.trim() !== "null"
  );
}
function c(title, t) {
  return Array.from(
    Array.from(title, (e) => {
      if (e.charCodeAt(0) < 32) {
        return " ";
      }
      return e;
    })
      .join("")
      .trim(),
  )
    .slice(0, t)
    .join("");
}
export function O(e) {
  if (e.signal.aborted) {
    return {
      status: "cancelled",
    };
  }
  if (typeof window === "undefined") {
    return {
      status: "failed",
      reason: "handoff-unavailable",
    };
  }
  let t;
  let i;
  let h;
  const v = U((t = e.url) != null ? t : o.Q1);
  if (!v) {
    return {
      status: "invalid",
      reason: "invalid-target",
    };
  }
  const p = ((e) => {
    const { sources, intent, accountId, title, requestId, createdAt } = e;
    if (
      !intent ||
      typeof intent !== "object" ||
      Array.isArray(intent) ||
      typeof intent.capability !== "string" ||
      !intent.capability.trim() ||
      (intent.capsuleId !== undefined &&
        (typeof intent.capsuleId !== "string" || !intent.capsuleId.trim()))
    ) {
      return {
        ok: false,
        reason: "invalid-intent",
      };
    }
    if (!d(accountId)) {
      return {
        ok: false,
        reason: "invalid-account",
      };
    }
    if (
      !d(requestId) ||
      requestId.length > 128 ||
      !Number.isSafeInteger(createdAt) ||
      createdAt <= 0 ||
      (title !== undefined && typeof title !== "string")
    ) {
      return {
        ok: false,
        reason: "invalid-request",
      };
    }
    if (!Array.isArray(sources) || sources.length === 0) {
      return {
        ok: false,
        reason: "invalid-assets",
      };
    }
    const assets = [];
    for (const u of sources) {
      const h = ((e) => {
        let t =
          typeof (e == null ? undefined : e.title) === "string"
            ? c(e.title, 256)
            : "";
        if (!(t || (e == null ? undefined : e.origin) !== "asset")) {
          t = e.type;
        }
        if (
          e &&
          (e.type === "image" || e.type === "video") &&
          (e.origin === "local" || e.origin === "asset") &&
          t &&
          Number.isSafeInteger(e.width) &&
          !(e.width <= 0) &&
          Number.isSafeInteger(e.height) &&
          !(e.height <= 0)
        ) {
          const i = e.type === "image" ? e.uri : e.vid;
          if (
            !(!d(i) || /^[\\/]|^[a-z][a-z\d+.-]*:/i.test(i.trim())) &&
            (e.type !== "video" ||
              (Number.isFinite(e.durationSeconds) && !(e.durationSeconds <= 0)))
          ) {
            let n = {};
            if (e.origin === "asset") {
              if (!d(e.sourceItemId) || !d(e.historyId)) {
                return;
              }
              n = {
                jimengItemId: e.sourceItemId.trim(),
                jimengRecordId: e.historyId.trim(),
              };
            }
            return r._(
              {
                mediaType: e.type,
                storageKey: i.trim(),
                width: e.width,
                height: e.height,
                title: t,
              },
              n,
              e.type === "video"
                ? {
                    durationSeconds: e.durationSeconds,
                  }
                : {},
            );
          }
        }
      })(u);
      if (!h) {
        return {
          ok: false,
          reason: "invalid-assets",
        };
      }
      assets.push(h);
    }
    const v = title ? c(title, 60) : undefined;
    return {
      ok: true,
      value: {
        version: 3,
        requestId,
        createdAt,
        accountId: accountId.trim(),
        source: "home_tool",
        target: r._(
          {
            kind: "new_project",
          },
          v
            ? {
                title: v,
              }
            : {},
        ),
        assets,
        intent: r._({}, intent),
      },
    };
  })(
    n._(r._({}, e), {
      requestId: a.bz(),
      createdAt: Date.now(),
    }),
  );
  if (!p.ok) {
    return {
      status: "invalid",
      reason: p.reason,
    };
  }
  const serializedPayload = JSON.stringify(p.value);
  const g = new URL(v);
  g.searchParams.delete("from_page");
  g.searchParams.delete("tool_item_id");
  if (
    ((h = e.toolItemId) == null ? undefined : h.trim()) &&
    ["ai_function", "hover_function_click", "all_tools_click"].includes(
      (i = e.attribution.enterFrom) != null ? i : "",
    )
  ) {
    g.searchParams.set("tool_item_id", e.toolItemId);
  }
  const url = s.N({
    attribution: e.attribution,
    query: g.searchParams,
  });
  if (e.signal.aborted) {
    return {
      status: "cancelled",
    };
  }
  const f = {
    storageKey: "dreamina-canvas-asset-import",
    serializedPayload,
    url,
  };
  const y = l.Fg(
    n._(r._({}, f), {
      targetReservation: e.targetReservation,
    }),
  );
  const b = !y && !!e.fallbackToCurrentTab && l.QU(f);
  if (y || b) {
    return {
      status: "opened",
      requestId: p.value.requestId,
    };
  }
  return {
    status: "failed",
    reason: "handoff-unavailable",
  };
}
