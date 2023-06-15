// import {ValidaCPF} from './classValidaCPF';
//Variaveis 
let btnVerSenha = document.querySelector('#verSenha');
let btnVerConfSenha = document.querySelector('#verConfSenha');

const formulario = document.querySelector('.formulario');

let inputNome = document.querySelector('#nome');
let inputDataNascimento = document.querySelector('#nasc');
let inputCpf = document.querySelector('#cpf');
let inputCelular = document.querySelector('#number');
let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#senha');

let inputConfirmarSenha = document.querySelector('#confirmarsenha');
let labelConfirmarSenha = document.querySelector('#labelConfSenha');

let checkbox = document.querySelector('#accept');
let checkboxLabel = document.querySelector('#checkboxLabel');

let msgErrorCampo = document.querySelector('.errorCampos');
let msgErrorCheck = document.querySelector('.errorPrivacidade');

let cpfVerifica = false;
let senhaVerifica = false;

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

// class para validação do CPF
class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
      });
    }
  
    eSequencia() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    valida() {
      if(!this.cpfLimpo) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.eSequencia()) return false;
      this.geraNovoCpf();
    
  
      return this.novoCPF === this.cpfLimpo;
    }
  }

  inputCpf.addEventListener('keypress', function(e) {
    const key = e.key;

    if (isNaN(key)) {
        e.preventDefault();
    }
  } );

  inputCpf.addEventListener('keyup', () => {
    let valorCpf = inputCpf.value;
    
    const cpf = new ValidaCPF(valorCpf);

    if(cpf.valida()) {
        inputCpf.setAttribute('style', 'border-color: #006494')
        cpfVerifica = true;
    }else{
        inputCpf.setAttribute('style', 'border-color: red')
        cpfVerifica = false;
    }
    if(inputCpf.length == 0){
        inputCpf.setAttribute('style', 'border-color: #006494')
        cpfVerifica = false;
    }
    
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

formulario.addEventListener('submit', function(event) {
    event.preventDefault();


    
    if (!senhaVerifica || !cpfVerifica || inputNome.length === 0 || inputDataNascimento.length === 0 || inputEmail.length === 0 || inputSenha.length === 0 || inputCelular.length === 0) {
        msgErrorCampo.setAttribute('style', 'display:block');
        msgErrorCheck.setAttribute('style', 'display:none');
    }
    else if (!checkbox.checked) {
        msgErrorCheck.setAttribute('style', 'display:block');
        msgErrorCampo.setAttribute('style', 'display:none');
        checkboxLabel.setAttribute('style', 'color: red');
    }
    else{
        checkboxLabel.setAttribute('style', 'color: #006494');
        msgErrorCampo.setAttribute('style', 'display:none');
        msgErrorCheck.setAttribute('style', 'display:none');
        cadastrar();
        limpar();
        window.location.href = "../html/conta.html";
    }
});

function cadastrar() {
    fetch("http://localhost:8080/usuarios", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
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
 
