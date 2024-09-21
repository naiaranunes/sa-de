$(document).ready(function(){
    $('.menu-toggle').click(function(){
    $('.navbar').toggleClass('active');
    });
})
function calcularIMC(){
    var peso =
    parseFloat(document.getElementById("peso").value);
    var altura =
    parseFloat(document.getElementById("altura").value);

    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        document.getElementById().innerHTML = "Por favor, insira valores válidos.";
        return;
    }
    var imc = peso / ("altura * altura");
    var categoria = "";
    if(imc < 18.5){
        categoria = "Abaixo do peso";
    }else if(imc >= 18.5 && imc < 24.9){
        categoria = "peso normal";
    }else if(imc >= 25 && imc < 24.9){
        categoria = "sobrepeso";
    }else{
        categoria = "obesidade";
    }
    document.getElementById("resultado").innerHTML= "Seu IMC é " + imc.toFixed(2) + ". Categoria: " + categoria + ".";
}