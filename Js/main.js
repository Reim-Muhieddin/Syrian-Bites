document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
    });
  }


  const leftBtn = document.querySelector('.slide-left');
  const rightBtn = document.querySelector('.slide-right');
  const menuItems = document.querySelector('.menu-items');

  if (leftBtn && menuItems) {
    leftBtn.addEventListener('click', () => {
      menuItems.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }

  if (rightBtn && menuItems) {
    rightBtn.addEventListener('click', () => {
      menuItems.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }


  const toggleAuth = document.getElementById('toggleAuth');
  const authSection = document.getElementById('auth-section');

  if (toggleAuth && authSection) {
    toggleAuth.addEventListener('click', () => {
      authSection.classList.toggle('hidden');
    });
  }


  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    window.addEventListener('scroll', () => {
      const position = aboutText.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        aboutText.style.opacity = '1';
        aboutText.style.transform = 'translateY(0)';
      }
    });
  }


  window.showCategory = function (category) {
    const main = document.getElementById('main-cards');
    const appetizers = document.getElementById('appetizers-cards');
    const target = document.getElementById(category + '-cards');

    if (main && appetizers && target) {
      main.classList.add('hidden');
      appetizers.classList.add('hidden');
      target.classList.remove('hidden');
    }
  };


  window.scrollCards = function (direction) {
    const visibleTrack = document.querySelector('.carousel-track:not(.hidden)');
    if (visibleTrack) {
      visibleTrack.scrollBy({ left: direction * 220, behavior: 'smooth' });
    }
  };

  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('dish-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const confirmationMessage = document.getElementById('confirmation-message');
  const closeBtn = document.querySelector('.close-btn');

  if (cards.length && modal && modalImage && modalTitle && modalDescription && confirmationMessage) {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        const title = card.querySelector('h3').textContent;

        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent =` ${title}.`;
        confirmationMessage.classList.add('hidden');
        modal.classList.remove('hidden');
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    }

    window.purchaseDish = function () {
      confirmationMessage.classList.remove('hidden');
    };
  }
});


function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "flex";
}

function showLogin() {
  document.getElementById("register-form").style.display = "none";
  document.getElementById("login-form").style.display = "flex";
}