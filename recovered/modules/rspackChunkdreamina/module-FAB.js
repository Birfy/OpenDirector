export function z(t, type) {
  for (var i = window.atob(t), s = Array(i.length), n = 0; n < i.length; n++) {
    s[n] = i.charCodeAt(n);
  }
  return new Blob([new Uint8Array(s)], {
    type,
  });
}
