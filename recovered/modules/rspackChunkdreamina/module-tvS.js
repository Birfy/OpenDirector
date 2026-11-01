let a = require.j == "wl4" ? new Map() : null;
let o = "$di$target";
let i = "$di$dependencies";
export function B$(e) {
  return e[i] || [];
}
export function u1(e) {
  if (a.has(e)) {
    return a.get(e);
  }
  let id = function (e, r, index) {
    if (arguments.length != 3) {
      throw Error(
        "@IServiceName-decorator can only be used to decorate a parameter",
      );
    }
    if (e[o] === e) {
      e[i].push({
        id,
        index,
      });
    } else {
      e[i] = [
        {
          id,
          index,
        },
      ];
      e[o] = e;
    }
  };
  id.toString = () => e;
  a.set(e, id);
  return id;
}
export function GU(e) {
  return e;
}
