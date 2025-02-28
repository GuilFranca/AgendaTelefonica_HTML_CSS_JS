const containerContatos = document.querySelector('.container__contato');
const btnAdd = document.querySelector('.btn__add');
let contatos = [
    {
        "nome": "Guilherme França",
        "numero": 30362009
    },
    {
        "nome": "Michael jackson da silva",
        "numero": 12345678
    },
    {
        "nome": "Robert Anderson",
        "numero": 12375678
    },
    {
        "nome": "Lucas",
        "numero": 15486238
    }
]

function mostrarContatos() {
    contatos.forEach((contato) => {
        containerContatos.innerHTML += `
                    <div class="card__contato">
                        <i class="ri-user-fill icon__user"></i>
                        <h2 class="contato__nome">${contato.nome}</h2>
                        <h2 class="contato__numero" hidden>${contato.numero}</h2>
                        <i class="ri-delete-bin-6-line btn__apagar"></i>
                    </div>
                    `
    });
}

mostrarContatos();

// Apagar contato
containerContatos.addEventListener("click", function (event) {
    if (event.target.classList.contains('btn__apagar')) {
        const cardContato = event.target.closest('.card__contato');
        const contatoNomeApagar = cardContato.querySelector('.contato__nome').innerText;

        // Remove o contato da lista de contatos
        contatos = contatos.filter(contato => contato.nome !== contatoNomeApagar);

        // Atualiza a interface
        containerContatos.innerHTML = '';

        mostrarContatos();

        console.log(contatos); // Exibe a lista atualizada no console
    }
})


// Modla
const btnsModalVisualizar = document.querySelector('.contato__nome');
const modal = document.querySelector('.modal__visualizar');

// Visualizar contato
containerContatos.addEventListener("click", function (event) {
    if (event.target.classList.contains('contato__nome')) {
        modal.showModal();
        modal.style.display = 'flex';

        const cardContatoVisualizar = event.target.closest('.card__contato');
        const contatoVisualizarNome = cardContatoVisualizar.querySelector('.contato__nome');
        const contatoVisualizarNumero = cardContatoVisualizar.querySelector('.contato__numero');

        modal.innerHTML = `
        <h2 class="modal__visualizar__descricao nome"><span><i class="ri-user-fill"></i></span>${contatoVisualizarNome.innerText}</h2>
        <h2 class="modal__visualizar__descricao numero"><span><i class="ri-phone-fill"></i></span>${contatoVisualizarNumero.innerText}</h2>
        <div class="container__btns__modal">
            <button class="btn__modal abrir__editar">Editar</button>
            <button class="btn__modal cancelar">Fechar</button>
        </div>
        `
    }
    const btnCancelar = document.querySelector('.cancelar');
    modal.addEventListener("click", function (event) {
        if (event.target === btnCancelar) {
            modal.close();
            modal.style.display = 'none';
        }
    });
})
