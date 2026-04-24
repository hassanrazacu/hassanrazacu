const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const bars = btn.querySelectorAll('span');
const links = menu.querySelectorAll('a');

function openMenu() {
  menu.classList.remove('max-h-0', 'opacity-0');
  menu.classList.add('max-h-96', 'opacity-100');
  btn.setAttribute('aria-expanded', 'true');
  bars[0].classList.add('rotate-45', 'translate-y-2');
  bars[1].classList.add('opacity-0');
  bars[2].classList.add('-rotate-45', '-translate-y-2');
}

function closeMenu() {
  menu.classList.remove('max-h-96', 'opacity-100');
  menu.classList.add('max-h-0', 'opacity-0');
  btn.setAttribute('aria-expanded', 'false');
  bars[0].classList.remove('rotate-45', 'translate-y-2');
  bars[1].classList.remove('opacity-0');
  bars[2].classList.remove('-rotate-45', '-translate-y-2');
}

btn.addEventListener('click', () => {
  const isOpen = menu.classList.contains('max-h-96');
  isOpen ? closeMenu() : openMenu();
});

links.forEach(link => {
  link.addEventListener('click', () => closeMenu());
});

// Email link fallback alert
const emailLink = document.getElementById('email-link');
if (emailLink) {
  emailLink.addEventListener('click', function () {
    setTimeout(() => {
      alert('It looks like no email app is set up on your device. You can reach me at: hassanrazacu@gmail.com');
    }, 1000);
  });
}

// Contact form → mailto
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('Contact from Portfolio — ' + name);
  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

  let hasLeftPage = false;

  const handleVisibilityChange = () => {
    if (document.hidden) hasLeftPage = true;
  };
  const handleFocus = () => { hasLeftPage = true; };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('focus', handleFocus);

  window.location.href = `mailto:hassanrazacu@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    if (!hasLeftPage) {
      alert("It looks like no email client is configured on your device. You can email me directly at: hassanrazacu@gmail.com");
    }
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('focus', handleFocus);
  }, 3000);
});
