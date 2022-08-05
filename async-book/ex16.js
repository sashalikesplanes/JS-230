const loadBtn = document.querySelector('.loadBtn');
const abortBtn = document.querySelector('.abortBtn');
const gallery = document.querySelector('.gallery');
const result = document.querySelector('.result');

const urls = [
  `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Zebrasoma_flavescens_Luc_Viatour.jpg/320px-Zebrasoma_flavescens_Luc_Viatour.jpg`,
  `https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Domestic_goat_kid_in_capeweed.jpg/320px-Domestic_goat_kid_in_capeweed.jpg`
  `https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Por_do_Sol_em_Baixa_Grande.jpg/320px-Por_do_Sol_em_Baixa_Grande.jpg`,
]

let controller;

abortBtn.addEventListener('click', () => {
  console.log('trying to abort');
  controller.abort();
});
loadBtn.addEventListener('click', async () => {
  controller = new AbortController();

  console.log('click on load')
  loadBtn.disabled = true;
  abortBtn.disabled = false;
  result.innerHTML = 'Loading...';

  const tasks = urls.map(url => {
    fetch(url, {signal: controller.signal})
      .then(response => {
        return response.blob();
      })
      .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        gallery.appendChild(img);
      })
  });
  try {
    await Promise.all(tasks);

    result.innerHTML = '';
  } catch (e) {
    if (e.name === 'AbortError') {
      result.innerHTML = 'Sucesful abortion';
    } else {
      result.innerHTML = 'An error occured';
      console.error(e);
    }
  }

  loadBtn.disabled = false;
  abortBtn.disabled = true;
});
