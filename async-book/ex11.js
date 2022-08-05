import fetch from 'node-fetch';

const apis = [
 	'https://eloux.com/todos/1',
 	'https://jsonplaceholder.typicode.com/todos/1'
];

function any(promises) {
  let countOfPending = promises.length;
  return new Promise((resolve, rej) => {
    promises.forEach(promise => {
      promise.then((result) => {
        resolve(result);
      },
        (_) => {
          countOfPending--;
          if (countOfPending === 0) rej(new Error('aggregate custom error'));
        })
    })
  })
}

async function fetchData(api) {
  const res = await fetch(api);
  if (!res.ok || Math.random() > 0.5) return Promise.reject();
  return res.json();
}

async function getData() {
  return any([
    fetchData(apis[0]),
    fetchData(apis[1]),
  ]).catch(() => { return Promise.reject(new Error('Unable to access apis')) });
}

getData().then(res => console.log(res)).catch(e => console.error(e));
