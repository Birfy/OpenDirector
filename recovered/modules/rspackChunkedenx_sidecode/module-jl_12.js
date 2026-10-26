import $ from "./module-A_13.js";
import self from "./module-J_13.js";
import te from "./module-I_13.js";
import tr from "./module-r9_12.js";
const forced = self.self !== self;
try {
  if (tr) {
    const ta = Object.getOwnPropertyDescriptor(self, "self");
    if (!(!forced && ta && ta.get && ta.enumerable)) {
      te(self, "self", {
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
    $(
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
} catch (J) {}
