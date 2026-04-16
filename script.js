
function showTab(name, el) {
    document.querySelectorAll('.chapter').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}