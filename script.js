// ========================================
// PORTFOLIO DATA - Top 6 Featured + Rest
// ========================================
const projects = [
    // === FEATURED PROJECTS (Top 6 for job hunting) ===
    {
        id: 'pontual',
        title: 'Pontual',
        description: 'Real-time employee attendance tracking system. Features biometric integration, shift management, and automated payroll reporting.',
        tags: ['🔥 Featured', 'TypeScript', 'Next.js', 'Biometrics'],
        features: ['Real-time Tracking', 'Payroll Report', 'Biometrics', 'Shadcn/UI'],
        githubUrl: 'https://github.com/JRivers-pt/Pontual',
        icon: '🕒',
        featured: true
    },
    {
        id: 'leadpronto',
        title: 'LeadPronto',
        description: 'AI-powered property booking platform featuring RAG (Retrieval-Augmented Generation) for intelligent, context-aware property recommendations and natural language booking.',
        tags: ['🔥 Featured', 'RAG', 'Google Gemini', 'React'],
        features: ['RAG AI Chat', 'Property Search', 'Smart Booking', 'Real-time'],
        githubUrl: 'https://github.com/JRivers-pt/LeadPronto',
        icon: '🏠',
        featured: true
    },
    {
        id: 'accesshome-pro',
        title: 'AccessHome Pro',
        description: 'AI-powered accessibility consultant for interior designers. Performs spatial audits and generates transformed, compliant room visualizations.',
        tags: ['🔥 Featured', 'React', 'AI', 'Accessibility'],
        features: ['Spatial Analysis', 'Visual Transformation', 'Mobility Standards'],
        githubUrl: 'https://github.com/JRivers-pt/spatial-asteroid',
        icon: '♿',
        featured: true
    },
    {
        id: 'techscire-remodelacoes',
        title: 'Techscire Remodelações',
        description: 'High-performance landing page for construction services. Dark-mode aesthetics with automated lead routing.',
        tags: ['🔥 Featured', 'HTML', 'Tailwind', 'SEO'],
        features: ['Lead Gen', 'Dark Mode', 'Speed Optimized'],
        liveUrl: 'https://jrivers-pt.github.io/techscire-remodelacoes/',
        githubUrl: 'https://github.com/JRivers-pt/techscire-remodelacoes',
        icon: '🏗️',
        featured: true
    },
    {
        id: 'yt-music-downloader',
        title: 'YT Music Downloader',
        description: 'Desktop utility for downloading and converting audio from YouTube. Python-based automation with FFmpeg integration.',
        tags: ['🔥 Featured', 'Python', 'FFmpeg', 'Automation'],
        features: ['Audio Extraction', 'Metadata Tagging', 'Batch Processing'],
        githubUrl: 'https://github.com/JRivers-pt/distant-andromeda',
        icon: '🎵',
        featured: true
    },
    {
        id: 'ga4-dashboard',
        title: 'GA4 Analytics Dashboard',
        description: 'Real-time Google Analytics 4 dashboard with OAuth integration, performance scoring, and AI-powered insights.',
        tags: ['🔥 Featured', 'GA4 API', 'OAuth', 'JavaScript'],
        features: ['Real-time Stats', 'Performance Score', 'AI Insights', 'PT/EN'],
        liveUrl: 'https://jrivers-pt.github.io/ga4-dashboard/',
        githubUrl: 'https://github.com/JRivers-pt/ga4-dashboard',
        icon: '📈',
        featured: true
    },
    {
        id: 'saft-pro',
        title: 'SAFT PRO',
        description: 'Portuguese tax compliance tool for analyzing and validating SAFT-PT files. Generates professional PDF reports with risk analysis.',
        tags: ['🔥 Featured', 'Next.js', 'PDF Generation'],
        features: ['SAFT-PT Validation', 'PDF Reports', 'Excel Export'],
        liveUrl: 'https://saft-pro.vercel.app',
        githubUrl: 'https://github.com/JRivers-pt/SaftPRO',
        icon: '📊',
        featured: true
    },
    {
        id: 'scirecount',
        title: 'ScireCount Platform',
        description: 'Premium people-counting dashboard for IoT hardware. Real-time metrics with glassmorphism design and internationalization.',
        tags: ['🔥 Featured', 'React', 'TypeScript', 'IoT'],
        features: ['Real-time Dashboard', 'Hardware Integration', 'i18n'],
        liveUrl: 'https://scirecount-platform.vercel.app',
        githubUrl: 'https://github.com/JRivers-pt/scirecount-platform',
        icon: '👥',
        featured: true
    },
    {
        id: 'vistofacil',
        title: 'VistoFácil',
        description: 'AI-powered Portuguese visa application platform. Simplifies Digital Nomad, D7, and Golden Visa processes with intelligent validation.',
        tags: ['🔥 Featured', 'AI', 'Supabase', 'Full-Stack'],
        features: ['AI Validation', '3 Visa Types', 'SEO Blog'],
        githubUrl: 'https://github.com/JRivers-pt/VistoFacil',
        icon: '🛂',
        featured: true
    },
    {
        id: 'gestor',
        title: 'Gestor Etiquetagem',
        description: 'Label and weight management PWA for retail operations. Streamlines inventory labeling with modern React architecture.',
        tags: ['🔥 Featured', 'React', 'TypeScript', 'PWA'],
        features: ['Weight Control', 'Label Management', 'Offline Ready'],
        liveUrl: 'https://gestor-etiquetagem.vercel.app',
        githubUrl: 'https://github.com/JRivers-pt/Gestor-Etiquetagem',
        icon: '🏷️',
        featured: true
    },
    {
        id: 'jobpilot',
        title: 'JobPilot',
        description: 'AI-powered job application assistant. Crafts personalized cover letters and tracks application progress with smart analytics.',
        tags: ['🔥 Featured', 'AI', 'Next.js'],
        features: ['AI Cover Letters', 'Application Tracking', 'Analytics'],
        githubUrl: 'https://github.com/JRivers-pt/Jobpilot',
        icon: '💼',
        featured: true
    },
    // === OTHER PROJECTS ===
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
        description: 'Faith-based social platform focusing on community standards and moral values. A safe space for content creators and meaningful connections.',
        tags: ['Social Network', 'Community', 'Values'],
        features: ['Content Sharing', 'Community Standards', 'Safe Space'],
        githubUrl: 'https://github.com/JRivers-pt/Sanctum',
        icon: '✝️'
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
// TRANSLATIONS
// ========================================
let currentLang = 'en';

const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: "Let's Talk"
        },
        hero: {
            badge: 'Bridging Business & Technology',
            title1: 'IT Strategist turned',
            title2: 'Full-Stack Developer',
            subtitle: 'Full-Stack Developer | IT Consultant | AI Entrepreneur',
            description: 'Leveraging <strong>7+ years of Real-World IT & Business Strategy</strong> to build practical, <span class="highlight">business-centric SaaS solutions</span>. I bridge the gap between complex systems, code, and profit.',
            cta1: 'See My Code',
            cta2: 'My Journey',
            stats: {
                projects: 'Projects',
                exp: 'Years IT Exp.',
                tech: 'Technologies'
            }
        },
        about: {
            tag: 'My Unique Angle',
            title: 'The <span class="gradient-text">Hybrid</span> Advantage',
            text1: "My background isn't typical. I haven't just written code—I've <strong>planned and installed people counting solutions for major clients</strong>, <strong>administered Microsoft 365 for logistics</strong>, and built business strategies that drive growth.",
            text2: "I call my approach <strong>Vibecoding</strong>: the ability to rapidly turn abstract ideas into deployed, functional software using modern AI and a deep understanding of IT systems.",
            text3: "I don't just build features; I <strong>bridge the gap</strong> between technical complexity and business reality. Whether it's a new SaaS platform or optimizing internal workflows, I bring a holistic \"IT Pro\" mindset to development.",
            highlights: {
                bridge: { title: 'The Bridge', desc: 'Connecting IT Systems & Business Goals' },
                foundation: { title: 'Solid IT Foundation', desc: 'Networking, Security & Admin expertise' },
                vibecoder: { title: 'Vibecoder', desc: 'Rapid, AI-driven product development' }
            }
        },
        skills: {
            tag: 'Total Weaponry',
            title: 'Skills & <span class="gradient-text">Expertise</span>',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                itops: 'IT Ops & Business',
                ai: 'AI & Tools'
            }
        },
        projects: {
            tag: 'Portfolio',
            title: 'Featured <span class="gradient-text">Projects</span>'
        },
        contact: {
            tag: 'Contact',
            title: 'Let\'s Build <span class="gradient-text">Together</span>',
            cardTitle: 'Ready to discuss a project?',
            cardText: 'Whether you need a developer for a new venture or want to collaborate, I\'m here to help.',
            btnGithub: 'GitHub',
            btnLinkedin: 'Connect on LinkedIn'
        }
    },
    pt: {
        nav: {
            about: 'Sobre',
            skills: 'Skills',
            projects: 'Projetos',
            contact: 'Fale Comigo'
        },
        hero: {
            badge: 'Unindo Negócios e Tecnologia',
            title1: 'Estrategista de TI tornado',
            title2: 'Full-Stack Developer',
            subtitle: 'Desenvolvedor Full-Stack | Consultor TI | Empreendedor IA',
            description: 'Com <strong>7+ anos de experiência em TI e Estratégia de Negócios</strong>, crio soluções SaaS práticas e <span class="highlight">focadas no negócio</span>. Faço a ponte entre sistemas complexos, código e lucro.',
            cta1: 'Ver Código',
            cta2: 'Minha Jornada',
            stats: {
                projects: 'Projetos',
                exp: 'Anos Exp. TI',
                tech: 'Tecnologias'
            }
        },
        about: {
            tag: 'O Meu Diferencial',
            title: 'A Vantagem <span class="gradient-text">Híbrida</span>',
            text1: "O meu percurso não é típico. Não escrevo apenas código—já <strong>planeei e instalei soluções de contagem de pessoas para grandes clientes</strong>, <strong>administrei Microsoft 365 para logística</strong> e construí estratégias de negócio.",
            text2: "Chamo à minha abordagem <strong>Vibecoding</strong>: a capacidade de transformar rapidamente ideias abstratas em software funcional usando IA moderna e um profundo conhecimento de sistemas de TI.",
            text3: "Não crio apenas funcionalidades; <strong>faço a ponte</strong> entre a complexidade técnica e a realidade do negócio. Seja uma nova plataforma SaaS ou otimização de fluxos internos, trago uma mentalidade holística de \"IT Pro\".",
            highlights: {
                bridge: { title: 'A Ponte', desc: 'Conectando Sistemas TI e Objetivos de Negócio' },
                foundation: { title: 'Base Sólida de TI', desc: 'Redes, Segurança e Administração' },
                vibecoder: { title: 'Vibecoder', desc: 'Desenvolvimento rápido impulsionado por IA' }
            }
        },
        skills: {
            tag: 'Arsenal Completo',
            title: 'Skills e <span class="gradient-text">Expertise</span>',
            categories: {
                frontend: 'Frontend',
                backend: 'Backend',
                itops: 'Operações TI e Negócio',
                ai: 'IA e Ferramentas'
            }
        },
        projects: {
            tag: 'Portfólio',
            title: 'Projetos em <span class="gradient-text">Destaque</span>'
        },
        contact: {
            tag: 'Contacto',
            title: 'Vamos Construir <span class="gradient-text">Juntos</span>',
            cardTitle: 'Pronto para discutir um projeto?',
            cardText: 'Quer precise de um programador para um novo projeto ou queira colaborar, estou aqui para ajudar.',
            btnGithub: 'GitHub',
            btnLinkedin: 'Conectar no LinkedIn'
        }
    }
};

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    updateUILanguage();

    // Update toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'en' ? '🇵🇹 PT' : '🇬🇧 EN';
    }
}

function updateUILanguage() {
    const t = translations[currentLang];

    // Navbar
    document.querySelectorAll('.nav-link[href="#about"]').forEach(el => el.textContent = t.nav.about);
    document.querySelectorAll('.nav-link[href="#skills"]').forEach(el => el.textContent = t.nav.skills);
    document.querySelectorAll('.nav-link[href="#projects"]').forEach(el => el.textContent = t.nav.projects);
    document.querySelectorAll('.nav-link[href="#contact"]').forEach(el => el.textContent = t.nav.contact);

    // Hero
    safeText('.hero-badge span:last-child', t.hero.badge);
    safeText('.title-line', t.hero.title1);
    safeText('.title-name', t.hero.title2);
    // Note: typing text is handled separately, we might want to update phrases too but keeping it simple for now
    safeHTML('.hero-description', t.hero.description);
    safeText('.hero-actions .btn-primary span', t.hero.cta1);
    safeText('.hero-actions .btn-secondary span', t.hero.cta2);

    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.hero.stats.projects;
    if (statLabels[1]) statLabels[1].textContent = t.hero.stats.exp;
    if (statLabels[2]) statLabels[2].textContent = t.hero.stats.tech;

    // About
    safeText('#about .section-tag', t.about.tag);
    safeHTML('#about .section-title', t.about.title);
    safeHTML('.about-intro', t.about.text1);
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    if (aboutParagraphs[1]) aboutParagraphs[1].innerHTML = t.about.text2;
    if (aboutParagraphs[2]) aboutParagraphs[2].innerHTML = t.about.text3;

    // About Highlights
    const highlights = document.querySelectorAll('.highlight-text');
    if (highlights[0]) { highlights[0].querySelector('strong').textContent = t.about.highlights.bridge.title; highlights[0].querySelector('span').textContent = t.about.highlights.bridge.desc; }
    if (highlights[1]) { highlights[1].querySelector('strong').textContent = t.about.highlights.foundation.title; highlights[1].querySelector('span').textContent = t.about.highlights.foundation.desc; }
    if (highlights[2]) { highlights[2].querySelector('strong').textContent = t.about.highlights.vibecoder.title; highlights[2].querySelector('span').textContent = t.about.highlights.vibecoder.desc; }

    // Skills
    safeText('#skills .section-tag', t.skills.tag);
    safeHTML('#skills .section-title', t.skills.title);
    const skillTitles = document.querySelectorAll('.category-title');
    // Assuming order: Frontend, Backend, IT Ops, AI
    if (skillTitles[0]) skillTitles[0].lastChild.textContent = t.skills.categories.frontend;
    if (skillTitles[1]) skillTitles[1].lastChild.textContent = t.skills.categories.backend;
    if (skillTitles[2]) skillTitles[2].lastChild.textContent = t.skills.categories.itops;
    if (skillTitles[3]) skillTitles[3].lastChild.textContent = t.skills.categories.ai;

    // Projects
    safeText('#projects .section-tag', t.projects.tag);
    safeHTML('#projects .section-title', t.projects.title);

    // Contact
    safeText('#contact .section-tag', t.contact.tag);
    safeHTML('#contact .section-title', t.contact.title);
    safeText('.cta-card h3', t.contact.cardTitle);
    safeText('.cta-card p', t.contact.cardText);
    safeText('.cta-buttons .btn-secondary span', t.contact.btnGithub);
    safeText('.cta-buttons .btn-primary span', t.contact.btnLinkedin);
}

function safeText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
}

function safeHTML(selector, html) {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
}

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    // Apply saved language or default to English
    if (typeof updateUILanguage === 'function') {
        setTimeout(updateUILanguage, 100);
    }
});
