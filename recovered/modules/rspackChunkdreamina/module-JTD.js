function a(audioInfo) {
  let t;
  return {
    vid: audioInfo.vid,
    duration: audioInfo.duration,
    audioUrl: audioInfo.audioUrl,
    link: audioInfo.link,
    format: audioInfo.format,
    size: audioInfo.size,
    encryptionKey: audioInfo.encryptionKey,
    title: audioInfo.title,
    lyrics: audioInfo.lyrics,
    captions:
      (t = audioInfo.captions) == null
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
    durationMs:
      audioInfo.durationMs !== undefined
        ? String(audioInfo.durationMs)
        : undefined,
    url: audioInfo.url,
  };
}
function i(e) {
  if (e.audioInfo) {
    return {
      audio_info: a(e.audioInfo),
      source: e.source,
    };
  }
}
export function z(e) {
  let t;
  let r;
  let n;
  return {
    uid: e.uid,
    subjectId: e.subjectId,
    dataId: e.dataId,
    content: {
      name: e.content.name,
      description: e.content.description,
      mainImage: e.content.mainImage
        ? {
            imageUrl: e.content.mainImage.imageUrl,
            imageUri: e.content.mainImage.imageUri,
          }
        : undefined,
      auxiliaryImages:
        (t = e.content.auxiliaryImages) == null
          ? undefined
          : t.map((e) => ({
              imageUrl: e.imageUrl,
              imageUri: e.imageUri,
            })),
      videoInfo: e.content.videoInfo
        ? {
            vid: (n = e.content.videoInfo).vid,
            fps: n.fps,
            width: n.width,
            height: n.height,
            duration: n.duration,
            videoUrl: n.videoUrl,
            link: n.link,
            sceneVideoUrls: n.sceneVideoUrls
              ? {
                  downloadUrl: n.sceneVideoUrls.downloadUrl,
                }
              : undefined,
            coverUrl: n.coverUrl,
            format: n.format,
            definition: n.definition,
            logoType: n.logoType,
            encryptionKey: n.encryptionKey,
            md5: n.md5,
            size: n.size,
            videoId: n.videoId,
            aigcVideo: n.aigcVideo
              ? {
                  item_id: n.aigcVideo.itemId,
                }
              : undefined,
          }
        : undefined,
      audioInfo: e.content.audioInfo ? a(e.content.audioInfo) : undefined,
      voiceList:
        (r = e.content.voiceList) == null
          ? undefined
          : r.map(i).filter((e) => e !== undefined),
      selectedVoice: e.content.selectedVoice
        ? i(e.content.selectedVoice)
        : undefined,
    },
    subjectControl: e.subjectControl,
  };
}
