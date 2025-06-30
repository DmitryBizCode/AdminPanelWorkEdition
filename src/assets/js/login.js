// Belmar Admin Panel Login JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize login functionality
    initLoginForm();
    initAnimations();
    initParticleEffect();
});

function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const loginBtn = document.getElementById('loginBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Add focus effects to form inputs
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Add typing animation
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-content');
            } else {
                this.classList.remove('has-content');
            }
        });
    });
}

function handleLogin() {
    const loginBtn = document.getElementById('loginBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Hide any previous error messages
    hideErrorMessage();

    // Validate inputs
    if (!email || !password) {
        showErrorMessage('Пожалуйста, заполните все поля');
        return;
    }

    if (!isValidEmail(email)) {
        showErrorMessage('Пожалуйста, введите корректный email');
        return;
    }

    // Show loading state
    showLoadingState();

    // Simulate login request (replace with actual AJAX call)
    setTimeout(() => {
        // Here you would typically make an AJAX request to your backend
        // For now, we'll simulate a successful login
        if (email === 'admin@belmar.com' && password === 'admin') {
            // Success - redirect to admin panel
            window.location.href = '/admin';
        } else {
            // Error - show error message
            hideLoadingState();
            showErrorMessage('Неверный email или пароль');
            shakeLoginBox();
        }
    }, 2000);
}

function showLoadingState() {
    const loginBtn = document.getElementById('loginBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (loginBtn) {
        loginBtn.style.display = 'none';
    }
    
    if (loadingSpinner) {
        loadingSpinner.classList.add('active');
    }
}

function hideLoadingState() {
    const loginBtn = document.getElementById('loginBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    if (loginBtn) {
        loginBtn.style.display = 'block';
    }
    
    if (loadingSpinner) {
        loadingSpinner.classList.remove('active');
    }
}

function showErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }
}

function hideErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.classList.remove('show');
    }
}

function shakeLoginBox() {
    const loginBox = document.querySelector('.login-box');
    if (loginBox) {
        loginBox.style.animation = 'none';
        loginBox.offsetHeight; // Trigger reflow
        loginBox.style.animation = 'errorShake 0.5s ease-in-out';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function initAnimations() {
    // Add entrance animations for form elements
    const formElements = document.querySelectorAll('.form-group, .remember-me, .login-btn');
    
    formElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });

    // Add floating animation to logo
    // const logo = document.querySelector('.logo');
    // if (logo) {
    //     setInterval(() => {
    //         logo.style.transform = 'translateY(-5px)';
    //         setTimeout(() => {
    //             logo.style.transform = 'translateY(0px)';
    //         }, 1500);
    //     }, 3000);
    // }
}

function initParticleEffect() {
    // Create floating particles in background
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);

    // Create particles
    for (let i = 0; i < 20; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(0, 212, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
    `;

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    // Random animation
    const duration = 10 + Math.random() * 20;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ${delay}s infinite linear`;

    container.appendChild(particle);

    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
            createParticle(container);
        }
    }, (duration + delay) * 1000);
}

// Add floating animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Enter key to submit form
    if (e.key === 'Enter' && document.activeElement.classList.contains('form-control')) {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape key to clear form
    if (e.key === 'Escape') {
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('has-content');
        });
        hideErrorMessage();
    }
});

// Add form validation on blur
document.addEventListener('blur', function(e) {
    if (e.target.classList.contains('form-control')) {
        validateField(e.target);
    }
}, true);

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Remove previous validation classes
    field.classList.remove('valid', 'invalid');
    
    if (!value) {
        field.classList.add('invalid');
        return false;
    }
    
    if (fieldName === 'email' && !isValidEmail(value)) {
        field.classList.add('invalid');
        return false;
    }
    
    if (fieldName === 'password' && value.length < 6) {
        field.classList.add('invalid');
        return false;
    }
    
    field.classList.add('valid');
    return true;
}

// Add CSS for validation states
const validationStyle = document.createElement('style');
validationStyle.textContent = `
    .form-control.valid {
        border-color: #28a745;
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.1);
    }
    
    .form-control.invalid {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }
    
    .form-control.has-content {
        border-color: var(--belmar-accent);
    }
`;
document.head.appendChild(validationStyle); 