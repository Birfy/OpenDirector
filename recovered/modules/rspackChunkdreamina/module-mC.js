export var r = (e, t, r) => {
  var a = new AudioContext();
  for (
    var { numberOfChannels, sampleRate } = e,
      o = sampleRate * t,
      s = sampleRate * r - o,
      l = a.createBuffer(numberOfChannels, s, sampleRate),
      c = new Float32Array(s),
      d = 0;
    d < numberOfChannels;
    d++
  ) {
    e.copyFromChannel(c, d, o);
    l.copyToChannel(c, d, 0);
  }
  return l;
};
