const col = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.iterator]: function*() {
    for (let key in this) {
      yield(this[key]);
    }
  }
}

for (item of col) {
  console.log(item);
}
