let btn = document.querySelector(".fa-eye");
let inputCpf = document.querySelector("#cpf");
let inputSenha = document.querySelector("#senha");
let botao = document.querySelector("#botao");

btn.addEventListener("click", verSenha);

function verSenha() {
    let inputSenha = document.querySelector("#senha");

    if (inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text");
    } else {
        inputSenha.setAttribute("type", "password");
    }
}

inputCpf.addEventListener("keyup", () => {
    let valorCpf = inputCpf.value;

    if (valorCpf.length > 3) {
        valorCpf = valorCpf.replace(/^(\d{3})(\d)/g, "$1.$2");
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})(\d)/g, "$1.$2.$3");
        valorCpf = valorCpf.replace(
            /^(\d{3})\.(\d{3})\.(\d{3})(\d)/g,
            "$1.$2.$3-$4"
        );
    }

    inputCpf.value = valorCpf;
});


let cpf = inputCpf.value;
let senha = inputSenha.value;

function logar() {
    fetch(`/usuarios?cpf=${cpf}&senha=${senha}`)
        .then(response => response.json())
        .then(data => {
            // Processar a resposta do servidor
            const resultado = data; // assume que o backend retorna diretamente um valor booleano
            console.log(resultado); // Exemplo: exibir no console o resultado da comparação
            if (resultado === true) {
                // A comparação é verdadeira
                // Faça algo aqui
            } else {
                // A comparação é falsa
                // Faça algo aqui
            }
        })
        .catch(error => {
            // Tratar erros na requisição
            console.error('Erro na requisição:', error);
        });
}




botao.addEventListener("click", function (event) {
    event.preventDefault();
    logar();
});
