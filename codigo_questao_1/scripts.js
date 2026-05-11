
        function getById(id) {
            return document.getElementById(id);
        }
        function mostrarErro(id, mensagem) {

            let elemento = getById(id);

            elemento.innerText = mensagem;

            elemento.classList.remove("oculto");

            setTimeout(function () {
                elemento.classList.add("oculto");
            }, 3000);
        }
        getById("botaoErro").addEventListener("click", function () {
            mostrarErro(
                "mensagemErro",
                "O campo deve ser preenchido"
            );

        });