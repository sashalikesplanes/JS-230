const proms = [
  Promise.reject('Error #1'),
  Promise.reject('Error #2'),
  //new Promise(r => setTimeout(() => r('Yes'), 1000))
];

Promise.any(proms)
  .then(res => console.log(res))
  .catch(error => console.error(error.errors));
