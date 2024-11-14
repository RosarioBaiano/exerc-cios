window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function (e) {

        var mensagem = "Olá Mundo";

        exibirMensagem(mensagem);
    };

    function exibirMensagem(mensagem) {

        alert(mensagem);
    }
}