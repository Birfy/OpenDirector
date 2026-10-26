export default (function () {
  "use strict";
  const ms = "millisecond";
  const e = "second";
  const m_1 = "minute";
  const h_1 = "hour";
  const w = "week";
  const M = "month";
  const Q = "quarter";
  const y_1 = "year";
  const D = "date";
  const c = "Invalid Date";
  const f =
    /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  const d =
    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  const l = function (t, e, n) {
    const r = String(t);
    if (!r || r.length >= e) {
      return t;
    }
    return "" + Array(e + 1 - r.length).join(n) + t;
  };
  let h = "en";
  const v = {};
  v[h] = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_",
    ),
    months:
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_",
      ),
    ordinal: function (t) {
      const e = ["th", "st", "nd", "rd"];
      const n = t % 100;
      return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
    },
  };
  const m = function (t) {
    return t instanceof b;
  };
  const p = function t(e, n, r) {
    let i;
    if (!e) {
      return h;
    }
    if (typeof e === "string") {
      const o = e.toLowerCase();
      if (v[o]) {
        i = o;
      }
      if (n) {
        v[o] = n;
        i = o;
      }
      const u = e.split("-");
      if (!i && u.length > 1) {
        return t(u[0]);
      }
    } else {
      const a = e.name;
      v[a] = e;
      i = a;
    }
    if (!r && i) {
      h = i;
    }
    return i || (!r && h);
  };
  const y = function (t, e) {
    if (m(t)) {
      return t.clone();
    }
    const n = typeof e === "object" ? e : {};
    n.date = t;
    n.args = arguments;
    return new b(n);
  };
  const _ = {
    s: l,
    z: function (t) {
      const e = -t.utcOffset();
      const n = Math.abs(e);
      return (
        `${(e <= 0 ? "+" : "-") + l(Math.floor(n / 60), 2, "0")}:` +
        l(n % 60, 2, "0")
      );
    },
    m: function t(e, n) {
      if (e.date() < n.date()) {
        return -t(n, e);
      }
      const r = 12 * (n.year() - e.year()) + (n.month() - e.month());
      const i = e.clone().add(r, M);
      const u = n - i < 0;
      const a = e.clone().add(r + (u ? -1 : 1), M);
      return +(-(r + (n - i) / (u ? i - a : a - i)) || 0);
    },
    a: function (t) {
      if (t < 0) {
        return Math.ceil(t) || 0;
      }
      return Math.floor(t);
    },
    p: function (c) {
      return (
        {
          M,
          y: y_1,
          w,
          d: "day",
          D,
          h: h_1,
          m: m_1,
          s: e,
          ms,
          Q,
        }[c] ||
        String(c || "")
          .toLowerCase()
          .replace(/s$/, "")
      );
    },
    u: function (t) {
      return t === undefined;
    },
  };
  _.l = p;
  _.i = m;
  _.w = function (t, e) {
    return y(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset,
    });
  };
  class b {
    constructor(t) {
      this.$L = p(t.locale, null, true);
      this.parse(t);
    }
    parse(t) {
      this.$d = ((t) => {
        const t_date = t.date;
        const t_utc = t.utc;
        if (t_date === null) {
          return new Date(0 / 0);
        }
        if (_.u(t_date)) {
          return new Date();
        }
        if (t_date instanceof Date) {
          return new Date(t_date);
        }
        if (typeof t_date === "string" && !/Z$/i.test(t_date)) {
          const r = t_date.match(f);
          if (r) {
            const i = r[2] - 1 || 0;
            const o = (r[7] || "0").substring(0, 3);
            if (t_utc) {
              return new Date(
                Date.UTC(
                  r[1],
                  i,
                  r[3] || 1,
                  r[4] || 0,
                  r[5] || 0,
                  r[6] || 0,
                  o,
                ),
              );
            }
            return new Date(
              r[1],
              i,
              r[3] || 1,
              r[4] || 0,
              r[5] || 0,
              r[6] || 0,
              o,
            );
          }
        }
        return new Date(t_date);
      })(t);
      this.$x = t.x || {};
      this.init();
    }
    init() {
      const t = this.$d;
      this.$y = t.getFullYear();
      this.$M = t.getMonth();
      this.$D = t.getDate();
      this.$W = t.getDay();
      this.$H = t.getHours();
      this.$m = t.getMinutes();
      this.$s = t.getSeconds();
      this.$ms = t.getMilliseconds();
    }
    $utils() {
      return _;
    }
    isValid() {
      return this.$d.toString() !== c;
    }
    isSame(t, e) {
      const n = y(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    }
    isAfter(t, e) {
      return y(t) < this.startOf(e);
    }
    isBefore(t, e) {
      return this.endOf(e) < y(t);
    }
    $g(t, e, n) {
      if (_.u(t)) {
        return this[e];
      }
      return this.set(n, t);
    }
    unix() {
      return Math.floor(this.valueOf() / 1000);
    }
    valueOf() {
      return this.$d.getTime();
    }
    startOf(t, u) {
      const c = this;
      const f = !!_.u(u) || u;
      const d = _.p(t);
      const l = (t, e) => {
        const n = _.w(c.$u ? Date.UTC(c.$y, e, t) : new Date(c.$y, e, t), c);
        if (f) {
          return n;
        }
        return n.endOf("day");
      };
      const h = (t, e) =>
        _.w(
          c
            .toDate()
            [t].apply(
              c.toDate("s"),
              (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e),
            ),
          c,
        );
      const v = this.$W;
      const m = this.$M;
      const p = this.$D;
      const y = `set${this.$u ? "UTC" : ""}`;
      switch (d) {
        case y_1:
          if (f) {
            return l(1, 0);
          }
          return l(31, 11);
        case M:
          if (f) {
            return l(1, m);
          }
          return l(0, m + 1);
        case w:
          const b = this.$locale().weekStart || 0;
          const g = (v < b ? v + 7 : v) - b;
          return l(f ? p - g : p + (6 - g), m);
        case "day":
        case D:
          return h(y + "Hours", 0);
        case h_1:
          return h(y + "Minutes", 1);
        case m_1:
          return h(y + "Seconds", 2);
        case e:
          return h(y + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }
    endOf(t) {
      return this.startOf(t, false);
    }
    $set(i, u) {
      const f = _.p(i);
      const d = `set${this.$u ? "UTC" : ""}`;
      const l = {
        day: d + "Date",
        [D]: d + "Date",
        [M]: d + "Month",
        [y_1]: d + "FullYear",
        [h_1]: d + "Hours",
        [m_1]: d + "Minutes",
        [e]: d + "Seconds",
        [ms]: d + "Milliseconds",
      }[f];
      const h = f === "day" ? this.$D + (u - this.$W) : u;
      if (f === M || f === y_1) {
        const v = this.clone().set(D, 1);
        v.$d[l](h);
        v.init();
        this.$d = v.set(D, Math.min(this.$D, v.daysInMonth())).$d;
      } else {
        if (l) {
          this.$d[l](h);
        }
      }
      this.init();
      return this;
    }
    set(t, e) {
      return this.clone().$set(t, e);
    }
    get(t) {
      return this[_.p(t)]();
    }
    add(t, u) {
      const c = this;
      t = Number(t);
      const f = _.p(u);
      const d = (e) => {
        const n = y(c);
        return _.w(n.date(n.date() + Math.round(e * t)), c);
      };
      if (f === M) {
        return this.set(M, this.$M + t);
      }
      if (f === y_1) {
        return this.set(y_1, this.$y + t);
      }
      if (f === "day") {
        return d(1);
      }
      if (f === w) {
        return d(7);
      }
      const l =
        {
          [m_1]: 60000,
          [h_1]: 3600000,
          [e]: 1000,
        }[f] || 1;
      const h = this.$d.getTime() + t * l;
      return _.w(h, this);
    }
    subtract(t, e) {
      return this.add(-1 * t, e);
    }
    format(t) {
      const e = this;
      const n = this.$locale();
      if (!this.isValid()) {
        return n.invalidDate || c;
      }
      const r = t || "YYYY-MM-DDTHH:mm:ssZ";
      const Z = _.z(this);
      const o = this.$H;
      const u = this.$m;
      const a = this.$M;
      const n_weekdays = n.weekdays;
      const n_months = n.months;
      const l = (t, n, i, o) => (t && (t[n] || t(e, r))) || i[n].slice(0, o);
      const h = (t) => _.s(o % 12 || 12, t, "0");
      const v =
        n.meridiem ||
        ((t, e, n) => {
          const r = t < 12 ? "AM" : "PM";
          if (n) {
            return r.toLowerCase();
          }
          return r;
        });
      const m = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: a + 1,
        MM: _.s(a + 1, 2, "0"),
        MMM: l(n.monthsShort, a, n_months, 3),
        MMMM: l(n_months, a),
        D: this.$D,
        DD: _.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: l(n.weekdaysMin, this.$W, n_weekdays, 2),
        ddd: l(n.weekdaysShort, this.$W, n_weekdays, 3),
        dddd: n_weekdays[this.$W],
        H: String(o),
        HH: _.s(o, 2, "0"),
        h: h(1),
        hh: h(2),
        a: v(o, u, true),
        A: v(o, u, false),
        m: String(u),
        mm: _.s(u, 2, "0"),
        s: String(this.$s),
        ss: _.s(this.$s, 2, "0"),
        SSS: _.s(this.$ms, 3, "0"),
        Z,
      };
      return r.replace(d, (t, e) => e || m[t] || Z.replace(":", ""));
    }
    utcOffset() {
      return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
    }
    diff(t, s, c) {
      const d = _.p(s);
      const l = y(t);
      const h = (l.utcOffset() - this.utcOffset()) * 60000;
      const v = this - l;
      let m = _.m(this, l);
      m =
        {
          [y_1]: m / 12,
          [M]: m,
          [Q]: m / 3,
          [w]: (v - h) / 604800000,
          day: (v - h) / 86400000,
          [h_1]: v / 3600000,
          [m_1]: v / 60000,
          [e]: v / 1000,
        }[d] || v;
      if (c) {
        return m;
      }
      return _.a(m);
    }
    daysInMonth() {
      return this.endOf(M).$D;
    }
    $locale() {
      return v[this.$L];
    }
    locale(t, e) {
      if (!t) {
        return this.$L;
      }
      const n = this.clone();
      const r = p(t, e, true);
      if (r) {
        n.$L = r;
      }
      return n;
    }
    clone() {
      return _.w(this.$d, this);
    }
    toDate() {
      return new Date(this.valueOf());
    }
    toJSON() {
      if (this.isValid()) {
        return this.toISOString();
      }
      return null;
    }
    toISOString() {
      return this.$d.toISOString();
    }
    toString() {
      return this.$d.toUTCString();
    }
  }
  const b_prototype = b.prototype;
  y.prototype = b_prototype;
  [
    ["$ms", ms],
    ["$s", e],
    ["$m", m_1],
    ["$H", h_1],
    ["$W", "day"],
    ["$M", M],
    ["$y", y_1],
    ["$D", D],
  ].forEach((t) => {
    b_prototype[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  });
  y.extend = function (t, e) {
    if (!t.$i) {
      t(e, b, y);
      t.$i = true;
    }
    return y;
  };
  y.locale = p;
  y.isDayjs = m;
  y.unix = function (t) {
    return y(1000 * t);
  };
  y.en = v[h];
  y.Ls = v;
  y.p = {};
  return y;
})();
