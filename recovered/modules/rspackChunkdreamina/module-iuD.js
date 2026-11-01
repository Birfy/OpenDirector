import a from "NY";
import i from "GWw";
function n(e) {
  return a._(function* () {
    const { sampleRate, numberOfChannels } = e;
    return new Blob(
      [
        yield i.l({
          sampleRate,
          channelData: [...Array(numberOfChannels).keys()].map((t) =>
            e.getChannelData(t),
          ),
        }),
      ],
      {
        type: "audio/wav",
      },
    );
  })();
}
export { n };
