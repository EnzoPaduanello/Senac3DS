function calcular(){
    var altura = parseFloat(document.getElementById("altura").value);
    var raio = parseFloat(document.getElementById("raio").value);
    var volume = altura* 3.14159 * raio * raio
    alert("O volume da lata é: " + volume);
    console.log("O Volume da lata é: " + volume);
}