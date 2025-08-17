// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links and active state management
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

// Active navigation state management
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 100; // Offset for better detection
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if current scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });
    
    // If we're at the very top, highlight home
    if (scrollPosition < 200) {
        current = 'home';
    }
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Scroll to Top Button Functionality
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top functionality
document.addEventListener('DOMContentLoaded', initScrollToTop);

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Set initial active state
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Enhanced Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(10, 14, 23, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 23, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Rain Effect with Numbers and Math Symbols
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    
    // Numbers and math symbols for rain (no brackets or parentheses)
    const mathSymbols = ['+', '×', '÷', '=', 'θ', 'π', '∑', '∫', '√', '∞', '±', '≈', '≠', '≤', '≥'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    // Combine numbers and math symbols
    const allSymbols = [...numbers, ...mathSymbols];
    const randomContent = allSymbols[Math.floor(Math.random() * allSymbols.length)];
    
    raindrop.textContent = randomContent;
    raindrop.style.left = Math.random() * 100 + '%';
    raindrop.style.animationDuration = (Math.random() * 20 + 25) + 's';
    raindrop.style.opacity = Math.random() * 0.3 + 0.1;
    
    // Make raindrops fall through the entire page height
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    raindrop.style.setProperty('--fall-distance', documentHeight + 'px');
    
    const rainContainer = document.getElementById('rain-container');
    if (rainContainer) {
        rainContainer.appendChild(raindrop);
        
        // Remove raindrop after animation
        setTimeout(() => {
            if (raindrop.parentNode) {
                raindrop.parentNode.removeChild(raindrop);
            }
        }, 30000);
    }
}

// Start rain effect
setInterval(createRaindrop, 400);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.mission-card, .achievements-card, .board-member, .join-card, .events-card, .tech-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize bar chart animations
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        const height = bar.style.height;
        bar.style.height = '0';
        setTimeout(() => {
            bar.style.height = height;
        }, index * 200);
    });
});

// WhatsApp link placeholder - removed since WhatsApp link is already functional

// Enhanced hover effects for board members - removed conflicting effects
// CSS hover effects are now used for consistent styling with About Us section

// Enhanced parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Enhanced hero title animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroBadge = document.querySelector('.hero-badge');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) {
        // Staggered animation for hero elements
        setTimeout(() => {
            if (heroBadge) {
                heroBadge.style.opacity = '1';
                heroBadge.style.transform = 'translateY(0)';
            }
        }, 300);
        
        setTimeout(() => {
            if (heroTitle) {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }
        }, 600);
        
        setTimeout(() => {
            if (heroDescription) {
                heroDescription.style.opacity = '1';
                heroDescription.style.transform = 'translateY(0)';
            }
        }, 900);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced scroll progress indicator - removed

// Interactive data visualization
document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    const points = document.querySelectorAll('.point');
    
    // Add click effects to bars
    bars.forEach(bar => {
        bar.addEventListener('click', () => {
            bar.style.transform = 'scaleY(1.2)';
            setTimeout(() => {
                bar.style.transform = 'scaleY(1)';
            }, 200);
        });
    });
    
    // Add hover effects to scatter plot points
    points.forEach(point => {
        point.addEventListener('mouseenter', () => {
            point.style.transform = 'scale(1.5)';
            point.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        });
        
        point.addEventListener('mouseleave', () => {
            point.style.transform = 'scale(1)';
            point.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
        });
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'info' ? 'rgba(255, 215, 0, 0.9)' : 'rgba(255, 100, 100, 0.9)'};
        color: ${type === 'info' ? '#000' : '#fff'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 215, 0, 0.3);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced button interactions
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mouse trail effect for hero section
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    let mouseTrail = [];
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${x}px;
            top: ${y}px;
            animation: fadeOut 1s linear forwards;
        `;
        
        hero.appendChild(trail);
        mouseTrail.push(trail);
        
        if (mouseTrail.length > 10) {
            const oldTrail = mouseTrail.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.parentNode.removeChild(oldTrail);
            }
        }
    });
});

// Add CSS for mouse trail fade out
const mouseTrailStyle = document.createElement('style');
mouseTrailStyle.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(mouseTrailStyle);

// Enhanced tech stack interactions
document.addEventListener('DOMContentLoaded', () => {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-8px) scale(1.05)';
            item.style.boxShadow = '0 15px 30px rgba(255, 215, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = 'none';
        });
    });
});

// Floating particles effect removed

// LinkedIn Button Popup Functionality
let linkedInInitialized = false;

function initLinkedInPopup() {
    if (linkedInInitialized) return; // Prevent multiple initializations
    
    const linkedinBtn = document.getElementById('linkedin-btn');
    
    if (linkedinBtn) {
        linkedInInitialized = true;
        linkedinBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showLinkedInPopup();
        });
    }
}

// Initialize LinkedIn popup on DOM ready
document.addEventListener('DOMContentLoaded', initLinkedInPopup);

// Also try on window load as backup
window.addEventListener('load', initLinkedInPopup);

// LinkedIn Popup Function
function showLinkedInPopup() {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        backdrop-filter: blur(5px);
    `;
    
    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'linkedin-popup';
    popup.style.cssText = `
        background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
        border: 2px solid #0077b5;
        border-radius: 16px;
        padding: 2rem;
        max-width: 400px;
        width: 90%;
        text-align: center;
        position: relative;
        box-shadow: 0 20px 40px rgba(0, 119, 181, 0.3);
        opacity: 1;
        visibility: visible;
        display: block;
    `;
    
    // Popup content
    popup.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <i class="fab fa-linkedin" style="font-size: 3rem; color: #0077b5; margin-bottom: 1rem; display: block;"></i>
            <h3 style="color: #e2e8f0; font-size: 1.5rem; margin-bottom: 1rem;">LinkedIn Coming Soon!</h3>
            <p style="color: #a0aec0; line-height: 1.6; margin-bottom: 1.5rem;">
                We're working on setting up our LinkedIn page to connect with the broader data science community. 
                Stay tuned for updates and professional networking opportunities!
            </p>
        </div>
        <button class="popup-close-btn" style="
            background: linear-gradient(135deg, #0077b5 0%, #005885 100%);
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        ">Got it!</button>
    `;
    
    // Add popup to overlay
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Prevent clicks on popup content from closing the popup
    popup.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Close popup functionality
    const closeBtn = popup.querySelector('.popup-close-btn');
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling to overlay
        document.body.removeChild(overlay);
    });
    
    // Close popup when clicking overlay
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    // Close popup with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Add CSS animations for popup
const popupStyles = document.createElement('style');
popupStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideIn {
        from { 
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }
        to { 
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes slideOut {
        from { 
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to { 
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }
    }
    
    .popup-close-btn:hover {
        background: linear-gradient(135deg, #005885 0%, #004065 100%) !important;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 119, 181, 0.4);
    }
`;
document.head.appendChild(popupStyles);

// Social Media Footer Links Popup Functionality
function initSocialMediaPopups() {
    const socialLinks = [
        { id: 'footer-linkedin', platform: 'LinkedIn' },
        { id: 'footer-twitter', platform: 'Twitter' },
        { id: 'footer-instagram', platform: 'Instagram' }
    ];
    
    socialLinks.forEach(link => {
        const element = document.getElementById(link.id);
        if (element) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                showSocialMediaPopup(link.platform);
            });
        }
    });
}

// Social Media Popup Function
function showSocialMediaPopup(platform) {
    // Create small side popup
    const popup = document.createElement('div');
    popup.className = 'social-media-popup';
    popup.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
        border: 2px solid #ffd700;
        border-radius: 8px;
        padding: 1rem;
        width: 120px;
        text-align: center;
        z-index: 99999;
        box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    // Get platform icon
    const platformIcon = platform.toLowerCase();
    
    // Popup content
    popup.innerHTML = `
        <i class="fab fa-${platformIcon}" style="font-size: 1.5rem; color: #ffd700; margin-bottom: 0.5rem; display: block;"></i>
        <div style="color: #e2e8f0; font-size: 0.9rem; font-weight: 600; white-space: nowrap;">Coming Soon!</div>
    `;
    
    // Add popup to body
    document.body.appendChild(popup);
    
    // Animate popup in
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto-close after 1.5 seconds
    setTimeout(() => {
        closePopup();
    }, 1500);
    
    function closePopup() {
        popup.style.opacity = '0';
        popup.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (popup.parentNode) {
                document.body.removeChild(popup);
            }
        }, 300);
    }
}

// Initialize social media popups on DOM ready
document.addEventListener('DOMContentLoaded', initSocialMediaPopups);

// Also try on window load as backup
window.addEventListener('load', initSocialMediaPopups);

// LinkedIn Button Functionality for Board Members
function initMemberLinkedInButtons() {
    const linkedinButtons = document.querySelectorAll('.linkedin-btn[data-linkedin]');
    
    linkedinButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const memberId = button.getAttribute('data-linkedin');
            showMemberLinkedInPopup(memberId);
        });
    });
}

// Member LinkedIn Popup Function
function showMemberLinkedInPopup(memberId) {
    // Get member name from the button's parent container
    const memberContainer = document.querySelector(`[data-linkedin="${memberId}"]`).closest('.board-member');
    const memberName = memberContainer.querySelector('h3').textContent;
    
    // Create small side popup (same style as social media popups)
    const popup = document.createElement('div');
    popup.className = 'member-linkedin-popup';
    popup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
        border: 2px solid #2A489D;
        border-radius: 8px;
        padding: 1rem;
        width: 120px;
        text-align: center;
        z-index: 99999;
        box-shadow: 0 8px 20px rgba(42, 72, 157, 0.3);
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    // Popup content
    popup.innerHTML = `
        <i class="fab fa-linkedin" style="font-size: 1.5rem; color: #2A489D; margin-bottom: 0.5rem; display: block;"></i>
        <div style="color: #e2e8f0; font-size: 0.9rem; font-weight: 600; white-space: nowrap;">Coming Soon!</div>
    `;
    
    // Add popup to body
    document.body.appendChild(popup);
    
    // Animate popup in
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto-close after 1.5 seconds
    setTimeout(() => {
        closePopup();
    }, 1500);
    
    function closePopup() {
        popup.style.opacity = '0';
        popup.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (popup.parentNode) {
                document.body.removeChild(popup);
            }
        }, 300);
    }
}

// Initialize member LinkedIn buttons on DOM ready
document.addEventListener('DOMContentLoaded', initMemberLinkedInButtons);

// Also try on window load as backup
window.addEventListener('load', initMemberLinkedInButtons);
