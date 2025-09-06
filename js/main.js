document.addEventListener('DOMContentLoaded', function() {

    // More robust language switcher logic
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        const currentLang = document.documentElement.lang;
        const links = languageSwitcher.querySelectorAll('a');

        links.forEach(link => {
            const linkLang = link.textContent.toLowerCase();
            if (linkLang === currentLang) {
                link.classList.add('lang-active');
            }

            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetLang = link.textContent.toLowerCase();

                // Get the current path and filename
                const path = window.location.pathname;
                const parts = path.split('/');
                const currentPage = parts.pop() || 'index.html'; // Default to index.html if path ends with /

                // Construct new URL
                let newUrl = `/${targetLang}/${currentPage}`;
                if(targetLang === 'fr' && currentPage === 'index.html') newUrl = '/fr/';
                else if (targetLang === 'en' && currentPage === 'index.html') newUrl = '/en/';
                else if (targetLang === 'nl' && currentPage === 'index.html') newUrl = '/nl/';


                window.location.href = newUrl;
            });
        });
    }

    // WhatsApp FAB logic
    const whatsappFab = document.getElementById('whatsapp-fab');
    if (whatsappFab) {
        // Add Font Awesome icon
        whatsappFab.innerHTML = '<i class="fab fa-whatsapp"></i>';

        whatsappFab.addEventListener('click', function() {
            // Check if the modal already exists
            if (document.getElementById('whatsapp-modal')) {
                return;
            }

            // Create modal structure
            const modal = document.createElement('div');
            modal.id = 'whatsapp-modal';

            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            const title = document.createElement('h3');
            title.textContent = 'Contactez-nous sur WhatsApp';
            modalContent.appendChild(title);

            const number1 = document.createElement('a');
            number1.href = 'https://wa.me/32485622661';
            number1.textContent = 'Contact 1: +32 485 62 26 61';
            number1.target = '_blank';
            modalContent.appendChild(number1);

            const number2 = document.createElement('a');
            number2.href = 'https://wa.me/32473991510';
            number2.textContent = 'Contact 2: +32 473 99 15 10';
            number2.target = '_blank';
            modalContent.appendChild(number2);

            const closeButton = document.createElement('button');
            closeButton.textContent = 'Fermer';
            closeButton.className = 'modal-close-btn';
            closeButton.onclick = function() {
                modal.classList.remove('show');
                setTimeout(() => document.body.removeChild(modal), 300);
            };
            modalContent.appendChild(closeButton);

            modal.appendChild(modalContent);
            document.body.appendChild(modal);

            // Show the modal with a transition
            setTimeout(() => modal.classList.add('show'), 10);


            // Close modal if clicking outside of the content
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.classList.remove('show');
                    setTimeout(() => document.body.removeChild(modal), 300);
                }
            });
        });
    }
});
