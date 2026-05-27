const toggleThemeButton = document.getElementById('toggleTheme');
const printButton = document.getElementById('printResume');
const yearElement = document.getElementById('year');

function updateFooterYear() {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = `© ${currentYear} Vinay. All rights reserved.`;
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggleThemeButton.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

function printResume() {
  window.print();
}

toggleThemeButton.addEventListener('click', toggleTheme);
printButton.addEventListener('click', printResume);
updateFooterYear();
