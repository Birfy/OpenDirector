const r = function (t, e, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let i = 0, s = e.length; i < s; i++) {
      if (!(!r && i in e)) {
        if (!r) {
          r = Array.prototype.slice.call(e, 0, i);
        }
        r[i] = e[i];
      }
    }
  }
  return t.concat(r || Array.prototype.slice.call(e));
};
const i = r(
  r(
    r(
      r(
        r(
          r(
            r(
              r(
                r(
                  r(
                    r(
                      r(
                        r(
                          r(
                            r(
                              r(
                                r(
                                  r([], ["onCopy", "onCut", "onPaste"], true),
                                  [
                                    "onCompositionEnd",
                                    "onCompositionStart",
                                    "onCompositionUpdate",
                                  ],
                                  true,
                                ),
                                ["onFocus", "onBlur"],
                                true,
                              ),
                              ["onInput", "onInvalid", "onReset", "onSubmit"],
                              true,
                            ),
                            ["onLoad", "onError"],
                            true,
                          ),
                          ["onKeyDown", "onKeyPress", "onKeyUp"],
                          true,
                        ),
                        [
                          "onAbort",
                          "onCanPlay",
                          "onCanPlayThrough",
                          "onDurationChange",
                          "onEmptied",
                          "onEncrypted",
                          "onEnded",
                          "onError",
                          "onLoadedData",
                          "onLoadedMetadata",
                          "onLoadStart",
                          "onPause",
                          "onPlay",
                          "onPlaying",
                          "onProgress",
                          "onRateChange",
                          "onSeeked",
                          "onSeeking",
                          "onStalled",
                          "onSuspend",
                          "onTimeUpdate",
                          "onVolumeChange",
                          "onWaiting",
                        ],
                        true,
                      ),
                      [
                        "onClick",
                        "onContextMenu",
                        "onDoubleClick",
                        "onMouseDown",
                        "onMouseEnter",
                        "onMouseLeave",
                        "onMouseMove",
                        "onMouseOut",
                        "onMouseOver",
                        "onMouseUp",
                      ],
                      true,
                    ),
                    [
                      "onDrag",
                      "onDragEnd",
                      "onDragEnter",
                      "onDragExit",
                      "onDragLeave",
                      "onDragOver",
                      "onDragStart",
                      "onDrop",
                    ],
                    true,
                  ),
                  ["onSelect"],
                  true,
                ),
                ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"],
                true,
              ),
              [
                "onPointerDown",
                "onPointerMove",
                "onPointerUp",
                "onPointerCancel",
                "onGotPointerCapture",
                "onLostPointerCapture",
                "onPointerEnter",
                "onPointerLeave",
                "onPointerOver",
                "onPointerOut",
              ],
              true,
            ),
            ["onScroll"],
            true,
          ),
          ["onWheel"],
          true,
        ),
        ["onAnimationStart", "onAnimationEnd", "onAnimationIteration"],
        true,
      ),
      ["onTransitionEnd"],
      true,
    ),
    ["onChange"],
    true,
  ),
  ["onToggle"],
  true,
);
export function Ay(t, e) {
  const n = {};
  i.forEach((r) => {
    const i = t[r];
    if (i) {
      if (e) {
        n[r] = function (t) {
          return i(t, e(r));
        };
      } else {
        n[r] = i;
      }
    }
  });
  return n;
}
