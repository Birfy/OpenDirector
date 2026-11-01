import r from "bT";
import a from "wF";
import o from "Kt";
import i from "n3";
import l from "cE";
const s = {
  [i.W.Create]: "create",
  [i.W.AIImage]: "ai-image",
  [i.W.AIVideo]: "ai-video",
  [i.W.AIAgent]: "ai-agent",
  [i.W.CanvasHome]: "canvas-home",
  [i.W.Home]: "explore",
  [i.W.Generation]: "generation",
  [i.W.Assets]: "assets",
  [i.W.CanvasEditor]: "canvas_editor",
  [i.W.CanvasHomepage]: "canvas_editor",
  [i.W.InfiniteCanvas]: "canvas_editor",
  [i.W.StoryEditor]: "aigc_story",
  [i.W.StoryAgent]: "aigc_story",
  [i.W.PersonalPage]: "personal_page",
  [i.W.OthersProfile]: "others_profile",
  [i.W.Activity]: "activity",
  [i.W.Login]: "login",
  [i.W.ExploreSearchResult]: "explore_search_result",
  [i.W.AssetSearchResult]: "asset_search_result",
};
export function V() {
  const e = a.h(o._);
  const n = typeof window === "undefined" ? "" : window.location.pathname;
  const t = typeof window === "undefined" ? "" : window.location.search;
  return r.useMemo(() => {
    if (n.includes("/octo")) {
      return "octo";
    }
    return s[l.p(e, n, t)];
  }, [e, n, t]);
}
