import n from "g";
import self from "u";
import a from "Tg";
import o from "F";
const forced = self.self !== self;
try {
  if (o) {
    const u = Object.getOwnPropertyDescriptor(self, "self");
    if (!(!forced && u && u.get && u.enumerable)) {
      a(self, "self", {
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
