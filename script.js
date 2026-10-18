// Portfolio website JavaScript
// Mobile menu: works with buttons using .menu-toggle, .nav-toggle, or .hamburger.
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const menuButton = document.querySelector('.menu-toggle, .nav-toggle, .hamburger, #menu-toggle');

  if (nav && menuButton) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Update any element with id="current-year" to the current year.
  const yearElement = document.getElementById('current-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Add a small confirmation to a contact form, if the page has one.
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      // Keep the browser's normal submission behavior if the form has an action URL.
      if (contactForm.getAttribute('action')) return;
      event.preventDefault();
      const status = contactForm.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thanks! Your form is ready, but it needs a form service or email link to send messages.';
      } else {
        alert('Your form is not connected to a message service yet. Please use the email link on the page.');
      }
    });
  }
});
