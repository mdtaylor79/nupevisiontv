function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSubmit(event) {
  event.preventDefault();

  // If you enable Netlify Forms (see index.html comment),
  // submitting will post to Netlify. You can still show a friendly message:
  alert('Thank you for your message! We will get back to you soon.');

  // Optionally actually submit via fetch to a service (Formspree/Zapier) instead of alert.
  event.target.reset();
}

// Optional: support keyboard activation on nav links
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') a.click();
  });
});
