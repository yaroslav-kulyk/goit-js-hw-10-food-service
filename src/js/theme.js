import { switchRef, bodyRef } from '../index';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';

export function setTheme() {
  if (!getTheme()) {
    setLightTheme();
    return;
  }

  if (getTheme() === Theme.DARK) {
    setDarkTheme();
    return;
  }

  setLightTheme();
}

function getTheme() {
  return localStorage.getItem('theme');
}

function setLightTheme() {
  bodyRef.classList.add(Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
  localStorage.setItem(THEME_KEY, Theme.LIGHT);
  switchRef.removeAttribute('checked');
}

function setDarkTheme() {
  bodyRef.classList.add(Theme.DARK);
  bodyRef.classList.remove(Theme.LIGHT);
  localStorage.setItem(THEME_KEY, Theme.DARK);
  switchRef.setAttribute('checked', true);
}

export function switchTheme() {
  if (getTheme() === Theme.LIGHT) {
    setDarkTheme();
    return;
  }

  setLightTheme();
}
