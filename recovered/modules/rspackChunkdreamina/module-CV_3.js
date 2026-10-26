(() => {
  "use strict";
  if (typeof window === "object") {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(
          window.IntersectionObserverEntry.prototype,
          "isIntersecting",
          {
            get: function () {
              return this.intersectionRatio > 0;
            },
          },
        );
      }
      return;
    }
    const e = window.document;
    const t = [];
    i.prototype.THROTTLE_TIMEOUT = 100;
    i.prototype.POLL_INTERVAL = null;
    i.prototype.USE_MUTATION_OBSERVER = true;
    i.prototype.observe = function (element) {
      if (!this._observationTargets.some((t) => t.element == element)) {
        if (!(element && element.nodeType == 1)) {
          throw Error("target must be an Element");
        }
        this._registerInstance();
        this._observationTargets.push({
          element,
          entry: null,
        });
        this._monitorIntersections();
        this._checkForIntersections();
      }
    };
    i.prototype.unobserve = function (e) {
      this._observationTargets = this._observationTargets.filter(
        (t) => t.element != e,
      );
      if (!this._observationTargets.length) {
        this._unmonitorIntersections();
        this._unregisterInstance();
      }
    };
    i.prototype.disconnect = function () {
      this._observationTargets = [];
      this._unmonitorIntersections();
      this._unregisterInstance();
    };
    i.prototype.takeRecords = function () {
      const e = this._queuedEntries.slice();
      this._queuedEntries = [];
      return e;
    };
    i.prototype._initThresholds = function (e) {
      let t = e || [0];
      if (!Array.isArray(t)) {
        t = [t];
      }
      return t.sort().filter((e, t, r) => {
        if (typeof e !== "number" || isNaN(e) || e < 0 || e > 1) {
          throw Error("threshold must be a number between 0 and 1 inclusively");
        }
        return e !== r[t - 1];
      });
    };
    i.prototype._parseRootMargin = function (e) {
      const t = (e || "0px").split(/\s+/).map((e) => {
        const t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
        if (!t) {
          throw Error("rootMargin must be specified in pixels or percent");
        }
        return {
          value: parseFloat(t[1]),
          unit: t[2],
        };
      });
      t[1] = t[1] || t[0];
      t[2] = t[2] || t[0];
      t[3] = t[3] || t[1];
      return t;
    };
    i.prototype._monitorIntersections = function () {
      if (!this._monitoringIntersections) {
        this._monitoringIntersections = true;
        if (this.POLL_INTERVAL) {
          this._monitoringInterval = setInterval(
            this._checkForIntersections,
            this.POLL_INTERVAL,
          );
        } else {
          n(window, "resize", this._checkForIntersections, true);
          n(e, "scroll", this._checkForIntersections, true);
          if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window) {
            this._domObserver = new MutationObserver(
              this._checkForIntersections,
            );
            this._domObserver.observe(e, {
              attributes: true,
              childList: true,
              characterData: true,
              subtree: true,
            });
          }
        }
      }
    };
    i.prototype._unmonitorIntersections = function () {
      if (this._monitoringIntersections) {
        this._monitoringIntersections = false;
        clearInterval(this._monitoringInterval);
        this._monitoringInterval = null;
        o(window, "resize", this._checkForIntersections, true);
        o(e, "scroll", this._checkForIntersections, true);
        if (this._domObserver) {
          this._domObserver.disconnect();
          this._domObserver = null;
        }
      }
    };
    i.prototype._checkForIntersections = function () {
      const e = this._rootIsInDom();
      const rootBounds = e ? this._getRootRect() : s();
      this._observationTargets.forEach(function (i) {
        const i_element = i.element;
        const boundingClientRect = a(i_element);
        const s = this._rootContainsTarget(i_element);
        const i_entry = i.entry;
        const intersectionRect =
          e &&
          s &&
          this._computeTargetAndRootIntersection(i_element, rootBounds);
        const m = (i.entry = new r({
          time: window.performance && performance.now && performance.now(),
          target: i_element,
          boundingClientRect,
          rootBounds,
          intersectionRect,
        }));
        if (i_entry) {
          if (e && s) {
            if (this._hasCrossedThreshold(i_entry, m)) {
              this._queuedEntries.push(m);
            }
          } else if (i_entry && i_entry.isIntersecting) {
            this._queuedEntries.push(m);
          }
        } else {
          this._queuedEntries.push(m);
        }
      }, this);
      if (this._queuedEntries.length) {
        this._callback(this.takeRecords(), this);
      }
    };
    i.prototype._computeTargetAndRootIntersection = function (t, r) {
      if (window.getComputedStyle(t).display != "none") {
        let i = a(t);
        let n = l(t);
        for (let o = false; !o;) {
          let s = null;
          const c = n.nodeType == 1 ? window.getComputedStyle(n) : {};
          if (c.display == "none") {
            return;
          }
          if (n == this.root || n == e) {
            o = true;
            s = r;
          } else if (
            n != e.body &&
            n != e.documentElement &&
            c.overflow != "visible"
          ) {
            s = a(n);
          }
          if (
            s &&
            !(i = ((e, t) => {
              const top = Math.max(e.top, t.top);
              const bottom = Math.min(e.bottom, t.bottom);
              const left = Math.max(e.left, t.left);
              const right = Math.min(e.right, t.right);
              const width = right - left;
              const height = bottom - top;
              return (
                width >= 0 &&
                height >= 0 && {
                  top,
                  bottom,
                  left,
                  right,
                  width,
                  height,
                }
              );
            })(s, i))
          ) {
            break;
          }
          n = l(n);
        }
        return i;
      }
    };
    i.prototype._getRootRect = function () {
      let t;
      if (this.root) {
        t = a(this.root);
      } else {
        const r = e.documentElement;
        const i = e.body;
        t = {
          top: 0,
          left: 0,
          right: r.clientWidth || i.clientWidth,
          width: r.clientWidth || i.clientWidth,
          bottom: r.clientHeight || i.clientHeight,
          height: r.clientHeight || i.clientHeight,
        };
      }
      return this._expandRectByRootMargin(t);
    };
    i.prototype._expandRectByRootMargin = function (e) {
      const t = this._rootMarginValues.map((t, r) => {
        if (t.unit == "px") {
          return t.value;
        }
        return (t.value * (r % 2 ? e.width : e.height)) / 100;
      });
      const r = {
        top: e.top - t[0],
        right: e.right + t[1],
        bottom: e.bottom + t[2],
        left: e.left - t[3],
      };
      r.width = r.right - r.left;
      r.height = r.bottom - r.top;
      return r;
    };
    i.prototype._hasCrossedThreshold = function (e, t) {
      const r = e && e.isIntersecting ? e.intersectionRatio || 0 : -1;
      const i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
      if (r !== i) {
        for (let n = 0; n < this.thresholds.length; n++) {
          const threshold = this.thresholds[n];
          if (
            threshold == r ||
            threshold == i ||
            threshold < r != threshold < i
          ) {
            return true;
          }
        }
      }
    };
    i.prototype._rootIsInDom = function () {
      return !this.root || c(e, this.root);
    };
    i.prototype._rootContainsTarget = function (t) {
      return c(this.root || e, t);
    };
    i.prototype._registerInstance = function () {
      if (t.indexOf(this) < 0) {
        t.push(this);
      }
    };
    i.prototype._unregisterInstance = function () {
      const e = t.indexOf(this);
      if (e != -1) {
        t.splice(e, 1);
      }
    };
    window.IntersectionObserver = i;
    window.IntersectionObserverEntry = r;
  }
  function r(e) {
    this.time = e.time;
    this.target = e.target;
    this.rootBounds = e.rootBounds;
    this.boundingClientRect = e.boundingClientRect;
    this.intersectionRect = e.intersectionRect || s();
    this.isIntersecting = !!e.intersectionRect;
    const boundingClientRect = this.boundingClientRect;
    const r = boundingClientRect.width * boundingClientRect.height;
    const intersectionRect = this.intersectionRect;
    const n = intersectionRect.width * intersectionRect.height;
    if (r) {
      this.intersectionRatio = Number((n / r).toFixed(4));
    } else {
      this.intersectionRatio = +!!this.isIntersecting;
    }
  }
  function i(e, t) {
    let r;
    let i;
    let n;
    const o = t || {};
    if (typeof e !== "function") {
      throw Error("callback must be a function");
    }
    if (o.root && o.root.nodeType != 1) {
      throw Error("root must be an Element");
    }
    this._checkForIntersections =
      ((r = this._checkForIntersections.bind(this)),
      (i = this.THROTTLE_TIMEOUT),
      (n = null),
      function () {
        if (!n) {
          n = setTimeout(() => {
            r();
            n = null;
          }, i);
        }
      });
    this._callback = e;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(o.rootMargin);
    this.thresholds = this._initThresholds(o.threshold);
    this.root = o.root || null;
    this.rootMargin = this._rootMarginValues
      .map((e) => e.value + e.unit)
      .join(" ");
  }
  function n(e, t, _checkForIntersections, i) {
    if (typeof e.addEventListener === "function") {
      e.addEventListener(t, _checkForIntersections, i || false);
    } else if (typeof e.attachEvent === "function") {
      e.attachEvent("on" + t, _checkForIntersections);
    }
  }
  function o(e, t, _checkForIntersections, i) {
    if (typeof e.removeEventListener === "function") {
      e.removeEventListener(t, _checkForIntersections, i || false);
    } else if (typeof e.detatchEvent === "function") {
      e.detatchEvent("on" + t, _checkForIntersections);
    }
  }
  function a(e) {
    let t;
    try {
      t = e.getBoundingClientRect();
    } catch (e) {}
    if (t) {
      if (!(t.width && t.height)) {
        t = {
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.right - t.left,
          height: t.bottom - t.top,
        };
      }
      return t;
    }
    return s();
  }
  function s() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0,
    };
  }
  function c(e, t) {
    for (let r = t; r;) {
      if (r == e) {
        return true;
      }
      r = l(r);
    }
    return false;
  }
  function l(e) {
    const e_parentNode = e.parentNode;
    if (e_parentNode && e_parentNode.nodeType == 11 && e_parentNode.host) {
      return e_parentNode.host;
    }
    if (e_parentNode && e_parentNode.assignedSlot) {
      return e_parentNode.assignedSlot.parentNode;
    }
    return e_parentNode;
  }
})();
