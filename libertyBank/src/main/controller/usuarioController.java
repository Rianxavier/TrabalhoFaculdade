package com.banco.libertyBank.controller;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.banco.libertyBank.projetoDAO.IUsuario;
import com.banco.libertyBank.model.usuario;

@RestController
public class usuarioController{

    @Autowired
    private IUsuario dao;

    @GetMapping("/usuarios")
    public List<usuarios> listaUsuarios(){
        return (List<usuarios>) dao.findAll();
    } 
}
