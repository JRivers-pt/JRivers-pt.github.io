// ========================================
// PORTFOLIO DATA
// ========================================
const projects = [
    {
        id: 'saft-pro',
        title: 'SAFT PRO',
        description: 'Portuguese tax compliance tool for analyzing and validating SAFT-PT files. Generates professional PDF reports with risk analysis.',
        tags: ['🔥 Featured', 'Next.js', 'JavaScript'],
        features: ['SAFT-PT Validation', 'PDF Reports', 'Excel Export'],
        liveUrl: 'https://saft-pro.vercel.app',
        githubUrl: 'https://github.com/JRivers-pt/SaftPRO',
        icon: '📊',
        featured: true
    },
    {
        id: 'ga4-dashboard',
        title: 'GA4 Analytics Dashboard',
        description: 'Real-time Google Analytics 4 dashboard with OAuth integration, performance scoring, and AI-powered insights.',
        tags: ['🔥 Featured', 'GA4 API', 'JavaScript'],
        features: ['Real-time Stats', 'Performance Score', 'AI Insights', 'PT/EN'],
        liveUrl: 'https://jrivers-pt.github.io/ga4-dashboard/',
        githubUrl: 'https://github.com/JRivers-pt/ga4-dashboard',
        icon: '📈',
        featured: true
    },
    {
        id: 'scirecount',
        title: 'ScireCount Platform',
        description: 'Premium people-counting dashboard for various people counting hardware. Real-time metrics with glassmorphism design.',
        tags: ['React', 'TypeScript', 'IoT'],
        features: ['Real-time Dashboard', 'Hardware Agnostic', 'i18n'],
        liveUrl: 'https://scirecount-platform.vercel.app',
        githubUrl: 'https://github.com/JRivers-pt/scirecount-platform',
        icon: '👥'
    },
    {
        id: 'ipesa-balancas',
        title: 'Ipesa Balanças',
        description: 'Product showcase page for Ipesa industrial scales. Partnership display with TechScire for retail hardware solutions.',
        tags: ['Landing Page', 'HTML/CSS'],
        features: ['Product Catalog', 'Partnership Display', 'Responsive'],
        githubUrl: 'https://github.com/JRivers-pt/ipesa-balancas',
        icon: '⚖️'
    },
    {
        id: 'vistofacil',
        title: 'VistoFácil',
        description: 'AI-powered Portuguese visa application platform. Simplifies Digital Nomad, D7, and Golden Visa processes.',
        tags: ['AI', 'Supabase'],
        features: ['AI Validation', '3 Visa Types', 'SEO Blog'],
        githubUrl: 'https://github.com/JRivers-pt/VistoFacil',
        icon: '🛂'
    },
    {
        id: 'jobpilot',
        title: 'JobPilot',
        description: 'AI-powered job application assistant. Helps users craft better applications and track their job search progress.',
        tags: ['AI', 'Next.js'],
        features: ['AI Cover Letters', 'Application Tracking', 'Job Search'],
        githubUrl: 'https://github.com/JRivers-pt/Jobpilot',
        icon: '💼'
    },
    {
        id: 'gestor',
        title: 'Gestor Etiquetagem',
        description: 'Label and weight management application for retail operations. Streamlines inventory labeling processes.',
        tags: ['React', 'TypeScript'],
        features: ['Weight Control', 'Label Management', 'PWA Ready'],
        liveUrl: 'https://gestor-etiquetagem.vercel.app',
        githubUrl: 'https://github.com/JRivers-pt/Gestor-Etiquetagem',
        icon: '🏷️'
    },
    {
        id: 'vocalflow',
        title: 'VocalFlow',
        description: 'Voice-powered application built with Next.js and Supabase. Modern speech recognition patterns.',
        tags: ['🚧 In Dev', 'Next.js', 'Supabase'],
        features: ['Voice Interface', 'TypeScript', 'Supabase'],
        githubUrl: 'https://github.com/JRivers-pt/VocalFlow',
        icon: '🎙️'
    },
    {
        id: 'locallift',
        title: 'LocalLift',
        description: 'Platform to help local businesses grow their online presence. Built with Next.js and Supabase.',
        tags: ['🚧 In Dev', 'Next.js', 'PostgreSQL'],
        features: ['Local Business Focus', 'Full-Stack', 'Modern Stack'],
        githubUrl: 'https://github.com/JRivers-pt/locallift',
        icon: '🏪'
    },
    {
        id: 'sanctum',
        title: 'Sanctum',
        description: 'Secure password manager and vault application. End-to-end encryption for sensitive data storage.',
        tags: ['Security', 'Encryption'],
        features: ['Password Storage', 'Secure Vault', 'E2E Encryption'],
        githubUrl: 'https://github.com/JRivers-pt/Sanctum',
        icon: '🔐'
    },
    {
        id: 'airbnb-leads',
        title: 'AirbnbLeads',
        description: 'Lead generation tool for Airbnb property managers. Automates prospecting and outreach workflows.',
        tags: ['Automation', 'Lead Gen'],
        features: ['Lead Scraping', 'Automated Outreach', 'CRM Integration'],
        githubUrl: 'https://github.com/JRivers-pt/AirbnbLeads',
        icon: '🏠'
    },
    {
        id: 'contafranca',
        title: 'ContaFranca Landing',
        description: 'Landing page for ContaFranca accounting services. Modern design with lead capture functionality.',
        tags: ['Landing Page', 'Marketing'],
        features: ['Lead Capture', 'Modern Design', 'SEO Optimized'],
        githubUrl: 'https://github.com/JRivers-pt/contafranca-landing-page',
        icon: '💰'
    },
    {
        id: '2580',
        title: '2580 Project',
        description: 'Experimental project exploring innovative web technologies and design patterns.',
        tags: ['🚧 In Dev', 'Experimental'],
        features: ['Innovation Lab', 'Tech Exploration', 'Prototype'],
        githubUrl: 'https://github.com/JRivers-pt/2580',
        icon: '🔬'
    }
];

const typingPhrases = [
    'Full-Stack Developer',
    'IT Consultant',
    'AI Entrepreneur',
    'Business Strategist',
    'Vibecoder',
    'SaaS Builder'
];

// ========================================
// NAVIGATION
// ========================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '12px 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.padding = '16px 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }

    lastScroll = currentScroll;
});

// ========================================
// TYPING ANIMATION
// ========================================
const typingElement = document.getElementById('typingText');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = typingPhrases[phraseIndex];

    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
if (typingElement) {
    setTimeout(typeText, 1000);
}

// ========================================
// COUNTER ANIMATION
// ========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.getElementById('hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ========================================
// RENDER PROJECTS
// ========================================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = `project-card${project.featured ? ' featured' : ''}`;

        const liveBtn = project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="overlay-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
               </a>`
            : '';

        card.innerHTML = `
            <div class="project-image">
                <div class="project-placeholder ${project.id}">
                    <div class="placeholder-icon">${project.icon}</div>
                </div>
                <div class="project-overlay">
                    ${liveBtn}
                    <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="overlay-btn${project.liveUrl ? ' secondary' : ''}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        ${project.liveUrl ? 'Code' : 'View Project'}
                    </a>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags.map(tag => {
            let tagClass = 'tag';
            if (tag.includes('Featured')) tagClass += ' tag-featured';
            if (tag.includes('MVP') || tag.includes('Dev')) tagClass += ' tag-wip';
            return `<span class="${tagClass}">${tag}</span>`;
        }).join('')}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-features">
                    ${project.features.map(f => `<span>✓ ${f}</span>`).join('')}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});
