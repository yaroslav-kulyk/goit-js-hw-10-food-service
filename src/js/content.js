import menuItemsTpl from '../templates/menu-items.hbs';

export function createMenuItemsMarkup(array) {
  return menuItemsTpl(array);
}
