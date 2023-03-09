function ImprimirTabuada(n){
    for (var i = 1; i <= 10; i++){
        var linha = n + " * " + i + " = " + n * i;
           //alert("" + linha)
            console.log(linha);
    }
}
    for (var i = 1; i <= 10; i++){
        ImprimirTabuada(i);
        console.log("");
    }

    module.export=ImprimirTabuada