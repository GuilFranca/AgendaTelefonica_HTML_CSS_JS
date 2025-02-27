const containerContatos = document.querySelector('.container__contato');

async function mostrarContatos() {
    try {
        const busca = await fetch('bank.json');
        
        // Verifica se a resposta foi bem-sucedida
        if (!busca.ok) {
            throw new Error('Falha ao carregar os contatos');
        }

        const contatos = await busca.json();

        // Verifica se a resposta JSON é um array
        if (!Array.isArray(contatos)) {
            throw new Error('Formato inválido de contatos');
        }

        // Adiciona cada contato ao HTML
        contatos.forEach((contato) => {
            containerContatos.innerHTML += `
            <div class="card__contato">
                <i class="ri-user-fill icon__user"></i>
                <h2 class="contato__nome">${contato.nome}</h2>
                <h2 class="contato__numero" hidden>${contato.numero}</h2>
                <i class="ri-pencil-line btn__editar"></i>
                <i class="ri-delete-bin-6-line btn__apagar"></i>
            </div>
            `;
        });
    } catch (error) {
        console.error('Erro ao carregar contatos:', error);
        // Opcional: Exibir uma mensagem de erro para o usuário
        containerContatos.innerHTML = `<p>Erro ao carregar os contatos.</p>`;
    }
}

mostrarContatos();
