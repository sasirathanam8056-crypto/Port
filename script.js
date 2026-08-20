const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('#navMenu a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
    });
});

const projectData = [
    {
        title: 'Full Stack Python Project',
        main: './Screenshot 2026-08-19 152404.png',
        detail: './Screenshot 2026-08-19 152515.png',
        description: 'A full-stack web application built to combine a responsive frontend with Python-based backend functionality and a practical user workflow.'
    },
    {
        title: 'Full Stack Web Application',
        main: './Screenshot 2026-08-19 151253.png',
        detail: './Screenshot 2026-08-19 152232.png',
        description: 'A modern web application project focused on clean UI, structured pages, responsive layouts and smooth interaction between the user interface and application logic.'
    },
    // {
    //     title: 'Frontend Responsive Website',
    //     main: './project3-main.png',
    //     detail: './project3-detail.jpeg',
    //     description: 'A responsive frontend project created with modern HTML, CSS and JavaScript techniques, designed to provide a smooth experience across different screen sizes.'
    // },
    // {
    //     title: 'Frontend UI Project',
    //     main: './project4-main.jpeg',
    //     detail: './project4-detail.png',
    //     description: 'A frontend-focused project showcasing a polished interface, reusable UI sections, responsive styling and interactive elements.'
    // }
];

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalMainImage = document.getElementById('modalMainImage');
const modalDetailImage = document.getElementById('modalDetailImage');
const modalClose = document.getElementById('modalClose');
const modalBackdrop = document.getElementById('modalBackdrop');

function openProject(index) {
    const project = projectData[index];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalMainImage.src = project.main;
    modalDetailImage.src = project.detail;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeProject() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProject(Number(card.dataset.project)));
});

modalClose.addEventListener('click', closeProject);
modalBackdrop.addEventListener('click', closeProject);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeProject();
});

// Reveal sections smoothly while scrolling.
const revealItems = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
    });
}, { threshold: 0.12 });
revealItems.forEach(section => {
    section.classList.add('reveal-section');
    revealObserver.observe(section);
});
