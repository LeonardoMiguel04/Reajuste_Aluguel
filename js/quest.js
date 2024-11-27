function inclui_nome() {
    const nome = prompt("Coloque seu nome:");
    if (nome) {
      document.getElementById("marcacao_nome").textContent = nome;
    } else {
      alert("Nome não atribuído, preencha o nome.");
      inclui_nome();
    }
  }

  function funcao_resposta() {
    const totalQuestions = 2; // Altere conforme o número de questões
    let correctCount = 0;

    // Limpar respostas anteriores
    const responses = document.querySelectorAll('.response');
    responses.forEach(response => {
      response.style.display = 'none';
      response.textContent = '';
    });

    for (let i = 1; i <= totalQuestions; i++) {
      const selected = document.querySelector(`input[name="quest_${i}"]:checked`);
      const correctResponse = document.getElementById(`resp_correta_${i}`);
      const wrongResponse = document.getElementById(`resp_errada_${i}`);

      if (selected) {
        if (selected.value === "correta") {
          correctResponse.style.display = 'block';
          correctResponse.textContent = "Correta!";
          correctCount++;
        } else {
          wrongResponse.style.display = 'block';
          wrongResponse.textContent = "Errada!";
        }
      } else {
        alert(`Por favor, responda a questão ${i}.`);
        return; // Impede o envio se alguma questão estiver vazia
      }
    }

    document.getElementById("quantos_acertos").textContent = `Você acertou ${correctCount}/${totalQuestions} questões!`;
  }