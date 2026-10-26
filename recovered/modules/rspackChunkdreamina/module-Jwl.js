let isSupport =
  i &&
  !(() => {
    let e = "_localstorage_support_test";
    try {
      localStorage.setItem(e, true);
      localStorage.removeItem(e);
      return false;
    } catch {
      return true;
    }
  })();
function i() {
  try {
    return (
      typeof localStorage !== "undefined" &&
      "setItem" in localStorage &&
      !!localStorage.setItem
    );
  } catch {
    return false;
  }
}
export let Lr = {
  length: isSupport ? localStorage.length : 0,
  clear: (e) => {
    try {
      for (let t = localStorage.length - 1; t >= 0; t--) {
        let r = localStorage.key(t);
        if (r.indexOf(e) === 0) {
          localStorage.removeItem(r);
        }
      }
    } catch {}
  },
  getItem: (e) => {
    try {
      return localStorage.getItem(e);
    } catch {
      return null;
    }
  },
  key: (e) => {
    try {
      return localStorage.key(e);
    } catch {
      return null;
    }
  },
  setItem: (e, t) => {
    try {
      localStorage.setItem(e, t);
    } catch {}
  },
  removeItem: (e) => {
    try {
      localStorage.removeItem(e);
    } catch {}
  },
  isSupport,
};
export class Iz {
  constructor() {
    let e;
    let t;
    let r = new Promise((resolve, reject) => {
      e = resolve;
      t = reject;
    });
    r.resolve = e;
    r.reject = t;
    return r;
  }
  resolve(e) {}
  reject(e) {}
}
let o =
  "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IHQ9e30se2hhc093blByb3BlcnR5OmN9PU9iamVjdC5wcm90b3R5cGU7cG9zdE1lc3NhZ2Uoe2V2ZW50OiJyZWFkeSJ9KTtmdW5jdGlvbiBvKHMsYSl7dFtzXT1zZXRUaW1lb3V0KCgpPT57cG9zdE1lc3NhZ2Uoe2RhdGE6e2Zha2VJZDpzfX0pLG8ocyxhKX0sYSl9YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsZnVuY3Rpb24ocyl7dHJ5e2NvbnN0e2RhdGE6YT17fX09cyx7YWN0aW9uOm4sZmFrZUlkOmUsdGltZTpyfT1hO3N3aXRjaChuKXtjYXNlInNldEludGVydmFsIjpvKGUscik7YnJlYWs7Y2FzZSJjbGVhckludGVydmFsIjpjLmNhbGwodCxlKSYmKGNsZWFyVGltZW91dCh0W2VdKSxkZWxldGUgdFtlXSk7YnJlYWs7Y2FzZSJzZXRUaW1lb3V0Ijp0W2VdPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtwb3N0TWVzc2FnZSh7ZGF0YTp7ZmFrZUlkOmV9fSksYy5jYWxsKHQsZSkmJmRlbGV0ZSB0W2VdfSxyKTticmVhaztjYXNlImNsZWFyVGltZW91dCI6Yy5jYWxsKHQsZSkmJihjbGVhclRpbWVvdXQodFtlXSksZGVsZXRlIHRbZV0pO2JyZWFrO2RlZmF1bHQ6YnJlYWt9fWNhdGNoKGEpe3Bvc3RNZXNzYWdlKHtldmVudDoiZXJyb3IiLGRhdGE6e2Vycm9yOmF9fSl9fSl9KSgpOwo=";
let u =
  typeof self !== "undefined" &&
  self.Blob &&
  new Blob([Uint8Array.from(atob(o), (e) => e.charCodeAt(0))], {
    type: "text/javascript;charset=utf-8",
  });
if (typeof Worker !== "undefined");
else {
  console.error(
    "the browser not support web worker, fallback to unWarp function!",
  );
}
if (!Promise.withResolvers) {
  Promise.withResolvers = function () {
    let e = {};
    e.promise = new Promise((resolve, reject) => {
      e.resolve = resolve;
      e.reject = reject;
    });
    return e;
  };
}
