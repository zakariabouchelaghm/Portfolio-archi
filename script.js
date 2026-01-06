// ========================================
// PROFESSIONAL ARCHITECTURE PORTFOLIO
// Interactive JavaScript
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ========== SCROLL ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // ========== PORTFOLIO WORKS DATA ==========
    const portfolioWorks = [
        {
            title: 'Serenity Wellness Retreat',
            category: 'Commercial Wellness',
            image: 'project1.jpg',
            description: 'A holistic wellness center integrating biophilic design and natural materials'
        },
        {
            title: 'Urban Sanctuary Residence',
            category: 'Residential',
            image: 'project2.jpg',
            description: 'Modern minimalist home with emphasis on natural light and indoor-outdoor flow'
        },
        {
            title: 'Mindful Living Loft',
            category: 'Residential Interior',
            image: 'project3.jpg',
            description: 'Contemporary loft transformation focused on spatial harmony and wellness'
        },
        {
            title: 'Healing Spaces Clinic',
            category: 'Healthcare Design',
            image: 'project4.jpg',
            description: 'Medical facility designed to reduce stress and promote patient well-being'
        },
        {
            title: 'Eco-Luxe Villa',
            category: 'Sustainable Architecture',
            image: 'project5.jpg',
            description: 'Luxury residence combining sustainable practices with timeless elegance'
        },
        {
            title: 'Tranquil Office Haven',
            category: 'Commercial Interior',
            image: 'project6.jpg',
            description: 'Corporate workspace designed to enhance productivity and employee wellness'
        }
    ];

    // ========== RENDER PORTFOLIO WORKS ==========
    const worksGrid = document.getElementById('works-grid');

    portfolioWorks.forEach((work, index) => {
        const workCard = document.createElement('div');
        workCard.className = 'work-card';
        workCard.innerHTML = `
            <img src="${work.image}" alt="${work.title}" class="work-image" loading="lazy">
            <div class="work-overlay">
                <h3 class="work-title">${work.title}</h3>
                <p class="work-category">${work.category}</p>
            </div>
        `;

        // Add click event for modal
        workCard.addEventListener('click', function () {
            openModal(work.image, work.title);
        });

        worksGrid.appendChild(workCard);
    });

    // ========== MODAL LIGHTBOX ==========
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');

    function openModal(imageSrc, imageAlt) {
        modal.classList.add('active');
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close modal on button click
    modalClose.addEventListener('click', closeModal);

    // Close modal on background click
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== INITIAL ANIMATION ==========
    setTimeout(function () {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    }, 100);

});
