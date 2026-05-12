var botao = document.querySelector('#carregarImagem');
botao.addEventListener('click', carregarImagem);

function carregarImagem() {

    var uploadImagem =
    document.querySelector('#uploadImagem');

    var arquivoSelecionado = uploadImagem.files[0];

    var resultado = document.querySelector('#resultado');

    var img = document.createElement('img');

    img.src = URL.createObjectURL(arquivoSelecionado);

    resultado.appendChild(img);
}