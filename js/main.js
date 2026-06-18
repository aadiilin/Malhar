/* ============================================================
   MALHARUL ISLAM ACADEMY - Main JavaScript
   ============================================================ */

// --- Mobile Menu Toggle ---
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  const hamburger = document.querySelector('.hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('active');
}

// Close menu on link click
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      const hamburger = document.querySelector('.hamburger');
      menu.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // --- Header scroll effect ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Active nav link based on current page ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // --- AOS (Animate On Scroll) ---
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
  });

  // --- Swiper Testimonials ---
  const testimonialSwiper = document.querySelector('.testimonialsSwiper');
  if (testimonialSwiper) {
    new Swiper(testimonialSwiper, {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      speed: 800,
      effect: 'fade',
      fadeEffect: { crossFade: true }
    });
  }

  // --- Counter Animation ---
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const animateCounter = (element) => {
      const target = parseInt(element.getAttribute('data-target'));
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      
      const update = () => {
        current += step;
        if (current >= target) {
          element.textContent = target.toLocaleString();
          return;
        }
        element.textContent = current.toLocaleString();
        requestAnimationFrame(update);
      };
      update();
    };

    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// --- Form Validation & Submit ---
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('.form-control[required]');
  let isValid = true;

  inputs.forEach(input => {
    input.classList.remove('error');
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
      errorMsg.style.display = 'none';
    }

    if (!input.value.trim()) {
      input.classList.add('error');
      if (errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.style.display = 'block';
      }
      isValid = false;
    }

    if (input.type === 'email' && input.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        input.classList.add('error');
        if (errorMsg && errorMsg.classList.contains('error-message')) {
          errorMsg.textContent = 'Please enter a valid email address.';
          errorMsg.style.display = 'block';
        }
        isValid = false;
      }
    }
  });

  if (!isValid) return;

  // Success state
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
    btn.style.background = '#1B6B4C';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  }, 1500);
}
