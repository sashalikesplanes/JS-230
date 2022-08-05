import fetch, { AbortError } from "node-fetch";

const controller = new AbortController();
const signal = controller.signal;


fetch('https://eloux.com/todos/1', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {
    if (error instanceof AbortError) console.log('aborted succesfully')
    else {
      console.error('Fetch failed!!!!!!!!!!!', error);
    }
  });

/* function fetchWithTimeout(url, settings, timeoutMs) {
  if (!timeoutMs) return fetch(url, settings);
  if (isNaN(Number(timeoutMs))) throw new TypeError('Non numeric timeout value');

  const controller = new AbortController();
  settings.signal = controller.signal;
  setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, settings);
}

fetchWithTimeout('https://eloux.com/todos/1', {}, 1000); */

