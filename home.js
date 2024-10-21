// 1. Smooth Scrolling and Section Transitions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Lazy Loading Images
document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// 3. Scroll-triggered Animations using IntersectionObserver
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});

// 4. Hover Effects and Animations
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
        link.style.transition = 'color 0.3s ease';
        link.style.color = '#0071e3'; // Apple-like blue
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
        link.style.color = '';
    });
});

// 5. Dynamic Search Bar with Expanding Effect
const searchBar = document.querySelector('#search-form input');

searchBar.addEventListener('focus', () => {
    searchBar.style.width = '300px';
    searchBar.style.transition = 'width 0.4s ease';
    searchBar.placeholder = 'Enter location, price range...';
});

searchBar.addEventListener('blur', () => {
    searchBar.style.width = '200px';
    searchBar.placeholder = 'Search...';
});

// 6. Responsive Menu Toggle (Mobile)
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburgerMenu.classList.toggle('is-active');
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburgerMenu.classList.remove('is-active');
    }
});

// 7. Scroll-to-Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.classList.add('fade-in');
    } else {
        scrollToTopBtn.classList.remove('fade-in');
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 8. Subtle Animations on Button Clicks
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('button-clicked');
        setTimeout(() => {
            button.classList.remove('button-clicked');
        }, 300);
    });
});

// 9. Microinteractions for Form Inputs
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 8px rgba(0, 113, 227, 0.5)';
    });
    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});

// 10. Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Parallax effect
});


