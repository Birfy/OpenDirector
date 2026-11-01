import n from "NY";
export function X(e, t, i) {
  return t.invokeFunction((t) => {
    var a = t.get(i.lazy);
    return new Promise((resolve, reject) =>
      n._(function* () {
        try {
          const n = yield a.getInstance();
          e.registerInstance(i.real, n);
          resolve();
        } catch (error) {
          reject(error);
        }
      })(),
    );
  });
}
