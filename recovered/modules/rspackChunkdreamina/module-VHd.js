function a(e) {
  let t;
  return {
    vid: e.vid,
    duration: e.duration,
    audioUrl: e.audioUrl,
    link: e.link,
    format: e.format,
    size: e.size,
    encryptionKey: e.encryptionKey,
    title: e.title,
    lyrics: e.lyrics,
    captions:
      (t = e.captions) == null
        ? undefined
        : t.map((e) => {
            var t;
            return {
              startTime: e.startTime,
              endTime: e.endTime,
              text: e.text,
              words:
                (t = e.words) == null
                  ? undefined
                  : t.map((e) => ({
                      startTime: e.startTime,
                      endTime: e.endTime,
                      text: e.text,
                    })),
            };
          }),
    durationMs: e.durationMs !== undefined ? Number(e.durationMs) : undefined,
    url: e.url,
  };
}
function i(e) {
  return {
    audioInfo: e.audio_info ? a(e.audio_info) : undefined,
    source: e.source,
  };
}
export function B(e) {
  let t;
  let r;
  let n;
  let o;
  const { uid, subjectId, dataId, content, subjectControl } = e;
  return {
    uid,
    subjectId,
    dataId,
    content: {
      name: content.name,
      description: content.description,
      mainImage: content.mainImage
        ? {
            imageUrl: content.mainImage.imageUrl,
            imageUri: content.mainImage.imageUri,
          }
        : undefined,
      auxiliaryImages:
        (n = content.auxiliaryImages) == null
          ? undefined
          : n.map((e) => ({
              imageUrl: e.imageUrl,
              imageUri: e.imageUri,
            })),
      videoInfo: content.videoInfo
        ? {
            vid: (t = content.videoInfo).vid,
            fps: t.fps,
            width: t.width,
            height: t.height,
            duration: t.duration,
            videoUrl: t.videoUrl,
            link: t.link,
            sceneVideoUrls: t.sceneVideoUrls
              ? {
                  downloadUrl: t.sceneVideoUrls.downloadUrl,
                }
              : undefined,
            coverUrl: t.coverUrl,
            format: t.format,
            definition: t.definition,
            logoType: t.logoType,
            encryptionKey: t.encryptionKey,
            md5: t.md5,
            size: t.size,
            videoId: t.videoId,
            aigcVideo: ((r = t.aigcVideo) == null ? undefined : r.item_id)
              ? {
                  itemId: "".concat(t.aigcVideo.item_id),
                }
              : undefined,
          }
        : undefined,
      audioInfo: content.audioInfo ? a(content.audioInfo) : undefined,
      voiceList:
        (o = content.voiceList) == null ? undefined : o.map((e) => i(e)),
      selectedVoice: content.selectedVoice
        ? i(content.selectedVoice)
        : undefined,
    },
    subjectControl,
  };
}
