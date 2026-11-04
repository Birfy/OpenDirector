/** PCM16 WAV for the selected interval. Partial boundaries include their enclosing samples. */
import { tNow } from "../i18n/messages.ts";
export function encodePcmWav(
  channels: readonly Float32Array[],
  sampleRate: number,
  start: number,
  end: number,
): ArrayBuffer {
  if (
    !channels.length ||
    channels.length > 8 ||
    !Number.isInteger(sampleRate) ||
    sampleRate <= 0 ||
    sampleRate * channels.length * 2 > 0xffffffff ||
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    start < 0 ||
    end <= start
  )
    throw new Error(tNow("errors.render.audioCrop"));
  const length = channels[0]!.length;
  if (channels.some((channel) => channel.length !== length))
    throw new Error(tNow("errors.render.audioLength"));
  const first = Math.floor(start * sampleRate),
    last = Math.min(length, Math.ceil(end * sampleRate));
  if (first >= last) throw new Error(tNow("errors.render.audioEmpty"));
  const count = last - first,
    bytes = count * channels.length * 2;
  if (bytes > 256 * 1024 * 1024)
    throw new Error(tNow("errors.render.audioSize"));
  const buffer = new ArrayBuffer(44 + bytes),
    view = new DataView(buffer);
  const text = (at: number, value: string) =>
    [...value].forEach((char, index) =>
      view.setUint8(at + index, char.charCodeAt(0)),
    );
  text(0, "RIFF");
  view.setUint32(4, 36 + bytes, true);
  text(8, "WAVE");
  text(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, channels.length, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * channels.length * 2, true);
  view.setUint16(32, channels.length * 2, true);
  view.setUint16(34, 16, true);
  text(36, "data");
  view.setUint32(40, bytes, true);
  let offset = 44;
  for (let sample = first; sample < last; sample++)
    for (const channel of channels) {
      const value = Math.max(-1, Math.min(1, channel[sample] ?? 0));
      view.setInt16(
        offset,
        Math.round(value < 0 ? value * 32768 : value * 32767),
        true,
      );
      offset += 2;
    }
  return buffer;
}
