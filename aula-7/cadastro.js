window.onload = function (e) {

    var btnCadastrar = document.getElementById("Cadastrar");

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtTelefone = document.getElementById("txtTelefone");

    var SLGenero = document.getElementById("SlGenero");

    var txtSenha = document.getElementById("txtSenha");

    txtNome.focus();

    btnCadastro.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;

        var sobrenome = txtSobrenome.value;

        var email = txtEmail.value;

        var telefone = txtTelefone.value;

        var genero = SLGenero.value;

        var senha = txtSenha.value;

        if (nome == "") {
            exibirMensagemErro("Informe o nome.");
        }
        else if (sobrenome == "") {
            exibirMensagemErro("Informe o sobrenome.");
        }
        else if (email == "") {
            exibirMensagemErro("Informe o email.");
        }
        else if (telefone == "") {
            exibirMensagemErro("Informe o telefone.");
        }
        else if (senha == "") {
            exibirMensagemErro("Informe a senha.")
        }
        else {
            realizarLogin(nome, sobrenome, email, telefone, genero, senha);
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
    function realizarLogin(nome, sobrenome, email, telefone, genero, senha) {

        alert("O cadastro fo feito pelo usuário " + email);
    }
}