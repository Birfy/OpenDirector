import i from "oa";
import r from "bk";
export function q(e) {
  const { uri, url, remoteExtraInfo = {}, width, height, name } = e;
  const { aigcItemId, resolutionUrlMap } = remoteExtraInfo;
  return r._(
    i._(
      {
        imageUri: uri,
        imageUrl: url,
      },
      aigcItemId
        ? {
            aigcImage: {
              itemId: aigcItemId,
            },
          }
        : {},
    ),
    {
      coverUrlMap: resolutionUrlMap,
      width,
      height,
      title: name,
    },
  );
}
