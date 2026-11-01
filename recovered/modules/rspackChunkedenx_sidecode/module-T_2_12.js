import { f } from "./module-t_13.js";
export default function (J, Z, Q) {
  if (!(Q in J)) {
    f(J, Q, {
      configurable: true,
      get: function () {
        return Z[Q];
      },
      set: function (J) {
        Z[Q] = J;
      },
    });
  }
}
