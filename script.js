const toggle = document.getElementById('menuToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
    const photo = document.getElementById('profilePhoto');
    photo.addEventListener('load', () => {
      photo.style.display = 'block';
      document.getElementById('photoPlaceholder').style.display = 'none';
    });
    photo.addEventListener('error', () => {
      photo.style.display = 'none';
      document.getElementById('photoPlaceholder').style.display = 'block';
    });
