const srcArr = [
'https://eloux.com/async_js/examples/1.json',
'https://eloux.com/async_js/examples/2.json',
'https://eloux.com/async_js/examples/3.json',
];

srcArr[Symbol.asyncIterator] = function() {
  let i = 0;
  return {
    async next() {
      if (i === srcArr.length) return { done: true };

      const url = srcArr[i++];
      const res = await fetch(url);

      if (!res.ok) throw new Error(`Unable to retrieve url: ${url}`);

      return {
        value: await res.json(),
        done: false,
      }
    }
  }
}

const iter = srcArr[Symbol.asyncIterator]();
iter.next().then(data => console.log(data.value.firstName));
