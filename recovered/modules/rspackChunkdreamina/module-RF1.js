import r from "oa";
import n from "bk";
import a from "lq";
import o from "K8";
import l from "Wl";
const s = /^\d+$/;
const u = "9223372036854775807";
export function ax(e) {
  if (typeof e === "number") {
    if (Number.isSafeInteger(e) && e > 0) {
      return "".concat(e);
    }
    return undefined;
  }
  if (typeof e === "string" && s.test(e)) {
    const t = e.replace(/^0+(?=\d)/, "");
    if (
      t !== "0" &&
      (t.length < u.length || (t.length === u.length && t <= u))
    ) {
      return t;
    }
    return undefined;
  }
}
export function Vo(e) {
  return typeof e === "string" && ax(e) === e;
}
function m(e) {
  if (typeof e === "string" && e.trim().length > 0) {
    return e;
  }
}
function p(e) {
  if (e && typeof e === "object") {
    let t;
    let i;
    let a;
    let o;
    const l = ax(e.id);
    const s = m(e.sceneName);
    const description = (t = m(e.description)) == null ? undefined : t.trim();
    const backgroundLightUrl =
      (i = m(e.backgroundLightUrl)) == null ? undefined : i.trim();
    const backgroundDarkUrl =
      (a = m(e.backgroundDarkUrl)) == null ? undefined : a.trim();
    const showMore = typeof e.showMore === "boolean" ? e.showMore : undefined;
    if (l !== undefined && s !== undefined) {
      return r._(
        n._(
          r._(
            {
              id: l,
              name: s,
            },
            description === undefined
              ? {}
              : {
                  description,
                },
            backgroundLightUrl === undefined
              ? {}
              : {
                  backgroundLightUrl,
                },
            backgroundDarkUrl === undefined
              ? {}
              : {
                  backgroundDarkUrl,
                },
          ),
          {
            itemTypes: Array.isArray((o = e.itemTypeList))
              ? o.filter(
                  (e) =>
                    typeof e === "number" && Number.isSafeInteger(e) && e >= 0,
                )
              : [],
          },
        ),
        showMore === undefined
          ? {}
          : {
              showMore,
            },
      );
    }
  }
}
function v(e) {
  if (e && typeof e === "object") {
    const t = ax(e.id);
    const i = m(e.categoryName);
    const iconUrl = m(e.iconUrl);
    if (t !== undefined && i !== undefined) {
      return n._(
        r._(
          {
            id: t,
            name: i,
          },
          iconUrl === undefined
            ? {}
            : {
                iconUrl,
              },
          typeof e.showSubcategories === "boolean"
            ? {
                showSubcategories: e.showSubcategories,
              }
            : {},
          l.sL(e)
            ? {
                hasShortDramaEntry: true,
              }
            : {},
        ),
        {
          scenes: Array.isArray(e.sceneList)
            ? e.sceneList.map(p).filter((e) => e !== undefined)
            : [],
        },
      );
    }
  }
}
export function wM(e) {
  if (e && typeof e === "object" && Array.isArray(e.categoryList)) {
    return o.TZ({
      categories: e.categoryList.map(v).filter((e) => e !== undefined),
    });
  }
  return o.xz(-1, "invalid Explore catalog response");
}
export function wW(e) {
  if (!e || typeof e !== "object") {
    return o.xz(-1, "invalid Explore scene page response");
  }
  let t;
  const nextOffset = ((e) => {
    if (typeof e === "number") {
      if (Number.isSafeInteger(e) && e >= 0) {
        return e;
      }
      return undefined;
    }
    if (typeof e === "string" && s.test(e)) {
      const t = Number(e);
      if (Number.isSafeInteger(t)) {
        return t;
      }
      return undefined;
    }
  })(e.nextOffset);
  const requestId = m(e.requestId);
  if (
    Array.isArray(e.itemList) &&
    nextOffset !== undefined &&
    typeof e.hasMore === "boolean"
  ) {
    return o.TZ(
      r._(
        {
          items: Array.isArray((t = e.itemList))
            ? t
                .map((e) => {
                  try {
                    return a.v(e);
                  } catch (e) {
                    return;
                  }
                })
                .filter((e) => e !== undefined)
            : [],
          nextOffset,
          hasMore: e.hasMore,
        },
        requestId === undefined
          ? {}
          : {
              requestId,
            },
      ),
    );
  }
  return o.xz(-1, "invalid Explore scene page response");
}
