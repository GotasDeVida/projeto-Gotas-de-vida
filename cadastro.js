document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (senha !== confirmar) {
        document.getElementById("mensagemErro").style.display = "block";
        return;
    }

    const usuario = {
        nome,
        email,
        senha,
        sexo
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "entrar.html";
});