import { $W, GT } from "./module-p3K.js";
import { Kd, a$ } from "./module-Nh_2.js";
import { gx, iR } from "./module-s2v.js";
export let Tj = (e) => (t, n, i, a) => {
  let s = i
    ? Object.assign(i, {
        async: false,
      })
    : {
        async: false,
      };
  let u = t._zod.run(
    {
      value: n,
      issues: [],
    },
    s,
  );
  if (u instanceof Promise) {
    throw new GT();
  }
  if (u.issues.length) {
    let t = new (a?.Err ?? e)(u.issues.map((e) => iR(e, s, $W())));
    gx(t, a?.callee);
    throw t;
  }
  return u.value;
};
export let qg = Tj(Kd);
export let Rb = (e) => async (t, n, i, a) => {
  let s = i
    ? Object.assign(i, {
        async: true,
      })
    : {
        async: true,
      };
  let u = t._zod.run(
    {
      value: n,
      issues: [],
    },
    s,
  );
  if (u instanceof Promise) {
    u = await u;
  }
  if (u.issues.length) {
    let t = new (a?.Err ?? e)(u.issues.map((e) => iR(e, s, $W())));
    gx(t, a?.callee);
    throw t;
  }
  return u.value;
};
export let EJ = Rb(Kd);
export let Od = (e) => (t, n, a) => {
  let s = a
    ? {
        ...a,
        async: false,
      }
    : {
        async: false,
      };
  let u = t._zod.run(
    {
      value: n,
      issues: [],
    },
    s,
  );
  if (u instanceof Promise) {
    throw new GT();
  }
  if (u.issues.length) {
    return {
      success: false,
      error: new (e ?? a$)(u.issues.map((e) => iR(e, s, $W()))),
    };
  }
  return {
    success: true,
    data: u.value,
  };
};
export let xL = Od(Kd);
export let wG = (e) => async (t, n, i) => {
  let a = i
    ? Object.assign(i, {
        async: true,
      })
    : {
        async: true,
      };
  let s = t._zod.run(
    {
      value: n,
      issues: [],
    },
    a,
  );
  if (s instanceof Promise) {
    s = await s;
  }
  if (s.issues.length) {
    return {
      success: false,
      error: new e(s.issues.map((e) => iR(e, a, $W()))),
    };
  }
  return {
    success: true,
    data: s.value,
  };
};
export let bp = wG(Kd);
