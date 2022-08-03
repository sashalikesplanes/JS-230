const overallHeader = document.querySelector('body header nav').parentElement;
const body = document.querySelector('body');
const h1Header = document.querySelector('body main h1');
const images = document.querySelectorAll('figure img');
body.insertAdjacentElement('afterbegin', overallHeader);
overallHeader.insertAdjacentElement('afterbegin', h1Header);
const secondFigure = images[1].cloneNode(true);
const firstFigure = images[0].cloneNode(true);
images[0].insertAdjacentElement('beforebegin', secondFigure);
images[0].remove();
images[1].insertAdjacentElement('beforebegin', firstFigure);
images[1].remove();

const figures = document.querySelectorAll('figure');
const article = document.querySelector('main section article');
article.insertAdjacentElement('beforeend', figures[0]);
article.insertAdjacentElement('beforeend', figures[1]);

