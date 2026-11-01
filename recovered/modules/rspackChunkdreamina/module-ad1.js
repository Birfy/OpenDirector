export function t(e) {
  const type = e.type || "";
  const lastModified = Date.now();
  return new File([e], "dreamina_image_".concat(lastModified), {
    type,
    lastModified,
  });
}
