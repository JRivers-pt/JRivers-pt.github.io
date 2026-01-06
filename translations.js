/**
 * Portfolio Translations - EN (default) / PT
 */
const TRANSLATIONS = {
    en: {
        // Navigation
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: "Let's Talk",

        // Hero
        heroBadge: 'Bridging Business & Technology',
        heroTitle1: 'IT Strategist turned',
        heroTitle2: 'Full-Stack Developer',
        heroDesc: 'Leveraging <strong>7+ years of Real-World IT & Business Strategy</strong> to build practical, <span class="highlight">business-centric SaaS solutions</span>. I bridge the gap between complex systems, code, and profit.',
        seeMyCode: 'See My Code',
        myJourney: 'My Journey',
        projectsLabel: 'Projects',
        yearsExp: 'Years IT Exp.',
        technologies: 'Technologies',
        scrollExplore: 'Scroll to explore',

        // About
        aboutTag: 'My Unique Angle',
        aboutTitle: 'The <span class="gradient-text">Hybrid</span> Advantage',
        aboutIntro: "My background isn't typical. I haven't just written code—I've <strong>planned and installed people counting solutions for major clients</strong>, <strong>administered Microsoft 365 for logistics</strong>, and built business strategies that drive growth.",
        aboutP1: 'I call my approach <strong>Vibecoding</strong>: the ability to rapidly turn abstract ideas into deployed, functional software using modern AI and a deep understanding of IT systems.',
        aboutP2: "I don't just build features; I <strong>bridge the gap</strong> between technical complexity and business reality. Whether it's a new SaaS platform or optimizing internal workflows, I bring a holistic \"IT Pro\" mindset to development.",
        theBridge: 'The Bridge',
        theBridgeDesc: 'Connecting IT Systems & Business Goals',
        itFoundation: 'Solid IT Foundation',
        itFoundationDesc: 'Networking, Security & Admin expertise',
        vibecoder: 'Vibecoder',
        vibecoderDesc: 'Rapid, AI-driven product development',

        // Skills
        skillsTag: 'Total Weaponry',
        skillsTitle: 'Skills & <span class="gradient-text">Expertise</span>',
        frontend: 'Frontend',
        backend: 'Backend',
        itOps: 'IT Ops & Business',
        aiTools: 'AI & Tools',

        // Projects
        projectsTag: 'Portfolio',
        projectsTitle: 'Featured <span class="gradient-text">Projects</span>',
        viewAll: 'View All 13 Projects on GitHub',
        liveDemo: 'Live Demo',
        viewProject: 'View Project',
        code: 'Code',

        // Contact
        contactTag: 'Contact',
        contactTitle: "Let's Build <span class=\"gradient-text\">Together</span>",
        contactCta: 'Ready to discuss a project?',
        contactDesc: "Whether you need a developer for a new venture or want to collaborate, I'm here to help.",

        // Footer
        footer: '© 2024 João Ribeiro. Built with passion and vibecoding. ⚡'
    },

    pt: {
        // Navigation
        about: 'Sobre',
        skills: 'Skills',
        projects: 'Projetos',
        contact: 'Contacto',

        // Hero
        heroBadge: 'A Unir Negócio e Tecnologia',
        heroTitle1: 'De IT Strategist a',
        heroTitle2: 'Full-Stack Developer',
        heroDesc: 'A alavancar <strong>7+ anos de Estratégia IT e Negócio</strong> para construir soluções <span class="highlight">SaaS práticas e focadas no negócio</span>. Faço a ponte entre sistemas complexos, código e lucro.',
        seeMyCode: 'Ver Código',
        myJourney: 'O Meu Percurso',
        projectsLabel: 'Projetos',
        yearsExp: 'Anos Exp. IT',
        technologies: 'Tecnologias',
        scrollExplore: 'Scroll para explorar',

        // About
        aboutTag: 'O Meu Ângulo Único',
        aboutTitle: 'A Vantagem <span class="gradient-text">Híbrida</span>',
        aboutIntro: 'O meu percurso não é típico. Não só escrevi código—<strong>planeei e instalei soluções de contagem de pessoas para grandes clientes</strong>, <strong>administrei Microsoft 365 para logística</strong>, e construí estratégias de negócio que geram crescimento.',
        aboutP1: 'Chamo à minha abordagem <strong>Vibecoding</strong>: a capacidade de rapidamente transformar ideias abstratas em software funcional e deployed, usando AI moderna e um profundo conhecimento de sistemas IT.',
        aboutP2: 'Não construo apenas funcionalidades; <strong>faço a ponte</strong> entre complexidade técnica e realidade de negócio. Seja uma nova plataforma SaaS ou otimizar workflows internos, trago uma mentalidade holística de "IT Pro" ao desenvolvimento.',
        theBridge: 'A Ponte',
        theBridgeDesc: 'Ligando Sistemas IT e Objetivos de Negócio',
        itFoundation: 'Base IT Sólida',
        itFoundationDesc: 'Expertise em Redes, Segurança e Admin',
        vibecoder: 'Vibecoder',
        vibecoderDesc: 'Desenvolvimento rápido com AI',

        // Skills
        skillsTag: 'Arsenal Completo',
        skillsTitle: 'Skills & <span class="gradient-text">Expertise</span>',
        frontend: 'Frontend',
        backend: 'Backend',
        itOps: 'IT Ops & Negócio',
        aiTools: 'AI & Ferramentas',

        // Projects
        projectsTag: 'Portfólio',
        projectsTitle: 'Projetos <span class="gradient-text">Destacados</span>',
        viewAll: 'Ver Todos os 13 Projetos no GitHub',
        liveDemo: 'Ver Demo',
        viewProject: 'Ver Projeto',
        code: 'Código',

        // Contact
        contactTag: 'Contacto',
        contactTitle: 'Vamos Construir <span class="gradient-text">Juntos</span>',
        contactCta: 'Pronto para discutir um projeto?',
        contactDesc: 'Quer precises de um developer para um novo projeto ou queiras colaborar, estou aqui para ajudar.',

        // Footer
        footer: '© 2024 João Ribeiro. Construído com paixão e vibecoding. ⚡'
    }
};

// Default language is English
let currentLang = localStorage.getItem('portfolioLang') || 'en';

function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);
    updateUILanguage();
}

function updateUILanguage() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, i) => {
        const keys = ['about', 'skills', 'projects', 'contact'];
        if (keys[i] && !link.classList.contains('nav-link-cta')) {
            link.textContent = t(keys[i]);
        }
        if (link.classList.contains('nav-link-cta')) {
            link.textContent = t('contact');
        }
    });

    // Hero Badge
    const heroBadge = document.querySelector('.hero-badge span:last-child');
    if (heroBadge) heroBadge.textContent = t('heroBadge');

    // Hero Title
    const titleLines = document.querySelectorAll('.title-line');
    if (titleLines[0]) titleLines[0].textContent = t('heroTitle1');
    const titleName = document.querySelector('.title-name');
    if (titleName) titleName.textContent = t('heroTitle2');

    // Hero Description
    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.innerHTML = t('heroDesc');

    // Hero Buttons
    const btnPrimary = document.querySelector('.hero-actions .btn-primary span');
    const btnSecondary = document.querySelector('.hero-actions .btn-secondary span');
    if (btnPrimary) btnPrimary.textContent = t('seeMyCode');
    if (btnSecondary) btnSecondary.textContent = t('myJourney');

    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    const statKeys = ['projectsLabel', 'yearsExp', 'technologies'];
    statLabels.forEach((label, i) => {
        if (statKeys[i]) label.textContent = t(statKeys[i]);
    });

    // Scroll indicator
    const scrollText = document.querySelector('.scroll-indicator span');
    if (scrollText) scrollText.textContent = t('scrollExplore');

    // About section
    const aboutTag = document.querySelector('#about .section-tag');
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTag) aboutTag.textContent = t('aboutTag');
    if (aboutTitle) aboutTitle.innerHTML = t('aboutTitle');

    const aboutIntro = document.querySelector('.about-intro');
    if (aboutIntro) aboutIntro.innerHTML = t('aboutIntro');

    const aboutPs = document.querySelectorAll('.about-text > p:not(.about-intro)');
    if (aboutPs[0]) aboutPs[0].innerHTML = t('aboutP1');
    if (aboutPs[1]) aboutPs[1].innerHTML = t('aboutP2');

    // Highlight items
    const highlightItems = document.querySelectorAll('.highlight-item');
    const hlKeys = [
        ['theBridge', 'theBridgeDesc'],
        ['itFoundation', 'itFoundationDesc'],
        ['vibecoder', 'vibecoderDesc']
    ];
    highlightItems.forEach((item, i) => {
        if (hlKeys[i]) {
            const strong = item.querySelector('strong');
            const span = item.querySelector('.highlight-text span');
            if (strong) strong.textContent = t(hlKeys[i][0]);
            if (span) span.textContent = t(hlKeys[i][1]);
        }
    });

    // Skills section
    const skillsTag = document.querySelector('#skills .section-tag');
    const skillsTitle = document.querySelector('#skills .section-title');
    if (skillsTag) skillsTag.textContent = t('skillsTag');
    if (skillsTitle) skillsTitle.innerHTML = t('skillsTitle');

    // Projects section
    const projectsTag = document.querySelector('#projects .section-tag');
    const projectsTitle = document.querySelector('#projects .section-title');
    if (projectsTag) projectsTag.textContent = t('projectsTag');
    if (projectsTitle) projectsTitle.innerHTML = t('projectsTitle');

    const viewAllBtn = document.querySelector('.projects-cta .btn-outline span');
    if (viewAllBtn) viewAllBtn.textContent = t('viewAll');

    // Contact section
    const contactTag = document.querySelector('#contact .section-tag');
    const contactTitle = document.querySelector('#contact .section-title');
    if (contactTag) contactTag.textContent = t('contactTag');
    if (contactTitle) contactTitle.innerHTML = t('contactTitle');

    const ctaH3 = document.querySelector('.cta-card h3');
    const ctaP = document.querySelector('.cta-card p');
    if (ctaH3) ctaH3.textContent = t('contactCta');
    if (ctaP) ctaP.textContent = t('contactDesc');

    // Footer
    const footerP = document.querySelector('.footer-content p');
    if (footerP) footerP.textContent = t('footer');

    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? '🇵🇹 PT' : '🇬🇧 EN';
    }
}
