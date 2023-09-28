// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Obtém o formulário de contato pelo seu ID
    const form = document.getElementById("contactForm");

    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function (event) {
        // Impede o comportamento padrão de envio do formulário
        event.preventDefault();

        // Obtém os valores dos campos de entrada do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Aqui você pode adicionar lógica para enviar os dados do formulário para o servidor
        // ou realizar outras ações desejadas.

        // Altere a mensagem do alerta conforme necessário
        alert("Sua mensagem foi enviada com sucesso!");
    });
});
