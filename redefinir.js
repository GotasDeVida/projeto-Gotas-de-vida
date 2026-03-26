const form = document.getElementById("formRedefinir");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailDigitado = document.getElementById("email").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    // verifica se existe usuário
    if (!usuario) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    // verifica se o email bate
    if (emailDigitado !== usuario.email) {
        alert("Email não encontrado!");
        return;
    }

    // simulação de redefinição
    const novaSenha = prompt("Digite sua nova senha:");

    if (!novaSenha || novaSenha.length < 4) {
        alert("Senha inválida! (mínimo 4 caracteres)");
        return;
    }

    // atualiza senha
    usuario.senha = novaSenha;

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Senha redefinida com sucesso!");

    // redireciona pro login
    window.location.href = "entrar.html";
});