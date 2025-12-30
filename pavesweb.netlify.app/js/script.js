const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
    updateSlide();
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.children.length;
    updateSlide();
});

function updateSlide() {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

slides.addEventListener('transitionend', () => {
    if (slides.children[slideIndex].classList.contains('first-clone')) {
        slides.style.transition = 'none';
        slideIndex = 0;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    } else if (slides.children[slideIndex].classList.contains('last-clone')) {
        slides.style.transition = 'none';
        slideIndex = slides.children.length - 2;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});

function createCloneSlides() {
    const firstClone = slides.children[0].cloneNode(true);
    const lastClone = slides.children[slides.children.length - 1].cloneNode(true);

    firstClone.classList.add('first-clone');
    lastClone.classList.add('last-clone');

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, slides.children[0]);
}

createCloneSlides();
