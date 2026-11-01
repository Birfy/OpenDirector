import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import "yuc";
import o from "tR";
import l from "bT";
import _c from "xb";
const u = (e) =>
  s.jsxs(
    "svg",
    n._(
      r._(
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 20,
          height: 12,
          fill: "none",
          viewBox: "0 0 20 12",
        },
        e,
      ),
      {
        children: [
          s.jsx("rect", {
            width: 20,
            height: 12,
            fill: "currentColor",
            className: "model-beta-tag_svg__rect-target",
            rx: 4,
          }),
          s.jsx("path", {
            fill: "currentColor",
            d: "M3.56 8.39V3.35h1.337q.79 0 1.295.28.574.315.574.924 0 .406-.203.686-.217.3-.651.427v.014q.47.126.735.434.294.336.294.84 0 .777-.581 1.141-.47.294-1.281.294zm1.064-2.863h.182q.868 0 .868-.931 0-.798-.777-.798h-.273zm0 .441v1.974h.455q.357 0 .546-.231.217-.26.217-.784 0-.525-.28-.756-.245-.203-.749-.203zm6.059.686h-2.24v.056q.027.68.238.98.224.322.735.322.53 0 1.099-.238l.056.441a3.9 3.9 0 0 1-1.351.259q-1.758 0-1.757-1.897 0-.896.44-1.393.456-.518 1.303-.518 1.477 0 1.477 1.652zM9.178 5.072q-.687 0-.735 1.225H9.8q.027-1.225-.623-1.225m3.243-1.484V4.75h.77v.413h-.77v2.282q0 .37.127.497.09.09.357.091h.287v.364a3.2 3.2 0 0 1-.722.077q-1 0-1-.98V5.163h-.49V4.75h.503l.497-1.162zm3.17 4.025V6.598h-.455q-.728 0-.728.714 0 .315.126.49a.42.42 0 0 0 .364.175q.414 0 .693-.364m.945.777h-.686l-.112-.413q-.42.497-1.113.497-.49 0-.819-.294-.322-.3-.322-.777 0-.532.413-.833.435-.322 1.253-.322h.441v-.294q.001-.462-.154-.637-.153-.182-.567-.182-.518 0-1.064.231l-.084-.441a3.9 3.9 0 0 1 1.386-.259q.777 0 1.127.35.301.3.301.91z",
            className: "model-beta-tag_svg__path-target",
          }),
        ],
      },
    ),
  );
export var b = l.memo(function (e) {
  const { type, className } = e;
  const l = i._(e, ["type", "className"]);
  const c = type === "new";
  return s.jsx(
    "div",
    n._(
      r._(
        {
          className: _c(
            "icon-gACWeY",
            c ? "new-icon-XrndBV" : "beta-icon-FV0tWz",
            className,
          ),
        },
        l,
      ),
      {
        children: c
          ? s.jsx(o.A, {
              className: "new-tag-KvTrWO",
              size: "small",
              bordered: false,
              children: "New",
            })
          : s.jsx(u, {}),
      },
    ),
  );
});
