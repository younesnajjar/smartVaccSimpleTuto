"use strict";

var elem = document.querySelector('.testimonial-carousel');
var flkty = new Flickity( elem, {
    // options
	contain: true,
	wrapAround: true,
	autoPlay: true,
	percentPosition: false, //carousel-cell is using px width
  
});

// Initialize Features Carousel
var featuresCarousel = document.querySelector('.features-carousel');
if (featuresCarousel) {
    var featuresFlickity = new Flickity(featuresCarousel, {
        contain: true,
        wrapAround: true,
        autoPlay: 4000, // Auto-advance every 4 seconds
        percentPosition: false,
        adaptiveHeight: true,
        prevNextButtons: true,
        pageDots: false,
        selectedAttraction: 0.025, // Smoother transitions
        friction: 0.28, // Smoother transitions
        dragThreshold: 3, // Smoother drag
        fade: true, // Enable fade transition
        duration: 800 // Transition duration in milliseconds
    });

    // Create progress bar
    var progressBar = document.createElement('div');
    progressBar.className = 'carousel-progress-bar';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    featuresCarousel.appendChild(progressBar);

    // Progress bar functionality
    var progressFill = progressBar.querySelector('.progress-fill');
    var autoPlayInterval = 4000;
    var progressInterval;
    var startTime;

    function startProgress() {
        startTime = Date.now();
        progressFill.style.width = '0%';
        
        progressInterval = setInterval(function() {
            var elapsed = Date.now() - startTime;
            var progress = (elapsed / autoPlayInterval) * 100;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(progressInterval);
            }
            
            progressFill.style.width = progress + '%';
        }, 50); // Update every 50ms for smooth animation
    }

    function resetProgress() {
        clearInterval(progressInterval);
        progressFill.style.width = '0%';
    }

    // Start progress when carousel changes
    featuresFlickity.on('select', function(index) {
        updateNavButtons(index);
        resetProgress();
        startProgress();
    });

    // Pause progress on user interaction
    featuresFlickity.on('dragStart', function() {
        clearInterval(progressInterval);
    });

    featuresFlickity.on('dragEnd', function() {
        resetProgress();
        startProgress();
    });

    // Carousel Navigation
    var navButtons = document.querySelectorAll('.carousel-nav-btn');
    navButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            featuresFlickity.select(index);
            updateNavButtons(index);
        });
    });

    function updateNavButtons(activeIndex) {
        navButtons.forEach(function(button, index) {
            if (index === activeIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // Start initial progress
    startProgress();
}

// Functions for "Learn More" functionality
function showBenefitsDetails() {
    alert("Détails des fonctionnalités SmartVacc:\n\n" +
          "• OCR CNIE & Boucles: Scan automatique des pièces d'identité et boucles bovines\n" +
          "• Cartographie & Géolocalisation: Suivi en temps réel par douar et commune\n" +
          "• Statistiques & Analyses: Visualisation détaillée des données de campagne\n" +
          "• Exports & Rapports: Génération automatique des fichiers ONSSA");
}

function showFeatureDetails(feature) {
    var details = {
        'ocr': "Lecture OCR Intelligente:\n\n• Scan automatique des CNIEs (cartes d'identité)\n• Reconnaissance des boucles bovines\n• Saisie automatique des données\n• Réduction de 90% du temps de saisie\n• Précision de 99.5%",
        'offline': "Saisie Hors-ligne & Synchronisation:\n\n• Travail sans connexion internet\n• Synchronisation automatique dès reconnexion\n• Données sauvegardées localement\n• Pas de perte de données\n• Compatible zones rurales",
        'mapping': "Cartographie & Géolocalisation:\n\n• Carte interactive des campagnes\n• Géolocalisation précise par douar\n• Suivi en temps réel\n• Visualisation par commune\n• Historique des zones visitées",
        'analytics': "Statistiques & Analyses Avancées:\n\n• Taux de couverture par zone\n• Progression des campagnes\n• Analyses détaillées\n• Rapports de performance\n• Prévisions et tendances",
        'reports': "Génération Automatique des Rapports:\n\n• Rapports PDF conformes ONSSA\n• Export Excel automatique\n• Génération en un clic\n• Format standardisé\n• Prêt pour paiement",
        'dashboard': "Tableau de Bord Intelligent:\n\n• Indicateurs en temps réel\n• Vue d'ensemble des campagnes\n• Alertes et notifications\n• Performance par équipe\n• Objectifs et KPIs"
    };
    
    alert(details[feature] || "Détails non disponibles");
}

function showAllFeatures() {
    alert("Toutes les fonctionnalités SmartVacc:\n\n" +
          "📱 APPLICATION MOBILE\n" +
          "• Interface intuitive et responsive\n" +
          "• Compatible Android et iOS\n" +
          "• Optimisée pour le terrain\n\n" +
          "🔍 OCR INTELLIGENT\n" +
          "• Scan CNIE et boucles bovines\n" +
          "• Reconnaissance automatique\n" +
          "• Validation en temps réel\n\n" +
          "🗺️ CARTOGRAPHIE\n" +
          "• Géolocalisation précise\n" +
          "• Carte interactive\n" +
          "• Suivi par douar/commune\n\n" +
          "📊 ANALYTICS\n" +
          "• Statistiques détaillées\n" +
          "• Rapports de performance\n" +
          "• Tableaux de bord\n\n" +
          "📄 RAPPORTS\n" +
          "• Génération automatique\n" +
          "• Format ONSSA\n" +
          "• Export PDF/Excel\n\n" +
          "⚡ SYNCHRONISATION\n" +
          "• Travail hors-ligne\n" +
          "• Sync automatique\n" +
          "• Données sécurisées");
}

function showAdvantagesDetails() {
    alert("Avantages de SmartVacc:\n\n" +
          "⏰ GAIN DE TEMPS\n" +
          "• Réduction de 80% du temps de saisie\n" +
          "• Automatisation des processus\n" +
          "• Élimination de la paperasse\n\n" +
          "💰 PAIEMENTS ACCÉLÉRÉS\n" +
          "• Rapports conformes ONSSA\n" +
          "• Soumission automatique\n" +
          "• Réduction des retards\n\n" +
          "📊 GESTION COMPLÈTE\n" +
          "• Base de données centralisée\n" +
          "• Historique des campagnes\n" +
          "• Analyses par zone et éleveur\n\n" +
          "🔒 SÉCURITÉ\n" +
          "• Données chiffrées\n" +
          "• Sauvegarde automatique\n" +
          "• Conformité RGPD");
}

function requestDemo() {
    alert("Demande de démonstration SmartVacc\n\n" +
          "Merci pour votre intérêt !\n\n" +
          "Notre équipe vous contactera dans les 24h pour organiser une démonstration personnalisée.\n\n" +
          "📧 Email: contact@smartvacc.ma\n" +
          "📱 Téléphone: +212 XXX XXX XXX\n\n" +
          "La démonstration inclura:\n" +
          "• Présentation des fonctionnalités\n" +
          "• Test de l'application\n" +
          "• Questions/réponses\n" +
          "• Devis personnalisé");
}

// Navigation Active State Management
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Function to update active navigation
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Update on page load
    updateActiveNav();
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Store Flickity instances for mini-carousels
var miniCarousels = {};
document.addEventListener('DOMContentLoaded', function() {
    var mappingSlider = document.querySelector('#feature-mapping-slider .mini-carousel');
    if (mappingSlider) {
        miniCarousels.mapping = new Flickity(mappingSlider, {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: 2500,
            wrapAround: true,
            draggable: true,
            selectedAttraction: 0.03,
            friction: 0.25
        });
    }
    var statsSlider = document.querySelector('#feature-stats-slider .mini-carousel');
    if (statsSlider) {
        miniCarousels.stats = new Flickity(statsSlider, {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: 2500,
            wrapAround: true,
            draggable: true,
            selectedAttraction: 0.03,
            friction: 0.25
        });
    }
    var reportsSlider = document.querySelector('#feature-reports-slider .mini-carousel');
    if (reportsSlider) {
        miniCarousels.reports = new Flickity(reportsSlider, {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            autoPlay: 2500,
            wrapAround: true,
            draggable: true,
            selectedAttraction: 0.03,
            friction: 0.25
        });
    }
});
