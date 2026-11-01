import r from "Dla";
export function G(e) {
  const { containerService, url } = e;
  return r.H(containerService, {
    items: [
      {
        type: "markdown",
        url,
      },
    ],
  });
}
