let Z;
let Q;
let $;
const tt = {};
export default tt;
function te() {
  throw Error("setTimeout has not been defined");
}
function tr() {
  throw Error("clearTimeout has not been defined");
}
try {
  Z = typeof setTimeout === "function" ? setTimeout : te;
} catch (J) {
  Z = te;
}
try {
  Q = typeof clearTimeout === "function" ? clearTimeout : tr;
} catch (J) {
  Q = tr;
}
function tn(J) {
  if (Z === setTimeout) {
    return setTimeout(J, 0);
  }
  if ((Z === te || !Z) && setTimeout) {
    Z = setTimeout;
    return setTimeout(J, 0);
  }
  try {
    return Z(J, 0);
  } catch (Q) {
    try {
      return Z.call(null, J, 0);
    } catch (Q) {
      return Z.call(this, J, 0);
    }
  }
}
let ti = [];
let to = false;
let ta = -1;
function ts() {
  if (to && $) {
    to = false;
    if ($.length) {
      ti = $.concat(ti);
    } else {
      ta = -1;
    }
    if (ti.length) {
      tf();
    }
  }
}
function tf() {
  if (!to) {
    const J = tn(ts);
    to = true;
    for (let Z = ti.length; Z;) {
      $ = ti;
      for (ti = []; ++ta < Z;) {
        if ($) {
          $[ta].run();
        }
      }
      ta = -1;
      Z = ti.length;
    }
    $ = null;
    to = false;
    (function (J) {
      if (Q === clearTimeout) {
        return clearTimeout(J);
      }
      if ((Q === tr || !Q) && clearTimeout) {
        Q = clearTimeout;
        return clearTimeout(J);
      }
      try {
        Q(J);
      } catch (Z) {
        try {
          return Q.call(null, J);
        } catch (Z) {
          return Q.call(this, J);
        }
      }
    })(J);
  }
}
class tu {
  constructor(J, Z) {
    this.fun = J;
    this.array = Z;
  }
  run() {
    this.fun.apply(null, this.array);
  }
}
function tc() {}
tt.nextTick = function (J) {
  const Z = Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (let Q = 1; Q < arguments.length; Q++) {
      Z[Q - 1] = arguments[Q];
    }
  }
  ti.push(new tu(J, Z));
  if (!(ti.length !== 1 || to)) {
    tn(tf);
  }
};
tt.title = "browser";
tt.browser = true;
tt.env = {};
tt.argv = [];
tt.version = "";
tt.versions = {};
tt.on = tc;
tt.addListener = tc;
tt.once = tc;
tt.off = tc;
tt.removeListener = tc;
tt.removeAllListeners = tc;
tt.emit = tc;
tt.prependListener = tc;
tt.prependOnceListener = tc;
tt.listeners = function (J) {
  return [];
};
tt.binding = function (J) {
  throw Error("process.binding is not supported");
};
tt.cwd = function () {
  return "/";
};
tt.chdir = function (J) {
  throw Error("process.chdir is not supported");
};
tt.umask = function () {
  return 0;
};
