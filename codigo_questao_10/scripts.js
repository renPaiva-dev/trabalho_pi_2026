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

function moverParaDireita() {

    var origem =
    document.querySelector('#ativosDisponiveis');

    var destino =
    document.querySelector('#carteiraInvestimentos');

    var selecionados =
    origem.selectedOptions;

    for (
        var i = selecionados.length - 1;
        i >= 0;
        i--
    ) {

        destino.appendChild(
            selecionados[i]
        );
    }
}

function moverParaEsquerda() {

    var origem =
    document.querySelector('#carteiraInvestimentos');

    var destino =
    document.querySelector('#ativosDisponiveis');

    var selecionados =
    origem.selectedOptions;

    for (
        var i = selecionados.length - 1;
        i >= 0;
        i--
    ) {

        destino.appendChild(
            selecionados[i]
        );
    }
}