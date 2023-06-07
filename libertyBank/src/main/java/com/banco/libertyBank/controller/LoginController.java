package com.banco.libertyBank.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.banco.libertyBank.model.Usuario;
import com.banco.libertyBank.repository.IUsuario;

@RestController
public class LoginController {

    @Autowired
    private IUsuario usuarioRepository;

    @GetMapping("/verificarCredencias")
    public boolean verificarCredenciais(@RequestParam("cpf") String cpf, @RequestParam("senha") String senha) {
        // Realize a comparação com os valores do banco de dados
        List<Usuario> usuarios = usuarioRepository.findByCpfAndSenha(cpf, senha);
        return !usuarios.isEmpty(); // retorna true se a lista não estiver vazia
    }
}

