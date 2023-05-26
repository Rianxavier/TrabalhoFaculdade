let btnVerSenha = document.querySelector('#verSenha');
let btnVerConfSenha = document.querySelector('#verConfSenha');

let inputCpf = document.querySelector('#cpf');
let inputCelular = document.querySelector('#number');

let inputConfirmarSenha = document.querySelector('#confirmarsenha');
let labelConfirmarSenha = document.querySelector('#labelConfSenha');
let inputSenha = document.querySelector('#senha');


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

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
        
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return this.cpfLimpo === novoCpf;

    
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia =  function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}


inputCpf.addEventListener('keyup', () => {
    let valorCpf = inputCpf.value;
    
    const cpf = new ValidaCPF(valorCpf)
    if(cpf.valida()) {
        inputCpf.setAttribute('style', 'border-color: #006494')
    }else{
        inputCpf.setAttribute('style', 'border-color: red')
    }
    if(valorCpf.length == 0){
        inputCpf.setAttribute('style', 'border-color: #006494')
    }
    
    if (valorCpf.length > 3) {
        valorCpf = valorCpf.replace(/^(\d{3})(\d)/g, '$1.$2');
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
      }

    inputCpf.value = valorCpf
})

inputCelular.addEventListener('keyup', () => {
    let valorCelular = inputCelular.value;

    if (valorCelular.length >= 2 ){
        valorCelular = valorCelular.replace(/^(\d{2})(\d)/g, '($1)$2');
        valorCelular = valorCelular.replace(/^(\d{2})\.(\d{5})(\d)/g, '($1)$2.$3');        
    }
    
    inputCelular.value = valorCelular; 
})

inputConfirmarSenha.addEventListener('keyup', () => {
    if (inputSenha.value !== inputConfirmarSenha.value){
        inputConfirmarSenha.setAttribute('style', 'color: red');
        inputConfirmarSenha.setAttribute('style', 'border-color: red');
    }else{
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #006494');
    }
    if(inputConfirmarSenha.value.length == 0){
        inputConfirmarSenha.setAttribute('style', 'color: black');
        inputConfirmarSenha.setAttribute('style', 'border-color: #006494');
    }
})

// let dataNasci = document.querySelector('#nasc');

// dataNasci.setAttribute('placeholder', 'Data de Nascimento');

  