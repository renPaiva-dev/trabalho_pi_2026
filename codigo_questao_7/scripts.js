
var botao =
document.querySelector('#adicionarBtn');

botao.addEventListener(
    'click',
    adicionarHashtag
);

function exibirErro(msg) {

    var erro =
    document.querySelector('#mensagemErro');

    erro.innerHTML = msg;

    erro.classList.remove('oculto');

    setTimeout(function() {
        erro.classList.add('oculto');
    }, 3000);
}

function adicionarHashtag() {

    var hashtag =
    document.querySelector('#hashtag')
    .value
    .trim();

    if (hashtag === "") {

        exibirErro(
            "Digite uma hashtag."
        );

        return;
    }

    var option =
    document.createElement('option');

    option.text = hashtag;

    var lista =
    document.querySelector('#listaHashtags');

    lista.appendChild(option);

    document.querySelector('#hashtag').value = "";
}
