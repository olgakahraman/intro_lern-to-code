const nav = document.querySelector('nav ul');

const themeLi = document.createElement('li');
themeLi.classList.add('theme-toggle-item');

const themeToggle = document.createElement('button');
themeToggle.id = 'themeToggle';
themeToggle.title = 'Toggle theme';
themeToggle.innerHTML = `<span class="nav-text">Theme</span>
<i class="fa-solid fa-moon nav-icon"></i>`;

themeLi.append(themeToggle);

nav.prepend(themeLi);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');


const icon = themeToggle.querySelector('i');
if (document.body.classList.contains('dark-theme')) {
  icon.classList.replace('fa-moon', 'fa-sun');
} else {
  icon.classList.replace('fa-sun', 'fa-moon');
}

localStorage.setItem(
  'darkTheme',
  document.body.classList.contains('dark-theme')
);

});

if (localStorage.getItem('darkTheme') === 'true') {
  document.body.classList.add('dark-theme');
  const icon = themeToggle.querySelector('i');
  icon.classList.replace('fa-moon', 'fa-sun');
}