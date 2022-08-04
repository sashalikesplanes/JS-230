const collection = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.asyncIterator]() {
    const keys = Object.keys(this);
    let i = 0;
    return {
      next: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value: this[keys[i++]],
              done: i > keys.length
            })
          }, (2 - i) * 1000)
        })
      }
    }
  }
}

async function loop() {
  for await (const item of collection) {
    console.log(item);
  }
}

loop()
