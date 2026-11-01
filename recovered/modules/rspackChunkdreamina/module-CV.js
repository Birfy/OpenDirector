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
    r.prototype.THROTTLE_TIMEOUT = 100;
    r.prototype.POLL_INTERVAL = null;
    r.prototype.USE_MUTATION_OBSERVER = true;
    r.prototype.observe = function (element) {
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
    r.prototype.unobserve = function (e) {
      this._observationTargets = this._observationTargets.filter(
        (t) => t.element != e,
      );
      if (!this._observationTargets.length) {
        this._unmonitorIntersections();
        this._unregisterInstance();
      }
    };
    r.prototype.disconnect = function () {
      this._observationTargets = [];
      this._unmonitorIntersections();
      this._unregisterInstance();
    };
    r.prototype.takeRecords = function () {
      const e = this._queuedEntries.slice();
      this._queuedEntries = [];
      return e;
    };
    r.prototype._initThresholds = function (e) {
      let t = e || [0];
      if (!Array.isArray(t)) {
        t = [t];
      }
      return t.sort().filter((e, t, i) => {
        if (typeof e !== "number" || isNaN(e) || e < 0 || e > 1) {
          throw Error("threshold must be a number between 0 and 1 inclusively");
        }
        return e !== i[t - 1];
      });
    };
    r.prototype._parseRootMargin = function (e) {
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
    r.prototype._monitorIntersections = function () {
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
    r.prototype._unmonitorIntersections = function () {
      if (this._monitoringIntersections) {
        this._monitoringIntersections = false;
        clearInterval(this._monitoringInterval);
        this._monitoringInterval = null;
        a(window, "resize", this._checkForIntersections, true);
        a(e, "scroll", this._checkForIntersections, true);
        if (this._domObserver) {
          this._domObserver.disconnect();
          this._domObserver = null;
        }
      }
    };
    r.prototype._checkForIntersections = function () {
      const e = this._rootIsInDom();
      const rootBounds = e ? this._getRootRect() : s();
      this._observationTargets.forEach(function (r) {
        const r_element = r.element;
        const boundingClientRect = o(r_element);
        const s = this._rootContainsTarget(r_element);
        const r_entry = r.entry;
        const intersectionRect =
          e &&
          s &&
          this._computeTargetAndRootIntersection(r_element, rootBounds);
        const d = (r.entry = new i({
          time: window.performance && performance.now && performance.now(),
          target: r_element,
          boundingClientRect,
          rootBounds,
          intersectionRect,
        }));
        if (r_entry) {
          if (e && s) {
            if (this._hasCrossedThreshold(r_entry, d)) {
              this._queuedEntries.push(d);
            }
          } else if (r_entry && r_entry.isIntersecting) {
            this._queuedEntries.push(d);
          }
        } else {
          this._queuedEntries.push(d);
        }
      }, this);
      if (this._queuedEntries.length) {
        this._callback(this.takeRecords(), this);
      }
    };
    r.prototype._computeTargetAndRootIntersection = function (t, i) {
      if (window.getComputedStyle(t).display != "none") {
        let r = o(t);
        let n = c(t);
        for (let a = false; !a;) {
          let s = null;
          const l = n.nodeType == 1 ? window.getComputedStyle(n) : {};
          if (l.display == "none") {
            return;
          }
          if (n == this.root || n == e) {
            a = true;
            s = i;
          } else if (
            n != e.body &&
            n != e.documentElement &&
            l.overflow != "visible"
          ) {
            s = o(n);
          }
          if (
            s &&
            !(r = ((e, t) => {
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
            })(s, r))
          ) {
            break;
          }
          n = c(n);
        }
        return r;
      }
    };
    r.prototype._getRootRect = function () {
      let t;
      if (this.root) {
        t = o(this.root);
      } else {
        const i = e.documentElement;
        const r = e.body;
        t = {
          top: 0,
          left: 0,
          right: i.clientWidth || r.clientWidth,
          width: i.clientWidth || r.clientWidth,
          bottom: i.clientHeight || r.clientHeight,
          height: i.clientHeight || r.clientHeight,
        };
      }
      return this._expandRectByRootMargin(t);
    };
    r.prototype._expandRectByRootMargin = function (e) {
      const t = this._rootMarginValues.map((t, i) => {
        if (t.unit == "px") {
          return t.value;
        }
        return (t.value * (i % 2 ? e.width : e.height)) / 100;
      });
      const i = {
        top: e.top - t[0],
        right: e.right + t[1],
        bottom: e.bottom + t[2],
        left: e.left - t[3],
      };
      i.width = i.right - i.left;
      i.height = i.bottom - i.top;
      return i;
    };
    r.prototype._hasCrossedThreshold = function (e, t) {
      const i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1;
      const r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
      if (i !== r) {
        for (let n = 0; n < this.thresholds.length; n++) {
          const threshold = this.thresholds[n];
          if (
            threshold == i ||
            threshold == r ||
            threshold < i != threshold < r
          ) {
            return true;
          }
        }
      }
    };
    r.prototype._rootIsInDom = function () {
      return !this.root || l(e, this.root);
    };
    r.prototype._rootContainsTarget = function (t) {
      return l(this.root || e, t);
    };
    r.prototype._registerInstance = function () {
      if (t.indexOf(this) < 0) {
        t.push(this);
      }
    };
    r.prototype._unregisterInstance = function () {
      const e = t.indexOf(this);
      if (e != -1) {
        t.splice(e, 1);
      }
    };
    window.IntersectionObserver = r;
    window.IntersectionObserverEntry = i;
  }
  function i(e) {
    this.time = e.time;
    this.target = e.target;
    this.rootBounds = e.rootBounds;
    this.boundingClientRect = e.boundingClientRect;
    this.intersectionRect = e.intersectionRect || s();
    this.isIntersecting = !!e.intersectionRect;
    const boundingClientRect = this.boundingClientRect;
    const i = boundingClientRect.width * boundingClientRect.height;
    const intersectionRect = this.intersectionRect;
    const n = intersectionRect.width * intersectionRect.height;
    if (i) {
      this.intersectionRatio = Number((n / i).toFixed(4));
    } else {
      this.intersectionRatio = +!!this.isIntersecting;
    }
  }
  function r(e, t) {
    let i;
    let r;
    let n;
    const a = t || {};
    if (typeof e !== "function") {
      throw Error("callback must be a function");
    }
    if (a.root && a.root.nodeType != 1) {
      throw Error("root must be an Element");
    }
    this._checkForIntersections =
      ((i = this._checkForIntersections.bind(this)),
      (r = this.THROTTLE_TIMEOUT),
      (n = null),
      function () {
        if (!n) {
          n = setTimeout(() => {
            i();
            n = null;
          }, r);
        }
      });
    this._callback = e;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(a.rootMargin);
    this.thresholds = this._initThresholds(a.threshold);
    this.root = a.root || null;
    this.rootMargin = this._rootMarginValues
      .map((e) => e.value + e.unit)
      .join(" ");
  }
  function n(e, t, _checkForIntersections, r) {
    if (typeof e.addEventListener === "function") {
      e.addEventListener(t, _checkForIntersections, r || false);
    } else if (typeof e.attachEvent === "function") {
      e.attachEvent("on" + t, _checkForIntersections);
    }
  }
  function a(e, t, _checkForIntersections, r) {
    if (typeof e.removeEventListener === "function") {
      e.removeEventListener(t, _checkForIntersections, r || false);
    } else if (typeof e.detatchEvent === "function") {
      e.detatchEvent("on" + t, _checkForIntersections);
    }
  }
  function o(e) {
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
  function l(e, t) {
    for (let i = t; i;) {
      if (i == e) {
        return true;
      }
      i = c(i);
    }
    return false;
  }
  function c(e) {
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
