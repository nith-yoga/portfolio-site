// Typing Animation Initiator
const hero = document.querySelector(".hero");
const title = document.querySelector(".site-title");

// Splash Page Enter Prompt
document.querySelector('.enter-prompt').addEventListener('click', () => {
    hero.scrollIntoView({ behavior: 'smooth' });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            title.classList.remove("typing-animate");
            void title.offsetWidth;
            title.classList.add("typing-animate");
        }
    });
}, {
    threshold: 0.5
});

observer.observe(hero);

// Hamburger Bar Trigger
const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
});

const landing = document.getElementById('home');

const landingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hamburger.classList.add('hidden');
      } else {
        hamburger.classList.remove('hidden');
      }
    });
  }, {
    threshold: 0.5
  });
  
landingObserver.observe(landing);