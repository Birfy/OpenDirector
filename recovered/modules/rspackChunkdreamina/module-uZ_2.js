let r = {};
export function zm(e) {
  r.entryName = e.entryName;
  r.App = e.App;
  r.routes = e.routes;
  r.appInit = e.appInit;
  r.layoutApp = e.layoutApp;
  r.basename = e.basename;
  r.RSCRoot = e.RSCRoot;
  r.isRscClient = e.isRscClient;
  r.enableRsc = e.enableRsc;
}
export function fO() {
  return r.entryName;
}
export function cG(e) {
  r.internalRuntimeContext = e;
}
export function gy() {
  return r.internalRuntimeContext;
}
export function z_() {
  return r.App;
}
export function A8() {
  return r.routes;
}
export function fn() {
  return r.layoutApp;
}
