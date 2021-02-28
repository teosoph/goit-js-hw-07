// button-switcher-3

const popup3 = document.querySelector('.popup3');
const open3 = document.querySelector('.open3');
popup3.style.display = 'none';

// switchBtn-3
const btnRef3 = document.querySelector('.button-switcher-3');
const switchFn3 = function () {
  if (popup3.style.display == 'none') popup3.style.display = 'block';
  else popup3.style.display = 'none';

  // switchBtn-3___change-text
  if (btnRef3.innerHTML == 'Show') {
    btnRef3.innerHTML = 'Hide';
  } else {
    btnRef3.innerHTML = 'Show';
  }
};
btnRef3.addEventListener('click', switchFn3);
