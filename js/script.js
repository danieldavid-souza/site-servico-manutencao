document.addEventListener('DOMContentLoaded', function() {
    // Validação simples para o formulário de contato da página inicial
    const homeContactForm = document.getElementById('home-contact-form');

    if (homeContactForm) {
        homeContactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = this.querySelector('input[name="name"]').value.trim();
            const email = this.querySelector('input[name="email"]').value.trim();
            const message = this.querySelector('textarea[name="message"]').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Simulação de envio
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            this.reset(); // Limpa o formulário
        });
    }

    // Adiciona um efeito suave de rolagem para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
