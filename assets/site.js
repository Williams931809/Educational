const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const header = document.querySelector('.header-inner');
const mobile = window.matchMedia('(max-width: 710px)');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.hidden = mobile.matches;
}

header.setAttribute('data-menu-ready', '');
toggle.hidden = false;
closeMenu();
mobile.addEventListener('change', closeMenu);

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu();
  } else {
    navigation.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
