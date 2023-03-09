function calcular(){
    var tempo = parseFloat(document.getElementById("tempo").value);
    var velocidade = parseFloat(document.getElementById("velocidade").value);
    var distancia = tempo * velocidade
    var litros_usados = distancia/12
    alert("A quantidade de litros usados foram: "+litros_usados);
    console.log("Litros usados: "+ litros_usados)
}
	