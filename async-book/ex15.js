const cont = document.querySelector('.container');
const controller = new AbortController();
const settings = { signal: controller.signal }

function sayHello() {
  cont.innerHTML = 'Hello';
}

function sayBye() {
  cont.innerHTML = 'Bye';
}

function press() {
  cont.style.backgroundColor = 'aqua';
}

function release() {
  cont.style.backgroundColor = 'transparent';
}

cont.addEventListener('mouseenter', sayHello, settings);
cont.addEventListener('mouseleave', sayBye, settings);
cont.addEventListener('mousedown', press, settings);
cont.addEventListener('mouseup', release, settings);

setTimeout(() => controller.abort(), 1000);
