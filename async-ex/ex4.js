let currentHighlight = undefined;
document.addEventListener('click', (e) => {
  if (currentHighlight) currentHighlight.classList.remove('highlight');

  console.log(e.target.tagName);
  if (e.target.tagName === 'A') {
    const linkDestinationId = e.target.href.split('#')[1];
    currentHighlight = document.getElementById(linkDestinationId);
  } else if (e.target.tagName === 'ARTICLE') {
    currentHighlight = e.target;
  } else if (e.target.parentElement.tagName === 'ARTICLE') {
    currentHighlight = e.target.parentElement;
  }

  currentHighlight.classList.add('highlight');
})
