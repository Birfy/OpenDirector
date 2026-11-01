import assert from "node:assert/strict";
import test from "node:test";
import {
  ALL_FORMATS,
  AudioSample,
  AudioSampleSource,
  BufferSource,
  BufferTarget,
  Input,
  Mp4OutputFormat,
  Output,
  canEncodeAudio,
} from "mediabunny";
import { prepareSoftwareAac } from "../src/canvas/softwareAac.ts";

test("software AAC encodes consecutive stereo chunks without a browser AudioEncoder", async () => {
  await Promise.all([prepareSoftwareAac(), prepareSoftwareAac()]);
  assert.equal(
    await canEncodeAudio("aac", { sampleRate: 48000, numberOfChannels: 2 }),
    true,
  );
  const target = new BufferTarget();
  const output = new Output({ format: new Mp4OutputFormat(), target });
  const audio = new AudioSampleSource({ codec: "aac", bitrate: 128000 });
  output.addAudioTrack(audio);
  await output.start();
  for (let second = 0; second < 2; second++) {
    const data = new Float32Array(48000 * 2);
    for (let frame = 0; frame < 48000; frame++) {
      data[frame] = 0.2 * Math.sin((2 * Math.PI * 440 * frame) / 48000);
      data[48000 + frame] = 0.1 * Math.sin((2 * Math.PI * 660 * frame) / 48000);
    }
    const sample = new AudioSample({
      data,
      format: "f32-planar",
      sampleRate: 48000,
      numberOfChannels: 2,
      timestamp: second,
    });
    try {
      await audio.add(sample);
    } finally {
      sample.close();
    }
  }
  audio.close();
  await output.finalize();
  assert.ok(target.buffer && target.buffer.byteLength > 1000);
  const input = new Input({
    source: new BufferSource(target.buffer),
    formats: ALL_FORMATS,
  });
  try {
    const track = await input.getPrimaryAudioTrack();
    assert.ok(track);
    assert.equal(await track.getSampleRate(), 48000);
    assert.equal(await track.getNumberOfChannels(), 2);
    assert.ok(Math.abs((await input.computeDuration()) - 2) < 0.05);
  } finally {
    input.dispose();
  }
});
