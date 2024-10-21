// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gallery Image Switcher
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnails img');
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

// Rent Negotiation Button
const negotiationBtn = document.querySelector('.rent-negotiation-btn');
negotiationBtn.addEventListener('click', () => {
    alert('Start rent negotiation with the property owner!');
});

// Wishlist Button
const wishlistBtn = document.querySelector('.wishlist-btn');
wishlistBtn.addEventListener('click', () => {
    wishlistBtn.classList.toggle('added');
    if (wishlistBtn.classList.contains('added')) {
        wishlistBtn.textContent = 'Added to Wishlist';
    } else {
        wishlistBtn.textContent = 'Add to Wishlist';
    }
});

// Share Listing Button
const shareBtn = document.querySelector('.share-btn');
shareBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Spacious Room in Kathmandu',
            text: 'Check out this amazing room!',
            url: window.location.href,
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch((error) => {
            console.error('Sharing failed:', error);
        });
    } else {
        alert('Sharing not supported on your browser.');
    }
});

// Calendar Availability Feature (Mock Data)
const availabilityCalendar = document.querySelector('.availability-calendar');
const availableDates = ['2024-11-10', '2024-11-15', '2024-11-20']; // Example availability dates

availableDates.forEach(date => {
    const dateElement = document.createElement('div');
    dateElement.textContent = date;
    dateElement.classList.add('available-date');
    availabilityCalendar.appendChild(dateElement);
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message sent to the property owner!');
    contactForm.reset();
});

// Review Form Submission
const reviewForm = document.querySelector('.review-form');
reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewText = document.querySelector('.review-form textarea').value;
    const reviewSection = document.querySelector('.reviews');
    const newReview = document.createElement('div');
    newReview.classList.add('review-item');
    newReview.innerHTML = `<p>${reviewText}</p><span>- New Reviewer</span>`;
    reviewSection.appendChild(newReview);
    reviewForm.reset();
});

// Booking Button
const bookingBtn = document.querySelector('.booking-btn');
bookingBtn.addEventListener('click', () => {
    alert('Room booked successfully!');
});

// Payment Options Selection
const paymentOptions = document.querySelector('.payment-options');
const paymentBtn = document.querySelector('.payment-btn');
paymentBtn.addEventListener('click', () => {
    const selectedPayment = paymentOptions.value;
    alert(`You have chosen ${selectedPayment} as your payment option.`);
});

// Move-in Ready Checklist Toggle
const checklistToggleBtn = document.querySelector('.checklist-toggle');
const checklist = document.querySelector('.move-in-checklist');
checklistToggleBtn.addEventListener('click', () => {
    checklist.classList.toggle('visible');
});