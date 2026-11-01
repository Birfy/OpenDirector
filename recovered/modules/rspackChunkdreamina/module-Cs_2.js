const r = (e) =>
  function (t) {
    return t ** e;
  };
const n = (e) =>
  function (t) {
    return 1 - Math.abs((t - 1) ** e);
  };
const o = (e) =>
  function (t) {
    if (t < 0.5) {
      return r(e)(2 * t) / 2;
    }
    return n(e)(2 * t - 1) / 2 + 0.5;
  };
const quadIn = r(2);
const quadOut = n(2);
const quadInOut = o(2);
const cubicIn = r(3);
const cubicOut = n(3);
const cubicInOut = o(3);
const quartIn = r(4);
const quartOut = n(4);
const quartInOut = o(4);
const quintIn = r(5);
const quintOut = n(5);
const quintInOut = o(5);
const bounceOut = function (e) {
  if (e < 1 / 2.75) {
    return 7.5625 * e * e;
  }
  if (e < 2 / 2.75) {
    return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
  }
  if (e < 2.5 / 2.75) {
    return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
  }
  return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
};
const bounceIn = function (e) {
  return 1 - bounceOut(1 - e);
};
const v = Object.freeze({
  linear: function (e) {
    return e;
  },
  quadIn,
  quadOut,
  quadInOut,
  cubicIn,
  cubicOut,
  cubicInOut,
  quartIn,
  quartOut,
  quartInOut,
  quintIn,
  quintOut,
  quintInOut,
  sineIn: function (e) {
    return 1 + Math.sin((Math.PI / 2) * e - Math.PI / 2);
  },
  sineOut: function (e) {
    return Math.sin((Math.PI / 2) * e);
  },
  sineInOut: function (e) {
    return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
  },
  bounceOut,
  bounceIn,
  bounceInOut: function (e) {
    if (e < 0.5) {
      return 0.5 * bounceIn(2 * e);
    }
    return 0.5 * bounceOut(2 * e - 1) + 0.5;
  },
});
export class A {
  constructor(e) {
    const t = e.from;
    const r = e.to;
    const n = e.duration;
    const o = e.delay;
    const i = e.easing;
    const c = e.onStart;
    const a = e.onUpdate;
    const s = e.onFinish;
    for (const l in t) {
      if (r[l] === undefined) {
        r[l] = t[l];
      }
    }
    for (const u in r) {
      if (t[u] === undefined) {
        t[u] = r[u];
      }
    }
    this.from = t;
    this.to = r;
    this.duration = n || 500;
    this.delay = o || 0;
    this.easing = i || "linear";
    this.onStart = c;
    this.onUpdate = a || function () {};
    this.onFinish = s;
    this.startTime = Date.now() + this.delay;
    this.started = false;
    this.finished = false;
    this.timer = null;
    this.keys = {};
  }
  update() {
    if (
      ((this.time = Date.now()), !(this.time < this.startTime)) &&
      !this.finished
    ) {
      if (this.elapsed === this.duration) {
        if (!this.finished) {
          this.finished = true;
          if (this.onFinish) {
            this.onFinish(this.keys);
          }
        }
        return;
      }
      this.elapsed = this.time - this.startTime;
      this.elapsed =
        this.elapsed > this.duration ? this.duration : this.elapsed;
      for (const e in this.to) {
        this.keys[e] =
          this.from[e] +
          (this.to[e] - this.from[e]) *
            v[this.easing](this.elapsed / this.duration);
      }
      if (!this.started) {
        if (this.onStart) {
          this.onStart(this.keys);
        }
        this.started = true;
      }
      this.onUpdate(this.keys);
    }
  }
  start() {
    const e = this;
    this.startTime = Date.now() + this.delay;
    const t = function () {
      e.update();
      e.timer = requestAnimationFrame(t);
      if (e.finished) {
        cancelAnimationFrame(e.timer);
        e.timer = null;
      }
    };
    t();
  }
  stop() {
    cancelAnimationFrame(this.timer);
    this.timer = null;
  }
}
