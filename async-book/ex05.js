const infiniteIterator = [];
infiniteIterator[Symbol.iterator] = function () {
  let i = 0;
  return {
    next() {
      return {
        value: i++,
        done: false,
      }
    }
  }
}

console.log([...infiniteIterator]);
