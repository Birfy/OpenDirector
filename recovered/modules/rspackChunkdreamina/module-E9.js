import { DANode } from "./module-uR.js";
import s from "Rd";
let o;
export var DADraftCreatedPlatform;
const a =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
o = DADraftCreatedPlatform || (DADraftCreatedPlatform = {});
o[(o.UNKNOWN = 0)] = "UNKNOWN";
o[(o.IOS = 1)] = "IOS";
o[(o.ANDROID = 2)] = "ANDROID";
o[(o.WEB = 3)] = "WEB";
o[(o.SERVER = 4)] = "SERVER";
export class DADraftMetadata extends DANode {
  constructor() {
    super(...arguments);
    this.createdPlatform = DADraftCreatedPlatform.UNKNOWN;
    this.createdPlatformVersion = "";
    this.createdTimeInMs = "";
    this.createdDid = "";
    this.creationAgentVersion = undefined;
  }
}
a(
  [s.serializable("created_platform")],
  DADraftMetadata.prototype,
  "createdPlatform",
  undefined,
);
a(
  [s.serializable("created_platform_version")],
  DADraftMetadata.prototype,
  "createdPlatformVersion",
  undefined,
);
a(
  [s.serializable("created_time_in_ms")],
  DADraftMetadata.prototype,
  "createdTimeInMs",
  undefined,
);
a(
  [s.serializable("created_did")],
  DADraftMetadata.prototype,
  "createdDid",
  undefined,
);
a(
  [s.serializable("creation_agent_version")],
  DADraftMetadata.prototype,
  "creationAgentVersion",
  undefined,
);
