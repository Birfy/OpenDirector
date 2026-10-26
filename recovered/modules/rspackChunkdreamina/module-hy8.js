import i from "Ut";
export var O = (e) => {
  var { format, pitchRate, sampleRate, speechRate, emotion, emotionScale } = e;
  var m = new i.DAAudioConfig();
  m.format = format;
  m.pitchRate = pitchRate;
  m.sampleRate = sampleRate;
  m.speechRate = speechRate;
  m.emotion = emotion;
  m.emotionScale = emotionScale;
  return m;
};
