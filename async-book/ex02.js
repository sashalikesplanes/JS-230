const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.iterator]() {
    let i = 0;
    const keys = Object.keys(this);
    return {
      next: () => {
        return {
          value: this[keys[i++]],
          done: i > keys.length,
        }
      }
    }
  }
}

for (const value of collection) {
  console.log(value);
}
