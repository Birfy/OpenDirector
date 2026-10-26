import r from "z8";
export function I(e) {
  const { id, snapshot, serialize } = e;
  return r.jsx("script", {
    id,
    type: "application/json",
    dangerouslySetInnerHTML: {
      __html: serialize(snapshot),
    },
  });
}
