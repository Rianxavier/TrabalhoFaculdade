package com.banco.libertyBank.projetoDAO;

import org.springframework.data.repository.CrudRepository;
import com.banco.libertyBank.model;

public interface IUsuario extends CrudRepository<usuario, Integer> {
    
}
