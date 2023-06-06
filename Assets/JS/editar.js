let inputNome = document.querySelector('#nome');
let inputDataNascimento = document.querySelector('#nasc');
let inputCpf = document.querySelector('#cpf');
let inputCelular = document.querySelector('#number');
let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#senha');

const formulario = document.querySelector('.formulario');

function editar() {
    fetch("http://localhost:8080/usuarios", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
            id: 3,
            nome: inputNome.value,
            email: inputEmail.value,
            senha: inputSenha.value,
            numero: inputCelular.value,
            cpf: inputCpf.value,
            nascimento: inputDataNascimento.value
        })
    })
    .then(function(res) {
        console.log(res);
    })
    .catch(function(error) {
        console.log(error);
    });
};


function limpar(){
    inputNome.value = "";
    inputDataNascimento.value = "";
    inputCpf.value = "";
    inputCelular.value = "";
    inputEmail.value = "";
    inputSenha.value = "";
    inputConfirmarSenha.value = "";
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    editar();
    limpar();
});
