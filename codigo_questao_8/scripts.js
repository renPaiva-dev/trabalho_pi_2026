
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

    var lista =
    document.querySelector('#listaHashtags');


    if (hashtag === "") {

        exibirErro(
            "Digite uma hashtag."
        );

        return;
    }


    if (hashtag.length < 2) {

        exibirErro(
            "A hashtag deve ter pelo menos 2 caracteres."
        );

        return;
    }


    if (lista.options.length >= 5) {

        exibirErro(
            "Limite de 5 hashtags atingido."
        );

        return;
    }

    for (var i = 0; i < lista.options.length; i++) {

        if (
            lista.options[i].text.toLowerCase()
            ===
            hashtag.toLowerCase()
        ) {

            exibirErro(
                "Hashtag já cadastrada."
            );

            return;
        }
    }

    var option =
    document.createElement('option');

    option.text = hashtag;

    lista.appendChild(option);

    document.querySelector('#hashtag').value = "";
}