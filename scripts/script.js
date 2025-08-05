document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carousel = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 5000);

    // Create floating decorative balls
    function createFloatingBalls() {
        const colors = ['#cfcfb6ff', '#f0e68c', '#c49558ff', 'rgba(121, 85, 38, 1)ff', '#f5deb3'];
        const sizes = ['50px', '70px', '30px', '60px', '40px'];
        const durations = ['15s', '20s', '25s', '18s', '22s'];
        const delays = ['0s', '2s', '5s', '3s', '7s'];
        
        for (let i = 0; i < 10; i++) {
            const ball = document.createElement('div');
            ball.className = 'floating-ball';
            
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const duration = durations[Math.floor(Math.random() * durations.length)];
            const delay = delays[Math.floor(Math.random() * delays.length)];
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            ball.style.width = size;
            ball.style.height = size;
            ball.style.background = color;
            ball.style.left = `${left}%`;
            ball.style.top = `${top}%`;
            ball.style.animationDuration = duration;
            ball.style.animationDelay = delay;
            
            document.body.appendChild(ball);
        }
    }

    createFloatingBalls();
});