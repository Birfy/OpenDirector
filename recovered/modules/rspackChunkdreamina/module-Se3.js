let r;
function n(e) {
  return new Promise((resolve, reject) => {
    e.oncomplete = e.onsuccess = () => resolve(e.result);
    e.onabort = e.onerror = () => reject(e.error);
  });
}
export function y$(e, t) {
  let i = indexedDB.open(e);
  i.onupgradeneeded = () => i.result.createObjectStore(t);
  let r = n(i);
  return (e, i) => r.then((r) => i(r.transaction(t, e).objectStore(t)));
}
function o() {
  if (!r) {
    r = y$("keyval-store", "keyval");
  }
  return r;
}
export function Jt(e, t = o()) {
  return t("readonly", (t) => n(t.get(e)));
}
export function hZ(e, t, i = o()) {
  return i("readwrite", (i) => {
    i.put(t, e);
    return n(i.transaction);
  });
}
export function _y(e, t = o()) {
  return t("readwrite", (t) => {
    e.forEach((e) => t.put(e[1], e[0]));
    return n(t.transaction);
  });
}
export function qy(e, t = o()) {
  return t("readonly", (t) => Promise.all(e.map((e) => n(t.get(e)))));
}
export function yH(e, t = o()) {
  return t("readwrite", (t) => {
    t.delete(e);
    return n(t.transaction);
  });
}
export function IU(e = o()) {
  return e("readwrite", (e) => {
    e.clear();
    return n(e.transaction);
  });
}
export function HP(e = o()) {
  return e("readonly", (e) => {
    var t;
    if (e.getAllKeys) {
      return n(e.getAllKeys());
    }
    let i = [];
    return ((t = (e) => i.push(e.key)),
    (e.openCursor().onsuccess = function () {
      if (this.result) {
        t(this.result);
        this.result.continue();
      }
    }),
    n(e.transaction)).then(() => i);
  });
}
