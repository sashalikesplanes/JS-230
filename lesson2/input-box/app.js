document.addEventListener('DOMContentLoaded', () => {
  const textField = document.querySelector('.text-field');
  const content = document.querySelector('.content');
  let cursorIntervalId;
  let isIntervalSet = false;

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('text-field')) {
      event.target.classList.add('focused');
      if (!isIntervalSet) {
        cursorIntervalId = setInterval(() => textField.classList.toggle('cursor'), 500);
        isIntervalSet = true;
      }
    } else {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
      isIntervalSet = false;
      clearInterval(cursorIntervalId);
    }
  })

  document.addEventListener('keypress', (event) => {
    if (!textField.classList.contains('focused')) return;
    content.innerHTML += event.key;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && textField.classList.contains('focused')) {
      content.innerHTML = content.innerHTML.slice(0, content.innerHTML.length - 2);
    }
  })

});
