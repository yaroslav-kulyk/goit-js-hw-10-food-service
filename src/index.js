import menu from './menu.json';
import { createMenuItemsMarkup } from './js/content';
import { setTheme, switchTheme } from './js/theme';

const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const menuRef = document.querySelector('ul.js-menu');

export { switchRef, menuRef, bodyRef };

menuRef.innerHTML = createMenuItemsMarkup(menu);

switchRef.addEventListener('change', switchTheme);

setTheme();

// function setTheme() {
//   if (!getTheme()) {
//     setLightTheme();
//   }

//   if (getTheme() === Theme.DARK) {
//     setDarkTheme();
//   }
// }

// function getTheme() {
//   return localStorage.getItem('theme');
// }

// function setLightTheme() {
//   bodyRef.classList.add(Theme.LIGHT);
//   bodyRef.classList.remove(Theme.DARK);
//   localStorage.setItem(THEME_KEY, Theme.LIGHT);
//   switchRef.removeAttribute('checked');
// }

// function setDarkTheme() {
//   bodyRef.classList.add(Theme.DARK);
//   bodyRef.classList.remove(Theme.LIGHT);
//   localStorage.setItem(THEME_KEY, Theme.DARK);
//   switchRef.setAttribute('checked', true);
// }

// function switchTheme() {
//   if (getTheme() === Theme.LIGHT) {
//     setDarkTheme();
//     return;
//   }

//   setLightTheme();
// }
