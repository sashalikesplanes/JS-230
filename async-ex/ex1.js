function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  // create interval for logging the times
  const nCallbacks = callbacks.length;
  let counter = 1;
  const timer = setInterval(() => {
    console.log(counter, 1000 * counter++);
    if (counter > nCallbacks * 2) clearInterval(timer);
  }, 1000);
  callbacks.forEach(cb => {
    setTimeout(cb, Math.ceil(Math.random() * nCallbacks * 2) * 1000);
  })
  // create a timeout for each callback
}

randomizer(callback1, callback2, callback3);
// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
