const containerContatos = document.querySelector('.container__contato');
const btnAdd = document.querySelector('.btn__add');

function mostrarContatos() {
    // Consumindo os dados do arquivo Json
    fetch("bank.json").then((response) => {
        response.json().then((dados) => {

            console.log(dados.contatos);

            dados.contatos.forEach((contato) => {
                containerContatos.innerHTML += `
                    <div class="card__contato">
                        <i class="ri-user-fill icon__user"></i>
                        <h2 class="contato__nome">${contato.nome}</h2>
                        <h2 class="contato__numero" hidden>${contato.numero}</h2>
                        <i class="ri-delete-bin-6-line btn__apagar"></i>
                    </div>
                    `
            });

        });
    })
}

mostrarContatos();

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
