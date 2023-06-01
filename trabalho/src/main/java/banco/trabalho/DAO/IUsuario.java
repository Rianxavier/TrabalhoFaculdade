package banco.trabalho.DAO;

import org.springframework.data.repository.CrudRepository;

import banco.trabalho.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer> {
    
}
