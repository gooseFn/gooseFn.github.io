document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    const themeButton = document.getElementById('themeToggle');
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
        themeButton.textContent = '☀️';
    } else {
        document.body.className = 'light-theme';
        themeButton.textContent = '🌙';
    }
});