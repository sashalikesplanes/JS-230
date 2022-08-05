const postIds = [1, 2, 3, 4];

console.time('promise end');
const promises = postIds.map(async (_) => {
  await new Promise(r => setTimeout(r, 1000));
});
(async () => {
  const posts = await Promise.all(promises)
console.timeEnd('promise end');
})()
