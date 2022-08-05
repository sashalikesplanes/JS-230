const p = new Promise(resolve => setTimeout(() => resolve('LS'), 2000));
p.then(result => console.log(result))

const p2 = new Promise((_, reject) => {
  setTimeout(() => reject('Error: Not LS'), 2000)
})
p2.catch(e => console.log(e))
