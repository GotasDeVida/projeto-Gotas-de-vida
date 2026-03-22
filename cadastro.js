document.getElementById('formCadastro').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const erroMsg = document.getElementById('mensagemErro');
    
    if (senha !== confirmarSenha) {
        erroMsg.style.display = 'block';
        return; 
    } else {
        erroMsg.style.display = 'none';
    }

    console.log("Dados capturados:", { nome, email, senha });
    
    alert(`Olá ${nome}! Seu cadastro no Gotas de Vida foi concluído com sucesso.`);
    
    
    this.reset();
});
