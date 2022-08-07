makeBold(elem, cb) {
  elem.style.fontWeight = 'bold';
  if (cb && typeof cb === 'function') cb(elem);
}
