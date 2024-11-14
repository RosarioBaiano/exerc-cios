window.onload = function (e) {

    var btnEsqueceu = document.getElementById("btnEsqueceu");

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    btnEsqueceu.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Email obrigatório.");

        }
        else {
            realizarLogin(email);
        }
    };
    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }
    function realizarLogin(email) {

        alert("O login foi realizado pelo usuário " + email);
    }
}