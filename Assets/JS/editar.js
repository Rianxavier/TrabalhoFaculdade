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
            id: 2,
            nome: inputNome.value,
            email: inputEmail.value,
            senha: inputSenha.value,
            numero: inputCelular.value,
            cpf: inputCpf.value,
            nascimento: inputDataNascimento.value
        })
    })
        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        });
};


function limpar() {
    inputNome.value = "";
    inputDataNascimento.value = "";
    inputCpf.value = "";
    inputCelular.value = "";
    inputEmail.value = "";
    inputSenha.value = "";
    inputConfirmarSenha.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    editar();
    limpar();
});


let apagar = document.querySelector('#apagar');
let id = document.querySelector('#id');

apagar.addEventListener('click', function (event) {
    event.preventDefault();
    apagarConta();
})

function apagarConta() {
    fetch(`http://localhost:8080/usuarios/${id.value}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(function (res) {
            if (res.ok) {
                console.log(`Usuário com ID ${id.value} deletado com sucesso!`);
            } else {
                console.log(`Erro ao deletar usuário com ID ${id.value}`);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
};
