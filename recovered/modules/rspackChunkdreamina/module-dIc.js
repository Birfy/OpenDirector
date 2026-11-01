import r from "Qey";
import { H9 } from "./module-m1.js";
const a = {
  get in_evaluation() {
    return r.Ay.t("web_event_reward_inprogress_status", {}, "评奖中");
  },
  get awarded() {
    return r.Ay.t("web_event_reward_released_status", {}, "已颁奖");
  },
  get in_progress() {
    return r.Ay.t("web_event_submission_inprogress_status", {}, "征稿中");
  },
  get pending() {
    return r.Ay.t("web_event_opening_soon_status", {}, "即将开始");
  },
  unknown: "",
};
export var p = (e) => {
  if (e.actStatus === "in_progress") {
    var t;
    var i;
    var o = (t = e.nowMs) != null ? t : Date.now();
    var l = (i = e.actEndTimeMs) != null ? i : H9(e.actEndTime);
    if (l !== undefined && l > o) {
      var s;
      var u = Math.floor((l - o) / 3600000);
      var num1 = Math.floor(u / 24);
      s = u - 24 * num1;
      if (num1 <= 0) {
        return r.Ay.t(
          "web_event_submission_deadline_hour_left_submit",
          {
            num: s,
          },
          "距离截稿还有{num}小时",
        );
      }
      if (num1 <= 1 && s <= 1) {
        return r.Ay.t(
          "web_event_submission_deadline_day_left_submit",
          {
            num1,
            num2: s,
          },
          "距离截稿还有{num1}天{num2}小时",
        );
      }
      if (num1 === 1) {
        return r.Ay.t(
          "web_event_submission_deadline_day_left_submit1",
          {
            num1,
            num2: s,
          },
          "距离截稿还有{num1}天{num2}小时",
        );
      }
      if (s === 1) {
        return r.Ay.t(
          "web_event_submission_deadline_day_left_submit2",
          {
            num1,
            num2: s,
          },
          "距离截稿还有{num1}天{num2}小时",
        );
      }
      return r.Ay.t(
        "web_event_submission_deadline_day_left_submit3",
        {
          num1,
          num2: s,
        },
        "距离截稿还有{num1}天{num2}小时",
      );
    }
  }
  if (e.isNewInspirationAct && e.actStatus === "awarded") {
    return r.Ay.t("web_event_submission_ended_status", {}, "已结束");
  }
  return a[e.actStatus] || "";
};
