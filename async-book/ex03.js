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
          }, 1000)
        })
      }
    }
  }
}

const iterator = collection[Symbol.asyncIterator]();
iterator.next().then(res => console.log(res));
iterator.next().then(res => console.log(res));
iterator.next().then(res => console.log(res));
iterator.next().then(res => console.log(res));
