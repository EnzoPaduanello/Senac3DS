function calcular(){
    var p = parseFloat(document.getElementById("peso").value);
    var e 
    var m 
    if (p > 50){
        e = p - 50
        m = e * 4
        alert("O peso excedente(Kg) é: "+ e +" E a multa a pagar é: " + m);
    }
    else{
        e = 0
        m = 0
        alert("Não foi gerado multa por peso excedido: " + " Multa: " + m + " Excesso:" + e);
    }
}