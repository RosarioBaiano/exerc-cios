window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var numeroTexto = document.getElementById("txt1").value;

        var numero = parseInt(numeroTexto);

        var calculo = raizQuadrada(numero);

        alert(calculo);
    };

    function raizQuadrada(numero) {

        var raiz = numero * numero;

        return raiz;
    }
   
}