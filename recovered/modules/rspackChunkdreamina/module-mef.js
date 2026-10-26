export const TR = (e) =>
  new URL(
    e.startsWith("http://") || e.startsWith("https://")
      ? e
      : `${location.origin}${e}`,
  );
