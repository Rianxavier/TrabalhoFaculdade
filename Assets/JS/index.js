// script.js

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

function logar() {
  let cpf = inputCpf.value;
  let senha = inputSenha.value;

  const request = {
    cpf: cpf,
    senha: senha
  };

  fetch("/verificarCredenciais/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(request)
  })
    .then((response) => response.json())
    .then((data) => {
      const resultado = data.success;
      console.log(resultado);

      if (resultado) {
        console.log("Login bem-sucedido");
      } else {
        console.log("Login inválido");
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}

botao.addEventListener("click", function (event) {
  logar();
});