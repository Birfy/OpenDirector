/** Correct repeated media extensions in labels without changing asset identity. */
export function assetDisplayName(name: string): string {
  return name.replace(
    /(\.(?:png|jpe?g|gif|webp|svg|avif|bmp|tiff?|mp4|m4v|mov|webm|mp3|wav|m4a|aac|ogg|opus|flac|txt|md))(?:\1)+$/i,
    "$1",
  );
}
