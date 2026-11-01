export function Q(e) {
  const { uri, url, duration, name } = e;
  return {
    vid: uri,
    title: name,
    originAudio: {
      url,
      duration,
      vid: uri,
    },
  };
}
