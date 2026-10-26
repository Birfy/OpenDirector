import i from "SR";
import r from "xi";
import a from "e3";
import o from "aS";
import l from "sV8";
import u from "aX";
import { L } from "./module-HdA.js";
export function U(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  try {
    if (a.A(e) || o.g(e)) {
      const n = e.itemList[t];
      return L(n);
    }
    if (l.n(e)) {
      return (function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        try {
          const n = e.itemList.at(t);
          if (!n) {
            return null;
          }
          const { id, audioCover } = n;
          if (!(audioCover == null ? undefined : audioCover.imageUrl)) {
            return null;
          }
          var {
            imageUrl,
            imageUri = "",
            coverUrlMap = {
              origin: imageUrl,
            },
            width,
            height,
          } = audioCover;
          return {
            url: imageUrl,
            uri: imageUri,
            resolutionUrlMap: coverUrlMap,
            id,
            width,
            height,
          };
        } catch (error) {
          r.V.error("extractFromAIGCAudioData error:", error);
          return null;
        }
      })(e, t);
    }
    if (u.e(e)) {
      return (function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        try {
          let n;
          let a;
          const { userMessage } = e.taskData;
          if (!(userMessage == null ? undefined : userMessage.files)) {
            r.V.warn(
              "extractFromAIGCAgenticData: No files found in userMessage",
            );
            return null;
          }
          if (userMessage.files.length === 0) {
            r.V.warn("extractFromAIGCAgenticData: No image files found");
            return null;
          }
          const l = userMessage.files.at(t);
          if (!l) {
            r.V.warn(
              "extractFromAIGCAgenticData: No image found at index ".concat(t),
            );
            return null;
          }
          if (l.type !== i.NuroFileType.image) {
            r.V.warn(
              "extractFromAIGCAgenticData: File at index ".concat(
                t,
                " is not an image",
              ),
            );
            return null;
          }
          return {
            url: l.url || "",
            uri: l.uri || "",
            resolutionUrlMap: {
              original: l.url || "",
            },
            id: l.uri || "agentic-image-".concat(t),
            aigcItemId:
              (a = l.metadata) == null || (n = a.image_metadata) == null
                ? undefined
                : n.item_id,
            width: undefined,
            height: undefined,
          };
        } catch (error) {
          r.V.error("extractFromAIGCAgenticData error:", error);
          return null;
        }
      })(e, t);
    }
    r.V.warn("extractImageDataFromRecord: Unsupported record type");
    return null;
  } catch (error) {
    r.V.error("extractImageDataFromRecord error:", error);
    return null;
  }
}
