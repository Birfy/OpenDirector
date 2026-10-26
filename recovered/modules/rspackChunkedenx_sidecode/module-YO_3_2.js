import { y } from "./module-FPQ_2.js";
const o = "/mweb/v1";
const i = "/commerce/v1";
const paths = [
  "/api/biz/v1/agent/submit_run",
  "/api/biz/v1/asset/create_v2",
  "/api/biz/v1/common/get_upload_sign",
  "/api/biz/v3/common/get_upload_sign",
  "".concat(o, "/generate"),
  "".concat(o, "/super_resolution"),
  "".concat(o, "/painting"),
  "".concat(o, "/aigc_draft/generate"),
  "".concat(o, "/normal_hd"),
  "".concat(o, "/doodle"),
  "".concat(o, "/batch_generate_video"),
  "".concat(o, "/mixblend"),
  "".concat(o, "/fusion"),
  "".concat(o, "/creation_agent/v2/conversation"),
  "".concat(o, "/onboarding/task_panel"),
  "".concat(i, "/subscription/make_unauto_order"),
  "".concat(i, "/benefits/credit_receive"),
  "".concat(i, "/benefits/team_credit_allocate"),
  "".concat(i, "/purchase/make_order"),
  "/commerce/v3/trade/init_trade",
  "/commerce/v2/subscription/sign_and_pay",
  "/commerce/v1/distribution/exchange_vip2user",
  "/luckycat/cn/jianying/campaign/v1/course/redeem",
  "/commerce/v3/teamwork/get_team_invitation_link",
  "/commerce/v3/teamwork/join_team_by_invite_link",
  "/commerce/v3/teamwork/update_team_member_info",
  "/commerce/v3/teamwork/remove_team_member",
  "".concat(o, "/get_explore"),
  "".concat(o, "/feed_short_video"),
  "".concat(o, "/feed"),
  "".concat(o, "/get_homepage"),
  "".concat(o, "/get_weekly_challenge_work_list"),
  "".concat(o, "/mget_item_info"),
  "".concat(o, "/get_item_info"),
  "".concat(o, "/get_process_info"),
  "".concat(o, "/get_video_by_vid"),
  "".concat(o, "/get_simple_item_list"),
  "/competition/v1/get_artwork",
  "/competition/v1/preview_video",
  "".concat(o, "/get_history_by_ids"),
  "".concat(o, "/get_history"),
  "".concat(o, "/get_local_item_list"),
  "/mweb/search/v1/search",
  "/lv/v1/user/update",
  "".concat(o, "/user/profile/update"),
  "".concat(o, "/publish"),
  "competition/v1/submit_artwork",
  "".concat(o, "/mark_favorite"),
  "".concat(o, "/follow"),
  "/commerce/v3/trade/user/apply_order_refund",
];
(() => {
  const t = {
    self: {
      aid: y.CN_APP_ID,
      pageId: 28324,
    },
    bdms: {
      aid: y.CN_APP_ID,
      pageId: 28324,
      paths,
      track: {
        mode: 2,
      },
    },
  };
  function r() {
    if (typeof window._SdkGlueInit !== "function") {
      return false;
    }
    try {
      window._SdkGlueInit(t);
      if (window.secsdk && window.secsdk.csrf) {
        window.secsdk.csrf.setDowngradeLimit(2);
      }
      return true;
    } catch (error) {
      console.error("SDK Glue initialization failed:", error);
      return false;
    }
  }
  new Promise((resolve, reject) => {
    if (r()) {
      return void resolve();
    }
    var n = false;
    var o = null;
    function i() {
      if (!n) {
        n = true;
        if (o) {
          clearInterval(o);
        }
        if (r()) {
          resolve();
        } else {
          reject(Error("SDK initialization failed after loading"));
        }
      }
    }
    var a = document.querySelector('script[data-sdk-glue-default="load"]');
    if (a && !a.hasAttribute("data-init-listener")) {
      a.setAttribute("data-init-listener", "true");
      a.addEventListener("load", i, {
        once: true,
      });
      a.addEventListener(
        "error",
        function () {
          console.warn("SDK Glue script load failed, falling back to polling");
        },
        {
          once: true,
        },
      );
    }
    o = setInterval(() => {
      if (typeof window._SdkGlueInit === "function") {
        i();
      }
    }, 50);
    setTimeout(() => {
      if (!n) {
        n = true;
        if (o) {
          clearInterval(o);
        }
        reject(Error(`SDK Glue initialization timeout after ${10000}ms`));
      }
    }, 10000);
  }).catch((t) => {
    console.error("Failed to initialize SDK Glue:", t);
  });
})();
if (performance.measure) {
  performance.measure("HEAD_SDK_GLUE", "HEAD_SDK_GLUE_START");
}
