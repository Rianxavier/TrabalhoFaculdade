package com.banco.libertyBank.Service;

import org.springframework.stereotype.Service;
import com.banco.libertyBank.repository.IUsuario;
import com.banco.libertyBank.model.Usuario;
import java.util.List;


@Service
public class UsuarioService {

    private IUsuario repository;

    public UsuarioService(IUsuario repository){
        this.repository = repository;
    }

    public List<Usuario> listUsuarios(){
        List<Usuario> lista = repository.findAll();
        return lista;
    }
    
}
