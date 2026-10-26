import r from "oa";
import n from "qa";
import i from "z8";
import s from "ED";
import o from "at";
import l from "K4";
import c from "rGr";
import d from "gfi";
import u from "bk";
import * as m from "./module-MKA.js";
import { I } from "./module-MnU_2.js";
import { E } from "./module-q9.js";
import b from "bT";
import { V } from "./module-EwT.js";
import { L } from "./module-qBU.js";
import * as y from "./module-T9C_2.js";
import { N as N_1 } from "./module-WEs.js";
const h = s.PA(function (e) {
  const { resource } = e;
  const a = n._(e, ["resource"]);
  return i.jsx(I, {
    children: i.jsx(
      m.i,
      u._(r._({}, a), {
        url: resource.url,
        duration: resource.duration,
      }),
    ),
  });
});
const v = s.PA(function (e) {
  const { resource } = e;
  const a = n._(e, ["resource"]);
  return i.jsx(I, {
    children: i.jsx(
      E,
      u._(r._({}, a), {
        url: resource.url,
      }),
    ),
  });
});
const _ = s.PA(function (e) {
  let t;
  const { resource } = e;
  const s = n._(e, ["resource"]);
  const { resolutionUrlMap, cacheKey } =
    (t = resource.remoteExtraInfo) != null ? t : {};
  b.useEffect(() => void resource.resolveMetadata(), [resource]);
  return i.jsx(I, {
    children: i.jsx(
      V,
      u._(r._({}, s), {
        url: resource.url,
        width: resource.width,
        height: resource.height,
        resolutionUrlMap,
        cacheKey,
      }),
    ),
  });
});
const w = s.PA(function (e) {
  const { resource } = e;
  const a = n._(e, ["resource"]);
  return i.jsx(I, {
    children: i.jsx(
      L,
      u._(r._({}, a), {
        url: resource.url,
      }),
    ),
  });
});
const k = s.PA(function (e) {
  const { resource } = e;
  const a = n._(e, ["resource"]);
  return i.jsx(I, {
    children: i.jsx(
      y.u,
      u._(r._({}, a), {
        url: resource.url,
      }),
    ),
  });
});
const N = s.PA(function (e) {
  const { resource } = e;
  const a = n._(e, ["resource"]);
  return i.jsx(I, {
    children: i.jsx(
      N_1,
      u._(r._({}, a), {
        url: resource.url,
        coverUrl: resource.coverUrl,
        width: resource.width,
        height: resource.height,
        duration: resource.duration,
      }),
    ),
  });
});
export var W = s.PA(function (e) {
  const { resource } = e;
  const a = n._(e, ["resource"]);
  if (resource instanceof o.Vl) {
    return i.jsx(
      _,
      r._(
        {
          resource,
        },
        a,
      ),
    );
  }
  if (resource instanceof l.p) {
    return i.jsx(
      N,
      r._(
        {
          resource,
        },
        a,
      ),
    );
  }
  if (resource instanceof c.e) {
    return i.jsx(
      h,
      r._(
        {
          resource,
        },
        a,
      ),
    );
  }
  if (resource instanceof d.J9) {
    return i.jsx(
      w,
      r._(
        {
          resource,
        },
        a,
      ),
    );
  }
  if (resource instanceof d.m0) {
    return i.jsx(
      k,
      r._(
        {
          resource,
        },
        a,
      ),
    );
  }
  if (resource instanceof d.Av) {
    return i.jsx(
      v,
      r._(
        {
          resource,
        },
        a,
      ),
    );
  }
  return null;
});
