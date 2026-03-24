const usuario = JSON.parse(localStorage.getItem("usuario"));

// Se não estiver logado
if (!usuario) {
    alert("Você precisa fazer login!");
    window.location.href = "entrar.html";
}

// Mensagem de boas-vindas
document.getElementById("bemVindo").innerText =
    "Bem-vindo, " + usuario.nome + "!";

// CALCULAR DATA
function calcular() {
    const dataInput = document.getElementById("dataDoacao").value;

    if (!dataInput) {
        alert("Selecione uma data!");
        return;
    }

    const data = new Date(dataInput);
    const proxima = new Date(data);

    if (usuario.sexo === "Masculino") {
        proxima.setMonth(proxima.getMonth() + 2);
    } else if (usuario.sexo === "Feminino") {
        proxima.setMonth(proxima.getMonth() + 3);
    }

    const hoje = new Date();
    let mensagem = "";

    if (proxima <= hoje) {
        mensagem = "Você já pode doar novamente! 🩸";
    } else {
        const formatada = proxima.toLocaleDateString("pt-BR");
        mensagem = "Você poderá doar novamente em: " + formatada;
    }

    document.getElementById("resultado").innerText = mensagem;
}