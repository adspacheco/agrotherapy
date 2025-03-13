document.getElementById('mensagem').addEventListener('input', function() {
    document.getElementById('charCount').textContent = this.value.length;
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome.trim().split(/\s+/).length < 2) {
        document.getElementById('nome').setCustomValidity('Por favor, insira nome e sobrenome');
    } else {
        document.getElementById('nome').setCustomValidity('');
    }
    
    if (mensagem.length < 30) {
        document.getElementById('mensagem').setCustomValidity('A mensagem deve ter no mínimo 30 caracteres');
    } else if (mensagem.length > 500) {
        document.getElementById('mensagem').setCustomValidity('A mensagem deve ter no máximo 500 caracteres');
    } else {
        document.getElementById('mensagem').setCustomValidity('');
    }
    
    if (this.checkValidity()) {
        document.getElementById('confirmedName').textContent = nome;
        document.getElementById('confirmedEmail').textContent = email;
        document.getElementById('confirmedMessage').textContent = mensagem;
        
        document.getElementById('formContainer').classList.add('d-none');
        document.getElementById('successMessage').classList.remove('d-none');
    }
    
    this.classList.add('was-validated');
});