document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.info-section');

    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        const content = section.querySelector('.section-content');

        // Esconde todos os conteúdos, exceto o do primeiro item
        if (section !== sections[0]) {
            content.style.display = 'none';
        } else {
            section.classList.add('active');
        }

        title.addEventListener('click', () => {
            // Fecha todas as seções
            sections.forEach(s => {
                if (s !== section) {
                    s.querySelector('.section-content').style.display = 'none';
                    s.classList.remove('active');
                }
            });

            // Alterna a seção clicada
            if (content.style.display === 'none') {
                content.style.display = 'block';
                section.classList.add('active');
            } else {
                content.style.display = 'none';
                section.classList.remove('active');
            }
        });
    });
}); 