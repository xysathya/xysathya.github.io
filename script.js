document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo') || document.querySelector('header a');

    if (logo) {
        const path = window.location.pathname.toLowerCase();

        // Check if user is on the Study Homepage
        const isStudyHome = path.endsWith('/study') || 
                            path.endsWith('/study/') || 
                            path.endsWith('/study/index.html');

        // Check if user is on a Study Sub-page
        const isStudySubPage = path.includes('/study/') && !isStudyHome;

        // Set the logo link target
        if (isStudySubPage) {
            logo.href = '/study/index.html'; // Level 2 -> Go to Study Home
        } else if (isStudyHome) {
            logo.href = '/index.html';       // Level 1 -> Go to Main Home
        } else {
            logo.href = '/index.html';       // Level 0 -> Stay on Main Home
        }

        // 750ms Wave Transition Effect
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = logo.href;
            document.body.classList.add('wave-active');
            setTimeout(() => {
                window.location.href = destination;
            }, 750);
        });
    }
});
