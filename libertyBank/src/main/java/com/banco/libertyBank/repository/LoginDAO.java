package com.banco.libertyBank.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginDAO {

    public boolean autenticar(String cpf, String senha) {
        String query = "SELECT * FROM usuarios WHERE cpf = ? AND senha = ?";
        try (Connection connection = Conexao.getConnection();
             PreparedStatement statement = connection.prepareStatement(query)) {

            statement.setString(1, cpf);
            statement.setString(2, senha);

            try (ResultSet resultSet = statement.executeQuery()) {
                return resultSet.next(); // Retorna true se encontrou um registro correspondente
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}

