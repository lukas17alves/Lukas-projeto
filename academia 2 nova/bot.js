document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            appendMessage("Você", message);
            userInput.value = "";
            getBotResponse(message);
        }
    }

    function getBotResponse(message) {
        let response = "Desculpe, não entendi.";
        if (message.toLowerCase().includes("oi")) {
            response = "Olá! Como posso ajudar você hoje?";
        } else if (message.toLowerCase().includes("como você está")) {
            response = "Estou bem é você?";
        } else if (message.toLowerCase().includes("adeus")) {
            response = "Até logo! Tenha um ótimo dia!";
        } else if (message.toLowerCase().includes("qual é o seu nome?")) {
            response = "Eu sou um botobras,  e estou aqui para ajudar!";
        } else if (message.toLowerCase().includes("fale sobre as obras?")) {
            response = "Visando O Interesse Público, Em Colaboração Com O Estado, Ao Qual Cabe Garantir Os Direitos Fundamentais Dos Cidadãos Previstos Na Constituição, Busca Efetivar Os Direitos Sociais, Garantidos Pela Carta Magna Desta República Cf. Seu Artigo 6º: Educação, Saúde, Trabalho, Moradia, Lazer, Segurança, Previdência Social, A Proteção À Maternidade E À Infância, A Assistência Aos Desamparados…” Nossos Objetivos";
        } else if (message.toLowerCase().includes("conte sobre as obras")) {
            response = "Por que o livro de matemática se suicidou? Porque tinha muitos problemas!";
        } else if (message.toLowerCase().includes("site das obras")) {
            response = "Aqui está o link para o Obras: <a href='https://www.pavonianos.org.br/unidade/aopabh' target='_blank'>https://www.pavonianos.org.br/unidade/aopabh</a>";
        }
        appendMessage("Bot", response);
    }

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
s