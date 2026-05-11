
function getById(id) {
            return document.getElementById(id);
        }
function mostrarErro(id, mensagem) {

  let elemento = getById(id);

  elemento.innerText = mensagem;

  elemento.classList.remove("oculto");

  setTimeout(function () {
  elemento.classList.add("oculto");}, 3000);
}
getById("botaoErro").addEventListener("click", function () {
   mostrarErro("mensagemErro", "O campo deve ser preenchido");
});

var botaoExibir = document.querySelector('#botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);
function exibirErro(msg) {
    document.querySelector('#mensagemErro').innerHTML = msg;
}

function exibirConteudo() {
var conteudo = document.querySelector('#caixaDeTexto').value.trim();
if (conteudo === "") {
    exibirErro("O campo não pode ser vazio.");
    return;
}

document.querySelector('#conteudo').innerHTML = conteudo;
}