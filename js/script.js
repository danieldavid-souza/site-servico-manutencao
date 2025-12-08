/* global html2canvas */

// Executa o script quando o conteúdo do DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA PARA O MENU HAMBURGER (MOBILE) ---
    const hamburger = document.querySelector('.hamburger'); // Seleciona o botão
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- LÓGICA PARA MARCAR O LINK ATIVO NO MENU ---
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPath = window.location.pathname.split('/').pop(); // Pega o nome do arquivo (ex: "servicos.html")

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Marca como ativo se o href for igual ao arquivo atual, ou se for 'index.html' na raiz.
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active-link');
        }
    });

    // --- EFEITO SUAVE DE ROLAGEM PARA LINKS ÂNCORA ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- FUNCIONALIDADE DO GERADOR DE POST (PÁGINA DE PREÇOS) ---
    // Verifica se os elementos do gerador de post existem na página atual para evitar erros
    const gerarPostBtn = document.getElementById('gerar-post-btn');
    const modal = document.getElementById('post-modal');
    
    if (gerarPostBtn && modal) {
        const closeModal = document.querySelector('.post-modal .close');
        const postContainer = document.getElementById('post-container');
        const downloadBtn = document.getElementById('download-btn');

        // Adiciona o evento de clique ao botão para gerar a imagem
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

            // Usa a biblioteca html2canvas para "fotografar" a área de captura e transformar em um canvas
            html2canvas(captureArea, { scale: 2, useCORS: true, backgroundColor: '#ffffff' }).then(canvas => {
                postContainer.innerHTML = '';
                canvas.style.maxWidth = '100%';
                postContainer.appendChild(canvas);

                // Cria o link de download para a imagem gerada
                downloadBtn.href = canvas.toDataURL('image/png');
                downloadBtn.download = 'tabela-precos-lima-lima-manutencao.png';
                downloadBtn.style.display = 'inline-block';

                modal.style.display = 'block';
                
                document.body.removeChild(captureArea); // Remove a área temporária
                gerarPostBtn.textContent = 'Gerar Post para Redes Sociais';
                gerarPostBtn.disabled = false;
            });
        });

        // Adiciona eventos para fechar o modal (clicando no 'X' ou fora da área do modal)
        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- FUNCIONALIDADE DO BOTÃO COMPARTILHAR (PÁGINA INICIAL) ---
    const shareBtn = document.getElementById('share-btn');

    if (shareBtn) { // Verifica se o botão existe
        const shareMenu = document.getElementById('share-menu');
        const message = encodeURIComponent('Conheça os serviços de manutenção de computadores da Lima Lima Manutenção. Soluções rápidas e eficientes para o seu equipamento! ' + window.location.href);

        // Cria os links de compartilhamento dinamicamente
        shareMenu.innerHTML = `
            <a href="https://api.whatsapp.com/send?text=${message}" target="_blank" aria-label="Compartilhar no WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="20" height="20"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32C101.5 32 2 131.6 2 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27c122.4 0 222-99.6 222-222c0-59.3-25.2-115-67.1-157zM223.9 438c-33.6 0-65.7-8.3-94.3-23.4l-4.6-2.7-70.3 18.4 18.8-68.6-3-4.9c-15.5-28.9-24.1-62.1-24.1-96.4c0-117 95.1-212.1 212.1-212.1c57.1 0 109.7 21.8 149.4 61.5c39.7 39.7 61.5 92.3 61.5 149.4c0 117-95.1 212.1-212.1 212.1zM319.3 302.6c-5.1-2.6-30.2-14.9-34.9-16.6c-4.7-1.7-8.1-2.6-11.5 2.6c-3.4 5.1-13.2 16.6-16.2 20c-3 3.4-6 3.8-11.1 1.3c-5.1-2.6-21.5-7.9-41-25.1c-15.1-13.5-25.3-30.1-28.3-35.2c-3-5.1-.3-7.9 2.3-10.5c2.4-2.4 5.1-6 7.7-9c2.6-3 3.4-5.1 5.1-8.5c1.7-3.4.9-6.4-.4-9c-1.3-2.6-11.5-27.7-15.7-38c-4.1-9.8-8.3-8.5-11.5-8.7c-3-.2-6.4-.2-9.8-.2c-3.4 0-9 1.3-13.7 6.4c-4.7 5.1-18 17.6-18 43c0 25.4 18.5 50 21.1 53.4c2.6 3.4 36.4 55.6 88.1 77.9c12.3 5.3 21.9 8.5 29.4 10.9c12.3 3.9 23.5 3.4 32.4 2.1c9.9-1.5 30.2-12.3 34.5-24.1c4.3-11.8 4.3-21.9 3-24.1c-1.3-2.1-4.7-3.4-9.8-6z"/></svg>
                <span>WhatsApp</span>
            </a>
            <a href="https://t.me/share/url?url=${window.location.href}&text=${message}" target="_blank" aria-label="Compartilhar no Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" width="20" height="20"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.2-61.7,68.33-66.746.153-.655.3-3.1-1.152-4.356-1.452-1.251-2.8-1.4-4.243-1.251-1.443.154-24.193,15.9-70.43,49.6-5.863,4.211-10.582,6.316-14.243,6.316-12.504,0-21.86-7.2-34.897-21.692-13.037-14.493-25.3-32.447-25.3-32.447s-4.607-10.154-4.607-22.374c0-12.218,4.557-22.271,13.658-29.315,9.1-7.044,23.913-9.32,33.932-9.32,2.59,0,5.18,1.173,7.17,2.164,15.7,7.9,28.87,15.75,28.87,15.75l.001.002s28.1,18.45,54.3,36.473c26.2,18.022,50.2,34.022,50.2,34.022l.001.002s4.218,2.82,11.3,2.82c7.082,0,11.3-2.82,11.3-2.82l.001-.002s25.1-16.4,39.2-26.44c14.1-10.04,24.1-15.4,24.1-15.4l.001-.002s1.452-1.095,1.452-4.356c0-3.261-1.452-4.356-1.452-4.356Z"/></svg>
                <span>Telegram</span>
            </a>
            <a href="#" id="copy-link-btn" aria-label="Copiar link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width="20" height="20"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zM512 64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM272 240c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg>
                <span>Copiar Link</span>
            </a>
        `;

        // Adiciona o evento de clique ao botão principal
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Impede que o clique feche o menu imediatamente
            shareMenu.style.display = shareMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Lógica para o botão "Copiar Link"
        const copyLinkBtn = document.getElementById('copy-link-btn');
        copyLinkBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(window.location.href);
                copyLinkBtn.textContent = 'Copiado!';
                setTimeout(() => {
                    copyLinkBtn.textContent = 'Copiar Link';
                    shareMenu.style.display = 'none'; // Esconde o menu após copiar
                }, 1500);
            } catch (err) {
                copyLinkBtn.textContent = 'Erro ao copiar';
            }
        });

        // Fecha o menu se o usuário clicar em qualquer outro lugar da página
        document.addEventListener('click', (e) => {
            if (e.target !== shareBtn && e.target !== shareMenu) {
                shareMenu.style.display = 'none';
            }
        });
    }

    // ==========================================================================
    // LÓGICA DO MODAL - RECONSTRUÍDA DO ZERO
    // ==========================================================================
    const modalOverlay = document.getElementById('whatsapp-modal-overlay');
    const floatButton = document.getElementById('whatsapp-float-btn');
    const modalCloseBtn = document.getElementById('whatsapp-modal-close');

    if (modalOverlay && floatButton && modalCloseBtn) {
        const whatsappMessageInput = document.getElementById('whatsapp-modal-message');
        const whatsappSendBtn = document.getElementById('whatsapp-modal-send-btn');
        const modalContactName = document.getElementById('whatsapp-modal-contact-name');

        const openModal = (phone, message, contactName) => {
            modalContactName.textContent = contactName;
            whatsappMessageInput.value = message;

            whatsappSendBtn.onclick = () => {
                whatsappSendBtn.innerHTML = 'Redirecionando...';
                whatsappSendBtn.disabled = true;

                const encodedMessage = encodeURIComponent(whatsappMessageInput.value);
                const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
                
                setTimeout(() => {
                    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                    closeModal();
                }, 500);
            };

            modalOverlay.classList.add('active');
        };

        const closeModal = () => {
            modalOverlay.classList.remove('active');
            // Reseta o estado do botão
            whatsappSendBtn.innerHTML = 'Enviar no WhatsApp';
            whatsappSendBtn.disabled = false;
        };

        // Abre o modal ao clicar no botão flutuante
        floatButton.addEventListener('click', () => {
            openModal(
                '5532991992905', // Número de telefone
                'Olá, Daniel! Gostaria de mais informações sobre os serviços de manutenção da Lima Lima.', // Mensagem padrão
                'Fale com a Lima Lima Manutenção' // Nome de contato
            );
        });

        // Fecha o modal ao clicar no botão 'X'
        modalCloseBtn.addEventListener('click', closeModal);

        // Fecha o modal ao clicar fora da área de conteúdo (no overlay)
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // --- LÓGICA PARA O BOTÃO DE TEMA (DARK/LIGHT MODE) ---
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme');

    // Aplica o tema salvo ou o tema preferido do sistema
    if (currentTheme) {
        document.body.classList.toggle('light-mode', currentTheme === 'light');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');

            let theme = 'dark';
            if (document.body.classList.contains('light-mode')) {
                theme = 'light';
            }
            localStorage.setItem('theme', theme);
        });
    }

});
