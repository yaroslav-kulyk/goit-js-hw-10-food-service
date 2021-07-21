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
