package com.banco.libertyBank.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Conexao {

    private static final String URL = "jdbc:mysql://localhost:3306/liberty";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "Leo50799";

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

    public static PreparedStatement prepareStatement(String sql) {
        return null;
    }
}
