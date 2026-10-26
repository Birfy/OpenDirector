export const i = (e) => {
  var t;
  let r = e.match(/^(https:\/\/[^\/]*)/g);
  if ((t = r == null ? undefined : r[0]) != null) {
    return t;
  }
  return e;
};
