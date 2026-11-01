let r;
if (window.performance && window.performance.mark) {
  window.performance.mark("STREAM_GATEWAY_CONTENT_END");
}
window._safeJsonParse = function (r) {
  if (!r) {
    return {};
  }
  try {
    return JSON.parse(r);
  } catch (r) {
    return {};
  }
};
window._injectDisplayedFeaturesClassName =
  ((r = [
    {
      featureKey: "dreamina_story_agent",
      sideBarSelector: ".lv-menu #SiderMenuStoryAgent",
    },
  ]),
  function () {
    try {
      const t =
        (i = window.__beta_test__) != null
          ? i
          : window._safeJsonParse(
              (a = localStorage.getItem("beta-test-injected-cache")) != null
                ? a
                : "",
            );
      localStorage.setItem(
        "beta-test-injected-cache",
        window.__beta_test__ ? JSON.stringify(window.__beta_test__) : "",
      );
      if (!t || Object.keys(t).length === 0) {
        return;
      }
      const e = ((r) => {
        const { config_list } = r;
        const e = {};
        for (const n of config_list) {
          const {
            name,
            feature_key,
            is_white,
            is_invite,
            status,
            questionnaire_url,
            survey_id,
          } = n;
          let survey;
          if (questionnaire_url && survey_id) {
            survey = {
              surveyId: survey_id,
              surveyUrl: questionnaire_url,
            };
          }
          const h = {
            name: name != null ? name : feature_key,
            featureKey: feature_key,
            survey,
            status: ((r, t, e) => {
              switch (r) {
                case 3:
                  return "released";
                case 2:
                  if (t || e) {
                    return "beta_available";
                  }
                  return "beta_inavailable";
                case 1:
                  if (t || e) {
                    return "beta_available";
                  }
                  return "unavailable";
                default:
                  return "unavailable";
              }
            })(status, is_white, is_invite),
          };
          e[feature_key] = h;
        }
        return e;
      })(t);
      for (const n of r) {
        const o = e[n.featureKey];
        if (o) {
          var i;
          var a;
          let s;
          let u;
          const c = !["beta_available", "released"].includes(o.status);
          if (n.sideBarSelector && c) {
            if (
              !(
                (u = window.document.querySelector(n.sideBarSelector)) ==
                  null || (s = u.remove) == null
              )
            ) {
              s.call(u);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      for (const f of window.document.querySelectorAll(
        `#beta-ssr-recover, style[data-href*="betaSSRRecover"], link[href*="betaSSRRecover"]`,
      )) {
        f.remove();
      }
    }
  });
window._injectDisplayedFeaturesClassName();
