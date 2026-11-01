(() => {
  "use strict";
  var e,
    i,
    t,
    n,
    r,
    a = {
      28790(e, i, t) {
        var n = t(68975);
        let r = self;
        r.addEventListener("message", (e) => {
          let { id: i, motion: t } = e.data;
          try {
            let e = (0, n.ZA)(t);
            r.postMessage(
              { id: i, ok: !0, ...e },
              { transfer: [e.bytes.buffer] },
            );
          } catch (e) {
            r.postMessage({
              id: i,
              ok: !1,
              error:
                e instanceof Error
                  ? e.message
                  : "DIRECTOR_STAGE_FBX_EXPORT_FAILED",
            });
          }
        });
      },
      55757(e, i, t) {
        var n = t(13882),
          r = t(82873),
          a = t(23526);
        class o extends n.YJl {
          get bones() {
            return this.skeleton.bones;
          }
          legLength() {
            let e =
              ["Left", "Right"].reduce((e, i) => {
                let [t, r, a] = ["UpLeg", "Leg", "Foot"].map((e) =>
                  this.skeleton
                    .getBoneByName(`mixamorig${i}${e}`)
                    .getWorldPosition(new n.Pq0()),
                );
                return e + t.distanceTo(r) + r.distanceTo(a);
              }, 0) / 2;
            if (!Number.isFinite(e) || e <= 1e-6)
              throw Error("Motion rig has no valid reference leg length");
            return e;
          }
          constructor(e) {
            super();
            const i = e.map((e, i) => {
                let t = new n.$Kf();
                return (
                  (t.name = a.c2[i].name),
                  t.position.copy(e.position),
                  t.quaternion.copy(e.quaternion),
                  t.scale.copy(e.scale),
                  t
                );
              }),
              t = new Map(i.map((e) => [e.name, e]));
            (a.c2.forEach((e, n) => {
              (e.parentName ? t.get(e.parentName) : this).add(i[n]);
            }),
              this.updateMatrixWorld(!0),
              (this.skeleton = new n.EAD(i)));
          }
        }
        class m {
          prepareClip(e, i, t) {
            if (
              !Number.isFinite(i.duration) ||
              i.duration <= 0 ||
              !i.tracks.length
            )
              throw Error("Motion retargeting requires a non-empty clip");
            let m = new Set([0, i.duration]);
            for (let e of i.tracks) {
              if (![...e.times, ...e.values].every(Number.isFinite))
                throw Error(`Invalid motion track: ${e.name}`);
              for (let t of e.times) t >= 0 && t <= i.duration && m.add(t);
            }
            let g = new o(e.reference.bones),
              l = new o(this.reference.bones),
              d = this.legLength / e.legLength,
              s = {};
            l.bones.forEach((e, i) => {
              let t = g.bones[i].getWorldQuaternion(new n.PTz()),
                r = e.getWorldQuaternion(new n.PTz());
              s[e.name] = new n.kn4().makeRotationFromQuaternion(
                t.invert().multiply(r),
              );
            });
            let p = {
                hip: a.c2["0"].name,
                getBoneName: (e) => e.name,
                preserveBonePositions: !0,
                localOffsets: s,
                scale: d,
                hipPosition: l.bones[0].position
                  .clone()
                  .divideScalar(d)
                  .sub(g.bones[0].position),
              },
              h = [...m].sort((e, i) => e - i),
              f = [],
              u = l.bones.map(() => []),
              c = new n.Iw4(g),
              x = (0, a.bu)(i, g.bones),
              L = c.clipAction(x);
            (L.setLoop(2200, 1), (L.clampWhenFinished = !0), L.play());
            try {
              for (let e of h)
                (c.setTime(e),
                  g.updateMatrixWorld(!0),
                  (0, r.NM)(l, g, p),
                  f.push(...l.bones[0].position),
                  l.bones.forEach((e, i) => u[i].push(...e.quaternion)));
            } finally {
              (L.stop(), c.uncacheRoot(g));
            }
            let H = [
              new n.RiT(`${t[0].uuid}.position`, h, f),
              ...t.map((e, i) => new n.MBL(`${e.uuid}.quaternion`, h, u[i])),
            ];
            return {
              clip: new n.tz3(i.name, i.duration, H, i.blendMode),
              legScale: d,
            };
          }
          constructor(e) {
            if (e.length !== a.c2.length)
              throw Error(
                "Motion retargeting requires the complete FBX bone hierarchy",
              );
            (e.forEach((i, t) => {
              let n = a.c2[t],
                r = a.c2.findIndex((e) => e.name === n.parentName);
              if (
                (0, a.Ul)(i.name) !== (0, a.Ul)(n.name) ||
                (r >= 0 && i.parent !== e[r]) ||
                ![...i.position, ...i.quaternion, ...i.scale].every(
                  Number.isFinite,
                ) ||
                0 >= Math.min(...i.scale)
              )
                throw Error(`Invalid motion bind bone: ${n.name}`);
            }),
              (this.reference = new o(e)),
              (this.legLength = this.reference.legLength()));
          }
        }
        t.d(i, { aG: () => m });
      },
      23526(e, i, t) {
        var n = t(13882);
        let r = function (e) {
            for (
              var i = arguments.length, t = Array(i > 1 ? i - 1 : 0), n = 1;
              n < i;
              n++
            )
              t[n - 1] = arguments[n];
            let r = e;
            return t.map((e) => {
              let i = { name: e, parentName: r };
              return ((r = e), i);
            });
          },
          a = [
            { name: "mixamorigHips" },
            ...r(
              "mixamorigHips",
              "mixamorigSpine",
              "mixamorigSpine1",
              "mixamorigSpine2",
              "mixamorigNeck",
              "mixamorigHead",
              "mixamorigHeadTop_End",
            ),
            { name: "mixamorigLeftShoulder", parentName: "mixamorigSpine2" },
            ...r(
              "mixamorigLeftShoulder",
              "mixamorigLeftArm",
              "mixamorigLeftForeArm",
              "mixamorigLeftHand",
            ),
            ...r(
              "mixamorigLeftHand",
              "mixamorigLeftHandThumb1",
              "mixamorigLeftHandThumb2",
              "mixamorigLeftHandThumb3",
              "mixamorigLeftHandThumb4",
            ),
            ...r(
              "mixamorigLeftHand",
              "mixamorigLeftHandIndex1",
              "mixamorigLeftHandIndex2",
              "mixamorigLeftHandIndex3",
              "mixamorigLeftHandIndex4",
            ),
            ...r(
              "mixamorigLeftHand",
              "mixamorigLeftHandMiddle1",
              "mixamorigLeftHandMiddle2",
              "mixamorigLeftHandMiddle3",
              "mixamorigLeftHandMiddle4",
            ),
            ...r(
              "mixamorigLeftHand",
              "mixamorigLeftHandRing1",
              "mixamorigLeftHandRing2",
              "mixamorigLeftHandRing3",
              "mixamorigLeftHandRing4",
            ),
            ...r(
              "mixamorigLeftHand",
              "mixamorigLeftHandPinky1",
              "mixamorigLeftHandPinky2",
              "mixamorigLeftHandPinky3",
              "mixamorigLeftHandPinky4",
            ),
            { name: "mixamorigRightShoulder", parentName: "mixamorigSpine2" },
            ...r(
              "mixamorigRightShoulder",
              "mixamorigRightArm",
              "mixamorigRightForeArm",
              "mixamorigRightHand",
            ),
            ...r(
              "mixamorigRightHand",
              "mixamorigRightHandThumb1",
              "mixamorigRightHandThumb2",
              "mixamorigRightHandThumb3",
              "mixamorigRightHandThumb4",
            ),
            ...r(
              "mixamorigRightHand",
              "mixamorigRightHandIndex1",
              "mixamorigRightHandIndex2",
              "mixamorigRightHandIndex3",
              "mixamorigRightHandIndex4",
            ),
            ...r(
              "mixamorigRightHand",
              "mixamorigRightHandMiddle1",
              "mixamorigRightHandMiddle2",
              "mixamorigRightHandMiddle3",
              "mixamorigRightHandMiddle4",
            ),
            ...r(
              "mixamorigRightHand",
              "mixamorigRightHandRing1",
              "mixamorigRightHandRing2",
              "mixamorigRightHandRing3",
              "mixamorigRightHandRing4",
            ),
            ...r(
              "mixamorigRightHand",
              "mixamorigRightHandPinky1",
              "mixamorigRightHandPinky2",
              "mixamorigRightHandPinky3",
              "mixamorigRightHandPinky4",
            ),
            ...r(
              "mixamorigHips",
              "mixamorigLeftUpLeg",
              "mixamorigLeftLeg",
              "mixamorigLeftFoot",
              "mixamorigLeftToeBase",
              "mixamorigLeftToe_End",
            ),
            ...r(
              "mixamorigHips",
              "mixamorigRightUpLeg",
              "mixamorigRightLeg",
              "mixamorigRightFoot",
              "mixamorigRightToeBase",
              "mixamorigRightToe_End",
            ),
          ],
          o = Object.freeze({
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
        (Object.values(o),
          o.hips,
          o.chest,
          o.head,
          o.leftForeArm,
          o.leftHand,
          o.rightForeArm,
          o.rightHand,
          o.leftUpperLeg,
          o.leftLeg,
          o.leftFoot,
          o.rightUpperLeg,
          o.rightLeg,
          o.rightFoot);
        let m = Object.freeze(
          a.flatMap((e, i) =>
            e.name.endsWith("_End") ||
            /Hand(?:Thumb|Index|Middle|Ring|Pinky)4$/.test(e.name)
              ? []
              : [i],
          ),
        );
        function g(e) {
          return e.replace(/[^a-z0-9]/gi, "").toLowerCase();
        }
        function l(e, i) {
          let t = new Map(i.map((e) => [g(e.name), e])),
            r = e.tracks.map((e) => {
              let i = e.name.lastIndexOf(".");
              if (i <= 0) return e.clone();
              let n = t.get(g(e.name.slice(0, i))),
                r = e.clone();
              return (n && (r.name = `${n.uuid}${e.name.slice(i)}`), r);
            });
          return new n.tz3(e.name, e.duration, r, e.blendMode);
        }
        function d(e) {
          let i = new Map(e.map((e, i) => [e, i]));
          return e
            .map((e, t) => {
              let r = e.parent instanceof n.$Kf ? (i.get(e.parent) ?? -1) : -1;
              return `${t}:${r}`;
            })
            .join("|");
        }
        function s(e) {
          let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new Map(e.map((e) => [e, e.quaternion.clone()])),
            t = new Map(e.map((e, i) => [e, i])),
            r = Array(e.length),
            a = (o) => {
              var m;
              let g = r[o];
              if (g) return g;
              let l = e[o],
                d =
                  (null == (m = i.get(l)) ? void 0 : m.clone()) ??
                  l.quaternion.clone(),
                s = l.parent instanceof n.$Kf ? t.get(l.parent) : void 0,
                p = void 0 === s ? d : a(s).clone().multiply(d);
              return ((r[o] = p.normalize()), p);
            };
          return e.map((e, i) => a(i).clone());
        }
        function p(e, i, t) {
          var n;
          return (
            (n = i
              .clone()
              .multiply(e)
              .multiply(i.clone().invert())
              .normalize()),
            t.clone().invert().multiply(n).multiply(t).normalize()
          );
        }
        t.d(
          i,
          { Qq: () => p, SC: () => d, Ul: () => g, aY: () => s, bu: () => l },
          { c2: a, h4: m },
        );
      },
      92774(e, i, t) {
        var n = t(13882),
          r = t(23526),
          a = t(55757);
        function o(e) {
          if (
            !e.sourceBindPose ||
            "direct-local" !== e.transferMode ||
            e.sourceBindPose.length !== r.c2.length
          )
            throw Error("Motion has no complete FBX bind reference");
          let i = e.sourceBindPose.map((e, i) => {
              let t = new n.$Kf();
              return (
                (t.name = r.c2[i].name),
                t.position.set(e.position.x, e.position.y, e.position.z),
                t.quaternion.set(
                  e.quaternion.x,
                  e.quaternion.y,
                  e.quaternion.z,
                  e.quaternion.w,
                ),
                t.scale.set(e.scale.x, e.scale.y, e.scale.z),
                t
              );
            }),
            t = new Map(i.map((e) => [e.name, e]));
          r.c2.forEach((e, n) => {
            e.parentName && t.get(e.parentName).add(i[n]);
          });
          let o = new a.aG(i),
            m = e.keyframes.map((e) => e.timeSec),
            g = e.keyframes.map(
              (e) => new Map(e.pose.rotations.map((e) => [e.boneIndex, e])),
            ),
            l = r.h4.map((e) => {
              let t = g.flatMap((i) => {
                let t = i.get(e);
                if (!t) throw Error(`Motion has no FBX rotation: ${e}`);
                return new n.PTz()
                  .setFromEuler(
                    new n.O9p(
                      n.cj9.degToRad(t.rotation.x),
                      n.cj9.degToRad(t.rotation.y),
                      n.cj9.degToRad(t.rotation.z),
                      "XYZ",
                    ),
                  )
                  .toArray();
              });
              return new n.MBL(`${i[e].name}.quaternion`, m, t);
            }),
            d = e.sourceBindPose[0].position;
          return (
            l.unshift(
              new n.RiT(
                `${i[0].name}.position`,
                m,
                e.keyframes.flatMap((e) => {
                  let i = e.rootTranslation ?? d;
                  return [i.x, i.y, i.z];
                }),
              ),
            ),
            { retargeter: o, clip: new n.tz3(e.id, e.durationSec, l) }
          );
        }
        t.d(i, { Zt: () => o });
      },
    },
    o = {};
  function m(e) {
    var i = o[e];
    if (void 0 !== i) return i.exports;
    var t = (o[e] = { exports: {} });
    return (a[e](t, t.exports, m), t.exports);
  }
  ((m.m = a),
    (m.x = () => {
      var e = m.O(void 0, ["4906", "258", "8964"], () => m(28790));
      return m.O(e);
    }),
    (m.d = (e, i, t) => {
      var n = (i, t) => {
        for (var n in i)
          m.o(i, n) &&
            !m.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, [t]: i[n] });
      };
      (n(i, "get"), n(t, "value"));
    }),
    (m.f = {}),
    (m.e = (e) =>
      Promise.all(Object.keys(m.f).reduce((i, t) => (m.f[t](e, i), i), []))),
    (m.u = (e) =>
      "static/js/async/" +
      e +
      "." +
      { 258: "ee276404a2", 4906: "8f8d167e3b", 8964: "ee9d49d4a5" }[e] +
      ".js"),
    (m.miniCssF = (e) => "" + e + ".css"),
    (m.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i)),
    (e = []),
    (m.O = (i, t, n, r) => {
      if (t) {
        r = r || 0;
        for (var a = e.length; a > 0 && e[a - 1][2] > r; a--) e[a] = e[a - 1];
        e[a] = [t, n, r];
        return;
      }
      for (var o = 1 / 0, a = 0; a < e.length; a++) {
        for (var [t, n, r] = e[a], g = !0, l = 0; l < t.length; l++)
          (!1 & r || o >= r) && Object.keys(m.O).every((e) => m.O[e](t[l]))
            ? t.splice(l--, 1)
            : ((g = !1), r < o && (o = r));
        if (g) {
          e.splice(a--, 1);
          var d = n();
          void 0 !== d && (i = d);
        }
      }
      return i;
    }),
    (m.p =
      "//lf3-lv-buz.\u0076labstatic.com/obj/image-lvweb-buz/ies/lvweb/octo_web/"),
    (i = m.x),
    (m.x = () => Promise.all([4906, 258, 8964].map(m.e, m)).then(i)),
    (t = { 7278: 1 }),
    (r = (n = globalThis.__LOADABLE_LOADED_CHUNKS__ =
      globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push.bind(n)),
    (n.push = (e) => {
      var [i, n, a] = e;
      for (var o in n) m.o(n, o) && (m.m[o] = n[o]);
      for (a && a(m); i.length; ) t[i.pop()] = 1;
      r(e);
    }),
    (m.f.i = (e, i) => {
      t[e] || importScripts(m.p + m.u(e));
    }),
    m.x());
})();
