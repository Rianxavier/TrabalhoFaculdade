package com.banco.libertyBank.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.banco.libertyBank.model.Usuario;
import java.util.List;


public interface IUsuario extends JpaRepository<Usuario, Integer> {
    List<Usuario>findByCpfAndSenha(String cpf, String senha);
}