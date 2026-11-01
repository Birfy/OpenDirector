import assert from "node:assert/strict";
import test from "node:test";
import { dataUrlToBlob, downloadFilename } from "../src/canvas/downloadAssets.ts";

test("inline base64 media preserves all bytes and codec MIME parameters", async () => {
  const bytes = Uint8Array.from([0, 1, 127, 128, 255]);
  const blob = dataUrlToBlob(`data:video/webm;codecs=vp8;base64,${Buffer.from(bytes).toString("base64")}`);
  assert.equal(blob.type, "video/webm;codecs=vp8");
  assert.deepEqual(new Uint8Array(await blob.arrayBuffer()), bytes);
  assert.deepEqual(new Uint8Array(await dataUrlToBlob("data:audio/wav;base64,AAE%3D").arrayBuffer()), new Uint8Array([0, 1]));
});
test("percent encoded SVG and binary data preserve source bytes without network access", async () => {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg"><text>清晨 + 远山</text></svg>';
  const blob = dataUrlToBlob(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
  assert.equal(await blob.text(), svg);
  assert.deepEqual(new Uint8Array(await dataUrlToBlob("data:application/octet-stream,%00%FF%80+").arrayBuffer()), new Uint8Array([0, 255, 128, 43]));
  assert.equal(await dataUrlToBlob("data:,清晨+湖水").text(), "清晨+湖水");
  assert.throws(() => dataUrlToBlob("data:video/webm;base64,not valid!"), /数据损坏/);
  assert.throws(() => dataUrlToBlob("data:image/png;base64"), /格式无效/);
  assert.throws(() => dataUrlToBlob("https://example.test/movie.webm"), /格式无效/);
});
test("download names use the actual MIME and do not duplicate matching suffixes", () => {
  assert.equal(downloadFilename("镜头 · 裁剪", "video/webm;codecs=vp8,opus"), "镜头 · 裁剪.webm");
  assert.equal(downloadFilename("音轨.wav", "audio/wav"), "音轨.wav");
  assert.equal(downloadFilename("音轨.MP3", "audio/mpeg"), "音轨.MP3");
  assert.equal(downloadFilename("原图.jpeg", "image/jpeg"), "原图.jpeg");
  assert.equal(downloadFilename("原图.jpg", "image/png"), "原图.png");
  assert.equal(downloadFilename("录音.mp4", "audio/x-wav"), "录音.wav");
  assert.equal(downloadFilename("草稿.txt", "text/plain"), "草稿.txt");
  assert.equal(downloadFilename("未知.bin", "application/octet-stream"), "未知.bin");
});
