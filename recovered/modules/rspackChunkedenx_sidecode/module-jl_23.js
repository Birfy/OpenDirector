import n from "./module-A_24.js";
import self from "./module-J_24.js";
import i from "./module-I_24.js";
import a from "./module-r9_23.js";
const forced = self.self !== self;
try {
  if (a) {
    const f = Object.getOwnPropertyDescriptor(self, "self");
    if (!(!forced && f && f.get && f.enumerable)) {
      i(self, "self", {
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
