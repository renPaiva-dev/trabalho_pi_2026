var botao = document.querySelector('#uploadImagem');

botao.addEventListener('change', carregarImagem);

function carregarImagem() {

    var uploadImagem =
    document.querySelector('#uploadImagem');

    var resultado =
    document.querySelector('#resultado');

    var img =
    document.createElement('img');

    img.src = uploadImagem.value;

    resultado.innerHTML = "";

    resultado.appendChild(img);
}