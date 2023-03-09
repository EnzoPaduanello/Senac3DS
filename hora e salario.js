function calcular(){
    var co = parseFloat(document.getElementById("codigo").value);
    var ho = parseFloat(document.getElementById("horas").value);
    var ex
    var sa = ho * 10.00;
    var st
    if (ho > 50){
        ex = ((ho - 50)* 20 );
        st = sa + ex
        alert("Salário total: "+ st +", Sálario recebido por horas extras: " + ex + ", Horas trabalhadas: " + ho);
    }
    else{
        st = sa
        alert("Sálario total: " + st + ", Horas trabalhadas: " + ho);
    }
}