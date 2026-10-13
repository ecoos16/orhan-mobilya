const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-menu');
const menuPanel = document.querySelector('#menu-panel');
const mobileLayout = window.matchMedia('(max-width: 1000px)');
const contactDetails = document.querySelector('.header-reach');
document.addEventListener('click', event => {
  if (!contactDetails.contains(event.target)) contactDetails.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && contactDetails.open) {
    contactDetails.open = false;
    contactDetails.querySelector('summary').focus();
  }
});
contactDetails.addEventListener('click', event => {
  if (event.target.closest('a')) contactDetails.open = false;
});

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Menüyü aç');
  menuPanel.classList.remove('is-open');
  contactDetails.open = false;
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  menuPanel.classList.toggle('is-open', open);
});
menuPanel.addEventListener('click', event => {
  if (event.target.closest('a')) {
    closeMenu();
    if (mobileLayout.matches) menuButton.focus();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('header')) closeMenu();
});
mobileLayout.addEventListener('change', () => {
  if (mobileLayout.matches && menuPanel.contains(document.activeElement)) menuButton.focus();
  if (!mobileLayout.matches && document.activeElement === menuButton) navigation.querySelector('a').focus();
  closeMenu();
});

const dialog = document.querySelector('#photo-dialog');
const largePhoto = document.querySelector('#large-photo');
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    largePhoto.src = button.dataset.photo;
    largePhoto.alt = button.dataset.title;
    document.querySelector('#photo-title').textContent = button.dataset.title;
    dialog.showModal();
    document.body.classList.add('photo-open');
  });
});
document.querySelector('.close').addEventListener('click', () => {
  dialog.close();
  document.body.classList.remove('photo-open');
});
dialog.addEventListener('close', () => {
  if (!dialog.open) document.body.classList.remove('photo-open');
});
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
});
