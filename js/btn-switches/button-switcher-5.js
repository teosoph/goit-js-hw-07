// button-switcher-5

const popup5 = document.querySelector('.popup5');
const open5 = document.querySelector('.open5');
popup5.style.display = 'none';

// switchBtn-5
const btnRef5 = document.querySelector('.button-switcher-5');
const switchFn5 = function () {
  if (popup5.style.display == 'none') popup5.style.display = 'block';
  else popup5.style.display = 'none';

  // switchBtn-5___change-text
  if (btnRef5.innerHTML == 'Show') {
    btnRef5.innerHTML = 'Hide';
  } else {
    btnRef5.innerHTML = 'Show';
  }
};
btnRef5.addEventListener('click', switchFn5);
