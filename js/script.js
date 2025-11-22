/* global html2canvas */

document.addEventListener('DOMContentLoaded', function() {
    // --- CÓDIGO EXISTENTE ---

    // --- Lógica para o Menu Hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Efeito suave de rolagem para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- NOVO CÓDIGO PARA GERAR POST ---

    // Verifica se os elementos do gerador de post existem na página atual
    const gerarPostBtn = document.getElementById('gerar-post-btn');
    const modal = document.getElementById('post-modal');
    
    if (gerarPostBtn && modal) {
        const closeModal = document.querySelector('.modal .close');
        const postContainer = document.getElementById('post-container');
        const downloadBtn = document.getElementById('download-btn');

        // Função para abrir o modal e gerar a imagem
        gerarPostBtn.addEventListener('click', function() {
            gerarPostBtn.textContent = 'Gerando imagem...';
            gerarPostBtn.disabled = true;

            const tabela = document.querySelector('.pricing-table');
            
            // Cria um cabeçalho para a imagem do post
            const postHeader = document.createElement('div');
            postHeader.style.textAlign = 'center';
            postHeader.style.padding = '20px';
            postHeader.style.background = '#2c3e50'; // Cor escura do seu tema
            postHeader.style.color = 'white';
            
            const logo = document.createElement('h2');
            logo.textContent = 'Lima Lima Manutenção';
            logo.style.margin = '0';
            logo.style.fontSize = '24px';

            const subtitle = document.createElement('p');
            subtitle.textContent = 'Tabela de Preços - Fale Conosco!';
            subtitle.style.margin = '5px 0 0 0';
            subtitle.style.fontSize = '16px';

            postHeader.appendChild(logo);
            postHeader.appendChild(subtitle);

            // Cria uma área de captura temporária para não afetar a página
            const captureArea = document.createElement('div');
            captureArea.style.width = '700px'; // Largura ideal para um post
            captureArea.appendChild(postHeader);
            captureArea.appendChild(tabela.cloneNode(true)); // Clona a tabela
            document.body.appendChild(captureArea);

            // Usa a biblioteca html2canvas para "fotografar" a área de captura
            html2canvas(captureArea, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
                postContainer.innerHTML = '';
                canvas.style.maxWidth = '100%';
                postContainer.appendChild(canvas);

                downloadBtn.href = canvas.toDataURL('image/png');
                downloadBtn.download = 'tabela-precos-lima-lima-manutencao.png';
                downloadBtn.style.display = 'inline-block';

                modal.style.display = 'block';
                
                document.body.removeChild(captureArea); // Remove a área temporária
                gerarPostBtn.textContent = 'Gerar Post para Redes Sociais';
                gerarPostBtn.disabled = false;
            });
        });

        // Funções para fechar o modal
        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});
