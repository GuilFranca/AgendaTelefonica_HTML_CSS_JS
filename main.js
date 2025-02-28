const containerContatos = document.querySelector('.container__contato');
const bodyPage = document.querySelector('body');
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
let contatoEditando = {}

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
bodyPage.addEventListener("click", function (event) {

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
        const btnCancelar = document.querySelector('.cancelar');
        modal.addEventListener("click", function (event) {
            if (event.target === btnCancelar) {
                modal.close();
                modal.style.display = 'none';
            }
        });

    } else if (event.target.classList.contains('btn__add')) {
        modal.showModal();
        modal.style.display = 'flex';
        modal.innerHTML = `
        <h1 class="titulo__modal">Criar contato</h2>
        <input type="text" class="input__modal input__nome" placeholder="Nome">
        <input type="number" class="input__modal input__numero" placeholder="Número">
        <div class="container__btns__modal">
            <button class="btn__modal criar">Criar</button>
            <button class="btn__modal cancelar">Cancelar</button>
        </div>
        `

        const btnCriar = document.querySelector('.criar');
        btnCriar.addEventListener('click', function () {
            const criarNome = document.querySelector('.input__nome');
            const criarNumero = document.querySelector('.input__numero');

            const nome = criarNome.value;
            const numero = criarNumero.value;

            contatos.push({ nome, numero });

            containerContatos.innerHTML = '';

            mostrarContatos();

            console.log(contatos);
        })

        const btnCancelar = document.querySelector('.cancelar');
        modal.addEventListener("click", function (event) {
            if (event.target === btnCancelar) {
                modal.close();
                modal.style.display = 'none';
            }
        });

    } else if (event.target.classList.contains('abrir__editar')) {
        modal.showModal();
        modal.style.display = 'flex';

        const cardEdicao = event.target.closest('.modal__visualizar');
        const edicaoNome = cardEdicao.querySelector('.nome');
        const edicaoNumero = cardEdicao.querySelector('.numero');

        modal.innerHTML = `
        <h1 class="titulo__modal">Editar contato</h2>
        <input type="text" class="input__modal input__nome">
        <input type="number" class="input__modal input__numero">
        <div class="container__btns__modal">
            <button class="btn__modal editar">Editar</button>
            <button class="btn__modal cancelar">Cancelar</button>
        </div>
        `
        const inputNome = document.querySelector('.input__nome');
        const inputNumero = document.querySelector('.input__numero');

        inputNome.value = edicaoNome.innerText;
        inputNumero.value = edicaoNumero.innerText;

        antigoNome = edicaoNome.innerText;
        antigoNumero = edicaoNumero.innerText;

        // Armazena o contato que está sendo editado
        contatoEditando = { nome: antigoNome, numero: antigoNumero };

        console.log(antigoNome);
        console.log(antigoNumero);
        console.log(contatoEditando);

        const btnEditar = document.querySelector('.editar');
        btnEditar.addEventListener('click', function () {
            console.log(contatoEditando);

            const novoNome = document.querySelector('.input__nome');
            const novoNumero = document.querySelector('.input__numero');



            const formatadoNovoNome = novoNome.value;
            const formatadoNovoNumero = novoNumero.value;

            console.log(antigoNome);
            console.log(antigoNumero);

            console.log(formatadoNovoNome);
            console.log(formatadoNovoNumero);



            if (novoNome && novoNumero) {
                const index = contatos.findIndex(contato => contato.nome == contatoEditando.nome && contato.numero == contatoEditando.numero);

                // Atualiza o contato na lista
                if (index !== -1) {
                    contatos[index] = { nome: formatadoNovoNome, numero: formatadoNovoNumero };
                }

                containerContatos.innerHTML = '';

                // Atualiza a interface
                mostrarContatos();

                // Fecha o modal de edição
                modal.close();
                modal.style.display = 'none';

            }
        })


        const btnCancelar = document.querySelector('.cancelar');
        modal.addEventListener("click", function (event) {
            if (event.target === btnCancelar) {
                modal.close();
                modal.style.display = 'none';
            }
        });
    }

})
