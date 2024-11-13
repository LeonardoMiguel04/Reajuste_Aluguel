function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, pois deve ser feito a multiplicação do valor atual do aluguel pelo índice acumulado no período de um ano"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, A lei do Inquilinato não estipula um valor específico para o aumento"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, a lei atualizada é a Lei 8.245/91"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, a Lei fala que é válido. No entanto, vale ressaltar que em uma locação sem contrato formal, a situação é diferente em relação aos reajustes de aluguel"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, é obrigado pois é um direito do proprietário do imóvel"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, Pois para calcular o valor final, multiplicamos o valor inicial por 1,032 (1 + 0,032). O resultado é R$ 1.032,00, que é o valor após 1 ano."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, Pois para calcular o valor final, multiplicamos o valor inicial por 900,026 (1 + 0,026). O resultado é R$ 923,40, que é o valor após 3 meses."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, Pois para calcular o valor final, multiplicamos o valor inicial por 800,030 (1 + 0,030). O resultado é R$ 824,00, que é o valor após 1 ano."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada, Pois para calcular o valor final, multiplicamos o valor inicial por 1.200,30 (1 + 0,030). O resultado é R$ 1236.00, que é o valor após 1 ano."

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, Pois para calcular o valor final, multiplicamos o valor inicial por 1,034 (1 + 0,034). O resultado é R$ 1.344,20, que é o valor após 1 ano."

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + "/10 questões!";
    }
    else{
        alert("não deixe questões em branco!")
    }

}