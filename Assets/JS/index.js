let btn = document.querySelector('.fa-eye');
let inputCpf = document.querySelector('#cpf')

btn.addEventListener("click", verSenha);

function verSenha() {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
}

inputCpf.addEventListener('keyup', () => {
    let valorCpf = inputCpf.value;
    
    if (valorCpf.length > 3) {
        
        valorCpf = valorCpf.replace(/^(\d{3})(\d)/g, '$1.$2');
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
        valorCpf = valorCpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
      }

    inputCpf.value = valorCpf
})

