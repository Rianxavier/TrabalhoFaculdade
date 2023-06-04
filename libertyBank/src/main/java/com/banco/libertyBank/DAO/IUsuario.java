package com.banco.libertyBank.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.banco.libertyBank.model.Usuario;

@Repository
public interface IUsuario extends CrudRepository<Usuario, Integer> {

    Usuario findByCpfAndSenha(String cpf, String senha);


}
