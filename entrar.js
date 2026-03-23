function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && email === usuario.email && senha === usuario.senha) {
        alert("Login realizado!");

        window.location.href = "area.html";
    } else {
        alert("Email ou senha incorretos");
    }
}