const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animate(entry.target);
        }
    })
}, { threshold: 0 });


function animate(item) {
    item.classList.add('_show');
}

const images = document.querySelectorAll('[data-hidden-animate]');
export const animateImages = () => {
    if (!images.length) return

    images.forEach(item => {
        observer.observe(item);
    })
}