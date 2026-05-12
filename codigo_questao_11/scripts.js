var moverDireita =
document.querySelector('#moverParaDireitaBtn');

var moverEsquerda =
document.querySelector('#moverParaEsquerdaBtn');

moverDireita.addEventListener(
    'click',
    moverParaDireita
);

moverEsquerda.addEventListener(
    'click',
    moverParaEsquerda
);

atualizarBotoes();

function exibirErro(msg) {

    alert(msg);
}

function moverParaDireita() {

    var origem =
    document.querySelector('#ativosDisponiveis');

    var destino =
    document.querySelector('#carteiraInvestimentos');

    var selecionados =
    origem.selectedOptions;

    if (selecionados.length === 0) {

        exibirErro(
            'Selecione pelo menos um ativo.'
        );

        return;
    }

    for (
        var i = selecionados.length - 1;
        i >= 0;
        i--
    ) {

        destino.appendChild(
            selecionados[i]
        );
    }

    atualizarBotoes();
}

function moverParaEsquerda() {

    var origem =
    document.querySelector('#carteiraInvestimentos');

    var destino =
    document.querySelector('#ativosDisponiveis');

    var selecionados =
    origem.selectedOptions;

    if (selecionados.length === 0) {

        exibirErro(
            'Selecione pelo menos um ativo.'
        );

        return;
    }

    for (
        var i = selecionados.length - 1;
        i >= 0;
        i--
    ) {

        destino.appendChild(
            selecionados[i]
        );
    }

    atualizarBotoes();
}

function atualizarBotoes() {

    var ativosDisponiveis =
    document.querySelector('#ativosDisponiveis');

    var carteira =
    document.querySelector('#carteiraInvestimentos');

    moverDireita.disabled =
    ativosDisponiveis.options.length === 0;

    moverEsquerda.disabled =
    carteira.options.length === 0;
}