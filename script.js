// Função para salvar o nome do jogador no localStorage e exibir mensagem de boas-vindas
function salvarNome() {
    const nomeInput = document.getElementById("nome").value.trim();

    if (!nomeInput) {
        alert("Por favor, digite seu nome!");
        return;
    }

    localStorage.setItem("nomeJogador", nomeInput);
    
    const mensagemElemento = document.getElementById("mensagem");
    mensagemElemento.textContent = `Bem-vindo(a), ${nomeInput}! Escolha uma opção:`;
    mensagemElemento.style.display = "block"; // Exibe a mensagem ao adicionar o nome
}

// Função principal do jogo
function jogar(escolhaJogador) {
    const nomeJogador = localStorage.getItem("nomeJogador") || "Jogador";

    // Esconde a mensagem de boas-vindas ao iniciar o jogo
    document.getElementById("mensagem").style.display = "none";

    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    const combinacoes = {
        pedra: { vence: "tesoura", texto: "🚨 Pedra esmaga tesoura!" },
        papel: { vence: "pedra", texto: "📃 Papel embrulha pedra!" },
        tesoura: { vence: "papel", texto: "✂️ Tesoura corta papel!" }
    };

    let resultadoHTML = "";
    const resultadoElemento = document.getElementById("resultado");

    if (escolhaJogador === escolhaComputador) {
        resultadoHTML = `
            <img src="img/empate.png" class="result-image">
            <div class="result-text">
                <h3>EMPATE!</h3>
                <p>Ambos escolheram <strong>${escolhaJogador}</strong></p>
            </div>
        `;
    } else if (combinacoes[escolhaJogador].vence === escolhaComputador) {
        resultadoHTML = `
            <img src="img/vencedor.png" class="result-image">
            <div class="result-text">
                <h3>🎉 ${nomeJogador.toUpperCase()} VENCEU! 🎉</h3>
                <p>${combinacoes[escolhaJogador].texto}</p>
                <p>${escolhaJogador} 🆚 ${escolhaComputador}</p>
            </div>
        `;
    } else {
        resultadoHTML = `
            <img src="img/computador.png" class="result-image">
            <div class="result-text">
                <h3>💻 VITÓRIA DO COMPUTADOR!</h3>
                <p>${combinacoes[escolhaComputador].texto}</p>
                <p>${escolhaJogador} 🆚 ${escolhaComputador}</p>
            </div>
        `;
    }

    resultadoElemento.innerHTML = `
        <div class="result-content">
            ${resultadoHTML}
        </div>
    `;
}
