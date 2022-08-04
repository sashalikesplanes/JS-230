import fetch from 'node-fetch';

const srcArr = [
  'https://eloux.com/async_js/examples/1.json',
  'https://eloux.com/async_js/examples/2.json',
  'https://eloux.com/async_js/examples/3.json',
];

srcArr[Symbol.asyncIterator] = async function*() {
  for (const url of this) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Unable to retrieve url: ' + res.status);
    yield res.json();
  }
}

const loop = async () => {
    for await (const item of srcArr) {
      console.log(item);
    }
  };

loop();
