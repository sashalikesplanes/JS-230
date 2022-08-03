function afterNSeconds(callback, durationSeconds) {
  setTimeout(callback, durationSeconds * 1000);
}

afterNSeconds(() => console.log('after 1 second'), 1);
