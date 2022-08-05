import fetch from 'node-fetch';

function fetchData() {
  const timeOutMs = 50;
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1');

  const failure = new Promise((_, reject) => setTimeout(() => reject(`Request timed out after ${timeOutMs} ms`), timeOutMs));
  return Promise.race([data, failure])
}

fetchData()
  .then(async (response) => {
    const body = await response.json();
    console.log(body);
  })
  .catch(error => console.error(error));
