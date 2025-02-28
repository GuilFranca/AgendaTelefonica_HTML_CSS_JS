const containerContatos = document.querySelector('.container__contato');

async function mostrarContatos() {
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
                        <i class="ri-pencil-line btn__editar"></i>
                        <i class="ri-delete-bin-6-line btn__apagar"></i>
                    </div>
                    `
            });

        });
    })
}

mostrarContatos();