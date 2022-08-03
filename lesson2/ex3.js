let interval;

function startCounting() {
  let count = 0;
  interval = setInterval(() => {
    console.log(count);
    count++;
  }, 500);
}

function stopCounting() {
  clearInterval(interval);
}

startCounting();
setTimeout(stopCounting, 2000);
