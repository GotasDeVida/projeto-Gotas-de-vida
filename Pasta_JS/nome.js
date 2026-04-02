document.addEventListener("DOMContentLoaded", function () {

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const btnEntrar = document.getElementById("btn-entrar");
    const usuarioBox = document.getElementById("usuario-logado");
    const nomeUsuario = document.getElementById("nome-usuario");
    const logout = document.getElementById("logout");

    if (usuario && btnEntrar && usuarioBox) {

        // esconde botão entrar
        btnEntrar.style.display = "none";

        // mostra área do usuário
        usuarioBox.style.display = "inline-flex";
        usuarioBox.style.alignItems = "center";
        usuarioBox.style.gap = "10px";

        // nome clicável → área do usuário
        nomeUsuario.innerText = "Olá, " + usuario.nome + " !!";
        nomeUsuario.style.cursor = "pointer";

        nomeUsuario.addEventListener("click", function () {
            window.location.href = "area.html";
        });

        // botão sair
        logout.style.cursor = "pointer";

        logout.addEventListener("click", function () {

            const confirmar = confirm("Deseja sair da conta?");

            if (confirmar) {
                localStorage.removeItem("usuario");
                window.location.href = "index.html";
            }

        });
    }

});
