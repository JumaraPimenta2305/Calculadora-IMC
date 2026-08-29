function calcularIMC(){

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");
    const classificacao_imc = document.getElementById("classificacao-imc");

    if(!peso || !altura || peso <= 0 || altura <= 0){
        alert("Por favor, preencha o peso e a altura com valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);

    resultado.textContent = "Seu IMC é: " + imc.toFixed(2);
    resultado.classList.add("destaque")

    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    } else if(imc < 25){
        classificacao = "Peso normal";
    } else if(imc < 30){
        classificacao = "Sobrepeso";
    } else if(imc <35){
        classificacao = "Obesidade grau I";
    } else if(imc < 40){
        classificacao = "Obesidade grau II";
    } else{
        classificacao = "Obesidade grau III"
    }
        classificacao_imc.textContent = "Classificação do IMC: " + classificacao;

        classificacao_imc.classList.add("classificacao-destaque")
}