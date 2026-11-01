export var unstable_now;
function r(t, e) {
  let t_length = t.length;
  for (t.push(e); t_length > 0;) {
    const n = (t_length - 1) >>> 1;
    const i = t[n];
    if (a(i, e) > 0) {
      t[n] = e;
      t[t_length] = i;
      t_length = n;
    } else {
      break;
    }
  }
}
function n(t) {
  if (t.length === 0) {
    return null;
  }
  return t[0];
}
function i(t) {
  if (t.length === 0) {
    return null;
  }
  const e = t[0];
  const r = t.pop();
  if (r !== e) {
    t[0] = r;
    for (let n = 0, i = t.length, o = i >>> 1; n < o;) {
      const s = 2 * (n + 1) - 1;
      const A = t[s];
      const c = s + 1;
      const u = t[c];
      if (a(A, r) < 0) {
        if (c < i && a(u, A) < 0) {
          t[n] = u;
          t[c] = r;
          n = c;
        } else {
          t[n] = A;
          t[s] = r;
          n = s;
        }
      } else if (c < i && a(u, r) < 0) {
        t[n] = u;
        t[c] = r;
        n = c;
      } else {
        break;
      }
    }
  }
  return e;
}
function a(t, e) {
  const r = t.sortIndex - e.sortIndex;
  if (r !== 0) {
    return r;
  }
  return t.id - e.id;
}
if (typeof performance === "object" && typeof performance.now === "function") {
  var o;
  const s = performance;
  unstable_now = function () {
    return s.now();
  };
} else {
  const A = Date;
  const c = A.now();
  unstable_now = function () {
    return A.now() - c;
  };
}
const u = [];
const l = [];
let h = 1;
let f = null;
let g = 3;
let d = false;
let p = false;
let m = false;
const y = typeof setTimeout === "function" ? setTimeout : null;
const b = typeof clearTimeout === "function" ? clearTimeout : null;
const v = typeof setImmediate !== "undefined" ? setImmediate : null;
function I(t) {
  for (let e = n(l); e !== null;) {
    if (e.callback === null) {
      i(l);
    } else if (e.startTime <= t) {
      i(l);
      e.sortIndex = e.expirationTime;
      r(u, e);
    } else {
      break;
    }
    e = n(l);
  }
}
function w(t) {
  m = false;
  I(t);
  if (!p) {
    if (n(u) !== null) {
      p = true;
      R(C);
    } else {
      const e = n(l);
      if (e !== null) {
        K(w, e.startTime - t);
      }
    }
  }
}
function C(t, r) {
  p = false;
  if (m) {
    m = false;
    b(E);
    E = -1;
  }
  d = true;
  const a = g;
  try {
    I(r);
    for (
      f = n(u);
      f !== null && (!(f.expirationTime > r) || (t && !unstable_shouldYield()));
    ) {
      const o = f.callback;
      if (typeof o === "function") {
        f.callback = null;
        g = f.priorityLevel;
        const s = o(f.expirationTime <= r);
        r = unstable_now();
        if (typeof s === "function") {
          f.callback = s;
        } else if (f === n(u)) {
          i(u);
        }
        I(r);
      } else {
        i(u);
      }
      f = n(u);
    }
    if (f !== null) var A = true;
    else {
      const c = n(l);
      if (c !== null) {
        K(w, c.startTime - r);
      }
      A = false;
    }
    return A;
  } finally {
    f = null;
    g = a;
    d = false;
  }
}
if (
  typeof navigator !== "undefined" &&
  navigator.scheduling !== undefined &&
  navigator.scheduling.isInputPending !== undefined
) {
  navigator.scheduling.isInputPending.bind(navigator.scheduling);
}
let B = false;
let S = null;
var E = -1;
let k = 5;
let D = -1;
export function unstable_shouldYield() {
  return !(unstable_now() - D < k);
}
function F() {
  if (S !== null) {
    const t = unstable_now();
    D = t;
    let r = true;
    try {
      r = S(true, t);
    } finally {
      if (r) {
        o();
      } else {
        B = false;
        S = null;
      }
    }
  } else {
    B = false;
  }
}
if (typeof v === "function") {
  o = function () {
    v(F);
  };
} else if (typeof MessageChannel !== "undefined") {
  const Q = new MessageChannel();
  const N = Q.port2;
  Q.port1.onmessage = F;
  o = function () {
    N.postMessage(null);
  };
} else {
  o = function () {
    y(F, 0);
  };
}
function R(t) {
  S = t;
  if (!B) {
    B = true;
    o();
  }
}
function K(t, r) {
  E = y(function () {
    t(unstable_now());
  }, r);
}
export const unstable_IdlePriority = 5;
export const unstable_ImmediatePriority = 1;
export const unstable_LowPriority = 4;
export const unstable_NormalPriority = 3;
export const unstable_Profiling = null;
export const unstable_UserBlockingPriority = 2;
export const unstable_cancelCallback = function (t) {
  t.callback = null;
};
export const unstable_continueExecution = function () {
  if (!(p || d)) {
    p = true;
    R(C);
  }
};
export const unstable_forceFrameRate = function (t) {
  if (t < 0 || t > 125) {
    console.error(
      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
    );
  } else {
    k = t > 0 ? Math.floor(1000 / t) : 5;
  }
};
export const unstable_getCurrentPriorityLevel = function () {
  return g;
};
export const unstable_getFirstCallbackNode = function () {
  return n(u);
};
export const unstable_next = function (t) {
  switch (g) {
    case 1:
    case 2:
    case 3:
      var e = 3;
      break;
    default:
      e = g;
  }
  const r = g;
  g = e;
  try {
    return t();
  } finally {
    g = r;
  }
};
export const unstable_pauseExecution = function () {};
export const unstable_requestPaint = function () {};
export const unstable_runWithPriority = function (t, e) {
  switch (t) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      t = 3;
  }
  const r = g;
  g = t;
  try {
    return e();
  } finally {
    g = r;
  }
};
export const unstable_scheduleCallback = function (
  priorityLevel,
  callback,
  startTime,
) {
  const o = unstable_now();
  startTime =
    typeof startTime === "object" &&
    startTime !== null &&
    typeof (startTime = startTime.delay) === "number" &&
    startTime > 0
      ? o + startTime
      : o;
  switch (priorityLevel) {
    case 1:
      var expirationTime = -1;
      break;
    case 2:
      expirationTime = 250;
      break;
    case 5:
      expirationTime = 1073741823;
      break;
    case 4:
      expirationTime = 10000;
      break;
    default:
      expirationTime = 5000;
  }
  expirationTime = startTime + expirationTime;
  priorityLevel = {
    id: h++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: -1,
  };
  if (startTime > o) {
    priorityLevel.sortIndex = startTime;
    r(l, priorityLevel);
    if (n(u) === null && priorityLevel === n(l)) {
      if (m) {
        b(E);
        E = -1;
      } else {
        m = true;
      }
      K(w, startTime - o);
    }
  } else {
    priorityLevel.sortIndex = expirationTime;
    r(u, priorityLevel);
    if (!(p || d)) {
      p = true;
      R(C);
    }
  }
  return priorityLevel;
};
export const unstable_wrapCallback = function (t) {
  const e = g;
  return function () {
    const r = g;
    g = e;
    try {
      return t.apply(this, arguments);
    } finally {
      g = r;
    }
  };
};
