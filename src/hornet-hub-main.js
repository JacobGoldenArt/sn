// Hornet Hub Service Portal JavaScript
// This script handles the dynamic content generation for service cards

// Service card data
const serviceCardsData = [
    {
        title: "Administrative & Business",
        description: "Business process automation, facilities management, and administrative support services.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6m10 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h2l-4 4h-2m-6 0h2l-4-4h2z"/>',
        color: "#4e58a6", // Princess Tree Purple
        services: [
            "Business Capability & Process Automation",
            "Facilities Management", 
            "Administrative Support Services"
        ]
    },
    {
        title: "Communication & Collaboration",
        description: "Tools and services for effective communication, collaboration, and connectivity across campus.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>',
        color: "#006472", // American River Teal
        services: [
            "Conferencing & Telephony",
            "Email & Collaboration Services",
            "Communication Platforms"
        ]
    },
    {
        title: "Desktop & Mobile Computing",
        description: "Computer support, mobile device management, and printing services for the campus community.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
        color: "#8b346d", // Mulberry
        services: [
            "Desktop & Mobile Device Support",
            "Printing & Related Services",
            "Software Distribution"
        ]
    },
    {
        title: "Information Security",
        description: "Comprehensive security services to protect campus data, systems, and digital infrastructure.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
        color: "#c6401d", // Red Maple
        services: [
            "Access Management",
            "Secure Computing",
            "Security Consulting & Education"
        ]
    },
    {
        title: "Infrastructure",
        description: "Core technology infrastructure including networks, servers, and system monitoring services.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>',
        color: "#006472", // American River Teal
        services: [
            "Network Services",
            "Database Management",
            "Monitoring & Alert Management"
        ]
    },
    {
        title: "IT Professional Services",
        description: "Professional IT consulting, project management, and specialized technical services.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
        color: "#8b346d", // Mulberry
        services: [
            "Consulting & Documentation",
            "IT Service Delivery & Support",
            "Project Management"
        ]
    },
    {
        title: "Research",
        description: "Specialized computing resources and support services for academic and scientific research.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>',
        color: "#4e58a6", // Princess Tree Purple
        services: [
            "Research Data Services",
            "Research Software",
            "Research-Specific Computing & Applications"
        ]
    },
    {
        title: "Teaching & Learning",
        description: "Educational technology services supporting innovative teaching methods and student learning.",
        iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>',
        color: "#008453", // Stinger Green
        services: [
            "Academic Technology & Support",
            "Assessment Systems & Learning Analytics",
            "Educational Platforms"
        ]
    }
];

// Function to create a service card HTML
function createServiceCard(cardData) {
    const servicesHTML = cardData.services.map(service => 
        `<li class="hornet-hub-service-card-service-item">${service}</li>`
    ).join('');

    return `
        <div class="hornet-hub-service-card">
            <div class="hornet-hub-service-card-header">
                <div class="hornet-hub-service-card-icon" style="background-color: ${cardData.color};">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${cardData.iconSvg}
                    </svg>
                </div>
                <div class="hornet-hub-service-card-content">
                    <h3 class="hornet-hub-service-card-title">${cardData.title}</h3>
                    <p class="hornet-hub-service-card-description">${cardData.description}</p>
                    <ul class="hornet-hub-service-card-services">
                        ${servicesHTML}
                    </ul>
                    <button class="hornet-hub-service-card-link">
                        View more...
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to render all service cards
function renderServiceCards() {
    const container = document.getElementById('serviceCardsContainer');
    if (container) {
        const cardsHTML = serviceCardsData.map(cardData => createServiceCard(cardData)).join('');
        container.innerHTML = cardsHTML;
    }
}

// Function to handle sidebar navigation clicks
function handleSidebarNavigation() {
    const navItems = document.querySelectorAll('.hornet-hub-sidebar-nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Here you could add functionality to filter service cards
            // based on the selected category
        });
    });
}

// Function to handle search functionality
function handleSearch() {
    const searchInputs = document.querySelectorAll('.hornet-hub-search-input, .hornet-hub-main-search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // Here you could add functionality to filter service cards
            // based on the search term
            console.log('Searching for:', searchTerm);
        });
    });
}

// Function to handle service card interactions
function handleServiceCardInteractions() {
    // Add event listeners for "View more..." buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('hornet-hub-service-card-link')) {
            e.preventDefault();
            const cardTitle = e.target.closest('.hornet-hub-service-card').querySelector('.hornet-hub-service-card-title').textContent;
            console.log('View more clicked for:', cardTitle);
            
            // Here you could add functionality to show more details
            // or navigate to a detailed service page
        }
    });
}

// Function to handle help button
function handleHelpButton() {
    const helpButton = document.querySelector('.hornet-hub-help-button');
    
    if (helpButton) {
        helpButton.addEventListener('click', function() {
            console.log('Help button clicked');
            
            // Here you could add functionality to show help dialog
            // or open a chat widget
        });
    }
}

// Initialize the application
function initializeApp() {
    // Render service cards
    renderServiceCards();
    
    // Set up event handlers
    handleSidebarNavigation();
    handleSearch();
    handleServiceCardInteractions();
    handleHelpButton();
    
    console.log('Hornet Hub Service Portal initialized');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}