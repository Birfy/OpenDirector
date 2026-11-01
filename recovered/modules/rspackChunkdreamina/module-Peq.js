import r from "oa";
import n from "bk";
import i from "qa";
import s from "Dla";
export function K(e) {
  const { videoInfo } = e;
  const { poster } = videoInfo;
  const o = i._(videoInfo, ["poster"]);
  const { containerService } = e;
  return s.H(containerService, {
    items: [
      n._(r._({}, o), {
        type: "video",
        coverUrl: poster,
      }),
    ],
  });
}
