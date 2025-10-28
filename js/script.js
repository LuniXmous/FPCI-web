// Data content
const content = {
    events: [
        {
            title: "Open Registration!",
            description: "12-21 April Jangan Sampai kelewatan Ya!",
            image: "images/feeds oprec.png"
        },
        {
            title: "Join Us!",
            description: "Extend! Perpanjangan Oprec dari 21-27 April Jangan kelewatan kesempatan ke dua ini!",
            image: "images/feeds oprec extend.png"
        },
        {
            title: "Gabung!",
            description: "Gabung dengan Kami Mulai dari 12-21 April!",
            image: "images/feeds oprec.png"
        }
    ],
    opinions: [
        {
            title: "100 Days of Prabowo-Gibran: Measuring the New Direction of Indonesian Diplomacy on the Global Stage",
            description: "As President Prabowo Subianto and Vice President Gibran Rakabuming Raka mark their first 100 days in office, Indonesia's diplomatic trajectory is undergoing significant transformation.",
            image: "https://mlkevl9seetf.i.optimole.com/cb:_Kld.4e4db/w:1080/h:721/q:mauto/f:best/id:1741c2c901c864e6189354330e99d43a/https://opinion.fpciuinjakarta.com/100-days-of-prabowo-gibran_image_2.png",
            url: "https://opinion.fpciuinjakarta.com/political-and-economy/read/opinion/07/02/2025/4356/100-days-of-prabowo-gibran/"
        },
        {
            title: "Unpacking the Biases in Trump's Gaza Peace Plan",
            description: "The conflict between Israel and Palestine has once again captured international attention following the events of October 7, 2023.",
            image: "https://mlkevl9seetf.i.optimole.com/cb:_Kld.4e4db/w:770/h:513/q:mauto/f:best/id:1b971ef8eb128a32e5996c6f148ea89c/https://opinion.fpciuinjakarta.com/2025-09-29T183704Z_1683638106_RC2U1HAA3QOZ_RTRMADP_3_USA-TRUMP-ISRAEL-1759171157.webp",
            url: "https://opinion.fpciuinjakarta.com/middle-east/read/opinion/17/10/2025/5271/unpacking-the-biases-in-trumps-gaza-peace-plan/"
        },
        {
            title: "China-US Trade Meeting in Stockholm: Efforts to Extend Tariff Ceasefire",
            description: "The historic Rosenbad building on the shores of Lake Mälaren in Stockholm became the focus of international attention in late July 2025.",
            image: "https://mlkevl9seetf.i.optimole.com/cb:_Kld.4e4db/w:1024/h:655/q:mauto/f:best/id:841749df74dd4f914c9529d43a25dc5f/https://opinion.fpciuinjakarta.com/imago821947589.jpg",
            url: "https://opinion.fpciuinjakarta.com/political-and-economy/economy/read/opinion/30/09/2025/5245/china-us-trade-meeting-in-stockholm-efforts-to-extend-tariff-ceasefire/"
        }
    ]
};

// Load events
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;

    eventsContainer.innerHTML = '';
    
    content.events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'project-card fade-in';
        eventCard.innerHTML = `
            <div class="project-content">
                <h3>${event.title}</h3>
                <div class="project-img">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <p>${event.description}</p>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
}

// Load opinions
function loadOpinions() {
    const opinionsContainer = document.getElementById('opinions-container');
    if (!opinionsContainer) return;

    opinionsContainer.innerHTML = '';
    
    content.opinions.forEach(opinion => {
        const opinionCard = document.createElement('div');
        opinionCard.className = 'opinion-card fade-in';
        opinionCard.innerHTML = `
            <div class="opinion-content">
                <div class="opinion-img">
                    <img src="${opinion.image}" alt="${opinion.title}">
                </div>
                <h6 class="opinion-title">${opinion.title}</h6>
                <p class="opinion-desc">${opinion.description}</p>
                <a href="${opinion.url}" target="_blank" class="opinion-btn">Baca Selengkapnya</a>
            </div>
        `;
        opinionsContainer.appendChild(opinionCard);
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", function () {
    // Load content
    loadEvents();
    loadOpinions();

    // Observe fade elements
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    fadeElements.forEach(el => observer.observe(el));

    // Header scroll effect
    const homeSection = document.querySelector('#home');
    const joinSection = document.querySelector('#join');

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const logo = document.querySelector('.logo');
        const navLinks = document.querySelectorAll('.nav-links a');
        const scrollPos = window.scrollY + window.innerHeight / 2;
        
        if (homeSection && joinSection) {
            const inHome = scrollPos >= homeSection.offsetTop && scrollPos < homeSection.offsetTop + homeSection.offsetHeight;
            const inJoin = scrollPos >= joinSection.offsetTop && scrollPos < joinSection.offsetTop + joinSection.offsetHeight;
            
            if (inHome || inJoin) {
                header.classList.remove('scrolled');
                if (logo) logo.style.color = '#EDE8DC';
                navLinks.forEach(link => link.style.color = '#EDE8DC');
            } else {
                header.classList.add('scrolled');
                if (logo) logo.style.color = '#000000';
                navLinks.forEach(link => link.style.color = '#000000');
            }
        }
    });

    // Typing effect for hero text
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }, 1000);
    }
});