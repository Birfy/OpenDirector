import n from "Qey";
const a = {
  modified: {
    minutes: ["asset_modified_minutes_ago", "{minutes}分钟前修改"],
    hours: ["asset_modified_hours_ago", "{hours}小时前修改"],
    days: ["asset_modified_days_ago", "{days}天前修改"],
    monthDay: ["asset_modified_month_day", "{month}月{day}日修改"],
    yearMonthDay: [
      "asset_modified_year_month_day",
      "{year}年{month}月{day}日修改",
    ],
  },
  created: {
    minutes: ["asset_created_minutes_ago", "{minutes}分钟前创建"],
    hours: ["asset_created_hours_ago", "{hours}小时前创建"],
    days: ["asset_created_days_ago", "{days}天前创建"],
    monthDay: ["asset_created_month_day", "{month}月{day}日创建"],
    yearMonthDay: [
      "asset_created_year_month_day",
      "{year}年{month}月{day}日创建",
    ],
  },
  generated: {
    minutes: ["asset_generated_minutes_ago", "{minutes}分钟前生成"],
    hours: ["asset_generated_hours_ago", "{hours}小时前生成"],
    days: ["asset_generated_days_ago", "{days}天前生成"],
    monthDay: ["asset_generated_month_day", "{month}月{day}日生成"],
    yearMonthDay: [
      "asset_generated_year_month_day",
      "{year}年{month}月{day}日生成",
    ],
  },
};
export var $8 = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "modified";
  if (e) {
    return ((e, t) => {
      var r = a[t];
      var o = Date.now();
      var i = (o - e) / 1000;
      if (i < 3600) {
        var minutes = Math.max(1, Math.floor(i / 60));
        return n.Ay.t(
          r.minutes[0],
          {
            minutes,
          },
          r.minutes[1],
        );
      }
      if (i < 86400) {
        var hours = Math.floor(i / 3600);
        return n.Ay.t(
          r.hours[0],
          {
            hours,
          },
          r.hours[1],
        );
      }
      if (i < 604800) {
        var days = Math.floor(i / 86400);
        return n.Ay.t(
          r.days[0],
          {
            days,
          },
          r.days[1],
        );
      }
      var u = new Date(e);
      var d = new Date(o).getFullYear();
      var year = u.getFullYear();
      var p = u.getMonth() + 1;
      var h = u.getDate();
      var month = String(p).padStart(2, "0");
      var day = String(h).padStart(2, "0");
      if (year === d) {
        return n.Ay.t(
          r.monthDay[0],
          {
            month,
            day,
          },
          r.monthDay[1],
        );
      }
      return n.Ay.t(
        r.yearMonthDay[0],
        {
          year,
          month,
          day,
        },
        r.yearMonthDay[1],
      );
    })(e, t);
  }
  return "";
};
export var K4 = (e) => $8(e, "modified");
export var h8 = (e) => {
  if (e) {
    return $8(1000 * e, "modified");
  }
  return "";
};
