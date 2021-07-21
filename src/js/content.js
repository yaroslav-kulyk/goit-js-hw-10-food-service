import menuItemsTpl from '../templates/menu-items.hbs';

export function createMenuItemsMarkup(menuItemsData) {
  return menuItemsTpl(menuItemsData);
}
