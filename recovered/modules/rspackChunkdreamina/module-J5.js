import r from "Ut";
import a from "./module-Rd.js";
const o =
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
export class ServerAudioTag extends a.Serializable {
  constructor() {
    super(...arguments);
    this.key = undefined;
    this.name = undefined;
    this.type = undefined;
  }
}
o([a.serializable("key")], ServerAudioTag.prototype, "key", undefined);
o([a.serializable("name")], ServerAudioTag.prototype, "name", undefined);
o([a.serializable("type")], ServerAudioTag.prototype, "type", undefined);
export class ServerGenerateAudioInput extends a.Serializable {
  constructor() {
    super(...arguments);
    this.type = undefined;
    this.title = undefined;
    this.prompt = undefined;
    this.lyrics = undefined;
    this.duration = undefined;
    this.tags = [];
    this.generateTTSParam = undefined;
    this.modelReqKey = undefined;
  }
}
o(
  [a.serializable("type")],
  ServerGenerateAudioInput.prototype,
  "type",
  undefined,
);
o(
  [a.serializable("title")],
  ServerGenerateAudioInput.prototype,
  "title",
  undefined,
);
o(
  [a.serializable("prompt")],
  ServerGenerateAudioInput.prototype,
  "prompt",
  undefined,
);
o(
  [a.serializable("lyrics")],
  ServerGenerateAudioInput.prototype,
  "lyrics",
  undefined,
);
o(
  [a.serializable("duration")],
  ServerGenerateAudioInput.prototype,
  "duration",
  undefined,
);
o(
  [a.serializable("tags", () => ServerAudioTag)],
  ServerGenerateAudioInput.prototype,
  "tags",
  undefined,
);
o(
  [a.serializable("generate_tts_param", () => r.DATextToSpeechAbility)],
  ServerGenerateAudioInput.prototype,
  "generateTTSParam",
  undefined,
);
o(
  [a.serializable("model_req_key")],
  ServerGenerateAudioInput.prototype,
  "modelReqKey",
  undefined,
);
