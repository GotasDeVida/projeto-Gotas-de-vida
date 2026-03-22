document.getElementById('formCadastro').addEventListener('submit', function(event) {
    // Impede o formulário de recarregar a página imediatamente
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const erroMsg = document.getElementById('mensagemErro');

    // Validação de senha
    if (senha !== confirmarSenha) {
        erroMsg.style.display = 'block';
        return; // Para a execução aqui
    } else {
        erroMsg.style.display = 'none';
    }

    // Se chegar aqui, está tudo certo
    console.log("Dados capturados:", { nome, email, senha });
    
    alert(`Olá ${nome}! Seu cadastro no Gotas de Vida foi simulado com sucesso.`);
    
    // Limpa o formulário
    this.reset();
});