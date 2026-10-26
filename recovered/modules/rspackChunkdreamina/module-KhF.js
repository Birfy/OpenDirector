import { xI } from "./module-p3K.js";
import { L8, W4 } from "./module-KwG.js";
import { A2, Vy, gJ, o8 } from "./module-s2v.js";
import { EJ, bp, qg, xL } from "./module-BMb.js";
let s = xI("ZodMiniType", (e, t) => {
  if (!e._zod) {
    throw Error("Uninitialized schema in ZodMiniType.");
  }
  W4.init(e, t);
  e.def = t;
  e.parse = (t, n) =>
    qg(e, t, n, {
      callee: e.parse,
    });
  e.safeParse = (t, n) => xL(e, t, n);
  e.parseAsync = async (t, n) =>
    EJ(e, t, n, {
      callee: e.parseAsync,
    });
  e.safeParseAsync = async (t, n) => bp(e, t, n);
  e.check = (...n) =>
    e.clone({
      ...t,
      checks: [
        ...(t.checks ?? []),
        ...n.map((check) => {
          if (typeof check === "function") {
            return {
              _zod: {
                check,
                def: {
                  check: "custom",
                },
                onattach: [],
              },
            };
          }
          return check;
        }),
      ],
    });
  e.clone = (t, n) => o8(e, t, n);
  e.brand = () => e;
  e.register = (t, n) => {
    t.add(e, n);
    return e;
  };
});
let u = xI("ZodMiniObject", (e, t) => {
  L8.init(e, t);
  s.init(e, t);
  gJ(e, "shape", () => t.shape);
});
export function Ik(e, t) {
  return new u({
    type: "object",
    get shape() {
      Vy(this, "shape", {
        ...e,
      });
      return this.shape;
    },
    ...A2(t),
  });
}
