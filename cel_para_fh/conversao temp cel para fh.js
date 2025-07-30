function conversaoA(){
    var cel = parseFloat(document.getElementById("cel").value);
    var fh = ((9*cel)+160) / 5
    alert("A temperatura digitada em celsius equivale a temperatura em fh: "+fh);
    console.log("Temp FH"+ fh)
}