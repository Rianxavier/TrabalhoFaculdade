package banco.trabalho.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="usuario")

public class Usuario {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)

    @Column(name = "id")
    private Integer id;

    @Column(name = "nome", length = 200, nullable = true)
    private String nome;

    @Column(name = "email", length = 100, nullable = true)
    private String email;

    @Column(name = "senha", length = 50, nullable = true)
    private String senha;

    /*@Column(name = "confirmarSenha", length = 50, nullable = true)
    private String confirmarSenha;*/

    @Column(name = "numero", length = 15, nullable = true)
    private String numero;

    @Column(name = "cpf", length = 15, nullable = true)
    private String cpf;

    @Column(name = "nascimento", nullable = true)
    private String nascimento;

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

    public String getNumero() {
        return numero;
    }
    public void setNumero(String numero) {
        this.numero = numero;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getNascimento() {
        return nascimento;
    }
    public void setNascimento(String nascimento) {
        this.nascimento = nascimento;
    }
}

