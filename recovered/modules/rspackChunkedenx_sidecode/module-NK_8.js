export default function (iterator) {
  return {
    iterator,
    next: iterator.next,
    done: false,
  };
}
