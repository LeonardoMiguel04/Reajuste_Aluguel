function calcula() {
    /*valores inseridos pelo usuário*/
    let valor = parseFloat(document.getElementById('valor').value);
    let porcentagem = parseFloat(document.getElementById('porcentagem').value);
    let tipo = document.getElementById('tipo').value;
    let frequencia = document.getElementById('frequencia').value;
    let resultado = document.getElementById('resultado');

    /*verificar valores são válidos*/
    if (isNaN(valor) || isNaN(porcentagem)) {
        resultado.innerHTML = "<p>Por favor, preencha todos os campos corretamente.</p>";
        return;
    }

    /*definir multiplicação com base na frequência do reajuste*/
    let frequenciareaj = 1;
    if (frequencia === 'mensal') {
        frequenciareaj = 12;
    } else if (frequencia === 'trimestral') {
        frequenciareaj = 4;
    } else if (frequencia === 'bianual') {
        frequenciareaj = 0.5;  // Reajuste a cada 2 anos
    }

    /*calcular valor reajustado com base na porcentagem e na frequência*/
    let valorReajustado = valor * (1 + (porcentagem / 100) * frequenciareaj);

    /*exibir o valor reajustado*/
    resultado.innerHTML = `
        <p>O novo valor do aluguel com reajuste de ${porcentagem}% pelo índice ${tipo} e frequência ${frequencia} é:</p>
        <p>R$ ${valorReajustado}</p>`;
}