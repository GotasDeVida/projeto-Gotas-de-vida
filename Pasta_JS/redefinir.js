const form = document.getElementById("formRedefinir");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailDigitado = document.getElementById("email").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    if (emailDigitado !== usuario.email) {
        alert("Email não encontrado!");
        return;
    }

    const novaSenha = prompt("Digite sua nova senha:");

    if (!novaSenha || novaSenha.length < 4) {
        alert("Senha inválida! (mínimo 4 caracteres)");
        return;
    }

    usuario.senha = novaSenha;

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Senha redefinida com sucesso!");

    window.location.href = "entrar.html";
});