package com.banco.libertyBank.model;

import java.sql.Date;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Columns;
import org.hibernate.mapping.Column;
import org.hibernate.type.descriptor.jdbc.TinyIntAsSmallIntJdbcType;

import jakarta.persistence.Access;
import jakarta.persistence.AccessType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import javax.persistence.Column;

@Entity
@Access(AccessType.FIELD)
@Table(name = "novoCliente")
public class usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nome", length = 150, nullable = true)
    private String nome;
    
    @Column(name = "nascimento")
    private Date nascimento;
    
    @Column(name = "cpf", length = 14, nullable = true)
    private String cpf;

    @Column(name = "numero", length = 13, nullable = true)
    private String numero;

    @Column(name = "email", length = 150, nullable = true)
    private String email;
    
    @Column(name = "senha", length = 150, nullable = true)
    private String senha;
    
    @Column(name = "confirmarsenha", length = 150, nullable = true)
    private String confirmarSenha;
    
    @Column(name = "aceite")
    private TinyIntAsSmallIntJdbcType aceite;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getConfirmarSenha() {
        return confirmarSenha;
    }

    public void setConfirmarSenha(String confirmarSenha) {
        this.confirmarSenha = confirmarSenha;
    }

    public TinyIntAsSmallIntJdbcType getAceite() {
        return aceite;
    }

    public void setAceite(TinyIntAsSmallIntJdbcType aceite) {
        this.aceite = aceite;
    }    
}