const promA = new Promise((_, rej) => setTimeout(() => rej('Error'), 1000));
const promB = new Promise(res => setTimeout(() => res('Response'), 2000));

(async () => {
  console.log('race');
  await Promise.race([promA, promB])
  .then(res => console.log(res))
  .catch(e => console.error(e))

  console.log('any');
  await Promise.any([promA, promB])
  .then(res => console.log(res))
  .catch(e => console.error(e))
})();
