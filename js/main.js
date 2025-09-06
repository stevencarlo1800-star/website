document.addEventListener('DOMContentLoaded', () => {

    // 1. Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Language Switcher Logic
    // Note: This is a simplified version. A production site might need a more robust solution.
    const langSwitcher = document.querySelector('.lang-switcher');
    if(langSwitcher) {
        langSwitcher.addEventListener('click', (event) => {
            if (event.target.tagName === 'A' && !event.target.classList.contains('lang-active')) {
                event.preventDefault();
                const targetHref = event.target.getAttribute('href');
                window.location.href = targetHref;
            }
        });
    }


    // 3. WhatsApp Button Modal
    const whatsappFab = document.getElementById('whatsapp-fab');
    if (whatsappFab) {
        whatsappFab.addEventListener('click', () => {
            // Prevent creating multiple modals
            if (document.getElementById('whatsapp-modal')) {
                return;
            }

            // Create modal elements
            const modal = document.createElement('div');
            modal.id = 'whatsapp-modal';
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background-color: rgba(0,0,0,0.6); display: flex;
                align-items: center; justify-content: center; z-index: 1001;
                opacity: 0; transition: opacity 0.3s ease;
            `;

            const modalContent = document.createElement('div');
            modalContent.style.cssText = `
                background-color: white; padding: 30px; border-radius: 8px;
                text-align: center; max-width: 90%; width: 400px;
            `;

            let modalTitle = 'Contactez-nous sur WhatsApp';
            let closeBtnText = 'Fermer';
            // Simple lang detection for modal text
            const currentLang = document.documentElement.lang;
            if (currentLang === 'en') {
                modalTitle = 'Contact us on WhatsApp';
                closeBtnText = 'Close';
            } else if (currentLang === 'nl') {
                modalTitle = 'Neem contact op via WhatsApp';
                closeBtnText = 'Sluiten';
            }

            modalContent.innerHTML = `
                <h3>${modalTitle}</h3>
                <a href="https://wa.me/32485622661" target="_blank" style="display: block; margin: 15px 0; padding: 10px; background-color: #f0f0f0; text-decoration: none; color: #333; border-radius: 5px;">Contact 1: +32 485 62 26 61</a>
                <a href="https://wa.me/32473991510" target="_blank" style="display: block; margin: 15px 0; padding: 10px; background-color: #f0f0f0; text-decoration: none; color: #333; border-radius: 5px;">Contact 2: +32 473 99 15 10</a>
                <button id="whatsapp-close-btn" style="margin-top: 15px; padding: 10px 20px; border: none; background-color: #dc3545; color: white; border-radius: 5px; cursor: pointer;">${closeBtnText}</button>
            `;

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Animate opacity
            setTimeout(() => modal.style.opacity = '1', 10);

            // Close functionality
            const closeModal = () => {
                modal.style.opacity = '0';
                setTimeout(() => document.body.removeChild(modal), 300);
            };

            document.getElementById('whatsapp-close-btn').addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        });
    }
});
