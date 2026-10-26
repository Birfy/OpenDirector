export default (function () {
  "use strict";
  let t;
  let e;
  const n =
    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  const r =
    /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  const i = {
    years: 31536000000,
    months: 2592000000,
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000,
    milliseconds: 1,
    weeks: 604800000,
  };
  const s = function (t) {
    return t instanceof u;
  };
  const o = (t, e, n) => new u(t, n, e.$l);
  const l = (t) => e.p(t) + "s";
  const a = (t) => t < 0;
  const c = (t) => {
    if (a(t)) {
      return Math.ceil(t);
    }
    return Math.floor(t);
  };
  const h = (t, e) => {
    if (t) {
      if (a(t)) {
        return {
          negative: true,
          format: "" + Math.abs(t) + e,
        };
      }
      return {
        negative: false,
        format: "" + t + e,
      };
    }
    return {
      negative: false,
      format: "",
    };
  };
  class u {
    constructor(t, e, n) {
      var s = this;
      this.$d = {};
      this.$l = n;
      if (t === undefined) {
        this.$ms = 0;
        this.parseFromMilliseconds();
      }
      if (e) {
        return o(t * i[l(e)], this);
      }
      if (typeof t === "number") {
        this.$ms = t;
        this.parseFromMilliseconds();
        return this;
      }
      if (typeof t === "object") {
        Object.keys(t).forEach((e) => {
          s.$d[l(e)] = t[e];
        });
        this.calMilliseconds();
        return this;
      }
      if (typeof t === "string") {
        var a = t.match(r);
        if (a) {
          var c = a.slice(2).map((t) => {
            if (t != null) {
              return Number(t);
            }
            return 0;
          });
          this.$d.years = c[0];
          this.$d.months = c[1];
          this.$d.weeks = c[2];
          this.$d.days = c[3];
          this.$d.hours = c[4];
          this.$d.minutes = c[5];
          this.$d.seconds = c[6];
          this.calMilliseconds();
          return this;
        }
      }
      return this;
    }
    calMilliseconds() {
      const t = this;
      this.$ms = Object.keys(this.$d).reduce(
        (acc, key) => acc + (t.$d[key] || 0) * i[key],
        0,
      );
    }
    parseFromMilliseconds() {
      let $ms = this.$ms;
      this.$d.years = c($ms / 31536000000);
      $ms %= 31536000000;
      this.$d.months = c($ms / 2592000000);
      $ms %= 2592000000;
      this.$d.days = c($ms / 86400000);
      $ms %= 86400000;
      this.$d.hours = c($ms / 3600000);
      $ms %= 3600000;
      this.$d.minutes = c($ms / 60000);
      $ms %= 60000;
      this.$d.seconds = c($ms / 1000);
      $ms %= 1000;
      this.$d.milliseconds = $ms;
    }
    toISOString() {
      const t = h(this.$d.years, "Y");
      const e = h(this.$d.months, "M");
      let n = +this.$d.days || 0;
      if (this.$d.weeks) {
        n += 7 * this.$d.weeks;
      }
      const r = h(n, "D");
      const i = h(this.$d.hours, "H");
      const s = h(this.$d.minutes, "M");
      let o = this.$d.seconds || 0;
      if (this.$d.milliseconds) {
        o += this.$d.milliseconds / 1000;
      }
      const l = h(o, "S");
      const a =
        t.negative ||
        e.negative ||
        r.negative ||
        i.negative ||
        s.negative ||
        l.negative;
      const c = i.format || s.format || l.format ? "T" : "";
      const u =
        `${a ? "-" : ""}P` +
        t.format +
        e.format +
        r.format +
        c +
        i.format +
        s.format +
        l.format;
      if (u === "P" || u === "-P") {
        return "P0D";
      }
      return u;
    }
    toJSON() {
      return this.toISOString();
    }
    format(t) {
      const r = {
        Y: this.$d.years,
        YY: e.s(this.$d.years, 2, "0"),
        YYYY: e.s(this.$d.years, 4, "0"),
        M: this.$d.months,
        MM: e.s(this.$d.months, 2, "0"),
        D: this.$d.days,
        DD: e.s(this.$d.days, 2, "0"),
        H: this.$d.hours,
        HH: e.s(this.$d.hours, 2, "0"),
        m: this.$d.minutes,
        mm: e.s(this.$d.minutes, 2, "0"),
        s: this.$d.seconds,
        ss: e.s(this.$d.seconds, 2, "0"),
        SSS: e.s(this.$d.milliseconds, 3, "0"),
      };
      return (t || "YYYY-MM-DDTHH:mm:ss").replace(
        n,
        (t, e) => e || String(r[t]),
      );
    }
    as(t) {
      return this.$ms / i[l(t)];
    }
    get(t) {
      let $ms = this.$ms;
      const n = l(t);
      if (n === "milliseconds") {
        $ms %= 1000;
      } else {
        $ms = n === "weeks" ? c($ms / i[n]) : this.$d[n];
      }
      if ($ms === 0) {
        return 0;
      }
      return $ms;
    }
    add(t, e, n) {
      let r;
      r = e ? t * i[l(e)] : s(t) ? t.$ms : o(t, this).$ms;
      return o(this.$ms + r * (n ? -1 : 1), this);
    }
    subtract(t, e) {
      return this.add(t, e, true);
    }
    locale(t) {
      const e = this.clone();
      e.$l = t;
      return e;
    }
    clone() {
      return o(this.$ms, this);
    }
    humanize(e) {
      return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
    }
    milliseconds() {
      return this.get("milliseconds");
    }
    asMilliseconds() {
      return this.as("milliseconds");
    }
    seconds() {
      return this.get("seconds");
    }
    asSeconds() {
      return this.as("seconds");
    }
    minutes() {
      return this.get("minutes");
    }
    asMinutes() {
      return this.as("minutes");
    }
    hours() {
      return this.get("hours");
    }
    asHours() {
      return this.as("hours");
    }
    days() {
      return this.get("days");
    }
    asDays() {
      return this.as("days");
    }
    weeks() {
      return this.get("weeks");
    }
    asWeeks() {
      return this.as("weeks");
    }
    months() {
      return this.get("months");
    }
    asMonths() {
      return this.as("months");
    }
    years() {
      return this.get("years");
    }
    asYears() {
      return this.as("years");
    }
  }
  return function (n, r, i) {
    t = i;
    e = i().$utils();
    i.duration = function (t, e) {
      return o(
        t,
        {
          $l: i.locale(),
        },
        e,
      );
    };
    i.isDuration = s;
    const add = r.prototype.add;
    const subtract = r.prototype.subtract;
    r.prototype.add = function (t, e) {
      if (s(t)) {
        t = t.asMilliseconds();
      }
      return add.bind(this)(t, e);
    };
    r.prototype.subtract = function (t, e) {
      if (s(t)) {
        t = t.asMilliseconds();
      }
      return subtract.bind(this)(t, e);
    };
  };
})();
