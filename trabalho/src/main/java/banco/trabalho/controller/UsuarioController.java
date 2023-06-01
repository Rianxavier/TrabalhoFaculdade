package banco.trabalho.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import banco.trabalho.DAO.IUsuario;
import banco.trabalho.model.Usuario;

@RestController
public class UsuarioController {

    @Autowired
    private IUsuario dao;

    @GetMapping("/usuarios")
    public List<Usuario> listUsuarios() {
        return (List<Usuario>) dao.findAll();
    }

}