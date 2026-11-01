import {
  DG,
  E6,
  J,
  J_,
  Jk,
  Kk,
  NI,
  RM,
  Tt,
  Yk,
  kH,
  sm,
  v$,
} from "./module-wDU.js";
import { A2 } from "./module-s2v.js";
export function Rl(e, t) {
  return new e({
    type: "string",
    ...A2(t),
  });
}
export function Mu(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function tB(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Be(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function nA(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...A2(t),
  });
}
export function pY(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...A2(t),
  });
}
export function wA(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...A2(t),
  });
}
export function Fn(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function aC(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Dl(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function fs(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Bj(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Ct(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Pw(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function _z(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Ny(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function $O(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function Uy(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function gP(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function rt(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function cU(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function KB(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function rk(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...A2(t),
  });
}
export function G1(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...A2(t),
  });
}
export function db(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...A2(t),
  });
}
export function Kn(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...A2(t),
  });
}
export function f2(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...A2(t),
  });
}
export function F7(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...A2(t),
  });
}
export function LK(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...A2(t),
  });
}
export function _L(e, t) {
  return new e({
    type: "boolean",
    ...A2(t),
  });
}
export function jw(e, t) {
  return new e({
    type: "null",
    ...A2(t),
  });
}
export function em(e) {
  return new e({
    type: "unknown",
  });
}
export function G8(e, t) {
  return new e({
    type: "never",
    ...A2(t),
  });
}
export function Au(e, t) {
  return new sm({
    check: "less_than",
    ...A2(t),
    value: e,
    inclusive: false,
  });
}
export function Zm(e, t) {
  return new sm({
    check: "less_than",
    ...A2(t),
    value: e,
    inclusive: true,
  });
}
export function Tx(e, t) {
  return new J_({
    check: "greater_than",
    ...A2(t),
    value: e,
    inclusive: false,
  });
}
export function qm(e, t) {
  return new J_({
    check: "greater_than",
    ...A2(t),
    value: e,
    inclusive: true,
  });
}
export function Hi(e, t) {
  return new Jk({
    check: "multiple_of",
    ...A2(t),
    value: e,
  });
}
export function Eb(maximum, t) {
  return new Yk({
    check: "max_length",
    ...A2(t),
    maximum,
  });
}
export function m9(minimum, t) {
  return new Kk({
    check: "min_length",
    ...A2(t),
    minimum,
  });
}
export function YA(length, t) {
  return new RM({
    check: "length_equals",
    ...A2(t),
    length,
  });
}
export function Fk(pattern, t) {
  return new DG({
    check: "string_format",
    format: "regex",
    ...A2(t),
    pattern,
  });
}
export function hH(e) {
  return new NI({
    check: "string_format",
    format: "lowercase",
    ...A2(e),
  });
}
export function qF(e) {
  return new kH({
    check: "string_format",
    format: "uppercase",
    ...A2(e),
  });
}
export function dR(includes, t) {
  return new Tt({
    check: "string_format",
    format: "includes",
    ...A2(t),
    includes,
  });
}
export function $S(prefix, t) {
  return new J({
    check: "string_format",
    format: "starts_with",
    ...A2(t),
    prefix,
  });
}
export function ER(suffix, t) {
  return new E6({
    check: "string_format",
    format: "ends_with",
    ...A2(t),
    suffix,
  });
}
export function bS(tx) {
  return new v$({
    check: "overwrite",
    tx,
  });
}
export function lo(e) {
  return bS((t) => t.normalize(e));
}
export function WN() {
  return bS((e) => e.trim());
}
export function Il() {
  return bS((e) => e.toLowerCase());
}
export function xY() {
  return bS((e) => e.toUpperCase());
}
export function dZ(e, element, n) {
  return new e({
    type: "array",
    element,
    ...A2(n),
  });
}
export function FO(e, t, n) {
  let r = A2(n);
  r.abort ?? (r.abort = true);
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...r,
  });
}
export function fU(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...A2(n),
  });
}
