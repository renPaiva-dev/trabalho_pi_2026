
var botaoCalcular =
document.querySelector('#botaoCalcular');

botaoCalcular.addEventListener(
    'click',
    calcularTaxa
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

function calcularTaxa() {

    var interacoes =
    document.querySelector('#interacoes').value.trim();

    var visualizacoes =
    document.querySelector('#visualizacoes').value.trim();

    if (interacoes === "" || visualizacoes === "") {

        exibirErro(
            "Preencha todos os campos."
        );

        return;
    }

    if (isNaN(interacoes) || isNaN(visualizacoes)) {

        exibirErro("Digite apenas números válidos.");

        return;
    }

    var taxa = (interacoes / visualizacoes) * 100;

    document.querySelector('#resultado').innerHTML = "Taxa de Engajamento: " + taxa.toFixed(2) + "%";
}