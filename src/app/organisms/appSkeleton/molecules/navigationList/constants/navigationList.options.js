const NAVIGATION_LIST_OPTION_KEYS = {
  displayName: 'displayName',
  id: 'displayName',
  href: 'redirect', 
};

const HOME = {
  [NAVIGATION_LIST_OPTION_KEYS.displayName]: 'Home',
  [NAVIGATION_LIST_OPTION_KEYS.id]: 'home',
  [NAVIGATION_LIST_OPTION_KEYS.href]: '#',
};

const PORTFOLIO = {
  [NAVIGATION_LIST_OPTION_KEYS.displayName]: 'Portfolio',
  [NAVIGATION_LIST_OPTION_KEYS.id]: 'portfolio',
  [NAVIGATION_LIST_OPTION_KEYS.href]: '#',
};

const ABOUT = {
  [NAVIGATION_LIST_OPTION_KEYS.displayName]: 'About',
  [NAVIGATION_LIST_OPTION_KEYS.id]: 'about',
  [NAVIGATION_LIST_OPTION_KEYS.href]: '#',
};

const NAVIGATION_LIST_OPTIONS = [HOME, PORTFOLIO, ABOUT];

export default NAVIGATION_LIST_OPTIONS;
