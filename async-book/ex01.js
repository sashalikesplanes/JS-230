// const promise = Promise.reject('error');
const promise = Promise.resolve(10)

promise.then(data => Promise.resolve(data*2))
       .then(data => console.log(data))
       .catch(error => console.error(error))
