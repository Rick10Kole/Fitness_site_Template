const FITNESS_CENTER = {
  name: "RATNA Fitness Center",
  whatsapp: "22890000000", // numéro du centre (sans +)
  greeting: "Bonjour RATNA Fitness Center",
  closing: "Merci et à très bientôt 💪"
};

const PROGRAM_MESSAGES = {
  musculation: {
    title: "Musculation",
    description: "Je souhaite un programme de musculation personnalisé."
  },
  coaching: {
    title: "Coaching personnel",
    description: "Je souhaite un accompagnement avec un coach certifié."
  },
  cardio: {
    title: "Cardio training",
    description: "Je souhaite améliorer mon endurance et ma forme physique."
  },
  perte_poids: {
    title: "Perte de poids",
    description: "Je souhaite un programme adapté à la perte de poids."
  }
};

// Main JavaScript for FitZone Gym Standalone Website

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('network-nav');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.network-nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.network-nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Gallery modal functionality
function initGalleryModal() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modalContainer = document.getElementById('gallery-modal');
  
  if (!modalContainer) return;
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const itemData = JSON.parse(item.getAttribute('data-item'));
      openGalleryModal(itemData);
    });
  });
  
  // Close modal on outside click or close button
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeGalleryModal);
  }
  
  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      closeGalleryModal();
    }
  });
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.style.display === 'flex') {
      closeGalleryModal();
    }
  });
}

function openGalleryModal(item) {
  const modalContainer = document.getElementById('gallery-modal');
  const modalMedia = document.getElementById('modal-media');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  
  if (!modalContainer) return;
  
  // Set title and description
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalDescription) modalDescription.textContent = item.description;
  
  // Set media content
  if (modalMedia) {
    if (item.type === 'image') {
      modalMedia.innerHTML = `<img src="${item.src}" alt="${item.title}" />`;
    } else {
      // Video - extract YouTube or Vimeo ID
      const youtubeId = getYouTubeId(item.src);
      const vimeoId = getVimeoId(item.src);
      
      if (youtubeId) {
        modalMedia.innerHTML = `
          <iframe
            src="https://www.youtube.com/embed/${youtubeId}?autoplay=1"
            title="${item.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="video-embed"
          ></iframe>
        `;
      } else if (vimeoId) {
        modalMedia.innerHTML = `
          <iframe
            src="https://player.vimeo.com/video/${vimeoId}?autoplay=1"
            title="${item.title}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            class="video-embed"
          ></iframe>
        `;
      } else {
        modalMedia.innerHTML = `
          <div class="video-fallback">
            <p>Cliquez pour voir la vidéo</p>
            <a href="${item.src}" target="_blank" rel="noopener noreferrer" class="btn-primary">
              Ouvrir la vidéo
            </a>
          </div>
        `;
      }
    }
  }
  
  modalContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  const modalContainer = document.getElementById('gallery-modal');
  if (modalContainer) {
    modalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function getVimeoId(url) {
  const regExp = /vimeo\.com\/(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Lazy loading images for gallery
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('.lazy-image');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, { rootMargin: '100px' });
    
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        imageObserver.observe(img);
      }
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.add('loaded');
      }
    });
  }
}

// Booking form handling (standalone version - shows success message)
function initBookingForm() {
  const bookingForm = document.getElementById("booking-form");
  if (!bookingForm) return;

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);

    const phoneNumber = FITNESS_CENTER.whatsapp.replace(/[\s\-\+]/g, "");

    let message = `
    Bonjour ${FITNESS_CENTER.name} 👋

    Je souhaite réserver une session :

    - Nom : ${data.name || ""}
    - Téléphone : ${data.phone || ""}
    - Email : ${data.email || ""}
    - Programme : ${data.program || ""}
    - Date : ${data.date || ""}
    - Heure : ${data.time || ""}
    `.trim();

    // Ajouter un message spécifique au programme si défini
    if (data.program && PROGRAM_MESSAGES[data.program]) {
      message += `\n💬 Info programme : ${PROGRAM_MESSAGES[data.program]}`;
    }

    // Message optionnel
    if (data.message && data.message.trim() !== "") {
      message += `\n📝 Message : ${data.message.trim()}`;
    }

    message += `\n\nMerci 🙏`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  });
}

// Appel de la fonction

document.addEventListener("DOMContentLoaded", () => {
  initBookingForm();
});

// Testimonials form handling (standalone version)
function initTestimonialsForm() {
  const testimonialsForm = document.getElementById('testimonials-form');
  
  if (testimonialsForm) {
    // Rating selector
    const ratingStars = testimonialsForm.querySelectorAll('.rating-selector svg');
    const ratingInput = testimonialsForm.querySelector('input[name="rating"]');
    let currentRating = 5;
    
    ratingStars.forEach((star, index) => {
      star.addEventListener('click', () => {
        currentRating = index + 1;
        if (ratingInput) ratingInput.value = currentRating;
        
        // Update star display
        ratingStars.forEach((s, i) => {
          s.style.fill = i < currentRating ? 'currentColor' : 'none';
        });
      });
    });
    
    testimonialsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitMessage = testimonialsForm.querySelector('.submit-message');
      if (submitMessage) {
        submitMessage.textContent = '✅ Merci pour votre avis ! Il sera publié après modération.';
        submitMessage.style.background = '#d4edda';
        submitMessage.style.color = '#155724';
        submitMessage.style.display = 'block';
        
        // Reset form
        testimonialsForm.reset();
        currentRating = 5;
        ratingStars.forEach(s => {
          s.style.fill = 'currentColor';
        });
        
        // Hide message after 5 seconds
        setTimeout(() => {
          submitMessage.style.display = 'none';
        }, 5000);
      }
    });
  }
}

// WhatsApp handler
function handleWhatsApp() {
  const whatsappBtns = document.querySelectorAll('.btn-whatsapp');
  const gymInfo = {
    whatsapp: "22879703341" // Default, can be overridden
  };
  
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const WHATSAPP_NUMBER ="22879703341";
      const phoneNumber = btn.dataset.phone || gymInfo.whatsapp.replace(/[\s\-\+]/g, '');
      const message = "Salut👋, je souhaite prendre des renseignements."; 
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    });
  });
}

// Footer navigation handler
function initFooterNavigation() {
  const footerLinks = document.querySelectorAll('.footer-links button, .footer-bottom-links button');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('data-href') || link.textContent.trim().toLowerCase();
      
      // Simple navigation for same-domain links
      if (href.startsWith('#')) {
        // Handle anchor links
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to page
        window.location.href = href;
      }
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNavLink();
  initGalleryModal();
  initLazyLoading();
  initBookingForm();
  initTestimonialsForm();
  handleWhatsApp();
  initFooterNavigation();
});





