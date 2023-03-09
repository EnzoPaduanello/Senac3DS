function calcula(){
    var idade = parseFloat(document.getElementById("idade").value);
    var categoria 
    if (idade >= 5 && idade <= 7){
        categoria = "infantil A"
        alert("A sua categoria é: " + categoria);
    }
    else if(idade >= 6 && idade <= 10){
        categoria = "infantil B"
        alert("A sua categoria é: " + categoria);
    }
    else if (idade >= 11 && idade <= 13){
        categoria = "Juvenil A"
        alert("A sua categoria é: " + categoria);
    }
    else if (idade >= 14 && idade <= 17){
        categoria = "Juvenil B"
        alert("A sua categoria é: " + categoria);
    }
    else{
        categoria = "Adulto"
        alert("A sua categoria é: " + categoria);
    }
}