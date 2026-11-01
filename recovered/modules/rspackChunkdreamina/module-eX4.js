import s from "NY";
export var J = (e) =>
  s._(function* () {
    try {
      const t = new AudioContext();
      return yield t.decodeAudioData(yield e.arrayBuffer());
    } catch (e) {
      return;
    }
  })();
