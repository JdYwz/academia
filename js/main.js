document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menus_icon');
  const header = document.querySelector('.header_wrap');
  const closeMenu = () => {
    header.classList.remove('menus-open');
    button.setAttribute('aria-expanded', 'false');
  };
  button.addEventListener('click', () => {
    const open = header.classList.toggle('menus-open');
    button.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target) || event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      button.focus();
    }
  });
});
