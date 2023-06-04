package com.banco.libertyBank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banco.libertyBank.DAO.IUsuario;
import com.banco.libertyBank.model.Usuario;

public class autenticador {

    private final IUsuario usuarioAutenticado;

    @Autowired
    public autenticador(IUsuario usuarioAutenticado){
        this.usuarioAutenticado = usuarioAutenticado;
    }

    public boolean verificarLogin(String cpf, String senha){
        Usuario usuario = usuarioAutenticado.findByCpfAndSenha(cpf, senha);
        return usuario != null;

    }
    
}
