document.addEventListener("DOMContentLoaded", function () {
    // Função genérica para lidar com a submissão de formulários
    async function handleFormSubmit(event, formId, statusId, formSpreeId) {
        event.preventDefault(); // Impede o recarregamento da página

        const form = document.getElementById(formId);
        const status = document.getElementById(statusId);
        const button = form.querySelector("button[type='submit']");
        const data = new FormData(form);

        // Feedback visual para o usuário
        button.disabled = true;
        button.textContent = 'Enviando...';
        status.style.display = "block";
        status.style.color = "#333";
        status.textContent = "Aguarde, por favor...";

        try {
            const response = await fetch(`https://formspree.io/f/${formSpreeId}`, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.style.color = "green";
                status.textContent = "Mensagem enviada com sucesso!";
                form.reset(); // Limpa o formulário
            } else {
                // Tenta obter a mensagem de erro do Formspree
                const responseData = await response.json();
                const errorMessage = responseData.errors ? responseData.errors.map(error => error.message).join(', ') : "Ocorreu um erro ao enviar.";
                throw new Error(errorMessage);
            }
        } catch (error) {
            status.style.color = "red";
            status.textContent = `Erro: ${error.message || "Não foi possível enviar a mensagem."}`;
        } finally {
            // Reabilita o botão após o processo
            button.disabled = false;
            button.textContent = 'Enviar Mensagem';
        }
    }

    // Adiciona o listener para o formulário da página de contato
    const contactPageForm = document.getElementById('contact-page-form');
    if (contactPageForm) {
        // ID do formulário da página de contato
        contactPageForm.addEventListener("submit", (e) => handleFormSubmit(e, 'contact-page-form', 'form-status', 'mvgybnon'));
    }

    // Adiciona o listener para o formulário da página inicial
    const homeForm = document.getElementById('home-form');
    if (homeForm) {
        // ID do formulário da página inicial
        homeForm.addEventListener("submit", (e) => handleFormSubmit(e, 'home-form', 'home-form-status', 'xjkorora'));
    }
});