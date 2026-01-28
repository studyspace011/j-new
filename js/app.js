function goToJournal(section) {
    // Add smooth transition before navigating
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        window.location.href = `journal.html?section=${section}`;
    }, 300);
}

// Dark Mode Logic with smooth transition
const themeBtn = document.getElementById('theme-toggle');
if(themeBtn) {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeBtn.innerText = savedTheme === 'light' ? '🌙' : '☀️';
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeBtn.innerText = newTheme === 'light' ? '🌙' : '☀️';
        
        // Save preference
        localStorage.setItem('theme', newTheme);
    });
}