function calcular(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = altura * altura
    var imc = peso / altura
    alert("Seu imc é: "+imc);
    console.log("Imc: "+ imc)
}