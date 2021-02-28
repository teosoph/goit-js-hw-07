// button-switcher-2

const popup2 = document.querySelector('.popup2');
const open2 = document.querySelector('.open2');
popup2.style.display = 'none';

// switchBtn-2
const btnRef2 = document.querySelector('.button-switcher-2');
const switchFn2 = function () {
  if (popup2.style.display == 'none') popup2.style.display = 'block';
  else popup2.style.display = 'none';

  // switchBtn-2___change-text
  if (btnRef2.innerHTML == 'Show') {
    btnRef2.innerHTML = 'Hide';
  } else {
    btnRef2.innerHTML = 'Show';
  }
};
btnRef2.addEventListener('click', switchFn2);
