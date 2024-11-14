window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var txt1 = document.getElementById("caixaDeTextoNome");

    btn1.onclick = function (e) {

        var nome = caixaDeTextoNome.value;

        olaMundoPersonalizado(nome);
    }
    function olaMundoPersonalizado(nome) {
        var data = "";

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                var mensagem = this.responseText;

                alert(mensagem);
            }
        });

        xhr.open("GET", "https://localhost:44329/api/aula8/olaMundoPersonalizado?nome=" + nome);

        xhr.send();
    }
}