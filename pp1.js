document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const registrationModal = document.getElementById('registrationModal');
    const closeModalBtn = document.querySelector('#registrationModal button');
    const registrationForm = document.getElementById('registrationForm');

    getStartedBtn.addEventListener('click', function() {
        registrationModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        registrationModal.style.display = 'none';
    });

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted! Data will be sent to the server.');
        closeModal();
    });

    // Automatic slideshow
    let currentSlideIndex = 1;

    function showSlides(index) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        if (index > totalSlides) {
            currentSlideIndex = 1;
        } else if (index < 1) {
            currentSlideIndex = totalSlides;
        }

        const translateValue = -100 * (currentSlideIndex - 1) + '%';
        slides.style.transform = 'translateX(' + translateValue + ')';
        updateDots();
    }

    function changeSlide(n) {
        currentSlideIndex += n;
        showSlides(currentSlideIndex);
    }

    function currentSlide(index) {
        currentSlideIndex = index;
        showSlides(currentSlideIndex);
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            index + 1 === currentSlideIndex
                ? dot.classList.add('active')
                : dot.classList.remove('active');
        });
    }

    setInterval(() => {
        changeSlide(1);
    }, 5000);

    showSlides(currentSlideIndex);
});

function closeModal() {
    const registrationModal = document.getElementById('registrationModal');
    registrationModal.style.display = 'none';
}

// Add any other functions you need for your existing code
