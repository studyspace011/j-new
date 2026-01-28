const urlParams = new URLSearchParams(window.location.search);
const section = urlParams.get('section') || 'General';
document.getElementById('section-title').innerText = `${section} Entry`;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

document.getElementById('journal-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('save-btn');
    const status = document.getElementById('status-msg');
    const text = document.getElementById('entry-text').value;

    // Reset status
    status.style.color = "#333";
    status.innerText = "";

    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.innerText = "⏳ Saving...";
    
    // Smooth status message
    status.style.opacity = '0';
    setTimeout(() => {
        status.innerText = "📤 Sending to Cloud...";
        status.style.opacity = '1';
    }, 150);

    const now = new Date();
    const data = {
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        section: section,
        text: text
    };

    try {
        await saveEntry(data);
        
        // Success animation
        btn.innerText = "✅ Saved!";
        status.style.color = "#27ae60";
        status.style.opacity = '0';
        
        setTimeout(() => {
            status.innerText = "✅ Saved Successfully!";
            status.style.opacity = '1';
        }, 150);
        
        // Clear textarea after delay
        setTimeout(() => {
            document.getElementById('entry-text').value = "";
            btn.innerText = "💾 Save to Cloud";
            btn.disabled = false;
            btn.style.opacity = '1';
            status.innerText = "";
        }, 2000);
        
    } catch (err) {
        // Error animation
        btn.innerText = "❌ Error!";
        status.style.color = "#e74c3c";
        status.style.opacity = '0';
        
        setTimeout(() => {
            status.innerText = "❌ Error saving entry. Please try again.";
            status.style.opacity = '1';
        }, 150);
        
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerText = "💾 Save to Cloud";
    }
});