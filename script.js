        const swiper = new Swiper('#ofices-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            navigation: {
                nextEl: '.btn-slider.next',
                prevEl: '.btn-slider.prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });

        // Funcionalidad de la hamburguesa
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar');
            
            if (hamburger && navbar) {
                hamburger.addEventListener('click', function() {
                    hamburger.classList.toggle('active');
                    navbar.classList.toggle('active');
                });
                
                // Cerrar menú al hacer clic en un enlace
                const navLinks = document.querySelectorAll('.navbar a');
                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        hamburger.classList.remove('active');
                        navbar.classList.remove('active');
                    });
                });
                
                // Cerrar menú al hacer clic fuera del menú
                document.addEventListener('click', function(e) {
                    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
                        hamburger.classList.remove('active');
                        navbar.classList.remove('active');
                    }
                });
            }
        });