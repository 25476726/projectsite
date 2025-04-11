document.addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        const scrollWrapper = document.querySelector('.scroll-wrapper');
        scrollWrapper.scrollLeft += event.deltaY;
        event.preventDefault();
    }
}, { passive: false });
