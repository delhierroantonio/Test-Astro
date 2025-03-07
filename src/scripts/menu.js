const $toggle = document.getElementById('toggle');
const $menu = document.getElementById('menu');

document.querySelector('.toggle')?.addEventListener('click', () => {
  document.querySelector('.menu')?.classList.toggle('hidden');
  console.log('YAY');
});