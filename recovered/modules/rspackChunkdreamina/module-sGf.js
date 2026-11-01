export function o(e) {
  return e.map((e) => ({
    videoId: e.videoId,
    aigcItemId: e.id,
    videoUrl: e.videoUrl,
    coverUrl: e.coverUrl,
    duration: e.duration,
  }));
}
