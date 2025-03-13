document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.checkValidity()) {
        const dados = {
            nome: document.getElementById('nomeVisita').value,
            email: document.getElementById('emailVisita').value,
            data: document.getElementById('dataVisita').value,
            numeroVisitantes: document.getElementById('numeroVisitantes').value,
            observacoes: document.getElementById('observacoes').value
        };

        const modalBody = this.closest('.modal-body');
        
        this.style.display = 'none';
        
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success mt-3';
        successMessage.innerHTML = `
            <h4 class="alert-heading">Agendamento Realizado com Sucesso!</h4>
            <p>Obrigado por agendar sua visita ao Sítio Feliz. Em breve você receberá um e-mail com a confirmação.</p>
            <hr>
            <p class="mb-0">Dados do agendamento:</p>
            <ul class="list-unstyled">
                <li><strong>Nome:</strong> ${dados.nome}</li>
                <li><strong>Data:</strong> ${new Date(dados.data).toLocaleDateString()}</li>
                <li><strong>Número de visitantes:</strong> ${dados.numeroVisitantes}</li>
            </ul>
        `;
        modalBody.appendChild(successMessage);

        document.querySelector('button[form="agendamentoForm"]').disabled = true;
    }

    this.classList.add('was-validated');
});

const dataVisita = document.getElementById('dataVisita');
const hoje = new Date().toISOString().split('T')[0];
dataVisita.min = hoje;
