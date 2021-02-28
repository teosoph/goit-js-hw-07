// button-switcher-6

const popup6 = document.querySelector('.popup6');
const open6 = document.querySelector('.open6');
popup6.style.display = 'none';

// switchBtn-6
const btnRef6 = document.querySelector('.button-switcher-6');
const switchFn6 = function () {
  if (popup6.style.display == 'none') popup6.style.display = 'block';
  else popup6.style.display = 'none';

  // switchBtn-6___change-text
  if (btnRef6.innerHTML == 'Show') {
    btnRef6.innerHTML = 'Hide';
  } else {
    btnRef6.innerHTML = 'Show';
  }
};
btnRef6.addEventListener('click', switchFn6);
