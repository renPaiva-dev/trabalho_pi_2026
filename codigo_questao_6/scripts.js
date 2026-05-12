var botao =
document.querySelector('#enviarBtn');

botao.addEventListener('click', verificarRedes);

function exibirErro(msg) {

    var erro =
    document.querySelector('#mensagemErro');

    erro.innerHTML = msg;

    erro.classList.remove('oculto');

    setTimeout(function() {
        erro.classList.add('oculto');
    }, 3000);
}

function verificarRedes() {

    var redes =
    document.getElementsByName('redesSociais');

    var selecionadas = [];

    for (var i = 0; i < redes.length; i++) {

        if (redes[i].checked) {

            selecionadas.push(
                redes[i].value
            );
        }
    }

    if (selecionadas.length === 0) {

        exibirErro(
            'Selecione pelo menos uma rede social.'
        );

        return;
    }

    document.querySelector('#redesSelecionadas')
    .innerHTML =
    'Redes selecionadas: ' +
    selecionadas.join(', ');
}