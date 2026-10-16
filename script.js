const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  let count = 0;
  projects.forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++; });
  document.querySelector('.filter-status').textContent = `${count} projetos exibidos`;
}));
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.header nav');
menuButton.addEventListener('click', () => { const expanded = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(expanded)); menuButton.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu'); navigation.classList.toggle('is-open', expanded); });
const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); navigation.classList.remove('is-open'); };
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
