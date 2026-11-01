(() => {
  "use strict";
  var e,
    t,
    r,
    i,
    n,
    a = {
      78952(e, t, r) {
        var i = r(13882),
          n = r(4481),
          a = r(82873);
        let o = function (e) {
            for (
              var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            let n = e;
            return r.map((e) => {
              let t = { name: e, parentName: n };
              return ((n = e), t);
            });
          },
          s = [
            { name: "mixamorigHips" },
            ...o(
              "mixamorigHips",
              "mixamorigSpine",
              "mixamorigSpine1",
              "mixamorigSpine2",
              "mixamorigNeck",
              "mixamorigHead",
              "mixamorigHeadTop_End",
            ),
            { name: "mixamorigLeftShoulder", parentName: "mixamorigSpine2" },
            ...o(
              "mixamorigLeftShoulder",
              "mixamorigLeftArm",
              "mixamorigLeftForeArm",
              "mixamorigLeftHand",
            ),
            ...o(
              "mixamorigLeftHand",
              "mixamorigLeftHandThumb1",
              "mixamorigLeftHandThumb2",
              "mixamorigLeftHandThumb3",
              "mixamorigLeftHandThumb4",
            ),
            ...o(
              "mixamorigLeftHand",
              "mixamorigLeftHandIndex1",
              "mixamorigLeftHandIndex2",
              "mixamorigLeftHandIndex3",
              "mixamorigLeftHandIndex4",
            ),
            ...o(
              "mixamorigLeftHand",
              "mixamorigLeftHandMiddle1",
              "mixamorigLeftHandMiddle2",
              "mixamorigLeftHandMiddle3",
              "mixamorigLeftHandMiddle4",
            ),
            ...o(
              "mixamorigLeftHand",
              "mixamorigLeftHandRing1",
              "mixamorigLeftHandRing2",
              "mixamorigLeftHandRing3",
              "mixamorigLeftHandRing4",
            ),
            ...o(
              "mixamorigLeftHand",
              "mixamorigLeftHandPinky1",
              "mixamorigLeftHandPinky2",
              "mixamorigLeftHandPinky3",
              "mixamorigLeftHandPinky4",
            ),
            { name: "mixamorigRightShoulder", parentName: "mixamorigSpine2" },
            ...o(
              "mixamorigRightShoulder",
              "mixamorigRightArm",
              "mixamorigRightForeArm",
              "mixamorigRightHand",
            ),
            ...o(
              "mixamorigRightHand",
              "mixamorigRightHandThumb1",
              "mixamorigRightHandThumb2",
              "mixamorigRightHandThumb3",
              "mixamorigRightHandThumb4",
            ),
            ...o(
              "mixamorigRightHand",
              "mixamorigRightHandIndex1",
              "mixamorigRightHandIndex2",
              "mixamorigRightHandIndex3",
              "mixamorigRightHandIndex4",
            ),
            ...o(
              "mixamorigRightHand",
              "mixamorigRightHandMiddle1",
              "mixamorigRightHandMiddle2",
              "mixamorigRightHandMiddle3",
              "mixamorigRightHandMiddle4",
            ),
            ...o(
              "mixamorigRightHand",
              "mixamorigRightHandRing1",
              "mixamorigRightHandRing2",
              "mixamorigRightHandRing3",
              "mixamorigRightHandRing4",
            ),
            ...o(
              "mixamorigRightHand",
              "mixamorigRightHandPinky1",
              "mixamorigRightHandPinky2",
              "mixamorigRightHandPinky3",
              "mixamorigRightHandPinky4",
            ),
            ...o(
              "mixamorigHips",
              "mixamorigLeftUpLeg",
              "mixamorigLeftLeg",
              "mixamorigLeftFoot",
              "mixamorigLeftToeBase",
              "mixamorigLeftToe_End",
            ),
            ...o(
              "mixamorigHips",
              "mixamorigRightUpLeg",
              "mixamorigRightLeg",
              "mixamorigRightFoot",
              "mixamorigRightToeBase",
              "mixamorigRightToe_End",
            ),
          ],
          l = Object.freeze({
            hips: 0,
            chest: 3,
            head: 5,
            leftUpperArm: 8,
            leftForeArm: 9,
            leftHand: 10,
            rightUpperArm: 32,
            rightForeArm: 33,
            rightHand: 34,
            leftUpperLeg: 55,
            leftLeg: 56,
            leftFoot: 57,
            rightUpperLeg: 60,
            rightLeg: 61,
            rightFoot: 62,
          });
        (Object.values(l),
          l.hips,
          l.chest,
          l.head,
          l.leftForeArm,
          l.leftHand,
          l.rightForeArm,
          l.rightHand,
          l.leftUpperLeg,
          l.leftLeg,
          l.leftFoot,
          l.rightUpperLeg,
          l.rightLeg,
          l.rightFoot);
        let m = Object.freeze(
          s.flatMap((e, t) =>
            e.name.endsWith("_End") ||
            /Hand(?:Thumb|Index|Middle|Ring|Pinky)4$/.test(e.name)
              ? []
              : [t],
          ),
        );
        function u(e) {
          return e.replace(/[^a-z0-9]/gi, "").toLowerCase();
        }
        class h extends i.YJl {
          get bones() {
            return this.skeleton.bones;
          }
          legLength() {
            let e =
              ["Left", "Right"].reduce((e, t) => {
                let [r, n, a] = ["UpLeg", "Leg", "Foot"].map((e) =>
                  this.skeleton
                    .getBoneByName(`mixamorig${t}${e}`)
                    .getWorldPosition(new i.Pq0()),
                );
                return e + r.distanceTo(n) + n.distanceTo(a);
              }, 0) / 2;
            if (!Number.isFinite(e) || e <= 1e-6)
              throw Error("Motion rig has no valid reference leg length");
            return e;
          }
          constructor(e) {
            super();
            const t = e.map((e, t) => {
                let r = new i.$Kf();
                return (
                  (r.name = s[t].name),
                  r.position.copy(e.position),
                  r.quaternion.copy(e.quaternion),
                  r.scale.copy(e.scale),
                  r
                );
              }),
              r = new Map(t.map((e) => [e.name, e]));
            (s.forEach((e, i) => {
              (e.parentName ? r.get(e.parentName) : this).add(t[i]);
            }),
              this.updateMatrixWorld(!0),
              (this.skeleton = new i.EAD(t)));
          }
        }
        class d {
          prepareClip(e, t, r) {
            let n, o;
            if (
              !Number.isFinite(t.duration) ||
              t.duration <= 0 ||
              !t.tracks.length
            )
              throw Error("Motion retargeting requires a non-empty clip");
            let l = new Set([0, t.duration]);
            for (let e of t.tracks) {
              if (![...e.times, ...e.values].every(Number.isFinite))
                throw Error(`Invalid motion track: ${e.name}`);
              for (let r of e.times) r >= 0 && r <= t.duration && l.add(r);
            }
            let m = new h(e.reference.bones),
              d = new h(this.reference.bones),
              c = this.legLength / e.legLength,
              g = {};
            d.bones.forEach((e, t) => {
              let r = m.bones[t].getWorldQuaternion(new i.PTz()),
                n = e.getWorldQuaternion(new i.PTz());
              g[e.name] = new i.kn4().makeRotationFromQuaternion(
                r.invert().multiply(n),
              );
            });
            let p = {
                hip: s["0"].name,
                getBoneName: (e) => e.name,
                preserveBonePositions: !0,
                localOffsets: g,
                scale: c,
                hipPosition: d.bones[0].position
                  .clone()
                  .divideScalar(c)
                  .sub(m.bones[0].position),
              },
              f = [...l].sort((e, t) => e - t),
              b = [],
              x = d.bones.map(() => []),
              R = new i.Iw4(m),
              w =
                ((n = new Map(m.bones.map((e) => [u(e.name), e]))),
                (o = t.tracks.map((e) => {
                  let t = e.name.lastIndexOf(".");
                  if (t <= 0) return e.clone();
                  let r = n.get(u(e.name.slice(0, t))),
                    i = e.clone();
                  return (r && (i.name = `${r.uuid}${e.name.slice(t)}`), i);
                })),
                new i.tz3(t.name, t.duration, o, t.blendMode)),
              T = R.clipAction(w);
            (T.setLoop(2200, 1), (T.clampWhenFinished = !0), T.play());
            try {
              for (let e of f)
                (R.setTime(e),
                  m.updateMatrixWorld(!0),
                  (0, a.NM)(d, m, p),
                  b.push(...d.bones[0].position),
                  d.bones.forEach((e, t) => x[t].push(...e.quaternion)));
            } finally {
              (T.stop(), R.uncacheRoot(m));
            }
            let _ = [
              new i.RiT(`${r[0].uuid}.position`, f, b),
              ...r.map((e, t) => new i.MBL(`${e.uuid}.quaternion`, f, x[t])),
            ];
            return {
              clip: new i.tz3(t.name, t.duration, _, t.blendMode),
              legScale: c,
            };
          }
          constructor(e) {
            if (e.length !== s.length)
              throw Error(
                "Motion retargeting requires the complete FBX bone hierarchy",
              );
            (e.forEach((t, r) => {
              let i = s[r],
                n = s.findIndex((e) => e.name === i.parentName);
              if (
                u(t.name) !== u(i.name) ||
                (n >= 0 && t.parent !== e[n]) ||
                ![...t.position, ...t.quaternion, ...t.scale].every(
                  Number.isFinite,
                ) ||
                0 >= Math.min(...t.scale)
              )
                throw Error(`Invalid motion bind bone: ${i.name}`);
            }),
              (this.reference = new h(e)),
              (this.legLength = this.reference.legLength()));
          }
        }
        let c = { minimum: 0.01, maximum: 1e3, step: 0.01, precision: 3 },
          g = { minimum: 0.005, maximum: 500, step: 0.01, precision: 3 },
          p = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : e,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : c;
            return { parameter: e, label: t, ...r };
          };
        (p("sideLength"),
          p("radius", "radius", g),
          p("width"),
          p("height"),
          p("depth"),
          p("radius", "radius", g),
          p("height"),
          p("radius", "radius", g),
          p("height"),
          p("baseSide"),
          p("height"),
          p("majorRadius", "majorRadius", g),
          p("tubeRadius", "tubeRadius", g),
          p("width"),
          p("depth"),
          p("radius", "radius", g),
          p("height"),
          p("radius", "radius", g),
          p("thickness"),
          p("radius", "radius", g),
          p("tubeRadius", "tubeRadius", g),
          p("width"),
          p("height"),
          p("depth"),
          p("height", "height", {
            minimum: 0.43,
            maximum: 1e3,
            step: 0.01,
            precision: 3,
          }),
          p("seatWidth"),
          p("seatHeight"),
          p("seatDepth"),
          p("seatDiameter"),
          p("seatHeight"),
          p("tabletopWidth"),
          p("tabletopHeight"),
          p("tabletopDepth"),
          p("tabletopDiameter"),
          p("tabletopHeight"),
          p("bedWidth"),
          p("bedHeight"),
          p("bedLength"),
          p("screenWidth"),
          p("screenHeight"),
          p("diameter"),
          p("lampHeight"),
          p("rugWidth"),
          p("rugLength"),
          p("wallLength"),
          p("wallHeight"),
          p("wallThickness"),
          p("diameter"),
          p("height"),
          p("stairWidth"),
          p("stairRise"),
          p("stairRun"),
          p("rampWidth"),
          p("rampRise"),
          p("rampRun"),
          p("openingWidth"),
          p("openingHeight"),
          p("thickness"),
          p("canopyDiameter"),
          p("treeHeight"),
          p("basinWidth"),
          p("basinHeight"),
          p("basinDepth"),
          p("fanSpan"),
          p("fanHeight"),
          p("width"),
          p("height"),
          p("depth"),
          p("width"),
          p("height"),
          Object.freeze({
            "walk-in-place": "walk-path-traversal",
            "run-in-place": "run-path-traversal",
          }),
          Object.freeze({
            "walk-path-traversal": 1.7527,
            "run-path-traversal": 2.53155,
          }));
        let f = { x: "proportional", y: "proportional", z: "proportional" },
          b = { x: "semantic-parts", y: "semantic-parts", z: "semantic-parts" },
          x = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : b,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return {
              editMode: "intrinsic",
              schema: e,
              axisResizeModes: t,
              ...r,
            };
          },
          R = new Map();
        function w(e, t) {
          for (let r of e) {
            if (R.has(r))
              throw Error(`duplicate-procedural-intrinsic-profile:${r}`);
            R.set(r, t);
          }
        }
        (w(
          ["chair", "armchair", "sofa", "bench"],
          x(
            "seating",
            { x: "semantic-parts", y: "seat-height", z: "semantic-parts" },
            { seatPartIndex: 0 },
          ),
        ),
          w(
            ["round-stool"],
            x(
              "round-seating",
              { x: "semantic-parts", y: "seat-height", z: "semantic-parts" },
              { seatPartIndex: 0 },
            ),
          ),
          w(
            [
              "square-table",
              "long-table",
              "desk",
              "coffee-table",
              "side-table",
            ],
            x("table"),
          ),
          w(
            ["round-table"],
            x("round-table", b, { axisResizePartIndices: { x: [0], z: [0] } }),
          ),
          w(["bed"], x("bed")),
          w(
            ["television", "wall-television", "monitor", "mirror"],
            x("screen"),
          ),
          w(
            ["floor-lamp", "table-lamp", "street-lamp", "pendant-lamp"],
            x("lamp"),
          ),
          w(["rug"], x("rug", f)),
          w(["wall-segment"], x("wall", f)),
          w(
            [
              "column",
              "stump",
              "trash-bin",
              "traffic-cone",
              "fire-hydrant",
              "oil-drum",
            ],
            x("radial"),
          ),
          w(["stairs"], x("stairs")),
          w(["ramp"], x("ramp", f)),
          w(["archway", "door", "window"], x("opening")),
          w(["ladder", "railing"], x("rectangular-surface")),
          w(["small-tree", "large-tree"], x("tree")),
          w(["kitchen-sink", "washbasin"], x("basin")),
          w(["ceiling-fan"], x("ceiling-fan")),
          w(
            [
              "bookshelf",
              "low-cabinet",
              "wardrobe",
              "platform",
              "fence",
              "flower-bed",
              "water-barrier",
              "crate",
              "refrigerator",
              "stove",
              "kitchen-counter",
              "kitchen-island",
              "microwave",
              "wall-cabinet",
              "bathtub",
              "shower",
              "washing-machine",
              "cardboard-box",
            ],
            x("rectangular-volume"),
          ),
          w(
            [
              "statue",
              "rock",
              "bush",
              "potted-plant",
              "sedan",
              "truck",
              "bicycle",
              "motorcycle",
              "road-sign",
              "toilet",
              "laptop",
              "suitcase",
              "mug",
            ],
            { editMode: "rigid-only", axisResizeModes: f },
          ),
          r(78425));
        let T = "#b88a62",
          _ = "#76533d",
          y = "#97a9b5",
          v = "#677885",
          I = "#c98f83",
          A = "#d9d4ca",
          E = "#dfe3e4",
          M = "#3f474c",
          O = "#202629",
          S = "#8d989c",
          k = "#8fb7c1",
          L = "#6d9670",
          z = "#4f7657",
          C = "#80634d",
          F = "#8d8b84",
          P = "#b9b5aa",
          N = "#df765f",
          H = "#d5aa55",
          D = "#668da6";
        function B(e, t, r, i, n) {
          return {
            shape: e,
            size: t,
            position: r,
            color: i,
            ...(n ? { rotation: n } : {}),
          };
        }
        let G = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : A,
              i = arguments.length > 3 ? arguments[3] : void 0;
            return B("box", e, t, r, i);
          },
          X = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : A,
              i = arguments.length > 3 ? arguments[3] : void 0;
            return B("rounded-box", e, t, r, i);
          },
          K = (e, t, r, i) => ({ ...B(e, t, r, E, i), surface: "ceramic" }),
          W = (e, t) => ({ ...G(e, t, k), surface: "glass" }),
          U = function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : A;
            return B("sphere", e, t, r);
          },
          j = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : A,
              i = arguments.length > 3 ? arguments[3] : void 0;
            return B("cylinder", e, t, r, i);
          },
          q = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : A,
              i = arguments.length > 3 ? arguments[3] : void 0;
            return B("smooth-cylinder", e, t, r, i);
          },
          $ = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : M,
              i = arguments.length > 3 ? arguments[3] : void 0;
            return B("torus", e, t, r, i);
          },
          V = function (e, t) {
            let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : F,
              i = arguments.length > 3 ? arguments[3] : void 0;
            return B("wedge", e, t, r, i);
          };
        function Q(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : T,
            n = Math.min(0.1, 0.16 * t),
            a = Math.min(0.02, 0.2 * n),
            o = Math.min(0.09, 0.11 * e, 0.11 * r),
            s = e / 2 - o,
            l = r / 2 - o,
            m = t - n + a;
          return [
            G([e, n, r], [0, t - n / 2, 0], i),
            ...[-1, 1].flatMap((e) =>
              [-1, 1].map((t) => G([o, m, o], [e * s, m / 2, t * l], _)),
            ),
          ];
        }
        function Z() {
          let e,
            t,
            { arms: r = !1, stool: i = !1 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          ((e = i ? 0.38 : r ? 0.78 : 0.48), (t = i ? 0.38 : r ? 0.74 : 0.5));
          let n = i ? 0.48 : 0.46,
            a = r ? e - 0.18 : e,
            o = [
              X([a, 0.1, t], [0, n, 0], r ? y : T),
              ...[-1, 1].flatMap((e) =>
                [-1, 1].map((r) =>
                  G(
                    [0.06, n, 0.06],
                    [e * (a / 2 - 0.06), n / 2, r * (t / 2 - 0.06)],
                    _,
                  ),
                ),
              ),
            ];
          return (
            i ||
              o.push(
                X(
                  [a, r ? 0.42 : 0.44, r ? 0.14 : 0.09],
                  [0, n + (r ? 0.29 : 0.3), t / 2 - 0.045],
                  r ? v : T,
                ),
              ),
            r &&
              o.push(
                X([0.09, 0.34, t], [-e / 2 + 0.045, n + 0.1, 0], v),
                X([0.09, 0.34, t], [e / 2 - 0.045, n + 0.1, 0], v),
              ),
            o
          );
        }
        function Y(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            n = e - 0.14,
            a = t - 0.14,
            o = r - 0.07,
            s = [
              G([e, 0.07, r], [0, 0.035, 0], _),
              G([e, 0.07, r], [0, t - 0.035, 0], T),
              G([0.07, a, r], [-e / 2 + 0.035, t / 2, 0], _),
              G([0.07, a, r], [e / 2 - 0.035, t / 2, 0], _),
              G([n, a, 0.07], [0, t / 2, r / 2 - 0.035], _),
            ];
          for (let e = 1; e <= i; e += 1)
            s.push(G([n, 0.07, o], [0, (t * e) / (i + 1), -0.035], T));
          return s;
        }
        function J(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = 0.46 * e,
            i = r + 0.24 * e,
            n = t ? 0.63 * e : 0.56 * e;
          return [
            j([0.11 * e, r, 0.11 * e], [0, r / 2, 0], C),
            B("smooth-sphere", [n, 0.58 * e, n], [0, i, 0], L),
            B(
              "smooth-sphere",
              [0.7 * n, 0.42 * e, 0.7 * n],
              [-(0.25 * n), i + 0.08 * e, 0],
              z,
            ),
          ];
        }
        function ee(e, t, r) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            n = Math.min(0.4, 0.24 * t),
            a = i ? D : I,
            o = [X([0.94 * e, 0.29 * t, 0.94 * r], [0, n + 0.16 * t, 0], a)];
          for (let s of (i
            ? o.push(
                G(
                  [0.95 * e, 0.63 * t, 0.59 * r],
                  [0, n + 0.6 * t, -(0.17 * r)],
                  y,
                ),
                X(
                  [0.92 * e, 0.61 * t, 0.26 * r],
                  [0, n + 0.49 * t, 0.31 * r],
                  a,
                ),
                G([0.77 * e, 0.24 * t, 0.025], [0, n + 0.57 * t, 0.443 * r], v),
                ...[-1, 1].map((i) =>
                  G(
                    [0.025, 0.24 * t, 0.19 * r],
                    [i * e * 0.466, n + 0.57 * t, 0.31 * r],
                    v,
                  ),
                ),
              )
            : o.push(
                B(
                  "trapezoid-prism",
                  [0.82 * e, 0.42 * t, 0.51 * r],
                  [0, n + 0.51 * t, -(0.055 * r)],
                  v,
                ),
                X(
                  [0.84 * e, 0.045 * t, 0.29 * r],
                  [0, n + 0.74 * t, -(0.062 * r)],
                  a,
                ),
                ...[-1, 1].map((i) =>
                  G(
                    [0.035, 0.38 * t, 0.065],
                    [i * e * 0.419, n + 0.5 * t, -(0.055 * r)],
                    a,
                  ),
                ),
              ),
          o.push(
            G([0.46 * e, 0.09 * t, 0.035], [0, n + 0.13 * t, 0.477 * r], M),
            ...[-1, 1].map((i) =>
              X(
                [0.2 * e, 0.09 * t, 0.04],
                [i * e * 0.32, n + 0.23 * t, 0.477 * r],
                A,
              ),
            ),
            ...[-1, 1].map((i) =>
              G(
                [0.18 * e, 0.07 * t, 0.025],
                [i * e * 0.32, n + 0.23 * t, -(0.477 * r)],
                N,
              ),
            ),
          ),
          [-1, 1]))
            for (let t of [-(0.3 * r), 0.3 * r])
              o.push(
                j([2 * n, 0.1 * e, 2 * n], [s * e * 0.47, n, t], O, [0, 0, 90]),
                j(
                  [1.05 * n, 0.015 * e, 1.05 * n],
                  [s * e * 0.525, n, t],
                  S,
                  [0, 0, 90],
                ),
              );
          return o;
        }
        function et(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0.055,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : D,
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = t[0] - e[0],
            o = t[1] - e[1];
          return G(
            [r, Math.hypot(a, o) + 0.025, r],
            [n, (e[0] + t[0]) / 2, (e[1] + t[1]) / 2],
            i,
            [(180 * Math.atan2(o, a)) / Math.PI, 0, 0],
          );
        }
        function er(e, t, r, i, n, a) {
          let o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : [],
            s =
              arguments.length > 7 && void 0 !== arguments[7]
                ? arguments[7]
                : [],
            l =
              arguments.length > 8 && void 0 !== arguments[8]
                ? arguments[8]
                : {};
          return {
            id: e,
            presetVersion: 1,
            category: t,
            keywords: { "zh-CN": [r, ...o], "en-US": [i, ...s] },
            dimensionsMeters: { x: n[0], y: n[1], z: n[2], unit: "meter" },
            parts: a,
            ...l,
            resizePolicy:
              "intrinsic" ===
              (function (e) {
                let t = R.get(e);
                if (!t)
                  throw Error(`missing-procedural-intrinsic-profile:${e}`);
                return t;
              })(e).editMode
                ? "semantic-intrinsics"
                : "rigid-transform-only",
            source: "octo-procedural-v1",
          };
        }
        [
          er(
            "chair",
            "furniture",
            "\u6905\u5B50",
            "Chair",
            [0.48, 0.9, 0.52],
            Z(),
            ["\u9910\u6905", "\u5EA7\u6905"],
            ["dining chair", "seat"],
          ),
          er(
            "round-stool",
            "furniture",
            "\u5706\u51F3",
            "Round stool",
            [0.38, 0.48, 0.38],
            [
              q([0.38, 0.08, 0.38], [0, 0.44, 0], T),
              ...[-1, 1].flatMap((e) =>
                [-1, 1].map((t) =>
                  q([0.045, 0.396, 0.045], [0.105 * e, 0.198, 0.105 * t], _),
                ),
              ),
            ],
            ["\u51F3\u5B50"],
            ["stool"],
          ),
          er(
            "armchair",
            "furniture",
            "\u6276\u624B\u6905",
            "Armchair",
            [0.82, 0.88, 0.82],
            Z({ arms: !0 }),
            ["\u5355\u4EBA\u6C99\u53D1"],
            ["lounge chair"],
          ),
          er(
            "sofa",
            "furniture",
            "\u6C99\u53D1",
            "Sofa",
            [1.9, 0.88, 0.86],
            [
              X([1.5, 0.14, 0.59], [0, 0.38, -0.085], y),
              X([1.475, 0.16, 0.72], [0, 0.24, -0.03], v),
              X([1.46, 0.46, 0.18], [0, 0.68, 0.31], y),
              G([0.008, 0.003, 0.52], [0, 0.45, -0.085], v),
              G([0.008, 0.4, 0.004], [0, 0.68, 0.219], v),
              X([0.2, 0.5, 0.78], [-0.85, 0.43, 0], v),
              X([0.2, 0.5, 0.78], [0.85, 0.43, 0], v),
              ...[-1, 1].flatMap((e) =>
                [-1, 1].map((t) =>
                  G([0.08, 0.18, 0.08], [e * (0.95 - 0.14), 0.09, 0.27 * t], _),
                ),
              ),
            ],
            ["\u53CC\u4EBA\u6C99\u53D1", "\u957F\u6C99\u53D1"],
            ["couch"],
          ),
          er(
            "square-table",
            "furniture",
            "\u65B9\u684C",
            "Square table",
            [0.9, 0.75, 0.9],
            Q(0.9, 0.75, 0.9),
            ["\u684C\u5B50"],
            ["table"],
          ),
          er(
            "long-table",
            "furniture",
            "\u957F\u684C",
            "Long table",
            [1.8, 0.75, 0.9],
            Q(1.8, 0.75, 0.9),
            ["\u9910\u684C", "\u4F1A\u8BAE\u684C"],
            ["dining table", "meeting table"],
          ),
          er(
            "round-table",
            "furniture",
            "\u5706\u684C",
            "Round table",
            [1.05, 0.75, 1.05],
            [
              q([1.05, 0.1, 1.05], [0, 0.7, 0], T),
              q([0.2, 0.62, 0.2], [0, 0.36, 0], _),
              q([0.62, 0.08, 0.62], [0, 0.04, 0], _),
            ],
            ["\u5706\u5F62\u684C"],
            ["circular table"],
          ),
          er(
            "bed",
            "furniture",
            "\u5E8A",
            "Bed",
            [1.5, 0.55, 2.05],
            [
              X([1.44, 0.23, 1.88], [0, 0.29, -0.05], A),
              X([1.5, 0.4, 0.12], [0, 0.35, 0.965], _),
              G([1.5, 0.18, 2.05], [0, 0.09, 0], T),
              X([0.58, 0.12, 0.35], [-0.33, 0.46, 0.68], E),
              X([0.58, 0.12, 0.35], [0.33, 0.46, 0.68], E),
              X([1.46, 0.045, 1.1], [0, 0.42, -0.4], y),
            ],
            ["\u53CC\u4EBA\u5E8A", "\u7761\u5E8A"],
            ["double bed"],
          ),
          er(
            "bookshelf",
            "furniture",
            "\u4E66\u67B6",
            "Bookshelf",
            [0.9, 1.8, 0.3],
            Y(0.9, 1.8, 0.3, 4),
            ["\u4E66\u67DC"],
            ["bookcase"],
          ),
          er(
            "low-cabinet",
            "furniture",
            "\u77EE\u67DC",
            "Low cabinet",
            [1.2, 0.72, 0.42],
            [
              ...Y(1.2, 0.72, 0.42, 1),
              G([1.04, 0.27, 0.045], [0, 0.53, -0.22], T),
              G([0.25, 0.025, 0.035], [0, 0.53, -0.253], S),
            ],
            ["\u7535\u89C6\u67DC", "\u8FB9\u67DC"],
            ["sideboard", "tv cabinet"],
          ),
          er(
            "wardrobe",
            "furniture",
            "\u8863\u67DC",
            "Wardrobe",
            [1.2, 2, 0.58],
            [
              ...Y(1.2, 2, 0.58),
              G([0.54, 1.82, 0.04], [-0.29, 1, -0.31], T),
              G([0.54, 1.82, 0.04], [0.29, 1, -0.31], T),
              G([0.025, 0.26, 0.03], [-0.06, 1, -0.345], S),
              G([0.025, 0.26, 0.03], [0.06, 1, -0.345], S),
            ],
            ["\u67DC\u5B50"],
            ["closet"],
          ),
          er(
            "television",
            "furniture",
            "\u7535\u89C6",
            "Television",
            [1.1, 0.68, 0.12],
            [
              G([1.1, 0.62, 0.1], [0, 0.37, 0], O),
              G([0.98, 0.5, 0.02], [0, 0.39, -0.061], M),
              G([0.08, 0.11, 0.06], [0, 0.085, 0], M),
              G([0.35, 0.05, 0.12], [0, 0.025, 0], S),
            ],
            ["\u663E\u793A\u5C4F"],
            ["tv", "screen"],
          ),
          er(
            "wall-television",
            "furniture",
            "\u6302\u5899\u7535\u89C6",
            "Wall television",
            [1.2, 0.7, 0.08],
            [
              G([1.2, 0.7, 0.08], [0, 0.35, 0], O),
              G([1.08, 0.58, 0.015], [0, 0.35, -0.047], M),
            ],
            ["\u58C1\u6302\u7535\u89C6"],
            ["wall tv"],
          ),
          er(
            "floor-lamp",
            "furniture",
            "\u843D\u5730\u706F",
            "Floor lamp",
            [0.45, 1.65, 0.45],
            [
              j([0.42, 0.06, 0.42], [0, 0.03, 0], M),
              j([0.05, 1.25, 0.05], [0, 0.655, 0], S),
              B("lampshade", [0.45, 0.38, 0.45], [0, 1.46, 0], A),
            ],
            ["\u7ACB\u706F"],
            ["standing lamp"],
          ),
          er(
            "table-lamp",
            "furniture",
            "\u53F0\u706F",
            "Table lamp",
            [0.28, 0.5, 0.28],
            [
              j([0.2, 0.04, 0.2], [0, 0.02, 0], M),
              j([0.035, 0.3, 0.035], [0, 0.17, 0], S),
              B("lampshade", [0.28, 0.22, 0.28], [0, 0.39, 0], A),
            ],
            ["\u684C\u706F"],
            ["desk lamp"],
          ),
          er(
            "rug",
            "furniture",
            "\u5730\u6BEF",
            "Rug",
            [1.6, 0.02, 2.3],
            [G([1.6, 0.02, 2.3], [0, 0.01, 0], I)],
            ["\u6BEF\u5B50"],
            ["carpet"],
          ),
          er(
            "wall-segment",
            "architecture",
            "\u5899\u6BB5",
            "Wall segment",
            [3, 2.6, 0.18],
            [G([3, 2.6, 0.18], [0, 1.3, 0], P)],
            ["\u5899\u4F53"],
            ["wall"],
          ),
          er(
            "column",
            "architecture",
            "\u67F1\u5B50",
            "Column",
            [0.4, 2.8, 0.4],
            [
              j([0.4, 2.55, 0.4], [0, 1.4, 0], P),
              j([0.5, 0.14, 0.5], [0, 0.07, 0], F),
              j([0.5, 0.14, 0.5], [0, 2.73, 0], F),
            ],
            ["\u7ACB\u67F1"],
            ["pillar"],
          ),
          er(
            "stairs",
            "architecture",
            "\u697C\u68AF\u6BB5",
            "Stair flight",
            [2, 1.5, 3],
            Array.from({ length: 8 }, (e, t) =>
              G(
                [2, 0.1875 * (t + 1), 3 / 8],
                [0, (0.1875 * (t + 1)) / 2, 1.5 - (3 / 8) * (t + 0.5)],
                P,
              ),
            ),
            ["\u697C\u68AF"],
            ["stairs", "steps"],
          ),
          er(
            "ramp",
            "architecture",
            "\u659C\u5761",
            "Ramp",
            [2, 0.8, 3],
            [V([2, 0.8, 3], [0, 0.4, 0], P)],
            ["\u5761\u9053"],
            ["slope"],
          ),
          er(
            "platform",
            "architecture",
            "\u5E73\u53F0",
            "Platform",
            [2.4, 0.3, 2.4],
            [G([2.4, 0.3, 2.4], [0, 0.15, 0], P)],
            ["\u53F0\u9762"],
            ["stage", "podium"],
          ),
          er(
            "archway",
            "architecture",
            "\u62F1\u95E8",
            "Archway",
            [2.5, 2.6, 0.35],
            [
              G([0.42, 2.1, 0.35], [-1.04, 1.05, 0], P),
              G([0.42, 2.1, 0.35], [1.04, 1.05, 0], P),
              B("arch-band", [2.5, 1, 0.35], [0, 2.1, 0], P),
            ],
            ["\u62F1\u5F62\u95E8"],
            ["arch"],
          ),
          er(
            "door",
            "architecture",
            "\u95E8",
            "Door",
            [1, 2.1, 0.12],
            [
              G([1, 2.1, 0.12], [0, 1.05, 0], T),
              U([0.08, 0.08, 0.08], [-0.34, 1.02, -0.08], S),
            ],
            ["\u623F\u95E8"],
            ["entry door"],
          ),
          er(
            "fence",
            "architecture",
            "\u6805\u680F",
            "Fence",
            [2.4, 1.1, 0.12],
            [
              ...[-1, -0.5, 0, 0.5, 1].map((e) =>
                G([0.11, 1.1, 0.11], [1.08 * e, 0.55, 0], T),
              ),
              G([2.4, 0.12, 0.12], [0, 0.32, 0], _),
              G([2.4, 0.12, 0.12], [0, 0.82, 0], _),
            ],
            ["\u56F4\u680F"],
            ["railing"],
          ),
          er(
            "ladder",
            "architecture",
            "\u68AF\u5B50",
            "Ladder",
            [0.6, 2.4, 0.12],
            [
              G([0.08, 2.4, 0.08], [-0.26, 1.2, 0], S),
              G([0.08, 2.4, 0.08], [0.26, 1.2, 0], S),
              ...Array.from({ length: 7 }, (e, t) =>
                G([0.52, 0.06, 0.08], [0, 0.28 + 0.31 * t, 0], S),
              ),
            ],
            ["\u722C\u68AF"],
            ["steps"],
          ),
          er(
            "statue",
            "architecture",
            "\u62BD\u8C61\u96D5\u5851",
            "Abstract statue",
            [0.8, 2, 0.8],
            [
              G([0.8, 0.22, 0.8], [0, 0.11, 0], F),
              q([0.44, 0.62, 0.44], [0, 0.49, 0], P),
              $([0.68, 0.75, 0.18], [0, 1.14, 0], P),
              B("smooth-sphere", [0.42, 0.5, 0.42], [0, 1.73, 0], F),
            ],
            ["\u96D5\u50CF", "\u96D5\u5851"],
            ["sculpture"],
          ),
          er(
            "small-tree",
            "nature",
            "\u5C0F\u6811",
            "Small tree",
            [2.2, 3.5, 2.2],
            J(3.5),
            ["\u6811\u6728"],
            ["tree"],
          ),
          er(
            "large-tree",
            "nature",
            "\u5927\u6811",
            "Large tree",
            [4.5, 7, 4.5],
            J(7, !0),
            ["\u9AD8\u6811", "\u6811\u6728"],
            ["tall tree"],
          ),
          er(
            "rock",
            "nature",
            "\u77F3\u5934",
            "Rock",
            [1.2, 0.8, 1],
            [U([1.2, 0.8, 1], [0, 0.4, 0], F)],
            ["\u5CA9\u77F3"],
            ["stone"],
          ),
          er(
            "bush",
            "nature",
            "\u704C\u6728",
            "Bush",
            [1.4, 1, 1.2],
            [
              B("smooth-sphere", [1, 0.9, 1], [-0.25, 0.45, 0], z),
              B("smooth-sphere", [0.9, 0.8, 0.9], [0.35, 0.4, 0.12], L),
            ],
            ["\u6811\u4E1B"],
            ["shrub"],
          ),
          er(
            "potted-plant",
            "nature",
            "\u76C6\u683D",
            "Potted plant",
            [0.65, 1.2, 0.65],
            [
              K("bowl", [0.55, 0.42, 0.55], [0, 0.21, 0]),
              q([0.43, 0.025, 0.43], [0, 0.345, 0], C),
              j([0.045, 0.6, 0.045], [0, 0.65, 0], z),
              ...[-1, 1].map((e) =>
                B(
                  "smooth-sphere",
                  [0.38, 0.095, 0.21],
                  [0.14 * e, 0.68, 0],
                  L,
                  [0, 0, 28 * e],
                ),
              ),
              ...[-1, 1].map((e) =>
                B(
                  "smooth-sphere",
                  [0.33, 0.08, 0.18],
                  [0.11 * e, 0.86, 0.02],
                  z,
                  [0, 0, 34 * e],
                ),
              ),
              B("smooth-sphere", [0.22, 0.29, 0.17], [0, 1.04, 0], L),
            ],
            ["\u7EFF\u690D"],
            ["plant"],
          ),
          er(
            "stump",
            "nature",
            "\u6811\u6869",
            "Tree stump",
            [0.75, 0.6, 0.75],
            [j([0.75, 0.6, 0.75], [0, 0.3, 0], C)],
            ["\u6728\u6869"],
            ["stump"],
          ),
          er(
            "flower-bed",
            "nature",
            "\u82B1\u575B",
            "Flower bed",
            [1.8, 0.5, 0.8],
            [
              B("rounded-basin", [1.8, 0.35, 0.8], [0, 0.175, 0], P),
              G([1.4, 0.04, 0.53], [0, 0.28, 0], C),
              ...[-0.55, 0, 0.55].flatMap((e) => [
                j([0.035, 0.28, 0.035], [e, 0.42, 0], z),
                B(
                  "smooth-sphere",
                  [0.25, 0.06, 0.25],
                  [e, 0.55, 0],
                  0 === e ? H : I,
                ),
                j([0.075, 0.025, 0.075], [e, 0.583, 0], H),
                B(
                  "leaf",
                  [0.22, 0.05, 0.09],
                  [e + 0.06, 0.43, 0],
                  L,
                  [0, 0, 28],
                ),
              ]),
            ],
            ["\u82B1\u6C60"],
            ["planter"],
          ),
          er(
            "sedan",
            "street",
            "\u8F7F\u8F66",
            "Sedan",
            [1.8, 1.5, 4.4],
            ee(1.8, 1.5, 4.4),
            ["\u6C7D\u8F66", "\u5C0F\u6C7D\u8F66"],
            ["car"],
            { forwardAxis: "+Z" },
          ),
          er(
            "truck",
            "street",
            "\u5361\u8F66",
            "Truck",
            [2.4, 2.6, 6.2],
            ee(2.4, 2.6, 6.2, !0),
            ["\u8D27\u8F66"],
            ["lorry"],
            { forwardAxis: "+Z" },
          ),
          er(
            "bicycle",
            "street",
            "\u81EA\u884C\u8F66",
            "Bicycle",
            [0.45, 1.15, 1.8],
            [
              $([0.72, 0.72, 0.08], [0, 0.37, -0.58], O, [0, 90, 0]),
              $([0.72, 0.72, 0.08], [0, 0.37, 0.58], O, [0, 90, 0]),
              et([0.37, -0.58], [0.43, -0.05]),
              et([0.37, -0.58], [0.82, -0.24]),
              et([0.43, -0.05], [0.82, -0.24]),
              et([0.82, -0.24], [0.83, 0.34]),
              et([0.43, -0.05], [0.58, 0.3]),
              et([0.58, 0.3], [0.83, 0.34], 0.06, S),
              et([0.37, 0.58], [0.83, 0.34], 0.045, S),
              et([0.83, 0.34], [1.02, 0.4], 0.045, S),
              G([0.36, 0.045, 0.045], [0, 1.02, 0.4], M),
              G([0.3, 0.055, 0.16], [0, 0.89, -0.27], M),
            ],
            ["\u5355\u8F66"],
            ["bike"],
            { forwardAxis: "+Z" },
          ),
          er(
            "motorcycle",
            "street",
            "\u6469\u6258\u8F66",
            "Motorcycle",
            [0.8, 1.2, 2.1],
            [
              $([0.72, 0.72, 0.12], [0, 0.36, -0.68], O, [0, 90, 0]),
              $([0.72, 0.72, 0.12], [0, 0.36, 0.68], O, [0, 90, 0]),
              j([0.18, 0.14, 0.18], [0, 0.36, -0.68], S, [0, 0, 90]),
              j([0.18, 0.14, 0.18], [0, 0.36, 0.68], S, [0, 0, 90]),
              G([0.44, 0.4, 0.5], [0, 0.57, -0.03], M),
              B("smooth-sphere", [0.48, 0.38, 0.58], [0, 0.82, 0.18], N),
              G([0.42, 0.11, 0.52], [0, 0.9, -0.31], O, [-5, 0, 0]),
              et([0.36, -0.68], [0.58, -0.05], 0.085, N),
              et([0.36, -0.68], [0.88, -0.3], 0.07, N),
              et([0.61, -0.05], [0.97, 0.43], 0.085, N),
              et([0.36, 0.68], [0.97, 0.43], 0.055, S, -0.14),
              et([0.36, 0.68], [0.97, 0.43], 0.055, S, 0.14),
              et([0.97, 0.43], [1.11, 0.45], 0.055, S),
              G([0.8, 0.055, 0.07], [0, 1.11, 0.45], M),
              B("smooth-sphere", [0.22, 0.22, 0.18], [0, 1, 0.59], A),
              j([0.1, 0.7, 0.1], [-0.27, 0.49, -0.2], S, [90, 0, 0]),
              G([0.42, 0.06, 0.55], [0, 0.7, -0.58], N, [8, 0, 0]),
            ],
            ["\u6469\u6258", "\u673A\u8F66"],
            ["motorbike"],
            { forwardAxis: "+Z" },
          ),
          er(
            "street-lamp",
            "street",
            "\u8DEF\u706F",
            "Street lamp",
            [0.45, 3.8, 0.45],
            [
              q([0.3, 0.14, 0.3], [0, 0.07, 0], M),
              q([0.075, 3.3, 0.075], [0, 1.75, 0], M),
              G([0.34, 0.065, 0.065], [0.13, 3.42, 0], M),
              X([0.32, 0.16, 0.28], [0.23, 3.49, 0], M),
              X([0.27, 0.028, 0.23], [0.23, 3.399, 0], A),
            ],
            ["\u8857\u706F"],
            ["lamp post"],
          ),
          er(
            "bench",
            "street",
            "\u957F\u6905",
            "Bench",
            [1.8, 0.85, 0.65],
            [
              G([1.8, 0.12, 0.52], [0, 0.46, 0], T),
              G([1.8, 0.36, 0.1], [0, 0.67, 0.27], T),
              G([0.1, 0.46, 0.52], [-0.68, 0.23, 0], M),
              G([0.1, 0.46, 0.52], [0.68, 0.23, 0], M),
            ],
            ["\u516C\u56ED\u957F\u6905"],
            ["park bench"],
          ),
          er(
            "trash-bin",
            "street",
            "\u5783\u573E\u6876",
            "Trash bin",
            [0.55, 1, 0.55],
            [
              q([0.55, 0.9, 0.55], [0, 0.45, 0], M),
              q([0.58, 0.05, 0.58], [0, 0.925, 0], S),
              X([0.18, 0.055, 0.045], [0, 0.9775, 0], O),
              ...[-1, 1].map((e) =>
                G([0.055, 0.16, 0.08], [0.27 * e, 0.75, 0], O),
              ),
            ],
            ["\u5E9F\u7269\u7BB1"],
            ["garbage can"],
          ),
          er(
            "traffic-cone",
            "street",
            "\u8DEF\u9525",
            "Traffic cone",
            [0.45, 0.7, 0.45],
            [
              G([0.45, 0.07, 0.45], [0, 0.035, 0], O),
              (function (e, t) {
                let r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : A,
                  i = arguments.length > 3 ? arguments[3] : void 0;
                return B("cone", e, t, r, i);
              })([0.34, 0.65, 0.34], [0, 0.375, 0], N),
              (function (e, t) {
                let r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : A,
                  i = arguments.length > 3 ? arguments[3] : void 0;
                return B("frustum", e, t, r, i);
              })([0.224, 0.18, 0.224], [0, 0.375, 0], E),
            ],
            ["\u4EA4\u901A\u9525"],
            ["cone"],
          ),
          er(
            "water-barrier",
            "street",
            "\u6C34\u9A6C\u62A4\u680F",
            "Water barrier",
            [1.8, 1, 0.5],
            [
              G([1.8, 0.18, 0.5], [0, 0.09, 0], N),
              G([1.58, 0.48, 0.44], [0, 0.42, 0], N),
              G([1.18, 0.18, 0.38], [0, 0.74, 0], N),
              V([0.25, 0.26, 0.38], [-0.665, 0.68, 0], N, [0, 180, 0]),
              V([0.25, 0.26, 0.38], [0.665, 0.68, 0], N),
              G([0.5, 0.14, 0.025], [0, 0.68, -0.235], O),
              G([1.34, 0.1, 0.025], [0, 0.43, -0.235], E),
              j([0.11, 0.08, 0.11], [0.52, 0.88, 0], M),
            ],
            ["\u9053\u8DEF\u62A4\u680F", "\u6C34\u9A6C"],
            ["road barrier"],
          ),
          er(
            "road-sign",
            "street",
            "\u8DEF\u724C",
            "Road sign",
            [0.8, 2.4, 0.06],
            [
              j([0.06, 1.9, 0.06], [0, 0.95, 0], S),
              G([0.8, 0.55, 0.006], [0, 2.08, 0], D),
              G([0.7, 0.45, 0.002], [0, 2.08, -0.004], A),
            ],
            ["\u4EA4\u901A\u6807\u5FD7"],
            ["traffic sign"],
          ),
          er(
            "fire-hydrant",
            "street",
            "\u6D88\u9632\u6813",
            "Fire hydrant",
            [0.5, 0.85, 0.5],
            [
              j([0.34, 0.7, 0.34], [0, 0.37, 0], N),
              j([0.5, 0.12, 0.5], [0, 0.68, 0], N),
              U([0.3, 0.3, 0.3], [0, 0.77, 0], N),
              j([0.2, 0.2, 0.2], [-0.22, 0.48, 0], N, [0, 0, 90]),
              j([0.2, 0.2, 0.2], [0.22, 0.48, 0], N, [0, 0, 90]),
            ],
            ["\u6D88\u706B\u6813"],
            ["hydrant"],
          ),
          er(
            "oil-drum",
            "street",
            "\u6CB9\u6876",
            "Oil drum",
            [0.58, 0.9, 0.58],
            [
              j([0.58, 0.9, 0.58], [0, 0.45, 0], D),
              $([0.6, 0.6, 0.05], [0, 0.16, 0], M, [90, 0, 0]),
              $([0.6, 0.6, 0.05], [0, 0.74, 0], M, [90, 0, 0]),
            ],
            ["\u94C1\u6876"],
            ["barrel"],
          ),
          er(
            "crate",
            "street",
            "\u6728\u7BB1",
            "Wooden crate",
            [0.8, 0.65, 0.7],
            [
              ...[0.09, 0.25, 0.41, 0.57].map((e) =>
                G([0.72, 0.12, 0.58], [0, e, 0], T),
              ),
              ...[-1, 1].flatMap((e) =>
                [-1, 1].map((t) =>
                  G([0.09, 0.65, 0.09], [0.355 * e, 0.325, 0.305 * t], _),
                ),
              ),
              G([0.075, 0.73, 0.04], [0, 0.325, -0.33], _, [0, 0, 49]),
              G([0.075, 0.73, 0.04], [0, 0.325, -0.33], _, [0, 0, -49]),
              G([0.075, 0.73, 0.04], [0, 0.325, 0.33], _, [0, 0, 49]),
              G([0.075, 0.73, 0.04], [0, 0.325, 0.33], _, [0, 0, -49]),
            ],
            ["\u7BB1\u5B50"],
            ["box"],
          ),
          er(
            "desk",
            "office",
            "\u4E66\u684C",
            "Desk",
            [1.4, 0.75, 0.7],
            Q(1.4, 0.75, 0.7),
            ["\u529E\u516C\u684C"],
            ["office desk"],
          ),
          er(
            "coffee-table",
            "furniture",
            "\u8336\u51E0",
            "Coffee table",
            [0.95, 0.42, 0.55],
            Q(0.95, 0.42, 0.55),
            ["\u77EE\u684C"],
            ["low table"],
          ),
          er(
            "side-table",
            "furniture",
            "\u8FB9\u684C",
            "Side table",
            [0.5, 0.55, 0.5],
            Q(0.5, 0.55, 0.5),
            ["\u5E8A\u5934\u684C"],
            ["nightstand"],
          ),
          er(
            "refrigerator",
            "kitchen",
            "\u51B0\u7BB1",
            "Refrigerator",
            [0.75, 1.85, 0.72],
            [
              G([0.75, 1.805, 0.72], [0, 0.9025, 0], E),
              G([0.69, 1.08, 0.035], [0, 1.25, -0.378], A),
              G([0.69, 0.58, 0.035], [0, 0.37, -0.378], A),
              G([0.7, 0.025, 0.045], [0, 0.695, -0.39], M),
              G([0.035, 0.52, 0.04], [0.25, 1.25, -0.405], M),
              G([0.035, 0.32, 0.04], [0.25, 0.39, -0.405], M),
              G([0.71, 0.045, 0.68], [0, 1.8275, 0], S),
            ],
            ["\u51B7\u85CF\u67DC"],
            ["fridge"],
          ),
          er(
            "stove",
            "kitchen",
            "\u7076\u53F0",
            "Stove",
            [0.6, 0.9, 0.65],
            [
              G([0.6, 0.82, 0.62], [0, 0.41, 0], E),
              G([0.62, 0.06, 0.65], [0, 0.85, 0], S),
              ...[-0.16, 0.16].flatMap((e) =>
                [-0.17, 0.17].map((t) =>
                  $([0.17, 0.17, 0.025], [e, 0.89, t], O, [90, 0, 0]),
                ),
              ),
              G([0.46, 0.32, 0.03], [0, 0.35, -0.335], O),
              G([0.45, 0.035, 0.04], [0, 0.57, -0.355], M),
              G([0.52, 0.14, 0.035], [0, 0.72, -0.34], A),
              ...[-0.16, 0, 0.16].map((e) =>
                j([0.055, 0.035, 0.055], [e, 0.72, -0.37], M, [90, 0, 0]),
              ),
            ],
            ["\u7089\u7076", "\u70E4\u7BB1"],
            ["oven", "cooktop"],
          ),
          er(
            "kitchen-sink",
            "kitchen",
            "\u53A8\u623F\u6C34\u69FD",
            "Kitchen sink",
            [0.8, 1.2, 0.65],
            [
              ...Y(0.78, 0.82, 0.62).filter((e, t) => 1 !== t),
              G([0.8, 0.06, 0.1], [0, 0.87, -0.275], P),
              G([0.8, 0.06, 0.18], [0, 0.87, 0.235], P),
              G([0.04, 0.06, 0.37], [-0.38, 0.87, -0.04], P),
              G([0.21, 0.06, 0.37], [0.295, 0.87, -0.04], P),
              B("rounded-basin", [0.56, 0.22, 0.4], [-0.08, 0.805, -0.04], S),
              G([0.35, 0.64, 0.025], [-0.19, 0.42, -0.323], T),
              G([0.35, 0.64, 0.025], [0.19, 0.42, -0.323], T),
              G([0.03, 0.18, 0.025], [-0.05, 0.5, -0.345], M),
              G([0.03, 0.18, 0.025], [0.05, 0.5, -0.345], M),
              j([0.09, 0.035, 0.09], [0.22, 0.935, 0.2], S),
              j([0.045, 0.28, 0.045], [0.22, 1.065, 0.2], S),
              j([0.045, 0.2, 0.045], [0.22, 1.2, 0.1], S, [90, 0, 0]),
              j([0.04, 0.085, 0.04], [0.22, 1.16, 0], S),
            ],
            ["\u6D17\u83DC\u6C60"],
            ["sink"],
          ),
          er(
            "kitchen-counter",
            "kitchen",
            "\u53A8\u623F\u5730\u67DC",
            "Kitchen counter",
            [1.2, 0.9, 0.65],
            [
              G([1.16, 0.8, 0.6], [0, 0.42, 0], A),
              G([1.2, 0.08, 0.65], [0, 0.86, 0], F),
              G([1.05, 0.1, 0.035], [0, 0.08, -0.32], _),
              G([0.54, 0.52, 0.035], [-0.29, 0.37, -0.322], T),
              G([0.54, 0.52, 0.035], [0.29, 0.37, -0.322], T),
              G([0.54, 0.15, 0.035], [-0.29, 0.72, -0.322], T),
              G([0.54, 0.15, 0.035], [0.29, 0.72, -0.322], T),
              G([0.18, 0.025, 0.025], [-0.29, 0.62, -0.35], M),
              G([0.18, 0.025, 0.025], [0.29, 0.62, -0.35], M),
            ],
            ["\u6A71\u67DC", "\u64CD\u4F5C\u53F0"],
            ["counter", "base cabinet"],
          ),
          er(
            "kitchen-island",
            "kitchen",
            "\u53A8\u623F\u5C9B\u53F0",
            "Kitchen island",
            [1.6, 0.92, 0.85],
            [
              G([1.35, 0.82, 0.65], [0, 0.41, 0], A),
              G([1.6, 0.1, 0.85], [0, 0.87, 0], F),
            ],
            ["\u4E2D\u5C9B", "\u5427\u53F0"],
            ["island", "breakfast bar"],
          ),
          er(
            "microwave",
            "kitchen",
            "\u5FAE\u6CE2\u7089",
            "Microwave",
            [0.5, 0.3, 0.4],
            [
              X([0.5, 0.3, 0.4], [0, 0.15, 0], E),
              G([0.36, 0.23, 0.024], [-0.05, 0.15, -0.211], O),
              G([0.28, 0.15, 0.008], [-0.07, 0.15, -0.227], M),
              G([0.018, 0.15, 0.022], [0.105, 0.15, -0.236], S),
              G([0.063, 0.035, 0.008], [0.193, 0.235, -0.21], M),
              j([0.04, 0.025, 0.04], [0.19, 0.12, -0.215], S, [90, 0, 0]),
            ],
            ["\u5FAE\u6CE2\u70E4\u7BB1"],
            ["oven"],
          ),
          er(
            "wall-cabinet",
            "kitchen",
            "\u53A8\u623F\u540A\u67DC",
            "Wall cabinet",
            [0.8, 0.7, 0.35],
            [
              G([0.8, 0.7, 0.35], [0, 0.35, 0], A),
              G([0.37, 0.62, 0.03], [-0.2, 0.35, -0.19], T),
              G([0.37, 0.62, 0.03], [0.2, 0.35, -0.19], T),
            ],
            ["\u540A\u67DC"],
            ["upper cabinet"],
          ),
          er(
            "toilet",
            "bathroom",
            "\u9A6C\u6876",
            "Toilet",
            [0.42, 0.8, 0.72],
            [
              K("bowl", [0.42, 0.28, 0.52], [0, 0.335, -0.1]),
              K("frustum", [0.26, 0.24, 0.3], [0, 0.12, 0.025]),
              K("torus", [0.405, 0.5, 0.025], [0, 0.48, -0.1], [90, 0, 0]),
              K("rounded-box", [0.34, 0.49, 0.2], [0, 0.53, 0.23]),
              K("rounded-box", [0.36, 0.045, 0.22], [0, 0.7875, 0.23]),
              q([0.06, 0.012, 0.06], [0, 0.816, 0.23], S),
            ],
            ["\u5750\u4FBF\u5668"],
            ["wc"],
          ),
          er(
            "washbasin",
            "bathroom",
            "\u6D17\u624B\u6C60",
            "Washbasin",
            [0.62, 0.85, 0.5],
            [
              K("frustum", [0.22, 0.52, 0.2], [0, 0.26, 0.04]),
              K("bowl", [0.62, 0.24, 0.5], [0, 0.62, 0]),
              q([0.04, 0.17, 0.04], [0.14, 0.755, 0.13], S),
              G([0.045, 0.025, 0.19], [0.14, 0.8425, 0.055], S),
              q([0.035, 0.05, 0.035], [0.14, 0.81, -0.03], S),
            ],
            ["\u76E5\u6D17\u6C60"],
            ["bathroom sink"],
          ),
          er(
            "bathtub",
            "bathroom",
            "\u6D74\u7F38",
            "Bathtub",
            [1.7, 0.6, 0.8],
            [
              K("rounded-basin", [1.7, 0.6, 0.8], [0, 0.3, 0]),
              q([0.055, 0.008, 0.055], [0.48, 0.145, 0], S),
            ],
            ["\u6FA1\u76C6"],
            ["bath"],
          ),
          er(
            "shower",
            "bathroom",
            "\u6DCB\u6D74\u95F4",
            "Shower",
            [1, 2.1, 1],
            [
              G([1, 0.1, 1], [0, 0.05, 0], E),
              W([0.025, 2, 1], [-0.4875, 1.05, 0]),
              W([0.025, 2, 1], [0.4875, 1.05, 0]),
              G([1, 2, 0.04], [0, 1.05, 0.48], A),
              j([0.045, 1.55, 0.045], [0.28, 1.15, 0.41], S),
              j([0.07, 0.1, 0.07], [0.28, 0.7, 0.43], S, [90, 0, 0]),
              j([0.07, 0.1, 0.07], [0.28, 1.45, 0.43], S, [90, 0, 0]),
              j([0.045, 0.38, 0.045], [0.28, 1.9, 0.27], S, [90, 0, 0]),
              j([0.045, 0.12, 0.045], [0.28, 1.85, 0.08], S),
              j([0.3, 0.055, 0.3], [0.28, 1.78, 0.08], S),
              G([0.025, 2, 0.025], [-0.485, 1.05, -0.48], S),
              G([0.025, 2, 0.025], [0.485, 1.05, -0.48], S),
            ],
            ["\u6D74\u5BA4"],
            ["shower enclosure"],
          ),
          er(
            "washing-machine",
            "bathroom",
            "\u6D17\u8863\u673A",
            "Washing machine",
            [0.65, 0.9, 0.65],
            [
              X([0.65, 0.9, 0.65], [0, 0.45, 0], E),
              G([0.57, 0.115, 0.02], [0, 0.77, -0.334], A),
              G([0.22, 0.045, 0.008], [0.12, 0.78, -0.348], M),
              j([0.07, 0.022, 0.07], [-0.17, 0.78, -0.35], S, [90, 0, 0]),
              $([0.43, 0.43, 0.045], [0, 0.43, -0.365], S),
              j([0.3, 0.008, 0.3], [0, 0.43, -0.343], M, [90, 0, 0]),
              G([0.035, 0.085, 0.02], [0.182, 0.43, -0.382], M),
            ],
            ["\u6D17\u8863\u8BBE\u5907"],
            ["washer"],
          ),
          er(
            "monitor",
            "office",
            "\u663E\u793A\u5668",
            "Monitor",
            [0.6, 0.48, 0.2],
            [
              G([0.6, 0.36, 0.06], [0, 0.29, 0], O),
              G([0.52, 0.29, 0.02], [0, 0.3, -0.04], M),
              G([0.06, 0.16, 0.06], [0, 0.1, 0], S),
              G([0.3, 0.04, 0.2], [0, 0.02, 0], S),
            ],
            ["\u7535\u8111\u5C4F\u5E55"],
            ["computer screen"],
          ),
          er(
            "laptop",
            "office",
            "\u7B14\u8BB0\u672C\u7535\u8111",
            "Laptop",
            [0.34, 0.22, 0.28],
            [
              X([0.34, 0.024, 0.24], [0, 0.012, -0.02], S),
              X([0.34, 0.21, 0.018], [0, 0.12, 0.1], M, [-12, 0, 0]),
              G([0.306, 0.172, 0.004], [0, 0.124, 0.089], v, [-12, 0, 0]),
              ...[-0.025, 0.005, 0.035].map((e) =>
                G([0.275, 0.004, 0.019], [0, 0.026, e], M),
              ),
              G([0.095, 0.003, 0.043], [0, 0.0255, -0.084], v),
            ],
            ["\u624B\u63D0\u7535\u8111"],
            ["notebook computer"],
          ),
          er(
            "window",
            "architecture",
            "\u7A97\u6237",
            "Window",
            [1.4, 1.2, 0.12],
            [
              G([1.4, 0.1, 0.12], [0, 0.05, 0], E),
              G([1.4, 0.1, 0.12], [0, 1.15, 0], E),
              G([0.1, 1, 0.12], [-0.65, 0.6, 0], E),
              G([0.1, 1, 0.12], [0.65, 0.6, 0], E),
              G([0.06, 1, 0.08], [0, 0.6, 0], E),
              G([0.57, 0.04, 0.08], [-0.315, 0.6, 0], E),
              G([0.57, 0.04, 0.08], [0.315, 0.6, 0], E),
              G([1.26, 1.06, 0.02], [0, 0.6, 0.02], k),
            ],
            ["\u7A97\u6846"],
            ["glass window"],
          ),
          er(
            "railing",
            "architecture",
            "\u680F\u6746",
            "Railing",
            [2.4, 1.05, 0.12],
            [
              G([2.4, 0.1, 0.12], [0, 1, 0], S),
              G([2.4, 0.08, 0.1], [0, 0.12, 0], S),
              ...[-1.1, -0.55, 0, 0.55, 1.1].map((e) =>
                G([0.07, 1, 0.07], [e, 0.52, 0], S),
              ),
            ],
            ["\u62A4\u680F"],
            ["guardrail"],
          ),
          er(
            "cardboard-box",
            "household",
            "\u7EB8\u7BB1",
            "Cardboard box",
            [0.6, 0.5, 0.5],
            [
              G([0.6, 0.5, 0.5], [0, 0.25, 0], T),
              G([0.04, 0.5, 0.51], [0, 0.25, 0], _),
            ],
            ["\u5305\u88C5\u7BB1"],
            ["carton"],
          ),
          er(
            "suitcase",
            "household",
            "\u884C\u674E\u7BB1",
            "Suitcase",
            [0.48, 0.75, 0.24],
            [
              X([0.48, 0.64, 0.24], [0, 0.35, 0], D),
              ...[-0.12, 0, 0.12].map((e) =>
                X([0.035, 0.48, 0.015], [e, 0.35, -0.124], v),
              ),
              G([0.022, 0.105, 0.025], [-0.075, 0.6875, 0], S),
              G([0.022, 0.105, 0.025], [0.075, 0.6875, 0], S),
              X([0.19, 0.033, 0.045], [0, 0.742, 0], M),
              j([0.07, 0.055, 0.07], [-0.17, 0.035, 0], O, [90, 0, 0]),
              j([0.07, 0.055, 0.07], [0.17, 0.035, 0], O, [90, 0, 0]),
            ],
            ["\u65C5\u884C\u7BB1"],
            ["luggage"],
          ),
          er(
            "mug",
            "household",
            "\u676F\u5B50",
            "Mug",
            [0.12, 0.1, 0.09],
            [
              K("cup", [0.085, 0.1, 0.085], [-0.015, 0.05, 0]),
              K("cup-handle", [0.034, 0.071, 0.014], [0.041, 0.053, 0]),
            ],
            ["\u9A6C\u514B\u676F", "\u8336\u676F"],
            ["cup"],
          ),
          er(
            "mirror",
            "household",
            "\u955C\u5B50",
            "Mirror",
            [0.65, 0.9, 0.06],
            [
              G([0.65, 0.9, 0.06], [0, 0.45, 0], _),
              G([0.57, 0.82, 0.015], [0, 0.45, -0.038], k),
            ],
            ["\u7A7F\u8863\u955C"],
            ["looking glass"],
          ),
          er(
            "pendant-lamp",
            "household",
            "\u540A\u706F",
            "Pendant lamp",
            [0.45, 0.9, 0.45],
            [
              j([0.04, 0.52, 0.04], [0, 0.64, 0], M),
              B("lampshade", [0.45, 0.38, 0.45], [0, 0.22, 0], A),
            ],
            ["\u60AC\u540A\u706F"],
            ["ceiling light"],
          ),
          er(
            "ceiling-fan",
            "household",
            "\u540A\u6247",
            "Ceiling fan",
            [1.4, 0.25, 1.4],
            [
              j([0.2, 0.25, 0.2], [0, 0.125, 0], M),
              G([1.4, 0.06, 0.18], [0, 0.06, 0], T),
              G([0.18, 0.06, 1.4], [0, 0.06, 0], T),
            ],
            ["\u98CE\u6247"],
            ["fan"],
          ),
        ].map((e) => [e.id, e]);
        let ei = Object.freeze({ mode: "embedded" });
        Object.freeze({ mode: "in-place", provenance: "authored" });
        let en = Object.freeze({ x: 0, y: 1, z: 0 });
        function ea(e) {
          let t = Math.hypot(e.x, e.y, e.z);
          if (!Number.isFinite(t) || t <= 1e-12)
            throw Error("DIRECTOR_STAGE_IN_PLACE_INVALID_UP_AXIS");
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function eo(e) {
          let t = Math.hypot(e.x, e.y, e.z, e.w);
          if (!Number.isFinite(t) || t <= 1e-12)
            return { x: 0, y: 0, z: 0, w: 1 };
          let r = e.w < 0 ? -1 : 1;
          return {
            x: (e.x / t) * r,
            y: (e.y / t) * r,
            z: (e.z / t) * r,
            w: (e.w / t) * r,
          };
        }
        function es(e) {
          return { x: -e.x, y: -e.y, z: -e.z, w: e.w };
        }
        function el(e, t) {
          return {
            x: e.x * t.w + e.w * t.x + e.y * t.z - e.z * t.y,
            y: e.y * t.w + e.w * t.y + e.z * t.x - e.x * t.z,
            z: e.z * t.w + e.w * t.z + e.x * t.y - e.y * t.x,
            w: e.w * t.w - e.x * t.x - e.y * t.y - e.z * t.z,
          };
        }
        class em extends Error {
          constructor(e, t = {}, r) {
            (super(e, r),
              (this.code = e),
              (this.details = t),
              (this.name = "DirectorStageFbxImportError"));
          }
        }
        let eu = 180 / Math.PI,
          eh = {
            trackPresent: !1,
            sourceUnit: "centimeter",
            upAxis: "y",
            groundPlane: "xz",
            start: { x: 0, y: 0, z: 0 },
            end: { x: 0, y: 0, z: 0 },
            displacement: { x: 0, y: 0, z: 0 },
            groundDisplacement: 0,
            groundPathLength: 0,
            verticalRange: 0,
            hasGroundTravel: !1,
            hasVerticalMotion: !1,
          };
        function ed(e) {
          var t, r, a, o, l;
          let h, d, c, g, p, f;
          if (e.byteLength <= 0 || e.byteLength > 0x6400000)
            throw new em("DIRECTOR_STAGE_FBX_IMPORT_FILE_SIZE");
          if (
            ((t = e),
            "Kaydara FBX Binary  " !==
              new TextDecoder("ascii").decode(t.slice(0, 20)))
          )
            throw new em("DIRECTOR_STAGE_FBX_IMPORT_UNSUPPORTED_FORMAT");
          try {
            h = (function (e) {
              let t,
                r = i.Tap.prototype.load;
              i.Tap.prototype.load = function (e, t, r, n) {
                let a = new i.gPd();
                return (null == t || t(a), a);
              };
              try {
                t = new n.w().parse(e, "");
              } finally {
                i.Tap.prototype.load = r;
              }
              for (let e of t.animations) e.tracks = e.tracks.map(ec);
              return t;
            })(e);
          } catch (e) {
            throw new em(
              "DIRECTOR_STAGE_FBX_IMPORT_INVALID_FILE",
              {},
              { cause: e },
            );
          }
          let b = (function (e) {
              let t = new Map();
              e.traverse((e) => {
                if (!(e instanceof i.$Kf)) return;
                let r = u(e.name),
                  n = t.get(r) ?? [];
                (n.push(e), t.set(r, n));
              });
              let r = u(s[0].name),
                n = [];
              for (let e of t.get(r) ?? []) {
                let i = new Map([[r, e]]),
                  a = [e];
                for (let e of s.slice(1)) {
                  let r = u(e.name),
                    n = u(e.parentName ?? ""),
                    o = i.get(n),
                    s = o
                      ? (t.get(r) ?? []).find((e) => e.parent === o)
                      : void 0;
                  if (!s) break;
                  (i.set(r, s), a.push(s));
                }
                a.length > n.length && (n = a);
              }
              return n.length === s.length ? n : void 0;
            })(h),
            x =
              ((r = h),
              (a = !!b),
              (d = []),
              r.traverse((e) => {
                e instanceof i.$Kf && d.push(e);
              }),
              (c = new Set(d.map((e) => u(e.name)))),
              (p = (g = s.map((e) => ({
                canonical: u(e.name),
                display: e.name,
              })))
                .filter((e) => {
                  let { canonical: t } = e;
                  return !c.has(t);
                })
                .map((e) => {
                  let { display: t } = e;
                  return t;
                })),
              {
                compatible: a,
                boneCount: d.length,
                canonicalBoneCount: g.length - p.length,
                expectedBoneCount: g.length,
                missingBoneNames: p,
                hierarchyMismatch: 0 === p.length && !a,
              }),
            R =
              ((o = h.animations),
              (l = x),
              (f = new Map(
                m.map((e) => {
                  let t = s[e].name;
                  return [u(t), t];
                }),
              )),
              o.map((e, t) => {
                let r,
                  n = [];
                (l.compatible ||
                  n.push({
                    code: "DIRECTOR_STAGE_FBX_STACK_NON_MIXAMO_SKELETON",
                    severity: "error",
                    boneNames: l.missingBoneNames,
                  }),
                  (!Number.isFinite(e.duration) || e.duration <= 0) &&
                    n.push({
                      code: "DIRECTOR_STAGE_FBX_STACK_INVALID_DURATION",
                      severity: "error",
                    }),
                  0 === e.tracks.length &&
                    n.push({
                      code: "DIRECTOR_STAGE_FBX_STACK_NO_CURVES",
                      severity: "error",
                    }));
                let a = new Map(),
                  o = !1;
                try {
                  for (let t of ((a = ef(e)), (r = eb(e)), a.values()))
                    eR(t, 4, !0);
                  r && eR(r, 3, !1);
                } catch {
                  ((o = !0),
                    n.push({
                      code: "DIRECTOR_STAGE_FBX_STACK_MALFORMED_TRACKS",
                      severity: "error",
                    }));
                }
                e.tracks.length > 0 &&
                  0 === a.size &&
                  n.push({
                    code: "DIRECTOR_STAGE_FBX_STACK_NO_ROTATION_CURVES",
                    severity: "error",
                  });
                let s = [...f]
                  .filter((e) => {
                    let [t] = e;
                    return !a.has(t);
                  })
                  .map((e) => {
                    let [, t] = e;
                    return t;
                  });
                s.length > 0 &&
                  n.push({
                    code: "DIRECTOR_STAGE_FBX_STACK_MISSING_ROTATION_TRACKS",
                    severity: "error",
                    boneNames: s,
                  });
                let m = o
                  ? 0
                  : e.tracks.filter(
                      (e) =>
                        e.name.endsWith(".quaternion") &&
                        4 === e.getValueSize() &&
                        (function (e) {
                          if (e.times.length < 2) return !1;
                          let t = new i.PTz()
                              .fromArray(e.values, 0)
                              .normalize(),
                            r = new i.PTz();
                          for (let i = 1; i < e.times.length; i += 1)
                            if (
                              (r.fromArray(e.values, 4 * i).normalize(),
                              t.angleTo(r) > 1e-6)
                            )
                              return !0;
                          return !1;
                        })(e),
                    ).length;
                a.size > 0 &&
                  0 === m &&
                  n.push({
                    code: "DIRECTOR_STAGE_FBX_STACK_STATIC_POSE",
                    severity: "warning",
                  });
                let u = (function (e) {
                    let t = new Set(),
                      r = [];
                    for (let i of e)
                      for (let e = 0; e < i.times.length; e += 1) {
                        let n = i.times[e];
                        if ((Number.isFinite(n) && t.add(n), e > 0)) {
                          let t = n - i.times[e - 1];
                          Number.isFinite(t) && t > 1e-7 && r.push(t);
                        }
                      }
                    if (0 === r.length)
                      return {
                        kind: "unknown",
                        sampleCount: t.size,
                        estimatedFps: void 0,
                      };
                    r.sort((e, t) => e - t);
                    let i = r[Math.floor(r.length / 2)];
                    return {
                      kind:
                        r.reduce((e, t) => Math.max(e, Math.abs(t - i)), 0) <=
                        Math.max(1e-7, 0.01 * i)
                          ? "uniform"
                          : "variable",
                      sampleCount: t.size,
                      estimatedFps: ep(1 / i),
                    };
                  })([...a.values(), ...(r ? [r] : [])]),
                  h =
                    r && !o
                      ? (function (e) {
                          if (0 === e.times.length) return eh;
                          let t = new i.Pq0().fromArray(e.values, 0),
                            r = new i.Pq0().fromArray(
                              e.values,
                              (e.times.length - 1) * 3,
                            ),
                            n = 0,
                            a = t.y,
                            o = t.y,
                            s = t;
                          for (let t = 1; t < e.times.length; t += 1) {
                            let r = new i.Pq0().fromArray(e.values, 3 * t);
                            ((n += Math.hypot(r.x - s.x, r.z - s.z)),
                              (a = Math.min(a, r.y)),
                              (o = Math.max(o, r.y)),
                              (s = r));
                          }
                          let l = r.clone().sub(t),
                            m = Math.hypot(l.x, l.z),
                            u = o - a;
                          return {
                            trackPresent: !0,
                            sourceUnit: "centimeter",
                            upAxis: "y",
                            groundPlane: "xz",
                            start: eg(t),
                            end: eg(r),
                            displacement: eg(l),
                            groundDisplacement: ep(m),
                            groundPathLength: ep(n),
                            verticalRange: ep(u),
                            hasGroundTravel: n > 0.01,
                            hasVerticalMotion: u > 0.01,
                          };
                        })(r)
                      : eh;
                return {
                  index: t,
                  name: e.name.trim().slice(0, 80),
                  displayName:
                    e.name.trim().slice(0, 80) || `Animation stack ${t + 1}`,
                  durationSec: Number.isFinite(e.duration) ? e.duration : 0,
                  trackCount: e.tracks.length,
                  animatedBoneCount: [...f].filter((e) => {
                    let [t] = e;
                    return a.has(t);
                  }).length,
                  changingBoneCount: m,
                  sampleCount: u.sampleCount,
                  ...(void 0 !== u.estimatedFps
                    ? { estimatedFps: u.estimatedFps }
                    : {}),
                  timing: u.kind,
                  hasRootMotion: h.trackPresent,
                  rootMotion: h,
                  issues: n,
                  compatible: !n.some((e) => "error" === e.severity),
                };
              })),
            w = R.filter((e) => e.compatible),
            T = w.reduce(
              (e, t) =>
                !e || t.changingBoneCount > e.changingBoneCount ? t : e,
              void 0,
            );
          return {
            root: h,
            sourceBones: b,
            inspection: {
              format: "binary-fbx",
              skeleton: x,
              animationStacks: R,
              compatibleStackCount: w.length,
              requiresStackSelection: w.length > 1,
              ...(T ? { recommendedStackIndex: T.index } : {}),
            },
          };
        }
        function ec(e) {
          let { times: t, values: r } = e,
            i = e.getValueSize(),
            n = [];
          for (let e = 0; e < t.length; e += 1) {
            let r = n.at(-1);
            (void 0 === r || Math.abs(t[e] - t[r]) > 1e-7) && n.push(e);
          }
          return n.length === t.length
            ? e
            : new e.constructor(
                e.name,
                n.map((e) => t[e]),
                n.flatMap((e) => Array.from(r.subarray(e * i, (e + 1) * i))),
                e.getInterpolation(),
              );
        }
        function eg(e) {
          return { x: e.x, y: e.y, z: e.z };
        }
        function ep(e) {
          return Math.round(1e3 * e) / 1e3;
        }
        function ef(e) {
          let t = new Map();
          for (let r of e.tracks) {
            let e = ex(r.name);
            if (!e || "quaternion" !== e.property || 4 !== r.getValueSize())
              continue;
            let i = u(e.node);
            if (t.has(i))
              throw Error(`DIRECTOR_STAGE_FBX_IMPORT_DUPLICATE_TRACK:${i}`);
            t.set(i, r);
          }
          return t;
        }
        function eb(e) {
          let t;
          for (let r of e.tracks) {
            let e = ex(r.name);
            if (
              e &&
              "position" === e.property &&
              3 === r.getValueSize() &&
              "mixamorighips" === u(e.node)
            ) {
              if (t)
                throw Error("DIRECTOR_STAGE_FBX_IMPORT_DUPLICATE_ROOT_TRACK");
              t = r;
            }
          }
          return t;
        }
        function ex(e) {
          let t = e.lastIndexOf(".");
          if (!(t <= 0) && !(t >= e.length - 1))
            return { node: e.slice(0, t), property: e.slice(t + 1) };
        }
        function eR(e, t, r) {
          if (0 === e.times.length || e.values.length !== e.times.length * t)
            throw Error("DIRECTOR_STAGE_FBX_IMPORT_INVALID_TRACK");
          for (let i = 0; i < e.times.length; i += 1) {
            let n = e.times[i];
            if (!Number.isFinite(n) || (i > 0 && n <= e.times[i - 1]))
              throw Error("DIRECTOR_STAGE_FBX_IMPORT_INVALID_TRACK_TIME");
            let a = 0;
            for (let r = 0; r < t; r += 1) {
              let n = e.values[i * t + r];
              if (!Number.isFinite(n))
                throw Error("DIRECTOR_STAGE_FBX_IMPORT_NON_FINITE");
              a += n * n;
            }
            if (r && a < 1e-12)
              throw Error("DIRECTOR_STAGE_FBX_IMPORT_INVALID_QUATERNION");
          }
        }
        function ew(e, t) {
          let { left: r, right: n, progress: a } = e_(e.times, t),
            o = new i.PTz().fromArray(e.values, 4 * r).normalize();
          if (r === n) return o;
          let s = new i.PTz().fromArray(e.values, 4 * n).normalize();
          return o.slerp(s, a).normalize();
        }
        function eT(e, t) {
          let { left: r, right: n, progress: a } = e_(e.times, t),
            o = new i.Pq0().fromArray(e.values, 3 * r);
          return r === n
            ? o
            : o.lerp(new i.Pq0().fromArray(e.values, 3 * n), a);
        }
        function e_(e, t) {
          let r = 0;
          for (; r < e.length && e[r] < t; ) r += 1;
          if (r <= 0) return { left: 0, right: 0, progress: 0 };
          if (r >= e.length) {
            let t = Math.max(0, e.length - 1);
            return { left: t, right: t, progress: 0 };
          }
          let n = r - 1,
            a = Math.max(1e-7, e[r] - e[n]);
          return {
            left: n,
            right: r,
            progress: i.cj9.clamp((t - e[n]) / a, 0, 1),
          };
        }
        function ey(e) {
          return { x: e.x, y: e.y, z: e.z, w: e.w };
        }
        let ev = self;
        ev.addEventListener("message", (e) => {
          let { id: t, bytes: r } = e.data;
          try {
            let n =
              "inspect" === e.data.operation
                ? ed(r).inspection
                : (function (e, t) {
                    var r, n;
                    let a,
                      { root: o, sourceBones: l, inspection: h } = ed(e);
                    if (!h.skeleton.compatible || !l)
                      throw new em(
                        "DIRECTOR_STAGE_FBX_IMPORT_SKELETON_MISMATCH",
                        { missingBoneNames: h.skeleton.missingBoneNames },
                      );
                    let c = h.animationStacks;
                    if (0 === c.length)
                      throw new em("DIRECTOR_STAGE_FBX_IMPORT_NO_ANIMATION");
                    let g = (function (e, t) {
                        if (void 0 !== t) {
                          let r =
                            Number.isInteger(t) && t >= 0
                              ? e.find((e) => e.index === t)
                              : void 0;
                          if (!r)
                            throw new em(
                              "DIRECTOR_STAGE_FBX_IMPORT_STACK_NOT_FOUND",
                              { animationStackIndices: [t] },
                            );
                          if (!r.compatible)
                            throw new em(
                              "DIRECTOR_STAGE_FBX_IMPORT_STACK_INCOMPATIBLE",
                              {
                                animationStackIndices: [r.index],
                                missingTrackNames: r.issues.flatMap(
                                  (e) => e.boneNames ?? [],
                                ),
                                stackIssues: r.issues,
                              },
                            );
                          return r;
                        }
                        let r = e.filter((e) => e.compatible);
                        if (1 === r.length) return r[0];
                        if (r.length > 1)
                          throw new em(
                            "DIRECTOR_STAGE_FBX_IMPORT_STACK_SELECTION_REQUIRED",
                            { animationStackIndices: r.map((e) => e.index) },
                          );
                        throw new em(
                          "DIRECTOR_STAGE_FBX_IMPORT_STACK_INCOMPATIBLE",
                          {
                            animationStackIndices: e.map((e) => e.index),
                            missingTrackNames: e.flatMap((e) =>
                              e.issues.flatMap((e) => e.boneNames ?? []),
                            ),
                            stackIssues: e.flatMap((e) => e.issues),
                          },
                        );
                      })(c, t.animationStackIndex),
                      p = o.animations[g.index];
                    if (!p)
                      throw new em(
                        "DIRECTOR_STAGE_FBX_IMPORT_STACK_NOT_FOUND",
                        { animationStackIndices: [g.index] },
                      );
                    if (p.duration > 3600)
                      throw new em("DIRECTOR_STAGE_FBX_IMPORT_DURATION");
                    let f = ef(p),
                      b = m.filter((e) => {
                        let t = l[e];
                        return !t || !f.has(u(t.name));
                      });
                    if (b.length > 0)
                      throw new em(
                        "DIRECTOR_STAGE_FBX_IMPORT_STACK_INCOMPATIBLE",
                        {
                          animationStackIndices: [g.index],
                          missingTrackNames: b.map((e) => s[e].name),
                          stackIssues: g.issues,
                        },
                      );
                    for (let e of f.values()) eR(e, 4, !0);
                    try {
                      new d(l);
                    } catch (e) {
                      throw new em(
                        "DIRECTOR_STAGE_FBX_IMPORT_INVALID_DATA",
                        {},
                        { cause: e },
                      );
                    }
                    let x = (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : new Map(
                                  e.map((e) => [e, e.quaternion.clone()]),
                                ),
                          r = new Map(e.map((e, t) => [e, t])),
                          n = Array(e.length),
                          a = (o) => {
                            var s;
                            let l = n[o];
                            if (l) return l;
                            let m = e[o],
                              u =
                                (null == (s = t.get(m)) ? void 0 : s.clone()) ??
                                m.quaternion.clone(),
                              h =
                                m.parent instanceof i.$Kf
                                  ? r.get(m.parent)
                                  : void 0,
                              d = void 0 === h ? u : a(h).clone().multiply(u);
                            return ((n[o] = d.normalize()), d);
                          };
                        return e.map((e, t) => a(t).clone());
                      })(l),
                      R =
                        ((a = new Map(l.map((e, t) => [e, t]))),
                        l
                          .map((e, t) => {
                            let r =
                              e.parent instanceof i.$Kf
                                ? (a.get(e.parent) ?? -1)
                                : -1;
                            return `${t}:${r}`;
                          })
                          .join("|")),
                      w = eb(p);
                    w && eR(w, 3, !1);
                    let T = (function (e, t) {
                        let r = [0, t];
                        for (let n of e)
                          for (let e of n.times) {
                            if (
                              !Number.isFinite(e) ||
                              e < -1e-7 ||
                              e > t + 1e-7
                            )
                              throw Error(
                                "DIRECTOR_STAGE_FBX_IMPORT_INVALID_TIME",
                              );
                            r.push(i.cj9.clamp(e, 0, t));
                          }
                        let n = r
                          .sort((e, t) => e - t)
                          .filter(
                            (e, t, r) =>
                              0 === t || Math.abs(e - r[t - 1]) > 1e-7,
                          );
                        if (
                          n.length < 2 ||
                          n.length > 5e4 ||
                          n.length * m.length > 1e6
                        )
                          throw Error(
                            "DIRECTOR_STAGE_FBX_IMPORT_KEYFRAME_LIMIT",
                          );
                        return n;
                      })([...f.values(), ...(w ? [w] : [])], p.duration),
                      _ =
                        ((r = t),
                        {
                          animationStackIndex: g.index,
                          locomotionMode: r.locomotionMode ?? "embedded",
                          inPlaceRootRotation:
                            r.inPlaceRootRotation ?? "preserve",
                        }),
                      y =
                        ((n = _),
                        "in-place" === n.locomotionMode
                          ? (function () {
                              let e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              return {
                                mode: "in-place",
                                provenance: "converted",
                                conversion: {
                                  kind: "remove-ground-plane-translation",
                                  upAxis: ea(e.upAxis ?? en),
                                  rootRotation: e.rootRotation ?? "preserve",
                                },
                              };
                            })({
                              upAxis: en,
                              rootRotation: n.inPlaceRootRotation,
                            })
                          : ei),
                      v =
                        "in-place" === y.mode && "converted" === y.provenance
                          ? y.conversion
                          : void 0,
                      I = w ? eT(w, T[0] ?? 0) : void 0,
                      A = f.get(u(l[0].name)),
                      E = A ? ew(A, T[0] ?? 0) : void 0,
                      M = T.map((e) => {
                        let t = [];
                        for (let r of m) {
                          let n = l[r];
                          if (!n)
                            throw Error(
                              `DIRECTOR_STAGE_FBX_IMPORT_MISSING_BONE:${r}`,
                            );
                          let a = f.get(u(n.name));
                          if (!a)
                            throw Error(
                              `DIRECTOR_STAGE_FBX_IMPORT_MISSING_TRACK:${r}`,
                            );
                          let o = ew(a, e);
                          if (0 === r && v && E) {
                            let e = (function (e, t, r) {
                              if ("preserve" === r.rootRotation)
                                return { ...e };
                              let i = ea(r.upAxis),
                                n = eo(t),
                                a = el(eo(e), es(n)),
                                o = a.x * i.x + a.y * i.y + a.z * i.z,
                                s = eo({
                                  x: i.x * o,
                                  y: i.y * o,
                                  z: i.z * o,
                                  w: a.w,
                                }),
                                l = el(a, es(s));
                              return eo(el(l, n));
                            })(ey(o), ey(E), v);
                            o = new i.PTz(e.x, e.y, e.z, e.w);
                          }
                          let s = new i.O9p().setFromQuaternion(o, "XYZ");
                          t.push({
                            boneIndex: r,
                            rotation: { x: s.x * eu, y: s.y * eu, z: s.z * eu },
                            bindWorldRotation: ey(x[r]),
                          });
                        }
                        let r = w ? eT(w, e) : void 0;
                        if (r && I && v) {
                          var n;
                          let e,
                            t,
                            a,
                            o,
                            s,
                            l =
                              ((n = r),
                              (e = ea(v.upAxis)),
                              (t = n.x - I.x),
                              (a = n.y - I.y),
                              (o = n.z - I.z),
                              (s = t * e.x + a * e.y + o * e.z),
                              {
                                x: I.x + e.x * s,
                                y: I.y + e.y * s,
                                z: I.z + e.z * s,
                              });
                          r = new i.Pq0(l.x, l.y, l.z);
                        }
                        return (
                          (function (e, t) {
                            let r = t ? [t.x, t.y, t.z] : [];
                            for (let t of e)
                              r.push(
                                t.rotation.x,
                                t.rotation.y,
                                t.rotation.z,
                                t.bindWorldRotation.x,
                                t.bindWorldRotation.y,
                                t.bindWorldRotation.z,
                                t.bindWorldRotation.w,
                              );
                            if (!r.every(Number.isFinite))
                              throw Error(
                                "DIRECTOR_STAGE_FBX_IMPORT_NON_FINITE",
                              );
                          })(t, r),
                          {
                            timeSec: e,
                            pose: { signature: R, rotations: t },
                            ...(r
                              ? { rootTranslation: { x: r.x, y: r.y, z: r.z } }
                              : {}),
                          }
                        );
                      }),
                      O = t.now ?? new Date().toISOString();
                    return {
                      motion: {
                        id: t.id ?? `motion-${crypto.randomUUID()}`,
                        name: t.name.trim().slice(0, 80) || "Imported motion",
                        skeletonId: "mixamo-fbx-v1",
                        skeletonVersion: 1,
                        durationSec: p.duration,
                        loop: !1,
                        source: "imported",
                        transferMode: "direct-local",
                        sourceBindPose: l.map((e) => ({
                          position: {
                            x: e.position.x,
                            y: e.position.y,
                            z: e.position.z,
                          },
                          quaternion: ey(e.quaternion),
                          scale: { x: e.scale.x, y: e.scale.y, z: e.scale.z },
                        })),
                        locomotion: y,
                        keyframes: M,
                        createdAt: O,
                        updatedAt: O,
                      },
                      animationStacks: c,
                      inspection: h,
                      selection: _,
                      application: {
                        policy: "source-bind-retarget",
                        sourceSkeleton: "mixamo-fbx-v1",
                        targetRequirement: "mixamo-fbx-v1-compatible",
                      },
                      sourceBoneCount: l.length,
                      sourceTrackCount: p.tracks.length,
                      keyframeCount: M.length,
                      hadRootMotion: !!w,
                    };
                  })(r, e.data.options);
            ev.postMessage({ id: t, ok: !0, result: n });
          } catch (e) {
            ev.postMessage({
              id: t,
              ok: !1,
              error:
                e instanceof Error
                  ? e.message
                  : "DIRECTOR_STAGE_FBX_IMPORT_FAILED",
              ...(e instanceof em
                ? { diagnostic: { code: e.code, details: e.details } }
                : {}),
            });
          }
        });
      },
    },
    o = {};
  function s(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var r = (o[e] = { exports: {} });
    return (a[e].call(r.exports, r, r.exports, s), r.exports);
  }
  ((s.m = a),
    (s.x = () => {
      var e = s.O(void 0, ["8874", "8810", "6385", "1418"], () => s(78952));
      return s.O(e);
    }),
    (s.d = (e, t, r) => {
      var i = (t, r) => {
        for (var i in t)
          s.o(t, i) &&
            !s.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, [r]: t[i] });
      };
      (i(t, "get"), i(r, "value"));
    }),
    (s.f = {}),
    (s.e = (e) =>
      Promise.all(Object.keys(s.f).reduce((t, r) => (s.f[r](e, t), t), []))),
    (s.u = (e) =>
      8874 === e
        ? "static/js/lib-polyfill.1697c62767.js"
        : 6385 === e
          ? "static/js/6385.5389ba6bcd.js"
          : "static/js/async/" +
            e +
            "." +
            { 1418: "6c088630ab", 8810: "524e40c53a" }[e] +
            ".js"),
    (s.miniCssF = (e) => "" + e + ".css"),
    (s.g = (() => {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = []),
    (s.O = (t, r, i, n) => {
      if (r) {
        n = n || 0;
        for (var a = e.length; a > 0 && e[a - 1][2] > n; a--) e[a] = e[a - 1];
        e[a] = [r, i, n];
        return;
      }
      for (var o = 1 / 0, a = 0; a < e.length; a++) {
        for (var [r, i, n] = e[a], l = !0, m = 0; m < r.length; m++)
          (!1 & n || o >= n) && Object.keys(s.O).every((e) => s.O[e](r[m]))
            ? r.splice(m--, 1)
            : ((l = !1), n < o && (o = n));
        if (l) {
          e.splice(a--, 1);
          var u = i();
          void 0 !== u && (t = u);
        }
      }
      return t;
    }),
    (s.p =
      "//lf3-lv-buz.\u0076labstatic.com/obj/image-lvweb-buz/ies/lvweb/octo_web/"),
    (s.j = "9513"),
    (t = s.x),
    (s.x = () => Promise.all([8874, 8810, 6385, 1418].map(s.e, s)).then(t)),
    (r = { 9513: 1 }),
    (n = (i = globalThis.__LOADABLE_LOADED_CHUNKS__ =
      globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push.bind(i)),
    (i.push = (e) => {
      var [t, i, a] = e;
      for (var o in i) s.o(i, o) && (s.m[o] = i[o]);
      for (a && a(s); t.length; ) r[t.pop()] = 1;
      n(e);
    }),
    (s.f.i = (e, t) => {
      r[e] || importScripts(s.p + s.u(e));
    }),
    s.x());
})();
