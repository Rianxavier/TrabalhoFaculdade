let inputNome = document.querySelector('#nome');
let inputDataNascimento = document.querySelector('#nasc');
let inputCpf = document.querySelector('#cpf');
let inputCelular = document.querySelector('#number');
let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#senha');

let btnVerSenha = document.querySelector('#verSenha');
let btnVerConfSenha = document.querySelector('#verConfSenha');
let inputConfirmarSenha = document.querySelector('#confirmarsenha');

const formulario = document.querySelector('.formulario');
let msgErrorCampo = document.querySelector('.errorCampos');

let apagar = document.querySelector('#apagar');
let id = document.querySelector('#id');

let btnEditar = document.querySelector('.btn-editar');

btnVerSenha.addEventListener("click", verSenha);
btnVerConfSenha.addEventListener("click", verConfirmarSenha);

function verSenha() {    
    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }   
}

function verConfirmarSenha() {
    if (inputConfirmarSenha.getAttribute('type') == 'password') {
        inputConfirmarSenha.setAttribute('type', 'text')
    }else {
        inputConfirmarSenha.setAttribute('type', 'password')
    }
}

inputSenha.addEventListener("keyup", () =>{
    if (inputSenha.value !== inputConfirmarSenha.value){
        inputConfirmarSenha.setAttribute('style', 'color: red');
        inputConfirmarSenha.setAttribute('style', 'border-color: red');
        senhaVerifica = false;
    }else{
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #006494');
        senhaVerifica = true;
    }
    if(inputConfirmarSenha.value.length == 0){
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #006494');
        senhaVerifica = false;
    }
});

inputConfirmarSenha.addEventListener('keyup', () => {
    if (inputSenha.value !== inputConfirmarSenha.value){
        inputConfirmarSenha.setAttribute('style', 'color: red');
        inputConfirmarSenha.setAttribute('style', 'border-color: red');
        senhaVerifica = false;
    }else{
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #006494');
        senhaVerifica = true;
    }
    if(inputConfirmarSenha.value.length == 0){
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #006494');
        senhaVerifica = false;
    }
})


inputCpf.addEventListener('keyup', () => {
    let valorCpf = inputCpf.value;
    
    if (valorCpf.length > 3) {
        valorCpf = valorCpf.replace(/^(\d{3})(\d)/g, '$1.$2');
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
      }

    inputCpf.value = valorCpf
}) 

inputCelular.addEventListener('keypress', function(e) {
    const key = e.key;

    if (isNaN(key)) {
        e.preventDefault();
    }
  });

inputCelular.addEventListener('keyup', () => {
    let valorCelular = inputCelular.value;

    if (!valorCelular) return ""
    valorCelular = valorCelular.replace(/\D/g,'')
    valorCelular = valorCelular.replace(/(\d{2})(\d)/,"($1) $2")
    valorCelular = valorCelular.replace(/(\d)(\d{4})$/,"$1-$2")
  
    
    inputCelular.value = valorCelular; 
})

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

btnEditar.addEventListener('click', function (event) {
    event.preventDefault();
    if (!senhaVerifica || inputCelular.length === 0) {
        msgErrorCampo.setAttribute('style', 'display:block');
    }else{
        editar();
        limpar();
    }
    
});



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

apagar.addEventListener('click', function (event) {
    event.preventDefault();
    apagarConta();
})