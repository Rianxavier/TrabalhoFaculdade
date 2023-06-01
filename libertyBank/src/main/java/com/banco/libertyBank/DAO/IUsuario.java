package com.banco.libertyBank.DAO;

import org.springframework.data.repository.CrudRepository;
import com.banco.libertyBank.model.Usuario;


public interface IUsuario extends CrudRepository<Usuario, Integer> {
    
}