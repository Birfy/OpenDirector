/** Minimal ZIP reader/writer for project archives: UTF-8 names, stored or
 * deflated entries, no ZIP64. Media bytes are already compressed by their
 * codec, so only text entries ask for deflate. */

import { tNow } from "../i18n/messages.ts";

export interface ZipEntry {
  /** Forward-slash path inside the archive. */
  path: string;
  data: Uint8Array;
  /** Deflate the bytes when that makes them smaller. Defaults to false. */
  compress?: boolean;
}

const UTF8_NAMES = 0x0800;
const STORED = 0;
const DEFLATED = 8;
/** Local header, file data and central directory offsets are 32-bit. */
const MAX_ARCHIVE_BYTES = 0xffffffff;

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index++) {
    let value = index;
    for (let bit = 0; bit < 8; bit++)
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    table[index] = value >>> 0;
  }
  return table;
})();

export function crc32(data: Uint8Array): number {
  let value = 0xffffffff;
  for (let index = 0; index < data.length; index++)
    value = crcTable[(value ^ data[index]!) & 0xff]! ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

/** Raw deflate, or nothing when the platform has no CompressionStream. */
async function deflateRaw(data: Uint8Array): Promise<Uint8Array | undefined> {
  if (typeof CompressionStream === "undefined") return undefined;
  try {
    const stream = new Blob([data as BlobPart])
      .stream()
      .pipeThrough(new CompressionStream("deflate-raw"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    return undefined;
  }
}

function dosTimestamp(date: Date): { date: number; time: number } {
  const year = Math.max(1980, date.getFullYear());
  return {
    date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
    time:
      (date.getHours() << 11) |
      (date.getMinutes() << 5) |
      (date.getSeconds() >> 1),
  };
}

export async function createZip(
  entries: readonly ZipEntry[],
  now = new Date(),
): Promise<Blob> {
  const chunks: BlobPart[] = [];
  const directory: Uint8Array[] = [];
  let offset = 0;
  const stamp = dosTimestamp(now);
  for (const entry of entries) {
    const name = new TextEncoder().encode(entry.path);
    if (!entry.path || entry.path.startsWith("/") || entry.path.includes("\\"))
      throw new Error(tNow("errors.zip.path", { path: entry.path }));
    const compressed = entry.compress
      ? await deflateRaw(entry.data)
      : undefined;
    const useDeflate =
      compressed !== undefined && compressed.length < entry.data.length;
    const payload = useDeflate ? compressed! : entry.data;
    const method = useDeflate ? DEFLATED : STORED;
    const checksum = crc32(entry.data);
    const local = new Uint8Array(30 + name.length);
    const localView = new DataView(local.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, UTF8_NAMES, true);
    localView.setUint16(8, method, true);
    localView.setUint16(10, stamp.time, true);
    localView.setUint16(12, stamp.date, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, payload.length, true);
    localView.setUint32(22, entry.data.length, true);
    localView.setUint16(26, name.length, true);
    localView.setUint16(28, 0, true);
    local.set(name, 30);
    const central = new Uint8Array(46 + name.length);
    const centralView = new DataView(central.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, UTF8_NAMES, true);
    centralView.setUint16(10, method, true);
    centralView.setUint16(12, stamp.time, true);
    centralView.setUint16(14, stamp.date, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, payload.length, true);
    centralView.setUint32(24, entry.data.length, true);
    centralView.setUint16(28, name.length, true);
    centralView.setUint32(42, offset, true);
    central.set(name, 46);
    chunks.push(local, payload as BlobPart);
    directory.push(central);
    offset += local.length + payload.length;
    if (offset > MAX_ARCHIVE_BYTES)
      throw new Error(tNow("errors.zip.exportSize"));
  }
  const directorySize = directory.reduce((size, item) => size + item.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, directorySize, true);
  endView.setUint32(16, offset, true);
  return new Blob([...chunks, ...directory, end as BlobPart], {
    type: "application/zip",
  });
}

/** Raw inflate. Archives are only read in browsers that can decompress. */
async function inflateRaw(data: Uint8Array): Promise<Uint8Array> {
  if (typeof DecompressionStream === "undefined")
    throw new Error(tNow("errors.zip.unsupportedExtract"));
  try {
    const stream = new Blob([data as BlobPart])
      .stream()
      .pipeThrough(new DecompressionStream("deflate-raw"));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    throw new Error(tNow("errors.zip.damaged"));
  }
}

const END_SIGNATURE = 0x06054b50;
const CENTRAL_SIGNATURE = 0x02014b50;
const LOCAL_SIGNATURE = 0x04034b50;

/** Reads every file of an archive, verifying its checksum as it goes. */
export async function readZip(
  archive: Blob | ArrayBuffer | Uint8Array,
): Promise<Map<string, Uint8Array>> {
  const bytes =
    archive instanceof Uint8Array
      ? archive
      : new Uint8Array(
          archive instanceof ArrayBuffer
            ? archive
            : await archive.arrayBuffer(),
        );
  if (bytes.length < 22) throw new Error(tNow("errors.zip.notCanvas"));
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let end = -1;
  // The end record sits after the central directory; its comment is at most 64 KB.
  for (
    let index = bytes.length - 22;
    index >= Math.max(0, bytes.length - 65557);
    index--
  )
    if (view.getUint32(index, true) === END_SIGNATURE) {
      end = index;
      break;
    }
  if (end < 0) throw new Error(tNow("errors.zip.notCanvas"));
  const count = view.getUint16(end + 10, true);
  const size = view.getUint32(end + 12, true);
  const start = view.getUint32(end + 16, true);
  if (start + size > bytes.length) throw new Error(tNow("errors.zip.directoryRange"));
  const files = new Map<string, Uint8Array>();
  let offset = start;
  for (let index = 0; index < count; index++) {
    if (
      offset + 46 > bytes.length ||
      view.getUint32(offset, true) !== CENTRAL_SIGNATURE
    )
      throw new Error(tNow("errors.zip.directoryDamaged"));
    const flags = view.getUint16(offset + 8, true);
    const method = view.getUint16(offset + 10, true);
    const checksum = view.getUint32(offset + 16, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const plainSize = view.getUint32(offset + 24, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const local = view.getUint32(offset + 42, true);
    const name = new TextDecoder().decode(
      bytes.subarray(offset + 46, offset + 46 + nameLength),
    );
    if (flags & 0x0001) throw new Error(tNow("errors.zip.encrypted", { name }));
    if (compressedSize === MAX_ARCHIVE_BYTES || plainSize === MAX_ARCHIVE_BYTES)
      throw new Error(tNow("errors.zip.zip64"));
    if (
      local + 30 > bytes.length ||
      view.getUint32(local, true) !== LOCAL_SIGNATURE
    )
      throw new Error(tNow("errors.zip.entryDamaged"));
    const dataStart =
      local +
      30 +
      view.getUint16(local + 26, true) +
      view.getUint16(local + 28, true);
    if (dataStart + compressedSize > bytes.length)
      throw new Error(tNow("errors.zip.entryRange"));
    const raw = bytes.subarray(dataStart, dataStart + compressedSize);
    const data =
      method === STORED
        ? raw
        : method === DEFLATED
          ? await inflateRaw(raw)
          : (() => {
              throw new Error(tNow("errors.zip.unsupportedMethod", { method }));
            })();
    if (data.length !== plainSize || crc32(data) !== checksum)
      throw new Error(tNow("errors.zip.checksum", { name }));
    files.set(name, data);
    offset += 46 + nameLength + extraLength + commentLength;
  }
  return files;
}
