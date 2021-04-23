
var alterarSenhaIsActive = false;
var alterarEmailIsActive = false;
var textInput = "";

$(document).ready(function() {



});

function alterarSenha() {

    if (alterarSenhaIsActive === false && alterarEmailIsActive === false) {

        textInput = "<input type='text' class='input-alterar-atributo' placeholder='Senha atual' id='senhaAtual'> <br id='brAlterarSenha'>"
        textInput += "<input type='text' class='input-alterar-atributo' placeholder='Nova senha' id='novaSenha'>"
        textInput += "<input type='text' class='input-alterar-atributo' placeholder='Confirmar senha' id='confirmarNovaSenha'> <br id='brAlterarSenha'>"
        textInput += "<button class='botao-alterar-atributo' id='botaoAlterarSenha'>Alterar senha</button>"

        $("#divAlterarSenha").append(textInput);
        textInput = "";
        alterarSenhaIsActive = true;

    }
    else if (alterarSenhaIsActive === false && alterarEmailIsActive === true) {

        excluirAlterarEmail()

        textInput = "<input type='text' class='input-alterar-atributo' placeholder='Senha atual' id='senhaAtual'> <br id='brAlterarSenha'>"
        textInput += "<input type='text' class='input-alterar-atributo' placeholder='Nova senha' id='novaSenha'>"
        textInput += "<input type='text' class='input-alterar-atributo' placeholder='Confirmar senha' id='confirmarNovaSenha'> <br id='brAlterarSenha'>"
        textInput += "<button class='botao-alterar-atributo' id='botaoAlterarSenha'>Alterar senha</button>"

        $("#divAlterarSenha").append(textInput);
        textInput = "";
        alterarSenhaIsActive = true;

    }
    else {
        excluirAlterarSenha();
    }

}

function excluirAlterarSenha() {
        $("#senhaAtual").remove();
        $("#brAlterarSenha").remove();
        $("#novaSenha").remove();
        $("#confirmarNovaSenha").remove();
        $("#brAlterarSenha").remove();
        $("#botaoAlterarSenha").remove();
        alterarSenhaIsActive = false;
}

function alterarEmail() {

    if (alterarEmailIsActive === false && alterarSenhaIsActive === false) {

        textInput = "<input type='text' class='input-alterar-atributo-email' placeholder='Email atual' id='emailAtual'> <br id='brAlterarEmail'>";
        textInput += "<input type='text' class='input-alterar-atributo-email' placeholder='Email novo' id='emailNovo'> <br id='brAlterarEmail'>";
        textInput += "<button class='botao-alterar-atributo' id='botaoAlterarEmail'>Alterar email</button>"

        $("#divAlterarEmail").append(textInput);
        textInput = "";
        alterarEmailIsActive = true;

    }
    else if (alterarEmailIsActive === false && alterarSenhaIsActive === true) {

        excluirAlterarSenha();

        textInput = "<input type='text' class='input-alterar-atributo-email' placeholder='Email atual' id='emailAtual'> <br id='brAlterarEmail'>";
        textInput += "<input type='text' class='input-alterar-atributo-email' placeholder='Email novo' id='emailNovo'> <br id='brAlterarEmail'>";
        textInput += "<button class='botao-alterar-atributo' id='botaoAlterarEmail'>Alterar email</button>"

        $("#divAlterarEmail").append(textInput);
        textInput = "";
        alterarEmailIsActive = true;

    }
    else {
        excluirAlterarEmail();
    }
    
}

function excluirAlterarEmail() {
    $("#emailAtual").remove();
    $("#brAlterarEmail").remove();
    $("#emailNovo").remove();
    $("#brAlterarEmail").remove();
    $("#botaoAlterarEmail").remove();
    alterarEmailIsActive = false;
}