// Toggle Claro / Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌗';
    }
});