import n from "./module-A_23.js";
import self from "./module-J_23.js";
import o from "./module-I_23.js";
import s from "./module-r9_22.js";
const forced = self.self !== self;
try {
  if (s) {
    const f = Object.getOwnPropertyDescriptor(self, "self");
    if (!(!forced && f && f.get && f.enumerable)) {
      o(self, "self", {
        get: function () {
          return self;
        },
        set: function (value) {
          if (this !== self) {
            throw TypeError("Illegal invocation");
          }
          Object.defineProperty(self, "self", {
            value,
            writable: true,
            configurable: true,
            enumerable: true,
          });
        },
        configurable: true,
        enumerable: true,
      });
    }
  } else {
    n(
      {
        global: true,
        simple: true,
        forced,
      },
      {
        self,
      },
    );
  }
} catch (t) {}
