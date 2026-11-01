import n from "g";
import i from "u";
import a from "i9";
import o from "r";
import s from "jA";
import A from "z3";
import c from "VV";
import u from "h";
import l from "Nt";
import { IteratorPrototype } from "ii";
import f from "K";
const g = l("toStringTag");
const i_Iterator = i.Iterator;
const forced =
  f ||
  !o(i_Iterator) ||
  i_Iterator.prototype !== IteratorPrototype ||
  !c(function () {
    i_Iterator({});
  });
const Iterator = function () {
  a(this, IteratorPrototype);
  if (s(this) === IteratorPrototype) {
    throw TypeError("Abstract class Iterator not directly constructable");
  }
};
if (!u(IteratorPrototype, g)) {
  A(IteratorPrototype, g, "Iterator");
}
if (
  forced ||
  !u(IteratorPrototype, "constructor") ||
  IteratorPrototype.constructor === Object
) {
  A(IteratorPrototype, "constructor", Iterator);
}
Iterator.prototype = IteratorPrototype;
n(
  {
    global: true,
    constructor: true,
    forced,
  },
  {
    Iterator,
  },
);
