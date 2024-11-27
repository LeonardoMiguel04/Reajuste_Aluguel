const variacaoIndices = [
    { ano: 2021, ipca: 10.06, igpm: 17.78 },
    { ano: 2022, ipca: 5.79, igpm: 6.13 },
    { ano: 2023, ipca: 4.19, igpm: 3.72 },
  ];

  function calcularReajuste() {
    const valorAluguel = parseFloat(document.getElementById("valor-aluguel").value);
    const dataInicio = document.getElementById("data-inicio").value;
    const indice = document.getElementById("indice").value;
    const periodicidade = document.getElementById("periodicidade").value;

    if (!valorAluguel || !dataInicio) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Índices fixos
    const indices = {
      ipca: 0.045, // 4.5% ao ano
      igpm: 0.065  // 6.5% ao ano
    };

    // Cálculo do reajuste
    let reajuste;
    if (periodicidade === "anual") {
      reajuste = valorAluguel * (1 + indices[indice]);
    } else if (periodicidade === "mensal") {
      reajuste = valorAluguel * (1 + indices[indice] / 12);
    }

    // Mostrar resultado
    document.getElementById("resultado").textContent = 
      `O valor reajustado do aluguel é: R$ ${reajuste.toFixed(2)} (baseado no ${indice.toUpperCase()}).`;

    // Gerar tabela de variação dos índices
    const tabelaDados = document.getElementById("tabela-dados");
    tabelaDados.innerHTML = ""; // Limpa tabela antes de gerar
    variacaoIndices.forEach(item => {
      const row = `
        <tr>
          <td>${item.ano}</td>
          <td>${item.ipca.toFixed(2)}</td>
          <td>${item.igpm.toFixed(2)}</td>
        </tr>
      `;
      tabelaDados.innerHTML += row;
    });

    document.getElementById("tabela-variação").style.display = "block";
  }

  // Função para limpar o resultado e a tabela
  document.querySelector("button[type='reset']").addEventListener("click", () => {
    document.getElementById("resultado").textContent = "Preencha os dados para calcular o reajuste.";
    document.getElementById("tabela-variação").style.display = "none";
  });